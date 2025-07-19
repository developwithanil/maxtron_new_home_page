import React from "react";
import web3marketing from "../assets/web3marketing/marketingvideo.mp4";

const Web3MarketingHeroSection = () => {
  return (
    <div className="relative top-0">
      <div className="mx-4 mt-4 sm:mx-6 lg:mx-8 ">
        <div className="relative h-screen w-full overflow-hidden rounded-3xl">
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

          <div className="absolute  left-0 w-full h-full  bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-start sm:items-start justify-end h-full text-white p-4 sm:p-6 lg:p-12 ">
            <div className="border rounded-xl border-[#FFFFFF]/30 bg-white/0 backdrop-blur-md shadow-lg shadow-[#FFFFFF]/10 p-4">
              <h2 className="text-2xl  sm:block sm:text-xl md:text-5xl font-bold text-start  mb-5 text-[#FFFFFF] font-[switzer] ">
                Grow Your Platform. Scale Your Community.
              </h2>
              <h2 className="text-2xl  sm:block sm:text-xl md:text-5xl  text-start items-start  mb-5 text-[#FFFFFF] font-[switzer] font-bold">
                Build Trust.
              </h2>

              <p className="text-lg sm:text-lg md:text-xl text-start bg-opacity-50  rounded   text-[#F5F5F5]">
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
