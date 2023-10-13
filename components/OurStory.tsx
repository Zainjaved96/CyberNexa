import React from 'react'
import img from "./images/writing.png";
import Image from "next/image";
import Link from "next/link";
const OurStory = () => {
  return (
    <div className="hero py-[3rem] bg-base-200  ">
    <div className="hero-content flex-col  lg:flex-row">
    <div className='flex flex-col gap-1 max-w-[40rem]'>
        <h2 className="text-5xl text-primary font-bold ">Our Story</h2>
        <p className="col-4 ">In a digital age where innovation is paramount, CyberNexa has emerged as a pioneering force, driven by an unwavering vision to revolutionize the tech landscape. Their groundbreaking cybersecurity system has safeguarded global enterprises and governments, while their cutting-edge solutions have transcended industries, shaping smart cities, enabling healthcare advancements, and fueling sustainable energy practices. Through dedication, resilience, and an exceptional team, CyberNexa&apos;s legacy stands as a testament to the limitless possibilities of technology, inspiring a future where innovation knows no bounds.</p>
        <div className="flex gap-2 pt-5">
        <button className="btn btn-primary ">Our Service</button>
        <Link href={'https://calendly.com/iamsajjadali-dev/30min'} className="btn btn-outline btn-secondary ">Get in Touch</Link>
  
        </div>
      </div>
     <Image src={img} width={400} height={400} className='justify-end' alt="image" />
    </div>
  </div>
  )
}

export default OurStory