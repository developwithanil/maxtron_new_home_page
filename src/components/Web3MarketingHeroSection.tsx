import React from "react";
import web3marketing from "../assets/web3marketing/marketingvideo.mp4";

const Web3MarketingHeroSection = () => {
  return (
    <div className="relative top-0">
      <div className="mx-2 mt-2 sm:mx-4 md:mx-6 lg:mx-8">
        <div className="relative h-[400px] sm:h-[500px] md:h-[540px] lg:h-[560px] w-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={web3marketing} type="video/mp4" />
            <track
              kind="captions"
              src="/captions/hero-video-captions.vtt"
              srcLang="en"
              label="English"
              default
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute left-0 w-full h-full bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-start justify-end h-full text-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8">
            <div className="border rounded-lg sm:rounded-xl border-[#FFFFFF]/30 bg-white/0 backdrop-blur-md shadow-lg shadow-[#FFFFFF]/10 p-3 sm:p-4 md:p-5 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl">
              <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-start mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-[#FFFFFF] font-[switzer] leading-snug">
                Leading Crypto Marketing Agency in India
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-start bg-opacity-50 rounded text-[#F5F5F5] leading-snug">
                Maxtron Innovation empower Web3, Blockchain, and Crypto Projects
                to grow, engage, and scale across India and the world.
              </p>
              <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-start mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-[#FFFFFF] font-[switzer] font-bold leading-snug my-3">
                Maxtron Innovation- Best crypto marketing agency in India
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-start bg-opacity-50 rounded text-[#F5F5F5] leading-snug">
                Maxtron Innovation is a full-stack crypto marketing agency in
                India, dedicated to helping blockchain and Web3 brands achieve
                meaningful visibility, credibility, and community growth. Our
                team of crypto strategists, content creators, and growth hackers
                design data-driven campaigns that build real engagement and
                measurable ROI.
                <p className="my-3">
                  {" "}
                  We understand that crypto marketing is not “just digital
                  marketing.”
                </p>
                <p>
                  It’s about trust, transparency, and timing — and that’s where
                  we excel.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Web3MarketingHeroSection);
