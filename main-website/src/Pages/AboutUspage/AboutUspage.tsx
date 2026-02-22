import { Link } from "react-router";
import { BackgroundCircles } from "@/Components/ui/circles";
import tournament2019Image from "../../assets/April 21 2019 Weekly Tournament at Batts Atletic Inc Tomken Road.jpg";
import fathersDayImage from "../../assets/Fathers Day celebrations June 17 2018 v2.jpg";
import secondYearAnniversaryImage from "../../assets/Happy 2nd Year Anniversary March 2019.jpg";
import LBCTournamentImage from "../../assets/LBC FUN TOURNAMENT April 14 2024.jpg";
import firstAnniverseryImage from "../../assets/SBGC 1st Anniversary March 12 2018.jpg";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      className="mb-12 text-left bg-[#5b4747]/20 rounded-[2vw] p-2 backdrop-blur-sm"
    >
      <h2 className="text-white text-xl font-semibold mb-4 pb-2 border-b border-[#4a3636]/50 text-left">
        {title}
      </h2>
      <div className="text-white/90 text-base leading-relaxed space-y-4 text-left">
        {children}
      </div>
    </motion.div>
  );
}

/** Section with an image on the right; text wraps around it. */
function SectionWithImageLeft({
  title,
  imageSrc,
  imageAlt,
  children,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      className="mb-12 text-left overflow-hidden bg-[#5b4747]/20 rounded-[2vw] p-2 backdrop-blur-sm"
    >
      <h2 className="text-white text-xl font-semibold mb-4 pb-2 border-b border-[#4a3636]/50 text-left">
        {title}
      </h2>
      <figure className="float-right w-[min(280px,45%)] ml-4 mb-4 shrink-0 rounded-xl overflow-hidden border border-[#4a3636]/30">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full object-cover p-2 rounded-[2vw]"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="text-white/60 text-sm mt-2 px-1 text-left ">
          {imageAlt}
        </figcaption>
      </figure>
      <div className="text-white/90 text-base leading-relaxed space-y-4 text-left">
        {children}
      </div>
    </motion.div>
  );
}

