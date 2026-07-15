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
