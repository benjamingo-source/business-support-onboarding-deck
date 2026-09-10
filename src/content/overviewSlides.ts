export type OverviewSlide = {
  id: string;
  title: string;
  bullets: string[];
  image?: string;
  /** Deck 2 category this slide relates to — renders a "See related tickets" link. */
  relatedCategory?: string;
  /** Optional specific Deck 2 ticket ids to highlight. */
  relatedTickets?: string[];
};

export const overviewSlides: OverviewSlide[] = [
  {
    id: 'what-is-monday',
    title: 'What is monday.com?',
    bullets: [
      '🚀 monday.com is the AI Work Platform for people and agents — trusted by 245,000+ companies worldwide, having crossed $1B in ARR in 2024.',
      '🧩 It started as a single Work OS ("everything is a project") and evolved into a multi-product company to serve dedicated use cases per team.',
      '📦 The product suite: monday work management, monday CRM, monday dev, monday service, and campaigns for marketing teams — plus add-ons like Automation Pack, Secure & Govern, and Premium Support.',
      '🤖 AI is woven across the platform — AI features run on AI credits, a single unit of measure across all monday AI capabilities.',
      '🛟 Business Support helps internal teams (especially Sales) resolve platform, access, and workflow issues quickly.',
    ],
  },
  {
    id: 'core-concepts',
    title: 'Core platform concepts',
    bullets: [
      '🏢 Workspaces & accounts — where customer data and permissions live. One company can run several monday accounts.',
      '📋 Boards & items — how work is organized; each row is a record or task.',
      '🧱 Each product is standalone — its own tiers, pricing, and purchasing flow. Customers can mix different seat counts and tiers per product.',
      '⚙️ Automations & integrations — connect monday.com to Salesforce, email, Slack, and billing systems.',
      '🔐 Roles & permissions — who can view, edit, or administer each workspace (member vs viewer vs guest matters for support tickets).',
    ],
  },
  {
    id: 'sales-touchpoints',
    title: 'A day in the life of a Sales rep (and where we come in)',
    bullets: [
      '🏠 Reps live in Salesforce — leads, accounts, opportunities, quotes, and contracts all happen there. monday.com is the product they sell; Salesforce is where they sell it.',
      '💰 The deal flow: lead converts → opportunity created → quote built in CPQ → Sales Order sent and signed → Closed Won → plan activated → ARR counted.',
      '📈 What reps care about: their ARR attainment. Every claim, recognition flag, and opportunity type directly affects whether a deal counts toward their target.',
      '🔁 Post-sale, AMs and RMs work renewals and expansions off the same records — which is why a mislinked contract or wrong opp type becomes an urgent ticket.',
      '🆘 Reps come to us when this flow breaks: a button that errors, a quote that won\'t generate, a payment they can\'t claim, an account they can\'t access. Speed matters — their deal is usually waiting on us.',
    ],
  },
  {
    id: 'business-lounge-mission',
    title: 'The Business Lounge & our mission',
    bullets: [
      '✈️ The Business Lounge is where our work happens — the one-stop-shop ticketing system for all client-facing teams, built on the monday.com platform itself.',
      '🎯 Our mission: make the sales and post-sales cycles faster, more agile, and more scalable. When a rep is blocked, revenue is blocked — we remove the blocker.',
      '🤝 We are the centralized point of contact for Sales, Partners, and CSMs on technical and informational issues — one front door instead of ten Slack channels.',
      '📦 The Lounge runs on a service catalog per product, with automatic routing and the ability to move tickets between teams when escalation is needed.',
      '📊 We measure ourselves on SLA and CSAT — and we don\'t just close tickets, we solve the underlying issue so it doesn\'t come back.',
    ],
  },
  {
    id: 'support-model',
    title: 'How we work: the Business Support model',
    bullets: [
      '1️⃣ Triage — every ticket gets a category (Account Owner, CPQ/SO, ARR, Access, Billing…) and a real urgency level. Good triage is half the resolution.',
      '2️⃣ Gather context before touching anything — account name, user email, exact error message, screenshot, and what the rep was trying to do. Chasing these later doubles resolution time.',
      '3️⃣ Resolve in-tier — we own ~70% of tickets end-to-end, working across Salesforce, BigBrain, and CPQ. Our target: 80% closed by Tier 1.',
      '4️⃣ Escalate with context — when a fix needs data changes, code, or approvals, route to BizOps/Tech, Finance, or Billing Dev with record IDs and what you already checked.',
      '5️⃣ Close the loop — confirm with the requester, explain the cause in plain language, and add recurring patterns (2+ occurrences) to the playbook.',
    ],
  },
  {
    id: 'ticket-flow-escalation',
    title: 'Where tickets go: the support flow',
    bullets: [
      '🎫 A customer (rep, CSM, partner) logs a ticket in the Business Lounge. Some tickets are auto-routed based on the product and catalog item selected.',
      '🏠 Business Support handles ~70% of all tickets — most issues resolve in-tier.',
      '🔀 Escalate through Assignment Groups when needed: BizOps/Tech (~18%) for data and system issues, Finance (~7%) for billing and invoicing, Billing Dev (~5%) for payment infrastructure.',
      '👍 Rule of thumb: try to resolve in-tier first; escalate with full context (record IDs, screenshots, what you already checked).',
    ],
    image: 'https://drive.google.com/thumbnail?id=18JbnrFtiIbxcMthv6Snmi0eImqHjTciF&sz=w1600',
  },
  {
    id: 'urgency-tagging',
    title: 'Urgency tagging done right',
    bullets: [
      'Critical 🚨 — active business damage: deal blocked from closing today, customer-facing outage, month-end financial impact.',
      'High 🔴 — genuine SLA risk or a deal blocked this week. Reserve it — over-tagging High buries real urgency.',
      'Medium 🔵 — the default for standard requests. Most tickets belong here.',
      'Low 🟢 — nice-to-have, no time pressure, informational.',
      'Reality check: ~58% of tickets get tagged High. If everything is High, nothing is.',
    ],
  },
  {
    id: 'teams-around-us',
    title: 'The teams around us',
    bullets: [
      '📊 RevOps — owns revenue processes end-to-end: policies, targets, incentive models, recognition thresholds, and rules of engagement. Escalate for: ARR/attainment disputes, threshold config, policy grey areas.',
      '🛠️ BizTech — builds and maintains our internal tools (Salesforce, CPQ, integrations). Teams include Business Product, Rev Tech, and CPQ Tech. Escalate for: system bugs, data issues, broken automations.',
      '💳 Billing Dev (Payments) — owns the payment infrastructure: payment flows, subscriptions lifecycle, the catalog, and quote calculation. Escalate for: payment failures, activation infrastructure issues.',
      '🧾 Finance — owns invoicing, Bill-to details, collections, and account holds. Escalate for: invoice changes, billing entity tax updates, payment disputes.',
      '❓ TO CONFIRM: does Business Support sit inside BizTech or under RevOps? Verify internally and update this slide.',
    ],
  },
  {
    id: 'who-is-who-sales',
    title: 'Who is who: Sales roles you\'ll support',
    bullets: [
      '📞 SDR (Sales Development Rep) — qualifies inbound/outbound leads and builds opportunities for AEs. Think "net new" business.',
      '💼 AE (Account Executive) — owns the full sales cycle from qualification to closing net-new ARR. Split by segment: SMB, Mid-Market, Enterprise.',
      '🌱 AM (Account Manager) — grows existing accounts through long-term relationships; measured on retention and renewals.',
      '🤝 CSM (Customer Success Manager) — retains business and drives adoption; not a seller.',
      '⏰ RM (Renewal Manager) — partners with CSMs and AMs to execute renewals on time.',
      '🔧 SE (Sales Engineer) — supports AEs/AMs on larger, more technical deals.',
    ],
  },
  {
    id: 'salesforce-map',
    title: 'The Salesforce map: how records connect',
    bullets: [
      '🏢 Company — the real-world business entity. Linked to a Billing Entity (who pays) and Shipping Entity (who uses).',
      '🖥️ monday Account — a monday.com instance under a Company; one Company can have several (e.g. per region or team). Equivalent to a BB (BigBrain) account.',
      '🎯 Lead → Opportunity — a lead converts into an opportunity when there is a potential deal.',
      '📝 Opportunity → Quote → Sales Order — the deal is priced in CPQ, sent as an SO, signed, then Closed Won.',
      '📜 Contract — created on Close Won; defined by its end date. Subscriptions and renewals hang off the contract.',
      '🔗 Most ticket resolutions are about fixing a broken link somewhere in this chain.',
    ],
  },
  {
    id: 'bigbrain-101',
    title: 'BigBrain 101',
    bullets: [
      '🧠 BigBrain is our internal system for data (BI), back-office actions, billing, and activations.',
      '🔗 monday Account = BB Account — the same entity seen from two systems.',
      '🔄 Salesforce and BigBrain sync daily (accounts data, signups, leads) plus real-time sync for main entities.',
      '🗺️ Key areas: top information card, Overview tab, Admin tab, Billing tab / Subscription Management.',
    ],
    image: 'https://drive.google.com/thumbnail?id=1WYv_-YwDI2A28K8NNqU3LPmhhEiToEMW&sz=w1600',
  },
  {
    id: 'money-basics',
    title: 'Money basics: claims & recognition',
    bullets: [
      '💸 Two payment paths: Wire (SO signed in CPQ, auto-claimed, activated via Import SO) and Credit Card (user pays in the platform, rep must claim it manually).',
      '⏳ CC claims must be made within 6 months of payment, and only within the rep\'s ownership timeframe of the account.',
      '💰 Recognition Threshold ("Green Bucket"): only Yearly/Multi-yearly Pro or Enterprise plans count, and account ARR must exceed $7K (or $3.5K for SMB and Product reps).',
      '✅ An opportunity is Recognized if: the account is already recognized, OR the deal alone meets the threshold, OR account ARR + deal ARR together reach it.',
      '🗂️ Opportunity types: New Business (lead conversion), Expansion (existing account, active contract required), Flat Renewal, and Downgrade (auto-filled).',
    ],
  },
  {
    id: 'your-toolbox',
    title: 'Your toolbox: the 5 tabs you\'ll always have open',
    bullets: [
      '🎫 Business Lounge — your daily queue. Every ticket starts and ends here: triage, updates, escalations, and closure all live in the Lounge.',
      '☁️ Salesforce — where most resolutions happen: opportunities, contracts, quotes (CPQ), approval rules, and the Inspector for field-level fixes.',
      '🧠 BigBrain — the account X-ray: subscriptions, billing, activations, users, and the monday-side view of any account. Start here when you need to know "what does this customer actually have?"',
      '📖 Monday.all — the knowledge base for processes and policies. Search it before asking; link it when answering.',
      '💬 Slack — for escalations and quick questions once you\'ve done the digging. Come with record IDs and what you already checked.',
      '💡 Habit to build: for almost every ticket, you\'ll cross-reference Salesforce and BigBrain — one shows the deal, the other shows the account reality.',
    ],
  },
  {
    id: 'key-terms',
    title: 'Key terms you\'ll see every day',
    bullets: [
      '🧮 CPQ — Salesforce\'s quoting tool; used to build, price, and send Sales Orders to customers.',
      '📝 SO (Sales Order) — the contract document generated from a CPQ quote; reps submit this for approval before closing.',
      '🔗 BB ID — the unique ID that links a Salesforce account to a monday.com account.',
      '💰 Green Bucket — an opportunity that counts toward a rep\'s ARR recognition target; "Is Recognized" must be checked.',
      '📈 ARR (Annual Recurring Revenue) — the key number reps and AMs are measured on; what Business Support is ultimately protecting.',
      '➕ Expansion Opp — a new deal on an existing account (upsell or cross-sell); does not replace a renewal.',
      '🔄 Renewal Opp — re-closing an existing contract at renewal time; AMs are measured on retaining this ARR.',
      '🧾 Correction Opportunity — a post-close opp used purely for invoicing changes (billing entity, company name, SO signer); carries $0 ARR.',
    ],
  },
  {
    id: 'quality-bar',
    title: 'What great support looks like',
    bullets: [
      '⚡ Acknowledge fast, even without an answer yet — "I\'m on it, expect an update by EOD" beats a perfect reply three hours later. Remember: a blocked rep is often sitting on a blocked deal.',
      '🔍 Diagnose, don\'t just patch — a rep asking to "check the manager ID" may really have a broken approval chain. Fix what they need, not just what they asked for.',
      '💬 Explain the cause in plain language — "the contract was pointing at the Monday Account instead of the Company Account" teaches the rep; "fixed ✅" teaches nothing and invites a repeat ticket.',
      '✅ Confirm before closing — "can you try creating the opp now?" A ticket closed without confirmation is a coin flip, and reopened tickets hurt SLA and CSAT more than slow ones.',
      '📚 Feed the playbook — if you see a pattern twice, write it down. Every entry you add turns your hardest ticket into someone else\'s easiest.',
      '🎯 The bar we hold ourselves to: 92% SLA, 95% CSAT, 80% resolved in-tier. Quality and speed, not one or the other.',
    ],
  },
];
