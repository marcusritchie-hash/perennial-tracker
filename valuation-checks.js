// Current valuations checked against the Augment explore page (app.augment.market, read in Chrome on 21 Oct 2026), for companies where the
// valuation from our own prices and share counts disagreed with PitchBook's estimate by more than 2.5x.
// items: valuations applied on the dashboard. val in US$ bn. src "Augment" uses Augment's price and valuation (shares = valuation / price);
//        src "PitchBook est." is the fallback where neither Augment nor our own count could be relied on.
// reviewed: every company checked, with what Augment showed and what was decided. Nothing is applied from this list.
window.VAL_CHECK = {
  "asof": "2026-10-21",
  "source": "Augment explore page (app.augment.market), read 21 Oct 2026; PitchBook export 19 Oct 2026",
  "items": {
    "clay": { "src": "Augment", "val": 8.49, "price": 26.44 },
    "whatnot": { "src": "Augment", "val": 21.4, "price": 161.36 },
    "onebrief": { "src": "PitchBook est.", "val": 3.15 }
  },
  "reviewed": [
    { "id": "clay", "name": "Clay", "status": "changed", "augment": { "val": 8.49, "price": 26.44 }, "note": "Our share count (28.18m, derived) gave $0.63bn; Augment's valuation / price implies about 321m shares. Augment's valuation is applied." },
    { "id": "whatnot", "name": "Whatnot", "status": "changed", "augment": { "val": 21.4, "price": 161.36 }, "note": "Our share count (31.23m, derived) gave $4.84bn; Augment implies about 133m shares. Augment's valuation is applied." },
    { "id": "ripple", "name": "Ripple", "status": "confirmed", "augment": { "val": 16.3, "price": 99.01 }, "note": "Augment's valuation and implied shares (about 164.6m) match ours (164.5m). PitchBook's estimate ($56.66bn) is the outlier." },
    { "id": "epic", "name": "Epic Games", "status": "confirmed", "augment": { "val": 7.35, "price": 196.06 }, "note": "Augment matches ours (37.5m shares). PitchBook's estimate ($24bn) is the outlier." },
    { "id": "figureai", "name": "Figure AI", "status": "confirmed", "augment": { "val": 37.5, "price": 187.56 }, "note": "Augment ($37.5bn, about 200m shares) is close to ours ($34.4bn, 196.7m). PitchBook's estimate ($100.84bn) is the outlier." },
    { "id": "liquiddeath", "name": "Liquid Death", "status": "confirmed", "augment": { "val": 0.95, "price": 8.73 }, "note": "Augment's implied shares (about 108.8m) match ours. Our average price ($6.46) is lower than Augment's ($8.73), which lifts the valuation from $0.70bn to $0.95bn." },
    { "id": "neuralink", "name": "Neuralink", "status": "confirmed", "augment": { "val": 52.5, "price": 276.39 }, "note": "Augment matches ours (190.5m shares, $54.6bn at an older price). PitchBook's estimate ($12.5bn) is the outlier." },
    { "id": "scaleai", "name": "Scale AI", "status": "unresolved", "augment": { "val": 3.02, "price": 2.04 }, "note": "Three figures disagree: Augment $3.02bn at $2.04 a share, ours $14.9bn at $10.00 (workbook, 1.49bn shares), PitchBook estimate $38.99bn. Not changed." },
    { "id": "onebrief", "name": "Onebrief", "status": "fallback", "augment": null, "note": "Not on Augment. Our share count (28.37m) is derived. PitchBook's estimate ($3.15bn) is shown, labelled." },
    { "id": "waymo", "name": "Waymo (Alphabet)", "status": "unresolved", "augment": { "val": 30, "price": null }, "note": "Augment shows $30bn with no price. Ours is $1,014bn (Clarity $460.97 x 2.2bn shares), PitchBook estimate $141.89bn, last known $126bn (22 Apr 2026). Not changed." }
  ]
};
