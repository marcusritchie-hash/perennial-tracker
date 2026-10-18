// Scoring and bucket-rule parameters, edited through the master Excel's Methodology sheet (imported by .claude/work/import-master.ps1).
// Units as in that sheet: weights and percentage bounds in %, months in months, valuations in US$ billions, scores 0–100.
window.METHOD = {
  "pillar.va": 40, "pillar.lq": 30, "pillar.dm": 30,
  "va.prem.w": 40, "va.prem.lo": -30, "va.prem.hi": 60,
  "va.growth.w": 30, "va.growth.lo": 0, "va.growth.hi": 150,
  "va.fresh.w": 15, "va.fresh.full": 3, "va.fresh.zero": 36,
  "va.path.w": 15, "va.path.filed": 100, "va.path.plans": 50, "va.path.tenderMonths": 24,
  "lq.venues.w": 30,
  "lq.spread.w": 25, "lq.spread.zero": 30, "lq.spread.full": 3, "lq.spread.single": 40,
  "lq.scale.w": 30, "lq.scale.lo": 1, "lq.scale.hi": 300,
  "lq.tender.w": 15,
  "dm.aug.w": 35, "dm.aug.hm": 25,
  "dm.c50.w": 35,
  "dm.mom.w": 30, "dm.mom.lo": -20, "dm.mom.hi": 30,
  "rule.minPillars": 2,
  "rule.watch.comp": 40, "rule.watch.va": 70,
  "data.staleMonths": 18
};
