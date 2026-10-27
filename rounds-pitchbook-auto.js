// Funding rounds pulled from PitchBook's deals data through the PitchBook connector (27 Oct 2026 pilot). Merged into the researched rounds when the page loads; a company that
// already has a round within 20 days of a pulled round keeps its own, and a newer workbook last round is kept. Same fields as rounds-pitchbook.js.
// Rules: completed deals (and announced rounds with a valuation, flagged as announced) with a post-money valuation and a deal type of seed, early or later stage VC, growth, corporate or a private secondary; pre-money + amount must equal post-money within 2%.
// filings lists IPO, reverse-merger, SPAC and PIPE deals with their status.
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
                 "pbDeals":  13
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
                   "pbDeals":  9
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
                     "pbDeals":  16
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
                       "pbDeals":  8
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
                     "pbDeals":  8
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
                   "pbDeals":  12
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
                     "pbDeals":  13
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
                    "pbDeals":  9
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
                   "pbDeals":  11
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
                   "pbDeals":  13
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
                    "pbDeals":  14
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
                     "pbDeals":  12
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
                  "pbDeals":  19
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
                    "pbDeals":  18
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
                   "pbDeals":  14
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
                  "pbDeals":  7
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
                                "pbDeals":  2
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
                       "pbDeals":  4
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
                  "pbDeals":  24
              }
};
