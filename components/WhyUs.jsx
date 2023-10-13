import React from "react";
import img from "./images/icon3.png";
import Image from "next/image";
import Link from "next/link";
const WhyUs = () => {
  return (
    <div className="hero py-[3rem]   ">
    <div className="hero-content flex-col  lg:flex-row">
    <div className='flex flex-col gap-1 max-w-[40rem]'>
        <h2 className="text-5xl text-primary font-bold ">Why Choose us?</h2>
        <p className="col-4 ">At CyberNexa, we stand as a beacon of innovation and reliability in the ever-evolving world of technology. Our unwavering commitment to excellence and cutting-edge solutions sets us apart from the rest. With a dedicated team of seasoned experts, we consistently deliver top-tier cybersecurity services, robust software solutions, and unparalleled IT support. What truly distinguishes us is our relentless pursuit of customer satisfaction; we tailor our offerings to meet your unique needs, ensuring that your business remains secure, efficient, and at the forefront of technological advancement. Choose CyberNexa for a partner who not only understands the intricacies of the digital landscape but also serves as your trusted ally on the path to success.</p>
        <div className="flex gap-2 pt-5">
        <button className="btn btn-primary ">Our Service</button>
        <Link href={'https://calendly.com/iamsajjadali-dev/30min'} className="btn btn-outline btn-secondary ">Get in Touch</Link>
  
        </div>
      </div>
     <Image src={img} width={400} height={400} className='justify-end' alt="image" />
    </div>
  </div>
  );
};

export default WhyUs;
