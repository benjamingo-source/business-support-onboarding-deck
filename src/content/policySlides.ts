import type { OverviewSlide } from './overviewSlides';

/**
 * Deck 4 — Policies. Each slide is a short overview of one policy Business Support
 * applies day to day, with a link to the full source document.
 * Replace the placeholder URLs with the real policy links.
 */
export const policySlides: OverviewSlide[] = [
  {
    id: 'policy-cc-claim-window',
    title: 'CC Claim Eligibility Policy',
    bullets: [
      '💳 Credit card payments can be claimed for up to **3 months** after the payment date.',
      '👤 The claim must fall within the rep\'s **Ownership Claim Eligibility** window — the period they were the account owner.',
      '📎 To extend or move the eligibility date, the rep must provide proof of contact with the customer on or before the claim date.',
      '🎫 Ties to: Can\'t claim CC payment (Billing) and Update Claim Eligibility Date requests.',
    ],
    link: { label: 'Open the CC Claim policy →', url: 'https://REPLACE-WITH-POLICY-LINK' },
  },
  {
    id: 'policy-arr-recognition',
    title: 'ARR Recognition Threshold Policy',
    bullets: [
      '💰 Only **Yearly / Multi-yearly Pro or Enterprise** plans are recognized. Standard, Basic, and monthly plans never count.',
      '📏 Account ARR must exceed **$7K** (Scale, Commercial, Mid-Market, Enterprise, Outbound) or **$3.5K** (SMB and Product reps).',
      '✅ Recognized if: the account is already recognized, OR the deal alone meets the threshold, OR account ARR + deal ARR together reach it.',
      '⚠️ Business Support may override "Is Recognized" only with a documented ticket link in the Override Reason field. Threshold configuration questions go to RevOps.',
    ],
    link: { label: 'Open the ARR Recognition policy →', url: 'https://REPLACE-WITH-POLICY-LINK' },
  },
  {
    id: 'policy-opp-locking',
    title: 'Opportunity Locking & Correction Opportunity Policy',
    bullets: [
      '🔒 Closed Won opportunities lock on the **5th of the month following close**.',
      '🩹 After lock, changes to Billing Entity, Company Name, or SO Signer go through a **Correction Opportunity** (0 ARR) via the Post-Won Wizard.',
      '📝 The rep clones the quote, re-signs, and uploads the signed SO; Finance Billing handles Bill-to changes.',
      '🚫 Business Support does not edit locked SOs directly.',
    ],
    link: { label: 'Open the Correction Opportunity policy →', url: 'https://REPLACE-WITH-POLICY-LINK' },
  },
  {
    id: 'policy-account-ownership',
    title: 'Account Ownership Change Policy',
    bullets: [
      '🔀 Ownership changes are **handled by RevOps**, not Business Support.',
      '✅ Approval is required from the current owner, their manager, and the relevant RevOps business partner before any change.',
      '🧭 If a ticket lands with us, confirm it is a true ownership request (not a contract Account Name issue), then route to RevOps.',
    ],
    link: { label: 'Open the Ownership policy →', url: 'https://REPLACE-WITH-POLICY-LINK' },
  },
  {
    id: 'policy-billing-entity',
    title: 'Billing Entity Change Policy',
    bullets: [
      '🏢 Billing Entity should be set **before** SO creation.',
      '🧾 Changes to Bill-to details, tax info, or VAT are owned by **Finance Billing** — Business Support confirms the request and routes it.',
      '🔀 If tax information is unchanged, a new Billing Entity can be created instead of editing the existing one.',
    ],
    link: { label: 'Open the Billing Entity policy →', url: 'https://REPLACE-WITH-POLICY-LINK' },
  },
];
