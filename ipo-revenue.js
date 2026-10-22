// Revenue in the IPO prospectus (424B4 on sec.gov) for ten recent US tech IPOs, US$ millions, researched 22 Oct 2026. fyRevenueM = last full fiscal year before the IPO; ltmRevenueM only where the prospectus states one.
// The Market comparables page joins this to ipo-exits.js (equity value at the IPO price) to show equity value / revenue at IPO.
window.IPOREV = {
 "researched": "2026-10-22",
 "companies": [
  {
   "ticker": "RDDT",
   "name": "Reddit",
   "fyLabel": "FY2023, year ended 31 Dec 2023",
   "fyRevenueM": 804.029,
   "fyPriorM": 666.701,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm"
   ],
   "note": "Reported in US$ thousands in the 424B4 (804,029 vs 666,701); about 98% of revenue is advertising."
  },
  {
   "ticker": "RBRK",
   "name": "Rubrik",
   "fyLabel": "FY2024, year ended 31 Jan 2024",
   "fyRevenueM": 627.892,
   "fyPriorM": 599.819,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/1943896/000119312524118478/d359771d424b4.htm"
   ],
   "note": "Total revenue (subscription plus maintenance) per 424B4; fiscal year ends 31 January; no LTM stated."
  },
  {
   "ticker": "ALAB",
   "name": "Astera Labs",
   "fyLabel": "FY2023, year ended 31 Dec 2023",
   "fyRevenueM": 115.794,
   "fyPriorM": 79.872,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/1736297/000119312524073873/d285484d424b4.htm"
   ],
   "note": "Reported in US$ thousands (115,794 vs 79,872); no LTM stated."
  },
  {
   "ticker": "CRWV",
   "name": "CoreWeave",
   "fyLabel": "FY2024, year ended 31 Dec 2024",
   "fyRevenueM": 1915.426,
   "fyPriorM": 228.943,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/1769628/000119312525067651/d899798d424b4.htm"
   ],
   "note": "Reported in US$ thousands (1,915,426 vs 228,943); no LTM stated."
  },
  {
   "ticker": "CRCL",
   "name": "Circle Internet Group",
   "fyLabel": "FY2024, year ended 31 Dec 2024",
   "fyRevenueM": 1676.253,
   "fyPriorM": 1450.466,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/1876042/000119312525135795/d737521d424b4.htm"
   ],
   "note": "Total revenue and reserve income from continuing operations (US$ thousands 1,676,253 vs 1,450,466); Q1 2025 was 578.573 vs 365.094 but the prospectus states no LTM."
  },
  {
   "ticker": "CHYM",
   "name": "Chime Financial",
   "fyLabel": "FY2024, year ended 31 Dec 2024",
   "fyRevenueM": 1673.269,
   "fyPriorM": 1278.455,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/1795586/000162828025030855/chimefinancialinc-finalpro.htm"
   ],
   "note": "Reported in US$ thousands (1,673,269 vs 1,278,455); no LTM stated."
  },
  {
   "ticker": "FIG",
   "name": "Figma",
   "fyLabel": "FY2024, year ended 31 Dec 2024",
   "fyRevenueM": 749.011,
   "fyPriorM": 504.874,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm"
   ],
   "note": "Reported in US$ thousands (749,011 vs 504,874); Q1 2025 revenue 228.199, no LTM stated."
  },
  {
   "ticker": "KLAR",
   "name": "Klarna",
   "fyLabel": "FY2024, year ended 31 Dec 2024",
   "fyRevenueM": 2811,
   "fyPriorM": 2276,
   "ltmLabel": "LTM ended 30 Jun 2025",
   "ltmRevenueM": 3010,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/2003292/000200329225000052/klarnagroupplc424b4.htm"
   ],
   "note": "Total revenue presented in US$ millions in the prospectus (no conversion by us); LTM figure is stated by the company in the prospectus."
  },
  {
   "ticker": "NTSK",
   "name": "Netskope",
   "fyLabel": "FY2025, year ended 31 Jan 2025",
   "fyRevenueM": 538.268,
   "fyPriorM": 406.883,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/2063196/000119312525207534/netskope_424b4_sept_2025.htm"
   ],
   "note": "Reported in US$ thousands (538,268 vs 406,883); fiscal year ends 31 January; six months to 31 Jul 2025 revenue was 328.494 but no LTM stated."
  },
  {
   "ticker": "STUB",
   "name": "StubHub",
   "fyLabel": "FY2024, year ended 31 Dec 2024",
   "fyRevenueM": 1770.645,
   "fyPriorM": 1367.719,
   "ltmLabel": null,
   "ltmRevenueM": null,
   "basis": "Reported",
   "src": [
    "https://www.sec.gov/Archives/edgar/data/1337634/000119312525206300/d225849d424b4.htm"
   ],
   "note": "Reported in US$ thousands (1,770,645 vs 1,367,719); revenue is net of ticket price per accounting policy; six months to 30 Jun 2025 was 827.902 vs 803.451, no LTM stated."
  }
 ]
};
