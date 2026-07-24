import type { OverviewSlide } from './overviewSlides';

export const draftSlides: OverviewSlide[] = [
  {
    id: 'draft-first-ticket-walkthrough',
    title: '[DRAFT] Your first ticket: a walkthrough',
    bullets: [
      'Placeholder — replace with a real (anonymized) ticket example.',
      'How it arrived: rep opened a Lounge ticket saying "can\'t create expansion opp", with a screenshot of the error.',
      'Triage: category = Opportunities, urgency = Medium (blocking one deal, no SLA risk).',
      'Investigation: opened the Current Contract, saw the Account Name pointed at a Monday Account instead of the Company Account.',
      'Resolution: changed the Account Name to the Company, confirmed the rep could create the opp, explained the cause in plain language.',
      'Close: confirmed resolution with the rep, tagged the ticket, noted the pattern in the playbook.',
    ],
  },
  {
    id: 'draft-great-response',
    title: '[DRAFT] Anatomy of a great ticket response',
    bullets: [
      'Acknowledge fast — even before you know the answer. Set expectations on when they\'ll hear back.',
      'Gather up front: account name, user email, exact error message, screenshot, and steps to reproduce. Chasing these later doubles resolution time.',
      'Explain in plain language — the rep needs to understand what happened, not just that it\'s fixed.',
      'Confirm resolution with the requester before closing — never assume.',
      'If the same pattern appears twice or more, add it to the playbook.',
    ],
  },
  {
    id: 'draft-urgency-tagging',
    title: '[DRAFT] Urgency tagging done right',
    bullets: [
      'Critical 🚨 — active business damage: deal blocked from closing today, customer-facing outage, month-end financial impact.',
      'High 🔴 — genuine SLA risk or a deal blocked this week. Reserve it — over-tagging High buries real urgency.',
      'Medium 🔵 — the default for standard requests. Most tickets belong here.',
      'Low 🟢 — nice-to-have, no time pressure, informational.',
      'Reality check: ~58% of tickets get tagged High. If everything is High, nothing is.',
    ],
  },
  {
    id: 'draft-toolbox',
    title: '[DRAFT] Your toolbox',
    bullets: [
      'Salesforce — where deals, accounts, contracts, and most resolutions live.',
      'BigBrain — internal data and back-office system: account lookups, billing, activations.',
      'Business Lounge — the ticketing system; your daily queue.',
      'Guru — knowledge cards for processes and policies.',
      'Slack — escalation and quick questions; know your routing channels.',
    ],
  },
  {
    id: 'draft-bigbrain-101',
    title: '[DRAFT] BigBrain 101',
    bullets: [
      'BigBrain is our internal system for data (BI), back-office actions, billing, and activations.',
      'monday Account = BB Account — the same entity seen from two systems.',
      'Salesforce and BigBrain sync daily (accounts data, signups, leads) plus real-time sync for main entities.',
      'Key areas: top information card, Overview tab, Admin tab, Billing tab / Subscription Management.',
    ],
  },
  {
    id: 'draft-where-to-find-answers',
    title: '[DRAFT] Where to find answers',
    bullets: [
      'This playbook (Deck 2) — common tickets with step-by-step resolutions.',
      'Guru — process and policy cards; search before asking.',
      'BizLounge routing doc — who to tag for approvals (RevOps business partners, managers).',
      'Status Page board — known bugs and missing features already reported.',
      'Slack channels — [add the team\'s actual channels here].',
    ],
  },
  {
    id: 'draft-how-we-measure',
    title: '[DRAFT] How we measure success',
    bullets: [
      'SLA — target 92%: respond and resolve within the time promised per catalog item.',
      'CSAT — target 95%: satisfaction surveys after ticket close.',
      'Audits — target 92%: quality reviews of handled tickets.',
      'Tickets closed by T1 — target 80%: resolve in-tier without escalating.',
      '[Confirm current targets internally — these are from the 2026 onboarding deck.]',
    ],
  },
  {
    id: 'draft-30-60-90',
    title: '[DRAFT] Your first 30 / 60 / 90 days',
    bullets: [
      'Days 1–30 — shadow ticket handling, learn the tools, read the playbook, resolve simple Access and Account Owner tickets with review.',
      'Days 31–60 — own full categories (Access, Opportunities, Billing basics), start CPQ tickets with support.',
      'Days 61–90 — full queue, handle escalations correctly, contribute new playbook entries.',
      '[Placeholder — align these milestones with your team lead.]',
    ],
  },
  {
    id: 'draft-week-in-tickets',
    title: '[DRAFT] A week in tickets: what you\'ll actually work on',
    bullets: [
      'Roughly 350 tickets a week across the team. Top topics:',
      'Change Account Owner (~37/week) — ownership transfers and approvals.',
      'SO creation/modification in CPQ (~37/week) — quote and approval issues.',
      'ARR Recognition/Claim (~28/week) — recognition thresholds and claim windows.',
      'Add-on Activation (~11/week), Access/Permissions (~10), Customer Invoices (~10), BB ID Association (~10).',
      'New York and London generate almost half of all volume.',
    ],
  },
  {
    id: 'draft-when-not-to-touch',
    title: '[DRAFT] When NOT to touch it',
    bullets: [
      'Account merges / consolidations / seat reallocations — require RVP approval and multi-team coordination. Route, don\'t resolve.',
      'Permission or policy changes — need PM/RevOps sign-off, even when the fix looks obvious.',
      'Backend data edits — anything you can\'t do through Salesforce/BigBrain UI goes to BizOps/Tech.',
      'Billing entity tax changes — Finance owns these when tax info changes.',
      'Threshold or recognition config — escalate to RevOps with record IDs; never override without a documented ticket.',
    ],
  },
];
