import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/HeroImage.jpg';
import { motion } from "motion/react";
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';

interface Props {};

const Homepage = (props: Props) => {
    const [scrolled, setScrolled] = useState(true);
    const [scrolledPast, setScrolledPast] = useState(true);
    const images = [Image1, Image2, Image3];  // Array of images
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
            <div style={{ backgroundImage: scrolled ? `url(${heroImage})` : 'none', position: scrolledPast ? 'fixed' : 'relative', top: scrolledPast ? 0 : 500, left: scrolledPast ? 0 : 'auto', zIndex: scrolledPast ? 10 : 'auto' }} className="overflow-hidden transition-all w-full h-[100vh] bg-center bg-cover flex flex-col justify-center items-center bg-[#26332A]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                    className={`overflow-hidden transition-all duration-500  flex flex-row justify-center items-center h-full w-full ${scrolled ? "bg-radial from-[#000000]/50 to-[transparent]" : ""}`}
                >
                    <div className={`overflow-hidden transition-all duration-200 flex flex-col  ${scrolled ? "justify-center items-center h-[20vh] lg:h-[60vh] w-[90vw]" : "h-[10vh] lg:h-[40vh] w-[50vw]"}`}>
                        <h1 className={`overflow-hidden transition-all duration-300 flex  items-center font-bold text-white m-0 p-0 w-full ${scrolled ? "justify-center h-[40vh] text-[25vw]" : "justify-start h-[15vh] text-[7.5vw]"}`}>
                            SBGC
                        </h1>
                        <h2 className={`overflow-hidden transition-all duration-300 flex font-semibold text-white m-0 p-0 w-full ${scrolled ? "justify-center items-center h-[7.5vh] text-[4.375vw]" : "justify-start items-start h-[5vh] text-[2vw]"}`}>
                            Sunday Badminton Group Club
                        </h2>
                        <p className={`overflow-hidden transition-all duration-300 text-left text-white m-0 p-0 ${scrolled ? "hidden" : "w-[70vw]"}`}>
                            We are a non-profit organization dedicated to promoting fitness, well-being, and community through the sport of badminton and inclusive social events.
                        </p>
                    </div>
                    <img className={`overflow-hidden transition-all duration-500 ${scrolled ? "hidden" : "w-[20vw]"}`} src={Image1} alt="Badminton Icon" />

                </motion.div>
                <motion.button animate={{ y: [0, -25, 0] }} transition={{ duration: 2, repeat: Infinity }} className="">
                    <img className="h-[5vh] w-[5vh]" src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" alt="Scroll down" />
                </motion.button>
            </div>
            <div className="mt-[5vh] flex flex-col justify-center items-center h-[200vh] w-[100vw] bg-gradient-to-b from-[#26332A] from-25% to-[#B2A592] gap-[5vh] pb-[10vh]">
                <h3 className="text-white text-[2.5vw] font-medium">About us</h3>
            </div>
        </div>
    );
};

export default Homepage;