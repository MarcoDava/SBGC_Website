import React, { useState } from 'react';
import heroImage from '../../assets/HeroImage.jpg';
import { motion } from "motion/react"
interface Props {};

const Homepage = (props: Props) => {
    return(
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }} style={{backgroundImage:`url(${heroImage})`}} className="w-full h-[100vh]  bg-cover flex flex-col justify-center items-center gap-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{duration: 0.8,ease: [0, 0.71, 0.2, 1.01],}} className="bg-radial from-[#000000]/50 to-[transparent] flex flex-col justify-center items-center h-[100vh] w-[100vw]">
            <div className="flex flex-col justify-center items-center h-[20vh]">
                <h1 className="flex justify-center items-center text-[400px] font-bold text-white m-0 p-0 h-[25rem]">SBGC</h1>
                <h2 className="flex justify-center items-center text-[70px] font-semibold text-white p-0 h-[4.375rem]">Sunday Badminton Group Club</h2>
            </div>
        </motion.div>
    </motion.div>)
}//image is a placeholder, will replace with something better later
export default Homepage;