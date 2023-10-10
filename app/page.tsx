import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MiniServices from '@/components/MiniServices'
import WhyUs from './../components/WhyUs';
import CodeMockup from '@/components/CodeMockup';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

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
