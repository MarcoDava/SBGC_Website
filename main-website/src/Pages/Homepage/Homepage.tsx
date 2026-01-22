import React from 'react';
import heroImage from '../../assets/HeroImage.jpg';
// import { motion } from "motion/react"
interface Props {};

const Homepage = (props: Props) => {
    return(
    <div style={{backgroundImage:`url(${heroImage})`}} className="w-[100vw] h-[100vh] bg-cover flex flex-col justify-start items-center gap-10">
        <div className="hero_front_page flex flex-col justify-between items-center w-[70vw]">
            <h1>SBGC</h1>
            <h2>Sunday Badminton Group Club</h2>
        </div>
    </div>)
}//image is a placeholder, will replace with something better later
export default Homepage;