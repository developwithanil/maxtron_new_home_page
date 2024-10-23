import React from "react";
// import video from "../assets/hero.mp4";
import heroVideo from "../assets/hero_video.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="mx-4 mt-4 sm:mx-6 lg:mx-8 ">
      {" "}
      <div className="relative h-screen w-full overflow-hidden rounded-3xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          {/* <source src={video} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-purple-900 bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-start sm:items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl hidden sm:block sm:text-5xl md:text-6xl font-bold text-center mb-4">
            Creating Winning Products, Ensuring Their Success
          </h1>
          <h1 className="  sm:hidden text-5xl md:text-6xl font-bold text-center mb-3">
            Creating
          </h1>
          <h1 className="  sm:hidden text-5xl md:text-6xl font-bold text-center mb-3">
            Winning
          </h1>
          <h1 className=" sm:hidden text-5xl md:text-6xl font-bold text-center mb-3">
            Products,
          </h1>
          <h1 className="  sm:hidden text-5xl md:text-6xl font-bold text-center mb-3">
            Ensuring
          </h1>
          <h1 className="  sm:hidden text-5xl md:text-6xl font-bold text-center mb-3">
            Their
          </h1>
          <h1 className="  sm:hidden text-5xl md:text-6xl font-bold text-center mb-5">
            Success
          </h1>
          
          <p className="text-xl hidden sm:block sm:text-2xl md:text-3xl text-center mb-3">
            Transform Your Business and Growth with 360° Cutting-Edge Tech
            Solutions
          </p>
          <p className="text-xl  sm:hidden sm:text-2xl md:text-3xl text-center mb-1">
          Transform Your Business and
          </p>
          <p className="text-xl  sm:hidden sm:text-2xl md:text-3xl text-center mb-1">
            Growth with 360°
          </p>
          <p className="text-xl  sm:hidden sm:text-2xl md:text-3xl text-center mb-8">
          Cutting-Edge Tech Solutions
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/services">
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white hover:bg-gray-100 text-purple-700 font-bold py-3 px-6 rounded-full transition duration-300">
                Get In Touch Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
