import React from "react";
import herovideo from "../assets/herovideo.mp4";
import { Link } from "react-router-dom";
import logo from "../assets/maxtronlogo.svg";

const Web3HeroSection = () => {
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
            <source src={herovideo} type="video/mp4" />
            <track
              kind="captions"
              src="/captions/hero-video-captions.vtt"
              srcLang="en"
              label="English"
              default
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center sm:items-center justify-center h-full text-white p-4 sm:p-6 lg:p-16">
            <img src={logo} alt="web3 logo" className="w-54 h-51" />
            <h2 className="text-2xl hidden sm:block sm:text-xl md:text-6xl font-normal text-center text-[#171717] mb-5">
              Powering the Next Internet with AI & Automation
            </h2>

            <p className="text-lg sm:text-lg md:text-2xl text-center bg-opacity-50  rounded text-[#171717]">
              The internet is evolving- faster, more decentralized and trustless
              by design. At Maxtron, we're helping forward-thinking teams build
              in Web3
            </p>
            <p className="text-lg sm:text-lg md:text-2xl text-center mb-12  bg-opacity-50  rounded text-[#171717]">
              with the intelligence and automation edge they need to scale
              securely, compliantly and globally.
            </p>

            <div className="flex flex-row sm:flex-row justify-center items-center space-x-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="hover:bg-purple-800 text-white border-[#FFFFFF] border font-normal md:py-3 md:px-6 rounded-full transition duration-300 w-full sm:w-auto py-2 px-3 bg-transparent outline-none placeholder:text-[#FFFFFF]"
              />
              <Link
                to="/contact"
                className="bg-[#7A35C1] hover:bg-gray-100 text-[#FFFFFF] hover:text-[#171717] font-normal md:py-3 md:px-6 rounded-full transition duration-300 w-full sm:w-auto py-2 px-3"
              >
                <span>Connect</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Web3HeroSection);
