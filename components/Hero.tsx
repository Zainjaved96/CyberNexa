import React from 'react'
import Image from 'next/image'
import CodeMockup from '@/components/CodeMockup'
import img from "./images/device.png"

const Hero = () => {
  return (
    <div className="hero py-[3rem] bg-base-200  ">
  <div className="hero-content flex-col  lg:flex-row">
  <div className='flex flex-col gap-1 max-w-[40rem]'>
      <h1 className="text-5xl text-primary font-bold ">Empowering  Your Digital Future</h1>
      <h2 className="text-2xl col-4 ">Unlock the potential of your enterprise with our top-notch software development team. </h2>
      <div className="flex gap-2 pt-5">
      <button className="btn btn-primary ">Our Service</button>
      <button className="btn btn-outline btn-secondary ">Get in Touch</button>

      </div>
    </div>
   <Image src={img} width={400} height={400} className='justify-end' alt="image" />
  </div>
</div>
  )
}

export default Hero