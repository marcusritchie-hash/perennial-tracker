# Writes feed-prices.csv from quant-data.js: one row per company with the average indicative price across
# Clarity, Forge and Augment and the implied valuation, computed exactly as quant.html does (USD companies only;
# valuation = average x shares, else the reported valuation). The lowest venue price is kept for reference.
# The Order Book workbook's Live Book columns B and C pull this file (Data > Refresh All).
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
  $low = $null; $lowAt = ''; $ps = @()
  foreach ($k in $venues.Keys) {
    $p = $o.px.$k
    if ($p -eq $null) { continue }
    $ps += $p
    if ($low -eq $null -or $p -lt $low) { $low = $p; $lowAt = $venues[$k] }
  }
  # Average: as quant.html's c.bl, only for USD-priced companies.
  $avg = if ($o.ccy -eq 'USD' -and $ps.Count) { ($ps | Measure-Object -Average).Average } else { $null }
  # Valuation in US$ bn: as quant.html's "Current valuation" (c.impl ?? c.curVal).
  $val = $null; $valBasis = ''
  if ($avg -and $o.shares) { $val = [math]::Round($avg * $o.shares / 1e9, 3); $valBasis = 'Average price x shares' }
  elseif ($o.curVal -ne $null) { $val = $o.curVal; $valBasis = 'Reported valuation' }
  [pscustomobject]@{
    id = $o.id; name = $o.name; ccy = $o.ccy
    low = $low; low_venue = $lowAt
    clarity = $o.px.c; forge = $o.px.f; augment = $o.px.a
    asof = $asof
    val_bn = $val; val_basis = $valBasis
    avg = $(if ($avg -ne $null) { [math]::Round($avg, 2) } else { $null }); venues = $ps.Count
  }
}
$csv = ($rows | ConvertTo-Csv -NoTypeInformation) -join "`n"
[IO.File]::WriteAllText((Join-Path $root 'feed-prices.csv'), $csv + "`n", (New-Object Text.UTF8Encoding $false))
