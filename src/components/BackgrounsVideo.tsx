import React from "react";
import { Link } from "react-router-dom";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative h-screen">
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
      <div className="relative md:px-20 lg:px-28 flex items-center justify-start py-12 px-4 w-full h-full bg-gradient-to-r from-black/40 to-transparent">
        <div className="md:w-11/12 space-y-6">
          <h1 className="text-black text-4xl md:text-5xl text-left font-extrabold drop-shadow-lg leading-snug">
            Transform Your Business And Growth With 360° Cutting-Edge Tech
            Solutions
          </h1>
          <p className="text-xl text-black text-left font-normal font-OpenSans animate__pulse">
            Building Innovative Products And Making Them Successful
          </p>
          <div className="py-4 space-x-4">
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
