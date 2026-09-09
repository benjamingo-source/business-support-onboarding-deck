import type { OverviewSlide } from './overviewSlides';

export const salesforceCpqSlides: OverviewSlide[] = [
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
      '📋 Before starting, gather: client tier, required products/services, budget constraints, and contract duration preferences.',
    ],
  },
  {
    id: 'sfcpq-creation-app',
    title: 'The Creation App: starting an offer',
    bullets: [
      '📄 Choose the document type: Sales Order (formal, for signing), Quote (preliminary pricing), or Forecast.',
      '🎯 Opportunity Type drives everything — New Business, Expansion, Cross Sale, Downgrade, Flat Renewal, or Service — it determines pricing, products, and approvals.',
      '⚠️ Account Tier (Standard / Pro / Enterprise) is LOCKED after this step — double-check before proceeding.',
      '📅 Start date defaults to today; duration defaults to 24 months (12/36/custom via "Set End Date Manually?").',
      '🔀 "Perform Contract Merge" merges multiple contracts into one — the system auto-calculates the balance carryover; use "Simulate" to preview.',
      '🏷️ Proposal Name is internal only; the Expiration Date limits Deal Room visibility, but clients can still sign after it.',
    ],
  },
  {
    id: 'sfcpq-products',
    title: 'Product Selection & Configure Products',
    bullets: [
      '🛒 Pick products (work management, CRM, dev, service) — bundles can combine several products.',
      '🔢 In Configure Products set seats (Quantity) per product; best practice: adjust pricing later in the QLE, not here.',
      '🔄 Services auto-adjust to seat count; tick "Downgrade/Upgrade Services" to manually change hours or remove services.',
      '✅ Removing services needs no approval on deals ≤150 seats; package-level changes never need approval.',
      '💼 All services are paid — no free Champion Training hours, no free bronze Onboarding Support.',
      '⏱️ Key SKU limits: Implementation Packages 30–90h (+30h steps); Champion Training 10–20h WM/Service/Dev, 15–25h CRM; API training 10–30h.',
    ],
  },
  {
    id: 'sfcpq-qle',
    title: 'The Quote Line Editor (QLE)',
    bullets: [
      '📈 Total Added ARR recalculates with every product, quantity, or discount change — the QLE is where the deal is really priced.',
      '🎚️ The Discount Matrix Threshold is the max discount without approval; anything above shows in "% for Approval".',
      '💰 Seat volume discounts are cumulative: 0–99 seats → 7%, 100–249 → 12%, 250–499 → 15%, 500–999 → 20%, 1000+ → 25% (add ~3% for Pro→Enterprise upgrades). Multi-year: 7.7% (2yr) / 15.4% (3yr). Multi-product: 10–15%.',
      '↩️ Balance Carryover auto-pulls on New Contracts with an active existing contract — a negative refund line that can\'t be deleted, only managed via the line drawer (removal requires a reason).',
      '🧰 Upper buttons: Preview Approval (see approvers before submitting), Select Services / Apps / Add-Ons, Dealroom Glimpse, Save & Quit.',
      '🔁 CRITICAL habit: click "Calculate" often — and always before submitting.',
    ],
  },
  {
    id: 'sfcpq-submission',
    title: 'Submission: the guided flow & validation rules',
    bullets: [
      '🧭 The flow: Basic Information → Billing Entity → Marketing (Quotes only) → Legal (optional) → Finance → Submission → Finalization.',
      '🛑 Key validation rule: quotes must link to the account\'s most CURRENT contract. If it fires, you cannot proceed — click "Create new quote" in the message and rebuild.',
      '🤖 "Is NGO" is auto-detected from the account (reps no longer select it) — it decides which discount approval matrix applies.',
      '🏢 Billing Entity: view/edit addresses, create a new entity, or manage shipping — optional for Quotes, required for SOs.',
      '➗ Finance step: split payments per invoice (deals ≥6 months) or split to annual invoices (multi-year >15 months); "Add price language" toggles legal addendums.',
      '🗨️ The submission screen shows every approver — add comments to smooth approvals.',
    ],
  },
  {
    id: 'sfcpq-dealroom-mgmt',
    title: 'Deal Room & the CPQ Management App',
    bullets: [
      '🏠 The Deal Room is the client-facing hub: products, pricing, payment schedule, carryover breakdown, legal terms — and the client signs directly in it (SO PDF generated after signing).',
      '🛠️ CPQ Management App actions: Edit Quote, Submit, Set Primary, Manage Billing Entity, Preview Approvals, Publish/Un-publish the Deal Room, Extend Expiration, Convert Quote to SO.',
      '⚠️ Editing a quote that is "In Approval Process" forces a recall and RESETS the whole approval chain.',
      '⭐ Submitting a non-primary quote automatically makes it primary.',
      '✏️ "Edit Submission Form" changes Basic/Legal/Finance details without restarting — only the affected approval step re-triggers.',
    ],
  },
  {
    id: 'sfcpq-prorated-renewals',
    title: 'Pro-Rated Expansions, Renewals & Forecasts',
    bullets: [
      '🔗 Active contract? The system auto-sets Opportunity Type = Expansion and Contract Type = Pro-Rated; tier, end date, and duration lock to the existing contract.',
      '➕ Adding seats: enter the NEW TOTAL quantity (current + added), not just the added seats — the #1 source of confusion.',
      '🔁 Renewals: New Offer auto-detects it → Flat Renewal with Automatic quote generation; just click Next.',
      '👶 Baby CPQ (on the Opportunity page) builds quick forecasts from PPU + quantity, with real-time ARR; "Save Forecast" pushes it into the Management App list.',
      '🔮 Expanding future contracts is self-serve now — the "Expand Future Contract?" toggle in New Offer (undo via "Revert to Current Contract"). No more tickets for this!',
    ],
  },
  {
    id: 'sfcpq-approvals',
    title: 'The Approval Process & delegation',
    bullets: [
      '📨 Submission triggers approval requests via email (approve/reject inline) or Slack (view form only); pending SOs also live in the "Pending Approvals" tab in Salesforce.',
      '🧾 The Approval Form shows the approver everything: ARR, discount %, payment terms, products, current contract, account details, and growth charts.',
      '🪜 Sales (non-NGO) tiers by % over matrix: 0–15% → Team Lead, 16–35% → Group Lead, 36–50% → VP/GM, 51%+ → CRO.',
      '🕊️ NGO: 0–50% → Direct Manager, 50%+ → VP. Partners: 0–20% → CPM, 21–40% → Regional Director, 41%+ → VP.',
      '🧑‍💼 Approver going on leave? Delegation: avatar → CPQ Delegation → pick delegate + start/end dates.',
      '💡 Business Support angle: "Unable to find Approver for Rule ID" errors mean a manager ID field is missing — see the SO Approval Issues ticket in Deck 2.',
    ],
  },
  {
    id: 'sfcpq-special-deals',
    title: 'Special deal types: Service, Volume Discount, Corrections',
    bullets: [
      '🎯 Service Opportunity: Opportunity Type = Service exposes only service SKUs; product seat quantity auto-sets to 0; expand open projects via "Expand Open project service".',
      '🌊 Volume Discount: a pricing waterfall built in QLE (pencil icon → Discount Schedule Editor) — locked tiers, auto-prorated average seat price, auto-injected legal clause.',
      '🩹 Correction Opportunity: $0 ARR opp used after close for three things only — billing entity changes, SO signer changes, company name edits.',
      '💳 CC-to-Wire expansion: generate a new quote (≥1 year, total users) with a carryover line for amounts already paid by card.',
      '⛔ Rollout Plans are DEPRECATED — don\'t offer them on new deals; Finance handles edge cases.',
    ],
  },
  {
    id: 'sfcpq-addons-misc',
    title: 'Add-Ons, Certification & other need-to-knows',
    bullets: [
      '🧩 Add-on catalog: Premium Support, Automation Package, Canvas Enterprise, Guardian, Managed Services, monday Vibe, AI Credits, and more — added via QLE → Select Add-Ons.',
      '📏 Sales rule: add-on-ONLY deals are only allowed as a pro-rated change to an existing contract; on new/renewal deals add-ons must ship with product licenses.',
      '🎓 Certification: Wire Enterprise customers only; at submission, fill "Certification Admin Owner Email" — that person becomes the academy admin.',
      '📝 Save as Draft (on the Approver Overview screen) stores the offer without triggering approvals; submit later from Manage Existing Offers.',
      '🏦 Wire → CC: cancel the subscription in BigBrain first, then generate a payment link. CC → Wire at renewal: New Contract only.',
      '🤖 Stuck? ASK CPQ BOT answers any CPQ question, drawing on the full playbook.',
    ],
  },
  {
    id: 'sfcpq-ai-transformation',
    title: 'AI Transformation (May 2026): what changed in CPQ',
    bullets: [
      '🤖 monday.com is now AI-native: AI products AUTO-ADD to quotes when the account has Is AI Funnel = TRUE — reps don\'t add them manually.',
      '💳 Auto-added lines: work management seats + AI Credits at 800 credits per AI Work Platform Seat; the Enterprise bundle carries a 20,000-credit minimum (8K for SMB).',
      '🎚️ The "Account Should Use New AI Platform?" toggle in General Information is ON by default for AI Funnel accounts; the opt-out flow is DEPRECATED (Finance handles edge cases).',
      '🏷️ New Salesforce fields to know: Is_AI_Funnel__c (TRUE is permanent once paying), Is_AI_Disabled__c (read-only, daily sync), AI_Funnel_opt_Out_Reason__c.',
      '🚦 Important nuance for tickets: hiding AI in the account\'s admin panel does NOT remove the purchase obligation — platform toggle ≠ CPQ opt-out.',
    ],
  },
];
