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
    relatedPolicies: ['process-revert-downgrade-stamp'],
  },
  {
    kind: 'process',
    id: 'process-quote-type-rules',
    title: 'Quote Type Rules — when CPQ allows New Contract vs Pro-Rated Expansion',
    bullets: [
      '🧭 CPQ decides the allowed quote type from three things: **opp type** (renewal vs mid-term expansion), **payment method** (Wire vs CC), and whether an **active, matching contract** exists. Renewal opps always get **New Contract only**. Mid-term expansion opps on an active Wire contract get **Pro-Rated Expansion only** (New Contract is blocked); on CC accounts they get **New Contract only**.',
      '🔎 New Contract is forced by default when there is **no usable active contract**: none found, expired, a simulated contract, payment method not Wire, or contract currency ≠ opp currency. So when a rep says "I can\'t create a pro-rated quote", check those five conditions on the contract first — fixing the contract link or currency is usually the answer, not a quote rebuild.',
    ],
    link: {
      label: 'Open the Quote Type Rules doc →',
      url: 'https://monday.monday.com/docs/18402484793',
    },
    relatedConcepts: ['sfcpq-quote-lifecycle', 'sfcpq-contracts', 'sfcpq-cc-vs-wire', 'sfcpq-renewals'],
    relatedCategory: 'CPQ Errors',
    relatedTickets: [
      'cpq-quote-not-linked-current-contract',
      'cpq-prorated-wrong-quantity',
      'expansion-opp-no-active-contract',
      'quote-change-currency',
    ],
  },
  {
    kind: 'process',
    id: 'process-revert-downgrade-stamp',
    title: 'Reverting a Downgrade Stamp — restoring the ARR baseline after a refund or error',
    bullets: [
      '🩹 When Salesforce detects a downgrade, the flow **"Account – Post Downgrade – Stamp Fields"** stamps **ARR Prior Downgrade** and **Last Churn Date** on the account. That stamp drives the **ARR Reduction Value** and the baseline quotes are priced against. If the "downgrade" was really an administrative refund or a system error, the ARR Recognition Policy says the baseline must be restored — this runbook is how we do it: clear both fields, save, and make sure **Monday Account Baseline ARR** on the Opportunity reflects the pre-refund contract.',
      '🔎 If something still looks wrong: ARR Reduction Value still shows the old number → confirm both fields are truly blank and saved, refresh, then look for another automation or formula override. Quotes still use the old baseline → check the Baseline ARR on the Opportunity was updated (and that the quote reads from that field or from the account baseline). Only touch this on a Business Lounge ticket — the stamp is there on purpose for real downgrades.',
    ],
    link: {
      label: 'Open the Revert Downgrade Stamp runbook →',
      url: 'https://monday.monday.com/docs/18403343208',
    },
    relatedPolicies: ['policy-arr-recognition'],
    relatedConcepts: ['sfcpq-what-is-arr', 'sfcpq-arr-recognition', 'sfcpq-inspector'],
    relatedCategory: 'Renewals & ARR',
    relatedTickets: ['renewal-arr-wrong', 'arr-recognition-not-green-bucket'],
  },
  {
    kind: 'process',
    id: 'process-cancel-on-closed-lost',
    title: 'Cancel Account on Closed Lost — the Churn Assessment step',
    bullets: [
      '🚪 Closing an opp as **Closed Lost** now has a third step, **Churn Assessment**: "Will the customer stop using monday.com when this contract ends?" Reps pick **Yes** only when the customer has explicitly confirmed they won\'t renew — never as a default. Yes = the monday.com account is cancelled straight from Salesforce, aligned to the contract end date, no BigBrain detour. No = nothing happens, the customer stays on. **Partner accounts are excluded** from this flow.',
      '🧭 When Yes is selected one of three screens appears: **Cancel on Renewal** (contract still active → cancellation auto-scheduled for the end date, nothing more to do), **Cancel Immediately** (contract already ended → permanent, requires a reason + confirmation box; the account drops to a **7-day Trial** so the customer can export data), or **Already Scheduled** (read-only, just click Done). Tickets about "churned customer still has access" or "account cancelled too early" usually trace back to which of these the rep landed on.',
    ],
    link: {
      label: 'Open the Cancel Account on Closed Lost process →',
      url: 'https://docs.google.com/document/d/16jSEDpgMzgHV5hzliAI7Dr2UVNgQmmxoxLFUngx0pT4/edit?tab=t.0',
    },
    relatedConcepts: ['sfcpq-opp-lifecycle', 'sfcpq-contracts', 'sfcpq-integrations'],
    relatedCategory: 'Opportunities',
  },
  {
    kind: 'process',
    id: 'process-legal-request',
    title: 'Legal Request Process — Legal Hub, DocuSign & why an opp won\'t close',
    bullets: [
      '⚖️ All legal requests (NDAs, BAAs, SaaS agreements, addendums) are opened in Salesforce via **Manage Legal Request** on the Opportunity or the **Legal Hub** tab on the Account/Company — an item auto-creates on the **Legal-Consulting** board within ~5 minutes. Legal stamps the doc there, the **rep** (only the requester) clicks the board button to issue the DocuSign envelope from their own account, adds customer + monday signatories, and once "Envelope Status" = Completed the signed doc **auto-syncs to Legal Documents in Salesforce**. No manual uploads; wrong request type is fixed by editing the Type field, not re-opening.',
      '🔒 The ticket we actually get: **"I can\'t move my opp to Closed Won"** — usually the system doesn\'t see a finalized legal document. Three cases: signed outside the process → rep uploads the signed doc to the Legal Request to unlock the stage; still negotiating / SO signed first → rep uses **"Override a Document\'s Validation"** in Manage Legal Request (routes to their manager, notifies Legal); signed doc *is* in Salesforce and it still won\'t close → that one is ours to troubleshoot. Chamelio/DocuSign auth issues also land with Business Lounge.',
    ],
    link: {
      label: 'Open the Legal Request Playbook →',
      url: 'https://docs.google.com/document/d/1XT1dQ9HwF9JI-fvcdnaAklJowgO0dnqqKfRBBXcfy70/edit?tab=t.0',
    },
    relatedConcepts: ['sfcpq-opp-lifecycle'],
    relatedCategory: 'Opportunities',
    relatedTickets: ['cant-close-won'],
  },
];
