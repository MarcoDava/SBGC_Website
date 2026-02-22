import { BackgroundCircles } from "@/Components/ui/circles";
import { InfiniteMovingCards } from "@/Components/ui/infinite-moving-cards";
import Image1 from "../../assets/Image1.jpg";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/Image3.jpg";
import eventImage1 from "../../assets/sbgc-party.jpg";
import eventImage2 from "../../assets/tournament_rewards.jpg";



const movingCardImages = [
  { key: "1", image: Image1, alt: "Badminton at SBGC" },
  { key: "2", image: Image2, alt: "Community games" },
  { key: "3", image: Image3, alt: "SBGC events" },
  { key: "4", image: eventImage1, alt: "SBGC party" },
  { key: "5", image: eventImage2, alt: "Tournament rewards" },
];

const Registerpage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-[#2a1f1f] from-20% to-[#4a3636]">
      <div className="w-full h-20 bg-[#2a1f1f] relative">
        <BackgroundCircles className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-6 py-10 flex flex-col items-center pb-16">
        

        <div className="w-full">
          <InfiniteMovingCards
            items={movingCardImages}
            direction="left"
            speed="normal"
          />
        </div>
        <div className="w-full flex flex-row gap-[4vw] items-center justify-center flex-wrap">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl font-semibold mb-6 text-left w-full">
            Join SBGC
          </h1>

          <p className="text-white/90 text-base leading-relaxed text-left mb-10 min-w-[300px] flex-wrap">
            Join a welcoming community of over 150 members who share your love for
            badminton. Get access to weekly games, tournaments, social events, and
            charity activities—all skill levels and backgrounds welcome.
          </p>
        </div>
        <a
          href="https://forms.gle/yyNU5nB7ySEQfsAe7"
          target="https://forms.gle/yyNU5nB7ySEQfsAe7"
          rel="https://forms.gle/yyNU5nB7ySEQfsAe7"
          className="rounded-[3vh] h-12 px-8 bg-[#DC0000] text-white font-semibold flex items-center justify-center hover:bg-[#b80000] transition-colors shadow-lg w-[500px] flex-wrap"
        >
          Open registration form
        </a>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
