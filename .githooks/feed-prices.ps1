# Writes feed-prices.csv from quant-data.js: one row per company with the lowest indicative price across
# Clarity, Forge and Augment. The Order Book workbook's Live Book column B pulls this file (Data > Refresh All).
# Run by .githooks/pre-commit on every commit (fed the staged quant-data.js); can also be run by hand.
param([string]$DataFile)
$root = Split-Path $PSScriptRoot -Parent
if (-not $DataFile) { $DataFile = Join-Path $root 'quant-data.js' }
$text = [IO.File]::ReadAllText($DataFile, [Text.Encoding]::UTF8)
$asof = [regex]::Match($text, "QD_ASOF = '([^']+)'").Groups[1].Value
$venues = [ordered]@{ c = 'Clarity'; f = 'Forge'; a = 'Augment' }
$rows = foreach ($line in ($text -split "`n")) {
  if ($line -notmatch '^\{"id":') { continue }
  $o = $line.TrimEnd(",`r") | ConvertFrom-Json
  $low = $null; $lowAt = ''
  foreach ($k in $venues.Keys) {
    $p = $o.px.$k
    if ($p -ne $null -and ($low -eq $null -or $p -lt $low)) { $low = $p; $lowAt = $venues[$k] }
  }
  [pscustomobject]@{
    id = $o.id; name = $o.name; ccy = $o.ccy
    low = $low; low_venue = $lowAt
    clarity = $o.px.c; forge = $o.px.f; augment = $o.px.a
    asof = $asof
  }
}
$csv = ($rows | ConvertTo-Csv -NoTypeInformation) -join "`n"
[IO.File]::WriteAllText((Join-Path $root 'feed-prices.csv'), $csv + "`n", (New-Object Text.UTF8Encoding $false))
