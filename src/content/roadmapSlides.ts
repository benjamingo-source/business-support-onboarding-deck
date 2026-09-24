import type { OverviewSlide } from './overviewSlides';

/**
 * Deck 0 — Your 12 Weeks. The roadmap that hands a new hire off to the
 * personal Onboarding Tracker and the other decks. Targets marked
 * (check with team) are proposals until confirmed.
 */
export const roadmapSlides: OverviewSlide[] = [
  {
    id: 'road-how-it-works',
    title: '🗺️ How your first 12 weeks work',
    bullets: [
      '📚 The **Onboarding Deck** (this app) is *what to learn*: concepts, tickets, policies, processes, and who owns what.',
      '📊 Your **Onboarding Tracker** is *how you are doing*: roadmap, compliance courses, quiz scores, and 1:1 notes. Your manager shares your personal link on day one.',
      '🔁 The rhythm: tracker tells you what to focus on → deck shows you how → tickets prove it → the quiz catches what didn\'t stick → the 1:1 fills the gap.',
      '🎯 Three phases: **Foundation** (weeks 1–4), **Building** (weeks 5–8), **SME** (weeks 9–12).',
    ],
    deckLinks: [{ label: 'Start with Deck 1', view: 'overview' }],
  },
  {
    id: 'road-phase-1',
    title: '📅 Phase 1 — Foundation (weeks 1–4)',
    bullets: [
      '✅ Read Decks 1, 2, and 3 in order: Deck 1 on day one, Deck 2 by the end of week 1, Deck 3 as tickets arrive.',
      '🎫 Handle at least **10 different ticket types** from Deck 3. The first time on each type is the milestone, not volume. **(check with team)**',
      '🎓 Finish all compliance courses and the Deck 4 policy list in your tracker.',
      '🧪 Explore the Salesforce and BigBrain sandbox using the "Where to look" bullets in Deck 2 as your guided tour.',
    ],
    deckLinks: [
      { label: 'Deck 1 — Overview', view: 'overview' },
      { label: 'Deck 2 — Salesforce & CPQ', view: 'sfcpq' },
      { label: 'Deck 3 — Ticketing Playbook', view: 'playbook' },
      { label: 'Deck 4 — Policies', view: 'policies' },
    ],
  },
  {
    id: 'road-phase-2',
    title: '🏗️ Phase 2 — Building (weeks 5–8)',
    bullets: [
      '🔁 Deck 5 Processes becomes your daily companion; Deck 7 Advanced Playbook replaces Deck 3 as your default reference.',
      '🧭 Route with confidence using Deck 6: before opening a ticket, know whether it is ours, RevOps, Finance, Deal Desk, or Legal.',
      '✍️ Draft **two Deck 7 entries** from tickets you resolved yourself. If you can write the steps, you know it. **(check with team)**',
      '📈 Independent ARR and CPQ work: recognition overrides, CC claims, and quote-type issues without a second pair of eyes.',
    ],
    deckLinks: [
      { label: 'Deck 5 — Processes', view: 'processes' },
      { label: 'Deck 6 — Escalation Paths', view: 'escalations' },
      { label: 'Deck 7 — Advanced Playbook', view: 'advanced' },
    ],
  },
  {
    id: 'road-phase-3',
    title: '🏆 Phase 3 — SME (weeks 9–12)',
    bullets: [
      '🧹 Close out the remaining **(check with team)** flags across the decks with confirmed answers — you finish onboarding by improving it.',
      '🎤 Present one deck section to the next new hire or in a team session.',
      '🛠️ Own complex tickets end to end, including the hand-offs described in Deck 6.',
      '🇬🇧 London office presence per your tracker plan.',
    ],
    deckLinks: [
      { label: 'Deck 6 — Escalation Paths', view: 'escalations' },
      { label: 'Deck 7 — Advanced Playbook', view: 'advanced' },
    ],
  },
  {
    id: 'road-daily',
    title: '☀️ Your daily 10 minutes',
    bullets: [
      '📊 Open the tracker. Read the daily brief and the concept of the day.',
      '📚 Open that concept in Deck 2 from the slide outline, then follow its chips to the Deck 3 ticket and the Deck 4 policy behind it.',
      '👀 Skim new Business Lounge tickets. Search Deck 3 by the error text before asking anyone.',
    ],
    deckLinks: [
      { label: 'Deck 2 — Salesforce & CPQ', view: 'sfcpq' },
      { label: 'Deck 3 — Ticketing Playbook', view: 'playbook' },
    ],
  },
  {
    id: 'road-weekly',
    title: '📆 Your Friday 20 minutes',
    bullets: [
      '📝 Take the weekly quiz in the tracker. Each wrong answer points to a deck and slide.',
      '📖 Reread those slides before your 1:1.',
      '💬 Log the 1:1. Anything your manager explained that isn\'t in the deck yet: tell Business Support so it gets added.',
    ],
  },
  {
    id: 'road-links',
    title: '🔗 Your links',
    bullets: [
      '📊 **Onboarding Tracker** — ask your manager for your personal link; it is private to you.',
      '🎫 **Business Lounge board** — where tickets live.',
      '🎬 **CPQ enablement videos** on Monday.all — also listed at the end of Deck 2.',
      '💬 **Business Support Slack channel** — **(check with team: channel name)**.',
    ],
    link: {
      label: 'Open the Business Lounge board →',
      url: 'https://monday.monday.com/boards/2459966816',
    },
  },
];
