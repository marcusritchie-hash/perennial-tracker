// Marquee step-ups page (Valuations tab). The page lists the Marquee list plus any company in "include", minus "exclude", split by bucket.
// Edit this file (or ask Claude) to add, remove or move a company, to set how a company's last two rounds are chosen, or to add a note.
//   include / exclude : company ids (the id column in the Master Excel's Universe sheet)
//   bucket            : id -> "Late Growth" or "Crossover / Pre-IPO"; overrides the confirmed bucket for this page only
//   rule              : id -> "primary" compares primary rounds only (a tender at the same valuation is otherwise skipped)
//   notes             : id -> a short note shown in the footnote and the checks table
//   slide             : the figures on the presentation slide of 21 Oct 2026, used only to compare against the dashboard's own calculation
window.STEP = {
  "asof": "2026-10",
  "fx": { "EUR": 1.08 },
  "include": ["figureai", "mistralai", "fluidstack", "baseten", "saronic", "ereborbank"],
  "exclude": [],
  "bucket": {
    "fluidstack": "Late Growth", "baseten": "Late Growth", "ereborbank": "Late Growth"
  },
  "rule": { "openai": "primary" },
  "notes": {
    "openai": "Step-up is primary to primary (Mar 25 to Mar 26).",
    "neuralink": "Prior round unconfirmed.",
    "moonshotai": "PitchBook shows rounds at a pace of one every one to three months in 2026; several figures are marked estimated there.",
    "ereborbank": "PitchBook shows a Seed round of $635m on 13 Feb 2026 at $4.00bn post-money, and an undated Early Stage VC round of $1.50bn at $9.50bn post-money (marked estimated). The date is needed to place the second round."
  },
  "slide": {
    "figureai": { "b": "LG", "x": 15.0, "gap": 19 }, "crusoe": { "b": "LG", "x": 3.0, "gap": 11 }, "mistralai": { "b": "LG", "x": 1.8, "gap": 12 }, "kalshi": { "b": "LG", "x": 2.0, "gap": 6 },
    "polymarket": { "b": "LG", "x": 1.4, "gap": 4 }, "fluidstack": { "b": "LG", "x": 2.4, "gap": 8 }, "openevidence": { "b": "LG", "x": 1.2, "gap": 8 }, "baseten": { "b": "LG", "x": 2.6, "gap": 5 },
    "neuralink": { "b": "LG", "x": 2.8, "gap": 22 }, "saronic": { "b": "LG", "x": 2.3, "gap": 13 }, "ereborbank": { "b": "LG", "x": 2.2, "gap": 5 },
    "anth": { "b": "PI", "x": 2.5, "gap": 3 }, "openai": { "b": "PI", "x": 2.8, "gap": 12 }, "bytedance": { "b": "PI", "x": 1.1, "gap": 3, "hollow": true }, "databricks": { "b": "PI", "x": 1.4, "gap": 8 },
    "stripe": { "b": "PI", "x": 1.5, "gap": 5, "hollow": true }, "revolut": { "b": "PI", "x": 1.5, "gap": 8, "hollow": true }, "anduril": { "b": "PI", "x": 2.0, "gap": 11 }, "moonshotai": { "b": "PI", "x": 1.8, "gap": 2 }
  },
  "slideKpis": { "companies": 19, "combinedBn": 3100, "medianStepUp": 2.0, "medianGapMonths": 8 }
};
