import React from "react";

import process from "../assets/augmentation/process.svg";

const processStepsData = [
  {
    number: "1",
    title: "Discovery Call",
    description: "Understand your tech, team, and timelines",
  },
  {
    number: "2",
    title: "Share Bench Profiles",
    description: "Within 24-48 hours",
  },
  {
    number: "3",
    title: "Tech Evaluation",
    description: "You interview & test them",
  },
  {
    number: "4",
    title: "Trial Period",
    description: "1-2 week free/reduced cost trial",
  },
  {
    number: "5",
    title: "Deploy & Scale",
    description: "Scale as per sprint load",
  },
];

const Process = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row md:items-stretch w-full">
      <div
        className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8 
                      p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20"
      >
        {" "}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300 leading-tight">
          Our Staff Augmentation Process
        </h1>
        <button className="bg-[#7030A0] hover:bg-[#5e2886] text-white font-semibold py-3 px-8 rounded-md text-lg self-center md:self-start transition-colors duration-200">
          Request Talent
        </button>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0 mt-6 md:mt-8">
          <img
            src={process}
            alt="Staff Augmentation Process Diagram"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className="md:w-1/2 w-full flex flex-col justify-center 
                      space-y-6 sm:space-y-8 lg:space-y-10 
                      p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20"
      >
        {" "}
        {processStepsData.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-white text-black font-bold w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl flex-shrink-0 mt-1">
              {step.number}
            </div>
            <div className="flex-grow">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-200 mb-1 lg:mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
