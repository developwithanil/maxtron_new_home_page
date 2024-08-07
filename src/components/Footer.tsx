// import React from "react";
import logo from "../assets/logo.svg";
// import ContactSection from "./ContactSection";
import Twitter from "../../src/assets/twitter.svg";
import LinkedIn from "../../src/assets/linkedin.svg";
import YouTube from "../../src/assets/youtube.svg";
const Footer = () => {
  return (
    <footer className="relative  bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-12 py-8 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo and Navigation Links */}
        <div className="flex flex-col md:items-center md:space-y-10 md:mb-0 w-full md:w-auto">
          <div className="mb-4 md:mb-0 md:mr-8">
            <img src={logo} alt="maxtron logo" />
          </div>
          <div className="flex ">
            <nav className="flex flex-col space-y-4 md:items-left text-[#FFFFFF] w-full md:w-auto">
              <a href="#" className="mx-2  md:mb-0 hover:text-white">
                Home
              </a>
              <a href="#" className="mx-2  md:mb-0 hover:text-white">
                Services
              </a>
              <a href="#" className="mx-2  md:mb-0 hover:text-white">
                Industries
              </a>
              <a href="#" className="mx-2  md:mb-0 hover:text-white">
                Case Studies
              </a>
            </nav>
            <nav className="flex flex-col space-y-4 md:items-left text-[#FFFFFF] md:w-auto">
              <a href="#" className="mx-2  md:mb-0 hover:text-white">
                Insights
              </a>
              <a href="#" className="mx-2  md:mb-0 hover:text-white">
                About Us
              </a>
              <a href="#" className="mx-2  md:mb-0 hover:text-white">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
        {/* Subscription Section */}
        <div className="flex flex-col md:flex-row items-center pt-8 justify-between md:items-end md:w-1/2">
          <p className="text-[#FFFFFF] md:w-1/2 font-normal md:font-bold font-OpenSans mb-4 text-left">
            Get latest insights on tech trends, industry news, event updates,
            and more in your inbox.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded  transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg-purple-800 py-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#FFFFFF] mb-4 md:mb-0 text-center md:text-left">
            © 2024 by Maxtron Innovations
          </p>
          <div className="flex md:justify-start  mb-4 md:mb-0">
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Privacy Policies<span className="px-2">|</span>
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Security<span className="px-2">|</span>
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Terms of Conditions
            </a>
          </div>
          <div className="flex space-x-4 justify-center md:justify-end">
            {/* Replace # with actual social media links */}
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              <img src={Twitter} alt="twitter logo" />
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              <img src={LinkedIn} alt="linkedin logo" />
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              <img src={YouTube} alt="Youtube logo" />
            </a>
            {/* <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              IG
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
