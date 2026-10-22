param(
  [Parameter(Mandatory)] [string]$Xlsx,   # master workbook downloaded from the dashboard and edited in Excel
  [switch]$Apply                          # without -Apply: report the changes only; with it: rewrite the data files
)
# Imports the master Excel workbook (dashboard "Master Excel" button) back into the dashboard data files
# (Universe, Marquee list, Calibration, IPO pipeline and Methodology sheets; Allocation sheets are not imported):
#   quant-data.js  (Universe, Marquee list, Watching companies)   tier-overrides.js (Calibration)   method-config.js (Methodology)
#   quant-rounds.js (Funding rounds, Shareholders, Profile notes)   ipo-status.js (IPO pipeline)
# Removed companies are also appended to name-map.csv. Prices, shares and history for "tracker" rows stay
# with the price tracker (index.html) and are not taken from the workbook.
$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$utf8 = New-Object Text.UTF8Encoding $false
$TIERS = 'Late Growth','Crossover / Pre-IPO','Watch'   # investment buckets (stored in the overrides' tier field)
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
function HasSheet($name) { [bool]($wbx.workbook.sheets.sheet | Where-Object { $_.name -eq $name }) }
function Sheet($name, [switch]$Optional) {   # rows as ordered hashtables keyed by the header row
  $s = $wbx.workbook.sheets.sheet | Where-Object { $_.name -eq $name }
  if (-not $s) { if ($Optional) { return $null }; throw "Sheet '$name' not found in the workbook" }
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
# One sheet per dashboard page (Universe, Marquee list, Calibration, IPO pipeline, Methodology). Older workbooks kept
# everything on one Companies sheet; when a page sheet is missing its columns are read from that sheet instead.
$CO = if (HasSheet 'Universe') { Sheet 'Universe' } else { Sheet 'Companies' }
$RD = Sheet 'Funding rounds'; $SH = Sheet 'Shareholders'; $PR = Sheet 'Profile notes'
$MQS = if (HasSheet 'Marquee list') { @(Sheet 'Marquee list') } else { $null }
$WLS = if (HasSheet 'Watching companies') { @(Sheet 'Watching companies') } else { $null }
$CAL = if (HasSheet 'Calibration') { @(Sheet 'Calibration') } else { $null }
$IPS = if (HasSheet 'IPO pipeline') { @(Sheet 'IPO pipeline') } else { $null }
$MET = if (HasSheet 'Methodology') { @(Sheet 'Methodology') } else { $null }
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
# The value under the first of these headers present in the row (page-style names first, older names as fallbacks).
function Col($row, [string[]]$names) { foreach ($h in $names) { if ($row.Contains($h)) { return $row[$h] } }; $null }
function Pick($v, $allowed, $what) { $t = S $v; if (-not $t) { return $null }
  $m = $allowed | Where-Object { $_ -ieq $t } | Select-Object -First 1; if ($m) { return $m }
  $warn.Add("$what : '$t' is not one of: $($allowed -join ', '); left blank"); $null }
function Js($o) { ($o | ConvertTo-Json -Depth 8 -Compress) }
function Differs($a, $b) {   # numbers compare by value (9.0 = 9); everything else as text
  $x = 0.0; $y = 0.0
  if ($a -ne $null -and $b -ne $null -and [double]::TryParse("$a", [ref]$x) -and [double]::TryParse("$b", [ref]$y)) { return $x -ne $y }
  "$a" -ne "$b" }
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

# ── page sheets keyed by company ID (or name, for companies added in this workbook without an ID) ──
function Index($rows, $sheet) {
  $ix = @{}; if ($rows -eq $null) { return $null }
  foreach ($r in $rows) {
    $i = S $r['ID']; $n = S $r['Company']; $k = if ($i) { "id:$i" } elseif ($n) { "name:$($n.ToLower())" } else { $null }
    if (-not $k) { $warn.Add("${sheet}: a row has no ID or company; skipped"); continue }
    if ($ix.Contains($k)) { $warn.Add("${sheet}: '$(if ($i) { $i } else { $n })' appears twice; second row ignored"); continue }
    $ix[$k] = $r }
  $ix
}
$ixMQ = Index $MQS 'Marquee list'; $ixWL = Index $WLS 'Watching companies'; $ixCAL = Index $CAL 'Calibration'; $ixIPO = Index $IPS 'IPO pipeline'
$used = @{}
function Find($ix, $sheet, $id, $name) {   # the row for this company in a page sheet; @{} when it has none
  foreach ($k in "id:$id", "name:$($name.ToLower())") { if ($ix.Contains($k)) { $used["$sheet|$k"] = 1; return $ix[$k] } }
  @{}
}

# ── companies ──
$seen = @{}; $newData = [ordered]@{}; $ovr = [ordered]@{}; $ipo = [ordered]@{}; $removed = @(); $nameToId = @{}
function NewId($name) { $b = ($name -replace '\(.*?\)','' -replace '[^A-Za-z0-9]','').ToLower(); if (-not $b) { $b = 'co' }
  $id = $b; $n = 2; while ($old.Contains($id) -or $seen[$id]) { $id = "$b$n"; $n++ }; $id }
$rowNo = 1
foreach ($r in $CO) {
  $rowNo++
  $name = S $r['Company']; if (-not $name) { $warn.Add("Universe row ${rowNo}: no company name; row skipped"); continue }
  $id = S $r['ID']
  if ($id -and -not $old.Contains($id)) { $warn.Add("Universe row ${rowNo} ($name): unknown ID '$id'; treated as a new company"); $id = $null }
  if ($id -and $seen[$id]) { $warn.Add("Universe row ${rowNo} ($name): ID '$id' appears twice; second row skipped"); continue }
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
  $mr = if ($ixMQ -ne $null) { Find $ixMQ 'Marquee list' $id $name } else { $r }
  $wr = if ($ixWL -ne $null) { Find $ixWL 'Watching companies' $id $name } else { $null }
  $tr = if ($ixCAL -ne $null) { Find $ixCAL 'Calibration' $id $name } else { $r }
  $ir = if ($ixIPO -ne $null) { Find $ixIPO 'IPO pipeline' $id $name } else { $r }
  $e = [ordered]@{
    id = $id; name = $name; region = S $r['Region']; hq = S $r['HQ']; sector = S $r['Sector']; sub = S $r['Sub-sector']
    tier = if ($o) { $o.tier } else { 'Tail' }   # stored base tier; the page's rules and overrides set the confirmed tier
    listed = (S $r['Listed']) -ieq 'Y'; mq = N $mr['Marquee rank'] "$name Marquee rank"
    wl = if ($wr -ne $null) { N $wr['#'] "$name watching position" } elseif ($o) { $o.wl } else { $null }
    aug = N $r['Augment Power 20 rank'] "$name Augment Power 20 rank"; c50 = N $r['Clarity 50 rank'] "$name Clarity 50 rank"
    forgeTraded = (S $r['Forge traded']) -ieq 'Y'
    lrEv = N (Col $r 'Last round valuation input ($bn)','Last round valuation ($bn)') "$name last round valuation"; lrName = S $r['Last round']; lrDate = D $r['Last round date'] "$name last round date"
    curVal = N (Col $r 'Reported valuation input ($bn)','Current valuation ($bn)') "$name current valuation"; note = S (Col $r 'Note','Notes'); ctype = S $r['Clarity price type']
    ccy = if (S $r['Price currency']) { (S $r['Price currency']).ToUpper() } else { 'USD' }
    status = if ($o) { $o.status } else { $null }
    liq = N $r['Liquidity score'] "$name liquidity score"
    rank = if ($o) { $o.rank } else { $null }; srank = if ($o) { $o.srank } else { $null }
  }
  if ($tracker) {
    $e.shares = $o.shares; $e.shSrc = $o.shSrc; $e.px = $o.px; $e.pxSrc = 'tracker'; $e.hist = $o.hist
    foreach ($f in @(@('Clarity price','c'),@('Augment price','a'),@('Forge price','f'))) {
      $nv = N (Col $r @(($f[0] -replace ' price',''), $f[0])) "$name $($f[0])"; if ($nv -ne $o.px.($f[1])) { $warn.Add("$name : $($f[0]) edit ignored — prices for this company come from the price tracker") } }
  } else {
    $e.shares = N $r['Shares outstanding'] "$name shares"; $e.shSrc = if ($e.shares -ne $null) { if ($o -and $o.shares -eq $e.shares) { $o.shSrc } else { 'master' } } else { $null }
    $e.px = [ordered]@{ c = N (Col $r 'Clarity','Clarity price') "$name Clarity price"; f = N (Col $r 'Forge','Forge price') "$name Forge price"; a = N (Col $r 'Augment','Augment price') "$name Augment price" }
    $e.pxSrc = if ($o) { $o.pxSrc } else { 'master' }; $e.hist = if ($o) { $o.hist } else { $null }
  }
  if ($isNew) { $chg.Add("ADD     $name ($($e.sector), $($e.region)) as id '$id'") }
  else {
    foreach ($k in 'name','region','hq','sector','sub','listed','mq','wl','aug','c50','forgeTraded','lrEv','lrName','lrDate','curVal','note','ctype','ccy','liq','shares') {
      $a = $o.$k; $b = $e[$k]; if (Differs $a $b) { $chg.Add("EDIT    $name · $k : '$a' → '$b'") } }
    if (-not $tracker) { foreach ($k in 'c','a','f') { if (Differs $o.px.$k $e.px[$k]) { $chg.Add("EDIT    $name · price $k : '$($o.px.$k)' → '$($e.px[$k])'") } } }
  }
  # Reported revenue (US$m), entered by the team in place of PitchBook's estimate. Stored only where entered; a workbook
  # without these columns keeps the values already in the data.
  if ($r.Contains('Reported revenue input ($m)')) { $rv = N $r['Reported revenue input ($m)'] "$name reported revenue"; $rs = S $r['Reported revenue source']; $rd = D $r['Reported revenue as of'] "$name reported revenue as of" }
  elseif ($o) { $rv = $o.revOv; $rs = $o.revOvSrc; $rd = $o.revOvDate } else { $rv = $null; $rs = $null; $rd = $null }
  if ($rv -ne $null) { $e.revOv = $rv; if ($rs) { $e.revOvSrc = $rs }; if ($rd) { $e.revOvDate = $rd } }
  elseif ($rs -or $rd) { $warn.Add("$name : reported revenue source or date given without a revenue figure; ignored") }
  if (-not $isNew) { foreach ($k in 'revOv','revOvSrc','revOvDate') { if (Differs $o.$k $e[$k]) { $chg.Add("EDIT    $name · $k : '$($o.$k)' → '$($e[$k])'") } } }
  $newData[$id] = $e

  # bucket decision: a bucket differing from the rule, or any recorded reason, becomes an override. A bucket the team
  # already confirmed explicitly stays explicit even when it equals today's default, so a later rule change cannot move it.
  $tier = Pick (Col $tr 'Bucket','Current tier') $TIERS "$name Bucket"; $def = S (Col $tr 'Rule bucket','Default tier (rules)')
  $cat = Pick (Col $tr 'Category','Override category') $CATS "$name Override category"; $why = S (Col $tr 'Reason','Override reason')
  $d = [ordered]@{}; $prevTier = (OldProp $oldOvr $id).tier
  if ($tier -and ($tier -ne $def -or $tier -eq $prevTier)) { $d.tier = $tier; if (-not $why -and $tier -ne $def) { $warn.Add("$name : bucket $tier differs from the rule ($def) but has no Override reason") } }
  if ($cat) { $d.category = $cat }; if ($why) { $d.reason = $why }
  if ($d.Count) {
    $prev = OldProp $oldOvr $id
    $d.date = if ($prev -and "$($prev.tier)" -eq "$($d.tier)" -and "$($prev.reason)" -eq "$($d.reason)" -and "$($prev.category)" -eq "$($d.category)") { $prev.date } else { (Get-Date).ToString('yyyy-MM-dd') }
    $ovr[$id] = $d
  }
  if ($oldOvr -ne $null) {
    $p = OldProp $oldOvr $id; $pj = if ($p) { "$($p.tier)|$($p.category)|$($p.reason)" } else { '||' }; $nj = "$($d.tier)|$($d.category)|$($d.reason)"
    if ($pj -ne $nj) { $chg.Add("BUCKET  $name : '$pj' → '$nj'  (bucket|category|reason)") } }

  # IPO pipeline
  $st = Pick ((S $ir['IPO status']) -replace '^IPO plans reported$','Reported') $IPOS "$name IPO status"
  if ($st) { $ip = [ordered]@{ status = $st; updated = D (Col $ir 'Last filing update','IPO last update') "$name IPO last update" -Month; val = N (Col $ir 'Recent valuation','IPO valuation ($bn)') "$name IPO valuation" }
    $tg = S (Col $ir 'Target listing','IPO target'); if ($tg) { $ip.target = $tg }; $ipo[$id] = $ip }
  if ($oldIPO -ne $null) { $p = OldProp $oldIPO $id; $pj = if ($p) { (Js $p) -replace '(\d)\.0(?=[,}])','$1' } else { '' }; $nj = if ($ipo.Contains($id)) { Js $ipo[$id] } else { '' }
    if ($pj -ne $nj) { $chg.Add("IPO     $name : $pj → $nj") } }
}
foreach ($id in $old.Keys) { if (-not $seen[$id]) { $chg.Add("REMOVE  $($old[$id].name) — row deleted from the workbook (use Action = Remove next time)"); $removed += [pscustomobject]@{ id=$id; name=$old[$id].name; reason='Deleted from master workbook' } } }

foreach ($p in @(@('Marquee list',$ixMQ),@('Watching companies',$ixWL),@('Calibration',$ixCAL),@('IPO pipeline',$ixIPO))) {
  if ($p[1] -eq $null) { continue }
  foreach ($k in $p[1].Keys) { if (-not $used["$($p[0])|$k"]) { $warn.Add("$($p[0]): '$($k -replace '^(id|name):','')' is not a company in Universe; row ignored") } } }

# ── methodology parameters (method-config.js) ──
$oldMet = ReadJsJson 'method-config.js' 'METHOD'; $metVals = [ordered]@{}
if ($oldMet -ne $null) { foreach ($pp in $oldMet.PSObject.Properties) { $metVals[$pp.Name] = $pp.Value } }
$metChanged = $false
if ($MET -ne $null) {
  foreach ($r in $MET) {
    $k = S $r['Key']; if (-not $k) { continue }
    if (-not $metVals.Contains($k)) { $warn.Add("Methodology: unknown key '$k'; ignored"); continue }
    $v = N $r['Value'] "Methodology $k"; if ($v -eq $null) { $warn.Add("Methodology: $k has no value; kept at $($metVals[$k])"); continue }
    if ([double]$metVals[$k] -ne $v) { $chg.Add("METHOD  $k ($(S $r['Parameter'])) : $($metVals[$k]) → $v"); $metVals[$k] = $v; $metChanged = $true } }
  $sum = { param($keys) ($keys | ForEach-Object { [double]$metVals[$_] } | Measure-Object -Sum).Sum }
  foreach ($g in @(@('Pillar weights', @('pillar.va','pillar.lq','pillar.dm')), @('Value accretion weights', @('va.prem.w','va.growth.w','va.fresh.w','va.path.w')),
                   @('Liquidity weights', @('lq.venues.w','lq.spread.w','lq.scale.w','lq.tender.w')), @('Demand weights', @('dm.aug.w','dm.c50.w','dm.mom.w')))) {
    $t = & $sum $g[1]; if ([math]::Abs($t - 100) -gt 0.01) { $warn.Add("Methodology: $($g[0]) add up to $t, not 100") } }
}

# ── funding profiles ──
function RefId($row, $what) { $i = S $row['ID']; if ($i -and $newData.Contains($i)) { return $i }
  $n = S $row['Company']; if ($n -and $nameToId[$n.ToLower()]) { return $nameToId[$n.ToLower()] }
  $warn.Add("$what : company '$i$(if($n){" / $n"})' not found in Universe; row skipped"); $null }
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
# Sort by date, keeping the workbook's order for rounds on the same date (Sort-Object is not stable on its own).
foreach ($id in @($qr.Keys)) { $i = 0; $qr[$id].rounds = @($qr[$id].rounds | ForEach-Object { [pscustomobject]@{ d = $_.date; i = $i++; r = $_ } } | Sort-Object d, i | ForEach-Object { $_.r }) }
if ($oldQR -ne $null) {
  foreach ($id in ($qr.Keys + @($oldQR.PSObject.Properties.Name) | Select-Object -Unique)) {
    $p = OldProp $oldQR $id; $n = if ($qr.Contains($id)) { $qr[$id] } else { $null }
    $pr = @($p.rounds).Count; $ph = @($p.holders).Count; $nr = @($n.rounds).Count; $nh = @($n.holders).Count
    $nz = { param($o) (Js $o) -replace '(\d)\.0(?=[,}\]])','$1' }   # 6.0 and 6 are the same value
    $same = ($p -and $n) -and ((& $nz $p.rounds) -eq (& $nz @($n.rounds))) -and ((& $nz $p.holders) -eq (& $nz @($n.holders))) -and ((& $nz $p.shares) -eq (& $nz $n.shares)) -and ("$($p.splits)" -eq "$($n.splits)")
    if (-not $same -and ($p -or $n)) { $chg.Add("PROFILE $id : rounds $pr → $nr, shareholders $ph → $nh (contents changed)") } } }

$ordered = [ordered]@{}
foreach ($id in $old.Keys) { if ($newData.Contains($id)) { $ordered[$id] = $newData[$id] } }
foreach ($id in $newData.Keys) { if (-not $ordered.Contains($id)) { $ordered[$id] = $newData[$id] } }
$newData = $ordered
function KeepOrder($dict, $oldObj) {   # existing keys in their current file order, new keys after
  if ($oldObj -eq $null) { return $dict }
  $o = [ordered]@{}
  foreach ($k in $oldObj.PSObject.Properties.Name) { if ($dict.Contains($k)) { $o[$k] = $dict[$k] } }
  foreach ($k in $dict.Keys) { if (-not $o.Contains($k)) { $o[$k] = $dict[$k] } }
  $o
}
$ovr = KeepOrder $ovr $oldOvr; $ipo = KeepOrder $ipo $oldIPO

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
[IO.File]::WriteAllText((Join-Path $root 'tier-overrides.js'), ($hdr + "// Confirmed investment buckets that differ from the rule, and the investment team's reasons. Keyed by company id.`nwindow.TIER_OVR = " + (Obj $ovr) + ";`n"), $utf8)
[IO.File]::WriteAllText((Join-Path $root 'quant-rounds.js'), ($hdr + "// Funding rounds, key shareholders and profile notes per company. Keyed by company id.`nwindow.QR = " + (Obj $qr) + ";`n"), $utf8)
$src = [regex]::Match([IO.File]::ReadAllText((Join-Path $root 'ipo-status.js'), [Text.Encoding]::UTF8), "IPO_SRC = ['""]([^'""]+)").Groups[1].Value
if (-not $src) { $src = 'Perennial research' }
[IO.File]::WriteAllText((Join-Path $root 'ipo-status.js'), ($hdr + "// IPO filing status per company. Keyed by company id.`nwindow.IPO_SRC = " + (ConvertTo-Json $src) + ";`nwindow.IPO = " + (Obj $ipo) + ";`n"), $utf8)
if ($metChanged) {
  $body = ($metVals.Keys | ForEach-Object { '  ' + (ConvertTo-Json $_) + ': ' + (ConvertTo-Json $metVals[$_]) }) -join ",`n"
  [IO.File]::WriteAllText((Join-Path $root 'method-config.js'), ("// Scoring and bucket-rule parameters, edited through the master Excel's Methodology sheet (imported by .claude/work/import-master.ps1).`n// Units as in that sheet: weights and percentage bounds in %, months in months, valuations in US`$ billions, scores 0–100.`nwindow.METHOD = {`n" + $body + "`n};`n"), $utf8)
}
if ($removed.Count) {
  $map = Join-Path $PSScriptRoot 'name-map.csv'
  $add = $removed | ForEach-Object { '{0},drop,,{1}' -f ($_.name -replace ',',' '), ('"' + ($_.reason -replace '"',"'") + '"') }
  [IO.File]::AppendAllText($map, (($add -join "`n") + "`n"), $utf8)
}
""; "Written: quant-data.js, tier-overrides.js, quant-rounds.js, ipo-status.js$(if ($metChanged) { ', method-config.js' })$(if ($removed.Count) { ', name-map.csv' })"
