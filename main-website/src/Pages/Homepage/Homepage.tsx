import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import heroImage from '../../assets/HeroImage.jpg';
import { motion } from "motion/react";
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';
import { InfiniteMovingCards } from "../../Components/ui/infinite-moving-cards";
import DynamicCard from '../../Components/3DCard/DynamicCard';
import eventImage1 from '../../assets/sbgc-party.jpg';
import eventImage2 from '../../assets/tournament_rewards.jpg';


const Homepage = () => {
    const [scrolled, setScrolled] = useState(true);
    const [scrolledPast, setScrolledPast] = useState(true);
    const images = [
        { key: "1", image: Image1, alt: "Badminton Image 1" },
        { key: "2", image: Image2, alt: "Badminton Image 2" },
        { key: "3", image: Image3, alt: "Badminton Image 3" }
    ];
    // const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            
            requestAnimationFrame(() => {
                const y = window.scrollY;
                setScrolled(y < 1);
                setScrolledPast(y < 300);
                ticking = false;
            });
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Preload LCP hero image for faster first paint
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroImage;
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
        return () => { if (link.parentNode) link.parentNode.removeChild(link); };
    }, []);  

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div
                style={{
                    backgroundImage: scrolled ? `url(${heroImage})` : 'none',
                    position: scrolledPast ? 'fixed' : 'relative',
                    top: scrolledPast ? 0 : '300px',
                    zIndex: 10,
                    transition: 'background-image 1s ease-out',
                }}
                className="overflow-hidden w-full h-[100vh] bg-center bg-cover flex flex-col justify-center items-center bg-[#2a1f1f]"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                    className={`overflow-hidden flex-wrap flex flex-row justify-center items-center h-screen w-full transition-all duration-700 ease-out ${scrolled ? "bg-radial from-[#000000]/50 to-[transparent]" : ""} ${scrolledPast ? "" : "sticky top-0 left-0 z-10"}`}
                >
                    <div className={`relative overflow-hidden transition-all duration-700 ease-out flex flex-col justify-center ${scrolled ? "items-center h-[20vh] lg:h-[80vh] w-[90vw]" : "h-[60vh] lg:h-[80vh] lg:w-[50vw] w-[80vw] min-w-[340px]"}`}>
                        <motion.div
                            className={`absolute inset-0 flex flex-col justify-center items-center w-full ${scrolled ? "" : "hidden"}`}
                            animate={{ opacity: scrolled ? 1 : 0 }}
                            transition={{ duration: 0, ease: "easeInOut" }}
                            style={{ pointerEvents: scrolled ? "auto" : "none" }}
                        >
                            <h1 className="overflow-hidden transition-all duration-700 ease-out flex items-center font-bold text-white m-0 p-0 w-full justify-center h-[40vh] text-[25vw]">
                                SBGC
                            </h1>
                            <h2 className="overflow-hidden transition-all duration-700 ease-out flex font-semibold text-white m-0 p-0 w-full justify-center items-center h-[7.5vh] text-[4.375vw]">
                                Sunday Badminton Group Club
                            </h2>
                        </motion.div>
                        <motion.div
                            className={`absolute inset-0 flex flex-col justify-center items-start w-full lg:w-[50vw] w-[80vw] min-w-[340px] ${scrolled ? "hidden" : ""}`}
                            animate={{ opacity: scrolled ? 0 : 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ pointerEvents: scrolled ? "none" : "auto" }}
                        >
                            <h1 className="overflow-hidden transition-all duration-700 ease-out flex items-center font-bold text-white m-0 p-0 w-full justify-start h-[15vh] text-[6rem]">
                                SBGC
                            </h1>
                            <h2 className="overflow-hidden transition-all duration-700 ease-out flex font-semibold text-white m-0 p-0 w-full justify-start items-start h-[5vh] lg:text-[2rem] text-[1rem]">
                                Sunday Badminton Group Club
                            </h2>
                            <p className="overflow-hidden transition-all duration-700 ease-out text-left text-white mt-[2vh] p-0 lg:w-[40vw] w-[80vw]">
                                We are a non-profit organization dedicated to promoting fitness, well-being, and community through the sport of badminton and inclusive social events.
                            </p>
                            <div className="overflow-hidden transition-all duration-700 ease-out flex flex-row lg:justify-start justify-center gap-[8vw] text-white mt-[2vh] h-[10vh] p-0 lg:w-[40vw] w-full lg:items-start items-center">
                                <Link to="/aboutus" className="overflow-hidden transition-all duration-700 ease-out rounded-[3vh] h-[7vh] bg-[#55788C] lg:px-[2vw] lg:py-[1vh] px-[7vw] flex items-center justify-center">
                                    Learn More
                                </Link>
                                <Link to="/register" className="overflow-hidden transition-all duration-700 ease-out rounded-[3vh] h-[7vh] bg-[#DC0000] lg:px-[2vw] lg:py-[1vh] px-[7vw] flex items-center justify-center">
                                    Register Now!
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className={`overflow-hidden transition-all duration-700 ease-out flex justify-center items-center flex-row lg:flex-col gap-[2vh] lg:w-[25vw] w-full ${scrolled ? "hidden" : ""}`}
                        animate={{ opacity: scrolled ? 0 : 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{ pointerEvents: scrolled ? "none" : "auto" }}
                    >
                        <img className="overflow-hidden transition-all duration-700 ease-out rounded-[3vh] lg:w-[20vw] hidden lg:flex" src={Image1} alt="Badminton Icon" decoding="async" />
                        <img className="overflow-hidden transition-all duration-700 ease-out rounded-[3vh] lg:w-[20vw] w-[90vw]" src={Image2} alt="Badminton Icon" decoding="async" />
                        <img className="overflow-hidden transition-all duration-700 ease-out rounded-[3vh] lg:w-[20vw] hidden lg:flex" src={Image3} alt="Badminton Icon" decoding="async" />
                    </motion.div>

                </motion.div>
                <motion.button
                    animate={{ y: [0, -25, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`transition-opacity duration-500 ease-out ${scrolledPast ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <img className="h-[5vh] w-[5vh]" src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" alt="Scroll down" decoding="async" loading="lazy" width={80} height={80} />
                </motion.button>
            </div>
            <div
                className="mt-[290px] flex flex-col justify-center items-center h-full w-[100vw] bg-gradient-to-b from-[#2a1f1f] from-25% to-[#4a3636] gap-[5vh] pb-[10vh]"
            >
                <div className="mt-[5vh] flex flex-col justify-center items-center gap-[2vh] w-[80vw]">
                    <h3 className="text-start w-[80vw] lg:w-[50vw] text-white text-[2.5rem] font-medium">About us</h3>
                    <p className="text-start w-[80vw] lg:w-[50vw] text-[1.25rem] text-white font-light mb-[2vh]"> 
                        What began as a small Sunday meet-up among friends in 2017 has grown into a vibrant, family-friendly network of over 150 active members across the Greater Toronto Area. Rooted in Filipino-Canadian values and open to all backgrounds, 
                        SBGC creates a welcoming space where players of all skill levels can connect, grow, and thrive. From weekly games and major tournaments to community picnics, charity work, and cultural celebrations, SBGC is more than a club, 
                        it’s a home for camaraderie, diversity, and shared joy.
                    </p>
                    <Link to="/aboutus" className={`text-white overflow-hidden transition-all duration-500 rounded-[3vh] w-[50vw] h-[7vh] bg-[#55788C] lg:px-[2vw] lg:py-[1vh] px-[7vw] flex items-center justify-center ${scrolled ? "hidden" : ""}`}>
                                Learn More
                            </Link>
                    <div className="w-[80vw]">
                        <InfiniteMovingCards
                            items={images}//PLACE HOLDER IMAGES, WILL REPLACE LATER AND WILL GIVE PROPER JSON FILE
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[2vh] w-[80vw]">
                    <h3 className="text-start w-[80vw] lg:w-[50vw]  text-white text-[2.5rem] font-medium">Our Events</h3>
                    <p className="text-start w-[80vw] lg:w-[50vw]  text-[1.25rem] text-white font-light"> 
                        SBGC hosts a variety of events throughout the year to foster community engagement and promote the sport of badminton. Our flagship event, the Annual SBGC Open Tournament, attracts players from across the region for a weekend of competitive play and socializing.
                    </p>
                    <div className="w-[80vw] flex justify-center items-center flex-row flex-wrap gap-[2vw]">
                        <DynamicCard
                            name="SBGC Parties"
                            description="SBGC Parties are social gatherings organized by the club to foster camaraderie among members. These events often feature food, music, and friendly badminton matches."
                            image={eventImage1}
                            eventPage="/events"
                        />
                        <DynamicCard
                            name="Annual SBGC Open Tournaments"
                            description="Our flagship event, the Annual SBGC Open Tournament, attracts players from across the region for a weekend of competitive play and socializing."
                            image={eventImage2}
                            eventPage="/events"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap w-full gap-[2vw]">
                    <motion.div whileHover={{scale:1.1}} className="h-[30vh] w-[30vw] min-w-[300px] bg-[#DC0000] rounded-[2vh] flex flex-col justify-center items-center">
                        <h3 className="text-white text-center  text-[2rem] font-medium">Vision</h3>
                        <p className="text-white text-center text-[1rem] font-light">
                            SBGC aims to unite, train, and support the Filipino-Canadian community in Ontario through badminton tournaments, social events, and sports. It also promotes charity, preserves Philippine heritage, and welcomes diverse members.
                        </p>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="h-[30vh] w-[30vw] min-w-[300px] bg-[#FF7F00] rounded-[2vh] flex flex-col justify-center items-center">
                        <h3 className="text-white text-center  text-[2rem] font-medium">Membership</h3>
                        <p className="text-white text-center text-[1rem] font-light">
                            Our club boasts an estimated membership of 150 to 263 individuals, with 150 active members. Enthusiasts from the GTA, including Mississauga, Brampton, Milton, Hamilton, Vaughan, Oakville, Burlington, and Cambridge, are part of this vibrant community.
                        </p>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="h-[30vh] w-[30vw] min-w-[300px] bg-[#55788C] rounded-[2vh] flex flex-col justify-center items-center">
                        <h3 className="text-white text-center text-[2rem] font-medium">Programs</h3>
                        <p className="text-white text-center text-[1rem] font-light">
                            SBGC hosts weekly badminton tournaments with the local Filipino-Canadian community and organizes major Summer and Winter team events. It competes in international tournaments, including NABA events in the U.S.
                        </p>
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[2vh] w-[80vw]">
                    <h3 className="text-start w-[80vw] lg:w-[50vw]  text-white text-[2.5rem] font-medium">Join Us</h3>
                    <p className="text-start w-[80vw] lg:w-[50vw]  text-[1.25rem] text-white font-light mb-[2vh]"> 
                        Whether you’re a seasoned player or new to the sport, SBGC welcomes you to join our community. Become a member today and experience the joy of badminton, the warmth of friendship, and the thrill of competition.
                    </p>
                    <Link to="/register" className={`text-white my-[2vh] w-full max-w-[300px] overflow-hidden transition-all duration-500 rounded-[3vh] h-[7vh] bg-[#DC0000] lg:px-[2vw] lg:py-[1vh] px-[7vw] flex items-center justify-center ${scrolled ? "hidden" : ""}`}>
                        Register Now!
                    </Link>
                </div>

                
            </div>
        </div>
    );
};

export default Homepage;