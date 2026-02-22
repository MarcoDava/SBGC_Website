import { BackgroundCircles } from "@/Components/ui/circles";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function PrincipleItem({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref);
  return (
    <motion.li
      ref={ref}
      className="flex gap-4 rounded-xl backdrop-blur-sm bg-[#2a1f1f]/20 border border-[#4a3636]/30 p-5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a3636] text-white font-semibold flex items-center justify-center text-lg">
        {index + 1}
      </span>
      <div className="w-full">
        <h2 className="text-white font-semibold text-lg mb-1 w-full">{title}</h2>
        <p className="text-white/85 text-sm leading-relaxed w-full">{description}</p>
      </div>
    </motion.li>
  );
}

const principles = [
    
  {
    title: "Respect",
    description:
      "Treat all members, players, opponents, officials, leaders, coordinators especially family members or guardians of members with respect and courtesy.",
  },
  {
    title: "Inclusivity",
    description:
      "Foster an inclusive environment where everyone feels welcome, regardless of badminton skill level, age, gender, religion, race, language, physical abilities and background (national, regional).",
  },
  {
    title: "Sportsmanship",
    description:
      "Display good sportsmanship, win or lose, and encourage others to do the same.",
  },
  {
    title: "Fair Play",
    description: "Adhere to the rules of the game and promote fair play.",
  },
  {
    title: "Responsibility",
    description:
      "Take responsibility for your actions and the impact of your behavior and mistakes on others.",
  },
  {
    title: "Integrity",
    description:
      "Members should act with honesty and integrity in all interactions.",
  },
  {
    title: "Commitment",
    description: "Show dedication to SBGC's activities and goals.",
  },
  {
    title: "Safety",
    description: "Prioritize the safety and well-being of all members.",
  },
];

export default function CodeOfEthicspage() {
  
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-[#2a1f1f] from-20% to-[#4a3636]">
      <div className="w-full h-20 bg-[#2a1f1f] relative">
        <BackgroundCircles className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-6 py-10 flex flex-col items-center">
        <h1 className="text-white text-3xl font-semibold mb-3 text-center">
          SBGC Code of Ethics
        </h1>

        <p className="text-white/90 text-center mb-10 leading-relaxed">
          At SBGC, our values guide how we play, connect, and grow together.
          These principles ensure that every member feels respected, supported,
          and safe while enjoying our community.
        </p>

        <ol className="w-full flex flex-col gap-6 list-none pl-0">
          {principles.map((item, index) => (
            <PrincipleItem
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </ol>

        <div className="mt-10 w-full rounded-xl bg-[#2a1f1f]/60 border border-[#4a3636]/30 p-6">
          <h2 className="text-white font-semibold text-lg mb-2">
            For Social Media Use (Messenger Group Chats, Facebook Group)
          </h2>
          <h2 className="text-white font-semibold text-lg mb-3">
            For SBGC Sports and Club Activities
          </h2>
          <p className="text-white/85 text-sm leading-relaxed">
            These guidelines are in place to foster respect, collaboration, and
            a welcoming environment, ensuring that everyone at SBGC can enjoy a
            positive and meaningful experience together, in-person and online.
          </p>
        </div>
      </div>
    </div>
  );
}
