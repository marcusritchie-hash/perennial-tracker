# Merges a PitchBook "Search Result Columns" export (unicorn list) into the dashboard WITHOUT touching the generated
# quant-data.js, so it survives master-workbook imports:
#   pitchbook-data.js      window.PB       PitchBook facts for every company in the export that is (or becomes) on the dashboard
#   pitchbook-universe.js  window.PB_UNIVERSE  dashboard records for companies in the export that are not already on it
# quant.html merges the universe into UNI, falls back to PitchBook's valuation estimate where a company has no valuation,
# and shows the PitchBook facts in the company detail panel.
# Usage:  powershell -File .claude\work\add-pitchbook.ps1 -Xlsx "C:\path\PitchBook_Search_Result_Columns_....xlsx"
# Name matches are exact (after normalising legal suffixes). Fix any wrong or missed match in .claude\work\pitchbook-match.csv.
param([Parameter(Mandatory)][string]$Xlsx)
$ErrorActionPreference = 'Stop'
trap { Write-Host ($_.InvocationInfo.PositionMessage); break }
$root = Split-Path (Split-Path $PSScriptRoot)
$utf8 = New-Object Text.UTF8Encoding($false)

# ── read the export ──
Add-Type -AssemblyName System.IO.Compression.FileSystem
$tmp = Join-Path $env:TEMP ('pbx_' + [guid]::NewGuid().ToString('N')); [IO.Compression.ZipFile]::ExtractToDirectory($Xlsx, $tmp)
$ss = New-Object Collections.Generic.List[string]; $x = New-Object Xml.XmlDocument; $x.Load("$tmp\xl\sharedStrings.xml")
foreach ($si in $x.sst.si) { $ss.Add((($si.SelectNodes('.//*[local-name()="t"]') | ForEach-Object { $_.InnerText }) -join '')) }
$s = New-Object Xml.XmlDocument; $s.Load("$tmp\xl\worksheets\sheet1.xml"); $ns = New-Object Xml.XmlNamespaceManager($s.NameTable); $ns.AddNamespace('m', 'http://schemas.openxmlformats.org/spreadsheetml/2006/main')
function ColIx($r) { $n = 0; foreach ($ch in ($r -replace '\d', '').ToCharArray()) { $n = $n * 26 + ([int]$ch - 64) }; $n - 1 }
$hdr = $null; $pb = New-Object Collections.Generic.List[object]; $asof = $null
foreach ($row in $s.SelectNodes('//m:sheetData/m:row', $ns)) {
  $h = @{}; foreach ($c in $row.SelectNodes('m:c', $ns)) { $v = $c.SelectSingleNode('m:v', $ns); $val = $null; if ($v) { $val = if ($c.t -eq 's') { $ss[[int]$v.InnerText] } else { $v.InnerText } }; $h[(ColIx $c.r)] = $val }
  if ($h[0] -eq 'Downloaded on:') { $asof = ([datetime]'1899-12-30').AddDays([double]$h[1]).ToString('yyyy-MM-dd') }
  if ($h[0] -eq 'Company ID') { $hdr = $h; continue }
  if ($hdr -and $h[1] -and $h[0]) { $o = [ordered]@{}; foreach ($k in ($hdr.Keys | Sort-Object)) { $o[$hdr[$k]] = $h[$k] }; $pb.Add([pscustomobject]$o) }
}
Remove-Item $tmp -Recurse -Force
Write-Host "Export: $($pb.Count) companies (downloaded $asof)"

# ── match against the dashboard ──
function Norm($t) { $t = ($t -replace '\(.*?\)', '').ToLower() -replace '&', ' and ' -replace '[^a-z0-9 ]', ' '
  $t = $t -replace '\b(inc|incorporated|corp|corporation|ltd|limited|llc|plc|co|company|holdings|holding|group|the|pbc|gmbh|ag|sa|bv|labs|technologies|technology|industries|enterprises|systems|international|global)\b', ' '; ($t -replace '\s+', '').Trim() }
