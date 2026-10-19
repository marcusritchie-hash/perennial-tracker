// Confidential IPO filings confirmed by 2+ independent sources (company announcement or regulatory filing plus press).
// Hand-maintained, NOT generated: it survives master-workbook imports. Keyed by company id.
//   filed   date the confidential filing was made or announced
//   venue   regulator the draft went to (SEC = confidential draft S-1; SEBI = India confidential DRHP)
//   src     the confirming sources
//   setDate true = this date replaces the workbook's "Last filing update" month (workbook month was wrong or later than the filing)
// Companies not already in the IPO pipeline are added to it as "Confidentially filed". Checked 19 Oct 2026.
window.IPO_NEWS = {
  "anth":     {"filed":"2026-06-01","venue":"SEC","setDate":true,"src":[{"n":"Anthropic","u":"https://www.anthropic.com/news/confidential-draft-s1-sec"},{"n":"Crunchbase News","u":"https://news.crunchbase.com/public/ai-unicorn-anthropic-files-confidentially-for-ipo/"}]},
  "openai":   {"filed":"2026-06-08","venue":"SEC","src":[{"n":"CNBC","u":"https://www.cnbc.com/2026/06/08/openai-confidentially-files-for-ipo-prepping-wall-street-for-ai-debut.html"},{"n":"TechCrunch","u":"https://techcrunch.com/2026/06/08/following-anthropic-openai-files-confidentially-for-ipo/"}]},
  "oura":     {"filed":"2026-05-21","venue":"SEC","src":[{"n":"Business Wire","u":"https://www.businesswire.com/news/home/20260521960146/en/URA-Announces-Confidential-Submission-of-Draft-Registration-Statement-for-Proposed-Initial-Public-Offering"}]},
  "kraken":   {"filed":"2025-11-19","venue":"SEC","setDate":true,"src":[{"n":"The Block","u":"https://www.theblock.co/post/379498/kraken-confidentially-files-for-us-ipo-after-new-20-billion-valuation"},{"n":"The Defiant","u":"https://thedefiant.io/news/cefi/kraken-confidential-ipo-filing-usd800m-raise"}]},
  "razorpay": {"filed":"2026-06-12","venue":"SEBI","src":[{"n":"Business Today","u":"https://www.businesstoday.in/markets/ipo-corner/story/fintech-unicorn-razorpay-files-confidential-drhp-to-launch-its-ipo-check-details-537107-2026-06-16"},{"n":"The Paypers","u":"https://thepaypers.com/payments/news/razorpay-confidentially-files-draft-ipo-papers-with-sebi"}]},
  "phonepe":  {"filed":"2025-09-24","venue":"SEBI","src":[{"n":"Business Standard","u":"https://www.business-standard.com/amp/markets/ipo/phonepe-files-confidential-draft-papers-ahead-of-ipo-125092400256_1.html"},{"n":"Entrackr","u":"https://entrackr.com/news/phonepe-files-confidential-drhp-with-sebi-for-rs-12000-cr-ipo-10496276"}]},
  "zepto":    {"filed":"2025-12-26","venue":"SEBI","src":[{"n":"Business Standard","u":"https://www.business-standard.com/amp/companies/start-ups/quick-commerce-zepto-to-confidentially-file-draft-papers-for-ipo-on-friday-125122500761_1.html"},{"n":"Entrackr","u":"https://entrackr.com/news/zepto-board-approves-rs-11000-cr-raise-ahead-of-confidential-ipo-filing-10947108"}]}
};
