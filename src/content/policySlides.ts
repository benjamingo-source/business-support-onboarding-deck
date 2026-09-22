import type { OverviewSlide } from './overviewSlides';

/**
 * Deck 4 — Policies. One slide per policy: a brief overview for Business Support,
 * plus a link to the full source document.
 */
export const policySlides: OverviewSlide[] = [
  {
    id: 'policy-day-5-cutoff',
    title: 'Day 5 Cutoff Policy — post-close edits & locking',
    bullets: [
      '📅 **The rule:** a Closed Won opportunity can be edited freely from its Close Date through **day 5 of the following month** (rep\'s local time). From day 6 it is **Locked**. This replaced the old day-10 cutoff in Q3 FY26.',
      '🔁 **Days 1–5 grace period:** a rep can reopen, fix, and re-close. If finalized by end of day 5 and the Close Date still reflects reality, the original Close Date is re-applied. If not finalized, the opp stays open with a **future** Close Date — never force-closed to the old month. That path needs Business Support.',
      '🔒 **Two lock tiers:** Tier 1 (hard lock — no one can edit): Close Date, Claimed ARR Override, Is Green Bucket, Is Green Bucket Override. Tier 2 (31 fields — Stage, Owner, Opp Type, ARR fields, Seats, Tier…): only a System Admin can edit, via the "Unlock Opportunity" checkbox, and every edit is audited.',
      '🩹 **After lock, use the right path — never an ad-hoc unlock:** Correction Opportunity for signer or billing/shipping entity changes · Opt-out + substitute opp for ARR decreases, exiting pro-rated, or currency changes · Business Support + Finance/Legal for legal language or agreement type ($0 ARR replacing opp) · Finance/Billing for BCO, split invoices, payment schedules, PO ≠ SO.',
      '🚫 **R7 — Ownership changes on a Closed opp are never allowed**, under any circumstance or approver. Route to RevOps.',
      '🛠️ **What Business Support can and can\'t do:** we edit a Locked opp **only for a genuine technical issue or bug** (broken SF↔BB sync, CPQ defect, automation mis-populated a field) — logged with the bug reference, executed via audited admin unlock, and communicated. Re-pricing, stage/owner moves, hygiene cleanup, and late corrections are **not** technical fixes — route them to a Section 5 path even if our permissions would let us edit.',
      '⏰ **Intake deadlines:** a ticket submitted by day 5 but unresolved by end of day 5 must be rerouted to a post-cutoff path. A ticket submitted after day 5 that doesn\'t fit the decision table needs approval from Central SalesOps (Shira Epstein, or Rinat Teshuva as backup).',
      '📣 **Every approved post-cutoff change must be posted in Slack #Post-cutoff-date** and communicated to Finance & Billing, Comp/CIQ, Sales managers, Legal, BigBrain/BI, and RevOps leadership as relevant.',
    ],
    link: {
      label: 'Open the Day 5 Cutoff Policy →',
      url: 'https://docs.google.com/document/d/10_apegzh_Z805RXQn4oZeJzsFoj5mYtLc3gXNScknrA/edit?tab=t.0',
    },
  },
];
