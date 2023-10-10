import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MiniServices from '@/components/MiniServices'
import WhyUs from './../components/WhyUs';
import CodeMockup from '@/components/CodeMockup';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Footer from '@/components/Footer';
import type { Metadata } from 'next'
 
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
    <WhyUs/>
    <CodeMockup/>
    <Stats/>
    <Process/>
    <Footer/>
    </>


  )
}
