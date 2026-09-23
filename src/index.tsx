import React, { useMemo, useState } from 'react';
import { Button, Heading, Search, Text } from '@vibe/core';
import {
  Doc,
  NavigationChevronLeft,
  NavigationChevronRight,
  Wand,
} from '@vibe/icons';
import styles from './App.module.scss';
import { overviewSlides } from './content/overviewSlides';
import { draftSlides } from './content/draftSlides';
import { salesforceCpqSlides } from './content/salesforceCpqSlides';
import { policySlides } from './content/policySlides';
import {
  enablementVideos,
  videosForConcept,
  videosForTicket,
  VIDEO_LIBRARY_SLIDE_ID,
  type EnablementVideo,
} from './content/videos';
import { ticketPlaybook } from './content/ticketPlaybook';

type View = 'home' | 'overview' | 'playbook' | 'sfcpq' | 'policies' | 'processes' | 'drafts';

const policyOnlySlides = policySlides.filter((slide) => slide.kind !== 'process');
const processOnlySlides = policySlides.filter((slide) => slide.kind === 'process');

const renderRichText = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    ),
  );

export default function BusinessSupportOnboardingDeck() {
  const [view, setView] = useState<View>('home');
  const [slideIndex, setSlideIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTicketId, setExpandedTicketId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(ticketPlaybook.map((ticket) => ticket.category))),
    [],
  );

  const filteredTickets = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return ticketPlaybook.filter((ticket) => {
      if (selectedCategory && ticket.category !== selectedCategory) return false;
      if (!query) return true;

      const haystack = [
        ticket.category,
        ticket.issue,
        ticket.errorMessage,
        ticket.reason,
        ...ticket.resolution,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [searchQuery, selectedCategory]);

  const activeSlides =
    view === 'drafts'
      ? draftSlides
      : view === 'sfcpq'
        ? salesforceCpqSlides
        : view === 'policies'
          ? policyOnlySlides
          : view === 'processes'
            ? processOnlySlides
            : overviewSlides;
  const currentSlide = activeSlides[slideIndex];

  const goHome = () => {
    setView('home');
    setSlideIndex(0);
    setSearchQuery('');
    setExpandedTicketId(null);
    setSelectedCategory(null);
  };

  const goToConceptSlide = (slideId: string) => {
    const index = salesforceCpqSlides.findIndex((slide) => slide.id === slideId);
    if (index === -1) return;
    setSlideIndex(index);
    setView('sfcpq');
  };

  const goToPolicySlide = (slideId: string) => {
    const target = policySlides.find((slide) => slide.id === slideId);
    if (!target) return;
    const isProcess = target.kind === 'process';
    const list = isProcess ? processOnlySlides : policyOnlySlides;
    setSlideIndex(list.findIndex((slide) => slide.id === slideId));
    setView(isProcess ? 'processes' : 'policies');
  };

  const conceptSlidesForTicket = (ticketId: string, category: string) =>
    salesforceCpqSlides.filter(
      (slide) =>
        slide.relatedTickets?.includes(ticketId) || slide.relatedCategory === category,
    );

  const goToPlaybook = (category: string, ticketId?: string) => {
    setSearchQuery('');
    setSelectedCategory(category);
    setExpandedTicketId(ticketId ?? null);
    setView('playbook');
  };

  const renderHome = () => (
    <div className={styles.content}>
      <Heading type="h1" weight="bold">
        Business Support Onboarding
      </Heading>
      <Text ellipsis={false} type="text1" color="secondary">
        Choose a deck to get started. Deck 1 covers the monday.com overview; Deck 2 is the ticketing
        playbook for common Sales rep requests.
      </Text>

      <div className={styles.deckGrid}>
        <button
          type="button"
          className={styles.deckCard}
          onClick={() => setView('overview')}
          aria-label="Open monday.com overview deck"
        >
          <div className={styles.deckIcon}>
            <Wand />
          </div>
          <Heading type="h2" weight="medium">
            Deck 1 — monday.com Overview
          </Heading>
          <Text ellipsis={false} type="text2" color="secondary">
            Platform basics, how Sales uses monday.com, and what great Business Support looks like.
          </Text>
          <Text ellipsis={false} type="text2" color="secondary">
            {overviewSlides.length} slides
          </Text>
        </button>

        <button
          type="button"
          className={styles.deckCard}
          onClick={() => setView('playbook')}
          aria-label="Open ticketing playbook deck"
        >
          <div className={styles.deckIcon}>
            <Doc />
          </div>
          <Heading type="h2" weight="medium">
            Deck 2 — Ticketing Playbook
          </Heading>
          <Text ellipsis={false} type="text2" color="secondary">
            Common tickets from Sales reps: issue, error message, reason, and step-by-step resolution.
          </Text>
          <Text ellipsis={false} type="text2" color="secondary">
            {ticketPlaybook.length} playbook entries
          </Text>
        </button>

        <button
          type="button"
          className={styles.deckCard}
          onClick={() => setView('sfcpq')}
          aria-label="Open Salesforce and CPQ deck"
        >
          <div className={styles.deckIcon}>
            <Doc />
          </div>
          <Heading type="h2" weight="medium">
            Deck 3 — Salesforce &amp; CPQ
          </Heading>
          <Text ellipsis={false} type="text2" color="secondary">
            The deal path end to end: opportunity, quote, approvals, Sales Order, Closed Won, and activation.
          </Text>
          <Text ellipsis={false} type="text2" color="secondary">
            {salesforceCpqSlides.length} slides
          </Text>
        </button>

        <button
          type="button"
          className={styles.deckCard}
          onClick={() => setView('policies')}
          aria-label="Open policies deck"
        >
          <div className={styles.deckIcon}>
            <Doc />
          </div>
          <Heading type="h2" weight="medium">
            Deck 4 — Policies
          </Heading>
          <Text ellipsis={false} type="text2" color="secondary">
            Short overviews of the policies Business Support applies every day, each with a link to the full document.
          </Text>
          <Text ellipsis={false} type="text2" color="secondary">
            {policyOnlySlides.length} policies
          </Text>
        </button>

        <button
          type="button"
          className={styles.deckCard}
          onClick={() => setView('processes')}
          aria-label="Open processes deck"
        >
          <div className={styles.deckIcon}>
            <Doc />
          </div>
          <Heading type="h2" weight="medium">
            Deck 5 — Processes
          </Heading>
          <Text ellipsis={false} type="text2" color="secondary">
            Step-by-step runbooks and system flows you will follow on real tickets, each with a link to the source document.
          </Text>
          <Text ellipsis={false} type="text2" color="secondary">
            {processOnlySlides.length} processes
          </Text>
        </button>
      </div>
    </div>
  );

  const nextSlide = activeSlides[slideIndex + 1];

  const renderVideoCards = (videos: EnablementVideo[], heading: string) => (
    <div className={styles.videoBox}>
      <Text ellipsis={false} type="text2" weight="bold">
        {heading}
      </Text>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <div className={styles.videoMeta}>
              <span>{video.category}</span>
              {video.minutes ? <span>⏱ {video.minutes} min</span> : null}
            </div>
            <Text ellipsis={false} type="text1" className={styles.videoTitle}>
              {video.title}
            </Text>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoButton}
            >
              ▶ Watch on Monday.all
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className={styles.content}>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${((slideIndex + 1) / activeSlides.length) * 100}%` }}
        />
      </div>

      <div className={styles.slideCardDeck}>
        <div className={styles.slideBadge}>
          {String(slideIndex + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
        </div>
        <Heading type="h1" weight="bold" className={styles.slideTitle}>
          {currentSlide.title}
        </Heading>
        <ul className={styles.bulletListDeck}>
          {currentSlide.bullets.map((bullet) => (
            <li key={bullet}>
              <Text ellipsis={false} type="text1">{renderRichText(bullet)}</Text>
            </li>
          ))}
        </ul>
        {currentSlide.image && (
          <img src={currentSlide.image} alt={currentSlide.title} className={styles.slideImage} />
        )}
        {currentSlide.id === VIDEO_LIBRARY_SLIDE_ID &&
          (enablementVideos.length > 0 ? (
            renderVideoCards(enablementVideos, `${enablementVideos.length} videos`)
          ) : (
            <div className={styles.videoEmpty}>
              <Text ellipsis={false} type="text2">
                Videos are being added — use the folder link below in the meantime.
              </Text>
            </div>
          ))}
        {currentSlide.id !== VIDEO_LIBRARY_SLIDE_ID &&
          videosForConcept(currentSlide.id).length > 0 &&
          renderVideoCards(videosForConcept(currentSlide.id), '🎬 Watch it in action')}
        {currentSlide.link && (
          <a
            href={currentSlide.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.policyLink}
          >
            {currentSlide.link.label}
          </a>
        )}
        {currentSlide.relatedPolicies && currentSlide.relatedPolicies.length > 0 && (
          <div className={styles.relatedBox}>
            <Text ellipsis={false} type="text2" weight="bold">
              📜 Related policies (Deck 4) & processes (Deck 5)
            </Text>
            <div className={styles.relatedLinks}>
              {currentSlide.relatedPolicies.map((policyId) => {
                const policy = policySlides.find((entry) => entry.id === policyId);
                if (!policy) return null;
                return (
                  <button
                    key={policyId}
                    type="button"
                    className={styles.relatedLink}
                    onClick={() => goToPolicySlide(policy.id)}
                  >
                    {policy.kind === 'process' ? '🔁' : '📜'} {policy.title} →
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {currentSlide.relatedConcepts && currentSlide.relatedConcepts.length > 0 && (
          <div className={styles.relatedBox}>
            <Text ellipsis={false} type="text2" weight="bold">
              📚 Learn the concepts in Deck 3
            </Text>
            <div className={styles.relatedLinks}>
              {currentSlide.relatedConcepts.map((conceptId) => {
                const concept = salesforceCpqSlides.find((entry) => entry.id === conceptId);
                if (!concept) return null;
                return (
                  <button
                    key={conceptId}
                    type="button"
                    className={styles.relatedLink}
                    onClick={() => goToConceptSlide(concept.id)}
                  >
                    {concept.title} →
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {currentSlide.relatedCategory && (
          <div className={styles.relatedBox}>
            <Text ellipsis={false} type="text2" weight="bold">
              🎫 Related tickets in Deck 2
            </Text>
            <div className={styles.relatedLinks}>
              <button
                type="button"
                className={styles.relatedLink}
                onClick={() => goToPlaybook(currentSlide.relatedCategory as string)}
              >
                All {currentSlide.relatedCategory} tickets →
              </button>
              {currentSlide.relatedTickets?.map((ticketId) => {
                const ticket = ticketPlaybook.find((entry) => entry.id === ticketId);
                if (!ticket) return null;
                return (
                  <button
                    key={ticketId}
                    type="button"
                    className={styles.relatedLink}
                    onClick={() => goToPlaybook(ticket.category, ticket.id)}
                  >
                    {ticket.issue} →
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className={styles.slideNav}>
        <Button
          kind="secondary"
          disabled={slideIndex === 0}
          onClick={() => setSlideIndex((index) => index - 1)}
          leftIcon={NavigationChevronLeft}
        >
          Previous
        </Button>
        {nextSlide ? (
          <Text ellipsis={false} type="text2" className={styles.slideProgress}>
            Up next: {nextSlide.title}
          </Text>
        ) : (
          <Text ellipsis={false} type="text2" className={styles.slideProgress}>
            End of deck 🎉
          </Text>
        )}
        <Button
          kind="primary"
          disabled={slideIndex === activeSlides.length - 1}
          onClick={() => setSlideIndex((index) => index + 1)}
          rightIcon={NavigationChevronRight}
        >
          Next
        </Button>
      </div>
    </div>
  );

  const renderPlaybook = () => (
    <div className={styles.content}>
      <div className={styles.searchRow}>
        <Search
          placeholder="Search by issue, error message, category, or resolution..."
          value={searchQuery}
          onChange={setSearchQuery}
          size="medium"
        />
      </div>

      <div className={styles.categoryChips}>
        <button
          type="button"
          className={selectedCategory === null ? styles.chipActive : styles.chip}
          onClick={() => setSelectedCategory(null)}
        >
          All ({ticketPlaybook.length})
        </button>
        {categories.map((category) => {
          const count = ticketPlaybook.filter((ticket) => ticket.category === category).length;
          return (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? styles.chipActive : styles.chip}
              onClick={() =>
                setSelectedCategory(selectedCategory === category ? null : category)
              }
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {filteredTickets.length === 0 ? (
        <div className={styles.emptyState}>
          <Text ellipsis={false} type="text1">No tickets match your search. Try a different keyword.</Text>
        </div>
      ) : (
        <div className={styles.ticketList}>
          {filteredTickets.map((ticket) => {
            const isExpanded = expandedTicketId === ticket.id;

            return (
              <div key={ticket.id} className={styles.slideCard}>
                <button
                  type="button"
                  className={styles.ticketToggle}
                  onClick={() => setExpandedTicketId(isExpanded ? null : ticket.id)}
                  aria-expanded={isExpanded}
                >
                  <div className={styles.ticketMeta}>
                    <Text ellipsis={false} type="text2" weight="medium">
                      {ticket.category}
                    </Text>
                  </div>
                  <Heading type="h3" weight="medium">
                    {ticket.issue}
                  </Heading>
                  <Text ellipsis={false} type="text2" color="secondary">
                    {isExpanded ? 'Click to collapse' : 'Click to view error, reason, and resolution'}
                  </Text>
                </button>

                {isExpanded && (
                  <>
                    <div className={styles.ticketSection}>
                      <Text ellipsis={false} type="text2" weight="bold">
                        Possible error message
                      </Text>
                      <Text ellipsis={false} type="text1">{ticket.errorMessage}</Text>
                      {ticket.image && (
                        <img
                          src={ticket.image}
                          alt="Error screenshot"
                          className={styles.ticketImage}
                        />
                      )}
                    </div>
                    <div className={styles.ticketSection}>
                      <Text ellipsis={false} type="text2" weight="bold">
                        Reason
                      </Text>
                      <Text ellipsis={false} type="text1">{ticket.reason}</Text>
                    </div>
                    <div className={styles.ticketSection}>
                      <Text ellipsis={false} type="text2" weight="bold">
                        Resolution
                      </Text>
                      <ol className={styles.resolutionList}>
                        {ticket.resolution.map((step) => (
                          <li key={step}>
                            <Text ellipsis={false} type="text1">{step}</Text>
                          </li>
                        ))}
                      </ol>
                      {ticket.resolutionImages?.map((src, index) => (
                        <img
                          key={src}
                          src={src}
                          alt={`Resolution step screenshot ${index + 1}`}
                          className={styles.ticketImage}
                        />
                      ))}
                    </div>
                    {videosForTicket(ticket.id).length > 0 &&
                      renderVideoCards(videosForTicket(ticket.id), '🎬 Watch it in action')}
                    {conceptSlidesForTicket(ticket.id, ticket.category).length > 0 && (
                      <div className={styles.relatedBox}>
                        <Text ellipsis={false} type="text2" weight="bold">
                          📚 Learn the concepts in Deck 3
                        </Text>
                        <div className={styles.relatedLinks}>
                          {conceptSlidesForTicket(ticket.id, ticket.category).map((slide) => (
                            <button
                              key={slide.id}
                              type="button"
                              className={styles.relatedLink}
                              onClick={() => goToConceptSlide(slide.id)}
                            >
                              {slide.title} →
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  const headerTitle =
    view === 'overview'
      ? 'Deck 1 — monday.com Overview'
      : view === 'playbook'
        ? 'Deck 2 — Ticketing Playbook'
        : view === 'sfcpq'
          ? 'Deck 3 — Salesforce & CPQ'
          : view === 'policies'
            ? 'Deck 4 — Policies'
            : view === 'processes'
              ? 'Deck 5 — Processes'
              : view === 'drafts'
              ? 'Draft Ideas (WIP)'
              : 'Business Support Onboarding';

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
            alt="monday.com"
            className={styles.headerLogo}
          />
          <Heading type="h3" weight="medium">
            {headerTitle}
          </Heading>
        </div>
        {view !== 'home' && (
          <Button kind="tertiary" onClick={goHome}>
            Back to home
          </Button>
        )}
      </header>

      {view === 'home' && renderHome()}
      {(view === 'overview' ||
        view === 'sfcpq' ||
        view === 'policies' ||
        view === 'processes' ||
        view === 'drafts') &&
        renderOverview()}
      {view === 'playbook' && renderPlaybook()}
    </div>
  );
}
