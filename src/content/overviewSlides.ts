export type OverviewSlide = {
  id: string;
  title: string;
  bullets: string[];
};

export const overviewSlides: OverviewSlide[] = [
  {
    id: 'what-is-monday',
    title: 'What is monday.com?',
    bullets: [
      'monday.com is a work operating system (Work OS) that helps teams plan, track, and deliver work in one place.',
      'Teams use boards, automations, dashboards, and integrations to run sales, service, marketing, and operations.',
      'Business Support helps internal teams (especially Sales) resolve platform, access, and workflow issues quickly.',
    ],
  },
  {
    id: 'core-concepts',
    title: 'Core platform concepts',
    bullets: [
      'Workspaces & accounts — where customer data and permissions live.',
      'Boards & items — how work is organized; each row is a record or task.',
      'Automations & integrations — connect monday.com to Salesforce, email, Slack, and billing systems.',
      'Roles & permissions — who can view, edit, or administer each workspace.',
    ],
  },
  {
    id: 'sales-touchpoints',
    title: 'How Sales reps use monday.com',
    bullets: [
      'CRM boards track accounts, opportunities, and renewal pipelines.',
      'Quotes and contracts often flow through Salesforce CPQ and related integrations.',
      'Renewal and ARR data ties opportunities, contracts, and targets together for attainment reporting.',
      'Reps escalate to Business Support when something blocks closing, quoting, or renewing a deal.',
    ],
  },
  {
    id: 'support-model',
    title: 'Business Support model',
    bullets: [
      'Triage incoming tickets by product area: access, CRM/Salesforce, billing, integrations.',
      'Gather context upfront: account name, user email, error message, screenshots, and steps to reproduce.',
      'Resolve in-tier when possible; escalate to Engineering or RevOps when data or code changes are needed.',
      'Document recurring issues in the playbook so the next agent can resolve faster.',
    ],
  },
  {
    id: 'key-terms',
    title: 'Key terms you\'ll see every day',
    bullets: [
      'CPQ — Salesforce\'s quoting tool; used to build, price, and send Sales Orders to customers.',
      'SO (Sales Order) — the contract document generated from a CPQ quote; reps submit this for approval before closing.',
      'BB ID — the unique ID that links a Salesforce account to a monday.com account.',
      'Green Bucket — an opportunity that counts toward a rep\'s ARR recognition target; "Is Recognized" must be checked.',
      'ARR (Annual Recurring Revenue) — the key number reps and AMs are measured on; what Business Support is ultimately protecting.',
      'Expansion Opp — a new deal on an existing account (upsell or cross-sell); does not replace a renewal.',
      'Renewal Opp — re-closing an existing contract at renewal time; AMs are measured on retaining this ARR.',
      'Correction Opportunity — a post-close opp used purely for invoicing changes (billing entity, company name, SO signer); carries $0 ARR.',
    ],
  },
  {
    id: 'quality-bar',
    title: 'What great support looks like',
    bullets: [
      'Acknowledge quickly and set expectations on timeline.',
      'Explain the issue in plain language — not just the fix.',
      'Confirm resolution with the rep and note what prevented recurrence.',
      'Update the playbook when a new pattern appears twice or more.',
    ],
  },
];
