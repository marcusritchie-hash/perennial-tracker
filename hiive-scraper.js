// Perennial Clarity Scraper (Clarity renamed itself Clarity on 22 Sep 2026)
// Run on the logged-in companies/browse page — was connect.hiive.com, may now be app.clarity.com
// Copies JSON to clipboard with live bid/ask/price + order depth for your Top 30 dashboard
//
// Usage: paste into browser console on the Browse Companies page, or save as a bookmarklet:
//   javascript:void(fetch('').then(()=>{/* paste minified version */}))

(function() {
  'use strict';

  // Map Clarity company names → your dashboard COS ids
  const NAME_MAP = {
    'Ripple Labs':       'ripple',
    'Kraken':            'kraken',
    'Cerebras Systems':  'cerebras',
    'Lambda':            'lambda',
    'Neuralink':         'neuralink',
    'PsiQuantum':        'psiquantum',
    'Figure AI':         'figureai',
    'Perplexity AI':     'perp',
    'Databricks':        'databricks',
    'Discord':           'discord',
    'Shield AI':         'shieldai',
    'Lightmatter':       'lightmatter',
    'Stripe':            'stripe',
    'SpaceX':            'spacex',
    'OpenAI':            'openai',
    'Anthropic':         'anth',
    'Canva':             'canva',
    'Revolut':           'revolut',
    'Ramp':              'ramp',
    'Anduril':           'anduril',
    'Replit':            'replit',
    'Rippling':          'rippling',
    'Apptronik':         'apptronik',
    'Groq':              'groq',
    'Fanatics':          'fanatics',
    'Plaid':             'plaid',
    'Chime':             'chime',
    'Crusoe':            'crusoe',
    'Waymo':             'waymo',
    'Tanium':            'tanium',
    // Extra Clarity companies not in your Top 30 (captured anyway)
    'WHOOP':             'whoop',
    'Postman':           'postman',
    'SambaNova Systems': 'sambanova',
    'Glean':             'glean',
    '1X (US HoldCo)':    '1x',
    'Unitree':           'unitree',
    'Harness':           'harness',
    'Addepar':           'addepar',
    'Redwood Materials':  'redwood',
    'Deel':              'deel',
    'Saronic':           'saronic',
    'Alchemy':           'alchemy',
    'Dataminr':          'dataminr',
    'DailyPay':          'dailypay',
    'Isomorphic Labs':   'isomorphic',
    'Lyten':             'lyten',
    'Mercury':           'mercury',
    'Gecko Robotics':    'gecko',
    'Huntress':          'huntress',
    'Zipline':           'zipline',
    'Thrive Market':     'thrivemarket',
  };

  function parseDollar(s) {
    if (!s || s === '—' || s === '-') return null;
    return parseFloat(s.replace(/[$,]/g, ''));
  }

  // Scrape all company cards
  const cards = document.querySelectorAll('.chakra-card');
  const results = [];

  cards.forEach(card => {
    const nameEl = card.querySelector('.css-1e2n09y');
    if (!nameEl) return;
    const name = nameEl.textContent.trim();

    // Extract dollar values in DOM order: [Highest Bid, Lowest Ask, Clarity Price]
    const dollarTexts = Array.from(card.querySelectorAll('p, span, div'))
      .map(el => el.textContent.trim())
      .filter(t => /^\$[\d,.]+$/.test(t));

    const highestBid = parseDollar(dollarTexts[0]);
    const lowestAsk  = parseDollar(dollarTexts[1]);
    const hiivePrice = parseDollar(dollarTexts[2]);

    // Order depth
    const listingsMatch = card.textContent.match(/(\d+)\s*Listings/);
    const bidsMatch     = card.textContent.match(/(\d+)\s*Bids/);
    const listings = listingsMatch ? parseInt(listingsMatch[1]) : 0;
    const bids     = bidsMatch     ? parseInt(bidsMatch[1])     : 0;

    const id = NAME_MAP[name] || name.toLowerCase().replace(/[^a-z0-9]/g, '');

    results.push({
      id,
      name,
      highestBid,
      lowestAsk,
      hiivePrice,
      listings,
      bids,
      totalOrders: listings + bids,
      scrapedAt: new Date().toISOString()
    });
  });

  // Build the output
  const output = {
    source: 'hiive',
    url: window.location.href,
    scrapedAt: new Date().toISOString(),
    totalCompanies: results.length,
    companies: results
  };

  const json = JSON.stringify(output, null, 2);

  // Copy to clipboard
  navigator.clipboard.writeText(json).then(() => {
    console.log('%c[Perennial Scraper] Copied ' + results.length + ' companies to clipboard', 'color: #0c8c5e; font-weight: bold; font-size: 14px');
    console.table(results.map(r => ({
      Name: r.name,
      'Highest Bid': r.highestBid ? '$' + r.highestBid : '—',
      'Lowest Ask': r.lowestAsk ? '$' + r.lowestAsk : '—',
      'Clarity Price': r.hiivePrice ? '$' + r.hiivePrice : '—',
      Orders: r.totalOrders
    })));
    alert('Perennial Scraper: ' + results.length + ' companies copied to clipboard as JSON!\n\nPaste into your dashboard to update.');
  }).catch(err => {
    console.error('[Perennial Scraper] Clipboard failed:', err);
    // Fallback: open in new tab
    const blob = new Blob([json], { type: 'application/json' });
    window.open(URL.createObjectURL(blob));
  });

  return output;
})();
