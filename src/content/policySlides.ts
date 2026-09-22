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
    relatedConcepts: ['sfcpq-opp-lifecycle', 'sfcpq-ownership'],
    relatedCategory: 'Opportunities',
    relatedTickets: ['locked-opportunity-edit'],
  },
  {
    id: 'policy-opt-out',
    title: 'Opt-Out Policy — exiting or reducing a locked deal',
    bullets: [
      '🔑 **The single core rule:** an opt-out is required **only** when the opp is Closed Won **and locked**. Not locked = no opt-out, ever — the rep edits the existing opp or opens a new one, even if it\'s already invoiced.',
      '📉 **Rule 1 — ARR decrease:** locked + requested change lowers ARR → opt-out. **Rule 2 — pro-rated deals:** any change to or exit from a locked pro-rated deal → opt-out, **even if ARR goes up** (pro-rated comp is stand-alone; changing it without an opt-out double-counts ARR). Exception: adding incremental seats *on top* is just a new pro-rated opp. **Rule 3 — currency change:** locked + currency must change → opt-out (technical-fix lane, via Finance).',
      '🛤️ **Lanes — Finance rejects a wrong lane:** (1) Contractual — contract has an opt-out clause; needs proof the customer asked inside the window; Direct Manager → Finance. (2a) Non-contractual downgrade / right-sizing, (2b) product / implementation issues, (2c) technical / operational fix (currency, two opps closed by mistake, changes inside a pro-rated deal) — all 3rd-line manager → CCO → Finance (Partners: 3rd-line → Finance).',
      '📝 **Submitting:** "Submit Opt-Out Request" on the opp (top-right dropdown or tiles). Requested opt-out date = **the date the customer asked**, not today — the credit is calculated from it. Attach the customer\'s request (email) and full context: root cause, related opp/SO IDs, screenshots. Thin explanations are the #1 reason requests bounce.',
      '🔁 **If the customer stays** (right-sizing, technical fix, partial exit): create the **new substitute opportunity** with the corrected terms and reference it in the request — the opt-out closes the wrong opp, the new one carries the contract. Get CCO approval **before** the customer signs the new agreement.',
      '📣 **Non-contractual escalation:** after 3rd-line approval, open a Slack group from the opp\'s "Slack Channel" tab with Adi Dar, Mary Malinsky, Ari Klionsky, Wadee Jamal — include reason, requested outcome, retention efforts, justification, ARR at risk, tenure, renewal date.',
      '🚫 **Not an opt-out — route instead:** SO date change only → new $0-delta opp with Deal Desk approval (BizLounge creates it if before activation; recalc BCO) · legal language / agreement type → BizSupport validates, then Finance or Legal · BCO amount/date, split invoice, draft SO signed at same ARR, wrong PO → Finance Billing External board · unauthorized signer or billing/shipping entity → Correction Opportunity · PS refunds → VP PS, never via opt-out · partial refund with no exit → Refund policy. **Renewal start date may never be pushed more than 1 day past the previous end date.**',
      '🎫 **Business Support\'s part:** for every **approved** opt-out, a Business Lounge ticket is opened so we revert the original SO and update BigBrain — that\'s what stops the double-count.',
    ],
    link: {
      label: 'Open the Opt-Out Policy →',
      url: 'https://docs.google.com/document/d/18j9GMWURIfjGS4lT7PNFELrgBa6Gejmt5oyhFEnXoWc/edit?tab=t.0',
    },
    relatedConcepts: ['sfcpq-opp-lifecycle', 'sfcpq-opportunities', 'sfcpq-contracts'],
    relatedCategory: 'Opportunities',
    relatedTickets: ['locked-opportunity-edit', 'expansion-closed-as-renewal'],
  },
];
