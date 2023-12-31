import React from 'react'

const Process = () => {
  return (
    <div >
    <div className="row py-12 bg-base-100 grid cols-2">
      <div>
      <h2 className="text-6xl font-bold text-center">Our<span className="text-secondary ">  Streamlined</span> Process </h2>
        <p className='max-w-3xl text-justify mt-2  mx-auto'>CyberNexa, a leading tech company, follows a three-step approach: Requirements, Analysis, and Solutions. By first thoroughly understanding client needs, we leverage advanced tools to craft effective solutions. Our results consistently surpass expectations, providing clients with tailored, cost-efficient solutions that empower them in the dynamic tech industry.</p>
      </div>
      
        <div className="flex flex-col justify-center py-[4rem] ">
        <ul className="steps steps-vertical sm:justify-center lg:steps-horizontal py-4">
            <li className="step step-primary">Requirements</li>
            <li className="step step-primary">Analysis</li>
            <li className="step step-primary">Solutions</li>
        </ul>
    </div>
    </div>
    </div>
 
   
    
  )
}

export default Process