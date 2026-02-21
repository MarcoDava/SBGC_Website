// Placeholder images (600×400) – replace with real event photos when available
const PLACEHOLDER_UPCOMING =
  "https://placehold.co/600x400/26332A/B2A592?text=SBGC+Open+Tournament";

export const upcomingEvents = [
  {
    description: "September 26, 2026",
    title: "SBGC Open Tournament",
    src: PLACEHOLDER_UPCOMING,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Join us for the SBGC Open Tournament on September 26, 2026! This
          exciting event brings together top gamers from around the region to
          compete in a series of thrilling matches. Whether you're a seasoned
          pro or a passionate fan, the SBGC Open Tournament promises
          unforgettable moments, intense competition, and a celebration of the
          gaming community. Don't miss your chance to witness epic gameplay,
          connect with fellow enthusiasts, and be part of the action!
        </p>
      );
    },
  }
];
