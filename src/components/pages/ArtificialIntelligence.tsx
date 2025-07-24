import React from "react";
import aiSvg from "../../assets/ai_images/first.webp";
import aiProduct from "../../assets/products/aiproduct2.webp";
import aiCallingBg from "../../assets/internal/aicallingbg.webp";
import Aipowerdelivers from "../elementalComponent/Aipowerdelivers";

const ArtificialIntelligence = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto text-gray-900 bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center md:p-12 lg:p-16 xl:p-20 sm:p-8 p-4 min-h-[70vh] gap-10">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-2 sm:p-4">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#222]">
            INTELLIGENCE THAT BUILDS,<br />POWERS, AND GROWS BRANDS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#6C4AB6] font-medium mt-2 max-w-xl">
            Maxtron AI Studio is where artificial intelligence meets creative execution, strategic thinking and operational speed.
          </p>
        </div>
        {/* Right: Images Grid - 2 column layout */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="flex w-full max-w-xl gap-6 flex-col sm:flex-row">
            {/* Left column: Tall image */}
            <div className="flex-1">
              <img 
                src={aiSvg} 
                alt="AI abstract illustration" 
                className="rounded-2xl w-full h-full min-h-[300px] object-cover shadow-lg" 
                style={{ aspectRatio: '3/4', maxHeight: 500 }}
              />
            </div>
            {/* Right column: Two stacked images */}
            <div className="flex flex-1 flex-col gap-6 justify-between">
              <img 
                src={aiProduct} 
                alt="AI Product showcase" 
                className="rounded-2xl w-full object-cover shadow-lg" 
                style={{ aspectRatio: '1/1', maxHeight: 240 }}
              />
              <img 
                src={aiCallingBg} 
                alt="AI Calling Studio background" 
                className="rounded-2xl w-full object-cover shadow-lg" 
                style={{ aspectRatio: '1/1', maxHeight: 240 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* You can add more AI-related sections here, similar to how Blockchain.tsx adds more sections below the hero */}
      <Aipowerdelivers />
    </div>
  );
};

export default ArtificialIntelligence; 