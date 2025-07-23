import React from "react";
import aiSvg from "../../assets/augmentation/ai.svg";
import aiProduct from "../../assets/products/aiproduct2.webp";
import aiCallingBg from "../../assets/internal/aicallingbg.webp";

const ArtificialIntelligence = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto text-gray-900">
      <div className="flex flex-col lg:flex-row lg:items-center md:p-10 lg:p-12 xl:p-12 sm:p-10 p-5 min-h-[70vh] gap-8">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            INTELLIGENCE THAT BUILDS,<br />POWERS, AND GROWS BRANDS
          </h1>
          <p className="text-lg md:text-xl text-[#6C4AB6] font-medium mt-2">
            Maxtron AI Studio is where artificial intelligence meets creative execution, strategic thinking and operational speed.
          </p>
        </div>
        {/* Right: Images Grid */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 max-w-lg mx-auto p-4">
          <div className="flex gap-4">
            <img src={aiSvg} alt="AI SVG" className="rounded-2xl w-1/2 h-56 object-cover bg-white p-6" />
            <img src={aiProduct} alt="AI Product" className="rounded-2xl w-1/2 h-56 object-cover" />
          </div>
          <div className="flex justify-center">
            <img src={aiCallingBg} alt="AI Calling Background" className="rounded-2xl w-2/3 h-56 object-cover" />
          </div>
        </div>
      </div>
      {/* You can add more AI-related sections here, similar to how Blockchain.tsx adds more sections below the hero */}
    </div>
  );
};

export default ArtificialIntelligence; 