$js = [IO.File]::ReadAllText((Join-Path $root 'quant-data.js'), [Text.Encoding]::UTF8)
$uni = @(); $usedIds = @{}
foreach ($m in [regex]::Matches($js, '(?m)^\{"id":"([^"]+)","name":"((?:[^"\\]|\\.)*)"')) {
  $nm = [regex]::Unescape($m.Groups[2].Value); $keys = @()
  foreach ($part in ($nm -split ' / ')) { $keys += (Norm $part); $keys += (Norm ($part -replace '\s*\(.*?\)', '')); $p = [regex]::Match($part, '\((.*?)\)'); if ($p.Success) { $keys += (Norm $p.Groups[1].Value) } }
  $uni += [pscustomobject]@{ id = $m.Groups[1].Value; name = $nm; keys = ($keys | Where-Object { $_ -and $_.Length -ge 3 } | Sort-Object -Unique) }; $usedIds[$m.Groups[1].Value] = $true }
$ovr = @{}; foreach ($r in (Import-Csv (Join-Path $PSScriptRoot 'pitchbook-match.csv'))) { $ovr[$r.pitchbook_name] = $r }
$ren = @{}; $renFile = Join-Path $PSScriptRoot 'pitchbook-rename.csv'; if (Test-Path $renFile) { foreach ($r in (Import-Csv $renFile)) { $ren[$r.pbid] = $r.display_name } }   # display names for different companies that share a name (ids are unchanged)
$match = @{}   # pbid -> dashboard id
foreach ($r in $pb) {
  $o = $ovr[$r.Companies]
  if ($o -and $o.action -eq 'new') { continue }
  if ($o -and $o.action -eq 'map') { $u = $uni | Where-Object { $_.name -eq $o.dashboard_name } | Select-Object -First 1; if ($u) { $match[$r.'Company ID'] = $u.id }; continue }
  $k = Norm $r.Companies; $u = $uni | Where-Object { $_.keys -contains $k } | Select-Object -First 1; if ($u) { $match[$r.'Company ID'] = $u.id } }
$dupe = $match.GetEnumerator() | Group-Object Value | Where-Object Count -gt 1
if ($dupe) { Write-Warning ("Dashboard ids matched by more than one PitchBook row (add rows to pitchbook-match.csv): " + (($dupe | ForEach-Object { $_.Name }) -join ', ')) }

# ── mapping helpers ──
function Num($v) { $d = 0.0; if ([double]::TryParse([string]$v, [Globalization.NumberStyles]::Float, [Globalization.CultureInfo]::InvariantCulture, [ref]$d)) { $d } else { $null } }
function Dt($v) { $n = Num $v; if ($n -ne $null) { return ([datetime]'1899-12-30').AddDays($n).ToString('yyyy-MM-dd') }; $m = [regex]::Match([string]$v, '\d{2}-[A-Za-z]{3}-\d{4}'); if ($m.Success) { return ([datetime]::ParseExact($m.Value, 'dd-MMM-yyyy', [Globalization.CultureInfo]::InvariantCulture)).ToString('yyyy-MM-dd') }; $null }
function Bn($v) { $n = Num $v; if ($n -eq $null) { $null } else { [math]::Round($n / 1000, 3) } }
$usStates = 'AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY PR' -split ' '
function Country($hq) { $t = ($hq -split ',\s*')[-1].Trim(); if ($usStates -contains $t) { return 'USA' }; if ($t -eq 'United Kingdom') { return 'UK' }; if ($t -eq 'United States') { return 'USA' }; $t }
$regionOf = @{ 'USA' = 'North America'; 'Canada' = 'North America'; 'Mexico' = 'North America'; 'Brazil' = 'North America'; 'Argentina' = 'North America'; 'Colombia' = 'North America'; 'Chile' = 'North America'; 'Peru' = 'North America'; 'Uruguay' = 'North America'; 'Costa Rica' = 'North America'; 'El Salvador' = 'North America'; 'British Virgin Islands' = 'North America'; 'Cayman Islands' = 'North America'; 'Bermuda' = 'North America'
  'China' = 'Asia'; 'Hong Kong' = 'Asia'; 'Japan' = 'Asia'; 'South Korea' = 'Asia'; 'Taiwan' = 'Asia'; 'Macau' = 'Asia'
  'India' = 'APAC'; 'Singapore' = 'APAC'; 'Indonesia' = 'APAC'; 'Malaysia' = 'APAC'; 'Vietnam' = 'APAC'; 'Thailand' = 'APAC'; 'Philippines' = 'APAC'; 'Australia' = 'APAC'; 'New Zealand' = 'APAC'; 'Pakistan' = 'APAC'; 'Bangladesh' = 'APAC'; 'Seychelles' = 'APAC' }
