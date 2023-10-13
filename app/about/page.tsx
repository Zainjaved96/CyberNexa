import React from 'react'
import Navbar from '@/components/Navbar'
import OurStory from '@/components/OurStory'
import Stand from "@/components/Stand"
import Footer from '@/components/Footer'
import Teams from '@/components/Teams'

const page = () => {
  return (
    <>
    <Navbar/>
    <OurStory/> 
    <Stand/>
    <Teams/>
    <Footer/>
    </>

  )
}

export default page