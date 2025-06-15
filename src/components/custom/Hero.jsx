import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import leafAnimation from '../../assets/falling.json'
import Lottie from "lottie-react";


function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-10'><span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span>Personalized Itineraries at Your Fingertips</h1>

      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

      <Link to={'/create-trip'}><Button>Get Started, It's free</Button></Link>

      <img src="/landing.png" alt="" className='w-[750px]' />
 <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: "150px",
        zIndex: 10,
      }}
    >
      <img
        src="/asset/totoro.png"
        alt="Floating Totoro"
        style={{ width: "100%", objectFit: "contain" }}
      />
    </motion.div>



  <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: 5 }}>
    <Lottie animationData={leafAnimation} loop autoPlay />
  

    </div>
  
    
    </div>);
}

export default Hero