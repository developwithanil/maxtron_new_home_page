import React from "react";
import web3marketing from "../assets/web3marketing/marketingvideo.mp4";

const Web3MarketingHeroSection = () => {
  return (
    <div className="relative top-0">
      <div className="mx-2 mt-2 sm:mx-4 md:mx-6 lg:mx-8">
        <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
          <video
            className="absolute top-0 left-0 w-full h-[610px] object-cover"
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

          <div className="relative z-10 flex flex-col items-start justify-end h-full text-white p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
            <div className="border rounded-lg sm:rounded-xl border-[#FFFFFF]/30 bg-white/0 backdrop-blur-md shadow-lg shadow-[#FFFFFF]/10 p-3 sm:p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-6xl">
              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-start mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-[#FFFFFF] font-[switzer] leading-tight">
                Grow Your Platform. Scale Your Community.
              </h2>
              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-start mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-[#FFFFFF] font-[switzer] font-bold leading-tight">
                Build Trust.
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-start bg-opacity-50 rounded text-[#F5F5F5] leading-relaxed">
                At Maxtron, We create structured, scalable growth strategies
                across Web3 platforms, marketing channels, and community
                ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Web3MarketingHeroSection);