function RegionOf($country) { if ($regionOf.ContainsKey($country)) { $regionOf[$country] } else { 'Europe' } }   # Europe also holds Israel, the Gulf, Turkey and Africa (as the existing universe does for Israel and Nigeria)
function SectorOf($ind, $spaces) {
  if ($ind -match 'Aerospace and Defense') { return 'Space & Defence' }
  if ($ind -match 'Semiconductors|Systems and Information Management') { return 'AI Infrastructure' }
  if ($ind -match 'Health|Drug|Biotech|Therapeutic|Diagnostic|Clinics|Medical|Discovery Tools|Pharma') { return 'Healthcare & Life Sciences' }
  if ($ind -match 'Financial|Brokerage|Bank|Insurance|Consumer Finance|Asset Management|Private Equity|Payment|Capital Markets') { return 'Fintech & Payments' }
  if ($spaces -match 'Robotic|Autonomous|Humanoid|Drone|Self-Driving' -or $ind -match 'Machinery') { return 'Robotics & Autonomy' }
  if ($spaces -match 'Generative AI|LLM|Artificial Intelligence|Machine Learning|Agentic' -and $ind -match 'Software|Information Services|Media') { return 'AI Models & Applications' }
  if ($ind -match 'Alternative Energy|Energy|Electrical Equipment|Chemicals|Mining|Metals' -or $spaces -match 'Quantum|Fusion|Climate|Battery|Nuclear|Synthetic Biology') { return 'Frontier Technology' }
  if ($ind -match 'Software|Computers|Hardware|Electronic|Internet|Information Services|Media|IT Consulting|Wireless|Connectivity|Telecommunications|Database') { return 'Software & Hardware' }
  'Consumer & Industrials'
}
$primary = 'Later Stage VC', 'Early Stage VC', 'PE Growth/Expansion', 'Seed Round', 'Corporate'   # LKV deal types that are a primary round (so LKV is a last-round post-money)
function Slug($name) { $t = ($name -replace '\(.*?\)', '').ToLower() -replace '&', 'and' -replace '[^a-z0-9]', ''; if ($t.Length -gt 28) { $t = $t.Substring(0, 28) }
  if ('constructor', 'prototype', 'tostring', 'valueof', 'hasownproperty' -contains $t) { $t += 'co' }   # ids are used as object keys in the page; never clash with JS built-ins
  $t }
function Clean($name, $ind) { $n = $name; if ($ind -and $n.EndsWith(" ($ind)")) { $n = $n.Substring(0, $n.Length - $ind.Length - 3) }; $n.Trim() }

