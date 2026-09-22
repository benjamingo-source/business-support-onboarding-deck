import type { OverviewSlide } from './overviewSlides';

/**
 * Deck 4 — Policies & Processes. One slide per item: 1–2 bullets on what it is and why it
 * matters to Business Support, plus a link to the full source document.
 * `kind` drives the Policy / Process filter chips.
 */
export const policySlides: OverviewSlide[] = [
  {
    kind: 'policy',
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
    kind: 'policy',
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
    kind: 'policy',
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
  {
    kind: 'policy',
    id: 'policy-free-seats-trials',
    title: 'Free Seats, Products & Trials Policy (V1 draft)',
    bullets: [
      '🎁 Every trial, free seat, and free product must have a **hard end date** and an approval matched to tier and ARR — small asks stay rep self-serve (e.g. ≤5 free seats or ≤30-day trial on SMB Basic/Standard), mid-size ones need 1st-line-manager approval via a **Business Support ticket**, anything larger or any Enterprise / >$20K ARR account goes to **Deal Desk**. Trials cap at 12 months; free products route through a **100%-discount SO** so Finance sees them.',
      '🛠️ Business Support becomes the **first approval layer**: we approve 6–10 free seats, 31–90-day trials, and non-Enterprise legacy product pilots (≤90 days) — and any grant that would drop diluted PPU by more than 10% needs Finance sign-off regardless. **This is a V1 draft — thresholds are proposals, not final; confirm current values before quoting them to a rep.**',
    ],
    link: {
      label: 'Open the Free Seats, Products & Trials Policy →',
      url: 'https://docs.google.com/document/d/179-PHRgdLkav7UcAAQgO7N6iEIZxkkmCBymXy8RmP14/edit?tab=t.0',
    },
    relatedConcepts: ['sfcpq-what-is-arr'],
    relatedCategory: 'Billing',
  },
  {
    kind: 'policy',
    id: 'policy-arr-recognition',
    title: 'ARR Recognition Policy — what counts, when, and who can claim it',
    bullets: [
      '📈 ARR is recognized only for **yearly / multi-year Pro or Enterprise** deals whose total account ARR crosses the rep\'s **Green Bucket threshold** (role and region specific — $7K for most AEs/AMs, $3.5K for SMB and Product roles, $0 for CSMs and Overlays). Added ARR lands in the month of the contract start date (if closed early) or the close date (if closed late); Renewal ARR lands on the later of the renewal date or the close date. New contracts need at least **12 months** to count.',
      '🙋 Wire ARR is claimed automatically; **CC ARR must be claimed manually within 3 months** of the event (and before the 10th of the following month) — positive and negative alike. Business Lounge tickets are the official path for **opportunity ownership overrides**, restoring an ARR baseline after an administrative refund, and reporting duplicate ARR from reissued SOs. ARR fixes on already-locked opps go to **VP RevOps** via a Business Lounge ticket, case by case.',
    ],
    link: {
      label: 'Open the ARR Recognition Policy →',
      url: 'https://docs.google.com/document/d/1XqnP7ocWJxGyrdhVTe-9PU7mxMZXgqNd/edit',
    },
    relatedConcepts: ['sfcpq-what-is-arr', 'sfcpq-arr-recognition', 'sfcpq-renewals', 'sfcpq-cc-claims'],
    relatedCategory: 'Renewals & ARR',
    relatedTickets: ['arr-recognition-not-green-bucket', 'cant-claim-cc-payment', 'arr-split-between-reps', 'renewal-arr-wrong'],
  },
];
