import React from "react";
import bg404 from "../../../public/404-bg.svg";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div
      className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 relative"
      style={{
        backgroundImage: `url(${bg404})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-40 pointer-events-none"></div>

      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-800">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-800 mt-2">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 my-12">
          Sorry, the page you are looking for could not be found.
        </p>
        <div className="flex flex-row gap-4">
          <Link
            to="/"
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-800 text-gray-100 px-4 py-2 rounded transition duration-150"
            title="Return Home"
          >
            <span>Return Home</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center space-x-2 bg-purple-800 hover:bg-purple-700 text-gray-100 px-4 py-2 rounded transition duration-150"
            title="Services"
          >
            <span>Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
