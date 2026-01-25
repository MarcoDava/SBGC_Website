import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/HeroImage.jpg';
import { motion } from "motion/react";
import Image1 from '../../assets/Image1.jpg';

interface Props {};

const Homepage = (props: Props) => {
    const [scrolled, setScrolled] = useState(true);
    const images = [Image1, Image2, Image3];  // Array of images
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Set scrolled to false if scrolled past 100px (adjust threshold as needed)
            setScrolled(window.scrollY < 100);
        };

        // Add listener to window
        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);  // Empty dependency array: runs once on mount

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div style={{ backgroundImage: `url(${heroImage})` }} className="bg-[url(${heroImage})] w-full h-[100vh] bg-center bg-cover">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                    className={`overflow-hidden transition-all duration-300 bg-radial from-[#000000]/50 to-[transparent] flex flex-row justify-center items-center h-[90vh] w-[100vw] ${scrolled ? "" : ""}`}
                >
                    <div className={`overflow-hidden transition-all duration-300 flex flex-col justify-center ${scrolled ? "items-center h-[20vh] lg:h-[40vh] w-[90vw]" : "items-start h-[10vh] lg:h-[40vh] w-[50vw]"}`}>
                        <h1 className={`overflow-hidden transition-all duration-300 flex  items-center font-bold text-white m-0 p-0 ${scrolled ? "justify-center h-[30vh] w-full text-[25vw]" : "justify-start h-[10vh] w-[50vw] text-[7.5vw]"}`}>
                            SBGC
                        </h1>
                        <h2 className={`overflow-hidden transition-all duration-300 flex justify-center items-center font-semibold text-white m-0 p-0  ${scrolled ? "justify-center items-center h-[5vh] w-full text-[4.375vw]" : "justify-start min-h-[50px] h-[2.5rem] w-[60vw] text-[2vw]"}`}>
                            Sunday Badminton Group Club
                        </h2>
                        <p className={`overflow-hidden transition-all duration-300 flex items-center font-bold text-white m-0 p-0 ${scrolled ? "w-0" : "w-[50vw]"}`}>testing</p>
                    </div>
                    <img className={`overflow-hidden transition-all duration-300 h-[100vh] w-auto ${scrolled ? "w-0" : "w-full"}`} src="https://www.iconpacks.net/icons/2/free-badminton-icon-3086-thumb.png" alt="Badminton Icon" />

                </motion.div>
                <motion.button animate={{ y: [0, 25, 0] }} transition={{ duration: 2, repeat: Infinity }} className="">
                    <img className="h-[5vh] w-[5vh]" src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" alt="Scroll down" />
                </motion.button>
            </div>
            <div className="mt-[5vh] flex flex-col justify-center items-center h-[10vh] w-[100vw]">
                <h3 className="text-white text-[2.5vw] font-medium">About us</h3>
            </div>
        </div>
    );
};

export default Homepage;