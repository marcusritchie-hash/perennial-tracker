// Funding rounds added from PitchBook deal histories (screenshots of the Deals tab provided by the team, 22 Oct 2026). Merged into the researched
// rounds (quant-rounds.js) when the page loads; a round already researched for the same date and name is kept as it is.
// Only rounds with a post-money valuation that adds up (pre-money + amount = post-money) are recorded. Amount in US$, post in US$ bn.
// Not recorded: rounds with no valuation shown, and any figure that could not be read with confidence. Source: PitchBook (login required).
window.QRX = {
  "neuralink": { "researched": "2026-10-22", "rounds": [
    { "date": "2019-06-28", "name": "Series B", "type": "Equity", "amount": 51000000, "post": 0.522, "leads": [], "basis": "PitchBook", "note": "Pre-money $471m. Early Stage VC.", "src": ["https://my.pitchbook.com/profile/179115-22/company/deals"] },
    { "date": "2021-07-30", "name": "Series C", "type": "Equity", "amount": 205900000, "post": 2.11, "leads": [], "basis": "PitchBook", "note": "Pre-money $1.90bn. Later Stage VC.", "src": ["https://my.pitchbook.com/profile/179115-22/company/deals"] },
    { "date": "2024-04-19", "name": "Series D", "type": "Equity", "amount": 323240000, "post": 3.30, "leads": [], "basis": "PitchBook", "note": "Pre-money $2.98bn. Later Stage VC.", "src": ["https://my.pitchbook.com/profile/179115-22/company/deals"] },
    { "date": "2025-08-15", "name": "Series E", "type": "Equity", "amount": 650000000, "post": 9.65, "leads": [], "basis": "PitchBook", "note": "Pre-money $9.00bn. Later Stage VC. PitchBook also lists a private secondary transaction on 26 Feb 2026 with no valuation shown.", "src": ["https://my.pitchbook.com/profile/179115-22/company/deals"] }
  ] },
  "crusoe": { "researched": "2026-10-22", "rounds": [
    { "date": "2021-04-26", "name": "Series B", "type": "Equity", "amount": 128000000, "post": 0.448, "leads": [], "basis": "PitchBook", "note": "Pre-money $320m. Early Stage VC.", "src": ["https://my.pitchbook.com/profile/267230-08/company/deals"] },
    { "date": "2024-12-12", "name": "Series D", "type": "Equity", "amount": 685720000, "post": 2.80, "leads": [], "basis": "PitchBook", "note": "Pre-money $2.11bn. Later Stage VC.", "src": ["https://my.pitchbook.com/profile/267230-08/company/deals"] },
    { "date": "2025-10-24", "name": "Series E", "type": "Equity", "amount": 1370000000, "post": 10.00, "leads": [], "basis": "PitchBook", "note": "Pre-money $8.63bn. Later Stage VC.", "src": ["https://my.pitchbook.com/profile/267230-08/company/deals"] },
    { "date": "2026-09-03", "name": "Series F", "type": "Equity", "amount": 3900000000, "post": 30.90, "leads": [], "basis": "PitchBook", "note": "Pre-money $27.00bn. Later Stage VC. PitchBook also shows general corporate purpose financing of $509m on 23 Sep 2026 and an IPO entry dated 18 Aug 2026.", "src": ["https://my.pitchbook.com/profile/267230-08/company/deals"] }
  ] }
,
  "moonshotai": { "researched": "2026-10-22", "rounds": [
    { "date": "2023-06-01", "name": "Seed Round", "type": "Equity", "amount": 200000000, "post": 1.50, "leads": [], "basis": "Estimated", "note": "Pre-money $1.30bn. PitchBook marks the post-money as estimated. A second seed round of $291.83m is shown on PitchBook without a clear valuation and is not recorded.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] },
    { "date": "2024-02-19", "name": "Series B", "type": "Equity", "amount": 1000000000, "post": 2.50, "leads": [], "basis": "PitchBook", "note": "Pre-money $1.50bn. Early Stage VC.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] },
    { "date": "2024-08-05", "name": "Early Stage VC (unnamed)", "type": "Equity", "amount": 300000000, "post": 3.30, "leads": [], "basis": "PitchBook", "note": "Pre-money $3.00bn. Early Stage VC.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] },
    { "date": "2025-10-24", "name": "Series C", "type": "Equity", "amount": 500000000, "post": 4.30, "leads": [], "basis": "PitchBook", "note": "Pre-money $3.80bn. Later Stage VC.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] },
    { "date": "2026-01-20", "name": "Later Stage VC (unnamed)", "type": "Equity", "amount": 700000000, "post": 10.00, "leads": [], "basis": "Estimated", "note": "Pre-money $9.30bn. PitchBook marks amount and post-money as estimated.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] },
    { "date": "2026-03-11", "name": "Later Stage VC (unnamed)", "type": "Equity", "amount": 1000000000, "post": 18.00, "leads": [], "basis": "Estimated", "note": "Pre-money $17.00bn. PitchBook marks the amount as estimated.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] },
    { "date": "2026-04-01", "name": "Series E", "type": "Equity", "amount": 2000000000, "post": 20.00, "leads": [], "basis": "Estimated", "note": "Pre-money $18.00bn. PitchBook marks amount and post-money as estimated.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] },
    { "date": "2026-06-29", "name": "Series F", "type": "Equity", "amount": 3500000000, "post": 35.00, "leads": [], "basis": "Estimated", "note": "Pre-money $31.50bn. PitchBook marks amount and post-money as estimated.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] },
    { "date": "2026-10-06", "name": "Series G", "type": "Equity", "amount": null, "post": 50.00, "leads": [], "basis": "Estimated", "note": "Amount and pre-money not shown. PitchBook marks the post-money as estimated. PitchBook also lists an IPO entry dated 26 Mar 2026 ($5.00bn) and an undated Later Stage VC entry of $5.00m, neither recorded as a round.", "src": ["https://my.pitchbook.com/profile/529062-76/company/deals"] }
  ] }
};
