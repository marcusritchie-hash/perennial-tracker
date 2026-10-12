param(
  [Parameter(Mandatory)] [string]$Master,    # TSV dump of 'Master Universe' (sheet5)
  [Parameter(Mandatory)] [string]$Liquidity, # TSV dump of 'Liquidity Calc' (sheet3)
  [Parameter(Mandatory)] [string]$Marquee    # TSV dump of 'Current Marquee List' (sheet1)
)
# One-off import of Perennial Pre-IPO_Fund_UniverseMR1.xlsx into quant-data.js.
# For companies already in index.html (Top 50) the tracker's prices, share counts and
# verified history win over the workbook, since the tracker is now the master.
$ErrorActionPreference = 'Stop'
$root = Join-Path $PSScriptRoot '..\..'
$html = Get-Content (Join-Path $root 'index.html') -Raw -Encoding UTF8
$asof = '2026-10-12'

function Rows($p) { Get-Content $p -Encoding UTF8 | ForEach-Object { , ($_ -split "`t") } }
function Key($s) { ($s -replace '\(.*?\)', '' -replace '[^A-Za-z0-9]', '').ToLower() }
function J($v) {
  if ($v -eq $null -or ($v -is [string] -and $v -eq '')) { return 'null' }
  if ($v -is [double] -or $v -is [int]) { return [string]$v }
  '"' + ($v -replace '\\', '\\' -replace '"', '\"') + '"'
}
function Num($s) {
  if ($s -eq $null) { return $null }
  $t = ($s -replace '[\$€£,\s]', '')
  if ($t -match '^-?\d+(\.\d+)?$') { return [double]$t } else { return $null }
}
function Bn($s) {   # '$188B' / '$1.96T' / '1.6BN' / '965' -> $bn
  if (-not $s) { return $null }
  $t = ($s -replace '[\$,\s]', '').ToUpper()
  if ($t -match '^(\d+(\.\d+)?)T$') { return [double]$Matches[1] * 1000 }
  if ($t -match '^(\d+(\.\d+)?)(B|BN)$') { return [double]$Matches[1] }
  if ($t -match '^(\d+(\.\d+)?)M$') { return [double]$Matches[1] / 1000 }
  if ($t -match '^\d+(\.\d+)?$') { return [double]$t }
  $null
}
$SECTOR = @{ 'Defence' = 'Aerospace & Defense'; 'Software' = 'Enterprise Software' }

# Tracker companies, prices and history
$cos = @{}
foreach ($m in [regex]::Matches($html, "\{ id:'([^']+)', name:'([^']+)'.*?shares:([0-9.e]+).*?p1:([0-9.]+|null), p2:([0-9.]+|null), p3:([0-9.]+|null)")) {
  $cos[(Key $m.Groups[2].Value)] = @{ id = $m.Groups[1].Value; shares = [double]$m.Groups[3].Value
    c = $m.Groups[4].Value; f = $m.Groups[5].Value; a = $m.Groups[6].Value }
}
$hist = @{}
foreach ($m in [regex]::Matches($html, "(?m)^\s+(\w+):\s+\{ p1:\[(.*?)\], p2:\[(.*?)\], p3:\[(.*?)\] \},")) {
  $hist[$m.Groups[1].Value] = @{ c = $m.Groups[2].Value; f = $m.Groups[3].Value; a = $m.Groups[4].Value }
}

$liq = @{}
foreach ($r in (Rows $Liquidity | Where-Object { [int]$_[0] -ge 5 })) { if ($r[1]) { $liq[$r[1].Trim()] = $r } }   # exact name: "ElevenLabs (EU roots)" must not overwrite "ElevenLabs"
$mq = @{}
foreach ($r in (Rows $Marquee | Where-Object { [int]$_[0] -ge 6 })) { if ($r[4] -and $r[2] -match '^\d+$') { $mq[(Key $r[4])] = [int]$r[2] } }

# Workbook names that differ from the tracker's
$ALIAS = @{ 'Anthropic-adjacent / Sierra' = 'Sierra'; 'Helion' = 'Helion Energy' }
# Reviewed clean-up of placeholder rows (rename / drop), see name-map.csv
$MAP = @{}
Import-Csv (Join-Path $PSScriptRoot 'name-map.csv') -Encoding UTF8 | ForEach-Object { $MAP[$_.workbook_name] = $_ }
$dropped = 0
# Tiers for companies the workbook leaves unassigned (agreed 12 Oct 2026)
$TIER_FIX = @{ 'Cognition AI' = 'Conviction'; 'Skild AI' = 'Conviction'; 'Varda' = 'Tail'; 'Epic Games' = 'Tail'; 'Flock Safety' = 'Tail' }
# Tracker companies missing from the workbook: row stubs in Master Universe column order
$EXTRA = @(
  @('x', 'Cognition AI', 'North America', 'USA', 'AI', 'AI Coding Agents'),
  @('x', 'Skild AI', 'North America', 'USA', 'Robotics', 'Robot Foundation Models'),
  @('x', 'Epic Games', 'North America', 'USA', 'Consumer Internet', 'Gaming'),
  @('x', 'Flock Safety', 'North America', 'USA', 'Enterprise Software', 'Public Safety Tech')
) | ForEach-Object { , ($_ + @('') * 17) }

