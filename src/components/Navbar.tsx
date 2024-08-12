import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the mobile menu after clicking
  };

  return (
    <nav className="fixed bg-custom-gradient p-4  left-0 right-0 z-50">
      <div className="container mx-auto flex   justify-between items-center">
        {/* <div className="flex justify-between items-center"> */}
        <Link to="/">
          <img src={logo} alt="maxtron logo" className="" />
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
            <button
              onClick={() => scrollToSection("Home")}
              className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about-us")}
              className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("Our-services")}
              className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("Case-studies")}
              className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Case Studies
            </button>

            {/* <Link
              to="/"
              className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Industries
            </Link> */}
            {/* <Link
              to="/"
              className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            ></Link> */}
            {/* <Link
              to="/"
              className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
            >
              Insights
            </Link> */}
            <button className="block mt-4 text-sm md:inline-block md:mt-0 rounded-lg p-2 bg-[#F5F5F5] text-black">
              <Link to="/Contact">Contact Us</Link>
            </button>

            <button
              onClick={() => {
                window.open("https://calendly.com/business-maxtron/30min");
              }}
              className="block mt-4 text-sm md:inline-block md:mt-0 capitalize rounded-lg p-2 bg-[#F5F5F5]  text-black"
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
