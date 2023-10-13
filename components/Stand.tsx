import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import punctual from  "./images/icons/punctual.png"
import efficient from  "./images/icons/efficient.png"
import honesty from  "./images/icons/honesty.png"
import trust from  "./images/icons/Trust.png"
const Stand = () => {
  return (
    <>
     <div className=" py-[3rem] bg-base-200 ">
        <div className="grid md:grid-cols-2 px-3  md:px-[10rem]">
            <div className='md:m-auto sm:mb-4 '>
            <h2 className="text-6xl font-bold mb-2">Our<span className="text-secondary "> Values</span></h2>
                <p className="pe-4 text-justify">Our Values mean alot to use and we have followed them in our years of journey. Our each employee follows these principles and consider them dear in their hearts. We would love if you also consider these things. </p>
                <button className="btn btn-md mt-3 btn-primary">Get to Know</button>
            </div>
            <div className="md:grid md:grid-cols-2 ">
                <div className="card-row mx-1">
                    <div className="flex flex-col bg-base-100  rounded px-1 py-3 my-2">
                        <Image src={punctual} width={65} height={65} alt="punctual" />
                        <h2 className="text-lg px-3 mb-2">Punctual </h2>
                        <p className="px-3 text-sm">We believe in Time managment is the key to our success </p>
                        <div className="px-3">
                        <a className="link text-center my-2 py-2">Learn more</a>
                        </div>
                    </div>
                    <div className="flex flex-col bg-base-100  rounded px-1 py-3 my-2">
                        <Image src={efficient} width={65} height={65} alt="punctual" />
                        <h2 className="text-lg px-3 mb-2">Efficiency </h2>
                        <p className="px-3 text-sm">We believe in Time managment is the key to our success </p>
                        <div className="px-3">
                        <a className="link text-center my-2 py-2">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-row mx-1 lg:mt-[18px]">
                    <div className="flex flex-col bg-base-100  rounded px-1 py-3 my-2">
                        <Image src={trust} width={65} height={65} alt="punctual" />
                        <h2 className="text-lg px-3 mb-2">Trust </h2>
                        <p className="px-3 text-sm">We believe in Time managment is the key to our success </p>
                        <div className="px-3">
                        <a className="link text-center my-2 py-2">Learn more</a>
                        </div>
                    </div>
                    <div className="flex flex-col bg-base-100  rounded px-1 py-3 my-2">
                        <Image src={honesty} width={65} height={65} alt="punctual" />
                        <h2 className="text-lg px-3 mb-2">Honesty </h2>
                        <p className="px-3 text-sm">We believe in Time managment is the key to our success </p>
                        <div className="px-3">
                        <a className="link text-center my-2 py-2">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
               
           
        </div>
    </div>
    </>
   
  )
}

export default Stand