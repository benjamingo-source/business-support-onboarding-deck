export type OverviewSlide = {
  id: string;
  title: string;
  bullets: string[];
};

export const overviewSlides: OverviewSlide[] = [
  {
    id: 'business-lounge-mission',
    title: 'The Business Lounge & our mission',
    bullets: [
      'The Business Lounge ✈️ is our one-stop-shop ticketing system for client-facing teams — built on the monday.com platform, with a service catalog per product and the ability to move tickets between teams.',
      'Business Support exists to make our sales and post-sales cycles faster, more agile, and more scalable.',
      'We are the centralized point of contact for Sales, Partners, and CSMs on technical and informational issues.',
      'Main KPIs: SLA and Satisfaction surveys (CSAT) — our processes are KPI-driven, kept current, and built to solve the underlying issue.',
    ],
  },
  {
    id: 'ticket-flow-escalation',
    title: 'Where tickets go: the support flow',
    bullets: [
      'A customer (rep, CSM, partner) logs a ticket in the Business Lounge. Some tickets are auto-routed based on the product and catalog item selected.',
      'Business Support handles ~70% of all tickets — most issues resolve in-tier.',
      'Escalate through Assignment Groups when needed: BizOps/Tech (~18%) for data and system issues, Finance (~7%) for billing and invoicing, Billing Dev (~5%) for payment infrastructure.',
      'Rule of thumb: try to resolve in-tier first; escalate with full context (record IDs, screenshots, what you already checked).',
    ],
  },
  {
    id: 'who-is-who-sales',
    title: 'Who is who: Sales roles you\'ll support',
    bullets: [
      'SDR (Sales Development Rep) — qualifies inbound/outbound leads and builds opportunities for AEs. Think "net new" business.',
      'AE (Account Executive) — owns the full sales cycle from qualification to closing net-new ARR. Split by segment: SMB, Mid-Market, Enterprise.',
      'AM (Account Manager) — grows existing accounts through long-term relationships; measured on retention and renewals.',
      'CSM (Customer Success Manager) — retains business and drives adoption; not a seller.',
      'RM (Renewal Manager) — partners with CSMs and AMs to execute renewals on time.',
      'SE (Sales Engineer) — supports AEs/AMs on larger, more technical deals.',
    ],
  },
  {
    id: 'salesforce-map',
    title: 'The Salesforce map: how records connect',
    bullets: [
      'Company — the real-world business entity. Linked to a Billing Entity (who pays) and Shipping Entity (who uses).',
      'monday Account — a monday.com instance under a Company; one Company can have several (e.g. per region or team). Equivalent to a BB (BigBrain) account.',
      'Lead → Opportunity — a lead converts into an opportunity when there is a potential deal.',
      'Opportunity → Quote → Sales Order — the deal is priced in CPQ, sent as an SO, signed, then Closed Won.',
      'Contract — created on Close Won; defined by its end date. Subscriptions and renewals hang off the contract.',
      'Most ticket resolutions are about fixing a broken link somewhere in this chain.',
    ],
  },
  {
    id: 'money-basics',
    title: 'Money basics: claims & recognition',
    bullets: [
      'Two payment paths: Wire (SO signed in CPQ, auto-claimed, activated via Import SO) and Credit Card (user pays in the platform, rep must claim it manually).',
      'CC claims must be made within 6 months of payment, and only within the rep\'s ownership timeframe of the account.',
      'Recognition Threshold ("Green Bucket"): only Yearly/Multi-yearly Pro or Enterprise plans count, and account ARR must exceed $7K (or $3.5K for SMB and Product reps).',
      'An opportunity is Recognized if: the account is already recognized, OR the deal alone meets the threshold, OR account ARR + deal ARR together reach it.',
      'Opportunity types: New Business (lead conversion), Expansion (existing account, active contract required), Flat Renewal, and Downgrade (auto-filled).',
    ],
  },
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
