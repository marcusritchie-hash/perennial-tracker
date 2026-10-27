// Funding rounds pulled from PitchBook's deals data through the PitchBook connector (27 Oct 2026 pilot). Merged into the researched rounds when the page loads; a company that
// already has a round within 20 days of a pulled round keeps its own, and a newer workbook last round is kept. Same fields as rounds-pitchbook.js.
// Rules: completed deals (and announced rounds with a valuation, flagged as announced) with a post-money valuation and a deal type of seed, early or later stage VC, growth, corporate or a private secondary; pre-money + amount must equal post-money within 2%.
// filings lists IPO, reverse-merger, SPAC and PIPE deals with their status.
// holders: investors from PitchBook's investor list (active investors and majority shareholders only; no stake percentages).
// post is in US$ bn, amount in US$. skipped lists newest deals left out and why; pbDeals is the number of deals PitchBook holds. Source: PitchBook (login required).
window.QRX2 = {
    "perp":  {
                 "researched":  "2026-10-27",
                 "rounds":  [
                                {
                                    "date":  "2025-09-11",
                                    "name":  "Series E",
                                    "type":  "Equity",
                                    "amount":  199999958,
                                    "post":  20.0,
                                    "leads":  [

                                              ],
                                    "basis":  "PitchBook",
                                    "note":  "Pre-money US$19.8bn; Later Stage VC; Price per share $69.5444",
                                    "src":  [
                                                "https://my.pitchbook.com/profile/517947-04/company/deals"
                                            ]
                                }
                            ],
                 "skipped":  [
                                 "2026-08-24 Later Stage VC: Rumor/Speculation, not completed, no post-money",
                                 "2026-05-27 Secondary Transaction - Private: no post-money valuation",
                                 "2026-04-01 Secondary Transaction - Private: no post-money valuation",
                                 "2026-01-01 Later Stage VC: no deal size or post-money valuation"
                             ],
                 "pbDeals":  13,
                 "holders":  [
                                 {
                                     "name":  "Riverside Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/300219-22/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "DAMAC Group",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/542419-21/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Qatar Investment Authority",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/25344-19/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Zoom Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/503148-88/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Arrington Capital",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/229958-29/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "T. Rowe Price Group",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/10072-54/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Treble (San Francisco)",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/491300-92/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Soleio Cuervo",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/109593-19/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Zak Stone",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/436885-66/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Microsoft for Startups",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/57670-21/investor/profile"
                                             ]
                                 }
                             ]
             },
    "harvey":  {
                   "researched":  "2026-10-27",
                   "rounds":  [
                                  {
                                      "date":  "2025-05-19",
                                      "name":  "Series E",
                                      "type":  "Equity",
                                      "amount":  300000000,
                                      "post":  5.0,
                                      "leads":  [
                                                    "Coatue Management",
                                                    "Kleiner Perkins"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$4.7bn; Later Stage VC",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/510703-21/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2025-12-03",
                                      "name":  "Series F",
                                      "type":  "Equity",
                                      "amount":  185090997,
                                      "post":  9.255,
                                      "leads":  [
                                                    "EQT",
                                                    "Andreessen Horowitz"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$9.156bn; Later Stage VC; Price per share $28.89883582; deal size includes about US$86.8m debt (equity about US$98.3m)",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/510703-21/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2026-03-24",
                                      "name":  "Series G",
                                      "type":  "Equity",
                                      "amount":  199999983,
                                      "post":  11.0,
                                      "leads":  [
                                                    "Sequoia Capital",
                                                    "Andreessen Horowitz",
                                                    "GIC Private"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$10.8bn; Later Stage VC; Price per share $33.6407",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/510703-21/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2026-09-24",
                                      "name":  "Series H",
                                      "type":  "Equity",
                                      "amount":  599999976,
                                      "post":  16.3,
                                      "leads":  [
                                                    "Lightspeed Venture Partners",
                                                    "Diffusion ONE"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$15.7bn; Later Stage VC; Price per share $41.8596",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/510703-21/company/deals"
                                              ]
                                  }
                              ],
                   "skipped":  [
                                   "2025-05-12 Accelerator/Incubator (Equity-Based Accelerator): not an eligible deal type, no valuation"
                               ],
                   "pbDeals":  9,
                   "holders":  [
                                   {
                                       "name":  "Octant Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/731504-53/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Goanna Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/466579-99/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Unity Growth Fund",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/481448-26/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "WndrCo",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/170084-35/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Manhattan Venture Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/104098-06/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "GV",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/49063-60/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Inertia Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/458692-93/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Conviction Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/510108-40/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Elad Gil",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/106041-70/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "OpenAI Startup Fund",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/513051-94/investor/profile"
                                               ]
                                   }
                               ]
               },
    "shieldai":  {
                     "researched":  "2026-10-27",
                     "rounds":  [
                                    {
                                        "date":  "2025-03-06",
                                        "name":  "Series F",
                                        "type":  "Equity",
                                        "amount":  240000000,
                                        "post":  5.3,
                                        "leads":  [
                                                      "Hanwha Aerospace Company",
                                                      "L3 Harris Technologies"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$5.06bn; Later Stage VC; Price per share $77.854",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/126184-96/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2026-03-26",
                                        "name":  "Series G",
                                        "type":  "Equity",
                                        "amount":  1500000000,
                                        "post":  12.7,
                                        "leads":  [
                                                      "Advent International",
                                                      "JP Morgan Chase"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$11.45bn; Later Stage VC; deal size includes US$250m debt (equity US$1.25bn); pre + size exceeds post by 1.97%",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/126184-96/company/deals"
                                                ]
                                    }
                                ],
                     "skipped":  [
                                     "Deal 16 Later Stage VC: status Upcoming, no date, no post-money",
                                     "2025-09-11 Secondary Transaction - Private: no post-money valuation",
                                     "2024-02-13 Debt - Acquisition: debt deal"
                                 ],
                     "pbDeals":  16,
                     "holders":  [
                                     {
                                         "name":  "BAM Elevate",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/54967-15/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "PEAK6 Investments",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/52830-46/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Advaita Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/481211-65/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "E1 Ventures",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/571430-71/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Unity Growth Fund",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/481448-26/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "AFW Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/509190-31/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Brighter Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/458023-15/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Gaingels",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/124929-82/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "SVB Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/10230-94/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Dorm Room Fund",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/59891-50/investor/profile"
                                                 ]
                                     }
                                 ]
                 },
    "psiquantum":  {
                       "researched":  "2026-10-27",
                       "rounds":  [
                                      {
                                          "date":  "2019-12-31",
                                          "name":  "Series C",
                                          "type":  "Equity",
                                          "amount":  150000002,
                                          "post":  0.48,
                                          "leads":  [
                                                        "Atomico"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$330.0M; Later Stage VC; Price per share $4.638",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/235924-66/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2021-10-01",
                                          "name":  "Series D",
                                          "type":  "Equity",
                                          "amount":  449999997,
                                          "post":  3.3,
                                          "leads":  [
                                                        "BlackRock"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$2,850.0M; Later Stage VC; Price per share $26.2262",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/235924-66/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2025-09-10",
                                          "name":  "Series E",
                                          "type":  "Equity",
                                          "amount":  1000000000,
                                          "post":  7.0,
                                          "leads":  [
                                                        "Baillie Gifford",
                                                        "Temasek Holdings",
                                                        "BlackRock"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$6,000.0M; Later Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/235924-66/company/deals"
                                                  ]
                                      }
                                  ],
                       "skipped":  [
                                       "2022-03-07 Secondary Transaction - Private: no post-money valuation",
                                       "2021-12-20 Secondary Transaction - Private: no post-money valuation"
                                   ],
                       "pbDeals":  8,
                       "holders":  [
                                       {
                                           "name":  "Artist Capital Management",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/126216-28/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "NVentures (Santa Clara)",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/530775-73/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Palo Alto Growth Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/592507-54/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Qatar Investment Authority",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/25344-19/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Transform Investments",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/279871-48/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Temasek Holdings",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/11313-73/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "New Ground Ventures",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/60322-69/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "SciFi VC",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/169461-64/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Redpoint Ventures",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/11281-06/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "University of Bristol",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Non-Investors/Shareholders, Majority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/525402-64/investor/profile"
                                                   ]
                                       }
                                   ]
                   },
    "vastdata":  {
                     "researched":  "2026-10-27",
                     "rounds":  [
                                    {
                                        "date":  "2020-04-16",
                                        "name":  "Series C",
                                        "type":  "Equity",
                                        "amount":  100000000,
                                        "post":  1.2,
                                        "leads":  [
                                                      "N47",
                                                      "Tiger Global Management"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$1,100.0M; Later Stage VC",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/182186-74/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2022-01-18",
                                        "name":  "Series D",
                                        "type":  "Equity",
                                        "amount":  100000000,
                                        "post":  3.703,
                                        "leads":  [
                                                      "Tiger Global Management"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$3,603.0M; Later Stage VC",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/182186-74/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2023-11-27",
                                        "name":  "Series E",
                                        "type":  "Equity",
                                        "amount":  118000000,
                                        "post":  9.1,
                                        "leads":  [
                                                      "Fidelity"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$8,982.0M; Later Stage VC",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/182186-74/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2025-10-05",
                                        "name":  "Series F",
                                        "type":  "Equity",
                                        "amount":  1000000000,
                                        "post":  30.0,
                                        "leads":  [
                                                      "Nvidia",
                                                      "Drive Capital",
                                                      "Access Industries"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$29,000.0M; Later Stage VC",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/182186-74/company/deals"
                                                ]
                                    }
                                ],
                     "skipped":  [
                                     "2021-03-18 Secondary Transaction - Private: no deal size or post-money valuation"
                                 ],
                     "pbDeals":  8,
                     "holders":  [
                                     {
                                         "name":  "CapitalG",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/61551-91/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Frontline One Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/469375-66/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "G2 Venture Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/180514-81/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Golden Falcon Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/589626-82/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Commonfund",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/11565-55/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Fidelity",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/13240-18/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Kingfisher Investment Advisors",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/118853-29/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "N47",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/11184-31/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Dell Technologies Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/222565-15/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Norwest",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/11258-83/investor/profile"
                                                 ]
                                     }
                                 ]
                 },
    "nscale":  {
                   "researched":  "2026-10-27",
                   "rounds":  [

                              ],
                   "skipped":  [
                                   "2026-09-18 IPO: status Announced/In Progress, no valuation",
                                   "2026-09-25 Later Stage VC (convertible bridge loan, US$3.36B): status Announced/In Progress, no valuation",
                                   "2026-09-03 General Corporate Purpose debt (US$3.05B): debt deal",
                                   "2026-07-06 Capital Spending debt (US$900M revolving credit): debt deal",
                                   "2026-05-11 Project Financing debt (US$790M term loan): debt deal"
                               ],
                   "pbDeals":  12
               },
    "cohere":  {
                   "researched":  "2026-10-27",
                   "rounds":  [
                                  {
                                      "date":  "2024-07-22",
                                      "name":  "Series D",
                                      "type":  "Equity",
                                      "amount":  500000000,
                                      "post":  5.5,
                                      "leads":  [
                                                    "Public Sector Pension Investment Board"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$5,000M; Later Stage VC; Valuation estimated by PitchBook",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/443089-09/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2025-09-24",
                                      "name":  "Series D1",
                                      "type":  "Equity",
                                      "amount":  700000000,
                                      "post":  7.0,
                                      "leads":  [
                                                    "Radical Ventures",
                                                    "Inovia Capital"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$6,300M; Later Stage VC",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/443089-09/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2026-04-24",
                                      "name":  "Series E (announced)",
                                      "type":  "Equity",
                                      "post":  20,
                                      "leads":  [

                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Announced, not yet completed per PitchBook (deal status announced / in progress). Post-money $20bn.",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/443089-09/company/deals"
                                              ]
                                  }
                              ],
                   "skipped":  [
                                   "2025-06-17 Later Stage VC: no deal size or valuation",
                                   "2025-03-16 Secondary Transaction - Private: no valuation"
                               ],
                   "pbDeals":  12,
                   "holders":  [
                                   {
                                       "name":  "Access Ventures (New York)",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/433285-12/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Cisco Investments",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/65064-07/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Gauntlet Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/600968-44/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "IronArc Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/615363-85/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Strategxy Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/516036-79/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Cisco Systems",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/11151-37/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Thrrive",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/600371-02/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "University of Toronto Entrepreneurship",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/117964-99/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "S32",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/168850-63/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Sanja Fidler",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/467615-26/investor/profile"
                                               ]
                                   }
                               ]
               },
    "cohesity":  {
                     "researched":  "2026-10-27",
                     "rounds":  [
                                    {
                                        "date":  "2024-12-10",
                                        "name":  "Series H",
                                        "type":  "Equity",
                                        "amount":  949999957,
                                        "post":  4.8,
                                        "leads":  [
                                                      "Haveli Investments"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$3,850M; Later Stage VC; Price per share $15.6594; Valuation estimated by PitchBook",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/61488-73/company/deals"
                                                ]
                                    }
                                ],
                     "skipped":  [
                                     "2025-12-01 Later Stage VC: no valuation (undisclosed amount, US$2M term loan)",
                                     "Series G: no deal date (post-money US$3.9B estimated)",
                                     "2024-11-11 Debt - Acquisition Financing: debt",
                                     "Secondary Transaction - Private (Toy Ventures): no date or valuation"
                                 ],
                     "pbDeals":  13,
                     "holders":  [
                                     {
                                         "name":  "A4 Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/1458172-36/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "JAZ Capital Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/564494-32/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Sapphire Ventures",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/11293-66/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "In-Q-Tel",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/11211-13/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "STEADFAST Capital Ventures",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/62279-47/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "DFJ Growth",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/51249-34/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "SoftBank Investment Advisers",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/182433-16/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Accel",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/10139-41/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Battery Ventures",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/10052-20/investor/profile"
                                                 ]
                                     }
                                 ]
                 },
    "discord":  {
                    "researched":  "2026-10-27",
                    "rounds":  [

                               ],
                    "skipped":  [
                                    "2025-03-27 IPO: failed/cancelled",
                                    "2025-06-25 Later Stage VC: no valuation",
                                    "2024-11-07 Secondary Transaction - Private: no valuation",
                                    "2024-03-01 Later Stage VC: no valuation",
                                    "2023-09-20 Mezzanine: debt"
                                ],
                    "pbDeals":  17
                },
    "verkada":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2023-10-09",
                                       "name":  "Series D",
                                       "type":  "Equity",
                                       "amount":  304999884,
                                       "post":  3.3,
                                       "leads":  [
                                                     "Linse Capital",
                                                     "Alkeon Capital Management"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $2,995M; Later Stage VC; Price per share $7.445265",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/167981-95/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2025-02-19",
                                       "name":  "Series E",
                                       "type":  "Equity",
                                       "amount":  199999987,
                                       "post":  4.5,
                                       "leads":  [
                                                     "General Catalyst"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $4,300M; Later Stage VC; Price per share $8.618002",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/167981-95/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2026-07-09",
                                       "name":  "Series F",
                                       "type":  "Equity",
                                       "amount":  41230648,
                                       "post":  5.8,
                                       "leads":  [
                                                     "CapitalG"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $5,758.8M; Later Stage VC; Price per share $10.7601",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/167981-95/company/deals"
                                               ]
                                   }
                               ],
                    "skipped":  [
                                    "Debt Refinancing 2023-02-13: debt",
                                    "Debt - General 2025-09-01: debt"
                                ],
                    "pbDeals":  9,
                    "holders":  [
                                    {
                                        "name":  "CapitalG",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/61551-91/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Pegasus Tech Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/55481-05/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Eclipse Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/126290-08/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Fabrica Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/436948-03/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Sentinel Dome Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/328103-29/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Quiet Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/231270-40/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "XYZ Venture Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/178234-03/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Hans Robertson",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/109279-63/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "N47",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11184-31/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "SLW",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/625960-54/investor/profile"
                                                ]
                                    }
                                ]
                },
    "strava":  {
                   "researched":  "2026-10-27",
                   "rounds":  [
                                  {
                                      "date":  "2020-12-21",
                                      "name":  "Series F",
                                      "type":  "Equity",
                                      "amount":  109999947,
                                      "post":  1.5,
                                      "leads":  [
                                                    "Sequoia Capital",
                                                    "TCV"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money $1,390M; Later Stage VC; Price per share $13.9892",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/51478-48/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2025-05-22",
                                      "name":  "Later Stage VC (8th Round)",
                                      "type":  "Equity",
                                      "post":  2.2,
                                      "leads":  [
                                                    "Sequoia Capital",
                                                    "Bow River Capital"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money not shown; Later Stage VC; combined debt and equity, size undisclosed",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/51478-48/company/deals"
                                              ]
                                  }
                              ],
                   "skipped":  [
                                   "IPO 2026-01-08: announced/in progress, no valuation",
                                   "Debt - Acquisition 2025-04-15: debt",
                                   "Secondary Transaction - Private 2024-10-09: no post-money valuation"
                               ],
                   "pbDeals":  11,
                   "holders":  [
                                   {
                                       "name":  "Founders Circle Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/55747-99/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Second Alpha Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/56257-66/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Dragoneer Investment Group",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/56059-66/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "HighSage Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/300233-62/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "P101",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/98160-76/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Go4it Capital Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/265708-99/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Sequoia Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/11295-73/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Madrone Capital Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/10459-81/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Sigma Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/11184-67/investor/profile"
                                               ]
                                   }
                               ]
               },
    "agilityrobotics":  {
                            "researched":  "2026-10-27",
                            "rounds":  [
                                           {
                                               "date":  "2022-04-22",
                                               "name":  "Series B",
                                               "type":  "Equity",
                                               "amount":  149999856,
                                               "post":  0.55,
                                               "leads":  [
                                                             "Playground Global",
                                                             "DCVC"
                                                         ],
                                               "basis":  "PitchBook",
                                               "note":  "Pre-money $400M; Later Stage VC; Price per share $31.14344",
                                               "src":  [
                                                           "https://my.pitchbook.com/profile/171265-96/company/deals"
                                                       ]
                                           },
                                           {
                                               "date":  "2024-10-25",
                                               "name":  "Series C",
                                               "type":  "Equity",
                                               "amount":  105000008,
                                               "post":  0.955,
                                               "leads":  [

                                                         ],
                                               "basis":  "PitchBook",
                                               "note":  "Pre-money $850M; Later Stage VC; Price per share $36.8583",
                                               "src":  [
                                                           "https://my.pitchbook.com/profile/171265-96/company/deals"
                                                       ]
                                           },
                                           {
                                               "date":  "2025-06-25",
                                               "name":  "Series C3",
                                               "type":  "Equity",
                                               "amount":  399999537,
                                               "post":  2.15,
                                               "leads":  [

                                                         ],
                                               "basis":  "PitchBook",
                                               "note":  "Pre-money $1,750M; Later Stage VC; Price per share $66.1452",
                                               "src":  [
                                                           "https://my.pitchbook.com/profile/171265-96/company/deals"
                                                       ]
                                           }
                                       ],
                            "skipped":  [
                                            "PIPE 2026-06-24: announced/in progress, no valuation",
                                            "Reverse Merger 2026-06-24: announced/in progress, deal type not recordable"
                                        ],
                            "pbDeals":  11
                        },
    "agibot":  {
                   "researched":  "2026-10-27",
                   "rounds":  [
                                  {
                                      "date":  "2023-05-26",
                                      "name":  "Early Stage VC (3rd Round)",
                                      "type":  "Equity",
                                      "amount":  126000000,
                                      "post":  1.0,
                                      "leads":  [
                                                    "Baidu Ventures",
                                                    "MPCi"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$874.0M; Early Stage VC; Valuation estimated by PitchBook",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/528463-99/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2023-12-01",
                                      "name":  "Series A2",
                                      "type":  "Equity",
                                      "amount":  83308649,
                                      "post":  0.569,
                                      "leads":  [
                                                    "Zhejiang Sanhua Refrigeration Group",
                                                    "LuxVisions Innovation Investment",
                                                    "Co-Stone Capital"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$485.97M; Early Stage VC; deal size estimated by PitchBook (CNY 600M)",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/528463-99/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2025-03-20",
                                      "name":  "Series B",
                                      "type":  "Equity",
                                      "amount":  105033233,
                                      "post":  2.068,
                                      "leads":  [
                                                    "Tencent Investment"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$1,962.55M; Early Stage VC; post-money about CNY 15 billion",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/528463-99/company/deals"
                                              ]
                                  }
                              ],
                   "filings":  [

                               ],
                   "skipped":  [
                                   "Series C (305172-91T, Later Stage VC, Upcoming): reportedly seeking undisclosed amount, no valuation",
                                   "2025-08-01 and 2025-05-22 Early Stage VC: undisclosed size, no valuation",
                                   "2025-03-20 Secondary Transaction - Private: no valuation",
                                   "2024-07-09 Early Stage VC (Series A++++) and 2023-04-14 Series A: no valuation",
                                   "Deals older than deal #2 not retrieved (13 total; 5 newest plus 5 largest read)"
                               ],
                   "pbDeals":  13,
                   "holders":  [
                                   {
                                       "name":  "Tencent Investment",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/63178-03/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Wolong Electric",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/107096-50/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Shangqi Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/339949-18/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "C Capital (Private Equity)",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/188109-64/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "CAS Star",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/185184-19/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Co-Stone Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/55332-73/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Guangzhou Industrial Investment Holding Group",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/399122-20/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Jameho Investment",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/437320-36/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Yinxinggu Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/182171-62/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "MPC (Beijing)",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/91701-10/investor/profile"
                                               ]
                                   }
                               ]
               },
    "phonepe":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2022-03-24",
                                       "name":  "Later Stage VC (7th Round)",
                                       "type":  "Equity",
                                       "amount":  438349141,
                                       "post":  4.477,
                                       "leads":  [

                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$4,039.0M; Later Stage VC; price per share US$110.86; Brand Capital and other undisclosed investors",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/156397-78/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2023-05-23",
                                       "name":  "Later Stage VC (8th Round)",
                                       "type":  "Equity",
                                       "amount":  844763253,
                                       "post":  12.939,
                                       "leads":  [
                                                     "Walmart",
                                                     "TVS Capital",
                                                     "General Atlantic"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$12,183.9M; Later Stage VC; Valuation estimated by PitchBook; pre+size is 0.7% off post (includes debt in total)",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/156397-78/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2025-10-30",
                                       "name":  "Later Stage VC (9th Round)",
                                       "type":  "Equity",
                                       "amount":  600000000,
                                       "post":  14.5,
                                       "leads":  [

                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$13,900.0M; Later Stage VC; flat round; General Atlantic sole investor; funds to help employees exercise options and meet tax liabilities, no founder or employee liquidity",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/156397-78/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [
                                    {
                                        "kind":  "IPO",
                                        "status":  "Postponed",
                                        "date":  "2026-03-16",
                                        "exchange":  "BOM",
                                        "note":  "Filed to go public on the Bombay Stock Exchange on 2025-02-20 (selling shareholders to sell 50,660,446 shares); offering postponed 2026-03-16.",
                                        "src":  "https://my.pitchbook.com/profile/156397-78/company/deals"
                                    }
                                ],
                    "skipped":  [
                                    "Secondary Transaction - Private (213786-46T): Flipkart stake sale to Walmart, no date or valuation",
                                    "Deals older than 2022-03-24 not retrieved (14 total; 5 newest read, 3 rounds already recorded)"
                                ],
                    "pbDeals":  14,
                    "holders":  [
                                    {
                                        "name":  "Microsoft",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11026-45/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "TVS Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10604-26/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Brand Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/25168-96/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Walmart",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Majority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11653-30/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Tiger Global Management",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/42873-94/investor/profile"
                                                ]
                                    }
                                ]
                },
    "razorpay":  {
                     "researched":  "2026-10-27",
                     "rounds":  [
                                    {
                                        "date":  "2019-06-18",
                                        "name":  "Series C",
                                        "type":  "Equity",
                                        "amount":  75000000,
                                        "post":  0.445,
                                        "leads":  [
                                                      "Sequoia Capital",
                                                      "Ribbit Capital"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$370.0M; Later Stage VC; price per share US$15.90",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/110393-29/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2020-10-11",
                                        "name":  "Series D",
                                        "type":  "Equity",
                                        "amount":  100000000,
                                        "post":  0.998,
                                        "leads":  [
                                                      "Peak XV Partners",
                                                      "GIC"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$908.2M; Later Stage VC; price per share US$32.06; US$90M equity plus US$10M debt in total size",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/110393-29/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2021-08-11",
                                        "name":  "Series E",
                                        "type":  "Equity",
                                        "amount":  165000000,
                                        "post":  3.0,
                                        "leads":  [
                                                      "Peak XV Partners",
                                                      "GIC"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$2,835.0M; Later Stage VC; price per share US$91.06",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/110393-29/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2021-12-21",
                                        "name":  "Series F",
                                        "type":  "Equity",
                                        "amount":  375000000,
                                        "post":  7.5,
                                        "leads":  [
                                                      "TCV",
                                                      "Lone Pine Capital",
                                                      "Alkeon Capital Management"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$7,128.0M; Later Stage VC; price per share US$213.41; US$371M equity plus US$3M debt",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/110393-29/company/deals"
                                                ]
                                    }
                                ],
                     "filings":  [
                                     {
                                         "kind":  "IPO",
                                         "status":  "Announced/In Progress",
                                         "date":  "2026-02-16",
                                         "note":  "Confidentially filed to go public on 2026-02-16; Axis Capital, JPMorgan, Kotak and Citi to lead an expected offering listed as INR 40 million (PitchBook size estimate, likely a data artefact).",
                                         "src":  "https://my.pitchbook.com/profile/110393-29/company/deals"
                                     }
                                 ],
                     "skipped":  [
                                     "2022-06-01 Later Stage VC (US$75M) and 2023-09-01 Later Stage VC: no valuation",
                                     "2025-07-01 Secondary Transaction - Private: no valuation",
                                     "Series A/B and earlier deals not retrieved (12 total; 5 newest plus 5 largest read)"
                                 ],
                     "pbDeals":  12,
                     "holders":  [
                                     {
                                         "name":  "Lightspeed India Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/167913-64/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Peak XV Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/167489-20/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Ribbit Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/55346-14/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "IIMA Ventures",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/163163-80/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Tiger Global Management",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/42873-94/investor/profile"
                                                 ]
                                     }
                                 ]
                 },
    "zepto":  {
                  "researched":  "2026-10-27",
                  "rounds":  [
                                 {
                                     "date":  "2024-06-21",
                                     "name":  "Series F",
                                     "type":  "Equity",
                                     "amount":  665000000,
                                     "post":  3.6,
                                     "leads":  [
                                                   "Avenir Growth Capital",
                                                   "Glade Brook Capital Partners",
                                                   "Nexus Venture Partners"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money $2,949M; Later Stage VC; price per share $584.78; $665M includes $14.5M debt (equity $650.5M)",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/458392-60/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2024-08-14",
                                     "name":  "Series G",
                                     "type":  "Equity",
                                     "amount":  340000000,
                                     "post":  5.107,
                                     "leads":  [
                                                   "General Catalyst",
                                                   "Dragon Fund",
                                                   "Mars Growth Capital"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money $4,789M; Later Stage VC; price per share $807.19; $340M includes $22.2M debt (equity $317.8M)",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/458392-60/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2024-09-02",
                                     "name":  "Later Stage VC (9th Round)",
                                     "type":  "Equity",
                                     "amount":  350000000,
                                     "post":  5.0,
                                     "leads":  [
                                                   "Motilal Oswal Financial Services"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money $4,650M; Later Stage VC; flat round",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/458392-60/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2025-07-15",
                                     "name":  "Secondary Transaction - Private",
                                     "type":  "Tender",
                                     "companyRun":  false,
                                     "amount":  500000000,
                                     "post":  5.0,
                                     "leads":  [

                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "No pre-money shown; Secondary Transaction - Private (Razor Capital sold 10% stake to Raamdeo Agrawal, Sachin Tendulkar, Abhishek Bachchan and Motilal Oswal); Valuation estimated by PitchBook",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/458392-60/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2025-08-07",
                                     "name":  "Later Stage VC (11th Round)",
                                     "type":  "Equity",
                                     "amount":  2850000,
                                     "post":  6.1,
                                     "leads":  [

                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money $6,097M; Later Stage VC; single investor MapmyIndia, flat round",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/458392-60/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2025-10-16",
                                     "name":  "Series H",
                                     "type":  "Equity",
                                     "amount":  450000000,
                                     "post":  7.0,
                                     "leads":  [
                                                   "General Catalyst",
                                                   "California Public Employees\u0027 Retirement System"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money $6,550M; Later Stage VC; price per share $733.23; deal size estimated by PitchBook",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/458392-60/company/deals"
                                             ]
                                 }
                             ],
                  "filings":  [
                                  {
                                      "kind":  "IPO",
                                      "status":  "Postponed",
                                      "date":  "2026-07-30",
                                      "exchange":  "BOM",
                                      "sizeUsd":  8337177,
                                      "note":  "Filed to list on the Bombay Stock Exchange on 2024-09-07 (expected offering INR 800M, selling shareholders 113,466,566 shares); offering postponed on 2026-07-30.",
                                      "src":  "https://my.pitchbook.com/profile/458392-60/company/deals"
                                  }
                              ],
                  "skipped":  [
                                  "2026-07-31 Later Stage VC (14th round): Rumor/Speculation, estimated INR 10bn, no valuation",
                                  "2025-08-12 Later Stage VC INR 4bn from Motilal Oswal: no post-money valuation",
                                  "Deals 1-8 and 12, 14 (older rounds) not retrieved; only newest 5 plus largest 5 read"
                              ],
                  "pbDeals":  19,
                  "holders":  [
                                  {
                                      "name":  "The Stepstone Group",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11983-06/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Cello World",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/513309-16/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Kalyan Jewellers India",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/66328-57/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Dragon Capital (Vietnam)",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/61668-01/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Avra",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/542362-87/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Motilal Oswal Financial Services",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11380-42/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Oliver Jung",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/105951-88/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "SoftBank Investment Advisers",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/182433-16/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Mehta Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/234072-73/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Unpopular Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/267552-55/investor/profile"
                                              ]
                                  }
                              ]
              },
    "upgrade":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2018-08-23",
                                       "name":  "Series C1",
                                       "type":  "Equity",
                                       "amount":  62000000,
                                       "post":  0.562,
                                       "leads":  [
                                                     "CreditEase"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $500M; Later Stage VC; price per share $4.676",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/179520-76/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2021-08-11",
                                       "name":  "Series E",
                                       "type":  "Equity",
                                       "amount":  104999997,
                                       "post":  3.43,
                                       "leads":  [
                                                     "Koch Disruptive Technologies"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $3,325M; Later Stage VC; price per share $6.4442",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/179520-76/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2021-11-16",
                                       "name":  "Series F",
                                       "type":  "Equity",
                                       "amount":  279599889,
                                       "post":  6.28,
                                       "leads":  [
                                                     "Coatue Management",
                                                     "DST Global"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $6,000M; Later Stage VC; price per share $5.63",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/179520-76/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2025-10-16",
                                       "name":  "Series G",
                                       "type":  "Equity",
                                       "amount":  165000000,
                                       "post":  7.3,
                                       "leads":  [
                                                     "Neuberger Berman Group",
                                                     "LuminArx Capital Management"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $7,185M; Later Stage VC; price per share $5.8776; $165M includes $50M loan (equity $115M); up round",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/179520-76/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "2026 Secondary Transaction - Private (333788-41T): no date or valuation shown",
                                    "2025-07-28 Secondary Transaction - Private $7.8M: no valuation",
                                    "2021-12-22 Secondary Transaction - Private: no valuation",
                                    "2024-04-19 Debt - General $200M: debt",
                                    "Other older rounds (Series A-D, 2018 and earlier, plus others) not retrieved"
                                ],
                    "pbDeals":  18,
                    "holders":  [
                                    {
                                        "name":  "Neuberger Berman Group",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/14768-38/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "RSV Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/484275-97/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "369 Growth Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/516089-62/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Carriage House Rock",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/484711-93/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Coatue Management",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/56091-70/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "DST Global",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/40773-97/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Gopher Asset Management",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/58935-16/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Uncorrelated Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/435529-36/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Ribbit Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/55346-14/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Sands Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/105535-18/investor/profile"
                                                ]
                                    }
                                ]
                },
    "harrys":  {
                   "researched":  "2026-10-27",
                   "rounds":  [
                                  {
                                      "date":  "2021-03-31",
                                      "name":  "Series E",
                                      "type":  "Equity",
                                      "amount":  155000021,
                                      "post":  1.7,
                                      "leads":  [
                                                    "Bain Capital",
                                                    "Macquarie Capital"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money $1,545M; Later Stage VC; price per share $20.25; PitchBook company name Mammoth Brands",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/56325-07/company/deals"
                                              ]
                                  }
                              ],
                   "filings":  [
                                   {
                                       "kind":  "IPO",
                                       "status":  "Failed/Cancelled",
                                       "date":  "2024-03-07",
                                       "note":  "Filed to go public on an undisclosed exchange on 2024-03-07; offering subsequently withdrawn (Goldman Sachs, Barclays, JP Morgan, Wells Fargo as underwriters).",
                                       "src":  "https://my.pitchbook.com/profile/56325-07/company/deals"
                                   }
                               ],
                   "skipped":  [
                                   "2026 Secondary Transaction - Private (327770-47T): no date or valuation shown",
                                   "2024-08-19 Debt Refinancing $250M: debt",
                                   "2020-02-10 Merger/Acquisition (Edgewell, $1.37bn): failed M\u0026A, not a funding round or listed filing type",
                                   "2018-02-15 Series D $112.6M: no valuation",
                                   "2014-01-22 Early Stage VC $122.5M: no valuation",
                                   "Other older rounds not retrieved"
                               ],
                   "pbDeals":  14,
                   "holders":  [
                                   {
                                       "name":  "Hardy Capital Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/65004-67/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Light Street Capital Management",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/86568-04/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "BoxGroup",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/56833-03/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Red Swan Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/53452-18/investor/profile"
                                               ]
                                   }
                               ]
               },
    "waymo":  {
                  "researched":  "2026-10-27",
                  "rounds":  [
                                 {
                                     "date":  "2020-05-12",
                                     "name":  "Series A",
                                     "type":  "Equity",
                                     "amount":  3000000000,
                                     "post":  30,
                                     "leads":  [
                                                   "Silver Lake",
                                                   "CPP Investments",
                                                   "Mubadala Capital"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$27.0B; Later Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/169143-76/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2024-10-25",
                                     "name":  "Series C",
                                     "type":  "Equity",
                                     "amount":  5600000000,
                                     "post":  45,
                                     "leads":  [
                                                   "Alphabet"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$39.4B; Later Stage VC; Valuation estimated by PitchBook",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/169143-76/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2026-04-22",
                                     "name":  "Series D",
                                     "type":  "Equity",
                                     "amount":  16000000000,
                                     "post":  126,
                                     "leads":  [
                                                   "Dragoneer Investment Group",
                                                   "DST Global",
                                                   "Alphabet",
                                                   "Mubadala Investment Company",
                                                   "Sequoia Capital"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$110.0B; Later Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/169143-76/company/deals"
                                             ]
                                 }
                             ],
                  "filings":  [

                              ],
                  "skipped":  [
                                  "2021-06-16 Series B ($2.5B, Later Stage VC): no post-money valuation in PitchBook",
                                  "2026-10-08 General Corporate Purpose $5B term loan: debt, not a round",
                                  "Deals 1-2 (oldest) not retrieved: 3 rounds already recorded"
                              ],
                  "pbDeals":  7,
                  "holders":  [
                                  {
                                      "name":  "DST Global",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/40773-97/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Dragoneer Investment Group",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/56059-66/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "SV Angel",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/50980-60/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "WndrCo",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/170084-35/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Temasek Holdings",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11313-73/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "AutoNation",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/27100-09/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Perry Creek Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/97734-61/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Silver Lake",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/10278-19/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "T. Rowe Price Group",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/10072-54/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Michigan Economic Development",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/51019-93/investor/profile"
                                              ]
                                  }
                              ]
              },
    "thinkingmachineslab":  {
                                "researched":  "2026-10-27",
                                "rounds":  [
                                               {
                                                   "date":  "2025-06-20",
                                                   "name":  "Seed Round (1st Round)",
                                                   "type":  "Equity",
                                                   "amount":  1999999971,
                                                   "post":  10,
                                                   "leads":  [
                                                                 "Andreessen Horowitz"
                                                             ],
                                                   "basis":  "PitchBook",
                                                   "note":  "Pre-money US$8.0B; Seed Round; price per share $283.4059",
                                                   "src":  [
                                                               "https://my.pitchbook.com/profile/752821-12/company/deals"
                                                           ]
                                               }
                                           ],
                                "filings":  [

                                            ],
                                "skipped":  [
                                                "Early Stage VC 2nd Round ($1B, status Upcoming): reported talks only, no deal date, no post-money valuation (synopsis cites US$40B pre-money, reportedly seeking funding from Accel)"
                                            ],
                                "pbDeals":  2,
                                "holders":  [
                                                {
                                                    "name":  "AMD Ventures",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/58496-86/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "Basis Set Ventures",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/182527-66/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "Bison Ventures",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/495629-56/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "Cisco Investments",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/65064-07/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "Conviction Partners",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/510108-40/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "Factorial Funds",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/472563-10/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "GV",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/49063-60/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "Government of Albania",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/110210-95/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "Jane Street",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/265923-55/investor/profile"
                                                            ]
                                                },
                                                {
                                                    "name":  "Owl Ventures",
                                                    "type":  "investor",
                                                    "stake":  null,
                                                    "basis":  "PitchBook investor list: Active, Minority",
                                                    "src":  [
                                                                "https://my.pitchbook.com/profile/97548-85/investor/profile"
                                                            ]
                                                }
                                            ]
                            },
    "clickhouse":  {
                       "researched":  "2026-10-27",
                       "rounds":  [
                                      {
                                          "date":  "2021-08-01",
                                          "name":  "Series A",
                                          "type":  "Equity",
                                          "amount":  50000001,
                                          "post":  0.149,
                                          "leads":  [
                                                        "Index Ventures",
                                                        "Benchmark Capital Holdings"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$99M; Later Stage VC; price per share $2.4284",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/265089-79/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2022-12-06",
                                          "name":  "Series B",
                                          "type":  "Equity",
                                          "amount":  249999870,
                                          "post":  2.0,
                                          "leads":  [
                                                        "Coatue Management",
                                                        "Altimeter Capital Management"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$1,750M; Later Stage VC; price per share $28.2425",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/265089-79/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2025-10-07",
                                          "name":  "Series C",
                                          "type":  "Equity",
                                          "amount":  350000000,
                                          "post":  6.665,
                                          "leads":  [
                                                        "Khosla Ventures"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$6,315M; Later Stage VC; price per share $72.4955; US$100M of the round was convertible debt converted to equity",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/265089-79/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2026-01-16",
                                          "name":  "Series D",
                                          "type":  "Equity",
                                          "amount":  400000000,
                                          "post":  15.0,
                                          "leads":  [
                                                        "Dragoneer Investment Group"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$14,600M; Later Stage VC; price per share $159.5868",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/265089-79/company/deals"
                                                  ]
                                      }
                                  ],
                       "filings":  [

                                   ],
                       "skipped":  [

                                   ],
                       "pbDeals":  4,
                       "holders":  [
                                       {
                                           "name":  "KI Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/454368-16/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Bessemer Venture Partners",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/10134-73/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Brock Purdy",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/1131594-67/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Expanding Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/180890-20/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Insight Partners (New York)",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/10331-11/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Peak XV Partners",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/167489-20/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Burch Creative Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/60603-31/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "FirstMark Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/11270-53/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Thrive Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/51625-90/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Michelangelo Volpi",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/470584-27/investor/profile"
                                                   ]
                                       }
                                   ]
                   },
    "canva":  {
                  "researched":  "2026-10-27",
                  "rounds":  [
                                 {
                                     "date":  "2019-10-01",
                                     "name":  "Series A",
                                     "type":  "Equity",
                                     "amount":  89999595,
                                     "post":  3.2,
                                     "leads":  [

                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$3,110M; Later Stage VC; price per share $138.8362",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/56364-67/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2021-09-15",
                                     "name":  "Series E",
                                     "type":  "Equity",
                                     "amount":  200000000,
                                     "post":  40.0,
                                     "leads":  [
                                                   "T. Rowe Price"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$39,800M; Later Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/56364-67/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2023-08-08",
                                     "name":  "Secondary Transaction - Private",
                                     "type":  "Tender",
                                     "companyRun":  false,
                                     "amount":  150000000,
                                     "post":  25.5,
                                     "leads":  [

                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money not shown; Secondary Transaction - Private; Valuation estimated by PitchBook",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/56364-67/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2024-01-22",
                                     "name":  "Secondary Transaction - Private",
                                     "type":  "Tender",
                                     "companyRun":  false,
                                     "amount":  380000000,
                                     "post":  26.0,
                                     "leads":  [

                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money not shown; Secondary Transaction - Private; Blackbird Ventures sold 1.46% to Quadrant Private Equity and Goldman Sachs",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/56364-67/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2024-09-12",
                                     "name":  "Later Stage VC (14th Round)",
                                     "type":  "Equity",
                                     "post":  32.0,
                                     "leads":  [

                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money not shown; Later Stage VC; undisclosed amount",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/56364-67/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2025-09-30",
                                     "name":  "Secondary Transaction - Private",
                                     "type":  "Tender",
                                     "companyRun":  false,
                                     "amount":  18320000,
                                     "post":  42.0,
                                     "leads":  [

                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money not shown; Secondary Transaction - Private; 0.04% stake sold",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/56364-67/company/deals"
                                             ]
                                 }
                             ],
                  "filings":  [

                              ],
                  "skipped":  [
                                  "2026-06-25 Later Stage VC: no post-money valuation or deal size",
                                  "2025-01-01 Later Stage VC: no post-money valuation",
                                  "2024-04-08 Secondary $1.6B: no valuation",
                                  "Debt - General term loan (deal 21): debt, no date or valuation"
                              ],
                  "pbDeals":  24,
                  "holders":  [
                                  {
                                      "name":  "Rembrandt Venture Partners",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11282-32/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Alpha Square Group",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/181651-60/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Goanna Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/466579-99/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "AdFirst",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/439289-20/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Sequoia Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11295-73/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "YXS Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/964166-95/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "HSG (Hong Kong)",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/89936-74/investor/profile"
                                              ]
                                  }
                              ]
              },
    "zipline":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2026-03-23",
                                       "name":  "Series H",
                                       "type":  "Equity",
                                       "amount":  800000000,
                                       "post":  7.6,
                                       "leads":  [
                                                     "Fidelity Management \u0026 Research Company"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$6,800,000,000; Later Stage VC; Up Round",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/53944-57/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    {
                                        "date":  "2026-09-16",
                                        "name":  "Later Stage VC (11th Round)",
                                        "reason":  "Rumor/Speculation, not completed"
                                    },
                                    {
                                        "date":  "2025-11-26",
                                        "name":  "Grant",
                                        "reason":  "Grant is not an eligible deal type"
                                    }
                                ],
                    "pbDeals":  18,
                    "holders":  [
                                    {
                                        "name":  "Rwanda Social Security Board",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/183277-45/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Unanimous Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/432807-04/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "EQUIAM",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/231013-45/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Iron Edge VC",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/416608-12/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "K3 Diversity Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/470566-81/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Redefine Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/522168-76/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Reinvent Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/174871-36/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Baillie Gifford",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/58068-64/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "The Goldman Sachs Group",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10043-83/investor/profile"
                                                ]
                                    }
                                ]
                },
    "sierra":  {
                   "researched":  "2026-10-27",
                   "rounds":  [
                                  {
                                      "date":  "2024-11-01",
                                      "name":  "Series C",
                                      "type":  "Equity",
                                      "amount":  175000000,
                                      "post":  4.5,
                                      "leads":  [
                                                    "Greenoaks Capital Partners"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$4,325,000,000; Later Stage VC",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/562083-22/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2025-09-04",
                                      "name":  "Series D",
                                      "type":  "Equity",
                                      "amount":  350000000,
                                      "post":  10.0,
                                      "leads":  [
                                                    "USVC",
                                                    "Greenoaks Capital Partners"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$9,650,000,000; Later Stage VC",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/562083-22/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2026-05-04",
                                      "name":  "Series E",
                                      "type":  "Equity",
                                      "amount":  950000000,
                                      "post":  15.8,
                                      "leads":  [
                                                    "Tiger Global Management",
                                                    "GV"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$15,000,000,000; Later Stage VC; deal size includes ~US$150,000,000 debt",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/562083-22/company/deals"
                                              ]
                                  }
                              ],
                   "filings":  [

                               ],
                   "skipped":  [

                               ],
                   "pbDeals":  5,
                   "holders":  [
                                   {
                                       "name":  "GV",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/49063-60/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Tiger Global Management",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/42873-94/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "SoftBank Investment Advisers",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/182433-16/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "USVC",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/1379256-04/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Comcast Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/11174-86/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Greenoaks",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/54855-55/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Conviction Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/510108-40/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Sequoia Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/11295-73/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Benchmark Capital Holdings",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/11133-01/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "SV Angel",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/50980-60/investor/profile"
                                               ]
                                   }
                               ]
               },
    "skild":  {
                  "researched":  "2026-10-27",
                  "rounds":  [
                                 {
                                     "date":  "2024-05-16",
                                     "name":  "Series A",
                                     "type":  "Equity",
                                     "amount":  300000000,
                                     "post":  1.5,
                                     "leads":  [
                                                   "Coatue Management",
                                                   "Lightspeed Venture Partners",
                                                   "SoftBank Group"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$1,200,000,000; Early Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/608340-52/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2025-05-16",
                                     "name":  "Series B",
                                     "type":  "Equity",
                                     "amount":  500000000,
                                     "post":  4.7,
                                     "leads":  [
                                                   "SoftBank Group"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$4,200,000,000; Early Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/608340-52/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2026-01-14",
                                     "name":  "Series C",
                                     "type":  "Equity",
                                     "amount":  1400000000,
                                     "post":  14.0,
                                     "leads":  [
                                                   "Nvidia",
                                                   "SoftBank Group"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$12,600,000,000; Later Stage VC; Valuation estimated by PitchBook",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/608340-52/company/deals"
                                             ]
                                 }
                             ],
                  "filings":  [

                              ],
                  "skipped":  [

                              ],
                  "pbDeals":  4,
                  "holders":  [
                                  {
                                      "name":  "Alpha Square Group",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/181651-60/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "In-Q-Tel",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11211-13/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Salesforce Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/107882-74/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Mana Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/187876-90/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Nomi Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/652984-21/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Felicis",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/42715-00/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "General Catalyst",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/10123-03/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Insight Partners (New York)",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/10331-11/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Khosla Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11227-60/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Lightspeed Venture Partners",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11333-26/investor/profile"
                                              ]
                                  }
                              ]
              },
    "lovable":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2025-07-17",
                                       "name":  "Series A",
                                       "type":  "Equity",
                                       "amount":  200000000,
                                       "post":  1.869,
                                       "leads":  [
                                                     "Accel"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$1,673,669,967; Early Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/600908-32/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2025-12-18",
                                       "name":  "Series B",
                                       "type":  "Equity",
                                       "amount":  425014951,
                                       "post":  6.941,
                                       "leads":  [
                                                     "Salesforce Ventures",
                                                     "CapitalG",
                                                     "Menlo Ventures"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$6,515,985,055; Early Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/600908-32/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2026-08-12",
                                       "name":  "Series C",
                                       "type":  "Equity",
                                       "amount":  400000000,
                                       "post":  13.3,
                                       "leads":  [
                                                     "EQT",
                                                     "Menlo Ventures"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$12,900,000,000; Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/600908-32/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [

                                ],
                    "pbDeals":  6,
                    "holders":  [
                                    {
                                        "name":  "Carmignac",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/52363-63/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Further Than Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/650318-14/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Salesforce Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/107882-74/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Tenacity Capital (Silicon Valley)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/1396376-29/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "The Nordic Web Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/265784-14/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Powerset (San Francisco)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/635749-57/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Bjarke Staun-Olsen",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/495798-94/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Emblem (Paris)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/522050-86/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Firestreak Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/517390-39/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Fredrik Hjelm",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/357398-20/investor/profile"
                                                ]
                                    }
                                ]
                },
    "rippling":  {
                     "researched":  "2026-10-27",
                     "rounds":  [
                                    {
                                        "date":  "2025-05-06",
                                        "name":  "Series G",
                                        "type":  "Equity",
                                        "amount":  460000008,
                                        "post":  16.8,
                                        "leads":  [
                                                      "Goldman Sachs Growth Equity",
                                                      "Elad Gil"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$16,340,000,000; Later Stage VC",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/178355-71/company/deals"
                                                ]
                                    }
                                ],
                     "filings":  [

                                 ],
                     "skipped":  [
                                     "2025-12-05 Later Stage VC (deal 14): no post-money valuation",
                                     "2024-04-22 Secondary Transaction - Private (deal 12): failed/cancelled"
                                 ],
                     "pbDeals":  14,
                     "holders":  [
                                     {
                                         "name":  "G Squared",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/53737-66/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "DataPower Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/494484-04/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "CPP Investments",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/10849-06/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Dragoneer Investment Group",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/56059-66/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Zain S Hasan Charitable Remainder Trust",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/731311-57/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "CapitalG",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/61551-91/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Lightspeed Venture Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/11333-26/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Coatue Management",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/56091-70/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Founders Fund",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/11315-62/investor/profile"
                                                 ]
                                     }
                                 ]
                 },
    "deel":  {
                 "researched":  "2026-10-27",
                 "rounds":  [
                                {
                                    "date":  "2025-02-04",
                                    "name":  "Secondary Transaction - Private",
                                    "type":  "Tender",
                                    "companyRun":  false,
                                    "amount":  300000000,
                                    "post":  12.0,
                                    "leads":  [

                                              ],
                                    "basis":  "PitchBook",
                                    "note":  "Secondary Transaction - Private; pre-money not shown; Valuation estimated by PitchBook",
                                    "src":  [
                                                "https://my.pitchbook.com/profile/266258-80/company/deals"
                                            ]
                                },
                                {
                                    "date":  "2025-10-16",
                                    "name":  "Series E",
                                    "type":  "Equity",
                                    "amount":  300000014,
                                    "post":  17.3,
                                    "leads":  [
                                                  "Coatue Management",
                                                  "Ribbit Capital",
                                                  "Andreessen Horowitz"
                                              ],
                                    "basis":  "PitchBook",
                                    "note":  "Pre-money US$17,000,000,000; Later Stage VC",
                                    "src":  [
                                                "https://my.pitchbook.com/profile/266258-80/company/deals"
                                            ]
                                }
                            ],
                 "filings":  [

                             ],
                 "skipped":  [
                                 "2026-03-06 Secondary Transaction - Private (deal 10): no post-money valuation"
                             ],
                 "pbDeals":  10,
                 "holders":  [
                                 {
                                     "name":  "Bridgespan VC",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/720913-06/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Night Capital",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/439158-34/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Scoop Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/769378-15/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Expansion Capital",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/443035-81/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Vinay Hiremath",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/481989-61/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Jeffrey Katzenberg",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/186462-10/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "John Zimmer",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/279970-21/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Avichal Garg",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/222965-56/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Ryan Hoover",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/184852-18/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Y Combinator",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/40420-36/investor/profile"
                                             ]
                                 }
                             ]
             },
    "vercel":  {
                   "researched":  "2026-10-27",
                   "rounds":  [
                                  {
                                      "date":  "2024-05-16",
                                      "name":  "Series E",
                                      "type":  "Equity",
                                      "amount":  249999878,
                                      "post":  3.25,
                                      "leads":  [
                                                    "Accel"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$3,000,000,000; Later Stage VC",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/167175-28/company/deals"
                                              ]
                                  },
                                  {
                                      "date":  "2025-09-30",
                                      "name":  "Series F",
                                      "type":  "Equity",
                                      "amount":  300000000,
                                      "post":  9.3,
                                      "leads":  [
                                                    "Enterprise Holding",
                                                    "Accel",
                                                    "GIC Private"
                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Pre-money US$9,000,000,000; Later Stage VC",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/167175-28/company/deals"
                                              ]
                                  }
                              ],
                   "filings":  [

                               ],
                   "skipped":  [
                                   "Secondary Transaction - Private (deal 8): no Deal Date or post-money valuation"
                               ],
                   "pbDeals":  8,
                   "holders":  [
                                   {
                                       "name":  "Base Case Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/467027-02/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "NXTP Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/56617-84/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Resolute Capital Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/161464-24/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Rasmus Anderson",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/500922-82/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "SHL Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/484497-82/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "SV Angel",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/50980-60/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Flex Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/460275-94/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Accel",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/10139-41/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Naval Ravikant",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/106128-19/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Pete Hunt",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/434386-72/investor/profile"
                                               ]
                                   }
                               ]
               },
    "sandboxaq":  {
                      "researched":  "2026-10-27",
                      "rounds":  [
                                     {
                                         "date":  "2025-04-04",
                                         "name":  "Series E",
                                         "type":  "Equity",
                                         "amount":  450000007,
                                         "post":  5.75,
                                         "leads":  [
                                                       "Parkway Venture Capital",
                                                       "Alger"
                                                   ],
                                         "basis":  "PitchBook",
                                         "note":  "Pre-money US$5,300,000,000; Later Stage VC",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/493999-03/company/deals"
                                                 ]
                                     }
                                 ],
                      "filings":  [

                                  ],
                      "skipped":  [
                                      "2026-05-21 Later Stage VC Series F (deal 6): no post-money valuation, undisclosed amount",
                                      "2025-07-15 Secondary Transaction - Private (deal 5): no post-money valuation"
                                  ],
                      "pbDeals":  6,
                      "holders":  [
                                      {
                                          "name":  "Forge Global Holdings",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/63978-76/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Alphabet",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/10453-33/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Horizon Kinetics",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/62504-92/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Yann LeCun",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/152725-60/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Diana",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/167835-25/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "CME Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/122216-05/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Neman Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/494278-66/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Paladin Capital Group",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/10156-69/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Parkway Venture Capital",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/399563-65/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "US Innovative Technology Fund",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/512574-22/investor/profile"
                                                  ]
                                      }
                                  ]
                  },
    "notion":  {
                   "researched":  "2026-10-27",
                   "rounds":  [
                                  {
                                      "date":  "2026-01-26",
                                      "name":  "Secondary Transaction - Private",
                                      "type":  "Tender",
                                      "companyRun":  false,
                                      "amount":  270000000,
                                      "post":  11.0,
                                      "leads":  [

                                                ],
                                      "basis":  "PitchBook",
                                      "note":  "Secondary Transaction - Private; pre-money not shown",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/168506-47/company/deals"
                                              ]
                                  }
                              ],
                   "filings":  [

                               ],
                   "skipped":  [
                                   "2026-07-01 Later Stage VC (deal 12): no post-money valuation, undisclosed amount",
                                   "2022-06-01 Secondary Transaction - Private (deal 10): no post-money valuation"
                               ],
                   "pbDeals":  12,
                   "holders":  [
                                   {
                                       "name":  "Base10 Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/167562-37/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Fika Ventures",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/166436-56/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Stoked Capital",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/512747-11/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "A*",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/471232-81/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Octave (San Francisco)",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/464439-79/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Richard Dulude",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/471185-74/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Section Partners",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/226030-42/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Thomas McInerney",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/105986-62/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "Joshua Kopelman",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active, Minority",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/106052-23/investor/profile"
                                               ]
                                   },
                                   {
                                       "name":  "PorterShed",
                                       "type":  "investor",
                                       "stake":  null,
                                       "basis":  "PitchBook investor list: Active",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/343247-50/investor/profile"
                                               ]
                                   }
                               ]
               },
    "lightmatter":  {
                        "researched":  "2026-10-27",
                        "rounds":  [
                                       {
                                           "date":  "2024-10-16",
                                           "name":  "Series D",
                                           "type":  "Equity",
                                           "amount":  400000069,
                                           "post":  4.5,
                                           "leads":  [
                                                         "T. Rowe Price Group"
                                                     ],
                                           "basis":  "PitchBook",
                                           "note":  "Pre-money US$4,099,999,986; Later Stage VC",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/224352-73/company/deals"
                                                   ]
                                       }
                                   ],
                        "filings":  [

                                    ],
                        "skipped":  [
                                        {
                                            "id":  "318848-41T",
                                            "date":  "2025-12-30",
                                            "reason":  "Later Stage VC Series D: no post-money valuation"
                                        },
                                        {
                                            "id":  "306158-14T",
                                            "date":  "2025-01-24",
                                            "reason":  "Secondary Transaction - Private: no post-money valuation"
                                        }
                                    ],
                        "pbDeals":  11,
                        "holders":  [
                                        {
                                            "name":  "Hyperspeed Ventures",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/180795-07/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "TF Capital (Trumbull)",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/863161-84/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Homeroom Fund",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/535068-73/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "IPO CLUB",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/94660-30/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Axial Partners (United States)",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/592614-46/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Synaptic Partner",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/542101-87/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "The JHA Capital",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/639050-86/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Sequoia Capital",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/11295-73/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Viking Global Investors",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/60374-26/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Matrix",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/11237-50/investor/profile"
                                                    ]
                                        }
                                    ]
                    },
    "huntress":  {
                     "researched":  "2026-10-27",
                     "rounds":  [
                                    {
                                        "date":  "2024-06-18",
                                        "name":  "Series D",
                                        "type":  "Equity",
                                        "amount":  180000007,
                                        "post":  1.55,
                                        "leads":  [
                                                      "Sapphire Ventures",
                                                      "Kleiner Perkins",
                                                      "Meritech Capital Partners"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$1,370,000,002; Later Stage VC",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/163127-26/company/deals"
                                                ]
                                    }
                                ],
                     "filings":  [

                                 ],
                     "skipped":  [
                                     {
                                         "id":  "337398-49T",
                                         "date":  "2026-04-08",
                                         "reason":  "Secondary Transaction - Private: no post-money valuation"
                                     },
                                     {
                                         "id":  "308747-89T",
                                         "date":  "2025-09-01",
                                         "reason":  "Later Stage VC: no post-money valuation"
                                     }
                                 ],
                     "pbDeals":  10,
                     "holders":  [
                                     {
                                         "name":  "SuRo Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/52353-46/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Archer Venture Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/60640-03/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Archerman Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/227537-02/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "NewView Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/234961-84/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Meritech Capital Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/11240-47/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Blu Venture Investors",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/53601-22/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Forgepoint Capital",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/163040-23/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Gula Tech Adventures",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/181271-80/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Kathryn Stewart",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/133169-86/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "SaaS Ventures",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/223411-60/investor/profile"
                                                 ]
                                     }
                                 ]
                 },
    "geckorobotics":  {
                          "researched":  "2026-10-27",
                          "rounds":  [
                                         {
                                             "date":  "2019-12-16",
                                             "name":  "Series B",
                                             "type":  "Equity",
                                             "amount":  39999951,
                                             "post":  0.265,
                                             "leads":  [
                                                           "Drive Capital"
                                                       ],
                                             "basis":  "PitchBook",
                                             "note":  "Pre-money US$225,000,006; Later Stage VC",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/155872-18/company/deals"
                                                     ]
                                         },
                                         {
                                             "date":  "2024-12-18",
                                             "name":  "Series C",
                                             "type":  "Equity",
                                             "amount":  173000000,
                                             "post":  0.633,
                                             "leads":  [
                                                           "Founders Fund",
                                                           "US Innovative Technology Fund",
                                                           "XN"
                                                       ],
                                             "basis":  "PitchBook",
                                             "note":  "Pre-money US$460,000,000; Later Stage VC",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/155872-18/company/deals"
                                                     ]
                                         },
                                         {
                                             "date":  "2025-06-12",
                                             "name":  "Series D",
                                             "type":  "Equity",
                                             "amount":  124999991,
                                             "post":  1.25,
                                             "leads":  [
                                                           "Cox Enterprises"
                                                       ],
                                             "basis":  "PitchBook",
                                             "note":  "Pre-money US$1,124,999,968; Later Stage VC",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/155872-18/company/deals"
                                                     ]
                                         }
                                     ],
                          "filings":  [

                                      ],
                          "skipped":  [

                                      ],
                          "pbDeals":  12,
                          "holders":  [
                                          {
                                              "name":  "NearingPoint Venture Partners",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/1364924-17/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "11k Ventures",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/538266-52/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Blue Opal Capital",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/433682-56/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Plug and Play",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/54172-81/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "US Innovative Technology Fund",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/512574-22/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Alpha Partners",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/60873-76/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Shell Nigeria",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/99701-20/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "U.S. Department of Energy",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/40996-63/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Houston Angel Network",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/52371-91/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Cisco Global Problem Solver Challenge",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/267422-68/investor/profile"
                                                      ]
                                          }
                                      ]
                      },
    "vardaspace":  {
                       "researched":  "2026-10-27",
                       "rounds":  [
                                      {
                                          "date":  "2025-07-10",
                                          "name":  "Series C",
                                          "type":  "Equity",
                                          "amount":  187000000,
                                          "post":  0.7,
                                          "leads":  [
                                                        "Shrug Capital",
                                                        "Natural Capital"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$513,000,004; Later Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/454881-61/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2026-09-30",
                                          "name":  "Series D",
                                          "type":  "Equity",
                                          "amount":  249999990,
                                          "post":  1.6,
                                          "leads":  [
                                                        "Lux Capital",
                                                        "Natural Capital",
                                                        "137 Ventures"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$1,350,000,021; Later Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/454881-61/company/deals"
                                                  ]
                                      }
                                  ],
                       "filings":  [

                                   ],
                       "skipped":  [
                                       {
                                           "id":  "304311-97T",
                                           "date":  null,
                                           "reason":  "Accelerator/Incubator: no equity or funding"
                                       }
                                   ],
                       "pbDeals":  9,
                       "holders":  [
                                       {
                                           "name":  "McNamara Investments",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/550496-35/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Peter Thiel",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/106062-40/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Commodity Capital (US)",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/527607-73/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Daft Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/498343-51/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Fourth Realm",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/459906-40/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Gaurav Kachhawa",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/124841-98/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Giant Step Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/539858-08/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "United States Air Force",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/53914-87/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "General Catalyst",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/10123-03/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Founders Fund",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/11315-62/investor/profile"
                                                   ]
                                       }
                                   ]
                   },
    "whoop":  {
                  "researched":  "2026-10-27",
                  "rounds":  [
                                 {
                                     "date":  "2026-03-31",
                                     "name":  "Series G",
                                     "type":  "Equity",
                                     "amount":  575000000,
                                     "post":  10.1,
                                     "leads":  [
                                                   "Collaborative Fund"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$9,525,000,002; Later Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/64325-80/company/deals"
                                             ]
                                 }
                             ],
                  "filings":  [

                              ],
                  "skipped":  [
                                  {
                                      "id":  "337410-37T",
                                      "date":  null,
                                      "reason":  "Secondary Transaction - Private: announced/in progress, not completed; no post-money valuation"
                                  },
                                  {
                                      "id":  "258628-42T",
                                      "date":  "2024-03-01",
                                      "reason":  "Debt - General"
                                  }
                              ],
                  "pbDeals":  16,
                  "holders":  [
                                  {
                                      "name":  "Cristiano Ronaldo",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/162893-62/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Shane Lowry",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/497343-97/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Peter Attia",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/228730-78/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "SuRo Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/52353-46/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "D20 Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/434906-47/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Justin Thomas",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/443043-37/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "SoftBank Investment Advisers",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/182433-16/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Accomplice VC",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/110331-10/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Two Sigma Investments",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/53946-64/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Mousse Partners",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/13174-21/investor/profile"
                                              ]
                                  }
                              ]
              },
    "hadrian":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2026-01-09",
                                       "name":  "Series C",
                                       "type":  "Equity",
                                       "amount":  391307593,
                                       "post":  1.6,
                                       "leads":  [
                                                     "T. Rowe Price Group"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$1.21B, Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/465088-60/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2026-08-14",
                                       "name":  "Series D",
                                       "type":  "Equity",
                                       "amount":  1730000000,
                                       "post":  7.87,
                                       "leads":  [
                                                     "Valor Equity Partners",
                                                     "Baillie Gifford",
                                                     "137 Ventures",
                                                     "WCM Investment Management",
                                                     "Washington Harbour",
                                                     "JP Morgan Chase"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$6.5B, Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/465088-60/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "Deal #7 Secondary Transaction - Private: no Deal Date and no post-money valuation"
                                ],
                    "pbDeals":  9,
                    "holders":  [
                                    {
                                        "name":  "Altimeter Capital Management",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/42770-53/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Michael Jarmuz",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/442801-99/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Washington Harbour",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/460334-53/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Bracket Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/185512-69/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Karman Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/231277-69/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Digital (US)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/497930-95/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Andreessen Horowitz",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/41716-90/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Commodity Capital (US)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/527607-73/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Friends \u0026 Family Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/268813-18/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Founders Fund",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11315-62/investor/profile"
                                                ]
                                    }
                                ]
                },
    "physint":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2025-11-20",
                                       "name":  "Series B",
                                       "type":  "Equity",
                                       "amount":  599999954,
                                       "post":  5.4,
                                       "leads":  [
                                                     "CapitalG"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$4.8B, Early Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/590542-30/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2026-05-21",
                                       "name":  "Series C",
                                       "type":  "Equity",
                                       "amount":  1000000348,
                                       "post":  11.7,
                                       "leads":  [

                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$10.7B, Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/590542-30/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "Deal #7 Accelerator/Incubator (Equity-Based Accelerator), 2026-07-31: accelerator, no post-money valuation"
                                ],
                    "pbDeals":  7,
                    "holders":  [
                                    {
                                        "name":  "137 Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/58781-35/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "G Squared",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/53737-66/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Hanwha Asset Management (USA)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/601394-05/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "T. Rowe Price Group",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10072-54/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "BOND Capital (San Francisco)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/265238-92/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Bezos Expeditions",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/40830-76/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Marc Bhargava",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/442766-89/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Anti Fund",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/466453-54/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Avra",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/542362-87/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Neo (Consulting Services (B2B))",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/56299-96/investor/profile"
                                                ]
                                    }
                                ]
                },
    "positronai":  {
                       "researched":  "2026-10-27",
                       "rounds":  [
                                      {
                                          "date":  "2025-07-28",
                                          "name":  "Series A1",
                                          "type":  "Equity",
                                          "amount":  75084409,
                                          "post":  0.205,
                                          "leads":  [
                                                        "Valor Equity Partners",
                                                        "DFJ Growth",
                                                        "Atreides Management"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$130M, Early Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/571687-66/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2026-05-11",
                                          "name":  "Series B",
                                          "type":  "Equity",
                                          "amount":  233885479,
                                          "post":  1.4,
                                          "leads":  [
                                                        "ARENA Private Wealth",
                                                        "Objective Capital Management",
                                                        "Jump Trading",
                                                        "Unless"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$1.166B, Early Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/571687-66/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2026-09-02",
                                          "name":  "Series C",
                                          "type":  "Equity",
                                          "amount":  875000061,
                                          "post":  5.0,
                                          "leads":  [
                                                        "Valor Equity Partners",
                                                        "SemiAnalysis",
                                                        "Atreides Management",
                                                        "Jim Clark",
                                                        "New Enterprise Associates",
                                                        "Andra Capital"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$4.125B, Later Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/571687-66/company/deals"
                                                  ]
                                      }
                                  ],
                       "filings":  [

                                   ],
                       "skipped":  [

                                   ],
                       "pbDeals":  3,
                       "holders":  [
                                       {
                                           "name":  "Caucasus Ventures",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/521945-02/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Fincadia Advisors",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/752860-90/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Helena Special Investments",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/319731-40/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Invariantes Fund",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/168160-33/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Koru Capital (New York)",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/865836-19/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Objective Capital Management",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/493426-99/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "1517 Fund",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/123036-85/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Banyan Ventures (New York)",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/615659-68/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "NZVC",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/469516-15/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Primitiva Global",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/534809-71/investor/profile"
                                                   ]
                                       }
                                   ]
                   },
    "workato":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2021-10-18",
                                       "name":  "Series E",
                                       "type":  "Equity",
                                       "amount":  199999923,
                                       "post":  5.7,
                                       "leads":  [
                                                     "Battery Ventures"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$5.5B, Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/104504-05/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "Deal #9 Secondary Transaction - Private, 2026-03-27: no post-money valuation",
                                    "Deal #8 Later Stage VC, 2023-06-01: no post-money valuation"
                                ],
                    "pbDeals":  9,
                    "holders":  [
                                    {
                                        "name":  "Kingfisher Investment Advisors",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/118853-29/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Industry Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11217-34/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Plug and Play",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/54172-81/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Altimeter Capital Management",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/42770-53/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Insight Partners (New York)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10331-11/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Norwest",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11258-83/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "ServiceNow Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/181092-61/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Workday Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/119682-28/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Anshu Sharma",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/110503-27/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Bhaskar Roy",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/115317-64/investor/profile"
                                                ]
                                    }
                                ]
                },
    "togetherai":  {
                       "researched":  "2026-10-27",
                       "rounds":  [
                                      {
                                          "date":  "2024-03-13",
                                          "name":  "Series A",
                                          "type":  "Equity",
                                          "amount":  105999993,
                                          "post":  1.25,
                                          "leads":  [
                                                        "Salesforce Ventures"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$1.144B, Early Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/518020-12/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2025-02-20",
                                          "name":  "Series B",
                                          "type":  "Equity",
                                          "amount":  304999936,
                                          "post":  3.3,
                                          "leads":  [
                                                        "Prosperity7 Ventures",
                                                        "General Catalyst"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$2.995B, Early Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/518020-12/company/deals"
                                                  ]
                                      },
                                      {
                                          "date":  "2026-07-01",
                                          "name":  "Series C",
                                          "type":  "Equity",
                                          "amount":  800000009,
                                          "post":  8.2,
                                          "leads":  [
                                                        "Prosperity7 Ventures",
                                                        "Aramco Ventures"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money US$7.4B, Later Stage VC",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/518020-12/company/deals"
                                                  ]
                                      }
                                  ],
                       "filings":  [

                                   ],
                       "skipped":  [

                                   ],
                       "pbDeals":  6,
                       "holders":  [
                                       {
                                           "name":  "ASRock",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/87539-14/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Greenlights Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/515113-93/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Pegatron",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/53817-40/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Alumni Ventures",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/60082-66/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "JC2 Ventures",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/224093-26/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "SaaS Ventures",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/223411-60/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Salesforce Ventures",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/107882-74/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "FactoryHQ",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/490695-94/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Jakob Uszkoreit",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/527620-60/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Sabrina Hahn",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/459490-87/investor/profile"
                                                   ]
                                       }
                                   ]
                   },
    "addepar":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2025-05-13",
                                       "name":  "Series G",
                                       "type":  "Equity",
                                       "amount":  230000002,
                                       "post":  3.25,
                                       "leads":  [
                                                     "WestCap",
                                                     "Vitruvian Partners"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$3,019,999,997; Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/53736-85/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "329046-04T Secondary Transaction - Private: no Deal Date, no post-money",
                                    "250517-80T Secondary Transaction - Private (2023-12-01): no post-money",
                                    "11 deals not fetched (limit 3)"
                                ],
                    "pbDeals":  14,
                    "holders":  [
                                    {
                                        "name":  "NM Capital (London)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/232918-03/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "D1 Capital Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/231918-76/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Manhattan Venture Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/104098-06/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Valor Equity Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10297-90/investor/profile"
                                                ]
                                    }
                                ]
                },
    "whatnot":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2025-10-28",
                                       "name":  "Series F",
                                       "type":  "Equity",
                                       "amount":  224999276,
                                       "post":  11.5,
                                       "leads":  [
                                                     "CapitalG",
                                                     "DST Global",
                                                     "Greycroft"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$11,275,000,560; Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/431324-11/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2026-08-07",
                                       "name":  "Series G",
                                       "type":  "Equity",
                                       "amount":  547000000,
                                       "post":  20.0,
                                       "leads":  [
                                                     "Lightspeed Venture Partners",
                                                     "Avra",
                                                     "Alkeon Capital Management",
                                                     "ICONIQ Capital"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$19,453,000,000; Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/431324-11/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "314474-05T Secondary Transaction - Private: no Deal Date, no post-money",
                                    "7 deals not fetched (limit 3)"
                                ],
                    "pbDeals":  10,
                    "holders":  [
                                    {
                                        "name":  "Robinhood",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/57227-95/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "S32",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/168850-63/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Andre Iguodala",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/124844-50/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Nilam Ganenthiran",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/465302-62/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Mint 10",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/466804-63/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Scott Keeney",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/170607-07/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Chris Zarou",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/462337-21/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Steve Aoki",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/115259-23/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Operator Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/437275-54/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Twenty Two Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/336993-22/investor/profile"
                                                ]
                                    }
                                ]
                },
    "appliedintuition":  {
                             "researched":  "2026-10-27",
                             "rounds":  [
                                            {
                                                "date":  "2025-06-17",
                                                "name":  "Series F",
                                                "type":  "Equity",
                                                "amount":  600000000,
                                                "post":  15.0,
                                                "leads":  [
                                                              "Kleiner Perkins",
                                                              "BlackRock"
                                                          ],
                                                "basis":  "PitchBook",
                                                "note":  "Pre-money US$14,400,000,000; Later Stage VC",
                                                "src":  [
                                                            "https://my.pitchbook.com/profile/226988-56/company/deals"
                                                        ]
                                            }
                                        ],
                             "filings":  [

                                         ],
                             "skipped":  [
                                             "348929-38T Later Stage VC (2026-10-13): Rumor/Speculation, not completed",
                                             "333781-12T Secondary Transaction - Private (2026-03-25): no post-money",
                                             "7 deals not fetched (limit 3)"
                                         ],
                             "pbDeals":  10,
                             "holders":  [
                                             {
                                                 "name":  "Abu Dhabi Investment Council",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/52325-20/investor/profile"
                                                         ]
                                             },
                                             {
                                                 "name":  "Chakra Capital",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/1168920-19/investor/profile"
                                                         ]
                                             },
                                             {
                                                 "name":  "EQUIAM",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/231013-45/investor/profile"
                                                         ]
                                             },
                                             {
                                                 "name":  "John Quinn",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/481928-50/investor/profile"
                                                         ]
                                             },
                                             {
                                                 "name":  "Venture Highway",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/223537-87/investor/profile"
                                                         ]
                                             },
                                             {
                                                 "name":  "Christopher Fong",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/233908-39/investor/profile"
                                                         ]
                                             },
                                             {
                                                 "name":  "Joshua Buckley",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/109672-93/investor/profile"
                                                         ]
                                             },
                                             {
                                                 "name":  "Elad Gil",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/106041-70/investor/profile"
                                                         ]
                                             },
                                             {
                                                 "name":  "Lux Capital",
                                                 "type":  "investor",
                                                 "stake":  null,
                                                 "basis":  "PitchBook investor list: Active, Minority",
                                                 "src":  [
                                                             "https://my.pitchbook.com/profile/11229-04/investor/profile"
                                                         ]
                                             }
                                         ]
                         },
    "glean":  {
                  "researched":  "2026-10-27",
                  "rounds":  [
                                 {
                                     "date":  "2024-02-27",
                                     "name":  "Series D",
                                     "type":  "Equity",
                                     "amount":  200000001,
                                     "post":  2.2,
                                     "leads":  [
                                                   "Kleiner Perkins",
                                                   "Lightspeed Venture Partners"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$2,000,000,013; Later Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/438274-72/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2024-09-10",
                                     "name":  "Series E",
                                     "type":  "Equity",
                                     "amount":  259999995,
                                     "post":  4.6,
                                     "leads":  [
                                                   "Lightspeed Venture Partners",
                                                   "Sequoia Capital",
                                                   "Altimeter Capital Management"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$4,339,999,995; Later Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/438274-72/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2025-11-25",
                                     "name":  "Series F",
                                     "type":  "Equity",
                                     "amount":  150000031,
                                     "post":  7.2,
                                     "leads":  [
                                                   "Wellington Management"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$7,049,999,990; Later Stage VC",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/438274-72/company/deals"
                                             ]
                                 }
                             ],
                  "filings":  [

                              ],
                  "skipped":  [
                                  "3 deals not fetched (limit 3)"
                              ],
                  "pbDeals":  6,
                  "holders":  [
                                  {
                                      "name":  "Advaita Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/481211-65/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Dash VC",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/534426-85/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Khosla Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11227-60/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Wellington Management",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/13346-29/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Zain S Hasan Charitable Remainder Trust",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/731311-57/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "AJI Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/234860-05/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "DST Global",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/40773-97/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Adams Street Partners",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/11105-47/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Citi Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/54461-80/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Justin Gage",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/458512-84/investor/profile"
                                              ]
                                  }
                              ]
              },
    "lyten":  {
                  "researched":  "2026-10-27",
                  "rounds":  [

                             ],
                  "filings":  [

                              ],
                  "skipped":  [
                                  "314184-61T Equity Crowdfunding (2025-11-25): not an eligible deal type, no post-money",
                                  "302683-96T Later Stage VC Series C (2026-01-01): no pre- or post-money shown",
                                  "280452-70T Debt - General: debt",
                                  "14 deals not fetched (limit 3)"
                              ],
                  "pbDeals":  17,
                  "holders":  [
                                  {
                                      "name":  "David Ku",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/902855-98/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Walbridge",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/66093-76/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Prime Movers Lab",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/232381-99/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "National Science Foundation Innovation Corps Program",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/150724-45/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "AiiM Partners",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/226841-77/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "FootPrint Coalition",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/439459-12/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Honeywell Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/181058-95/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "US Department of Homeland Security",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/10026-64/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "United States Department of War",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/120649-24/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "National Security Innovation Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/528391-90/investor/profile"
                                              ]
                                  }
                              ]
              },
    "gusto":  {
                  "researched":  "2026-10-27",
                  "rounds":  [
                                 {
                                     "date":  "2025-10-15",
                                     "name":  "Later Stage VC (10th Round)",
                                     "type":  "Equity",
                                     "post":  9.3,
                                     "leads":  [
                                                   "Teachers\u0027 Venture Growth"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money not shown; deal type Later Stage VC; deal size not disclosed",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/55758-97/company/deals"
                                             ]
                                 }
                             ],
                  "filings":  [

                              ],
                  "skipped":  [
                                  "Deal 14 Debt - General, 2025-11-01 (debt)",
                                  "Deal 12 Secondary Transaction - Private, 2024-10-07 (failed/cancelled)"
                              ],
                  "pbDeals":  14,
                  "holders":  [
                                  {
                                      "name":  "Fifth Down Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/431739-64/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Quiet Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/231270-40/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Unusual Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/227419-12/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Fidelity Management \u0026 Research Company",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/96060-25/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Friends \u0026 Family Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/268813-18/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "137 Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/58781-35/investor/profile"
                                              ]
                                  }
                              ]
              },
    "mercury":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2025-03-26",
                                       "name":  "Series C",
                                       "type":  "Equity",
                                       "amount":  300000000,
                                       "post":  3.5,
                                       "leads":  [
                                                     "Sequoia Capital"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $3,257,450,867; deal type Later Stage VC; deal size $300M includes $57.45M debt (equity $242.55M); pre + size within 2% of post",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/222307-21/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2026-05-20",
                                       "name":  "Series D",
                                       "type":  "Equity",
                                       "amount":  200000000,
                                       "post":  5.2,
                                       "leads":  [
                                                     "TCV"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money $5,000,000,000; deal type Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/222307-21/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "Deal 6 General Corporate Purpose, 2024-10-08 (debt)"
                                ],
                    "pbDeals":  8,
                    "holders":  [
                                    {
                                        "name":  "CapitalX",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/431348-95/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Founders Circle Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/55747-99/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Night Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/439158-34/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Jack Altman",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/106121-71/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Chapter One",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/234705-97/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Clocktower Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/154287-10/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Melo7 Tech Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/65327-23/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Scott Belsky",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/106022-53/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Thirty Five Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/234080-11/investor/profile"
                                                ]
                                    }
                                ]
                },
    "chainalysis":  {
                        "researched":  "2026-10-27",
                        "rounds":  [

                                   ],
                        "filings":  [

                                    ],
                        "skipped":  [
                                        "Deal 14 Later Stage VC, 2025-10-16 (no post-money valuation)",
                                        "Deal 13 Later Stage VC, 2024-08-06 (no post-money valuation)",
                                        "Deal 12 Accelerator/Incubator, 2023-05-15 (accelerator)"
                                    ],
                        "pbDeals":  14,
                        "holders":  [
                                        {
                                            "name":  "Arche Capital",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/600266-44/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Haun Ventures Management",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/494000-56/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "GIC Private",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/12421-90/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "MVC (New York)",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/589667-86/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Viserion Investment",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/497704-60/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Crew Capital",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/491181-85/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Paradigm",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/233744-05/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Addition",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/327363-13/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Ash Egan",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/454227-40/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "INCUBA",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/58424-77/investor/profile"
                                                    ]
                                        }
                                    ]
                    },
    "fireblocks":  {
                       "researched":  "2026-10-27",
                       "rounds":  [
                                      {
                                          "date":  "2022-01-27",
                                          "name":  "Series E",
                                          "type":  "Equity",
                                          "amount":  550000000,
                                          "post":  8.0,
                                          "leads":  [
                                                        "Spark Capital",
                                                        "D1 Capital Partners"
                                                    ],
                                          "basis":  "PitchBook",
                                          "note":  "Pre-money $7,539,994,969; deal type Later Stage VC; deal size $550M includes $89,995,073 debt (equity $460.0M); pre + size within 2% of post",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/268005-34/company/deals"
                                                  ]
                                      }
                                  ],
                       "filings":  [

                                   ],
                       "skipped":  [
                                       "Deal 10 Later Stage VC, 2026-01-01 (no post-money valuation)",
                                       "Deal 9 Later Stage VC, 2024-05-19 (no post-money valuation)"
                                   ],
                       "pbDeals":  10,
                       "holders":  [
                                       {
                                           "name":  "Haun Ventures Management",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/494000-56/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Branden Nichols",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/399665-62/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Bank of New York Mellon (Shareowner Services Business)",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/110016-46/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "SCB 10X",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/434373-04/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Spark Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/11303-02/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Ribbit Capital",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/55346-14/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Tilli Kalisky-Bannett",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/470658-07/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Cedar Hill Capital Partners",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/14387-68/investor/profile"
                                                   ]
                                       },
                                       {
                                           "name":  "Shlomo Kramer",
                                           "type":  "investor",
                                           "stake":  null,
                                           "basis":  "PitchBook investor list: Active, Minority",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/106533-82/investor/profile"
                                                   ]
                                       }
                                   ]
                   },
    "nuro":  {
                 "researched":  "2026-10-27",
                 "rounds":  [
                                {
                                    "date":  "2025-08-21",
                                    "name":  "Series E",
                                    "type":  "Equity",
                                    "amount":  200000002,
                                    "post":  6.0,
                                    "leads":  [

                                              ],
                                    "basis":  "PitchBook",
                                    "note":  "Pre-money $5,800,000,002; deal type Later Stage VC; pre + size matches post; no lead named in synopsis",
                                    "src":  [
                                                "https://my.pitchbook.com/profile/166438-45/company/deals"
                                            ]
                                }
                            ],
                 "filings":  [

                             ],
                 "skipped":  [
                                 "Deal 12 Later Stage VC, 2026-06-04 (rumour/speculation, not completed)",
                                 "Deal 10 Accelerator/Incubator, 2024-02-21 (accelerator)"
                             ],
                 "pbDeals":  12,
                 "holders":  [
                                 {
                                     "name":  "Icehouse Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/294492-70/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Uber",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/51136-75/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Disney Accelerator",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/86599-72/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Sakal Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/465541-30/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Bow Capital",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/170365-78/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Tiger Global Management",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/42873-94/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "T. Rowe Price Group",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/10072-54/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Woven Capital",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/463446-55/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Basis Set Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/182527-66/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Sweat Equity Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/431562-70/investor/profile"
                                             ]
                                 }
                             ]
             },
    "contentsquare":  {
                          "researched":  "2026-10-27",
                          "rounds":  [
                                         {
                                             "date":  "2022-07-15",
                                             "name":  "Series F",
                                             "type":  "Equity",
                                             "amount":  603102526,
                                             "post":  5.6864,
                                             "leads":  [
                                                           "Sixth Street Partners"
                                                       ],
                                             "basis":  "PitchBook",
                                             "note":  "Pre-money US$5,288,814,440; Later Stage VC. Mismatch: pre + deal size (US$5,891,916,966) exceeds post (US$5,686,398,524) by US$205.5M, equal to the term loan included in deal size; equity US$397.6M reconciles to post.",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/219719-08/company/deals"
                                                     ]
                                         }
                                     ],
                          "filings":  [

                                      ],
                          "skipped":  [
                                          {
                                              "deal":  "249576-13T",
                                              "deal_type":  "Later Stage VC (deal #11, 2024-01-01)",
                                              "reason":  "no post-money valuation"
                                          },
                                          {
                                              "deal":  "260880-49T",
                                              "deal_type":  "Accelerator/Incubator - Non-Equity Accelerator",
                                              "reason":  "accelerator"
                                          }
                                      ],
                          "pbDeals":  11,
                          "holders":  [
                                          {
                                              "name":  "La French Tech",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/108849-79/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Ligo Partners",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/434671-12/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Columbia Lake Partners",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/66331-72/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "BlackRock Private Equity Partners",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/54070-03/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Hermes GPE",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/42862-15/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Bleu Capital",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/166812-76/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Carson Private Capital",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/40396-15/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "H14",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/184157-38/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Seed4Soft",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/59021-20/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "ESSEC Ventures",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/100229-86/investor/profile"
                                                      ]
                                          }
                                      ]
                      },
    "abridge":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2025-02-17",
                                       "name":  "Series D",
                                       "type":  "Equity",
                                       "amount":  250000000,
                                       "post":  2.75,
                                       "leads":  [
                                                     "IVP",
                                                     "Elad Gil"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$2,499,999,932; Later Stage VC.",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/268134-40/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2026-06-11",
                                       "name":  "Series E",
                                       "type":  "Equity",
                                       "amount":  315934583,
                                       "post":  5.3,
                                       "leads":  [
                                                     "Andreessen Horowitz",
                                                     "Khosla Ventures"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$4,984,065,502; Later Stage VC.",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/268134-40/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    {
                                        "deal":  "319230-46T",
                                        "deal_type":  "Secondary Transaction - Private (deal #8, 2026-01-07)",
                                        "reason":  "no post-money valuation"
                                    }
                                ],
                    "pbDeals":  9,
                    "holders":  [
                                    {
                                        "name":  "Catalio Capital Management",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/436773-70/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Human Capital Development",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/519920-02/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Soma Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/110937-70/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "WndrCo",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/170084-35/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Alphabet",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10453-33/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Mayo Clinic",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/51726-52/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Spark Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11303-02/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "IKS Health",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/109294-66/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Bessemer Venture Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10134-73/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Zen Chu",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/462783-79/investor/profile"
                                                ]
                                    }
                                ]
                },
    "thrivemarket":  {
                         "researched":  "2026-10-27",
                         "rounds":  [
                                        {
                                            "date":  "2020-10-01",
                                            "name":  "Series C",
                                            "type":  "Equity",
                                            "amount":  86370020,
                                            "post":  1.5864,
                                            "leads":  [

                                                      ],
                                            "basis":  "PitchBook",
                                            "note":  "Pre-money US$1,500,000,005; Later Stage VC. Deal size flagged Estimated by PitchBook.",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/97437-16/company/deals"
                                                    ]
                                        }
                                    ],
                         "filings":  [

                                     ],
                         "skipped":  [
                                         {
                                             "deal":  "248874-85T",
                                             "deal_type":  "Angel (individual) (deal #10, 2024-01-01)",
                                             "reason":  "deal type not in scope (angel)"
                                         },
                                         {
                                             "deal":  "201848-41T",
                                             "deal_type":  "Secondary Transaction - Private (deal #8, 2020-07-27)",
                                             "reason":  "no post-money valuation"
                                         }
                                     ],
                         "pbDeals":  10,
                         "holders":  [
                                         {
                                             "name":  "Loren Bendele",
                                             "type":  "investor",
                                             "stake":  null,
                                             "basis":  "PitchBook investor list: Active, Minority",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/357415-21/investor/profile"
                                                     ]
                                         },
                                         {
                                             "name":  "Pure Imagination Brands",
                                             "type":  "investor",
                                             "stake":  null,
                                             "basis":  "PitchBook investor list: Active, Minority",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/497676-97/investor/profile"
                                                     ]
                                         },
                                         {
                                             "name":  "GS Retail",
                                             "type":  "investor",
                                             "stake":  null,
                                             "basis":  "PitchBook investor list: Active, Minority",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/164531-89/investor/profile"
                                                     ]
                                         }
                                     ]
                     },
    "altruist":  {
                     "researched":  "2026-10-27",
                     "rounds":  [
                                    {
                                        "date":  "2024-05-02",
                                        "name":  "Series E",
                                        "type":  "Equity",
                                        "amount":  169000000,
                                        "post":  1.5471,
                                        "leads":  [
                                                      "ICONIQ Growth"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$1,378,112,211; Later Stage VC.",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/265626-01/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2025-04-22",
                                        "name":  "Series F",
                                        "type":  "Equity",
                                        "amount":  151999994,
                                        "post":  1.9,
                                        "leads":  [
                                                      "GIC Private"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$1,748,000,001; Later Stage VC.",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/265626-01/company/deals"
                                                ]
                                    }
                                ],
                     "filings":  [

                                 ],
                     "skipped":  [
                                     {
                                         "deal":  "343879-21T",
                                         "deal_type":  "Merger/Acquisition (deal #8, 2026-08-26)",
                                         "reason":  "not a financing round; status Announced/In Progress, not completed"
                                     }
                                 ],
                     "pbDeals":  8,
                     "holders":  [

                                 ]
                 },
    "carsome":  {
                    "researched":  "2026-10-27",
                    "rounds":  [

                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    {
                                        "deal":  "247416-31T",
                                        "deal_type":  "Later Stage VC (deal #16, 2026-09-27)",
                                        "reason":  "no post-money valuation"
                                    },
                                    {
                                        "deal":  "311514-49T",
                                        "deal_type":  "Debt - General (deal #15, 2025-07-16)",
                                        "reason":  "debt"
                                    },
                                    {
                                        "deal":  "284513-95T",
                                        "deal_type":  "Later Stage VC (deal #14, 2025-02-06)",
                                        "reason":  "no post-money valuation"
                                    }
                                ],
                    "pbDeals":  16,
                    "holders":  [
                                    {
                                        "name":  "Bytez Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/539027-83/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Catcha Group",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/56410-30/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Gokongwei Family",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/469510-57/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Penjana Kapital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/463387-42/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "SeaTown Holdings International",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/462927-61/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "YTL PowerSeraya",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/24083-11/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "500 Global",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/51006-88/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "IMG Investment Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/154795-33/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "500 Southeast Asia",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/234859-06/investor/profile"
                                                ]
                                    }
                                ]
                },
    "clay":  {
                 "researched":  "2026-10-27",
                 "rounds":  [
                                {
                                    "date":  "2026-01-28",
                                    "name":  "Secondary Transaction - Private",
                                    "type":  "Tender",
                                    "companyRun":  false,
                                    "amount":  55000000,
                                    "post":  5.0,
                                    "leads":  [

                                              ],
                                    "basis":  "PitchBook",
                                    "note":  "Pre-money not shown; Secondary Transaction - Private, employee stock sale",
                                    "src":  [
                                                "https://my.pitchbook.com/profile/225887-77/company/deals"
                                            ]
                                },
                                {
                                    "date":  "2026-07-23",
                                    "name":  "Series D",
                                    "type":  "Equity",
                                    "amount":  115000000,
                                    "post":  7.1,
                                    "leads":  [
                                                  "Wellington Legacy Capital"
                                              ],
                                    "basis":  "PitchBook",
                                    "note":  "Pre-money US$7000M; Later Stage VC; deal size includes $15M debt",
                                    "src":  [
                                                "https://my.pitchbook.com/profile/225887-77/company/deals"
                                            ]
                                }
                            ],
                 "filings":  [

                             ],
                 "skipped":  [
                                 "Deal 10, 2026-06-01, Secondary Transaction - Private: no post-money valuation"
                             ],
                 "pbDeals":  11,
                 "holders":  [
                                 {
                                     "name":  "DST Global",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/40773-97/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Sheila Vashee",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/1488755-26/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Shishir Mehrotra",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/109922-50/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Frontline Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/54840-88/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Maggie Hott",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/820016-38/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Abstract Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/179440-93/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Boldstart Ventures",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/53788-78/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Builders VC",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/168899-86/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "First Round Capital",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/11189-44/investor/profile"
                                             ]
                                 }
                             ]
             },
    "commure":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2026-05-19",
                                       "name":  "Later Stage VC (10th Round)",
                                       "type":  "Equity",
                                       "amount":  70000000,
                                       "post":  7.0,
                                       "leads":  [
                                                     "General Catalyst"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$6930M; Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/187710-13/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "Deal 11, 2025-06-19, Later Stage VC Series E: no post-money valuation",
                                    "Deal 10, 2024-12-30, Later Stage VC: no post-money valuation"
                                ],
                    "pbDeals":  12,
                    "holders":  [
                                    {
                                        "name":  "Kirkland \u0026 Ellis",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10019-98/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "LTS Growth",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/236929-15/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Martin Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/52211-62/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "AIX Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/489570-40/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Sequoia Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11295-73/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Sunflower Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/88707-52/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Also Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/399094-12/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "8VC",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/149720-23/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Human Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/181950-40/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Innovation \u0026 Digital Health Accelerator",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/399182-05/investor/profile"
                                                ]
                                    }
                                ]
                },
    "redwood":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2023-08-29",
                                       "name":  "Series D",
                                       "type":  "Equity",
                                       "amount":  1000000010,
                                       "post":  5.0,
                                       "leads":  [
                                                     "Capricorn Investment Group",
                                                     "Goldman Sachs Asset Management"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$4000M; Later Stage VC; synopsis says debt plus Series D",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/180447-85/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2026-01-28",
                                       "name":  "Series E",
                                       "type":  "Equity",
                                       "amount":  425000000,
                                       "post":  6.0,
                                       "leads":  [
                                                     "Eclipse Capital"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$5650M; Later Stage VC; $425M incl. $75M debt, $350M equity",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/180447-85/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "Deal 5, 2022-06-27, Accelerator/Incubator Non-Equity Accelerator: not a financing round"
                                ],
                    "pbDeals":  7,
                    "holders":  [
                                    {
                                        "name":  "Alphabet",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10453-33/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Quantum Technology Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/53336-17/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Deepwater Asset Management",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/169150-78/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Ericsenz Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/234148-96/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Franklin Venture Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/465988-15/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Leitmotif",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/560264-23/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Woori Venture Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/522404-47/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Emerson Collective",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/66036-07/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Breakthrough Energy",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/168856-57/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Capricorn Investment Group",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10789-57/investor/profile"
                                                ]
                                    }
                                ]
                },
    "thefarmersdog":  {
                          "researched":  "2026-10-27",
                          "rounds":  [
                                         {
                                             "date":  "2021-03-26",
                                             "name":  "Series D",
                                             "type":  "Equity",
                                             "amount":  64999848,
                                             "post":  1.465,
                                             "leads":  [

                                                       ],
                                             "basis":  "PitchBook",
                                             "note":  "Pre-money US$1400M; Later Stage VC",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/158419-45/company/deals"
                                                     ]
                                         },
                                         {
                                             "date":  "2022-06-08",
                                             "name":  "Series E",
                                             "type":  "Equity",
                                             "amount":  68000000,
                                             "post":  2.668,
                                             "leads":  [

                                                       ],
                                             "basis":  "PitchBook",
                                             "note":  "Pre-money US$2600M; Later Stage VC",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/158419-45/company/deals"
                                                     ]
                                         }
                                     ],
                          "filings":  [

                                      ],
                          "skipped":  [
                                          "Deal 6, no Deal Date, Later Stage VC: no date or post-money valuation"
                                      ],
                          "pbDeals":  7,
                          "holders":  [
                                          {
                                              "name":  "Passive Impact",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/521540-56/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Dollar Shave Club",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/53988-58/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Glossier",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/104052-34/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Sweetgreen",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/58973-50/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Warby Parker",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/52838-11/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Currency M",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/224176-69/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Align Ventures",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/82597-87/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Collaborative Fund",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/51595-21/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Forerunner Ventures",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/52507-90/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "SV Angel",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/50980-60/investor/profile"
                                                      ]
                                          }
                                      ]
                      },
    "liquiddeath":  {
                        "researched":  "2026-10-27",
                        "rounds":  [

                                   ],
                        "filings":  [

                                    ],
                        "skipped":  [
                                        "Deal 15, 2025-08-29, Later Stage VC 9th Round: no post-money valuation",
                                        "Deal 14, 2025-03-11, Secondary Transaction - Private: no post-money valuation",
                                        "Deal 13, 2024-12-16, General Corporate Purpose: debt"
                                    ],
                        "pbDeals":  15,
                        "holders":  [
                                        {
                                            "name":  "Bridgespan VC",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/720913-06/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Wellness Growth Ventures",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/538113-52/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "1435 Capital Management",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/459200-53/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "4th \u0026 1 Ventures",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/554349-61/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Bossa Invest",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/82766-89/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Neal Brennan",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/590302-36/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "GroundForce Capital",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/113001-94/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Steve Aoki",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/115259-23/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Blake Mycoskie",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/106390-63/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Biz Stone",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/106195-96/investor/profile"
                                                    ]
                                        }
                                    ]
                    },
    "basepower":  {
                      "researched":  "2026-10-27",
                      "rounds":  [
                                     {
                                         "date":  "2025-04-09",
                                         "name":  "Series B",
                                         "type":  "Equity",
                                         "amount":  200000016,
                                         "post":  0.841,
                                         "leads":  [
                                                       "LightSpeed",
                                                       "Valor Equity Partners",
                                                       "Addition"
                                                   ],
                                         "basis":  "PitchBook",
                                         "note":  "Pre-money US$641.0M; Early Stage VC",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/553144-96/company/deals"
                                                 ]
                                     },
                                     {
                                         "date":  "2025-10-08",
                                         "name":  "Series C",
                                         "type":  "Equity",
                                         "amount":  1000000000,
                                         "post":  4.0,
                                         "leads":  [
                                                       "Addition"
                                                   ],
                                         "basis":  "PitchBook",
                                         "note":  "Pre-money US$3.0B; Later Stage VC",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/553144-96/company/deals"
                                                 ]
                                     },
                                     {
                                         "date":  "2026-08-03",
                                         "name":  "Series D",
                                         "type":  "Equity",
                                         "amount":  1000000000,
                                         "post":  13.0,
                                         "leads":  [
                                                       "Valor Equity Partners",
                                                       "Addition",
                                                       "Ribbit Capital"
                                                   ],
                                         "basis":  "PitchBook",
                                         "note":  "Pre-money US$12.0B; Later Stage VC",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/553144-96/company/deals"
                                                 ]
                                     }
                                 ],
                      "filings":  [

                                  ],
                      "skipped":  [
                                      "Deals 1-2 (oldest) not retrieved: limit 3 of 5 total"
                                  ],
                      "pbDeals":  5,
                      "holders":  [
                                      {
                                          "name":  "1789 Capital",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/520063-66/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Align Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/82597-87/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Avenir Growth Capital",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/183357-91/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "FJ Labs",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/108358-57/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "K5 Global",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/343248-58/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Octant Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/731504-53/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Redefine Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/522168-76/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Maple Pledge Capital",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/762813-64/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "MCJ",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/458028-01/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Overmatch Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/589087-18/investor/profile"
                                                  ]
                                      }
                                  ]
                  },
    "castelion":  {
                      "researched":  "2026-10-27",
                      "rounds":  [
                                     {
                                         "date":  "2025-11-20",
                                         "name":  "Series B",
                                         "type":  "Equity",
                                         "amount":  359998700,
                                         "post":  2.8,
                                         "leads":  [
                                                       "Lightspeed Venture Partners",
                                                       "Altimeter Capital Management",
                                                       "DataPower Capital"
                                                   ],
                                         "basis":  "PitchBook",
                                         "note":  "Pre-money US$2.44B; Early Stage VC",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/533360-53/company/deals"
                                                 ]
                                     },
                                     {
                                         "date":  "2026-08-13",
                                         "name":  "Series C",
                                         "type":  "Equity",
                                         "amount":  1050000000,
                                         "post":  13.0,
                                         "leads":  [
                                                       "JPMorgan Chase"
                                                   ],
                                         "basis":  "PitchBook",
                                         "note":  "Pre-money US$12.2B; Later Stage VC; deal size includes $250M revolving debt (equity $800M). Pre + size = 13.25B vs post 13.0B (+1.9%, within 2%; equity ties exactly)",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/533360-53/company/deals"
                                                 ]
                                     }
                                 ],
                      "filings":  [

                                  ],
                      "skipped":  [
                                      "Deal 4 Secondary Transaction - Private: no Deal Date or post-money",
                                      "Deals 1-2 (oldest) not retrieved: limit 3 of 5 total"
                                  ],
                      "pbDeals":  5,
                      "holders":  [
                                      {
                                          "name":  "7percent Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/157663-45/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Avenir Growth Capital",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/183357-91/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "General Catalyst",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/10123-03/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Unmatched Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/1242144-28/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Cantos Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/162825-67/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Interlagos Capital",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/594258-31/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Lightspeed Venture Partners",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/11333-26/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "Silent Ventures",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/537783-94/investor/profile"
                                                  ]
                                      },
                                      {
                                          "name":  "New Vista Capital",
                                          "type":  "investor",
                                          "stake":  null,
                                          "basis":  "PitchBook investor list: Active, Minority",
                                          "src":  [
                                                      "https://my.pitchbook.com/profile/531380-44/investor/profile"
                                                  ]
                                      }
                                  ]
                  },
    "physicsx":  {
                     "researched":  "2026-10-27",
                     "rounds":  [
                                    {
                                        "date":  "2025-06-22",
                                        "name":  "Series B",
                                        "type":  "Equity",
                                        "amount":  182429063,
                                        "post":  0.593,
                                        "leads":  [
                                                      "Atomico"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$468.3M; Later Stage VC; deal size includes $57.7M debt (equity $124.7M). MISMATCH: pre + size = 650.8M vs post 593.1M (+9.7%), explained by the debt",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/529644-70/company/deals"
                                                ]
                                    },
                                    {
                                        "date":  "2026-07-30",
                                        "name":  "Series C",
                                        "type":  "Equity",
                                        "amount":  300883260,
                                        "post":  2.407,
                                        "leads":  [
                                                      "Temasek Holdings"
                                                  ],
                                        "basis":  "PitchBook",
                                        "note":  "Pre-money US$2.11B; Later Stage VC; size converted from GBP 225M",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/529644-70/company/deals"
                                                ]
                                    }
                                ],
                     "filings":  [

                                 ],
                     "skipped":  [
                                     "Deal 4 Accelerator/Incubator (Non-Equity Accelerator, Microsoft program): no equity, no valuation",
                                     "Deals 1-2 (oldest) not retrieved: limit 3 of 5 total"
                                 ],
                     "pbDeals":  5,
                     "holders":  [
                                     {
                                         "name":  "Intrepid Growth Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/542339-02/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "M\u0026G",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/40718-08/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "PostScriptum (Finland)",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/1447196-59/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Allen \u0026 Company",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/350067-97/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Atomico (UK) Partners",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/40732-48/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "July Fund",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/519013-90/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Orion Hindawi",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/522021-88/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "General Catalyst",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/10123-03/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Henry Kravis",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/106198-12/investor/profile"
                                                 ]
                                     },
                                     {
                                         "name":  "Stonecroft Management",
                                         "type":  "investor",
                                         "stake":  null,
                                         "basis":  "PitchBook investor list: Active, Minority",
                                         "src":  [
                                                     "https://my.pitchbook.com/profile/515792-62/investor/profile"
                                                 ]
                                     }
                                 ]
                 },
    "tenstorrent":  {
                        "researched":  "2026-10-27",
                        "rounds":  [
                                       {
                                           "date":  "2024-12-02",
                                           "name":  "Series D1",
                                           "type":  "Equity",
                                           "amount":  700000000,
                                           "post":  2.6,
                                           "leads":  [
                                                         "Samsung Catalyst Fund",
                                                         "Samsung Venture Investment",
                                                         "Samsung Securities"
                                                     ],
                                           "basis":  "PitchBook",
                                           "note":  "Pre-money US$1.9B; Later Stage VC; Valuation estimated by PitchBook",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/171627-13/company/deals"
                                                   ]
                                       },
                                       {
                                           "date":  "2026-10-19",
                                           "name":  "Series E",
                                           "type":  "Equity",
                                           "amount":  1500000000,
                                           "post":  6.2,
                                           "leads":  [
                                                         "Trace Capital",
                                                         "Innovation X Advisors"
                                                     ],
                                           "basis":  "PitchBook",
                                           "note":  "Pre-money US$4.7B; Later Stage VC",
                                           "src":  [
                                                       "https://my.pitchbook.com/profile/171627-13/company/deals"
                                                   ]
                                       }
                                   ],
                        "filings":  [

                                    ],
                        "skipped":  [
                                        "Deal 9 Later Stage VC (2026-03-04): no post-money, undisclosed amount",
                                        "Deals 1-7 (oldest) not retrieved: limit 3 of 10 total"
                                    ],
                        "pbDeals":  10,
                        "holders":  [
                                        {
                                            "name":  "GiantLeap Capital",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/443121-04/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Baillie Gifford",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/58068-64/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Fundomo",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/521294-59/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "GenerativeIQ",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/624217-87/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Korea Investment Partners",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/53279-74/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "LG Technology Ventures",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/234526-87/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "NearingPoint Venture Partners",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/1364924-17/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Ontario Pension Board",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/52357-60/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Samsung Catalyst Fund",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/59168-98/investor/profile"
                                                    ]
                                        },
                                        {
                                            "name":  "Fidelity Management \u0026 Research Company",
                                            "type":  "investor",
                                            "stake":  null,
                                            "basis":  "PitchBook investor list: Active, Minority",
                                            "src":  [
                                                        "https://my.pitchbook.com/profile/96060-25/investor/profile"
                                                    ]
                                        }
                                    ]
                    },
    "dmatrix":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2023-09-06",
                                       "name":  "Series B",
                                       "type":  "Equity",
                                       "amount":  109999996,
                                       "post":  0.385,
                                       "leads":  [
                                                     "Temasek Holdings"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$275.0M; Early Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/398921-86/company/deals"
                                               ]
                                   },
                                   {
                                       "date":  "2025-11-12",
                                       "name":  "Series C",
                                       "type":  "Equity",
                                       "amount":  275000008,
                                       "post":  2.0,
                                       "leads":  [
                                                     "Bullhound Capital",
                                                     "Triatomic Capital"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$1.725B; Later Stage VC",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/398921-86/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "Deal 5 Later Stage VC (2026-03-06): no post-money, undisclosed amount",
                                    "Deals 1-2 (oldest) not retrieved: limit 3 of 5 total"
                                ],
                    "pbDeals":  5,
                    "holders":  [
                                    {
                                        "name":  "EDBI",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11169-82/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Qatar Holding",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/51364-81/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Calm Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/435244-96/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Cortes Capital (Oklahoma)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/535859-38/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Ericsson Ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/186811-30/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "G Vision Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/509629-60/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Mirae Asset Global Investments (USA)",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/465558-94/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Samsung Venture Investment",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/11292-58/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Social IP ventures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/498001-60/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Nautilus Venture Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/157320-37/investor/profile"
                                                ]
                                    }
                                ]
                },
    "safesuperintelligence":  {
                                  "researched":  "2026-10-27",
                                  "rounds":  [
                                                 {
                                                     "date":  "2024-09-04",
                                                     "name":  "Early Stage VC (1st Round)",
                                                     "type":  "Equity",
                                                     "amount":  1000000000,
                                                     "post":  5,
                                                     "leads":  [
                                                                   "GV",
                                                                   "Andreessen Horowitz",
                                                                   "Sequoia Capital"
                                                               ],
                                                     "basis":  "PitchBook",
                                                     "note":  "Pre-money US$4,000,000,000; Early Stage VC; pre + size = post (checked)",
                                                     "src":  [
                                                                 "https://my.pitchbook.com/profile/606742-48/company/deals"
                                                             ]
                                                 },
                                                 {
                                                     "date":  "2025-04-11",
                                                     "name":  "Early Stage VC (2nd Round)",
                                                     "type":  "Equity",
                                                     "amount":  6000000000,
                                                     "post":  32,
                                                     "leads":  [
                                                                   "Greenoaks"
                                                               ],
                                                     "basis":  "PitchBook",
                                                     "note":  "Pre-money US$26,000,000,000; Early Stage VC; pre + size = post (checked)",
                                                     "src":  [
                                                                 "https://my.pitchbook.com/profile/606742-48/company/deals"
                                                             ]
                                                 }
                                             ],
                                  "filings":  [

                                              ],
                                  "skipped":  [
                                                  "340484-77T 2026-07-27 Early Stage VC (3rd Round): status Announced/In Progress, not completed"
                                              ],
                                  "pbDeals":  3,
                                  "holders":  [
                                                  {
                                                      "name":  "HOF Capital",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/126970-03/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "Lightspeed Venture Partners",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/11333-26/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "OurCrowd",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/55879-21/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "Quiet Capital",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/231270-40/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "Small World Capital",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/546023-98/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "VentureIsrael",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/443093-50/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "DST Global",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/40773-97/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "NFDG",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/592507-09/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "NVIDIA",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/41161-24/investor/profile"
                                                              ]
                                                  },
                                                  {
                                                      "name":  "Sequoia Capital",
                                                      "type":  "investor",
                                                      "stake":  null,
                                                      "basis":  "PitchBook investor list: Active, Minority",
                                                      "src":  [
                                                                  "https://my.pitchbook.com/profile/11295-73/investor/profile"
                                                              ]
                                                  }
                                              ]
                              },
    "plaid":  {
                  "researched":  "2026-10-27",
                  "rounds":  [
                                 {
                                     "date":  "2025-04-03",
                                     "name":  "Later Stage VC (8th Round)",
                                     "type":  "Equity",
                                     "amount":  575000000,
                                     "post":  6.1,
                                     "leads":  [
                                                   "Franklin Resources"
                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Pre-money US$5,525,000,000; Later Stage VC; pre + size = post (checked)",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/59128-48/company/deals"
                                             ]
                                 },
                                 {
                                     "date":  "2026-02-26",
                                     "name":  "Secondary Transaction - Private",
                                     "type":  "Tender",
                                     "companyRun":  false,
                                     "post":  8,
                                     "leads":  [

                                               ],
                                     "basis":  "PitchBook",
                                     "note":  "Post-money US$8,000,000,000; Secondary Transaction - Private; deal size and pre-money not shown; sellers Atlas Fund and undisclosed investors",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/59128-48/company/deals"
                                             ]
                                 }
                             ],
                  "filings":  [

                              ],
                  "skipped":  [
                                  "337796-56T IPO: status Upcoming, no post-money shown"
                              ],
                  "pbDeals":  14,
                  "holders":  [
                                  {
                                      "name":  "1789 Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/520063-66/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "369 Growth Partners",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/516089-62/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "CE-Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/433026-46/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Stableton",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/277310-44/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "DT Unicorn Fund",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/506775-43/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Oceanic Partners",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/114918-31/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "PayPal Ventures",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/267353-11/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Altimeter Capital Management",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/42770-53/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Valhalla Private Capital",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/60511-87/investor/profile"
                                              ]
                                  },
                                  {
                                      "name":  "Coatue Management",
                                      "type":  "investor",
                                      "stake":  null,
                                      "basis":  "PitchBook investor list: Active, Minority",
                                      "src":  [
                                                  "https://my.pitchbook.com/profile/56091-70/investor/profile"
                                              ]
                                  }
                              ]
              },
    "celonis":  {
                    "researched":  "2026-10-27",
                    "rounds":  [
                                   {
                                       "date":  "2022-08-23",
                                       "name":  "Series D",
                                       "type":  "Equity",
                                       "amount":  1000000000,
                                       "post":  13,
                                       "leads":  [
                                                     "Qatar Investment Authority"
                                                 ],
                                       "basis":  "PitchBook",
                                       "note":  "Pre-money US$12,600,000,000; Later Stage VC. MISMATCH: pre + size = 13.6B vs post 13.0B; $600M of the $1B is debt and the $400M equity reconciles to post",
                                       "src":  [
                                                   "https://my.pitchbook.com/profile/149258-71/company/deals"
                                               ]
                                   }
                               ],
                    "filings":  [

                                ],
                    "skipped":  [
                                    "271674-82T 2024-01-01 Later Stage VC (5th Round): no post-money shown",
                                    "294914-35T 2021-10-06 Secondary Transaction - Private: no post-money shown"
                                ],
                    "pbDeals":  13,
                    "holders":  [
                                    {
                                        "name":  "Standard Industries",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/166361-68/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "CF Private Equity",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/521381-53/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "CrossContinentalVentures",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/59988-16/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Durable Capital Partners",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/342094-33/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Marathon Venture Capital",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/178941-16/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Ryan Smith",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/179953-30/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Startup Autobahn",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/171112-24/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "83North",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/91434-07/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "Accel",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/10139-41/investor/profile"
                                                ]
                                    },
                                    {
                                        "name":  "UnternehmerTUM",
                                        "type":  "investor",
                                        "stake":  null,
                                        "basis":  "PitchBook investor list: Active, Minority",
                                        "src":  [
                                                    "https://my.pitchbook.com/profile/178837-75/investor/profile"
                                                ]
                                    }
                                ]
                },
    "devotedhealth":  {
                          "researched":  "2026-10-27",
                          "rounds":  [
                                         {
                                             "date":  "2024-08-02",
                                             "name":  "Series E",
                                             "type":  "Equity",
                                             "amount":  286999999,
                                             "post":  13,
                                             "leads":  [
                                                           "Highbury Group",
                                                           "The Space Between",
                                                           "GIC Private"
                                                       ],
                                             "basis":  "PitchBook",
                                             "note":  "Pre-money US$12,713,000,001; Later Stage VC; pre + size = post (checked)",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/221532-13/company/deals"
                                                     ]
                                         },
                                         {
                                             "date":  "2026-01-30",
                                             "name":  "Series F",
                                             "type":  "Equity",
                                             "amount":  366000000,
                                             "post":  16.1,
                                             "leads":  [
                                                           "Centricus",
                                                           "The Space Between"
                                                       ],
                                             "basis":  "PitchBook",
                                             "note":  "Pre-money US$15,734,000,000; Later Stage VC; pre + size = post (checked)",
                                             "src":  [
                                                         "https://my.pitchbook.com/profile/221532-13/company/deals"
                                                     ]
                                         }
                                     ],
                          "filings":  [

                                      ],
                          "skipped":  [
                                          "343515-88T 2026-10-01 Series G (Later Stage VC): status Announced/In Progress, not completed"
                                      ],
                          "pbDeals":  8,
                          "holders":  [
                                          {
                                              "name":  "Fearless Ventures",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/184016-08/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "The Space Between",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/500688-46/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Whistler Capital Partners",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/482807-35/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "White Road Capital",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/624915-55/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Seek Ventures",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/187895-98/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Artfo Holdings",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/459826-21/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Formica Capital",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/268674-76/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "Premji Invest (US)",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/484334-47/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "StartUp Health",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/54331-57/investor/profile"
                                                      ]
                                          },
                                          {
                                              "name":  "O\u0027Reilly AlphaTech Ventures",
                                              "type":  "investor",
                                              "stake":  null,
                                              "basis":  "PitchBook investor list: Active, Minority",
                                              "src":  [
                                                          "https://my.pitchbook.com/profile/11263-87/investor/profile"
                                                      ]
                                          }
                                      ]
                      },
    "toss":  {
                 "researched":  "2026-10-27",
                 "rounds":  [
                                {
                                    "date":  "2022-12-20",
                                    "name":  "Series G",
                                    "type":  "Equity",
                                    "amount":  405000000,
                                    "post":  7,
                                    "leads":  [
                                                  "Forerunner Capital Partners"
                                              ],
                                    "basis":  "PitchBook",
                                    "note":  "Pre-money US$6,595,000,000; Later Stage VC; pre + size = post (checked)",
                                    "src":  [
                                                "https://my.pitchbook.com/profile/103347-01/company/deals"
                                            ]
                                }
                            ],
                 "filings":  [

                             ],
                 "skipped":  [
                                 "251144-02T IPO: status Failed/Cancelled",
                                 "186996-34T 2021-12-16 Secondary Transaction - Private: no post-money shown"
                             ],
                 "pbDeals":  14,
                 "holders":  [
                                 {
                                     "name":  "1809 Capital",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/437089-06/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Baillie Gifford",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/58068-64/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "MW \u0026 Company",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/517480-03/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Skywell Capital Partners",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/484088-05/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Gorilla Private Equity",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/403969-60/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Light Street Capital Management",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/86568-04/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "FJ Labs",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/108358-57/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Bessemer Venture Partners",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/10134-73/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Novel Capital (Philippines)",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/183900-61/investor/profile"
                                             ]
                                 },
                                 {
                                     "name":  "Industrial Bank of Korea",
                                     "type":  "investor",
                                     "stake":  null,
                                     "basis":  "PitchBook investor list: Active, Minority",
                                     "src":  [
                                                 "https://my.pitchbook.com/profile/58780-54/investor/profile"
                                             ]
                                 }
                             ]
             }
};
