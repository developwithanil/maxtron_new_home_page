import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bg-custom-gradient p-4 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="flex justify-between items-center"> */}
        <Link to="/">
          <img src={logo} alt="maxtron logo" />
        </Link>
        <div className="lg:hidden flex " onClick={toggle}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        {/* </div> */}
        <div
          className={`lg:flex  lg:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-white font-OpenSans capitalize lg:flex md:space-x-4">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Home
            </Link>
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Services
            </Link>
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Solutions
            </Link>
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Case Studies
            </Link>
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Blog
            </Link>
            <button className="block mt-4 md:inline-block md:mt-0 rounded-lg p-2 bg-[#F5F5F5] text-black">
              <Link to="/Contact">Contact Us</Link>
            </button>

            <button
              onClick={() => {
                window.open("https://calendly.com/business-maxtron/30min");
              }}
              className="block mt-4 md:inline-block md:mt-0 capitalize rounded-lg p-2 bg-[#F5F5F5]  text-black"
            >
              book a call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
