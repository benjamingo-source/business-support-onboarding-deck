import type { OverviewSlide } from './overviewSlides';

export const salesforceCpqSlides: OverviewSlide[] = [
  {
    id: 'sfcpq-intro',
    title: 'Salesforce & CPQ: why this deck exists',
    bullets: [
      '☁️ Salesforce is where every deal lives — and where most Business Support resolutions happen.',
      '🧮 CPQ (Configure, Price, Quote) is Salesforce\'s quoting engine: reps build, price, and send Sales Orders from it.',
      '🎫 CPQ and SO tickets are consistently one of our top ticket categories (~37/week) — mastering this flow is the fastest way to become effective on the queue.',
      '🗺️ This deck walks the deal path end to end: opportunity → quote → approvals → Sales Order → Closed Won → activation.',
    ],
  },
  {
    id: 'sfcpq-quote-lifecycle',
    title: 'The quote lifecycle',
    bullets: [
      '1️⃣ Opportunity created — the rep registers the potential deal (New Business, Expansion, or Renewal).',
      '2️⃣ Quote built in CPQ — the Quote Line Editor is the single place to configure products, seats, tiers, and discounts.',
      '3️⃣ Approvals — depending on discount and thresholds, the quote routes through the manager approval chain (direct → second → third → fourth level).',
      '4️⃣ Sales Order sent — the customer signs the SO (digitally or manually uploaded).',
      '5️⃣ Closed Won — the rep closes the opp; the contract is created and the plan is activated.',
    ],
  },
  {
    id: 'sfcpq-inspector',
    title: 'The Inspector: your field-level toolkit',
    bullets: [
      '🔍 The Inspector lets you view and edit fields on a quote that aren\'t exposed in the standard layout.',
      '🛠️ Common Business Support uses: checking manager ID fields on approval chains, fixing the "Migrate to CPQ Contract" flag, and correcting opportunity type fields on renewals.',
      '⚠️ With power comes responsibility — Inspector edits change real data. Always document what you changed and why in the ticket.',
      '💡 [Placeholder — add a screenshot of the Inspector and more detail on how to access it.]',
    ],
  },
];
