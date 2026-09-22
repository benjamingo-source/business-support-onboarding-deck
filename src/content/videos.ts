/**
 * CPQ enablement videos from Monday.all. Shown as a card grid on the Deck 3
 * "video library" slide, and as contextual "Watch" cards on any Deck 3 slide
 * (via `relatedConcepts`) or Deck 2 ticket (via `relatedTickets`) they explain.
 *
 * Videos open on Monday.all in a new tab — the platform does not allow embedding.
 */
export type EnablementVideo = {
  id: string;
  title: string;
  /** Short topic tag shown on the card, ideally a Deck 2 category name. */
  category: string;
  minutes?: number;
  url: string;
  /** Deck 3 slide ids this video explains. */
  relatedConcepts?: string[];
  /** Deck 2 ticket ids this video helps with. */
  relatedTickets?: string[];
};

export const VIDEO_FOLDER_URL =
  'https://mondayall.com/collection-viewer?collection=Escn4LouIbPDx3L4EKZX&folder=cro-cpq-enablement-1EVM5r';

export const VIDEO_LIBRARY_SLIDE_ID = 'sfcpq-video-library';

export const enablementVideos: EnablementVideo[] = [];

export const videosForConcept = (slideId: string) =>
  enablementVideos.filter((video) => video.relatedConcepts?.includes(slideId));

export const videosForTicket = (ticketId: string) =>
  enablementVideos.filter((video) => video.relatedTickets?.includes(ticketId));
