import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/HeroImage.jpg';
import { motion } from "motion/react";
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';
import { InfiniteMovingCards } from "../../Components/ui/infinite-moving-cards";

interface Props {};

const Homepage = (props: Props) => {
    const [scrolled, setScrolled] = useState(true);
    const [scrolledPast, setScrolledPast] = useState(true);
    const images = [
        { image: Image1, alt: "Badminton Image 1" },
        { image: Image2, alt: "Badminton Image 2" },
        { image: Image3, alt: "Badminton Image 3" }
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            
            setScrolled(window.scrollY < 100);
            setScrolledPast(window.scrollY < 500);
        };

        
        window.addEventListener('scroll', handleScroll);

       
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);  

    return (
        <div style={{ minHeight: scrolledPast ? '100vh' : 'auto' }} className="w-full h-full flex flex-col justify-center items-center">
            <div style={{ backgroundImage: scrolled ? `url(${heroImage})` : 'none', position: scrolledPast ? 'sticky' : 'relative', top: scrolledPast ? 0 : 500, left: scrolledPast ? 0 : 'auto', zIndex: scrolledPast ? 10 : 'auto' }} className="overflow-hidden transition-all w-full h-[100vh] bg-center bg-cover flex flex-col justify-center items-center bg-[#26332A]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                    className={`overflow-hidden flex-wrap transition-all duration-500  flex flex-row justify-center items-center h-full w-full ${scrolled ? "bg-radial from-[#000000]/50 to-[transparent]" : ""}`}
                >
                    <div className={`overflow-hidden transition-all duration-200 flex flex-col justify-center  ${scrolled ? "items-center h-[20vh] lg:h-[80vh] w-[90vw]" : "h-[60vh] lg:h-[80vh] lg:w-[50vw] w-[80vw] min-w-[340px]"}`}>
                        <div className={`overflow-hidden transition-all duration-200 flex flex-col justify-center items-start ${scrolled ? "h-[45vh]" : "h-[20vh]"}`}>
                            <h1 className={`overflow-hidden transition-all duration-300 flex  items-center font-bold text-white m-0 p-0 w-full ${scrolled ? "justify-center h-[40vh] text-[25vw]" : "justify-start h-[15vh] text-[7.5vw]"}`}>
                                SBGC
                            </h1>
                            <h2 className={`overflow-hidden transition-all duration-300 flex font-semibold text-white m-0 p-0 w-full ${scrolled ? "justify-center items-center h-[7.5vh] text-[4.375vw]" : "justify-start items-start h-[5vh] text-[2vw]"}`}>
                                Sunday Badminton Group Club
                            </h2>
                        </div>
                        <p className={`overflow-hidden transition-all duration-300 text-left text-white mt-[2vh] p-0 ${scrolled ? "hidden" : "lg:w-[40vw] w-[80vw]"}`}>
                            We are a non-profit organization dedicated to promoting fitness, well-being, and community through the sport of badminton and inclusive social events.
                        </p>
                        <div className={`overflow-hidden transition-all duration-300 flex flex-row justify-start gap-[8vw] text-white mt-[2vh] h-[10vh] p-0 ${scrolled ? "hidden" : "lg:w-[40vw] w-full lg:items-start items-center"}`}>
                            <button className={`overflow-hidden transition-all duration-500 rounded-[3vh] h-[7vh] bg-[#55788C] pl-[2vw] pr-[2vw] p-[1vh] ${scrolled ? "hidden" : ""}`}>
                                Learn More
                            </button>
                            <button className={`overflow-hidden transition-all duration-500 rounded-[3vh] h-[7vh] bg-[#DC0000] pl-[2vw] pr-[2vw] p-[1vh] ${scrolled ? "hidden" : ""}`}>
                                Register Now!
                            </button>

                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 flex justify-center items-center flex-row lg:flex-col gap-[2vh] ${scrolled ? "hidden" : "lg:w-[25vw] w-full"}`}>
                        <img className={`overflow-hidden transition-all duration-500 rounded-[3vh] ${scrolled ? "hidden" : "lg:w-[20vw]"}`} src={Image1} alt="Badminton Icon" />
                        <img className={`overflow-hidden transition-all duration-500 rounded-[3vh] ${scrolled ? "hidden" : "lg:w-[20vw]"}`} src={Image2} alt="Badminton Icon" />
                        <img className={`overflow-hidden transition-all duration-500 rounded-[3vh]  ${scrolled ? "hidden" : "lg:w-[20vw]"}`} src={Image3} alt="Badminton Icon" />
                    </div>

                </motion.div>
                <motion.button animate={{ y: [0, -25, 0] }} transition={{ duration: 2, repeat: Infinity }} className={`${scrolled ? "opacity-100" : "opacity-0"}`}>
                    <img className="h-[5vh] w-[5vh]" src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" alt="Scroll down" />
                </motion.button>
            </div>
            <div className="mt-[5vh] flex flex-col justify-center items-center h-[200vh] w-[100vw] bg-gradient-to-b from-[#26332A] from-25% to-[#B2A592] gap-[5vh] pb-[10vh]">
                <div className="flex flex-col justify-center items-center gap-[2vh] w-[80vw]">
                    <h3 className="text-start w-[80vw] lg:w-[50vw] text-white text-[2.5vw] font-medium">About us</h3>
                    <p className="text-start w-[80vw] lg:w-[50vw] text-[1.25rem] text-white font-light mb-[2vh]"> 
                        What began as a small Sunday meet-up among friends in 2017 has grown into a vibrant, family-friendly network of over 150 active members across the Greater Toronto Area. Rooted in Filipino-Canadian values and open to all backgrounds, 
                        SBGC creates a welcoming space where players of all skill levels can connect, grow, and thrive. From weekly games and major tournaments to community picnics, charity work, and cultural celebrations, SBGC is more than a club, 
                        it’s a home for camaraderie, diversity, and shared joy.
                    </p>
                    <div className="w-[80vw]">
                        <InfiniteMovingCards
                            items={images}//PLACE HOLDER IMAGES, WILL REPLACE LATER AND WILL GIVE PROPER JSON FILE
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[2vh] w-[80vw]">
                    <h3 className="text-start w-[80vw] lg:w-[50vw]  text-white text-[2.5vw] font-medium">Our Events</h3>
                    <p className="text-start w-[80vw] lg:w-[50vw]  text-[1.25rem] text-white font-light"> 
                        SBGC hosts a variety of events throughout the year to foster community engagement and promote the sport of badminton. Our flagship event, the Annual SBGC Open Tournament, attracts players from across the region for a weekend of competitive play and socializing.
                    </p>
                </div>

                
            </div>
        </div>
    );
};

export default Homepage;