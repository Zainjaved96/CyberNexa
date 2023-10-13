import React from 'react'

const Testimonials = () => {
  return (
    <>
    {/* Container for demo purpose */}
    <div className="container my-8 px-3 mx-auto md:px-6">
    <h2 className="text-6xl font-bold text-center">Happy & <span className="text-secondary">Satisfied Clients</span> </h2>

      {/* Section: Design Block */}
      <section className="mb-32 text-center lg:text-left">
        <div className="py-12 md:px-6 md:px-12 ">
          <div className="container mx-auto xl:px-32">
            <div className="flex flex-wrap lg:pl-[100px] grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                    Anna Doe
                  </h2>
                  <p className="mb-4 font-semibold">Trusted Client</p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis 
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  CyberNexa, the tech company I recently had the pleasure of working with, exceeded all expectations with their forward-thinking solutions and exceptional expertise. Their innovative approach to technology, spanning areas such as cybersecurity, artificial intelligence, and custom software development, truly sets them apart in the industry.
                  </p>
                  <ul className="flex justify-center lg:justify-start">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-secondary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-secondary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-secondary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-secondary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-secondary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/080.jpg"
                  className="lg:rotate-[6deg]  lg:w-[80%] rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
    {/* Container for demo purpose */}
  </>
  
  )
}

export default Testimonials