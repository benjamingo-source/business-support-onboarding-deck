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
      '➕ Expansion — adding seats or products to an existing account with an active contract (created via the "Create Expansion Opportunity" button). Contract Type is set to Pro-Rated — the addition aligns to the existing contract\'s end date.',
      '    ↳ Cross Sale — a flavor of expansion: selling an additional product to an existing customer (e.g. CRM to a work management account). Also Pro-Rated.',
      '🔁 Flat Renewal — re-closing the existing contract at renewal time; auto-created against the renewal.',
      '📉 Downgrade — reducing seats or tier; auto-filled by the system, not manually created.',
      '🛠️ Service — a service-only deal (implementation, training); exposes only service SKUs, no product licenses.',
    ],
    relatedCategory: 'Opportunities',
  },
  {
    id: 'sfcpq-opp-lifecycle',
    title: 'Opportunities · Stages, locking & Correction Opportunities',
    bullets: [
      '📊 An opp moves through stages until it\'s **Closed Won** (deal done) or Closed Lost. Closing creates the Contract and triggers activation.',
      '🔒 Closed Won opps **lock on the 5th of the month after close** — closed in July, editable until August 5th. After that the SO can\'t be edited directly.',
      '🩹 A **Correction Opportunity** is a $0-ARR opp created from the **Post-Won Wizard** to fix invoicing details on a locked deal. Three use cases only: change Billing Entity, change Company Name, change SO Signer.',
      '📝 The rep clones the quote, gets it re-signed, uploads the signed SO, then closes the correction opp. Finance Billing is looped in for "Bill-to" changes.',
      '📍 Where to look: the stage bar at the top of the opp; the Post-Won Wizard and "Create Correction Opportunity" button appear once the opp is Closed Won.',
    ],
    relatedCategory: 'Opportunities',
    relatedTickets: ['locked-opportunity-edit'],
  },

  // ───────────────────────── Renewals & ARR ─────────────────────────
  {
    id: 'sfcpq-what-is-arr',
    title: 'Renewals & ARR · What is ARR and why everyone cares',
    bullets: [
      '📈 **ARR (Annual Recurring Revenue)** = price per user × 12 months × number of seats. It\'s how much a customer pays us per year, and the number the whole company is measured on.',
      '🎯 Reps have ARR **targets**. Every deal they close either counts toward their target or it doesn\'t — that\'s why ARR questions arrive as urgent tickets.',
      '🧩 On an opportunity you\'ll see three ARR fields: **Green Bucket ARR** (top of the opp — what counts), **Added / Expected ARR** (what the deal adds), and **Claimed ARR** (what the rep has claimed).',
      '🔄 Renewals protect existing ARR; expansions add new ARR. AMs are measured on **retention** — so a renewal booked as an expansion hurts their numbers even though the money is the same.',
      '📍 Where to look: the ARR box at the top of the opp, and the **Recognition Details** box on the monday Account.',
    ],
    relatedCategory: 'Renewals & ARR',
  },
  {
    id: 'sfcpq-arr-recognition',
    title: 'Renewals & ARR · ARR recognition & the Green Bucket',
    bullets: [
      '💰 **Recognition** = whether a deal counts toward the rep\'s target. A recognized opp is in the "Green Bucket"; an unrecognized one earns the rep nothing.',
      '📏 The **Recognition Threshold**: only Yearly / Multi-yearly **Pro or Enterprise** plans count, and account ARR must exceed **$7K** (or **$3.5K** for SMB and Product reps). Standard/Basic and monthly plans never count.',
      '✅ An opp is recognized if any of: the account is already recognized, OR the deal alone meets the threshold, OR account ARR + deal ARR together reach it.',
      '☑️ The system sets the **Is Recognized** checkbox automatically. When it should be checked but isn\'t, Business Support can override it — always with the ticket link in "Is Recognized – Override Reason".',
      '🚩 If the threshold logic looks wrong for a whole segment (not one deal), that\'s a config issue for RevOps — don\'t override deal by deal.',
      '📍 Where to look: opportunity → **Admin section** → Is Recognized + Override Reason; monday Account → Recognition Details.',
    ],
    relatedCategory: 'Renewals & ARR',
    relatedTickets: ['arr-recognition-not-green-bucket'],
  },
  {
    id: 'sfcpq-renewals',
    title: 'Renewals & ARR · Renewals vs expansions',
    bullets: [
      '🔁 A **Renewal opp** re-closes an existing contract for the next term. It\'s auto-created against the contract — there should be exactly **one renewal opp per contract year**.',
      '➕ An **Expansion opp** adds seats or products mid-contract (pro-rated to the existing end date). It does not replace the renewal.',
      '⚠️ The recurring mistake: reps close the renewal as an expansion or new business. The customer pays, but the ARR lands in the wrong bucket and the AM loses retention credit.',
      '🛠️ The fix lives in the Inspector: set **Type** and **Type Auto Filled** to the renewal value, set **Renewal Creation Source** = "Manual Creation from Source Contract", close as Won, link the Contract to the new renewal opp, delete the leftover open renewal.',
      '📍 Where to look: opp → Type & Contract Type fields; Contract → linked opportunities; the open renewal opp on the account.',
    ],
    relatedCategory: 'Renewals & ARR',
    relatedTickets: ['expansion-closed-as-renewal', 'renewal-arr-wrong'],
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
      '📍 Where to look: payment method on the monday Account in BigBrain; on the opp, whether a CPQ quote/SO exists (Wire) or the "Claim Credit Card Payments" component shows payments (CC).',
    ],
    relatedCategory: 'Billing',
  },
  {
    id: 'sfcpq-cc-claims',
    title: 'Billing · CC claims: what they are & where to find them',
    bullets: [
      '🙋 A **CC claim** is how a rep says "I was responsible for this credit-card payment — count it toward my ARR." Wire deals are auto-claimed; CC payments must be claimed manually.',
      '🖱️ Where: on the opportunity → **Claim Credit Card Payments** component → tick the payments → Save. Total ARR Claimed updates underneath.',
      '⏳ Two windows apply: the payment must be within **6 months**, and within the rep\'s **Ownership Claim Eligibility** window — the date from which they were the account owner.',
      '❌ "Not within the account owner claim eligibility timeframe" means the monday Account (and therefore the eligibility date) was created **after** the customer already paid — common when reps convert the lead late.',
      '✅ Business Support fix: get proof the rep was in contact with the customer on/before the claim date → update the **Ownership Claim Eligibility Date** on the monday Account → link the proof to the ticket.',
      '📍 Where to look: opp → Claim Credit Card Payments; monday Account → Recognition Details → Ownership Claim Eligibility Date.',
    ],
    relatedCategory: 'Billing',
    relatedTickets: ['cant-claim-cc-payment'],
  },
  {
    id: 'sfcpq-billing-entity',
    title: 'Billing · Billing entities, invoices & activation',
    bullets: [
      '🏢 The **Billing Entity** holds the legal "Bill-to" details used to generate the Sales Order and invoice. A **Shipping Entity** ("Sold-to") can differ if a third party pays.',
      '⚙️ Set before SO creation via the Billing Entity app. If tax info changes on an existing entity, **Finance** must make the change; otherwise a new entity can simply be created.',
      '🧾 Invoices, payment failures, and account holds are owned by **Finance** — Business Support confirms the account standing and routes; we don\'t edit invoices.',
      '🚀 **Activation** closes the loop: Wire deals activate via Import SO; add-ons (Premium Support, AI Credits…) are sold in CPQ but **activate in BigBrain**. Verify under the BB account profile.',
      '📍 Where to look: opp → Billing Entity; BigBrain → account subscription, seats, tier, add-ons; Salesforce yellow "Activation Scheduled" banner.',
    ],
    relatedCategory: 'Billing',
    relatedTickets: ['billing-invoice'],
  },

  // ───────────────────────── CPQ Errors ─────────────────────────
  {
    id: 'sfcpq-quote-lifecycle',
    title: 'CPQ Errors · The quote lifecycle',
    bullets: [
      '1️⃣ **Quote built** in the Quote Line Editor (QLE) — products, seats, tier, discounts. Total Added ARR recalculates live.',
      '2️⃣ **Submitted** through the guided flow: Basic Info → Billing Entity → Legal → Finance → Submission. Validation rules run here (e.g. the quote must link to the account\'s **current contract**).',
      '3️⃣ **Approvals** — if the discount exceeds the matrix, the quote routes through the manager chain. Editing a quote mid-approval recalls it and **resets the chain**.',
      '4️⃣ **Sales Order signed** by the customer in the **Deal Room**; a signed PDF is generated.',
      '5️⃣ **Closed Won** → Contract and CPQ Subscriptions created → activation.',
      '📍 Where to look: opp → **CPQ Management** tab lists every quote, its approval status, and which is Primary. "Preview Approvals" shows who\'s pending.',
    ],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['cpq-quote-error'],
  },
  {
    id: 'sfcpq-approvals',
    title: 'CPQ Errors · Approval rules & manager IDs',
    bullets: [
      '🪜 Discounts route through **approval rules** — each rule points to an **Approver Field** on the quote (Direct / Second / Third / Fourth Level Manager) that must hold a user ID.',
      '🚨 "Unable to find Approver for Rule ID: a6W…" means the field that rule points at is **empty**. The Rule ID in the error tells you which one.',
      '🔎 Paste the Rule ID into Salesforce search → it opens the Approval Rule → read the Approver Field name → open the quote in the **Inspector** → find that field.',
      '🧭 Empty? Go to the rep who owns the Sales Order → walk up their manager hierarchy → fill in the right user ID → rep resubmits.',
      '🧑‍💼 Approver on leave? **CPQ Delegation** (avatar → CPQ Delegation → delegate + dates). Approval tiers by discount %: **(check with team)**.',
      '📍 Where to look: CPQ Management → Preview Approvals; the "Pending Approvals" tab in Salesforce; quote Inspector → manager fields.',
    ],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['cpq-missing-manager-id'],
  },
  {
    id: 'sfcpq-contracts',
    title: 'CPQ Errors · Contracts & CPQ Subscriptions',
    bullets: [
      '📜 A **Contract** is created automatically on Close Won and is defined by its end date. Under it hang **CPQ Subscriptions** — the actual products and seats the customer has.',
      '🏢 The Contract\'s **Account Name must be the Company Account**, not a monday Account. If it points at a monday Account, reps can\'t create expansion opps ("…because you are not the account owner").',
      '🔁 If a rep reopens a Closed Won opp and closes it again, CPQ tries to recreate subscriptions that already exist → "DUPLICATE_VALUE… Uniqe_Key__c". It\'s a defence mechanism — ask why the opp was reopened.',
      '🛠️ Fixes: delete the CPQ Subscriptions on the Contract so they recreate cleanly; or in the Inspector toggle **Migrate to CPQ Contract** False → True if subscriptions never appeared.',
      '📍 Where to look: Contract → Contract Information → Account Name; Contract → CPQ Subscriptions section.',
    ],
    relatedCategory: 'CPQ Errors',
    relatedTickets: ['close-won-unique-key-duplicate', 'expansion-opp-not-owner'],
  },
  {
    id: 'sfcpq-inspector',
    title: 'CPQ Errors · The Inspector: our field-level power tool',
    bullets: [
      '🔍 The Inspector exposes every field on a record — including ones hidden from the standard layout. It\'s where most Business Support fixes actually happen.',
      '🛠️ Fields you\'ll touch most: **Type** and **Type Auto Filled**, **Renewal Creation Source**, **Migrate to CPQ Contract**, and the **manager ID fields** on quotes.',
      '⚠️ Rule 1: only edit what the playbook or a teammate confirmed — Inspector edits change live data with no undo.',
      '📝 Rule 2: document every change (old value, new value, why) in the ticket.',
      '🔒 Rule 3: if the opp is locked, unlock first — and close/relock when done.',
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
      '📍 Where to look: Setup → Users → the rep\'s profile, role, and permission set assignments.',
    ],
    relatedCategory: 'Access',
    relatedTickets: ['sf-login-failed', 'permission-denied'],
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
    relatedCategory: 'Integrations',
    relatedTickets: ['opp-not-syncing'],
  },
];