$out = @(); $seen = @{}; $matched = 0
$allRows = @(Rows $Master | Where-Object { [int]$_[0] -ge 5 }) + $EXTRA
foreach ($r in $allRows) {
  $orig = $r[1].Trim(); if (-not $orig) { continue }
  $m = $MAP[$orig]
  if ($m -and $m.action -eq 'drop') { $dropped++; continue }
  $name = if ($ALIAS[$orig]) { $ALIAS[$orig] } elseif ($m -and $m.action -eq 'rename') { $m.new_name } else { $orig }
  $k = Key $name
  $id = $k; $n = 2; while ($seen[$id]) { $id = "$k$n"; $n++ }; $seen[$id] = 1
  $sec = $r[4].Trim(); if ($SECTOR[$sec]) { $sec = $SECTOR[$sec] }
  $tier = if ($r[6]) { $r[6].Trim() } elseif ($TIER_FIX[$name]) { $TIER_FIX[$name] } else { 'Unassigned' }
  $lr = $r[21]; $lrName = $null; $lrDate = $null
  if ($lr -match '^(.*?)\s*\((\d{2})/(\d{2})/(\d{4})\)') { $lrName = $Matches[1]; $lrDate = "$($Matches[4])-$($Matches[2])-$($Matches[3])" }
  $ccy = if ($r[14] -match '€') { 'EUR' } elseif ($r[14] -match '£') { 'GBP' } else { 'USD' }

  $t = $cos[$k]
  if ($t -and $seen["t:$($t.id)"]) { continue }   # duplicate listing of a tracker company, e.g. "ElevenLabs (EU roots)"
  if ($t) {
    $seen["t:$($t.id)"] = 1
    $matched++
    $id = $t.id
    $px = "{`"c`":$($t.c),`"f`":$($t.f),`"a`":$($t.a)}"
    $h = $hist[$t.id]
    $hs = if ($h) { "{`"c`":[$($h.c -replace "'", '"')],`"f`":[$($h.f -replace "'", '"')],`"a`":[$($h.a -replace "'", '"')]}" } else { 'null' }
    $shares = $t.shares; $shSrc = 'tracker'; $pxSrc = 'tracker'; $ccy = 'USD'
  } else {
    $c = Num $r[14]; $f = Num $r[15]; $a = Num $r[22]
    $px = "{`"c`":$(J $c),`"f`":$(J $f),`"a`":$(J $a)}"
    $hs = 'null'; $pxSrc = 'workbook'
    $impl = Bn $r[19]
    if ($impl -and $c -and $ccy -eq 'USD') { $shares = [math]::Round($impl * 1e9 / $c / 1e4) * 1e4; $shSrc = 'derived' } else { $shares = $null; $shSrc = $null }
  }
  $l = $liq[$orig]
  $status = @($r[14], $r[15], $r[22]) | Where-Object { $_ -match 'Seeking|Confirming' } | Select-Object -First 1

  $out += '{' + (@(
    "`"id`":$(J $id)", "`"name`":$(J $name)", "`"region`":$(J $r[2].Trim())", "`"hq`":$(J $r[3])",
    "`"sector`":$(J $sec)", "`"sub`":$(J $r[5])", "`"tier`":$(J $tier)", "`"listed`":$(if ($r[12] -match "IPO'd") {'true'} else {'false'})",
    "`"mq`":$(J $mq[(Key $orig)])", "`"setter`":$(J (Num $r[8]))", "`"c50`":$(J (Num $r[9]))", "`"forgeTraded`":$(if ($r[10] -eq 'Y') {'true'} else {'false'})",
    "`"lrEv`":$(J (Bn $r[11]))", "`"lrName`":$(J $lrName)", "`"lrDate`":$(J $lrDate)", "`"curVal`":$(J (Bn $r[13]))",
    "`"note`":$(J $r[12])", "`"ctype`":$(J $r[20])", "`"ccy`":$(J $ccy)", "`"status`":$(J $status)",
    "`"liq`":$(J $(if ($l) { [math]::Round([double]$l[13], 1) }))", "`"rank`":$(J $(if ($l) { Num $l[14] }))", "`"srank`":$(J $(if ($l) { Num $l[15] }))",
    "`"shares`":$(J $shares)", "`"shSrc`":$(J $shSrc)", "`"px`":$px", "`"pxSrc`":$(J $pxSrc)", "`"hist`":$hs"
  ) -join ',') + '}'
}

$js = @"
// Generated by .claude/work/build-quant.ps1 — do not edit by hand.
// Master Universe imported from Perennial Pre-IPO_Fund_UniverseMR1.xlsx; Top 50 prices,
// share counts and history taken from index.html (refresh $asof).
// px: c = Clarity, f = Forge, a = Augment (price per share, USD unless ccy says otherwise).
const QD_ASOF = '$asof';
const UNI = [
$($out -join ",`n")
];
"@
[IO.File]::WriteAllText((Join-Path $root 'quant-data.js'), $js, (New-Object Text.UTF8Encoding $false))
"companies: $($out.Count)  dropped: $dropped  matched to tracker: $matched / $($cos.Count)"
$unmatched = $cos.Keys | Where-Object { -not $seen["t:$($cos[$_].id)"] }
"tracker names not matched: $($unmatched -join ', ')"
