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
import { ticketPlaybook } from './content/ticketPlaybook';

type View = 'home' | 'overview' | 'playbook' | 'drafts';

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

  const activeSlides = view === 'drafts' ? draftSlides : overviewSlides;
  const currentSlide = activeSlides[slideIndex];

  const goHome = () => {
    setView('home');
    setSlideIndex(0);
    setSearchQuery('');
    setExpandedTicketId(null);
    setSelectedCategory(null);
  };

  const renderHome = () => (
    <div className={styles.content}>
      <Heading type="h1" weight="bold">
        Business Support Onboarding
      </Heading>
      <Text type="text1" color="secondary">
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
          <Text type="text2" color="secondary">
            Platform basics, how Sales uses monday.com, and what great Business Support looks like.
          </Text>
          <Text type="text2" color="secondary">
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
          <Text type="text2" color="secondary">
            Common tickets from Sales reps: issue, error message, reason, and step-by-step resolution.
          </Text>
          <Text type="text2" color="secondary">
            {ticketPlaybook.length} playbook entries
          </Text>
        </button>

        <button
          type="button"
          className={styles.deckCard}
          onClick={() => setView('drafts')}
          aria-label="Open draft ideas deck"
        >
          <div className={styles.deckIcon}>
            <Wand />
          </div>
          <Heading type="h2" weight="medium">
            Deck 3 — Draft Ideas (WIP)
          </Heading>
          <Text type="text2" color="secondary">
            Candidate slides for Deck 1 — review, edit, and promote the keepers. Not for new hires yet.
          </Text>
          <Text type="text2" color="secondary">
            {draftSlides.length} draft slides
          </Text>
        </button>
      </div>
    </div>
  );

  const nextSlide = activeSlides[slideIndex + 1];

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
              <Text type="text1">{bullet}</Text>
            </li>
          ))}
        </ul>
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
          <Text type="text2" className={styles.slideProgress}>
            Up next: {nextSlide.title}
          </Text>
        ) : (
          <Text type="text2" className={styles.slideProgress}>
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
          <Text type="text1">No tickets match your search. Try a different keyword.</Text>
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
                    <Text type="text2" weight="medium">
                      {ticket.category}
                    </Text>
                  </div>
                  <Heading type="h3" weight="medium">
                    {ticket.issue}
                  </Heading>
                  <Text type="text2" color="secondary">
                    {isExpanded ? 'Click to collapse' : 'Click to view error, reason, and resolution'}
                  </Text>
                </button>

                {isExpanded && (
                  <>
                    <div className={styles.ticketSection}>
                      <Text type="text2" weight="bold">
                        Possible error message
                      </Text>
                      <Text type="text1">{ticket.errorMessage}</Text>
                      {ticket.image && (
                        <img
                          src={ticket.image}
                          alt="Error screenshot"
                          className={styles.ticketImage}
                        />
                      )}
                    </div>
                    <div className={styles.ticketSection}>
                      <Text type="text2" weight="bold">
                        Reason
                      </Text>
                      <Text type="text1">{ticket.reason}</Text>
                    </div>
                    <div className={styles.ticketSection}>
                      <Text type="text2" weight="bold">
                        Resolution
                      </Text>
                      <ol className={styles.resolutionList}>
                        {ticket.resolution.map((step) => (
                          <li key={step}>
                            <Text type="text1">{step}</Text>
                          </li>
                        ))}
                      </ol>
                    </div>
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
        : view === 'drafts'
          ? 'Deck 3 — Draft Ideas (WIP)'
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
      {(view === 'overview' || view === 'drafts') && renderOverview()}
      {view === 'playbook' && renderPlaybook()}
    </div>
  );
}