export default function AboutUspage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-[#2a1f1f] from-20% to-[#4a3636]">
      <div className="w-full h-20 bg-[#2a1f1f] relative">
        <BackgroundCircles className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-6 py-10 flex flex-col items-center pb-16">
        <Section title="About Us">
          <p>
            What began as a small Sunday meet-up among friends in 2017 has grown
            into a vibrant, family-friendly network of over 150 active members
            across the Greater Toronto Area. Rooted in Filipino-Canadian values
            and open to all backgrounds, SBGC creates a welcoming space where
            players of all skill levels can connect, grow, and thrive. From weekly
            games and major tournaments to community picnics, charity work, and
            cultural celebrations, SBGC is more than a club—it's a home for
            camaraderie, diversity, and shared joy.
          </p>
        </Section>

        <div className="w-full space-y-10">
          <SectionWithImageLeft
            title="History of SBGC - Formation and Founders"
            imageSrc={tournament2019Image}
            imageAlt="Early SBGC"
          >
            <p>
              One fine Sunday on March 11, 2017, a group of four friends
              organized a get-together and “mini reunion” to play badminton for
              fun. Little did they know that something BIG would take place out of
              that very first friendly badminton games.
            </p>
            <p>
              Sunday Badminton Group Club (SBGC) was founded by three high
              school classmates, who graduated from a private school in Quezon
              City, Philippines (Francisco School Batch '87), together with their
              family friend and neighbour who is also a passionate badminton
              enthusiast.
            </p>
            <p>
              For the first three months, they played at 4U Badminton Centre in
              Mississauga, with two or three close family friends who joined them
              in their weekly Sunday games.
            </p>
            <p>
              In June 2017, their small group relocated to a new badminton
              facility located on Tomken Road, Mississauga, called Batts
              Athletics, owned and operated by Mr. Raghu Kondatasula.
            </p>
            <p>
              Although the facility had only two badminton courts, the owner was
              very gracious to accommodate the growing family-oriented group. As
              the members enjoyed the “exclusive” use and special privileges of
              this new facility, SBGC encouraged new players to bring their kids
              and wives on Sundays so that they could enjoy the badminton games
              too.
            </p>
            <p>
              Through referrals among circles of friends and families, the
              members of SBGC grew steadily. It was on January 8, 2018, that they
              officially named the group Sunday Badminton Group Club (SBGC) and a
              Facebook account for SBGC was launched on that day. With the new
              Facebook group account at the helm, it opened the club to a larger
              and wider membership.
            </p>
            <p>
              The players shared and posted their photos and videos of the weekly
              games through the latest social media applications for easier
              updates and communication. SBGC players and members announced
              plans, activities, and exchanged information through these new
              messaging platforms.
            </p>
            <p>
              During that year, aside from the weekly Sunday games at the court,
              SBGC organized and hosted monthly social events such as
              “after-the-game” celebrations, birthday, anniversary and victory
              parties, Father's Day celebrations, and various fun events in the
              Batts Athletic Party Room inside the badminton facility.
            </p>
            <p>
              On June 2, 2019, SBGC officially organized and launched the very
              first major summer badminton tournament. SBGC players fully
              participated in this well-organized tournament, which was open to
              all Filipino enthusiasts who had minimal or advanced playing
              experience. All the members (beginner, intermediate, advanced
              players) were able to highlight what they had learned and display
              their badminton skills.
            </p>
            <p>
              SBGC members enjoyed a weekend full of exciting matches and
              camaraderie. That tournament proved to be the most thrilling
              experience for the players. Thereafter it became a major part of
              SBGC's activities to organize two major badminton tournaments
              (summer and winter season) every year.
            </p>
            <p>
              Progressively, SBGC grew large enough to plan and participate in
              various types of outdoor activities such as annual summer picnic,
              swimming, camping, Christmas parties, and other social events for
              the Filipino community.
            </p>
            <p>
              On November 23, 2019, the first ever Open Badminton Tournament
              sponsored by Batts Athletic was participated in by SBGC players who
              competed with other top players (non-Filipino heritage). That
              exciting and highly competitive tournament proved to be the
              “crucial test” for their homegrown players.
            </p>
            <p>
              In 2020, due to the COVID-19 pandemic, there were “on and off”
              badminton games because of the mandated prohibition of public
              gatherings and closure of sports facilities, in compliance with the
              government's regulations at that time. SBGC managed to organize
              Sunday games whenever the badminton facility was open.
            </p>
            <p>
              After the pandemic year 2020, SBGC transferred to the newly opened
              and larger Batts Athletics with eight badminton courts on Kennedy
              Road South, Brampton. This bigger and modern facility opened many
              opportunities for SBGC to accommodate a wider membership.
            </p>
            <p>
              Due to the challenges of social isolation brought by the COVID-19
              pandemic, many new members regained interest in badminton, physical
              fitness, and wellness activities. In early 2021, a greater number of
              badminton players registered to play with SBGC. Membership grew
              exponentially from the original four members to more than fifty
              members during that year. Since then the players have grown steadily.
              SBGC now manages about one hundred fifty members who are all
              actively playing and participating in major and weekly badminton
              tournaments.
            </p>
          </SectionWithImageLeft>

          <SectionWithImageLeft
            title="Chartered Non-profit"
            imageSrc={fathersDayImage}
            imageAlt="Fathers Day Celebration"
          >
            <p>
              Sunday Badminton Group Club (SBGC Canada Ltd.) was registered as a
              non-profit organization in June 2022. The three high school
              classmate founding members include Rando Fuentes, who serves as
              the CEO, Agnes Cruz as the COO, Gary Torralba as the CTO, and their
              close friend Marissa Rolluque Gairanan is the current CFO. Their
              collective vision and dedication have been instrumental in shaping
              the club into a thriving Filipino community.
            </p>
          </SectionWithImageLeft>

          <SectionWithImageLeft
            title="Mission and Purpose"
            imageSrc={secondYearAnniversaryImage}
            imageAlt="2nd Year Anniversary"
          >
            <p>
              The primary mission of SBGC is to promote physical fitness and
              overall well-being among its members and their families. The club
              aims to foster harmony, understanding, wellness, and camaraderie
              through the sport of badminton and a variety of social events. SBGC
              is committed to creating diverse teams and fostering a culture of
              diversity, equity, inclusion, and belonging (DEIB). The club
              advocates for a safe space where all members feel a sense of
              belonging, regardless of age, gender, religion, creed, sexual
              orientation, national (or regional) origin, ethnicity, or
              disability. Prioritizing the well-being, mental, and emotional
              health of its members is at the core of SBGC's values, ensuring
              everyone feels supported and valued.
            </p>
          </SectionWithImageLeft>

          <Section title="Vision">
            <p>
              SBGC envisions developing, gathering, training, supporting, and
              mentoring the Filipino-Canadian community living in Ontario,
              Canada. The club aims to achieve this through various intercity and
              international badminton tournaments, social events, activities,
              sports, and games. Additionally, SBGC provides a platform for
              raising funds for charity and preserving Philippine heritage. The
              club also strives to include other nationalities in its membership,
              with active members currently from Vietnam, India, and China.
            </p>
          </Section>

          <Section title="Membership">
            <p>
              The club boasts an estimated membership of 150 to 263 individuals,
              with 150 active members. Enthusiasts from the Greater Toronto
              Area, including Mississauga, Brampton, Milton, Hamilton, Vaughan,
              Oakville, Burlington, and Cambridge, are part of this vibrant
              community.
            </p>
          </Section>

          <SectionWithImageLeft
            title="Activities and Values"
            imageSrc={LBCTournamentImage}
            imageAlt="LBC Tournament"
          >
            <p>
              SBGC organizes weekly badminton tournaments in collaboration with
              the local Filipino-Canadian community to promote the sport. The
              club hosts annual Summer and Winter Major Badminton Team
              Tournaments and participates in international badminton
              tournaments, such as those organized by the North American
              Badminton Association (NABA) in Virginia Beach and Washington DC,
              USA. Regular badminton training sessions, social events, birthday
              parties, victory parties, awards nights, annual camping, picnics,
              and summer activities are integral to the club's calendar. SBGC
              also engages in charitable works, including feeding programs and
              fund-raising activities for charitable causes in the Philippines.
            </p>
          </SectionWithImageLeft>

          <Section title="Benefits for Members">
            <p>
              Members of SBGC enjoy numerous benefits, including special rates on
              court fees at Batts Athletic, access to major tournaments, special
              prizes, medals, and trophies for champions and winners, and free
              mentoring sessions provided by SBGC coaches and mentors. Members
              have the opportunity to play and learn with advanced and
              high-performing badminton players and participate in inter-city and
              international tournaments. Additionally, members receive freebies
              during important events and major tournaments, access to special
              social events and gatherings, and special features on the official
              SBGC Facebook Group account. The club also rewards members who hit
              membership milestones and offers a family-oriented, friendly, and
              fun online community. Networking, socializing, volunteer work, and
              job opportunities are other benefits of being part of SBGC.
            </p>
          </Section>

          <SectionWithImageLeft
            title="Conclusion"
            imageSrc={firstAnniverseryImage}
            imageAlt="SBGC's 1st Anniversary"
          >
            <p>
              The Sunday Badminton Group Club (SBGC Canada Ltd.) stands as a
              beacon of community spirit, inclusivity, and athletic excellence.
              Through its diverse activities and unwavering commitment to its
              mission and vision, SBGC continues to enrich the lives of its
              members and foster a sense of belonging and camaraderie within the
              Filipino-Canadian community and beyond.
            </p>
          </SectionWithImageLeft>

          <div className="mt-12 flex justify-center">
            <Link
              to="/register"
              className="rounded-[3vh] h-12 px-8 bg-[#DC0000] text-white font-semibold flex items-center justify-center hover:bg-[#b80000] transition-colors shadow-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
