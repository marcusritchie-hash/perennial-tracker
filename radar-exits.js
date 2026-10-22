// Recent exits and pre-IPO case studies, as presented in the Perennial presentation (Oct 2026). Values are post-money valuations in US$ billions;
// dates are YYYY-MM. Multiples and months to exit are calculated on the page. A secondary print with only x has no stated value (trade multiple as presented).
// Exit values are fully diluted at the IPO or deal price where reported (Cerebras $56.4bn, Figma $19.3bn, Chime $11.6bn, Klarna $15.2bn); CoreWeave is as recorded by PitchBook ($18.56bn IPO post-money; $23bn fully diluted per company announcements); SpaceX ($1.77T) and X-energy ($9.1bn) are as reported, fully diluted not published.
// Source: company announcements, filings, Forge, public reporting; PitchBook Q2 2026 US VC Secondary Market Watch. Market data, not holdings or Fund performance.
window.RADAR = {
  "asof": "2026-10-22",
  "source": "Perennial presentation, Oct 2026 (company announcements, filings, Forge, public reporting)",
  "exits": [
    { "name": "SpaceX", "kind": "IPO", "exit": { "label": "IPO", "date": "2026-06", "val": 1770 }, "growth": { "val": 350, "date": "2024-12" }, "last": { "val": 1250, "date": "2026-02" }, "sec": { "val": 800, "kind": "tender", "date": "2025-12" },
      "note": "Rounds are company tenders; the last round is the xAI merger value and the exit includes xAI." },
    { "name": "Cerebras", "kind": "IPO", "exit": { "label": "IPO", "date": "2026-05", "val": 56.4 }, "growth": { "val": 8.1, "date": "2025-09" }, "last": { "val": 23, "date": "2026-02" }, "sec": { "x": 2.6, "kind": "trade", "date": "2026-04" },
      "note": "Exit value is fully diluted at the $185 IPO price ($39.8bn on basic shares); the trade multiple is restated to that basis." },
    { "name": "CoreWeave", "kind": "IPO", "exit": { "label": "IPO", "date": "2025-03", "val": 18.56 }, "growth": { "val": 2.52, "date": "2023-07" }, "last": { "val": 22, "date": "2024-11" }, "sec": { "val": 23, "kind": "tender", "date": "2024-11" },
      "note": "Rounds and IPO value as recorded by PitchBook (Series B $2.52bn post-money, Jul 2023; later-stage round $22bn, Nov 2024; IPO $18.56bn post-money at pricing, Mar 2025). Company announcements put the last round at about $19bn (May 2024) and the IPO at $23bn fully diluted." },
    { "name": "Cursor", "kind": "Sale", "exit": { "label": "SpaceX", "date": "2026-08", "val": 60 }, "growth": { "val": 9.9, "date": "2025-06" }, "last": { "val": 29.3, "date": "2025-11" }, "sec": { "tbc": true } },
    { "name": "Wiz", "kind": "Sale", "exit": { "label": "Google", "date": "2025-03", "val": 32 }, "growth": { "val": 10, "date": "2023-02" }, "last": { "val": 12, "date": "2024-05" }, "sec": { "tbc": true } },
    { "name": "Groq", "kind": "Sale", "exit": { "label": "Nvidia", "date": "2025-12", "val": 20 }, "growth": { "val": 2.8, "date": "2024-08" }, "last": { "val": 6.9, "date": "2025-09" }, "sec": { "none": true } },
    { "name": "Scale AI", "kind": "Sale", "exit": { "label": "Meta 49%", "date": "2025-06", "val": 29, "implied": true }, "growth": { "val": 7.3, "date": "2021-04" }, "last": { "val": 13.8, "date": "2024-05" }, "sec": { "val": 25, "kind": "tender", "date": "2025-04" } },
    { "name": "X-energy", "kind": "IPO", "exit": { "label": "IPO", "date": "2026-04", "val": 9.1 }, "growth": { "val": 1.8, "date": "2025-01" }, "last": { "val": 4.75, "date": "2025-11" }, "sec": { "tbc": true } },
    { "name": "Figma", "kind": "IPO", "exit": { "label": "IPO", "date": "2025-07", "val": 19.3 }, "growth": { "val": 2, "date": "2020-04" }, "last": { "val": 10, "date": "2021-06" }, "sec": { "val": 12.5, "kind": "tender", "date": "2024-07" } },
    { "name": "Klarna", "kind": "IPO", "exit": { "label": "IPO", "date": "2025-09", "val": 15.2 }, "growth": { "val": 45.6, "date": "2021-06" }, "last": { "val": 6.7, "date": "2022-07" }, "sec": { "x": 1.1, "kind": "trade", "date": "2025-04" } },
    { "name": "Chime", "kind": "IPO", "exit": { "label": "IPO", "date": "2025-06", "val": 11.6 }, "growth": { "val": 14.5, "date": "2020-09" }, "last": { "val": 25, "date": "2021-08" }, "sec": { "x": 0.9, "kind": "trade", "date": "2025-05" } }
  ],
  "cases": [
    { "name": "Cerebras", "ticker": "CBRS", "bars": [ { "l": "SEP 25", "v": 8, "t": "$8B" }, { "l": "FEB 26", "v": 23, "t": "$23B" }, { "l": "MAY 26", "v": 56, "t": "$56B" }, { "l": "DAY ONE", "v": 67, "t": "~$67B" } ],
      "big": "~2.5×", "text": "last round to IPO (3mths)", "sub": "~7× from Sep 25 round" },
    { "name": "SpaceX", "ticker": "SPCX", "bars": [ { "l": "DEC 24", "v": 350, "t": "$350B" }, { "l": "DEC 25", "v": 800, "t": "$800B" }, { "l": "JUN 26", "v": 1770, "t": "$1.77T" }, { "l": "DAY ONE", "v": 2000, "t": "$2T+" } ],
      "big": "~5×", "text": "tender to IPO (18mths)", "sub": "" },
    { "name": "Anthropic", "id": "anth", "bars": [ { "l": "MAR 25", "v": 61, "t": "$61B" }, { "l": "FEB 26", "v": 380, "t": "$380B" }, { "l": "MAY 26", "v": 965, "t": "$965B" }, { "l": "IPO", "v": 965, "t": "?", "pending": true } ],
      "big": "~16×", "text": "pre-listing increment (14mths)", "sub": "" },
    { "name": "OpenAI", "id": "openai", "bars": [ { "l": "OCT 24", "v": 157, "t": "$157B" }, { "l": "Q4 25", "v": 500, "t": "$500B+" }, { "l": "MAR 26", "v": 852, "t": "$852B" }, { "l": "IPO", "v": 852, "t": "?", "pending": true } ],
      "big": "~5×", "text": "pre-listing increment (17mths)", "sub": "" }
  ]
};
