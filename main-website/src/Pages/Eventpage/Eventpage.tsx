import type { JSX } from "react";
import { EventCards } from "../../Components/EventCard/EventCards";

// Import event data from local content files (instead of Google Sheets)
import { upcomingEvents } from "@/Content/upcomingEvents";
import { pastEvents } from "@/Content/pastEvents";

/**
 * Shape of each event card expected by the EventCards component.
 * - src: image URL or imported asset
 * - title: event name
 * - description: date or short tagline shown on the card
 * - ctaText: button label
 * - ctaLink: optional link for the CTA button
 * - content: render function returning detailed JSX for the modal/expanded view
 */
type EventCardData = {
  src: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
};

/**
 * Eventpage component
 * Renders two sections:
 *   1. Upcoming Events – pulled from upcomingEvents.tsx
 *   2. Past Events – pulled from pastEvents.tsx
 *
 * No async loading is required because the data is bundled at build time.
 */
export const Eventpage = () => {
  // Cast the imported arrays to EventCardData[] for type safety
  const upcoming: EventCardData[] = upcomingEvents as EventCardData[];
  const past: EventCardData[] = pastEvents as EventCardData[];

  return (
    <div className="md:mt-0 mt-[10vh] flex justify-center items-center flex-col w-full">
      {/* ───────────────────────────────────────────────────────────────────
          UPCOMING EVENTS SECTION
          Displays events that have not yet occurred.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="flex justify-center items-center flex-col w-full">
        <h2 className="w-[70vw] text-white text-center mt-10 mb-3 text-3xl font-semibold">
          Upcoming Events
        </h2>

        {/* Render event cards if there are any upcoming events */}
        {upcoming.length > 0 && EventCards(upcoming)}

        {/* Fallback message when no upcoming events exist */}
        {upcoming.length === 0 && (
          <p className="text-white/70 text-center py-4">
            No upcoming events are listed yet.
          </p>
        )}
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          PAST EVENTS SECTION
          Displays events that have already happened.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="flex justify-center items-center flex-col w-full mb-[5vh]">
        <h2 className="w-[70vw] text-white text-center mt-10 mb-3 text-3xl font-semibold">
          Past Events
        </h2>

        {/* Render event cards if there are any past events */}
        {past.length > 0 && EventCards(past)}

        {/* Fallback message when no past events exist */}
        {past.length === 0 && (
          <p className="text-white/70 text-center py-4">
            No past events are listed yet.
          </p>
        )}
      </div>
    </div>
  );
};
