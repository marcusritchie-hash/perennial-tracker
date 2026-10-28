// Confidential IPO filings confirmed by 2+ independent sources (company announcement or regulatory filing plus press). Entries with status "Reported" are press reports the company has not confirmed.
// Hand-maintained, NOT generated: it survives master-workbook imports. Keyed by company id.
//   filed   date the confidential filing was made or announced
//   venue   regulator the draft went to (SEC = confidential draft S-1; SEBI = India confidential DRHP)
//   src     the confirming sources
//   status  optional; "Reported" for a filing or plan reported by the press but not confirmed by the company (default: Confidentially filed)
//   setDate true = this date replaces the workbook's "Last filing update" month (workbook month was wrong or later than the filing)
//   status "New reported IPO" = named as a likely IPO candidate in Crunchbase's IPO predictions (2 Sep 2026); a prediction, not a filing. Source entries without a link (u) show as plain text.
//   public  date the public Form S-1 was filed; moves a Confidentially filed company to S-1 publicly filed (EDGAR check not needed)
// Companies not already in the IPO pipeline are added to it as "Confidentially filed". Checked 19 Oct 2026.
window.IPO_NEWS = {
  "notion": {"filed":"2026-09-02","venue":"Crunchbase IPO predictions","status":"New reported IPO","src":[{"n":"Crunchbase, 2 Sep 2026"}]},
  "sambanovasystems": {"filed":"2026-09-02","venue":"Crunchbase IPO predictions","status":"New reported IPO","src":[{"n":"Crunchbase, 2 Sep 2026"}]},
  "stegra": {"filed":"2026-09-02","venue":"Crunchbase IPO predictions","status":"New reported IPO","src":[{"n":"Crunchbase, 2 Sep 2026"}]},
  "stripe": {"filed":"2026-09-02","venue":"Crunchbase IPO predictions","status":"New reported IPO","src":[{"n":"Crunchbase, 2 Sep 2026"}]},
  "openevidence": {"filed":"2026-09-02","venue":"Crunchbase IPO predictions","status":"New reported IPO","src":[{"n":"Crunchbase, 2 Sep 2026"}]},
  "moonshotai":  {"filed":"2026-09-03","venue":"HKEX · reported, company has not confirmed","status":"Reported","src":[{"n":"DealStreetAsia","u":"https://www.dealstreetasia.com/stories/moonshot-hong-kong-ipo-494042/"},{"n":"TechNode","u":"https://technode.com/2026/09/03/moonshot-ai-reportedly-submits-confidential-hong-kong-ipo-filing/"}]},
  "xiaohongshu": {"filed":"2026-06-16","venue":"HKEX · reported plan to file, not confirmed","status":"Reported","src":[{"n":"TechNode","u":"https://technode.com/2026/06/16/xiaohongshu-said-to-prepare-confidential-hong-kong-ipo-filing-this-month/"},{"n":"The Standard","u":"https://www.thestandard.com.hk/finance/article/334698/Xiaohongshu-to-file-for-confidential-Hong-Kong-IPO-Bloomberg"}]},
  "agibot":      {"filed":"2026-07-24","venue":"HKEX · company confirmed the process has begun","status":"Reported","src":[{"n":"Caixin","u":"https://caixinglobal.com/2026-07-24/agibot-begins-hong-kong-ipo-process-as-chinas-embodied-ai-startups-race-to-list-102467856.html"}]},
  "anth":     {"filed":"2026-06-01","public":"2026-10-26","venue":"SEC","setDate":true,"src":[{"n":"SEC EDGAR, initial Form S-1, 26 Oct 2026","u":"https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002130357&type=S-1"},{"n":"Anthropic","u":"https://www.anthropic.com/news/confidential-draft-s1-sec"},{"n":"Crunchbase News","u":"https://news.crunchbase.com/public/ai-unicorn-anthropic-files-confidentially-for-ipo/"}]},
  "openai":   {"filed":"2026-06-08","venue":"SEC","src":[{"n":"CNBC","u":"https://www.cnbc.com/2026/06/08/openai-confidentially-files-for-ipo-prepping-wall-street-for-ai-debut.html"},{"n":"TechCrunch","u":"https://techcrunch.com/2026/06/08/following-anthropic-openai-files-confidentially-for-ipo/"}]},
  "oura":     {"filed":"2026-05-21","venue":"SEC","src":[{"n":"Business Wire","u":"https://www.businesswire.com/news/home/20260521960146/en/URA-Announces-Confidential-Submission-of-Draft-Registration-Statement-for-Proposed-Initial-Public-Offering"}]},
  "kraken":   {"filed":"2025-11-19","venue":"SEC","setDate":true,"src":[{"n":"The Block","u":"https://www.theblock.co/post/379498/kraken-confidentially-files-for-us-ipo-after-new-20-billion-valuation"},{"n":"The Defiant","u":"https://thedefiant.io/news/cefi/kraken-confidential-ipo-filing-usd800m-raise"}]},
  "razorpay": {"filed":"2026-06-12","venue":"SEBI","src":[{"n":"Business Today","u":"https://www.businesstoday.in/markets/ipo-corner/story/fintech-unicorn-razorpay-files-confidential-drhp-to-launch-its-ipo-check-details-537107-2026-06-16"},{"n":"The Paypers","u":"https://thepaypers.com/payments/news/razorpay-confidentially-files-draft-ipo-papers-with-sebi"}]},
  "phonepe":  {"filed":"2025-09-24","venue":"SEBI","src":[{"n":"Business Standard","u":"https://www.business-standard.com/amp/markets/ipo/phonepe-files-confidential-draft-papers-ahead-of-ipo-125092400256_1.html"},{"n":"Entrackr","u":"https://entrackr.com/news/phonepe-files-confidential-drhp-with-sebi-for-rs-12000-cr-ipo-10496276"}]},
  "zepto":    {"filed":"2025-12-26","venue":"SEBI","src":[{"n":"Business Standard","u":"https://www.business-standard.com/amp/companies/start-ups/quick-commerce-zepto-to-confidentially-file-draft-papers-for-ipo-on-friday-125122500761_1.html"},{"n":"Entrackr","u":"https://entrackr.com/news/zepto-board-approves-rs-11000-cr-raise-ahead-of-confidential-ipo-filing-10947108"}]}
};

// IPO value we assume for a company (US$bn equity value, low and high), used on the Marquee Watchlist to test the return at the IPO against the bucket target.
// Hand-maintained. An assumption, not a company disclosure: set it when the price range is known or the team has a view.
window.IPO_ASSUME = {
  "anth": {"lo":1750,"hi":2000,"src":"Perennial S-1 review, 27 Oct 2026 (price range not yet set in the filing)"}
};
