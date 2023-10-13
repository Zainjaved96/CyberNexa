'use client';
import React from 'react'
import Image from 'next/image'
import CodeMockup from '@/components/CodeMockup'
import img from "./images/device.png"
import Link from 'next/link'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <motion.div className="hero py-[3rem] bg-base-200  "
    
    >
    <div className="hero-content flex-col  lg:flex-row">
    <div className='flex flex-col gap-1 max-w-[40rem]'>
        <motion.h1
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -40,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
          delay: 0.4,
        }}  
          
         className="text-5xl text-primary font-bold ">Empowering   <span className="text-secondary">Digital</span>  Future</motion.h1>
        <motion.h2
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -40,
          opacity: 0,
        }}
        transition={{
          duration: 0.9,
          ease: 'easeOut',
          delay: 0.4,
        }}  
        className="text-xl col-4 ">Unlock the potential of your enterprise with our top-notch software development team. </motion.h2>
        <div className="flex gap-2 pt-5">
        <button className="btn btn-primary ">Our Service</button>
        <Link href={'https://calendly.com/iamsajjadali-dev/30min'} className="btn btn-outline btn-secondary ">Get in Touch</Link>

        </div>
      </div>
    <Image 
    
    src={img} width={400} height={400} className='justify-end' alt="image" />
    </div>
    </motion.div>
  )
}

export default Hero