import React from "react";
// import { Link } from "react-router-dom";
const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative h-screen ">
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
      <div className="relative md:px-20 lg:px-28 flex items-center justify-start py-12 px-4 w-full h-full  ">
        <div className="md:w-11/12 space-y-6">
          <p className="text-xl text-black text-left font-normal font-OpenSans">
            Building Innovative Products And Making Them Successful
          </p>
          <h1 className="text-[#1E1E1E] text-4xl md:text-6xl  text-left font-extrabold">
            {/* Empowering Your Business <br /> with Cutting-Edge Technology. */}
            Transform Your Business And Growth With 360° Cutting-Edge Tech
            Solutions
          </h1>
          <div className="py-4  space-x-4">
            {/* <button className="bg-[#F9CEC0] p-2 font-OpenSans font-bold text-[#55308D] rounded">
              <Link to="/Contact">Learn More</Link>
            </button> */}
            <button
              onClick={() => {
                window.open("https://calendly.com/business-maxtron/30min");
              }}
              className="bg-[#55308D] font-OpenSans font-bold p-2 text-[#F5F5F5] rounded"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;

// bg-gradient-to-r from-white from-10% via-pink-200 via-30% to-pink-200 to-90%
