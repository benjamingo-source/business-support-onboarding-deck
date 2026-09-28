import type { PlaybookTicket } from './ticketPlaybook';

/**
 * Deck 7 — Advanced Ticketing Playbook. Same shape as Deck 3, for the
 * multi-system, multi-step tickets a new hire tackles once the basics are solid.
 * Drawn from live ticket reviews in onboarding sessions — steps marked
 * (check with team) still need confirmation.
 */
export const advancedPlaybook: PlaybookTicket[] = [
  {
    id: 'adv-arr-revival-tag-wrong',
    category: 'Renewals & ARR',
    issue: 'ARR Revival tag missing, or Revive Added ARR doesn\'t match what the rep expects',
    errorMessage: 'N/A — "customer came back within 90 days but the ARR counts as new" / "Revive Added ARR is blank or the wrong number"',
    reason:
      'The revival engine only tags a return when the chain is intact: a healthy contract, then a churn or downgrade anchor, then a new yearly subscription within 90 days. Monthly plans, old-infrastructure subscriptions, reversed mid-contract downgrades, first-contract churns, blank dates, and gaps over 90 days all break the chain. When a tag exists but the number is wrong, the delta was measured against the wrong contract instance.',
    resolution: [
      'Pull the account timeline in the ARR Revival Monitor dashboard: prior healthy contract, churn/downgrade event, gap length, revival contract. Confirm the gap is really ≤ 90 days from the churn end date to the new activation date.',
      'Check the exclusions before anything else: is the new subscription yearly? Is it on the current billing infrastructure? Was the "downgrade" actually mid-contract and reversed (the engine skips those on purpose)? Is there a prior healthy contract at all?',
      'Tag present but Revive Added ARR blank, or logic key blank → an anomaly the monitor flags as high severity; raise to BizTech with the subscription and contract IDs.',
      'Tag present but the number looks wrong → compare the Revived ARR Logic Key to the last healthy contract. The delta must be revival ARR minus the last healthy ARR, not minus the churned contract. If the stored value differs from the calculated expected value in the monitor, it is a calculation mismatch for BizTech.',
      'Churn + new sub under 90 days but no tag → "potential missed revival". Confirm the exclusions above don\'t apply, then raise to BizTech; a manual recalculation on the account can re-run the engine.',
      'If the "churn" was really an administrative refund, this is not a revival problem — run the Revert Downgrade Stamp process (Deck 5) to restore the baseline instead.',
      'Known bug: the 90-day window misbehaves for CC ↔ Wire conversions. If that is the shape of the ticket, flag it as the known issue rather than debugging the numbers.',
    ],
  },
  {
    id: 'adv-cosell-sync-broken',
    category: 'Opportunities',
    issue: 'Co-sell out of sync — primary opp is Closed Won but the partner\'s secondary opp shows the wrong stage or no ARR',
    errorMessage: 'N/A — partner or CPM reports missing partner ARR credit',
    reason:
      'A co-sell is three linked objects: the Primary Opportunity, the partner-held Secondary Opportunity (auto-created), and the S&P Request that binds them. If any link is missing or the S&P request was never approved, the secondary does not follow the primary and the partner gets no ARR.',
    resolution: [
      'In the Inspector on the primary opp: is the secondary opp field populated? Is the co-sell request field populated? Check the "Last approved S&P request" on the account.',
      'Best fix: restart the co-sell — a new S&P request re-links the triangle and the secondary syncs.',
      'Pragmatic fix when restart isn\'t possible: force-close the secondary opp with an admin ARR override. **Requires written approval from Sales Ops first** — attach it to the ticket.',
      'You need the Business Support business role in Salesforce for the override. Request via /bigbrain in Slack if missing.',
      'Document the partner ARR amount credited and who approved it.',
    ],
  },
  {
    id: 'adv-reopened-opp-arr',
    category: 'Renewals & ARR',
    issue: 'ARR is missing or partial after a rep reopened a Closed Won opportunity and closed it again',
    errorMessage: 'DUPLICATE_VALUE… Uniqe_Key__c on re-close, or ARR in BigBrain no longer matches the SO',
    reason:
      'Reopening a Closed Won opp is never the expected flow. It changes ARR in BigBrain and can leave partial or missing ARR, and CPQ tries to recreate subscriptions that already exist. The correct path for any post-close addition is a new expansion opportunity.',
    resolution: [
      'Establish what the account ARR was before the reopen and what it is now (the ARR question).',
      'Check the Contract\'s CPQ Subscriptions for duplicates; delete and regenerate from Contract Products via Migrate to CPQ Contract if needed.',
      'Correct the ARR at the source (BigBrain / Contract), then confirm the opp reflects it. **(check with team on the exact repair sequence)**',
      'Tell the rep the rule: never reopen — create a new expansion opp instead.',
    ],
  },
  {
    id: 'adv-forecast-artifact-negative-arr',
    category: 'Renewals & ARR',
    issue: 'Open opportunity shows negative or alarming ARR (e.g. −$9K) before anything has closed',
    errorMessage: 'N/A — rep panics about a negative ARR number on an open opp',
    reason:
      'ARR on an open opp = forecast quotes + signed SOs + CC claims. A stale Forecast document type quote can drag the number negative or inflate it. On close, only signed SOs and CC claims count, so the artifact usually resolves itself.',
    resolution: [
      'Open CPQ Management and look for a quote with Document Type = Forecast.',
      'If it is stale, delete the forecast quote (or have the rep do it) and Calculate — the ARR corrects immediately.',
      'If the deal is about to close, it is also fine to explain that the number will settle on close.',
    ],
  },
  {
    id: 'adv-bco-cross-currency',
    category: 'CPQ Errors',
    issue: 'Balance carryover on a quote in a different currency from the existing subscription (e.g. CAD subscription → USD quote)',
    errorMessage: 'BCO line missing or clearly wrong on a New Contract quote',
    reason:
      'The system cannot auto-compute cross-currency BCO. The credit has to be calculated manually and Finance validates the amount. Because BCO must appear on the signed SO, a missing or wrong BCO means the customer re-signs a corrected SO — the invoice cannot be adjusted afterwards.',
    resolution: [
      'Confirm the previous contract currency and remaining paid period from the Contract and BigBrain.',
      'Calculate the carryover manually and send it to Finance Controllers to validate.',
      'In the quote\'s carryover line drawer tick "Set Manual Carryover", enter the validated amount, fill the reason, Calculate.',
      'If the SO was already signed without the correct BCO, the rep must get a corrected SO re-signed.',
    ],
  },
  {
    id: 'adv-remove-cosell-partner-change',
    category: 'Opportunities',
    issue: 'Account is switching partners — the old co-sell has to be removed cleanly before a new S&P request can be submitted',
    errorMessage: 'New S&P request blocked / account still shows the old partner',
    reason:
      'The account carries the old partner in its partner field, the old secondary opps, and any open S&P requests. Until all three are cleared, the account is not "clean" and the new partner cannot be attached.',
    resolution: [
      'Remove the old partner from the account field.',
      'Close all secondary opps belonging to the old partner.',
      'Reject any open S&P requests for the old partner.',
      'Confirm the account shows only primary opps.',
      'The incoming partner (or CPM) can now submit a new S&P request. Check for a PIE tag before acting.',
    ],
  },
];
