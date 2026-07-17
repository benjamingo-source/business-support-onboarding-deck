export type PlaybookTicket = {
  id: string;
  category: string;
  issue: string;
  errorMessage: string;
  reason: string;
  resolution: string[];
  image?: string;
};

export const ticketPlaybook: PlaybookTicket[] = [
  {
    id: 'sf-login-failed',
    category: 'Access',
    issue: 'Sales rep cannot log into Salesforce',
    errorMessage: 'Login failed — invalid username or password / session expired',
    reason:
      'Password expired, SSO mismatch, or user was deactivated after role change. Sometimes the rep is using a sandbox URL with production credentials.',
    resolution: [
      'Confirm which org URL they use (production vs sandbox).',
      'Check if the user is active in Salesforce Setup → Users.',
      'If SSO: verify IdP assignment and have them clear browser cache or try incognito.',
      'If password-based: send a reset from Setup or route to IT if SSO-owned.',
    ],
  },
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
    id: 'opp-not-syncing',
    category: 'Integrations',
    issue: 'Opportunity not syncing between systems',
    errorMessage: 'Record not found / Sync failed — external ID mismatch',
    reason:
      'Integration job lag, validation rule blocking the update, or duplicate external IDs between monday.com and Salesforce.',
    resolution: [
      'Identify source of truth (usually Salesforce for closed-won opps).',
      'Check integration logs for the record ID and last successful sync time.',
      'Look for validation rules or required fields blocking the outbound/inbound message.',
      'Manually resync if supported; otherwise open a ticket with integration logs attached.',
    ],
  },
  {
    id: 'permission-denied',
    category: 'Access',
    issue: 'Rep sees “Insufficient privileges” on a record',
    errorMessage: 'Insufficient privileges / You do not have access to this record',
    reason:
      'Role hierarchy, sharing rules, or permission set assignment does not include the account or object. Common after territory or team changes.',
    resolution: [
      'Confirm the rep’s role, permission sets, and account team membership.',
      'Check if the record owner or account owner is in their hierarchy.',
      'Compare with a peer who has access (same role/team).',
      'If legitimate need: request access via account owner or add the correct permission set.',
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
      'If not, request evidence the rep was in contact with the customer on or before the claim date, within a 6-month window (e.g., for a July 10, 2026 claim, communication must be dated on or before July 10, 2026).',
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
