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
  # Valuation in US$ bn: lowest price x shares outstanding where both are known (same basis as the
  # dashboard's implied valuation, but at the low price), else the dashboard's reported valuation.
  $val = $null; $valBasis = ''
  if ($low -ne $null -and $o.shares) { $val = [math]::Round($low * $o.shares / 1e9, 3); $valBasis = 'Low price x shares' }
  elseif ($o.curVal -ne $null) { $val = $o.curVal; $valBasis = 'Reported valuation' }
  [pscustomobject]@{
    id = $o.id; name = $o.name; ccy = $o.ccy
    low = $low; low_venue = $lowAt
    clarity = $o.px.c; forge = $o.px.f; augment = $o.px.a
    asof = $asof
    val_bn = $val; val_basis = $valBasis
  }
}
$csv = ($rows | ConvertTo-Csv -NoTypeInformation) -join "`n"
[IO.File]::WriteAllText((Join-Path $root 'feed-prices.csv'), $csv + "`n", (New-Object Text.UTF8Encoding $false))
