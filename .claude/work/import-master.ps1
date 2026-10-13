param(
  [Parameter(Mandatory)] [string]$Xlsx,   # master workbook downloaded from the dashboard and edited in Excel
  [switch]$Apply                          # without -Apply: report the changes only; with it: rewrite the data files
)
# Imports the master Excel workbook (dashboard "Master Excel" button) back into the dashboard data files:
#   quant-data.js  (Companies)          tier-overrides.js (Tier / Override columns)
#   quant-rounds.js (Funding rounds, Shareholders, Profile notes)   ipo-status.js (IPO columns)
# Removed companies are also appended to name-map.csv. Prices, shares and history for "tracker" rows stay
# with the price tracker (index.html) and are not taken from the workbook.
$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$utf8 = New-Object Text.UTF8Encoding $false
$TIERS = 'Anchor','Conviction','Tail','Watch'
$CATS = 'Regulatory','Geopolitical','Binary','Transfer restrictions','Data gap','Other'
$RTYPES = 'Equity','Strategic','Convertible','Tender','Debt','Pending'
$IPOS = 'S-1 publicly filed','Confidentially filed','Reported'
$warn = New-Object Collections.Generic.List[string]
$chg = New-Object Collections.Generic.List[string]

# ── read the workbook (xlsx = zip of XML) ──
Add-Type -AssemblyName System.IO.Compression.FileSystem
$tmp = Join-Path ([IO.Path]::GetTempPath()) ("pq-import-" + [guid]::NewGuid())
[IO.Compression.ZipFile]::ExtractToDirectory((Resolve-Path $Xlsx).Path, $tmp)
function Xml($rel) { $p = Join-Path $tmp $rel; if (Test-Path $p) { [xml](Get-Content $p -Raw -Encoding UTF8) } }
function Text($node) {   # text of a shared-string / inline-string item, including rich-text runs
  if ($node.t) { if ($node.t -is [string]) { $node.t } else { $node.t.'#text' } }
  else { ($node.r | ForEach-Object { if ($_.t -is [string]) { $_.t } else { $_.t.'#text' } }) -join '' }
}
$sst = @(); $ss = Xml 'xl\sharedStrings.xml'; if ($ss) { $sst = @($ss.sst.si | ForEach-Object { Text $_ }) }
$wbx = Xml 'xl\workbook.xml'; $rels = Xml 'xl\_rels\workbook.xml.rels'
function ColIdx($ref) { $n = 0; foreach ($ch in ($ref -replace '\d','').ToCharArray()) { $n = $n*26 + ([int][char]$ch - 64) }; $n - 1 }
function Sheet($name) {   # rows as ordered hashtables keyed by the header row
  $s = $wbx.workbook.sheets.sheet | Where-Object { $_.name -eq $name }
  if (-not $s) { throw "Sheet '$name' not found in the workbook" }
  $rid = $s.GetAttribute('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
  $target = ($rels.Relationships.Relationship | Where-Object { $_.Id -eq $rid }).Target -replace '^/?xl/',''
  $x = Xml ('xl\' + ($target -replace '/','\'))
  $grid = foreach ($row in $x.worksheet.sheetData.row) {
    $vals = @{}
    foreach ($c in $row.c) {
      $v = switch ($c.t) { 's' { $sst[[int]$c.v] } 'inlineStr' { Text $c.is } 'b' { [bool][int]$c.v } default { $c.v } }
      if ($v -is [Xml.XmlElement]) { $v = $v.'#text' }
      $vals[(ColIdx $c.r)] = $v
    }
    , $vals
  }
  $grid = @($grid); if (-not $grid.Count) { return @() }
  $hdr = $grid[0]; $out = @()
  foreach ($g in ($grid | Select-Object -Skip 1)) {
    $o = [ordered]@{}; $any = $false
    foreach ($k in $hdr.Keys) { $v = $g[$k]; if ($v -is [string]) { $v = $v.Trim() }; if ($v -ne $null -and $v -ne '') { $any = $true }; $o[$hdr[$k]] = $v }
    if ($any) { $out += , $o }
  }
  $out
}
$CO = Sheet 'Companies'; $RD = Sheet 'Funding rounds'; $SH = Sheet 'Shareholders'; $PR = Sheet 'Profile notes'
Remove-Item $tmp -Recurse -Force

# ── value helpers ──
function S($v) { if ($v -eq $null) { $null } else { $t = "$v".Trim(); if ($t) { $t } else { $null } } }
function N($v, $what) {
  $t = S $v; if (-not $t) { return $null }
  $d = 0.0; if ([double]::TryParse(($t -replace '[\$,%\s]',''), [Globalization.NumberStyles]::Float, [Globalization.CultureInfo]::InvariantCulture, [ref]$d)) { return $d }
  $warn.Add("$what : '$t' is not a number; left blank"); $null
}
function D($v, $what, [switch]$Month) {   # YYYY-MM-DD (or YYYY-MM), accepting Excel date serials
  $t = S $v; if (-not $t) { return $null }
  $fmt = if ($Month) { 'yyyy-MM' } else { 'yyyy-MM-dd' }
  if ($t -match '^\d{5}(\.\d+)?$') { return [DateTime]::FromOADate([double]$t).ToString($fmt) }
  if ($Month -and $t -match '^\d{4}-\d{2}$') { return $t }
  $dt = [DateTime]::MinValue
  if ([DateTime]::TryParseExact($t, [string[]]@('yyyy-MM-dd','yyyy-M-d','d/M/yyyy','dd/MM/yyyy','yyyy-MM'), [Globalization.CultureInfo]::InvariantCulture, [Globalization.DateTimeStyles]::None, [ref]$dt)) { return $dt.ToString($fmt) }
  $warn.Add("$what : '$t' is not a date (use YYYY-MM-DD); left blank"); $null
}
function Pick($v, $allowed, $what) { $t = S $v; if (-not $t) { return $null }
  $m = $allowed | Where-Object { $_ -ieq $t } | Select-Object -First 1; if ($m) { return $m }
  $warn.Add("$what : '$t' is not one of: $($allowed -join ', '); left blank"); $null }
function Js($o) { ($o | ConvertTo-Json -Depth 8 -Compress) }
function ReadJsJson($file, $var) {   # parse a data file written by this script: window.X = {json};
  $p = Join-Path $root $file; if (-not (Test-Path $p)) { return $null }
  $m = [regex]::Match([IO.File]::ReadAllText($p, [Text.Encoding]::UTF8), "window\.$var = (\{[\s\S]*?\});\s*(\r?\n|$)")
  if (-not $m.Success) { return $null }
  try { $m.Groups[1].Value | ConvertFrom-Json } catch { $null }
}

# ── current state ──
$dataText = [IO.File]::ReadAllText((Join-Path $root 'quant-data.js'), [Text.Encoding]::UTF8)
$asof = [regex]::Match($dataText, "QD_ASOF = '([^']+)'").Groups[1].Value
$old = [ordered]@{}
foreach ($m in [regex]::Matches($dataText, '(?m)^\{.*\}(?=,?\s*$)')) { $o = $m.Value | ConvertFrom-Json; $old[$o.id] = $o }
$oldOvr = ReadJsJson 'tier-overrides.js' 'TIER_OVR'; $oldQR = ReadJsJson 'quant-rounds.js' 'QR'; $oldIPO = ReadJsJson 'ipo-status.js' 'IPO'
foreach ($p in @(@('tier-overrides.js',$oldOvr),@('quant-rounds.js',$oldQR),@('ipo-status.js',$oldIPO))) {
  if ($p[1] -eq $null) { $warn.Add("$($p[0]) is in the older hand-written format: it will be rewritten in full (a one-time format change), so its changes are not itemised below") } }
function OldProp($obj, $id) { if ($obj -eq $null) { return $null }; $obj.PSObject.Properties[$id].Value }

# ── companies ──
$seen = @{}; $newData = [ordered]@{}; $ovr = [ordered]@{}; $ipo = [ordered]@{}; $removed = @(); $nameToId = @{}
function NewId($name) { $b = ($name -replace '\(.*?\)','' -replace '[^A-Za-z0-9]','').ToLower(); if (-not $b) { $b = 'co' }
  $id = $b; $n = 2; while ($old.Contains($id) -or $seen[$id]) { $id = "$b$n"; $n++ }; $id }
$rowNo = 1
foreach ($r in $CO) {
  $rowNo++
  $name = S $r['Company']; if (-not $name) { $warn.Add("Companies row ${rowNo}: no company name; row skipped"); continue }
  $id = S $r['ID']
  if ($id -and -not $old.Contains($id)) { $warn.Add("Companies row ${rowNo} ($name): unknown ID '$id'; treated as a new company"); $id = $null }
  if ($id -and $seen[$id]) { $warn.Add("Companies row ${rowNo} ($name): ID '$id' appears twice; second row skipped"); continue }
  $isNew = -not $id; if ($isNew) { $id = NewId $name }
  $seen[$id] = 1; $nameToId[$name.ToLower()] = $id
  $action = S $r['Action']
  if ($action -and $action -ieq 'Remove') {
    if ($isNew) { $warn.Add("$name : marked Remove but is not an existing company; ignored"); continue }
    $why = S $r['Action reason']; if (-not $why) { $why = 'Removed via master workbook'; $warn.Add("$name : removed without an Action reason") }
    $removed += [pscustomobject]@{ id=$id; name=$name; reason=$why }; $chg.Add("REMOVE  $name — $why"); continue
  }
  elseif ($action) { $warn.Add("$name : Action '$action' not recognised (use Remove or leave blank); company kept") }

  $o = if ($isNew) { $null } else { $old[$id] }
  $tracker = $o -and $o.pxSrc -eq 'tracker'
  $e = [ordered]@{
    id = $id; name = $name; region = S $r['Region']; hq = S $r['HQ']; sector = S $r['Sector']; sub = S $r['Sub-sector']
    tier = if ($o) { $o.tier } else { 'Tail' }   # stored base tier; the page's rules and overrides set the confirmed tier
    listed = (S $r['Listed']) -ieq 'Y'; mq = N $r['Marquee rank'] "$name Marquee rank"
    setter = N $r['Setter 30 rank'] "$name Setter 30 rank"; c50 = N $r['Clarity 50 rank'] "$name Clarity 50 rank"
    forgeTraded = (S $r['Forge traded']) -ieq 'Y'
    lrEv = N $r['Last round valuation ($bn)'] "$name last round valuation"; lrName = S $r['Last round']; lrDate = D $r['Last round date'] "$name last round date"
    curVal = N $r['Current valuation ($bn)'] "$name current valuation"; note = S $r['Notes']; ctype = S $r['Clarity price type']
    ccy = if (S $r['Price currency']) { (S $r['Price currency']).ToUpper() } else { 'USD' }
    status = if ($o) { $o.status } else { $null }
    liq = N $r['Liquidity score'] "$name liquidity score"
    rank = if ($o) { $o.rank } else { $null }; srank = if ($o) { $o.srank } else { $null }
  }
  if ($tracker) {
    $e.shares = $o.shares; $e.shSrc = $o.shSrc; $e.px = $o.px; $e.pxSrc = 'tracker'; $e.hist = $o.hist
    foreach ($f in @(@('Clarity price','c'),@('Augment price','a'),@('Forge price','f'))) {
      $nv = N $r[$f[0]] "$name $($f[0])"; if ($nv -ne $o.px.($f[1])) { $warn.Add("$name : $($f[0]) edit ignored — prices for this company come from the price tracker") } }
  } else {
    $e.shares = N $r['Shares outstanding'] "$name shares"; $e.shSrc = if ($e.shares -ne $null) { if ($o -and $o.shares -eq $e.shares) { $o.shSrc } else { 'master' } } else { $null }
    $e.px = [ordered]@{ c = N $r['Clarity price'] "$name Clarity price"; f = N $r['Forge price'] "$name Forge price"; a = N $r['Augment price'] "$name Augment price" }
    $e.pxSrc = if ($o) { $o.pxSrc } else { 'master' }; $e.hist = if ($o) { $o.hist } else { $null }
  }
  if ($isNew) { $chg.Add("ADD     $name ($($e.sector), $($e.region)) as id '$id'") }
  else {
    foreach ($k in 'name','region','hq','sector','sub','listed','mq','setter','c50','forgeTraded','lrEv','lrName','lrDate','curVal','note','ctype','ccy','liq','shares') {
      $a = $o.$k; $b = $e[$k]; if ("$a" -ne "$b") { $chg.Add("EDIT    $name · $k : '$a' → '$b'") } }
    if (-not $tracker) { foreach ($k in 'c','a','f') { if ("$($o.px.$k)" -ne "$($e.px[$k])") { $chg.Add("EDIT    $name · price $k : '$($o.px.$k)' → '$($e.px[$k])'") } } }
  }
  $newData[$id] = $e

  # tier decision: a tier differing from the rules' default, or any recorded reason, becomes an override
  $tier = Pick $r['Tier'] $TIERS "$name Tier"; $def = S $r['Default tier (rules)']
  $cat = Pick $r['Override category'] $CATS "$name Override category"; $why = S $r['Override reason']
  $d = [ordered]@{}
  if ($tier -and $tier -ne $def) { $d.tier = $tier; if (-not $why) { $warn.Add("$name : tier $tier differs from the rules ($def) but has no Override reason") } }
  if ($cat) { $d.category = $cat }; if ($why) { $d.reason = $why }
  if ($d.Count) {
    $prev = OldProp $oldOvr $id
    $d.date = if ($prev -and "$($prev.tier)" -eq "$($d.tier)" -and "$($prev.reason)" -eq "$($d.reason)" -and "$($prev.category)" -eq "$($d.category)") { $prev.date } else { (Get-Date).ToString('yyyy-MM-dd') }
    $ovr[$id] = $d
  }
  if ($oldOvr -ne $null) {
    $p = OldProp $oldOvr $id; $pj = if ($p) { "$($p.tier)|$($p.category)|$($p.reason)" } else { '||' }; $nj = "$($d.tier)|$($d.category)|$($d.reason)"
    if ($pj -ne $nj) { $chg.Add("TIER    $name : '$pj' → '$nj'  (tier|category|reason)") } }

  # IPO pipeline
  $st = Pick $r['IPO status'] $IPOS "$name IPO status"
  if ($st) { $ip = [ordered]@{ status = $st; updated = D $r['IPO last update'] "$name IPO last update" -Month; val = N $r['IPO valuation ($bn)'] "$name IPO valuation" }
    $tg = S $r['IPO target']; if ($tg) { $ip.target = $tg }; $ipo[$id] = $ip }
  if ($oldIPO -ne $null) { $p = OldProp $oldIPO $id; $pj = if ($p) { Js $p } else { '' }; $nj = if ($ipo.Contains($id)) { Js $ipo[$id] } else { '' }
    if ($pj -ne $nj) { $chg.Add("IPO     $name : $pj → $nj") } }
}
foreach ($id in $old.Keys) { if (-not $seen[$id]) { $chg.Add("REMOVE  $($old[$id].name) — row deleted from the workbook (use Action = Remove next time)"); $removed += [pscustomobject]@{ id=$id; name=$old[$id].name; reason='Deleted from master workbook' } } }

# ── funding profiles ──
function RefId($row, $what) { $i = S $row['ID']; if ($i -and $newData.Contains($i)) { return $i }
  $n = S $row['Company']; if ($n -and $nameToId[$n.ToLower()]) { return $nameToId[$n.ToLower()] }
  $warn.Add("$what : company '$i$(if($n){" / $n"})' not found in Companies; row skipped"); $null }
function List($v, $sep) {   # leading comma keeps one- and zero-item lists as arrays (PowerShell unrolls them otherwise)
  $t = S $v; if (-not $t) { return , @() }; , @($t -split $sep | ForEach-Object { $_.Trim() } | Where-Object { $_ }) }
$qr = [ordered]@{}
function Prof($id) { if (-not $qr.Contains($id)) { $qr[$id] = [ordered]@{ researched = $null; splits = $null; rounds = @(); holders = @(); shares = $null } }; $qr[$id] }
foreach ($r in $PR) { $id = RefId $r 'Profile notes'; if (-not $id) { continue }; $q = Prof $id
  $q.researched = D $r['Researched'] "$id researched"; $q.splits = S $r['Splits note']
  $q.shares = [ordered]@{ value = N $r['Share count'] "$id share count"; asOf = D $r['Share count as of'] "$id share count as of"; basis = S $r['Share count basis']; note = S $r['Share count note'] } }
foreach ($r in $RD) { $id = RefId $r 'Funding rounds'; if (-not $id) { continue }
  $rn = [ordered]@{ date = D $r['Date'] "$id round date"; name = S $r['Round']; type = Pick $r['Type'] $RTYPES "$id round type" }
  if ($r['Company-run'] -and (S $r['Company-run']) -ieq 'N') { $rn.companyRun = $false }
  $amt = N $r['Amount ($m)'] "$id round amount"; $rn.amount = if ($amt -ne $null) { [math]::Round($amt * 1e6) } else { $null }
  $rn.post = N $r['Post-money valuation ($bn)'] "$id post-money"; $rn.pps = N $r['Price per share ($)'] "$id price per share"
  if ($rn.pps -ne $null) { $rn.ppsBasis = S $r['Price basis'] }
  $rn.leads = List $r['Lead investors'] ';'; $rn.basis = S $r['Basis']; $nt = S $r['Note']; if ($nt) { $rn.note = $nt }
  $rn.src = List $r['Sources'] '\s+'
  if (-not $rn.date -or -not $rn.name) { $warn.Add("$id : a funding round has no date or name; skipped"); continue }
  $q = Prof $id; $q.rounds += , $rn }
foreach ($r in $SH) { $id = RefId $r 'Shareholders'; if (-not $id) { continue }
  $st = N $r['Stake (%)'] "$id stake"
  $h = [ordered]@{ name = S $r['Shareholder']; type = S $r['Type']; stake = if ($st -ne $null) { [math]::Round($st/100, 6) } else { $null }
    asOf = D $r['As of'] "$id holder as-of"; basis = S $r['Basis']; note = S $r['Note']; src = List $r['Sources'] '\s+' }
  if (-not $h.name) { $warn.Add("$id : a shareholder row has no name; skipped"); continue }
  $q = Prof $id; $q.holders += , $h }
foreach ($id in @($qr.Keys)) { $qr[$id].rounds = @($qr[$id].rounds | Sort-Object { $_.date }) }
if ($oldQR -ne $null) {
  foreach ($id in ($qr.Keys + @($oldQR.PSObject.Properties.Name) | Select-Object -Unique)) {
    $p = OldProp $oldQR $id; $n = if ($qr.Contains($id)) { $qr[$id] } else { $null }
    $pr = @($p.rounds).Count; $ph = @($p.holders).Count; $nr = @($n.rounds).Count; $nh = @($n.holders).Count
    $same = ($p -and $n) -and ((Js $p.rounds) -eq (Js @($n.rounds))) -and ((Js $p.holders) -eq (Js @($n.holders))) -and ((Js $p.shares) -eq (Js $n.shares)) -and ("$($p.splits)" -eq "$($n.splits)")
    if (-not $same -and ($p -or $n)) { $chg.Add("PROFILE $id : rounds $pr → $nr, shareholders $ph → $nh (contents changed)") } } }

# ── report ──
""; "Master workbook: $Xlsx"
"Companies: $($old.Count) now → $($newData.Count) after import · overrides $($ovr.Count) · IPO $($ipo.Count) · profiles $($qr.Count)"
""; "CHANGES ($($chg.Count))"; if ($chg.Count) { $chg | ForEach-Object { "  $_" } } else { "  none" }
""; "WARNINGS ($($warn.Count))"; if ($warn.Count) { $warn | ForEach-Object { "  $_" } } else { "  none" }
if (-not $Apply) { ""; "Report only — run again with -Apply to write the data files."; return }

# ── write ──
$hdr = "// Generated by .claude/work/import-master.ps1 from the master workbook — edit the workbook, not this file.`n"
$lines = foreach ($e in $newData.Values) { Js $e }
[IO.File]::WriteAllText((Join-Path $root 'quant-data.js'), ($hdr + "// px: c = Clarity, f = Forge, a = Augment (price per share, USD unless ccy says otherwise).`nconst QD_ASOF = '$asof';`nconst UNI = [`n" + ($lines -join ",`n") + "`n];`n"), $utf8)
function Obj($dict) { if (-not $dict.Count) { return '{}' }; "{`n" + (($dict.Keys | ForEach-Object { '  ' + (ConvertTo-Json $_) + ': ' + (Js $dict[$_]) }) -join ",`n") + "`n}" }
[IO.File]::WriteAllText((Join-Path $root 'tier-overrides.js'), ($hdr + "// Confirmed tiers that differ from the rules, and the investment team's reasons. Keyed by company id.`nwindow.TIER_OVR = " + (Obj $ovr) + ";`n"), $utf8)
[IO.File]::WriteAllText((Join-Path $root 'quant-rounds.js'), ($hdr + "// Funding rounds, key shareholders and profile notes per company. Keyed by company id.`nwindow.QR = " + (Obj $qr) + ";`n"), $utf8)
$src = [regex]::Match([IO.File]::ReadAllText((Join-Path $root 'ipo-status.js'), [Text.Encoding]::UTF8), "IPO_SRC = ['""]([^'""]+)").Groups[1].Value
if (-not $src) { $src = 'Perennial research' }
[IO.File]::WriteAllText((Join-Path $root 'ipo-status.js'), ($hdr + "// IPO filing status per company. Keyed by company id.`nwindow.IPO_SRC = " + (ConvertTo-Json $src) + ";`nwindow.IPO = " + (Obj $ipo) + ";`n"), $utf8)
if ($removed.Count) {
  $map = Join-Path $PSScriptRoot 'name-map.csv'
  $add = $removed | ForEach-Object { '{0},drop,,{1}' -f ($_.name -replace ',',' '), ('"' + ($_.reason -replace '"',"'") + '"') }
  [IO.File]::AppendAllText($map, (($add -join "`n") + "`n"), $utf8)
}
""; "Written: quant-data.js, tier-overrides.js, quant-rounds.js, ipo-status.js$(if ($removed.Count) { ', name-map.csv' })"
