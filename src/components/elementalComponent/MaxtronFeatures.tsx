import React from "react";
import enhanceImage1 from "../../assets/ai_images/content.webp";
import enhanceImage2 from "../../assets/ai_images/creative.webp";
import polishImage1 from "../../assets/ai_images/data.webp";
import polishImage2 from "../../assets/ai_images/modular.webp";

const MaxtronFeatures = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col items-center py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 xl:py-16 font-sans">
      {/* Top label */}
      <div className="w-full max-w-7xl mb-3 sm:mb-4 px-2 sm:px-0">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#8B5CF6] flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[#8B5CF6] tracking-widest uppercase">
            FEATURES
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="w-full max-w-7xl px-2 sm:px-0 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#1A1A1A] leading-tight mb-3 sm:mb-4 md:mb-6">
          Why Brands Choose Maxtron AI Studio
        </h1>
      </div>

      {/* ENHANCE Section */}
      <div className="w-full max-w-7xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#8B5CF6] tracking-wide uppercase mb-6 sm:mb-8 md:mb-10">
            ENHANCE
          </h2>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Card 1 - Multi-format content pipelines */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
            <div className="flex-1 flex items-center justify-center h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] bg-gradient-to-br from-purple-50 to-purple-100 p-0 m-0">
              <img src={enhanceImage1} alt="Multi-format content pipelines" className="w-full h-full object-cover p-0 m-0" />
            </div>
            <div className="p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#1A1A1A] leading-tight">
                Multi-format content pipelines
              </h3>
            </div>
          </div>

          {/* Card 2 - Creative + Data in One Stack */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
            <div className="flex-1 flex items-center justify-center h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] bg-gradient-to-br from-green-50 to-green-100 p-0 m-0">
              <img src={enhanceImage2} alt="Creative + Data in One Stack" className="w-full h-full object-cover p-0 m-0" />
            </div>
            <div className="p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#1A1A1A] leading-tight">
                Creative + Data in One Stack
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* POLISH Section */}
      <div className="w-full max-w-7xl">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#8B5CF6] tracking-wide uppercase mb-6 sm:mb-8 md:mb-10">
            POLISH
          </h2>
        </div>

        {/* Polish Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Card 3 - Modular for Web3, SaaS, Consumer & more */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
            <div className="flex-1 flex items-center justify-center h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] bg-gradient-to-br from-blue-50 to-blue-100 p-0 m-0">
              <img src={polishImage1} alt="Modular for Web3, SaaS, Consumer & more" className="w-full h-full object-cover p-0 m-0" />
            </div>
            <div className="p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#1A1A1A] leading-tight">
                Modular for Web3, SaaS, Consumer & more
              </h3>
            </div>
          </div>

          {/* Card 4 - Faster than any traditional creative team */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
            <div className="flex-1 flex items-center justify-center h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] bg-gradient-to-br from-orange-50 to-orange-100 p-0 m-0">
              <img src={polishImage2} alt="Faster than any traditional creative team" className="w-full h-full object-cover p-0 m-0" />
            </div>
            <div className="p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#1A1A1A] leading-tight">
                Faster than any traditional creative team
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Additional spacing at bottom */}
      <div className="h-8 sm:h-12 md:h-16 lg:h-20"></div>
    </div>
  );
};

export default MaxtronFeatures;