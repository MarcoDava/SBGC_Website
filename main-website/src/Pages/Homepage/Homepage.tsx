import React, { useState } from 'react';
import heroImage from '../../assets/HeroImage.jpg';
import { motion } from "motion/react"
interface Props {};

const Homepage = (props: Props) => {
    return(
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}  className="w-full h-full flex flex-col justify-center items-center">
        <div style={{backgroundImage:`url(${heroImage})`}} className="h-[100vh] bg-center bg-cover">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{duration: 0.8,ease: [0, 0.71, 0.2, 1.01],}} className="bg-radial from-[#000000]/50 to-[transparent] flex flex-col justify-center items-center h-[90vh] w-[100vw]">
                <div className="flex flex-col justify-center items-center h-[20vh] w-[90vw]">
                    <h1 className="flex justify-center items-center text-[25vw] font-bold text-white m-0 p-0 h-[25rem] w-full">SBGC</h1>
                    <h2 className="flex justify-center items-center text-[4.375vw] font-semibold text-white p-0 h-[4.375rem] w-full">Sunday Badminton Group Club</h2>
                </div>
            </motion.div>
            <motion.button animate={{ y: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="">
            <img className="h-[5vh] w-[5vh]" src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"/>
            </motion.button>
        </div>
        <div className="mt-[5vh] flex flex-col justify-center items-center h-[10vh] w-[100vw]">
            <h3 className="text-white text-[2.5vw] font-medium">Scroll Down to Learn More</h3>
        </div>
    </motion.div>)
}//image is a placeholder, will replace with something better later
export default Homepage;