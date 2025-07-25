import React from "react";
import one from "../../assets/ai_images/one.webp";
import two from "../../assets/ai_images/two.webp";
import three from "../../assets/ai_images/three.webp";
import four from "../../assets/ai_images/four.webp";
import five from "../../assets/ai_images/five.webp";
import six from "../../assets/ai_images/six.webp";

const AIPowTeam = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col items-center py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 xl:py-16 font-sans">
      {/* Top label */}
      <div className="w-full max-w-7xl mb-3 sm:mb-4 px-2 sm:px-0">
        <span className="text-xs sm:text-sm font-semibold text-[#6C4AB6] tracking-widest uppercase font-[Switzer]">
          CRAFTED WITH AI
        </span>
      </div>
      {/* Main Heading */}
      <div className="w-full max-w-7xl px-2 sm:px-0 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-[#1A1A1A] leading-tight mb-3 sm:mb-4 md:mb-6 font-[Switzer] font-normal">
          Your on-demand, AI-powered creative team
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5C5C5C] font-normal max-w-3xl leading-relaxed font-[Switzer]">
          AI does the heavy-lifting. The final touches are all yours –
          everything is customizable.
        </p>
      </div>
      {/* Cards Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-0">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
          <div className="flex-1 flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-50 p-0 m-0">
            <img
              src={one}
              alt="Explainer"
              className="w-full h-full object-cover p-0 m-0"
            />
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
            <div className=" text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#1A1A1A] leading-tight mb-2 sm:mb-3 md:mb-4 font-[Switzer] font-normal">
              Explainer videos
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5C5C5C] leading-relaxed mt-1 font-[Geist]">
              Break down complex ideas in seconds
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
          <div className="flex-1 flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-50 p-0 m-0">
            <img
              src={two}
              alt="Social Content"
              className="w-full h-full object-cover p-0 m-0"
            />
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
            <div className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#171717] leading-tight mb-2 sm:mb-3 md:mb-4">
              Scroll-stopping social media content
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5C5C5C] leading-relaxed mt-1 font-[Geist]">
              Carousels, reels, threads
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
          <div className="flex-1 flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-50 p-0 m-0">
            <img
              src={three}
              alt="Data Visualizations"
              className="w-full h-full object-cover p-0 m-0"
            />
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
            <div className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#1A1A1A] leading-tight mb-2 sm:mb-3 md:mb-4">
              Data visualizations
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5C5C5C] leading-relaxed mt-1 font-[Geist]">
              Insightful and trend summaries
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
          <div className="flex-1 flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-50 p-0 m-0">
            <img
              src={four}
              alt="Written Content"
              className="w-full h-full object-cover p-0 m-0"
            />
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
            <div className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#1A1A1A] leading-tight mb-2 sm:mb-3 md:mb-4">
              Human-like written content
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5C5C5C] leading-relaxed mt-1 font-[Geist]">
              AI removes filler words and writes blogs and branding copy
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
          <div className="flex-1 flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-50 p-0 m-0">
            <img
              src={five}
              alt="Brand Content"
              className="w-full h-full object-cover p-0 m-0"
            />
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
            <div className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#1A1A1A] leading-tight mb-2 sm:mb-3 md:mb-4">
              All the content your brand needs
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5C5C5C] leading-relaxed mt-1 font-[Geist]">
              Produced with speed and accuracy by AI.
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
          <div className="flex-1 flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-50 p-0 m-0">
            <img
              src={six}
              alt="Captions"
              className="w-full h-full object-cover p-0 m-0"
            />
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
            <div className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#1A1A1A] leading-tight mb-2 sm:mb-3 md:mb-4">
              Beautiful Captions
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5C5C5C] leading-relaxed mt-1 font-[Geist]">
              Instantly engage your viewers with eye-catching, AI-generated
              captions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPowTeam;
