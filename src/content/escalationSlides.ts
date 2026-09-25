import type { OverviewSlide } from './overviewSlides';

/**
 * Deck 5 — Escalation Paths. Who owns what beyond Business Support, when to hand
 * off, and what to attach so the receiving team can act. Drafted from the
 * policies and processes already in the app — items marked (check with team)
 * still need confirmation.
 */
export const escalationSlides: OverviewSlide[] = [
  {
    id: 'esc-when-to-escalate',
    title: '🧭 When to escalate — and what to do first',
    bullets: [
      '🔧 **Fix first, escalate second.** Most tickets are ours: quote errors, opp/contract mismatches, ARR recognition overrides, CC claims. Escalate when the fix needs a permission, approval, or decision we do not own.',
      '📋 Before handing off, gather: the Business Lounge ticket link, the Salesforce record IDs (opp, contract, account), the exact error text or screenshot, and what you already tried.',
      '🏷️ Keep the ticket open and tag it with the urgency level while the other team works — you remain the rep\'s point of contact until it is resolved.',
      '🚫 Never bypass an escalation path just because our permissions allow the change (e.g. editing a locked opp). If the policy says another team decides, they decide.',
    ],
    relatedPolicies: ['policy-day-5-cutoff'],
  },
  {
    id: 'esc-revops',
    title: '🔀 RevOps — ownership, thresholds & locked-opp ARR fixes',
    bullets: [
      '👤 **Account ownership changes** (Company or monday Account) — RevOps owns these tickets. Confirm it is a real ownership request (not a contract Account Name issue), then route it.',
      '📏 **Recognition threshold looks wrong for a whole segment** — that is a configuration issue for RevOps, not a deal-by-deal override.',
      '💰 **ARR adjustment on an already-locked opp** caused by a system error — decided case by case by **VP RevOps** via a Business Lounge ticket (ARR Recognition Policy §7.3).',
      '🔁 **Renewal-ARR allocation on merged/consolidated contracts** — RevOps and Finance decide the allocation method.',
    ],
    relatedConcepts: ['sfcpq-ownership', 'sfcpq-arr-recognition'],
    relatedPolicies: ['policy-arr-recognition', 'policy-day-5-cutoff'],
    relatedCategory: 'Opportunities',
    relatedTickets: ['change-account-owner', 'arr-recognition-not-green-bucket'],
  },
  {
    id: 'esc-finance',
    title: '🧾 Finance & Finance Billing — invoices, entities, refunds, opt-outs',
    bullets: [
      '🏢 **Billing entity / Bill-to changes** on a closed deal — Finance Billing is looped in via the Correction Opportunity flow; entity changes themselves route to Finance Billing.',
      '🔑 **Opt-out approvals** — Finance is an approver on every opt-out lane and rejects requests filed in the wrong lane. Our job is the revert + BigBrain update *after* approval.',
      '↩️ **Refund classification** — whether a refund is an administrative correction (baseline restored) or a commercial reduction (ARR reduced) is Finance / IRB\'s call. We execute the baseline fix once decided.',
      '🧮 **Duplicate ARR from reissued or voided SOs** must be reported to Finance promptly — do not quietly delete records.',
    ],
    relatedConcepts: ['sfcpq-billing-entity', 'sfcpq-opp-lifecycle'],
    relatedPolicies: ['policy-opt-out', 'policy-arr-recognition', 'process-revert-downgrade-stamp'],
    relatedCategory: 'Billing',
    relatedTickets: ['billing-invoice', 'locked-opportunity-edit'],
  },
  {
    id: 'esc-deal-desk',
    title: '🤝 Deal Desk — big free-seat asks, non-standard pricing & approvals',
    bullets: [
      '🎁 **Free seats, products & trials above the Business Support tier** (or any Enterprise / >$20K ARR account) go to Deal Desk per the Free Seats & Trials policy.',
      '🤖 **AI credit grants** — Deal Desk is one of the three teams allowed to grant (with CX and Business Lounge). If a rep asks us for credits *without* approval attached, send it back rather than escalating.',
      '💸 **Pricing exceptions and approval-tier questions** on a quote — Deal Desk owns the commercial decision **(check with team: exact hand-off rule for stuck approvals vs. genuine approval bugs)**.',
    ],
    relatedConcepts: ['sfcpq-approvals'],
    relatedPolicies: ['policy-free-seats-trials', 'policy-ai-credit-grant'],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['cpq-quote-stuck-in-approval', 'cpq-ai-rule-blocks-so'],
  },
  {
    id: 'esc-legal',
    title: '⚖️ Legal — agreements, custom clauses & signature issues',
    bullets: [
      '📄 **NDAs, BAAs, SaaS agreements, addendums** — reps open these themselves via Manage Legal Request / Legal Hub. We only get involved when the Salesforce side misbehaves (signed doc present but opp still blocked).',
      '📝 **Custom opt-out periods** (anything other than 30 / 60 / 90 days) must be reviewed by Legal before the normal approval flow.',
      '🖊️ **DocuSign / Chamelio envelope problems** — first check the rep completed the one-time Chamelio authentication; technical failures after that come to Business Lounge, contractual questions go to Legal.',
    ],
    relatedConcepts: ['sfcpq-opp-lifecycle'],
    relatedPolicies: ['process-legal-request', 'policy-opt-out'],
    relatedCategory: 'Opportunities',
    relatedTickets: ['cant-close-won'],
  },
  {
    id: 'esc-cpq-admins',
    title: '🛠️ CPQ / Salesforce admins — genuine system bugs',
    bullets: [
      '🐛 Escalate when the behaviour is a **defect, not a data problem**: a CPQ error that reproduces on a clean quote, a broken Salesforce ↔ BigBrain sync, an automation firing wrongly, a flow stamping fields it should not.',
      '🧪 Before escalating, prove it is a bug: reproduce once, note the record IDs, capture the full error text, and confirm the Inspector shows the data is correct.',
      '🔒 Editing a **Locked opp** for a technical bug is allowed only with an audited admin unlock, logged on the ticket and posted in #Post-cutoff-date.',
      '📍 Where to send: **BizTech** owns the systems and implements policy changes — channel **#ask-biztech** (check spelling). Known bugs to raise as urgent include the 90-day upgrade-after-downgrade window not working for CC↔Wire conversions.',
    ],
    relatedConcepts: ['sfcpq-quote-lifecycle', 'sfcpq-integrations', 'sfcpq-inspector'],
    relatedPolicies: ['policy-day-5-cutoff', 'process-quote-type-rules'],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['cpq-quote-error', 'close-won-unique-key-duplicate'],
  },
  {
    id: 'esc-irb',
    title: '🏛️ Incentive Review Board (IRB) — exceptions & disputes',
    bullets: [
      '⏳ **Exceptions to the 3-month CC claiming window** are at the IRB\'s sole discretion — we do not extend it ourselves.',
      '🤝 **Commission splits** when an opp changes owner while the previous owner is still quota-carrying.',
      '⚖️ **Disputed refunds, clawbacks, and ad-hoc ARR adjustments** — the IRB decides; our role is to supply the record trail.',
      '📬 How to reach them: **(check with team: request form / Slack channel / via manager)**.',
    ],
    relatedConcepts: ['sfcpq-cc-claims', 'sfcpq-what-is-arr'],
    relatedPolicies: ['policy-arr-recognition'],
    relatedCategory: 'Renewals & ARR',
    relatedTickets: ['cant-claim-cc-payment', 'arr-split-between-reps'],
  },
  {
    id: 'esc-other-teams',
    title: '🏢 Payments, Deal Acceleration, Territory S&O, Customer Intelligence & Sales Desk',
    bullets: [
      '💳 **Payments (Billing Dev)** — subscription lifecycle bugs, CC payment failures, quote-calculation infrastructure. If the customer paid and BigBrain disagrees, it is usually theirs.',
      '🚀 **Deal Acceleration** — non-standard or out-of-policy deals that need an exception. When you can\'t tell who owns something commercial, send it here.',
      '🗺️ **Territory S&O** — account hierarchies and company structures in Salesforce (which Company sits under which Global Company).',
      '🧠 **Customer Intelligence** — BigBrain views and customer metadata.',
      '🤝 **Sales Desk** — the partners-only version of Business Support. Partner-only issues go there, not to us.',
    ],
    relatedConcepts: ['sfcpq-account-hierarchy', 'sfcpq-partners-cosell'],
  },
  {
    id: 'esc-cx',
    title: '💬 CX / Tech Touch — customer-facing issues',
    bullets: [
      '🧑‍💻 **Product bugs the customer is experiencing**, account access problems, and anything the customer needs to hear from support directly — CX owns the customer conversation.',
      '💳 **Credit-card customers cancelling or opting out** do it in their own account settings (30-day option); mid-term downgrade requests for CC accounts go through the CCO RVP Tech Touch approval lane.',
      '🤖 **Product-incident AI credit grants** are done by CX without a Business Lounge ticket — if a rep asks us for one, point them to CX.',
    ],
    relatedPolicies: ['policy-opt-out', 'policy-ai-credit-grant', 'process-cancel-on-closed-lost'],
    relatedCategory: 'Billing',
  },
];