# ── build ──
$PBD = [ordered]@{}; $newRecs = New-Object Collections.Generic.List[string]; $filled = 0
foreach ($r in ($pb | Sort-Object { [double]$_.'Valuation Estimate' } -Descending)) {
  $pbid = $r.'Company ID'; $id = $match[$pbid]; $isNew = -not $id
  $name = Clean $r.Companies $r.'Primary PitchBook Industry Code'
  $country = Country $r.'HQ Location'
  if ($isNew) { $id = Slug $name; if ($usedIds[$id]) { $id = $id + (Slug $country).Substring(0, [Math]::Min(3, (Slug $country).Length)) }; $n = 2; $base = $id; while ($usedIds[$id]) { $id = "$base$n"; $n++ }; $usedIds[$id] = $true }
  $inv = @(); if ($r.'Active Investors') { $inv = @($r.'Active Investors' -split ',\s*' | Where-Object { $_ }) }
  $desc = $r.Description; if ($desc -and $desc.Length -gt 420) { $desc = $desc.Substring(0, 417).TrimEnd() + '...' }
  $entry = [ordered]@{ pbid = $pbid; est = Bn $r.'Valuation Estimate'; ind = $r.'Primary PitchBook Industry Code'; spaces = $r.'Emerging Spaces'; hq = $r.'HQ Location'
    founded = $(if ($r.'Year Founded') { [int]$r.'Year Founded' } else { $null }); rev = Num $r.Revenue; revg = Num $r.'Revenue Growth %'
    lkv = Bn $r.'Last Known Valuation'; lkvType = $r.'Last Known Valuation Deal Type'; lkvDate = Dt $r.'Last Known Valuation Date'
    finType = $r.'Last Financing Deal Type'; finDate = Dt $r.'Last Financing Date'; invN = $inv.Count; inv = @($inv | Select-Object -First 10)
    status = $r.'Ownership Status'; desc = $desc }
  $PBD[$id] = $entry
  if ($isNew) {
    $lrEv = $null; $lrName = $null; $lrDate = $null
    if ($primary -contains $r.'Last Known Valuation Deal Type' -and $entry.lkv) { $lrEv = $entry.lkv; $lrName = $r.'Last Known Valuation Deal Type'; $lrDate = $entry.lkvDate }
    $note = 'Added from the PitchBook unicorn list, ' + ([datetime]$asof).ToString('MMM yyyy') + '. Current valuation is PitchBook''s estimate.'
    if ($r.'Ownership Status' -eq 'In IPO Registration') { $note += ' PitchBook shows the company in IPO registration.' }
    $rec = [ordered]@{ id = $id; name = $(if ($ren.ContainsKey($pbid)) { $ren[$pbid] } else { $name }); region = (RegionOf $country); hq = $country; sector = (SectorOf $r.'Primary PitchBook Industry Code' $r.'Emerging Spaces'); sub = $r.'Primary PitchBook Industry Code'
      tier = 'Tail'; listed = $false; mq = $null; wl = $null; aug = $null; c50 = $null; forgeTraded = $false; lrEv = $lrEv; lrName = $lrName; lrDate = $lrDate
      curVal = $entry.est; curValSrc = 'pitchbook'; note = $note; ctype = $null; ccy = 'USD'; status = $null; liq = $null; rank = $null; srank = $null; shares = $null; shSrc = $null
      px = [ordered]@{ c = $null; f = $null; a = $null }; pxSrc = 'pitchbook'; hist = $null }
    $newRecs.Add(($rec | ConvertTo-Json -Compress -Depth 4))
  }
}
$hdrTxt = "// Generated by .claude/work/add-pitchbook.ps1 from a PitchBook export - do not edit; re-run the script.`n"
[IO.File]::WriteAllText((Join-Path $root 'pitchbook-data.js'), ($hdrTxt + "// PitchBook facts per company id. est = PitchBook valuation estimate (US`$bn); lkv = last known valuation (US`$bn); rev = revenue (US`$m).`nwindow.PB_ASOF = `"$asof`";`nwindow.PB = " + ($PBD | ConvertTo-Json -Compress -Depth 5) + ";`n"), $utf8)
[IO.File]::WriteAllText((Join-Path $root 'pitchbook-universe.js'), ($hdrTxt + "// Companies in the PitchBook export that are not on the dashboard (one dashboard record per line, same shape as quant-data.js).`nwindow.PB_UNIVERSE = [`n" + ($newRecs -join ",`n") + "`n];`n"), $utf8)
Write-Host "Matched to existing dashboard companies: $($match.Count) · new companies added: $($newRecs.Count) · pitchbook-data.js entries: $($PBD.Count)"
$sec = $newRecs | ForEach-Object { ($_ | ConvertFrom-Json).sector } | Group-Object | Sort-Object Count -Descending | ForEach-Object { "$($_.Name)=$($_.Count)" }; "New companies by sector: " + ($sec -join '; ')
$reg = $newRecs | ForEach-Object { ($_ | ConvertFrom-Json).region } | Group-Object | ForEach-Object { "$($_.Name)=$($_.Count)" }; "New companies by region: " + ($reg -join '; ')
