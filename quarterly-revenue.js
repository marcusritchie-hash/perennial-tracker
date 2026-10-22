// Latest reported quarterly revenue per company id (US$m), from public reporting (press and company disclosures). ARR on the dashboard = revM x 4.
// Only explicitly reported, completed quarters; no run-rate, annual or derived figures. Found by web search 2026-10-20; most are secondary sources, see note/url.
window.QREV_ASOF = "2026-10-20";
window.QREV = {
    "anth":  {
                 "quarter":  "Q2 2026",
                 "revM":  11500,
                 "src":  "Bloomberg (via Bloomberg Government)",
                 "url":  "https://news.bgov.com/artificial-intelligence/anthropic-revenue-surges-to-over-11-5-billion-in-second-quarter",
                 "reported":  "2026-07",
                 "note":  "Preliminary figure from investor documents seen by Bloomberg: \u0027more than $11.5B\u0027, could be revised. NewsBytes says $11.6B. Q1 2026 was $4.73B."
             },
    "openai":  {
                   "quarter":  "Q2 2026",
                   "revM":  6700,
                   "src":  "Wall Street Journal (via CryptoBriefing)",
                   "url":  "https://cryptobriefing.com/openai-revenue-6-7-billion-q2-2026/",
                   "reported":  "2026-08",
                   "note":  "WSJ-reported ~$6.7B, up from $5.7B in Q1; read via aggregator repackaging WSJ, no primary OpenAI statement found. Exact report month approximate."
               },
    "canva":  {
                  "quarter":  "Q2 2026",
                  "revM":  921.9,
                  "src":  "companieshistory.com (citing Startup Daily / Canva CEO shareholder letter)",
                  "url":  "https://www.companieshistory.com/?p=51811",
                  "reported":  "2026-08",
                  "note":  "US$921.9M, up 25.2% YoY, June quarter 2026 per Canva shareholder letter; found via secondary aggregator, original not directly read"
              },
    "nscale":  {
                   "quarter":  "Q2 2026",
                   "revM":  100,
                   "src":  "Blockspace Media (citing investor pitch reports)",
                   "url":  "https://blockspace.media/insight/nscale-103-billion-contracted-revenue-ipo/",
                   "reported":  "2026-09",
                   "note":  "Reported as \u0027topped/over $100M\u0027 in Q2 2026 (Q1 ~ $37M); from pre-IPO investor briefings/leak, so approximate lower bound. IPO filing H1 2026 revenue $140.6M (Reuters) consistent. Date approximate."
               },
    "klingai":  {
                    "quarter":  "Q2 2026",
                    "revM":  118,
                    "src":  "Kuaishou Q2 2026 results (via Webull press release)",
                    "url":  "https://www.webull.com/news/15428603170825216",
                    "reported":  "2026-08-19",
                    "note":  "Kuaishou reported Kling AI revenue of \u0027over RMB 850 million\u0027 in Q2 2026 (\u003e200% YoY); converted at ~7.2 RMB/USD; floor figure, actual slightly higher."
                },
    "stripe":  {
                   "quarter":  "Q1 2026",
                   "revM":  2000,
                   "src":  "PitchBook news analysis: SaaStr citing The Information",
                   "url":  "https://www.saastr.com/5-interesting-learnings-from-stripe-at-6-8-billion-in-revenue-33-growth-47-free-cash-flow-margins-and-a-53b-bid-for-paypal/",
                   "reported":  "2026-07",
                   "note":  "Reported by The Information 22 Jul 2026 citing a person familiar; approximate ($2 billion)"
               }
};
