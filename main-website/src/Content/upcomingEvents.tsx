// Upcoming event – March 22, 2026
import anniversaryImage from "../assets/Lucky 9 smashFest.png";

export const upcomingEvents = [
  {
    description: "March 22, 2026 (Sunday) • 12:00 PM",
    title: "SBGC 9th Anniversary Celebration",
    src: anniversaryImage,
    ctaText: "Register",
    ctaLink: "/register",
    content: () => {
      return (
        <>
          <p className="mb-4 text-left">
            Nine amazing years of rallies, friendships, teamwork, and
            unforgettable Sunday memories—and it wouldn't be possible without
            you! Join us as we proudly celebrate the 9th Anniversary of the
            Sunday Badminton Group Club and continue building a strong, active,
            and united community.
          </p>

          <p className="mb-2 font-semibold">Venue</p>
          <p className="mb-4">Batts Athletics Courts</p>

          <p className="mb-2 font-semibold">Special anniversary theme (March awareness)</p>
          <p className="mb-4">
            Spreading Awareness on Colorectal Cancer — This March, as we
            celebrate health through sports, we also come together to raise
            awareness, encourage early screening, and support one another
            through education and compassion.
          </p>

          <p className="mb-2 font-semibold">Registration</p>
          <p className="mb-1">
            Please submit your name for registration to:
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Xenia Talledo</li>
            <li>Mae Lilagan</li>
          </ul>
          <p className="mb-4">
            <strong>Registration deadline:</strong> February 15, 2026
          </p>

          <p className="mb-4 text-sm text-left">
            More details regarding the program and activities will be announced
            as soon as they become available.
          </p>

          <p className="mb-4">
            Let's celebrate 9 years of passion, perseverance, and community,
            while standing together for a cause that matters. See you on the
            court as we rally not just for the game—but for health, awareness,
            and life.
          </p>
        </>
      );
    },
  },
];
