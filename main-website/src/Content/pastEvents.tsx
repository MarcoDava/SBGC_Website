// Placeholder images (600×400) – replace with real event photos when available

import christmasPartyImage from "../assets/ChristmasParty.png";
import openMajorImage from "../assets/OpenTournament2025.jpg";
import interBarangayImage from "../assets/InterBarangay2025.jpg"; 
import rhadyCupImage from "../assets/Rhadys2025.png";

export const pastEvents = [
  {
    description: "December 14, 2025",
    title: "SBGC Christmas Party",
    src: christmasPartyImage,
    ctaText: "View photos",
    ctaLink: "https://www.flickr.com/photos/amerphotographyz/albums/72177720330993036/",
    content: () => {
      return (
        <>
          <p className="mb-4 text-left">
            SBGC celebrated the season at our Christmas Party on December 14,
            2025—food, music, and friendly badminton with the community.
          </p>
          <p>
            <a
              href="https://www.flickr.com/photos/amerphotographyz/albums/72177720330993036/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a3636]  underline"
            >
              View photos on Flickr →
            </a>
          </p>
        </>
      );
    },
  },
  {
    description: "November 2, 2025",
    title: "SBGC First Open Major Tournament",
    src: openMajorImage,
    ctaText: "View photos",
    ctaLink: "https://www.flickr.com/photos/amerphotographyz/albums/72177720330208135/",
    content: () => {
      return (
        <>
          <p className="mb-4 text-left">
            Our first Open Major Tournament took place on November 2, 2025,
            bringing players from across the region for a weekend of competitive
            play and socializing.
          </p>
          <p className="mb-2">
            <a
              href="https://www.facebook.com/media/set/?set=oa.1482889189633159&type=3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a3636]  underline block"
            >
              View photos on Facebook →
            </a>
            <a
              href="https://www.flickr.com/photos/amerphotographyz/albums/72177720330208135/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a3636]  underline block"
            >
              View photos on Flickr →
            </a>
          </p>
        </>
      );
    },
  },
  {
    description: "October 21, 2025",
    title: "Rhady's Cup",
    src: rhadyCupImage,
    ctaText: "View photos",
    ctaLink: "https://www.facebook.com/media/set/?set=oa.1153282776148830&type=3",
    content: () => {
      return (
        <>
          <p className="mb-4 text-left">
            Rhady's Cup on October 21, 2025 supported Liver Cancer Awareness—badminton,
            community, and a cause. Thank you to everyone who participated and
            helped spread awareness.
          </p>
          <p className="mb-2">
            <a
              href="https://www.facebook.com/media/set/?set=oa.1153282776148830&type=3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a3636] underline block"
            >
              View photos on Facebook →
            </a>
            <a
              href="https://www.facebook.com/groups/2052647094761701/media/albums"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a3636] underline block"
            >
              View group albums →
            </a>
          </p>
        </>
      );
    },
  },
  {
    description: "March 22, 2025",
    title: "SBGC Inter Barangay Tournament",
    src: interBarangayImage,
    ctaText: "View photos",
    ctaLink: "https://www.flickr.com/photos/amerphotographyz/albums/72177720324326715/",
    content: () => {
      return (
        <>
          <p className="mb-4 text-left">
            The SBGC Inter Barangay Tournament on March 22, 2025 brought together
            barangay teams for a day of competition and community spirit.
          </p>
          <p>
            <a
              href="https://www.flickr.com/photos/amerphotographyz/albums/72177720324326715/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a3636] underline"
            >
              View photos on Flickr →
            </a>
          </p>
        </>
      );
    },
  },
];
