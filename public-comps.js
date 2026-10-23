// Listed comparables for the Company profile page (quant.html#profile/<id>), per company id. Compiled by hand; re-check before reuse.
// Valuation fields from stockanalysis.com statistics pages (S&P Global Market Intelligence data), read 23 Oct 2026, as at the 22 Oct 2026 close.
// Prices and the 3m / 6m changes from Yahoo Finance daily closes: last close vs the close on or before 22 Jul 2026 and 22 Apr 2026.
//   t: ticker · ccy: listing currency (mcap and px are in it) · mcap / ev: market cap and enterprise value, bn · px: last close
//   evs: EV / Sales (trailing 12 months) · fps: price / forward sales · eveb: EV / EBITDA (TTM) · pe / fpe: trailing and forward P/E
//   revg: revenue growth year on year, latest reported quarter, % · ch3 / ch6: share price change over 3 and 6 months, %
//   null = not meaningful (negative earnings) or not shown by the source.
window.PUBCOMPS = {
  "stripe": {
    "asof": "2026-10-22",
    "src": "stockanalysis.com (S&P Global Market Intelligence) and Yahoo Finance, read 23 Oct 2026",
    "note": "Payments processors, merchant platforms, BNPL and the card networks. Revenue bases differ: some peers report revenue gross of processing and network costs, which lowers their EV / Sales against a company reporting net revenue. Global Payments' growth includes the Worldpay acquisition. Klarna's and Adyen's enterprise values are low against market cap because of their net cash.",
    "comps": [
      { "t": "V",        "name": "Visa",             "ccy": "USD", "px": 414.34, "mcap": 760.56, "ev": 770.63, "evs": 17.32, "fps": 15.40, "eveb": 24.78, "pe": 35.27,  "fpe": 28.66, "revg": 14.39, "ch3": 17.2,  "ch6": 33.1 },
      { "t": "MA",       "name": "Mastercard",       "ccy": "USD", "px": 633.21, "mcap": 554.70, "ev": 567.59, "evs": 16.18, "fps": 14.06, "eveb": 25.57, "pe": 34.82,  "fpe": 29.71, "revg": 16.01, "ch3": 19.0,  "ch6": 24.1 },
      { "t": "SHOP",     "name": "Shopify",          "ccy": "USD", "px": 168.81, "mcap": 217.20, "ev": 211.90, "evs": 15.97, "fps": 12.81, "eveb": 88.48, "pe": 113.94, "fpe": 80.50, "revg": 32.50, "ch3": 42.6,  "ch6": 27.9 },
      { "t": "PYPL",     "name": "PayPal",           "ccy": "USD", "px": 57.53,  "mcap": 49.22,  "ev": 52.18,  "evs": 1.53,  "fps": 1.39,  "eveb": 8.08,  "pe": 10.85,  "fpe": 10.39, "revg": 5.69,  "ch3": 3.6,   "ch6": 12.3 },
      { "t": "XYZ",      "name": "Block",            "ccy": "USD", "px": 79.02,  "mcap": 47.77,  "ev": 48.20,  "evs": 1.92,  "fps": 1.75,  "eveb": 31.14, "pe": 134.32, "fpe": 17.27, "revg": 5.07,  "ch3": 2.0,   "ch6": 9.0 },
      { "t": "ADYEN.AS", "name": "Adyen",            "ccy": "EUR", "px": 940.30, "mcap": 30.13,  "ev": 18.13,  "evs": 7.02,  "fps": null,  "eveb": 13.41, "pe": 26.83,  "fpe": 22.31, "revg": 17.91, "ch3": 14.5,  "ch6": -3.1, "pxDate": "2026-10-21" },
      { "t": "FISV",     "name": "Fiserv",           "ccy": "USD", "px": 50.82,  "mcap": 27.02,  "ev": 54.43,  "evs": 2.61,  "fps": 1.35,  "eveb": 7.04,  "pe": 9.74,   "fpe": 6.93,  "revg": -1.17, "ch3": 1.2,   "ch6": -19.7 },
      { "t": "AFRM",     "name": "Affirm",           "ccy": "USD", "px": 72.40,  "mcap": 24.43,  "ev": 32.75,  "evs": 7.69,  "fps": 4.46,  "eveb": 44.31, "pe": 13.09,  "fpe": 36.15, "revg": 32.15, "ch3": -2.0,  "ch6": 8.7 },
      { "t": "GPN",      "name": "Global Payments",  "ccy": "USD", "px": 85.88,  "mcap": 22.73,  "ev": 40.87,  "evs": 4.00,  "fps": 1.79,  "eveb": 9.12,  "pe": null,   "fpe": 5.84,  "revg": 32.20, "ch3": 8.8,   "ch6": 19.9 },
      { "t": "TOST",     "name": "Toast",            "ccy": "USD", "px": 33.42,  "mcap": 19.32,  "ev": 17.60,  "evs": 2.59,  "fps": 2.37,  "eveb": 36.91, "pe": 42.60,  "fpe": 21.45, "revg": 23.06, "ch3": 14.4,  "ch6": 13.4 },
      { "t": "CHYM",     "name": "Chime Financial",  "ccy": "USD", "px": 30.16,  "mcap": 11.42,  "ev": 10.44,  "evs": 4.25,  "fps": 3.73,  "eveb": 27.19, "pe": null,   "fpe": 45.30, "revg": 26.39, "ch3": 38.2,  "ch6": 26.7 },
      { "t": "KLAR",     "name": "Klarna",           "ccy": "USD", "px": 13.23,  "mcap": 5.02,   "ev": 1.95,   "evs": 0.48,  "fps": 1.17,  "eveb": null,  "pe": null,   "fpe": 56.18, "revg": 34.10, "ch3": -25.9, "ch6": -10.6 }
    ]
  }
};
