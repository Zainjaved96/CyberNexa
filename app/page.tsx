import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MiniServices from '@/components/MiniServices'
import WhyUs from './../components/WhyUs';
import CodeMockup from '@/components/CodeMockup';
import Process from '@/components/Process';
import Footer from '@/components/Footer';
import type { Metadata } from 'next'
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
 
export const metadata: Metadata = {
  title: 'CyberNexa',
  description: 'An all round Digital Solution company for your online presence.',
}
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <MiniServices/>
    <Features/>
    <WhyUs/>
    <CodeMockup/>
    <Testimonials/>
    <Process/>

    <Footer/>

    </>


  )
}
