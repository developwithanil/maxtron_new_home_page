import React from "react";
import { Link } from "react-router-dom";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-col  items-center justify-center py-12 px-4 w-full h-full bg-gradient-to-r from-black/40 to-transparent">
        <div className="text-left md:text-left md:w-11/12 space-y-6">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-snug">
            Transform Your Business And Growth With 360° Cutting-Edge Tech
            Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black font-normal font-OpenSans">
            Building Innovative Products And Making Them Successful
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link to="/services">
              <button
                className="bg-white text-[#55308D] font-OpenSans font-bold py-3 px-8 text-lg rounded-full shadow-lg hover:bg-[#f0f0f0] transition-transform transform hover:scale-105"
              >
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="bg-[#55308D] text-white font-OpenSans font-bold py-3 px-8 text-lg rounded-full shadow-lg hover:bg-[#6b4bb4] transition-transform transform hover:scale-105"
              >
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
