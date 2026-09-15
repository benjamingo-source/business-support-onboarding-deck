export type PlaybookTicket = {
  id: string;
  category: string;
  issue: string;
  errorMessage: string;
  reason: string;
  resolution: string[];
  image?: string;
  /** Extra screenshots shown under the resolution steps. */
  resolutionImages?: string[];
};

export const ticketPlaybook: PlaybookTicket[] = [
  {
    id: 'cpq-quote-error',
    category: 'Quoting',
    issue: 'Quote fails to generate in CPQ',
    errorMessage: 'CPQ Quote Error: No valid price found for product / Required field missing',
    reason:
      'Product not on the price book, missing required quote fields, or account region does not match available price rules.',
    resolution: [
      'Open the opportunity and confirm price book and currency match the account.',
      'Verify all required quote fields (billing country, term, payment terms).',
      'Check product entitlements and whether the SKU is active on the price book.',
      'Re-sync the quote; if still failing, capture the full error and escalate to CPQ admin.',
    ],
  },
  {
    id: 'quote-dealroom-link-not-loading',
    category: 'Quoting',
    issue: 'Deal Room / SO link not loading or showing an error — even though the quote is approved',
    errorMessage:
      'Deal room link not loading for approved quote / Dealroom showing error even though approved / "Oops, there\'s nothing there!" / Apex Error — no dealroom created',
    reason:
      'The Deal Room is only created when a quote is submitted and published. Most "broken link" tickets are one of: the offer was approved but never published (still a draft), the rep is opening a link to a non-primary or superseded quote, the quote expired (Expiration Date passed — Deal Room hides, though the customer can still sign), or the quote was edited after approval which recalled it. A true "Apex Error — no dealroom created" is a system failure.',
    resolution: [
      'Ask for the quote number and open the opp → CPQ Management tab. Check the quote\'s Approval Status and whether it is marked Primary.',
      'Not published: use "Publish Offer" on the CPQ Management tab — the Deal Room goes live immediately. Approved ≠ published.',
      'Wrong quote: if the rep is sharing a link to a non-primary or older quote, point them to the Deal Room link on the Primary quote (or Set Primary on the right one).',
    ],
  },
  {
    id: 'quote-discount-not-applying',
    category: 'Quoting',
    issue: 'Discount not applying on the quote — NGO/NPO discount missing, requested % not accepted, or approval % looks wrong',
    errorMessage: 'N/A — rep reports "NPO account renewal not logging discount", "cannot update discount in SO", or "% for approval seems too high"',
    reason:
      'Discounts in CPQ come from three places: the automatic discount matrix (seat volume, multi-year, multi-product), the NGO matrix (applied only when the account is flagged as NGO), and manual line discounts in the QLE. "Is NGO" is now auto-detected from the account\'s customer type — reps no longer tick it — so if the account isn\'t flagged NGO, the NGO discount silently doesn\'t apply. Any discount above the matrix threshold shows in "% for Approval" and routes for approval rather than being rejected.',
    resolution: [
      'Open the quote in the QLE and read the Discount Matrix Threshold and "% for Approval" — this tells you what CPQ thinks the allowed discount is and how much is over.',
      'NGO/NPO discount missing: check the account\'s customer type in Salesforce. If it isn\'t set to NGO, the NGO matrix won\'t apply — the account record needs correcting first (route to the account owner / RevOps if the classification is disputed), then the rep recalculates.',
      'Manual discount not saving: in the QLE line drawer, apply the discount as a % or fixed amount on the line, then click "Calculate". Discounts don\'t persist until Calculate runs.',
      'Service discounts: default monday.com service discounts (e.g. 50% on WM Implementation) are excluded from the threshold calculation; to override, use the line drawer → "Set Service Discount".',
      'Requested % is above the matrix: that is expected — it doesn\'t block the quote, it routes to approval. Show the rep "Preview Approval" so they know who will need to sign off.',
      'At submission, make sure the rep picks the right Discount Reason(s) in Basic Information — multiple can be selected.',
    ],
  },
  {
    id: 'quote-volume-discount-setup',
    category: 'Quoting',
    issue: 'Rep needs a volume / tiered seat discount on the quote and doesn\'t know how to build it',
    errorMessage: 'N/A — "Creating volume tiered discount", "how do I set tier pricing on this SO"',
    reason:
      'Volume Discount in CPQ is a pre-built pricing waterfall: locked tiers with a fixed net price per seat at each band, auto-prorated when the quantity crosses a tier, plus a standard legal clause injected into the SO. Reps rarely build one, so they don\'t know where the Discount Schedule Editor lives or what fields are mandatory.',
    resolution: [
      'In the QLE, click the pencil icon next to the product SKU → this opens the Discount Schedule Editor.',
      'Fill the mandatory fields: Schedule Name (format "<Product> – <Edition>"), Discount Unit = Price (fixed net price per seat), and at least one Tier with Name, Lower/Upper Bounds, and Net Price (USD).',
      'Add further tiers as needed. When the seat quantity crosses a tier boundary, CPQ prorates the average seat price across all applicable tiers automatically.',
      'At submission → Basic Information, set Discount Reason = "Seat Volumes Discount". The Finance tab will auto-tick "Add price language" and the Volume Discount plan.',
      'Choose the legal clause: "Not Including Renewal" (initial term only) or "Including Renewal" (locks the price — then pick the Renewal Terms, e.g. first renewal / first two).',
      'Preview the auto-injected clause via Dealroom Preview before the rep sends it to the customer.',
    ],
  },
  {
    id: 'quote-change-dates-term',
    category: 'Quoting',
    issue: 'Rep needs to change the start date, end date, or term on a quote or SO',
    errorMessage: 'N/A — "Requesting assistance with updating start date on quote", "Activation dates incorrect", "Subscription End Date doesn\'t match"',
    reason:
      'Dates behave differently by contract type. On New Contract quotes, Start Date and Duration are editable in the QLE (End Date is derived). On Pro-Rated quotes, End Date and Duration are locked to the existing contract — only the Start Date can move, and it won\'t change the end date. Once an SO is signed and the opp is Closed Won, the Close Date becomes the Subscription Start Date and dates can\'t be edited on the quote.',
    resolution: [
      'Confirm the quote\'s Contract Type and whether the opp is still open.',
      'Open quote, New Contract: in the QLE Quote Information section, edit Start Date and Duration (12 / 24 / 36 / custom via "Set End Date Manually?"). Click Calculate — Total Added ARR recalculates.',
      'Open quote, Pro-Rated: only the Start Date is editable; End Date and Duration inherit from the existing contract by design. If the rep needs a different end date, that\'s a New Contract, not a pro-rated expansion.',
      'Future contract: if the account has a future renewal or pro-rated contract, the start date must be on or after that contract\'s start — use the "Expand Future Contract?" toggle in New Offer.',
      'Closed Won / signed SO: dates can no longer be edited on the quote. Activation dates are set in BigBrain at activation (Import SO) — mismatches after close go to Billing Dev with the SO number.',
      'Remind the rep: Close Date = Subscription Start Date. Closing early or late shifts the subscription.',
    ],
  },
  {
    id: 'quote-change-currency',
    category: 'Quoting',
    issue: 'Quote or CC claim currency doesn\'t match the opportunity currency — rep needs to change the deal currency',
    errorMessage:
      'Please ensure the CC claim currency matches the opportunity currency. If not, update the currency accordingly.',
    reason:
      'The opportunity was created in one currency (e.g. USD) but the customer paid or is being quoted in another (e.g. EUR). CPQ and the CC claim component both require the opp currency to match, so the rep needs to run the Currency Change Wizard.',
    resolution: [
      'Direct the rep to opp → CPQ Management → "Change Currency" — this opens the Currency Change Wizard.',
      'If a CC claim already exists on the deal, the rep must unclaim it first, then run the wizard, then re-claim in the new currency.',
      'If CPQ quotes already exist, the wizard warns they become unavailable after the change — the rep rebuilds the quote in the new currency.',
      'If only forecast quotes exist, the wizard lets the rep update the currency directly from the existing component.',
      'If the deal has already synced to Priority (i.e. it has been invoiced), the wizard cannot be used — loop in Finance Billing. **(check with team)** for the manual steps in that case.',
    ],
  },
  {
    id: 'renewal-arr-wrong',
    category: 'Renewals & ARR',
    issue: 'Renewal ARR or attainment looks incorrect',
    errorMessage: 'No baseline found / Recognition date missing / Attainment does not match expected',
    reason:
      'Baseline contract not linked, recognition date not set on close, Wire vs CC path differs, or target assignment does not match the opportunity owner.',
    resolution: [
      'Pull opportunity, contract, quote, and target records for the renewal period.',
      'Verify baseline contract, recognition date, and renewed ARR fields on the opportunity.',
      'Check whether the deal is Wire or CC — calculation paths differ.',
      'If data looks correct but attainment is wrong, escalate to RevOps with record IDs.',
    ],
  },
  {
    id: 'billing-invoice',
    category: 'Billing',
    issue: 'Customer invoice or payment method issue blocking renewal',
    errorMessage: 'Payment failed / Invoice overdue / Cannot update billing contact',
    reason:
      'Expired card, billing contact out of date, or finance hold on the account. Sales often sees this at quote-to-cash handoff.',
    resolution: [
      'Confirm account standing in billing system and any open invoices.',
      'Verify billing contact email and payment method on file.',
      'Route payment updates to Finance or the customer success billing queue.',
      'Document whether the renewal can proceed with a temporary exception.',
    ],
  },

  {
    id: 'expansion-opp-not-owner',
    category: 'Opportunities',
    issue: 'Rep is unable to create an expansion opportunity via the "create expansion opportunity" button',
    errorMessage:
      'Opportunity failed to be created for the following reason: Opportunity creation failed: Insert failed. First exception on row 0; first error: FIELD_CUSTOM_VALIDATION_EXCEPTION, You cannot create an opportunity for this account because you are not the account owner: []. Please open a ticket to business support and attach a screenshot.',
    reason:
      'Account name under the current contract is connected to the Monday Account when it should be connected to the Company Account.',
    resolution: [
      'Navigate to the Current Contract record.',
      'Check the Account Name in the Contract Information field.',
      'If a Monday Account is linked instead of a Company Account, change it to the correct Company Name.',
      'The correct Company Name can be found on the Monday Account page.',
    ],
    image: 'https://drive.google.com/thumbnail?id=16D2WlXX2G4G87MArdiG_2ucq8fby3_Oy&sz=w1000',
  },
  {
    id: 'cant-claim-cc-payment',
    category: 'Billing',
    issue: "Rep is unable to claim a credit card payment because the account's Ownership Claim Eligibility Date falls after the date the purchase actually occurred",
    errorMessage:
      'Not within the account owner claim eligibility timeframe',
    reason:
      'The eligibility date populates when the monday account is created, but reps often don\'t convert the lead or create the account until after the customer has already purchased — leaving the eligibility date later than the actual sale.',
    resolution: [
      'Check if proof of communication is attached to the ticket or opportunity.',
      'If not, request evidence the rep was in contact with the customer on or before the claim date, within a 3-month window (e.g., for a July 10, 2026 claim, communication must be dated on or before July 10, 2026).',
      'If confirmed, update the eligibility date and link the proof to the ticket.',
    ],
    image: 'https://drive.google.com/thumbnail?id=1YcNe5SuE-l3KY9KoPEqgHuqImQ8rRv88&sz=w1000',
  },
  {
    id: 'change-account-owner',
    category: 'Opportunities',
    issue: 'Change account ownership from an accounts pool or a rep to a new rep',
    errorMessage: 'N/A — rep submits a ticket requesting an account owner change, usually because they cannot create an opportunity on an account they do not own',
    reason:
      'Reps are typically trying to create an opportunity but are blocked because they are not the account owner. Account ownership may be sitting in a pool or with another rep.',
    resolution: [
      'If the account is owned by a rep, tag the rep and their manager on the ticket for approval, along with the relevant RevOps business partner (check the BizLounge routing doc — the Global RevOps ticket will specify who to tag).',
      'Wait for approval from all required parties.',
      'Once approved, go to the Company page in Salesforce.',
      'Select "Change Company Owner" and enter the new rep\'s name.',
      'Add the ticket link in the description field for audit trail.',
      'The ownership change will automatically trickle down to all monday accounts linked under that company.',
    ],
  },
  {
    id: 'expansion-opp-no-active-contract',
    category: 'Opportunities',
    issue: 'Can\'t create expansion opp — "account does not have an active contract" / only New Contract is offered',
    errorMessage:
      'Unable to create expansion opp on account because "account does not have an active contract" — or the Creation App only allows Contract Type = New Contract',
    reason:
      'An Expansion (pro-rated) opp requires an active, unexpired Contract on the account. If the contract has expired, was never created (e.g. Close Won without contract migration), sits on a different monday Account, or is a CC subscription with no CPQ contract, the system sees no active contract and falls back to New Contract.',
    resolution: [
      'Open the monday Account → Contracts. Check whether a Contract exists, its end date (must be in the future), and that the Account Name on it is the Company Account.',
      'Contract expired: the rep should create a Renewal (or New Contract) opp instead — an expansion can\'t attach to an expired contract.',
      'Contract missing after a Close Won: open the closed opp → Inspector → check "Migrate to CPQ Contract"; toggle False → True to generate the contract, then retry.',
      'Contract exists on a sibling monday Account: the rep may be on the wrong account in the hierarchy — point them to the account that holds the contract.',
      'CC-paid account with no CPQ contract: expansions must go through a New Contract quote (CC → Wire path) — there\'s nothing to pro-rate against.',
      'Multiple contracts on the account: the "Create Expansion Opportunity" flow lets the rep pick which contract to expand — make sure they select the active one.',
    ],
    image: 'https://drive.google.com/thumbnail?id=1cegKvPurc0kS_7LU5ZYBL5Xf8t6ecwHl&sz=w1000',
  },
  {
    id: 'locked-opportunity-edit',
    category: 'Opportunities',
    issue: 'SO Post Won Changes — Correction Opportunity',
    errorMessage: 'See screenshot below',
    image: 'https://drive.google.com/thumbnail?id=1EUFQpml79hIJg6JafkoduNwj3nkwzOP7&sz=w1000',
    reason:
      'Opportunities lock on the 5th of the month following close (e.g. a deal closed in July locks after August 5th). If the rep needs to edit the billing entity (most common), company name, or SO Signer after the lock date, they must go through the Correction Opportunity process. Correction opportunities carry 0 ARR and exist solely for finance and invoicing purposes.',
    resolution: [
      'Direct the rep to the Post-Won Wizard and have them select the relevant correction type: Change Billing Entity, Change Company Name, or Change SO Signer.',
      'The wizard provides detailed step-by-step instructions for them to follow.',
      'If the billing entity needs to be changed, loop in Finance Billing — they will assist with updating the "Bill-to" details.',
      'The rep must clone the quote (this is critical — do not skip this step).',
      'The cloned quote needs to be signed again and the signed SO uploaded.',
      'Once the signed SO is uploaded, the rep can close the correction opportunity as Closed Won.',
      'Reminder: correction opportunities carry 0 ARR and have no impact on attainment — they are for finance and invoicing only.',
    ],
  },
  {
    id: 'arr-recognition-not-green-bucket',
    category: 'Renewals & ARR',
    issue: 'ARR Recognition — "Is Recognized" unchecked: deal should be recognized but rep says the opp isn\'t counting as Added ARR',
    errorMessage: 'N/A — rep reports the opportunity is not counting toward Added ARR / not appearing as Green Bucket',
    reason:
      'System did not auto-flag the deal for recognition. Common causes: deal + account ARR below the recognition threshold; excluded plan (Standard, Basic, Monthly, or Downgrade); missing or wrong threshold assignment; nothing claimed on close so ARR calculated as $0; account already recognized as Green Bucket.',
    resolution: [
      'Confirm the deal should be recognized — check it meets the threshold or qualifies as a valid exception (e.g. approved comp, data lag after claim, threshold config issue).',
      'On the opportunity, open the Admin section.',
      'Check the "Is Recognized" checkbox.',
      'In the "Is Recognized — Override Reason" field, paste the Business Lounge / ticket link and a short note explaining why the override was needed.',
      'Save and confirm Green Bucket ARR has populated and the rep sees credit on their target if applicable.',
      'If the threshold config looks wrong (the deal clearly qualifies but the system will never auto-recognize it), escalate to RevOps — do not override without documenting the ticket.',
    ],
    image: 'https://drive.google.com/thumbnail?id=1FHNV3ZJoqabRmCcmHSKDLdMdo3Ku1wn2&sz=w1000',
  },
  {
    id: 'arr-split-between-reps',
    category: 'Renewals & ARR',
    issue: 'ARR Split — rep or manager asks for the ARR on an opportunity to be split between two reps',
    errorMessage: 'N/A — request arrives as "Please split the ARR 50/50 with [rep]" or "ARR split request for expansion on renewal"',
    reason:
      'Two reps worked the deal (e.g. an AE and an AM, or an expansion on a renewal), and only one is the opportunity owner. Salesforce credits 100% of the ARR to the owner unless an Opportunity Split is set up, so the second rep gets no attainment for their share. Splits are configured on the opportunity — reps can\'t do it themselves.',
    resolution: [
      'Open the opportunity in Salesforce.',
      'Click the "More" tab → "Splits" → "Edit Opportunity Splits".',
      'Add the second rep as a team member and set their role — AE or AM — to match how they worked the deal.',
      'Enter the split percentage for each rep so the total equals 100%.',
      'If the requested percentage isn\'t in the dropdown: go to the Related Lists on the opportunity → "Opportunity Split" → "Edit Opportunity Splits" → enter the exact percentage and team member there.',
      'Return to "More" → "Splits" and set the second rep\'s split type to "Assisting AE" or "Assisting AM" as appropriate.',
      'Save, then confirm on the opportunity that both reps now show with the correct percentages. Note the requester (rep or manager) and the agreed split in the ticket.',
    ],
    resolutionImages: [
      'https://drive.google.com/thumbnail?id=1cxEBTn77nb4Q56hwsT9Co3M4fOdZcG5f&sz=w1000',
      'https://drive.google.com/thumbnail?id=1GzXEAsDvZNu60DN8wYoFY5F6G3KGshhd&sz=w1000',
    ],
  },
  {
    id: 'expansion-closed-as-renewal',
    category: 'Renewals & ARR',
    issue: 'Rep closed an Expansion or New Business opportunity when it should have been a Renewal — please change to a Renewal opp',
    errorMessage: 'N/A — rep or AM submits a ticket requesting the opp type be corrected',
    reason:
      'Reps are incorrectly closing renewals as expansion or new business opportunities in Salesforce instead of using the dedicated renewal opp. AMs are measured on retention and need the ARR recorded as renewed, not expanded. This has been flagged internally — on the Business Support side, the process is to update the expansion/new biz opp in the backend and ensure it is linked to the correct contract. Open renewal opps that were bypassed can be churned or deleted.',
    resolution: [
      'Unlock the opportunity if it is locked.',
      'Reopen the opportunity.',
      'Go into Inspector and change the "Type Auto Filled" field to the correct renewal value.',
      'Change the "Type" field to the correct renewal value.',
      'Change the "Renewal Creation Source" field to "Manual Creation from Source Contract".',
      'Change the stage to Closed Won.',
      'Go to the Contract and link the correct opportunity (the new renewal opp).',
      'Delete the existing open renewal opp to avoid duplicates — there should only be one renewal opp per year for an account.',
    ],
  },
  {
    id: 'cpq-missing-manager-id',
    category: 'CPQ Errors',
    issue: 'SO Approval Issues',
    errorMessage:
      'An Apex error occurred: sbaa.ApprovalTreeProcessor.ApprovalException: Unable to find Approver for Rule ID: [ID]',
    reason:
      'When a sales order is submitted, it passes through a chain of approvals (direct manager, second level, third level, fourth level). If any manager ID field in the approval chain is blank, Salesforce cannot route the approval and throws this error. The Rule ID in the error message points to exactly which manager is missing.',
    resolution: [
      'Copy the Rule ID from the error message and paste it into Salesforce to identify which approval rule is affected.',
      'If it opens an Approval Rule object (see View Approval Rules), check what is in the "Approver Field" field — for example: Third_Level_Manager__c.',
      'Go back to the relevant Quote → Inspector → find the relevant field from the previous step (e.g. Third_Level_Manager__c).',
      'Click on the user ID in that field to open the user page and confirm the correct manager is assigned.',
      'If the field is empty, navigate to the rep who owns the sales order and click through their manager hierarchy to find the correct ID, then fill it in.',
      'Have the rep resubmit the sales order for approval.',
    ],
    image: 'https://drive.google.com/thumbnail?id=1-7KoaitCCBfGpL2iEzchgDSfSL4MYx_B&sz=w1000',
  },
  {
    id: 'cpq-quote-not-linked-current-contract',
    category: 'CPQ Errors',
    issue: 'Rep cannot submit a quote — validation says it is not linked to the current contract',
    errorMessage:
      'This validation rule ensures that quotes are linked to the most current contract for your accounts. You cannot proceed with the submission — create a new quote.',
    reason:
      'The quote was built against an older contract (often started before a renewal or another SO closed on the same account). CPQ requires every quote to link to the account\'s most current contract, so the stale quote is blocked at submission.',
    resolution: [
      'Confirm on the Contract that a newer contract now exists for the account (check end dates — the most recent one is "current").',
      'The stale quote cannot be fixed — the rep must click "Create new quote" in the validation message and rebuild the offer from scratch against the current contract.',
      'If the rep believes the newer contract was created in error, check the Contract → CPQ Subscriptions and linked opportunities before advising; escalate to CPQ Tech if two contracts look duplicated.',
      'Remind the rep: Save as Draft exists on the Approver Overview screen if they need to pause before submitting.',
    ],
  },
  {
    id: 'cpq-quote-stuck-in-approval',
    category: 'CPQ Errors',
    issue: 'Quote is stuck "In Approval Process" — rep does not know who is blocking it',
    errorMessage: 'N/A — quote shows Approval Status = In Approval Process on the CPQ Management tab',
    reason:
      'The quote exceeded the discount matrix and is waiting on one or more approvers who have not acted. Sometimes the approver never received the notification, is out of office, or the rep edited the quote mid-approval which recalled and reset the chain.',
    resolution: [
      'Open the opp → CPQ Management tab → find the quote → "Preview Approvals" to see the full chain and which step is pending.',
      'Check the "Pending Approvals" tab in Salesforce to confirm the request is sitting with the approver.',
      'If the approver is out of office, ask them or their manager to set up CPQ Delegation (avatar → CPQ Delegation → delegate + start/end dates) so the request re-routes.',
      'Warn the rep NOT to edit the quote while it is in approval — editing recalls it and resets the whole chain.',
      'If a step needs changing (e.g. wrong comment or payment terms), use "Edit Submission Form" on the Management tab — only the affected approval step re-triggers.',
    ],
  },
  {
    id: 'cpq-prorated-wrong-quantity',
    category: 'CPQ Errors',
    issue: 'Pro-rated expansion quote shows the wrong seat count or ARR',
    errorMessage: 'N/A — rep reports the Added ARR or seat quantity on the expansion quote looks wrong',
    reason:
      'On pro-rated expansions the rep must enter the NEW TOTAL quantity (current seats + added seats) in Reconfigure Line — not just the seats being added. Entering only the delta under-counts, entering it twice over-counts. Balance carryover lines can also confuse the ARR total.',
    resolution: [
      'Open the quote in the QLE and check the quantity on the product line against the current contract seats + the seats the rep wants to add.',
      'If the rep entered only the added seats, have them Reconfigure Line and enter the new total quantity.',
      'Check for a Balance Carryover line (negative quantity refund line) — it is expected on New Contract quotes with an active contract and can be managed via the line drawer if the amount or currency is wrong.',
      'Have the rep click "Calculate" and confirm Total Added ARR updates before resubmitting.',
      '**(check with team)** — confirm whether Business Support edits quantities directly or always hands back to the rep.',
    ],
  },
  {
    id: 'cpq-split-subscriptions',
    category: 'CPQ Errors',
    issue: 'Contract shows split subscriptions (e.g. 30 + 20) instead of one subscription for the full seat count (50)',
    errorMessage:
      'N/A — the Contract\'s CPQ Subscriptions section lists two or more subscription lines for the same product whose quantities add up to the account\'s actual seats',
    reason:
      'The CPQ Subscriptions were built in pieces — usually because seats were added in a separate event (pro-rated expansion, reopened opp, manual change) and the migration to the CPQ contract did not consolidate them. The account is correct in BigBrain (one plan, 50 seats), but Salesforce represents it as two subscriptions, which breaks downstream quotes and renewal calculations.',
    resolution: [
      'Open the Contract → CPQ Subscriptions section and confirm the split: multiple lines for the same product whose quantities sum to the real seat count (verify the real count in BigBrain).',
      'Delete the split CPQ Subscription records on the Contract.',
      'Open the Contract in the Inspector and set "Migrate to CPQ Contract" from True → False, save.',
      'Set "Migrate to CPQ Contract" back from False → True, save — this rebuilds the subscriptions from the Contract Products.',
      'Refresh the Contract and confirm a single subscription now shows the full seat count (e.g. one line for 50).',
      'Document the before/after in the ticket and let the rep know they can proceed with their quote or renewal.',
    ],
  },
  {
    id: 'cpq-services-line-items',
    category: 'CPQ Errors',
    issue: 'Managed Services / CSM / Implementation line items won\'t add, remove, or save ("CSM mismatch", "cannot remove implementation line")',
    errorMessage:
      'Unable to save quote due to CSM mismatch / High Touch CSM not populating / Cannot remove implementation line item',
    reason:
      'Services in CPQ are tied to seat count and tier. Package-level services (Implementation, Champion Training) auto-adjust when seats change and are locked behind the "Downgrade/Upgrade Services" checkbox; account-level services (Managed Services, Tailored Services) are added separately via "Select Services". CSM packages are calculated from company size and seats — if the quote\'s seats cross a High Touch threshold, the CSM line must match or the quote won\'t save. Most of these tickets are reps not knowing which checkbox or button controls the line.',
    resolution: [
      'Ask for the quote number and open it in the QLE. Identify whether the line is package-level (Implementation / Champion Training / API training) or account-level (Managed / Tailored Services).',
      'To change or remove a package-level service: Reconfigure Line → tick "Downgrade/Upgrade Services" → adjust hours or untick the service. No approval is needed on deals ≤150 seats.',
      'To add Managed or Tailored Services: use the "Select Services" button in the QLE upper menu — not Reconfigure Line. Managed Services come in 10/20/40h; Tailored Services 10–10,000h.',
      'CSM mismatch: check the account\'s company size and the quote\'s seat count against the CSM eligibility thresholds (Silver: 250+ employees, 50–149 seats; Gold: 250+ employees, 150+ seats). Make the CSM line match the tier the seats qualify for, then Calculate and save.',
      'To extend an existing project (add hours), use "Expand Open project service" rather than adding a new package.',
      'Remind the rep: all services are paid — there are no free Champion Training hours or free bronze onboarding. **(check with team)** on current CSM thresholds.',
    ],
  },
  {
    id: 'cpq-balance-carryover',
    category: 'CPQ Errors',
    issue: 'Balance carryover (BCO) missing, incorrect, or can\'t be removed from the quote',
    errorMessage:
      'N/A — rep reports "CPQ not showing balance carryover", "Incorrect Balance Carryover", or "unable to submit quote even after removing BCO"',
    reason:
      'Balance Carryover auto-pulls only when Contract Type = New Contract AND the customer has an active, unexpired contract. It appears as a negative-quantity refund line that cannot be deleted like a normal line. It will be missing if the contract has expired or the quote is Pro-Rated (which never carries over); it will be wrong if the previous contract was paid in a different currency or had double pro-rated activations.',
    resolution: [
      'Confirm the quote\'s Contract Type. Pro-Rated quotes never show BCO — that\'s expected. Only New Contract quotes on accounts with an active contract do.',
      'If BCO is missing on a New Contract quote: check the Contract\'s end date (must be in the future) and that the quote links to the current contract. If the contract expired, no carryover applies.',
      'If BCO is incorrect: open the carryover line drawer (arrow icon) → tick "Set Manual Carryover" → enter the correct total in List Unit Price → fill Manual Carryover Reason. Common cause: currency mismatch with the previous contract.',
      'If BCO must be removed: in the line drawer tick "Remove Balance Carryover" and give a Removal Reason. Do not try to Delete Line — it won\'t work.',
      'Always click "Calculate" after any carryover change before the rep resubmits.',
      'Root cause pattern to watch for: "Error double pro rated activations" — if two pro-rated SOs were activated for the same period, escalate to Billing Dev with both SO numbers.',
    ],
  },
  {
    id: 'cpq-pro-to-ent-greyed-out',
    category: 'CPQ Errors',
    issue: 'Can\'t upgrade Pro → Enterprise in CPQ — tier is greyed out or only New Contract is offered',
    errorMessage: 'N/A — Enterprise tier is not selectable, or the pro-rated upgrade option is disabled',
    reason:
      'Account Tier is locked in the Creation App at the moment the offer is created, and on pro-rated expansions it inherits from the existing contract. You cannot change tier mid-contract on a pro-rated quote — a tier upgrade is a New Contract with balance carryover from the old one.',
    resolution: [
      'Confirm what the rep is trying to do: add seats at the same tier (pro-rated) or move the account from Pro to Enterprise (tier change).',
      'For a tier change: the rep must create a New Offer with Contract Type = New Contract and select Enterprise in the Creation App. The system will automatically add a Balance Carryover line for the unused Pro period.',
      'Remind them the tier is locked after the Creation App step — if they picked Pro by mistake, they need a fresh quote; it cannot be edited later.',
      'If the rep also wants a longer term, set the new duration in the Creation App — end date and duration are free on New Contract quotes but locked on Pro-Rated ones.',
    ],
  },
  {
    id: 'cpq-ai-rule-blocks-so',
    category: 'CPQ Errors',
    issue: 'CPQ "AI rule" blocks SO creation / can\'t add or remove AI Credits on the quote',
    errorMessage:
      'Cannot create SO without AI Credits / Unable to create SO due to AI rule / SO, AI credits add-on — CPQ gives error message',
    reason:
      'Since May 2026 monday.com is AI-native: for accounts with Is AI Funnel = TRUE, AI products auto-add to quotes and cannot simply be removed. Work management seats come with AI Credits at 800 credits per seat; the Enterprise bundle has a 20,000-credit minimum (8K for SMB). Reps hit errors when they try to delete the AI line, drop below the minimum, or sell a WM plan to a mandatory-AI account without AI.',
    resolution: [
      'Check the account\'s Is_AI_Funnel__c field. If TRUE, AI is mandatory on the quote — the AI line can\'t be removed. Explain this to the rep; the opt-out flow is deprecated (Finance handles rare edge cases).',
      'If the rep wants more credits: they can add AI Credits above the bundled amount via Select Add-Ons — credits can go up but never below the minimum.',
      'If the rep needs seats or credits outside the bundle ratio, use the new 2-line-item ENT bundle: select WM seats and the system auto-adds an AI Credits line at the minimum; adjust upward from there.',
      'If the customer disabled AI in their admin panel and the rep thinks that removes the obligation — it doesn\'t. Platform toggle ≠ CPQ opt-out.',
      'For a genuine "grant free AI credits" request (not a quote issue), that\'s done in BigBrain — Action: Grant AI Credits. **(check with team)** for the approval needed and the BB steps.',
    ],
  },
  {
    id: 'close-won-unique-key-duplicate',
    category: 'CPQ Errors',
    issue: 'Close Won "Unique Key__c" Duplicate Issue',
    errorMessage:
      'Update failed. First exception on row 0 with id 006av000008eal0AAA; first error: CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY, SBQQ.OpportunityAfter: execution of AfterUpdate caused by: System.DmlException: Insert failed. First exception on row 0; first error: DUPLICATE_VALUE, duplicate value found: Uniqe_Key__c duplicates value on record with id: a6Jav000000BE1FEAW: [] (System Code): [] Please contact business support',
    reason:
      'With Salesforce CPQ, a Contract Record gets created upon Close Won. If a rep re-opens an opportunity and then closes it again, CPQ tries to re-create subscriptions that already exist — triggering a duplicate key error. This is a defence mechanism to prevent duplication of SBQQ subscriptions. Before resolving, understand why the rep is reopening opportunities.',
    resolution: [
      'Resolution 1: Go to the Contract record and delete the CPQ Subscriptions. When the rep closes the opportunity again, the CPQ Subscriptions will be recreated cleanly.',
      'Resolution 2: If the CPQ Subscriptions section is still empty after closure, navigate to Inspector, change the "Migrate to CPQ Contract" field from True → False, then back from False → True, and confirm the subscriptions are created.',
    ],
    image: 'https://drive.google.com/thumbnail?id=1AO0dBcT9pXc-iDk4vNQTb_asKbE3KoV5&sz=w1000',
  },
];
