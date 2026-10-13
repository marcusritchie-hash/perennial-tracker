// IPO filing status, keyed by quant-data.js id. Source: Forge IPO filing tracker (October 2026).
//   status:  'S-1 publicly filed' | 'Confidentially filed' | 'Reported' (IPO plans reported, no filing)
//   updated: 'YYYY-MM' of the last filing update
//   val:     Forge price-implied or most recent valuation, $bn, as shown by the tracker
window.IPO_SRC = 'Forge IPO filing tracker, October 2026';
window.IPO = {
  discord: { status:'Confidentially filed', updated:'2026-01', val:10.0 },
  kraken:  { status:'Confidentially filed', updated:'2026-04', val:10.9 },
  openai:  { status:'Confidentially filed', updated:'2026-06', val:1180 },
  anth:    { status:'Confidentially filed', updated:'2026-09', val:965 },
  cohere:  { status:'Reported', updated:'2026-02', val:7.0 },
  verkada: { status:'Reported', updated:'2026-07', val:5.7 },
  lambda:  { status:'Reported', updated:'2026-10', val:10.3 },
};
