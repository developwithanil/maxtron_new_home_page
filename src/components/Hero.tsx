import React from "react";
import hdnewvideo from "../assets/hero_video.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
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
            <source src={hdnewvideo} type="video/mp4" />
            <track
              kind="captions"
              src="/captions/hero-video-captions.vtt"
              srcLang="en"
              label="English"
              default
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-0 left-0 w-full h-full bg-purple-900 bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center sm:items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl hidden sm:block sm:text-xl md:text-6xl font-bold text-center mb-4">
              Creating Winning Products, Ensuring Their Success
            </h2>
            <h2 className="sm:hidden text-3xl md:text-6xl font-bold text-center mb-3">
              Creating Winning Products, Ensuring Their Success
            </h2>

            <p className="text-xl sm:text-2xl md:text-3xl text-center mb-3 bg-black bg-opacity-50 p-2 rounded">
              Transform Your Business and Growth with 360° Cutting-Edge Tech
              Solutions
            </p>

            <div className="flex flex-row sm:flex-row justify-center items-center space-x-4">
              <Link
                to="/services"
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold md:py-3 md:px-6 rounded-full transition duration-300 w-full sm:w-auto py-2 px-3"
              >
                <span>Learn More</span>
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-purple-900 font-bold md:py-3 md:px-6 rounded-full transition duration-300 w-full sm:w-auto py-2 px-3"
              >
                <span>Get In Touch Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
