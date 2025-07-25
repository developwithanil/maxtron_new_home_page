import React from "react";

const AIPowTeam = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col items-center py-12 px-2 font-sans">
      {/* Top label */}
      <div className="w-full max-w-6xl mb-2">
        <span className="text-xs font-semibold text-[#6C4AB6] tracking-widest uppercase">CRAFTED WITH AI</span>
      </div>
      {/* Main Heading */}
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight mb-2">
          Your on-demand, AI-powered creative team
        </h1>
        <p className="text-base md:text-lg text-[#444] font-normal mb-8 max-w-2xl">
          AI does the heavy-lifting. The final touches are all yours – everything is customizable.
        </p>
      </div>
      {/* Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[220px]">
          <div className="flex-1 flex items-center justify-center min-h-[140px]">
            {/* PLACEHOLDER */}
          </div>
          <div className="p-5">
            <div className="font-semibold text-lg md:text-xl text-[#1A1A1A]">Explainer videos</div>
            <div className="text-xs md:text-sm text-[#444] mt-1">Break down complex ideas in seconds</div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[220px]">
          <div className="flex-1 flex items-center justify-center min-h-[140px]">
            {/* PLACEHOLDER */}
          </div>
          <div className="p-5">
            <div className="font-semibold text-lg md:text-xl text-[#1A1A1A]">Scroll-stopping social media content</div>
            <div className="text-xs md:text-sm text-[#444] mt-1">Carousels, reels, threads</div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[220px]">
          <div className="flex-1 flex flex-col items-center justify-center min-h-[100px] pt-6">
            {/* PLACEHOLDER */}
          </div>
          <div className="p-5">
            <div className="font-semibold text-lg md:text-xl text-[#1A1A1A]">Data visualizations</div>
            <div className="text-xs md:text-sm text-[#444] mt-1">Insightful and trend summaries</div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[220px]">
          <div className="flex-1 flex flex-col justify-center min-h-[100px] px-5 pt-5">
            {/* PLACEHOLDER */}
          </div>
          <div className="p-5">
            <div className="font-semibold text-lg md:text-xl text-[#1A1A1A]">Human-like written content</div>
            <div className="text-xs md:text-sm text-[#444] mt-1">AI removes filler words and writes blogs and branding copy</div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[220px]">
          <div className="flex-1 flex items-center justify-center min-h-[80px]">
            {/* PLACEHOLDER */}
          </div>
          <div className="p-5">
            <div className="font-semibold text-lg md:text-xl text-[#1A1A1A]">All the content your brand needs</div>
            <div className="text-xs md:text-sm text-[#444] mt-1">Produced with speed and accuracy by AI.</div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[220px]">
          <div className="flex-1 flex flex-col items-start justify-center min-h-[80px] px-5 pt-5 gap-2">
            {/* PLACEHOLDER */}
          </div>
          <div className="p-5">
            <div className="font-semibold text-lg md:text-xl text-[#1A1A1A]">Beautiful Captions</div>
            <div className="text-xs md:text-sm text-[#444] mt-1">Instantly engage your viewers with eye-catching, AI-generated captions.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPowTeam;
