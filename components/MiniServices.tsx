import React from 'react'
import Image from 'next/image'
import seo from "./images/seo.png"
import mobapp from "./images/mobapp.png"
import software from "./images/software.png"
import marketing from "./images/marketing.png"
import Link from 'next/link'
const MiniServices = () => {
  return (
    <div className=' m-auto  text-center py-[3rem] bg-base-200 '>
        <h2 className="text-6xl font-bold">Services We <span className="text-secondary "> Provide</span> </h2>
        <p className="text-xl py-1 text-info">That help you scale your business efficiently.</p>
        <div className='flex flex-wrap justify-evenly gap-2 align-middle py-[3rem]'>
            <div className="card max-w-[14rem] btn-ghost">
            <Image src={seo} width={200} height={200} alt='hey' />
            <h3 className="text-2xl pt-3"> SEO</h3>
            </div>   
              
            <div className="card max-w-[14rem] btn-ghost">
            <Image src={software} width={200} height={200} alt='hey' />
            <h3 className="text-2xl pt-3">Development</h3>
            </div>   
            <div className="card max-w-[14rem] btn-ghost">
            <Image src={marketing} width={200} height={200} alt='hey' />
            <h3 className="text-2xl pt-3">Marketing</h3>
            </div>   
        </div> 
        <Link href={"https://calendly.com/iamsajjadali-dev/30min"} className="btn btn-primary btn-outline">Book Our Services</Link>
        
    </div>
  )
} 

export default MiniServices