import React from 'react'

const Process = () => {
  return (

    <div className="flex flex-col justify-center py-[4rem] bg-base-200">
        <h2 className='text-4xl text-center font-bold'>Our  Streamline <span className="text-secondary"> Process </span></h2>
        <ul className="steps steps-vertical lg:steps-horizontal py-4">
            <li className="step step-primary">Requirements</li>
            <li className="step step-primary">Analysis</li>
            <li className="step step-primary">Solutions</li>
            <li className="step step-secondary">Results</li>
        </ul>
    </div>
    
  )
}

export default Process