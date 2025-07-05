// import React from "react";
// import logo from "../assets/logo.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative  bg-[#1D1B33] text-white">
      <div className="container mx-auto px-4 md:px-12 py-8 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo and Navigation Links */}
        <div className="flex flex-col md:items-center md:space-y-10 md:mb-0 w-full md:w-auto">
          {/* <div className="mb-4 md:mb-0 md:mr-8">
            <img src={logo} alt="maxtron logo" />
          </div> */}
          <div className="flex justify-between  gap-12">
            <nav className="flex flex-col space-y-4 md:items-left text-[#FFFFFF] md:w-auto">
              <Link to="/" id="Home" className="mx-2  md:mb-0 hover:text-white">
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
                to="/industries"
                id="about-us"
                className="mx-2  md:mb-0 hover:text-white"
              >
                Industries
              </Link>
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
        <div className="flex flex-col lg:flex-row  space-y-4 md:space-y-0 md:space-x-10  justify-center lg:items-end ">
          <div className="flex-1">
            <p className="text-[#FFFFFF] mb-5  md:w-[400px] font-normal md:font-normal items-center font-openSansHebrew text-[14px] md:mt-0 mt-10">
              {/* Get latest insights on tech trends, industry news, event updates,
            and more in your inbox. */}
              Get Latest Insights on tech trends, Industry news, event updates
              and more in your inbox
            </p>
          </div>
          <div className="flex flex-row gap-4 md:flex-row lg:flex-row xl:flex-row overflow-hidden">
            <Link to="/Contact">
              <button className="text-sm px-5 py-2 rounded-lg bg-[#F5F5F5] text-[#55308D] hover:text-white hover:bg-transparent border-2 border-solid border-white font-['Open_Sans'] font-bold transition shadow-md">
                Contact Us
              </button>
            </Link>
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/business-maxtron/30min",
                  "_blank"
                )
              }
              className="text-sm px-5 py-2 rounded-lg bg-[#F5F5F5] text-[#55308D] font-['Open_Sans'] hover:text-white hover:bg-transparent border-2 bprder-solid border-white font-bold transition  shadow-md"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1B33] py-4 mt-8 mx-14 border-t  border-[#FFFFFF33]">
        <div className="container mx-auto px-2 md:px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#FFFFFF] mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} by Maxtron Innovations{" "}
            {/* {new Date().getFullYear()} by Maxtron Innovations */}
          </p>
          <div className="flex md:justify-start  mb-4 md:mb-0">
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Privacy Policies<span className="px-4"></span>
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Security<span className="px-4"></span>
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Terms of Conditions
            </a>
          </div>
          <div className="flex ">
            <button
              onClick={() => {
                window.open("https://www.facebook.com/maxtroninnovations/");
              }}
              className=" px-2 text-black rounded transition mr-4  duration-300"
              aria-label="Visit our Facebook page"
            >
              <FaSquareFacebook className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://in.linkedin.com/company/maxtron-innovations"
                );
              }}
              className=" p-2  text-black rounded transition duration-300"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedinIn className="h-6 w-6 text-white" />
            </button>
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

export default React.memo(Footer);
