import type { OverviewSlide } from './overviewSlides';

export const salesforceCpqSlides: OverviewSlide[] = [
  // ───────────────────────── Foundations ─────────────────────────
  {
    id: 'sfcpq-what-why',
    title: 'What is Salesforce CPQ & how to access it',
    bullets: [
      '☁️ Salesforce is the world\'s leading CRM (Customer Relationship Management) platform — it\'s where our entire sales operation lives: every lead, account, opportunity, contract, and deal record.',
      '🗄️ Think of it as the single source of truth for the business side of monday.com — when a rep asks "why can\'t I close this deal?", the answer is almost always somewhere in Salesforce.',
      '🧩 CPQ = Configure (what products), Price (what they cost), Quote (deal details) — Salesforce\'s native app that automates quoting end to end.',
      '🛡️ It puts guardrails on deals: no unapproved pricing, no retired products, and centralized data for accurate forecasting.',
      '📍 Access it from the CPQ Management tab at the top of every Opportunity page (use Chrome for best performance).',
      '🆕 Three entry options: Create a New Offer, Manage Existing Offers, or Change Currency.',
    ],
  },
  {
    id: 'sfcpq-account-hierarchy',
    title: 'The account hierarchy: Global Company → Company → monday Account',
    bullets: [
      '🌍 Global Company — the top of the hierarchy: the real-world organization worldwide (e.g. "Facebook"). Used to manage the full relationship across regions.',
      '🏢 Company Account (regional / "parent account") — a regional entity under the Global Company (e.g. Facebook EMEA, Facebook NAM). Ownership, contracts, and billing entities hang here.',
      '🖥️ monday Account — an actual monday.com instance (a BB account) under a Company. One Company can have many: different teams, departments, or regions each running their own instance.',
      '🧭 The chain CPQ cares about: Global Company → Company → monday Account → **Opportunity → Contract** ← CPQ reads here → Quote → Quote Line Items. When a quote misbehaves, the Contract is usually where the answer is.',
      '🔗 Handy trick: paste **any Salesforce record ID** into the URL bar after the domain and it opens the record — no need to know which object it is.',
      '👀 See it yourself: open any account in Salesforce → Account Hierarchy shows the full tree.',
    ],
    image: 'https://drive.google.com/thumbnail?id=177DeCfNxX9FeJ3cNo4y05LQ73Bo6OsL5&sz=w1600',
  },

  // ───────────────────────── Opportunities ─────────────────────────
  {
    id: 'sfcpq-opportunities',
    title: 'Opportunities · What they are & the types you\'ll see',
    bullets: [
      '💡 An opportunity is Salesforce\'s record of a potential deal — a client considering adding seats, upgrading their plan, renewing, or buying for the first time. It tracks the account, the players, and the potential value.',
      '🎯 The Opportunity Type drives everything downstream — pricing, available products, contract behavior, and who needs to approve.',
      '🆕 New Business — the first deal on a monday Account. Locks the contract type to "New Contract". The monday Account itself should ideally be created through lead conversion in Salesforce, though it can also be created directly from BigBrain when needed.',
      '➕ Expansion — adding seats or products to an existing account with an active contract (created via the "Create Expansion Opportunity" button). Contract Type is set to Pro-Rated — the addition aligns to the existing contract\'s end date. Pro-rated quotes start **blank (delta only)** and are **additive only** — you cannot remove seats on one; ARR is always annualised.',
      '    ↳ Cross Sale — a flavor of expansion: selling an additional product to an existing customer (e.g. CRM to a work management account). Also Pro-Rated.',
      '🔁 Flat Renewal — re-closing the existing contract at renewal time; auto-created against the renewal.',
      '📉 Downgrade — reducing seats or tier; auto-filled by the system, not manually created.',
      '🛠️ Service — **services only**: implementation packages, tailored or managed services. It cannot include seats, AI credits, apps, Guardian, or Premium Support — a mixed deal must be an **Expansion** opp.',
      '🚫 **Never reopen a Closed Won opp.** The system isn\'t designed for it: reopening changes ARR in BigBrain and can leave partial or missing ARR. The correct flow is a **new expansion opp**; if a reopen already happened, it needs manual cleanup.',
      '📊 ARR on an **open** opp = forecast + signed SOs + CC claims, so it can look alarming (even negative). A **closed** opp shows only signed SOs + CC claims. A scary number on an open opp is often a forecast artifact that resolves on close — deleting the forecast quote fixes it immediately.',
    ],
    relatedCategory: 'Opportunities',
    relatedPolicies: ['policy-opt-out'],
  },
  {
    id: 'sfcpq-opp-lifecycle',
    title: 'Opportunities · Stages, locking & Correction Opportunities',
    bullets: [
      '📊 An opp moves through stages until it\'s **Closed Won** (deal done) or Closed Lost. Closing creates the Contract and triggers activation.',
      '🔒 Closed Won opps **lock on the 5th of the month after close** — closed in July, editable until August 5th. After that the SO can\'t be edited directly.',
      '🩹 A **Correction Opportunity** is a $0-ARR opp created from the **Post-Won Wizard** to fix invoicing details on a locked deal. Three use cases only: change Billing Entity, change Company Name, change SO Signer.',
      '📝 The rep clones the quote, gets it re-signed, uploads the signed SO, then closes the correction opp. Finance Billing is looped in for "Bill-to" changes.',
      '🛠️ Business Support edits a Locked opp **only for a genuine technical bug** (broken SF↔BB sync, CPQ defect, automation error) — never for re-pricing, stage/owner moves, or late corrections, even if our permissions allow it. Those go through a Correction Opp or Opt-out.',
      '📍 Where to look: the stage bar at the top of the opp; the Post-Won Wizard and "Create Correction Opportunity" button appear once the opp is Closed Won.',
    ],
    relatedCategory: 'Opportunities',
    relatedTickets: ['locked-opportunity-edit'],
    relatedPolicies: ['policy-day-5-cutoff', 'policy-opt-out', 'process-cancel-on-closed-lost', 'process-legal-request'],
  },

  {
    id: 'sfcpq-ownership',
    title: 'Opportunities · Account ownership (now handled by RevOps)',
    bullets: [
      '👤 Ownership lives in the **Account Owner** field on the Company and monday Account. Unowned accounts sit in the **Accounts Pool**.',
      '🏢 Who owns where: AMs and Outbound AEs typically own at the Company level; AEs, Scale AMs, and Partners manage at the monday Account level.',
      '🚧 Why it matters: only the account owner can create opportunities on an account — "I can\'t create an opp" is often an ownership question in disguise.',
      '🔀 **Business Support no longer processes ownership changes — RevOps owns these tickets.** If one lands with us, confirm it\'s truly an ownership request (not a contract Account Name issue) and route it to RevOps.',
      '🚫 Policy rule R7: **ownership changes on a Closed Won opportunity are never allowed** — under any circumstance, path, timing, or approver (Day 5 Cutoff Policy).',
      '🧠 Still worth understanding: when RevOps changes the Company Owner, it trickles down to every monday Account under that Company — which is why a rep can suddenly create opps everywhere on that account.',
      '📍 Where to look: Account Owner field on the Company; Account Hierarchy to see who owns each level.',
    ],
    relatedCategory: 'Opportunities',
    relatedTickets: ['change-account-owner', 'expansion-opp-not-owner'],
    relatedPolicies: ['policy-day-5-cutoff'],
  },

  {
    id: 'sfcpq-partners-cosell',
    title: 'Opportunities · Partners & the co-sell triangle',
    bullets: [
      '🤝 **Partners** fill the gaps in regions, integrations, and markets we don\'t cover directly — about 230 managed partners across 4 regions. We pay the partner **company**, not the individual rep. Roles: **CPM** (Channel Partner Manager, a monday employee), **PAM** (Partner Account Manager, inside the partner), PDR, and PSC (implementation consultants).',
      '🔺 **The co-sell triangle** — three objects that must all exist and link to each other: ① the **Primary Opportunity** (internal sales), ② the **Secondary Opportunity** (partner-held, auto-created), ③ the **S&P Request** (the binder). Remove any one and the sync breaks. The "Last approved S&P request" field drives the account\'s co-sell status. *Influ-sell* is the one-shot referral variant.',
      '🩹 **Co-sell sync issues:** primary is Closed Won but the secondary shows the wrong stage or no ARR. Inspector check: is the secondary opp field populated? Is the co-sell request field populated? Best fix: restart the co-sell with a new S&P request. Pragmatic fix: force-close the secondary with an admin ARR override — **only with written Sales Ops approval**.',
      '💰 **Partner ARR recognition is separate:** sales use "Monday Account ARR New" (live BigBrain value); partners use "Monday Account ARR" (running sum of claims). A partner joining an existing $7K account cannot claim that $7K — their clock starts when they join. Partner thresholds: **$5K inbound, $3K outbound**.',
      '🧹 **Removing a co-sell (partner change):** remove the partner from the account field → close all secondary opps → reject open S&P requests → confirm only primary opps remain → a new S&P can now be submitted for the incoming partner. Check for a **PIE** (partner-initiated) tag before acting.',
      '📍 Where to look: opp → Splits section (splits carry ARR, not the opp); the S&P Request record; partner user\'s CPQ licence (a "feature isn\'t available in your region" error is really a missing CPQ licence, Group A).',
    ],
    relatedCategory: 'Opportunities',
    relatedPolicies: ['policy-arr-recognition'],
  },

  // ───────────────────────── Renewals & ARR ─────────────────────────
  {
    id: 'sfcpq-what-is-arr',
    title: 'Renewals & ARR · What is ARR and why everyone cares',
    bullets: [
      '📈 **ARR (Annual Recurring Revenue)** = what a customer pays us per year — the number the whole company is measured on. Per line item: **Net Unit Price × Quantity × 12 × Exchange Rate**. ARR is always in **USD**, with the exchange rate locked at quote creation.',
      '➖ **Added ARR = ARR₁ − ARR₀**: the new quote\'s ARR minus the monday Account\'s **baseline ARR** before the deal. ARR is a *delta between two source-of-truth numbers*, which is why "what was the account ARR before, and after?" is the first question on any ARR ticket.',
      '🎯 Reps have ARR **targets**. Every deal they close either counts toward their target or it doesn\'t — that\'s why ARR questions arrive as urgent tickets.',
      '🧩 On an opportunity you\'ll see three ARR fields: **Green Bucket ARR** (top of the opp — what counts), **Added / Expected ARR** (what the deal adds), and **Claimed ARR** (what the rep has claimed).',
      '🔄 **Added ARR and Renewed ARR are two separate systems** with different targets and fields. Added = new money. Renewed = the % of a contract retained at renewal (capped at 100%). A renewal booked as an expansion hurts the AM\'s retention number even though the money is the same.',
      '💳 Wire vs CC when reading ARR: on **Wire** deals CPQ is used and the ARR isn\'t in BigBrain yet at close, so use Claimed ARR + baseline. On **CC** deals BigBrain updates first — don\'t double-add.',
      '📍 Where to look: the ARR box at the top of the opp, and the **Recognition Details** box on the monday Account.',
    ],
    relatedCategory: 'Renewals & ARR',
    relatedPolicies: ['policy-arr-recognition', 'policy-free-seats-trials', 'process-revert-downgrade-stamp'],
  },
  {
    id: 'sfcpq-arr-recognition',
    title: 'Renewals & ARR · ARR recognition & the Green Bucket',
    bullets: [
      '💰 **Recognition** = the system deciding whether a closed opp counts toward the rep\'s target. It\'s binary: **Green Bucket** (recognised, counts) or **Amber Bucket** (saved, not counted yet, carried forward indefinitely). Recognition errors directly affect rep pay — the most politically sensitive work we do.',
      '🚦 **Pre-conditions (any fail = instantly amber):** threshold field populated; not a downgrade opp; **annual** plan (monthly is never recognised for sales); **Pro or Enterprise** tier (Free/Basic/Standard never, regardless of account size).',
      '📏 **Thresholds** are on the *account total*, not the deal size: ~**$3.5K** for SMB / Commercial, ~**$7K** for Mid-Market / Enterprise (role and region table in the ARR Recognition Policy). A $1 deal on a $6,999 account can be recognised because it pushes the account to $7K.',
      '✅ **Three OR-checks:** (1) account already recognised → this deal is auto-recognised; (2) Claimed ARR + monday Account baseline > threshold; (3) monday Account **Baseline ARR already above threshold** — the most common case, go here first when troubleshooting.',
      '🎯 **Transition to Recognised (TTR):** the first opp that pushes an account over the threshold triggers **backdated credit for all prior deals** on that account.',
      '☑️ **Override fields (use with care):** *Override Recognised* forces green when policy clearly allows but the system lags; *Override Claimed ARR* sets the correct figure; *Override Reason* must **always** carry the ticket link. These are audited.',
      '🧭 **Troubleshooting order:** bucket colour → pre-conditions (monthly? Standard? downgrade? blank threshold?) → Baseline ARR vs threshold → if policy says recognised but the system disagrees, look for a sync bug, then override with a documented reason. Segment-wide threshold problems are a RevOps config issue, not a deal-by-deal override.',
      '📍 Where to look: opportunity → **Admin section** → Is Recognized + Override Reason; monday Account → Recognition Details.',
    ],
    relatedCategory: 'Renewals & ARR',
    relatedTickets: ['arr-recognition-not-green-bucket'],
    relatedPolicies: ['policy-arr-recognition', 'process-revert-downgrade-stamp'],
  },
  {
    id: 'sfcpq-renewals',
    title: 'Renewals & ARR · Renewals vs expansions',
    bullets: [
      '🔁 A **Renewal opp** re-closes an existing contract for the next term. It is the **only auto-created opp type** (triggered when a contract closes) — reps cannot create one manually. There should be exactly **one open renewal opp per account**.',
      '📐 **Renewed ARR** = the % of contract value retained at renewal, **0–100%**. 100% is the ceiling — anything the customer pays above it becomes *Added* ARR. It is recognised against the **contract renewal date**, not the close date: a December renewal closed in September counts toward December. **ATR (ARR to Renew)** is the 100% baseline, set at year start.',
      '🐛 **CC renewal logic is broken by design (for now):** each contract auto-creates a new renewal opp but old ones are never auto-closed, so accounts collect multiple open renewal opps and reports show inflated ARR. The fix is manual admin cleanup plus rep discipline.',
      '➕ An **Expansion opp** adds seats or products mid-contract (pro-rated to the existing end date). It does not replace the renewal.',
      '⚠️ The recurring mistake: reps close the renewal as an expansion or new business. The customer pays, but the ARR lands in the wrong bucket and the AM loses retention credit.',
      '🛠️ The fix lives in the Inspector: set **Type** and **Type Auto Filled** to the renewal value, set **Renewal Creation Source** = "Manual Creation from Source Contract", close as Won, link the Contract to the new renewal opp, delete the leftover open renewal.',
      '🔍 **Renewed ARR = 0?** Usually the quote didn\'t push the value through — check the quote for the renewal date and contracted amount. **No recognition date?** Populate the renewal recognition date on the opp; without it nothing hits the target.',
      '📍 Where to look: opp → Type & Contract Type fields; Contract → linked opportunities; the open renewal opp(s) on the account.',
    ],
    relatedCategory: 'Renewals & ARR',
    relatedTickets: ['expansion-closed-as-renewal', 'renewal-arr-wrong'],
    relatedPolicies: ['policy-arr-recognition', 'process-quote-type-rules'],
  },

  // ───────────────────────── Billing ─────────────────────────
  {
    id: 'sfcpq-cc-vs-wire',
    title: 'Billing · Credit Card vs Wire',
    bullets: [
      '💳 **Credit Card (CC)** — the customer pays inside the monday.com platform (self-serve), or via a payment link sent from BigBrain. The plan activates immediately on payment.',
      '🏦 **Wire** — the customer signs a Sales Order built in CPQ and pays by invoice. The plan is activated by the rep via **Import SO** in the Close Opportunity flow.',
      '🧾 CC and Wire follow different rules for claims, recognition, and activation — always check the payment method first when reading a billing ticket.',
      '🔀 Switching: CC → Wire happens at renewal with a New Contract quote (pro-rated isn\'t an option). Wire → CC: cancel the subscription in BigBrain, then generate a payment link.',
      '🤖 **Plan Enforcer** auto-upgrades CC accounts that exceed their seat count: notifications first, then an automatic charge. Refund requests **within 60 days** go via CX (revert + full refund); **after 60 days** the answer is no. Small amounts: use judgment.',
      '🧠 **AI funnel:** since May 2026 most accounts must include AI credits in any new CPQ quote. The error "paying account can\'t grow out of AI infra" is CPQ enforcing this. Opt-out is a checkbox in CPQ or an admin toggle on the account. AI credits ≠ Vibe apps — separate products, separate quotes.',
      '📍 Where to look: payment method on the monday Account in BigBrain; on the opp, whether a CPQ quote/SO exists (Wire) or the "Claim Credit Card Payments" component shows payments (CC).',
    ],
    relatedCategory: 'Billing',
    relatedPolicies: ['process-quote-type-rules'],
  },
  {
    id: 'sfcpq-cc-claims',
    title: 'Billing · CC claims: what they are & where to find them',
    bullets: [
      '🙋 A **CC claim** is how a rep says "I was responsible for this credit-card payment — count it toward my ARR." Wire deals are auto-claimed; CC payments must be claimed manually.',
      '🖱️ Where: on the opportunity → **Claim Credit Card Payments** component → tick the payments → Save. Total ARR Claimed updates underneath.',
      '⏳ Two windows apply: the payment must be within **3 months** (policy, confirmed — the system may still enforce a legacy 6; check which is running before advising), and after the account\'s **Claim Eligibility Date** — a hard date that auto-updates on ownership change. Nothing can be claimed before it.',
      '⚖️ Claims are **all or nothing**: a rep can\'t claim the upgrades and ignore the downgrades. Both positive and negative ARR must be claimed.',
      '❌ "Not within the account owner claim eligibility timeframe" means the monday Account (and therefore the eligibility date) was created **after** the customer already paid — common when reps convert the lead late.',
      '✅ Business Support fix (admin-only): get **logged evidence** the rep worked the account on/before the claim date — a Gong call, Salesforce activity, an email thread → update the **Ownership Claim Eligibility Date** on the monday Account → link the evidence to the ticket.',
      '📍 Where to look: opp → Claim Credit Card Payments; monday Account → Recognition Details → Ownership Claim Eligibility Date.',
    ],
    relatedCategory: 'Billing',
    relatedTickets: ['cant-claim-cc-payment'],
    relatedPolicies: ['policy-arr-recognition'],
  },
  {
    id: 'sfcpq-billing-entity',
    title: 'Billing · Billing entities, invoices & activation',
    bullets: [
      '🏢 The **Billing Entity** holds the legal "Bill-to" details used to generate the Sales Order and invoice. A **Shipping Entity** ("Sold-to") can differ if a third party pays.',
      '⚙️ Set before SO creation via the Billing Entity app. If tax info changes on an existing entity, **Finance** must make the change; otherwise a new entity can simply be created.',
      '🔀 **Rep asks us to change a Billing Entity? Pass the ticket to Finance Billing.** Business Support doesn\'t edit Bill-to details — we confirm what they need, then route it to the Finance Billing assignment group.',
      '🧾 Invoices, payment failures, and account holds are owned by **Finance** — Business Support confirms the account standing and routes; we don\'t edit invoices.',
      '💸 **Refunds:** Finance Controllers instruct us on the amount — never the salesperson. Find the invoice in BigBrain and use the refund option; we refund against **invoices, not line items**. We hold large refund permissions — use them carefully.',
      '🚀 **Activation** closes the loop: Wire deals activate via Import SO; add-ons (Premium Support, AI Credits…) are sold in CPQ but **activate in BigBrain**. Verify under the BB account profile.',
      '📍 Where to look: opp → Billing Entity; BigBrain → account subscription, seats, tier, add-ons; Salesforce yellow "Activation Scheduled" banner.',
    ],
    relatedCategory: 'Billing',
    relatedTickets: ['billing-invoice'],
  },

  {
    id: 'sfcpq-bco',
    title: 'Billing · Balance Carryover (BCO)',
    bullets: [
      '🔄 **BCO** is the credit a customer gets for unused subscription time when they upgrade early. It appears as a negative refund line on a **New Contract** quote when the account has an active, unexpired contract. Pro-Rated quotes never carry over.',
      '📝 BCO **must appear as a line item on the signed SO**. If it\'s missing, the customer must **re-sign a corrected SO** — the invoice cannot be adjusted afterwards. No exceptions.',
      '💱 **Cross-currency BCO** (e.g. a CAD subscription on a USD quote) cannot be auto-computed — it has to be calculated manually and set via "Set Manual Carryover". Finance validates the amount.',
      '💸 **Refunds tied to BCO** are instructed by Finance Controllers, never by the rep. Find the invoice in BigBrain, use the refund option, refund against the invoice.',
      '📍 Where to look: quote → carryover line drawer (Set Manual Carryover / Remove Balance Carryover); Contract end date; previous contract currency.',
    ],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['cpq-balance-carryover'],
  },

  // ───────────────────────── Quoting ─────────────────────────
  {
    id: 'sfcpq-quoting-read-a-quote',
    title: 'Quoting · How to read a quote when a rep says "it\'s not working"',
    bullets: [
      '🎫 Work on the quote the rep already created — don\'t build a new one for them. If we set the precedent of doing it for reps, they\'ll keep asking; our job is to **enable** them while we fix and troubleshoot. Learn to read a quote fast, and always ask for the **quote number (Q-xxxxxx)** first.',
      '🗂️ Opp → **CPQ Management tab** is your home screen. Each row shows Quote Number, **Primary** (yes/no), **Approval Status** (Draft / In Approval / Approved / Rejected), Document Type (SO / Quote / Forecast), Contract Type (New Contract / Pro-Rated), and the Deal Room link.',
      '🔍 Three questions answer most tickets: Is it **Primary**? Is it **Approved**? Is it **Published**? A quote can be approved but not published, or published but not primary — and reps read all of those as "the link is broken."',
      '🧮 "Edit Quote" opens the **QLE** (Quote Line Editor). The numbers only refresh when someone clicks **Calculate** — if the ARR looks stale, click it before diagnosing anything.',
      '📅 Read **Contract Type** before anything else. Pro-Rated quotes have locked tier, end date, and duration (inherited from the existing contract); New Contract quotes are free on all three. Half of "CPQ won\'t let me change X" is a rep on a Pro-Rated quote asking for a New Contract behavior.',
      '⚠️ Never edit a quote that is **In Approval Process** — it recalls the approval and resets the chain. Diagnose; let the rep make the change.',
      '🔧 **A good first thought for any unexplained quote or CPQ error:** CPQ builds quotes by reading the Contract\'s subscriptions, so if those are wrong or split, the quote breaks. Go to the Contract → delete the CPQ Subscriptions → Inspector → set **Migrate to CPQ Contract** False → True to rebuild them cleanly — then have the rep retry.',
    ],
    relatedCategory: 'Quoting',
    relatedTickets: ['quote-dealroom-link-not-loading', 'quote-change-dates-term'],
  },
  {
    id: 'sfcpq-quoting-dealroom-dates-currency',
    title: 'Quoting · Deal Room, dates & currency — the three "I\'m stuck" asks',
    bullets: [
      '🏠 The **Deal Room** is the customer-facing page where they review and sign. It exists only after the quote is submitted **and published**. Approved ≠ published — "Publish Offer" on the CPQ Management tab is a separate click, and it\'s the #1 reason a link "doesn\'t work."',
      '🔗 Reps often share the link from the wrong quote. Check which quote is **Primary**; the Deal Room the customer should see belongs to that one. "Set Primary" fixes it in one click.',
      '📆 **Dates** depend on Contract Type: New Contract → Start Date and Duration editable in the QLE; Pro-Rated → only Start Date moves, End Date is locked to the existing contract. After Closed Won, nothing on the quote is editable — dates then live in BigBrain at activation.',
      '🧭 Golden rule to teach reps: **Close Date = Subscription Start Date.** Closing an opp early or late shifts when the customer\'s subscription (and invoice) begins.',
      '💱 **Currency** is set on the opportunity, and quotes and CC claims must match it. The **Currency Change Wizard** (CPQ Management → Change Currency) handles the switch — but existing claims must be unclaimed first, existing quotes become unavailable, and already-invoiced deals can\'t use it at all (that\'s Finance Billing).',
      '📍 Where to look: CPQ Management tab (Primary / Approval Status / Publish / Extend Expiration / Change Currency); QLE Quote Information section (dates); opp header (currency).',
    ],
    relatedCategory: 'Quoting',
    relatedTickets: ['quote-dealroom-link-not-loading', 'quote-change-dates-term', 'quote-change-currency'],
  },

  // ───────────────────────── CPQ Errors ─────────────────────────
  {
    id: 'sfcpq-quote-lifecycle',
    title: 'CPQ Errors · The quote lifecycle',
    bullets: [
      '📄 Three **Document Types**: **Forecast** (pipeline estimate, never shown to the customer), **Quote** (offer in principle, can generate a Deal Room), **Sales Order** (the signed document that activates the contract). Reps say "quote" for all three — always check the Document Type field.',
      '1️⃣ **Quote built** in the Quote Line Editor (QLE) — products, seats, tier, discounts. Total Added ARR recalculates live.',
      '2️⃣ **Submitted** through the guided flow: Basic Info → Billing Entity → Legal → Finance → Submission. Validation rules run here (e.g. the quote must link to the account\'s **current contract**).',
      '3️⃣ **Approvals** — if the discount exceeds the matrix, the quote routes through the manager chain. Editing a quote mid-approval recalls it and **resets the chain**. Once **internally approved the quote is locked** — never change lines or dates after this point. You *can* safely restore contract event dates once internally approved; no need to wait for the customer signature.',
      '4️⃣ **Sales Order signed** by the customer in the **Deal Room**; a signed PDF is generated.',
      '5️⃣ **Closed Won** → Contract and CPQ Subscriptions created → activation.',
      '🚨 **The errors you\'ll see most:** "List unit price below minimum" → floor = contract ARR ÷ seats ÷ 12. "Total price cannot be specified when discount is 100%" and **"Field integrity exception"** → a stale opportunity product line; delete the stale line. "Current quantity = 0" → click Calculate; if it persists, contract/BigBrain seat mismatch. "Unhandled fault on renewal" → change quote type and adjust dates manually.',
      '🧯 **Errors don\'t save.** A failed submit leaves the quote exactly as it was before the attempt — nothing to undo, just fix the cause and retry.',
      '🔧 **First thought for an unexplained CPQ error:** CPQ reads the Contract\'s subscriptions to build quotes. Contract → delete CPQ Subscriptions → Inspector → **Migrate to CPQ Contract** False → True rebuilds them cleanly and clears a surprising number of "can\'t create SO" errors.',
      '📍 Where to look: opp → **CPQ Management** tab lists every quote, its approval status, and which is Primary. "Preview Approvals" shows who\'s pending.',
    ],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['cpq-quote-error', 'cpq-split-subscriptions'],
    relatedPolicies: ['process-quote-type-rules'],
  },
  {
    id: 'sfcpq-approvals',
    title: 'CPQ Errors · Approval rules & manager IDs',
    bullets: [
      '🪜 Discounts route through **approval rules** — each rule points to an **Approver Field** on the quote (Direct / Second / Third / Fourth Level Manager) that must hold a user ID.',
      '🚨 "Unable to find Approver for Rule ID: a6W…" means the field that rule points at is **empty**. The Rule ID in the error tells you which one.',
      '🔎 Paste the Rule ID into Salesforce search → it opens the Approval Rule → read the Approver Field name → open the quote in the **Inspector** → find that field.',
      '🧭 Empty? Go to the rep who owns the Sales Order → walk up their manager hierarchy → fill in the right user ID → rep resubmits.',
      '🧑‍💼 Approver on leave? **CPQ Delegation** (avatar → CPQ Delegation → delegate + dates).',
      '🪜 **Discount approval chain:** the discount is **averaged across all line items**, then: no approval → Manager → 2nd-line → 3rd-line (CRO). The level is based on **who created the quote**, not account size. Exact % tiers: **(check with team)**.',
      '⚠️ The **Commercial Comments** field on a quote can create legal commitments — flag risky wording to Finance before it goes to signature.',
      '📍 Where to look: CPQ Management → Preview Approvals; the "Pending Approvals" tab in Salesforce; quote Inspector → manager fields.',
    ],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['cpq-missing-manager-id'],
  },
  {
    id: 'sfcpq-contracts',
    title: 'CPQ Errors · Contracts & CPQ Subscriptions',
    bullets: [
      '📜 A **Contract** is created automatically on Close Won and is defined by its end date. Under it hang **Contract Products** (what was sold) and **Contract Events** (each change to those products over time).',
      '🔀 Two paths build Contract Events: **Wire** — the Quote Line Items on the signed SO build the events directly; **CC** — events are built from the **Subscription** object, which BigBrain syncs into Salesforce when the customer pays.',
      '🔁 The loop closes both ways: CPQ builds new quotes by reading the Contract Products, and once a Wire SO is exported and activated in BigBrain, the subscription syncs back to the monday Account. Quote ARR + CC claimed ARR = the opportunity\'s ARR.',
      '🏢 The Contract\'s **Account Name must be the Company Account**, not a monday Account. If it points at a monday Account, reps can\'t create expansion opps ("…because you are not the account owner").',
      '🔁 If a rep reopens a Closed Won opp and closes it again, CPQ tries to recreate subscriptions that already exist → "DUPLICATE_VALUE… Uniqe_Key__c". It\'s a defence mechanism — ask why the opp was reopened.',
      '🪜 **Fix in levels:** every problem traces back Quote → Contract → Subscription → BigBrain. Always fix at the root — never patch an Opportunity if the problem is in the Contract, and never patch the Contract if BigBrain is wrong. If the problem is CPQ, the problem is the contract.',
      '🧷 **Contract Products = trust these** (native Salesforce, source of truth). **CPQ Subscriptions** can be deleted and regenerated from Contract Products — don\'t stress about them.',
      '🛠️ Fixes: delete the CPQ Subscriptions on the Contract so they recreate cleanly; or in the Inspector toggle **Migrate to CPQ Contract** False → True if subscriptions never appeared.',
      '📍 Where to look: Contract → Contract Information → Account Name; Contract → CPQ Subscriptions section.',
    ],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['close-won-unique-key-duplicate', 'expansion-opp-not-owner'],
    relatedPolicies: ['policy-opt-out', 'process-quote-type-rules'],
  },
  {
    id: 'sfcpq-inspector',
    title: 'CPQ Errors · The Inspector: our field-level power tool',
    bullets: [
      '🔍 The Inspector exposes every field on a record — including ones hidden from the standard layout. It\'s where most Business Support fixes actually happen.',
      '🛠️ We use it to see and correct what the normal page hides: the true value behind a picklist, system-set flags like Migrate to CPQ Contract, the manager IDs on a quote, or an opp type that was auto-filled wrong. When a rep says "the field isn\'t there," it\'s there in the Inspector.',
      '🧭 Typical flow: open the record → Inspector → find the field → read the current value before you touch anything → change it → save → refresh the record and confirm the downstream effect (subscriptions rebuilt, approval routes, opp type corrected).',
    ],
    relatedCategory: 'CPQ Errors',
  },

  // ───────────────────────── Access ─────────────────────────
  {
    id: 'sfcpq-access',
    title: 'Access · Logins, roles & permissions',
    bullets: [
      '🔐 Salesforce access is governed by **profiles, roles, and permission sets**. Roles control what records you can *see* (via hierarchy and sharing rules); permission sets control what you can *do*.',
      '🚫 "Insufficient privileges / You do not have access to this record" — the rep\'s role or permission set doesn\'t cover the record. Common after territory or team changes. Compare to a peer who can see it.',
      '🌐 Two environments: **Production** (live) and **Full Sandbox** (a copy for testing). A rep using the sandbox URL with production credentials will fail to log in.',
      '🔑 Login failures: confirm the URL, check the user is active in Setup → Users, then SSO/IdP assignment or a password reset via IT.',
      '🧩 A partner user seeing **"this feature isn\'t available in your region"** in CPQ is almost always missing a **CPQ licence (Group A)** — not a region problem. Never trust that error literally.',
      '🛡️ Business Support\'s own admin actions (force-closing a secondary opp, ARR overrides) need the **Business Support business role** in Salesforce — request it via /bigbrain in Slack if you don\'t have it.',
      '📍 Where to look: Setup → Users → the rep\'s profile, role, and permission set assignments.',
    ],
  },

  // ───────────────────────── Integrations ─────────────────────────
  {
    id: 'sfcpq-integrations',
    title: 'Integrations · Salesforce ↔ BigBrain & the BB ID',
    bullets: [
      '🔄 Salesforce and BigBrain sync both ways: BigBrain sends monday account data, signups, and lead scores daily; Salesforce syncs main entities and account profile data in real time / scheduled.',
      '🔗 The **BB ID** is the key that ties a Salesforce monday Account to its BigBrain account. A wrong or missing BB ID means the two systems disagree about what the customer has.',
      '⏱️ Sync lag is real: a change made in one system can take time to appear in the other. Check the last sync before assuming data is wrong.',
      '🧭 Reading a "not syncing" ticket: identify the source of truth (Salesforce for closed-won opps), check the record IDs on both sides, look for validation rules blocking the update.',
      '📍 Where to look: monday Account → BB ID field; BigBrain → account profile; integration logs for the record ID and last successful sync.',
    ],
    relatedPolicies: ['process-cancel-on-closed-lost'],
  },

  // ───────────────────────── Videos ─────────────────────────
  {
    id: 'sfcpq-video-library',
    title: '🎬 CPQ enablement video library',
    bullets: [
      '📺 Short walkthroughs from the CRO CPQ Enablement collection on Monday.all. Watch them in order during your first week — they show the clicks behind the concepts in this deck.',
      '🔗 Each video is also linked from the slide or ticket it explains, so you can jump to the right one when a ticket lands.',
    ],
    link: {
      label: 'Open the full folder on Monday.all →',
      url: 'https://mondayall.com/collection-viewer?collection=Escn4LouIbPDx3L4EKZX&folder=cro-cpq-enablement-1EVM5r',
    },
  },
];
