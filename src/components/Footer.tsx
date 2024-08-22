// import React from "react";
import logo from "../assets/logo.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative  bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-12 py-8 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo and Navigation Links */}
        <div className="flex flex-col md:items-center md:space-y-10 md:mb-0 w-full md:w-auto">
          <div className="mb-4 md:mb-0 md:mr-8">
            <img src={logo} alt="maxtron logo" />
          </div>
          <div className="flex justify-between ">
            <nav className="flex flex-col space-y-4 md:items-left text-[#FFFFFF] md:w-auto">
              <Link
                to="/"
                id="Home"
                className="mx-2  md:mb-0 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/services"
                id="Our-services"
                className="mx-2  md:mb-0 hover:text-white"
              >
                Services
              </Link>
              {/* <Link to="#" className="mx-2  md:mb-0 hover:text-white">
                Industries
              </Link> */}
              <Link
                to="/case-studies"
                id="Case-studies"
                className="mx-2  md:mb-0 hover:text-white"
              >
                Case Studies
              </Link>
            </nav>
            <nav className="flex flex-col space-y-4 md:items-left text-[#FFFFFF] md:w-auto">
              {/* <Link to="#" className="mx-2  md:mb-0 hover:text-white">
                Insights
              </Link> */}
              <Link
                to="/about"
                id="about-us"
                className="mx-2  md:mb-0 hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/Contact"
                id="contact-us"
                className="mx-2  md:mb-0 hover:text-white"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
        {/* Subscription Section */}
        <div className="flex flex-col mt-8 md:mt-0 lg:flex-row space-y-4 mx-2 justify-center md:items-end md:w-1/3">
          <p className="text-[#FFFFFF] md:w-2/3 font-normal md:font-bold items-center mb-2 font-OpenSans text-right mr-4">
            {/* Get latest insights on tech trends, industry news, event updates,
            and more in your inbox. */}
            Follow Us On Socials
          </p>
          <div className="flex ">
            <button
              onClick={() => {
                window.open("https://www.facebook.com/maxtroninnovations/");
              }}
              className="bg-white px-2 text-black rounded transition mr-4  duration-300"
            >
              <FaSquareFacebook className="h-6 w-6 text-blue-500" />
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://in.linkedin.com/company/maxtron-innovations"
                );
              }}
              className="bg-white p-2  text-black rounded transition duration-300"
            >
              <FaLinkedinIn className="h-6 w-6 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-purple-800 py-4 mt-8">
        <div className="container mx-auto px-2 md:px-4 flex flex-col md:flex-row justify-between items-center">
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
            {/* <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              <img src={Twitter} alt="twitter logo" />
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              <img src={LinkedIn} alt="linkedin logo" />
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              <img src={YouTube} alt="Youtube logo" />
            </a> */}
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
