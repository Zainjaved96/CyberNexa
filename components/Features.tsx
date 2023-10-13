import React from 'react';

interface Feature {
  title: string;
  description: string;
}

const cyberNexaFeatures: Feature[] = [
  {
    title: "Tech Solutions",
    description: "CyberNexa's innovative tech solutions.",
  },
  {
    title: "Expert Team",
    description: "Adept professionals across tech domains.",
  },
  {
    title: "Custom Software",
    description: "Tailored software for unique needs.",
  },
  {
    title: "Cybersecurity",
    description: "Top-tier data protection services.",
  },
  {
    title: "Cloud Efficiency",
    description: "Scalable, cost-effective cloud solutions.",
  },
  {
    title: "Data Analytics",
    description: "Data-driven decision support.",
  },
  {
    title: "Blockchain Integration",
    description: "Pioneers in blockchain technology.",
  },
  {
    title: "Responsive Support",
    description: "Client-centric customer assistance.",
  },
];

const SingleFeature: React.FC<Feature> = ({ title, description }) => (
  <div className="mb-12">
    <div className="flex">
      <div className="shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="mr-3 h-5 w-5 text-success"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="ml-2 grow">
        <p className="mb-1 font-bold">{title}</p>
        <p className="text-neutral-500 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);


const Features = () => {
  return (
    <>
  {/* Container for demo purpose */}
  <div className="container my-8 mx-auto md:px-6">
    {/* Section: Design Block */}
    <section className="mb-32">
      <div className="flex justify-center">
        <div className="max-w-[700px] text-center">
          
          <h2 className="text-6xl font-bold mb-2">Key <span className="text-secondary ">Features</span> </h2>
          <p className="mb-16 text-neutral-500 dark:text-neutral-300">
            We offer expert solution and features tailored just for your needs we pinpoint the objective and achieve with efficient pace.
          </p>
        </div>
      </div>
      <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
        {cyberNexaFeatures.map((feature, index) => (
        <SingleFeature key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}
</>

  )
}

export default Features