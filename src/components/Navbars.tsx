import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/maxtronlogo.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav
      className={`bg-white  shadow-lg rounded-3xl mx-4 sm:mx-24 mt-4 sm:mt-6 ${
        isSticky ? "fixed top-0 left-0 right-0 z-50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt="Maxtron Logo"
              />
            </Link>
          </div>

          {/* Desktop and Tablet Menu */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-center space-x-2 lg:space-x-6 mr-2 ">
              <NavLink
                to="/case-studies"
                className="text-[#4E009C] hover:text-purple-800 px-2  py-2 rounded-md text-sm font-medium"
              >
                Case Studies
              </NavLink>
              <NavLink
                to="/services"
                className="text-[#4E009C] hover:text-purple-800 px-2 lg:px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </NavLink>
              <NavLink
                to="/industries"
                className="text-[#4E009C] hover:text-purple-800 px-2 lg:px-3 py-2 rounded-md text-sm font-medium"
              >
                Industries
              </NavLink>
              <NavLink
                to="/about"
                className="text-[#4E009C] hover:text-purple-800 px-2 lg:px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </NavLink>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-2 xl:ml-6">
              <Link
                to="/contact"
                className="text-white bg-[#4E009C] hover:bg-purple-800 px-4 lg:px-8 py-2 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap"
              >
                Contact Us
              </Link>
              <button
                onClick={() =>
                  window.open("https://calendly.com/business-maxtron/30min")
                }
                className="text-white bg-[#4E009C] hover:bg-purple-800 px-4 lg:px-8 py-2 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap"
              >
                Book a Call
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-purple-600 hover:text-purple-800 focus:outline-none focus:text-purple-800"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/case-studies"
              onClick={() => setIsOpen(false)}
              className="block text-[#4E009C] hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium"
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block text-[#4E009C] hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </NavLink>
            <NavLink
              to="/industries"
              onClick={() => setIsOpen(false)}
              className="block text-[#4E009C] hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium"
            >
              Industries
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-[#4E009C] hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </NavLink>
          </div>

          <div className="px-5 pb-3 space-y-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-white bg-[#4E009C] hover:bg-purple-800 px-3 py-2 rounded-full text-base font-medium text-center"
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                window.open("https://calendly.com/business-maxtron/30min");
                setIsOpen(false);
              }}
              className="w-full text-white bg-[#4E009C] hover:bg-purple-800 px-3 py-2 rounded-full text-base font-medium"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
