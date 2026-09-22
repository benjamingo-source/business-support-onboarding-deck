import type { OverviewSlide } from './overviewSlides';

/**
 * Deck 4 — Policies. One slide per policy: 1–2 bullets on what it is and why it
 * matters to Business Support, plus a link to the full source document.
 */
export const policySlides: OverviewSlide[] = [
  {
    id: 'policy-day-5-cutoff',
    title: 'Day 5 Cutoff Policy — post-close edits & locking',
    bullets: [
      '📅 A Closed Won opportunity can be edited freely until **day 5 of the following month**; from day 6 it is **Locked** and changes must go through a Correction Opportunity, Opt-out, or Finance — never an ad-hoc unlock. Ownership changes on a closed opp are never allowed.',
      '🛠️ Business Support may edit a Locked opp **only for a genuine technical bug**, logged and executed via audited admin unlock. Everything else routes to the approved paths, and every approved post-cutoff change is posted in **#Post-cutoff-date**.',
    ],
    link: {
      label: 'Open the Day 5 Cutoff Policy →',
      url: 'https://docs.google.com/document/d/10_apegzh_Z805RXQn4oZeJzsFoj5mYtLc3gXNScknrA/edit?tab=t.0',
    },
    relatedConcepts: ['sfcpq-opp-lifecycle', 'sfcpq-ownership'],
    relatedCategory: 'Opportunities',
    relatedTickets: ['locked-opportunity-edit'],
  },
  {
    id: 'policy-opt-out',
    title: 'Opt-Out Policy — exiting or reducing a locked deal',
    bullets: [
      '🔑 An opt-out is required **only** when the opp is Closed Won **and locked** and the change decreases ARR, touches a pro-rated deal (even an upgrade), or changes currency. Not locked = no opt-out — the rep edits the existing opp or opens a new one.',
      '🎫 Reps submit via "Submit Opt-Out Request" on the opp, choosing the right lane (Finance rejects wrong ones). For every **approved** opt-out, a Business Lounge ticket is opened so we revert the original SO and update BigBrain — that\'s what prevents the ARR double-count.',
    ],
    link: {
      label: 'Open the Opt-Out Policy →',
      url: 'https://docs.google.com/document/d/18j9GMWURIfjGS4lT7PNFELrgBa6Gejmt5oyhFEnXoWc/edit?tab=t.0',
    },
    relatedConcepts: ['sfcpq-opp-lifecycle', 'sfcpq-opportunities', 'sfcpq-contracts'],
    relatedCategory: 'Opportunities',
    relatedTickets: ['locked-opportunity-edit', 'expansion-closed-as-renewal'],
  },
  {
    id: 'policy-ai-credit-grant',
    title: 'AI Credit Grant Policy — who can grant credits and why',
    bullets: [
      '🤖 AI credits are a **real cost**, not a fixed resource like seats — every grant needs a documented rationale mapped to one of the policy\'s buckets (product incident, client misuse, events, client-facing build, partner build, commercial bridge, product trial, monetization complaint). Grants are capped at **2 months** unless VP RevOps / Head of AI approves.',
      '🎫 **Reps never grant credits — only CX, Deal Desk, or Business Lounge do**, in BigBrain. Every grant (except CX product-incident grants) comes to us as a Business Lounge ticket **with the approval already attached** — we don\'t chase RVP/Director/Head of AI sign-off ourselves; if it\'s missing, send the ticket back.',
    ],
    link: {
      label: 'Open the AI Credit Grant Policy →',
      url: 'https://docs.google.com/document/d/1P4I_SEhbH9lrUSBX-L8NAKB8AJthqMmcxb5ArShS8PU/edit?tab=t.0',
    },
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['cpq-ai-rule-blocks-so'],
  },
];
