import React from "react";
import aiSvg from "../../assets/ai_images/first.webp";
import aiProduct from "../../assets/ai_images/second.webp";
import aiCallingBg from "../../assets/ai_images/third.webp";
import AIPowTeam from "../elementalComponent/aipowteam";
import AiStudioDelivers from "../elementalComponent/AiStudioDelivers";

const ArtificialIntelligence = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto bg-white text-gray-900 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-20">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#1A1A1A] tracking-tight">
            Intelligence that Builds,<br className="hidden sm:block" />
            Powers, and Grows Brands
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6C4AB6] font-medium mt-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Maxtron AI Studio is where artificial intelligence meets creative execution, strategic thinking, and operational speed.
          </p>
        </div>

        {/* Image Grid */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl">
            {/* Large Image */}
            <div className="flex-1">
              <img 
                src={aiSvg} 
                alt="AI abstract" 
                loading="lazy"
                className="rounded-2xl w-full h-full object-cover shadow-xl"
                style={{ aspectRatio: '3/4', maxHeight: '500px' }}
              />
            </div>

            {/* Stacked Images */}
            <div className="flex flex-1 flex-col gap-6">
              <img 
                src={aiProduct} 
                alt="AI Product" 
                loading="lazy"
                className="rounded-2xl w-full object-cover shadow-xl"
                style={{ aspectRatio: '1/1', maxHeight: '240px' }}
              />
              <img 
                src={aiCallingBg} 
                alt="AI Studio Background" 
                loading="lazy"
                className="rounded-2xl w-full object-cover shadow-xl"
                style={{ aspectRatio: '1/1', maxHeight: '240px' }}
              />
            </div>
          </div>
        </div>

      </div>
      <AIPowTeam />
      <AiStudioDelivers />
    </div>
  );
};

export default ArtificialIntelligence;