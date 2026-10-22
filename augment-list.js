// Valuation and price per share shown on the Augment explore page (app.augment.market, "Most valuable" list), read in Chrome on 22 Oct 2026.
// rows: [name, valuation in US$ bn, price per share in US$]. Only rows that show both are kept, down to a valuation of about $6.5bn.
// Used to derive a share count (valuation / price) for companies where we hold venue prices but no share count, so that the average
// secondary price can be turned into a valuation. Not used where the result disagrees with PitchBook's estimate by more than 2.5x.
window.AUGMENT = {
  "asof": "2026-10-22",
  "source": "Augment explore page (app.augment.market), read 22 Oct 2026",
  "aliases": { "thinkingmachineslab": "thinkingmachines", "sambanovasystems": "sambanova", "cognition": "cognitionaidevin" },
  "rows": [
    ["Anthropic", 1440, 881.17], ["OpenAI", 1070, 860.36], ["Anduril", 111, 117.01], ["Databricks", 179, 247.10], ["Stripe", 201, 78.10], ["ByteDance", 575, 349.06], ["Neuralink", 52.5, 276.39],
    ["Revolut", 117, 2050.85], ["Ramp", 59.3, 158.17], ["Cognition AI (Devin)", 57.7, 255.40], ["Crusoe", 28.8, 209.34], ["Shield AI", 16.3, 197.79], ["Kalshi", 28.6, 763.48], ["Saronic", 11, 32.65],
    ["Prometheus", 50.9, 50.04], ["Fireworks AI", 17.8, 62.56], ["Replit", 8.87, 244.61], ["Etched", 23.9, 13.14], ["Baseten", 17.9, 368.87], ["Higgsfield", 9.91, 362.09], ["SpaceX", 1960, 147.96],
    ["TechStyle Fashion Group", 183, 3125.19], ["Cerebras", 48.8, 120.66], ["CoreWeave", 47.9, 61.12], ["Isomorphic Labs", 45.7, 44.15], ["ClickHouse", 41.8, 444.28], ["Thinking Machines", 40.2, 935.35],
    ["Figure AI", 37.5, 187.56], ["Canva", 34.2, 1341.00], ["VAST Data", 27.7, 64.68], ["Mistral AI", 24.6, 48.78], ["The Boring Company", 24.5, 73.62], ["Reflection AI", 22.9, 69.86], ["ElevenLabs", 22.2, 109.10],
    ["Whatnot", 21.4, 161.36], ["Zipline", 20.5, 143.91], ["Applied Intuition", 20.3, 184.27], ["Perplexity", 20, 69.46], ["Fanatics", 19.3, 47.32], ["Harvey", 19.1, 51.53], ["Cohere", 18.8, 487.77],
    ["Helion Energy", 18.4, 212.87], ["Mercor", 17.7, 1126.69], ["Skild AI", 17.1, 79.56], ["Castelion", 17, 686.75], ["Base Power", 16.3, 43.22], ["Ripple", 16.3, 99.01], ["Oura", 16, 38.78],
    ["Lovable", 15.3, 145.37], ["Sierra", 14.9, 76.74], ["Deel", 14.7, 32.99], ["Rippling", 14.4, 44.61], ["Polymarket", 14.3, 130.56], ["SandboxAQ", 14.2, 37.65], ["Vercel", 13.6, 294.16],
    ["OpenEvidence", 12.3, 492.27], ["Physical Intelligence", 12.1, 554.51], ["Drivenets", 12.1, 16.48], ["Supabase", 11.4, 75.17], ["Cohesity", 10, 21.27], ["Moonshot AI", 10, 125.57], ["Lambda", 9.47, 51.11],
    ["Airwallex", 9.38, 23.80], ["Fluidstack", 9.37, 168.70], ["Stoke Space", 9.34, 111.51], ["Valar Atomics", 9.32, 149.85], ["Gusto", 9.15, 25.08], ["Kraken", 9, 27.25], ["Notion", 8.97, 49.20],
    ["Hadrian", 8.87, 75.41], ["Clay", 8.49, 26.44], ["SambaNova", 8.33, 96.24], ["Grammarly", 8.01, 16.14], ["Dapper Labs", 7.6, 4.73], ["Faire", 7.36, 15.29], ["Epic Games", 7.35, 196.06],
    ["ThoughtSpot", 7.31, 42.70], ["Grafana Labs", 7.31, 11.27], ["Positron", 7.16, 102.93], ["Discord", 6.92, 25.40], ["Groq", 6.9, 73.00], ["Relativity Space", 6.77, 36.82], ["Plaid", 6.67, 262.37],
    ["Whoop", 6.6, 7.34], ["Ayar Labs", 6.46, 90.06]
  ]
};
