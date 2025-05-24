import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import darkFullLogo from "../assets/darkFullLogo.png"; // Make sure this path is correct

// --- Helper Icons (can be moved to a separate file) ---
const ChevronDownIcon: React.FC<{ className?: string }> = ({
  className = "w-4 h-4 inline-block ml-1 opacity-70",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const RightArrowIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);
// --- End Helper Icons ---

// --- Navigation Data ---
interface NavItem {
  id: string;
  label: string;
  path: string;
  hasDropdown?: boolean;
}

const navLinks: NavItem[] = [
  { id: "tokenization", label: "Tokenization", path: "/tokenization" },
  { id: "case-studies", label: "Case Studies", path: "/case-studies" },
  { id: "services", label: "Services", path: "/services", hasDropdown: true }, // Example: Services also has a dropdown
  {
    id: "industries",
    label: "Industries",
    path: "/industries",
    hasDropdown: true,
  },
  { id: "about", label: "About", path: "/about" },
  { id: "careers", label: "Careers", path: "/careers" },
];

// Content for dropdowns
// The function receives a `close` callback to close the dropdown upon item click
const dropdownContents: {
  [key: string]: (close: () => void) => React.ReactNode;
} = {
  industries: (closeDropdown) => (
    <div className="p-6 bg-white shadow-xl rounded-lg w-[90vw] max-w-4xl">
      <div className="flex items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 font-openSansHebrew">
          Who We Help
        </h3>
        <div className="ml-3 bg-[#4E009C] text-white w-8 h-8 rounded-md flex items-center justify-center">
          <RightArrowIcon />
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-openSansHebrew">
        Industries
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
        {[
          { name: "Gaming", to: "/industries/gaming", special: true },
          {
            name: "Banking & Financial Services",
            to: "/industries/banking-financial-services",
          },
          { name: "Food & Beverages", to: "/industries/food-beverages" },
          { name: "Retail & E-Commerce", to: "/industries/retail-ecommerce" },
          {
            name: "Supply Chain & Logistics",
            to: "/industries/supply-chain-logistics",
          },
          {
            name: "Sustainable Industry",
            to: "/industries/sustainable-industry",
          },
          { name: "Construction", to: "/industries/construction" },
          { name: "Healthcare", to: "/industries/healthcare" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.to}
            onClick={closeDropdown}
            className={`block py-1 text-gray-700 hover:text-[#4E009C] transition-colors duration-150 font-openSansHebrew ${
              item.special ? "text-[#4E009C] font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  ),
  services: (closeDropdown) => (
    <div className="p-4 bg-white shadow-xl rounded-lg w-60">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 font-openSansHebrew">
        Our Services
      </h3>
      <Link
        to="/services/consulting"
        onClick={closeDropdown}
        className="block py-1 text-gray-700 hover:text-[#4E009C] font-openSansHebrew"
      >
        Consulting
      </Link>
      <Link
        to="/services/development"
        onClick={closeDropdown}
        className="block py-1 text-gray-700 hover:text-[#4E009C] font-openSansHebrew"
      >
        Development
      </Link>
      <Link
        to="/services/support"
        onClick={closeDropdown}
        className="block py-1 text-gray-700 hover:text-[#4E009C] font-openSansHebrew"
      >
        Support
      </Link>
    </div>
  ),
};
// --- End Navigation Data ---

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useLocation();

  // Dropdown states
  const [stickyDropdown, setStickyDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const navItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);
  const mouseLeaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    setStickyDropdown(null); // Close any sticky dropdowns on navigation
    setHoveredDropdown(null); // Clear hover state
  }, [pathname]);

  // Close dropdowns utility
  const closeAllDropdowns = () => {
    setStickyDropdown(null);
    setHoveredDropdown(null);
    if (mouseLeaveTimeoutRef.current) {
      clearTimeout(mouseLeaveTimeoutRef.current);
    }
  };

  // Handlers for dropdown logic
  const handleMouseEnter = (linkId: string) => {
    if (mouseLeaveTimeoutRef.current)
      clearTimeout(mouseLeaveTimeoutRef.current);
    if (dropdownContents[linkId]) {
      // Only act if the link is supposed to have a dropdown
      if (stickyDropdown !== linkId) {
        // Don't show hover dropdown if a different one is sticky, or if this one is already sticky
        setHoveredDropdown(linkId);
      } else if (stickyDropdown === linkId) {
        setHoveredDropdown(linkId); // Ensure hover is active if it's the sticky one
      }
    }
  };

  const handleMouseLeaveWrapper = () => {
    mouseLeaveTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150); // Small delay to allow moving to dropdown panel
  };

  const handleMouseEnterDropdownPanel = () => {
    if (mouseLeaveTimeoutRef.current)
      clearTimeout(mouseLeaveTimeoutRef.current);
  };

  const handleLinkClick = (
    linkId: string,
    event: React.MouseEvent,
    isDropdownLink: boolean
  ) => {
    if (mouseLeaveTimeoutRef.current)
      clearTimeout(mouseLeaveTimeoutRef.current);

    if (isDropdownLink && dropdownContents[linkId]) {
      event.preventDefault(); // Prevent navigation for dropdown toggles
      if (stickyDropdown === linkId) {
        setStickyDropdown(null); // Toggle off
        setHoveredDropdown(null); // Clear hover as well
      } else {
        setStickyDropdown(linkId); // Set as sticky
        setHoveredDropdown(linkId); // Also set as hovered to ensure it's visible
      }
    } else {
      // It's a normal link or a link that should navigate immediately
      closeAllDropdowns(); // Close any open dropdowns
      setIsMobileMenuOpen(false); // Close mobile menu if open
      // Navigation will be handled by NavLink
    }
  };

  // Effect for clicking outside to close sticky dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (stickyDropdown) {
        const isClickOnOpener = navItemRefs.current[stickyDropdown]?.contains(
          event.target as Node
        );
        const isClickInsideDropdown = dropdownContainerRef.current?.contains(
          event.target as Node
        );

        if (!isClickOnOpener && !isClickInsideDropdown) {
          setStickyDropdown(null);
          setHoveredDropdown(null); // Also clear hover
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [stickyDropdown]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (mouseLeaveTimeoutRef.current)
        clearTimeout(mouseLeaveTimeoutRef.current);
    };
  }, []);

  const visibleDropdownKey = stickyDropdown || hoveredDropdown;

  return (
    <nav
      className={`bg-white shadow-lg rounded-3xl mx-4 sm:mx-2 md:mx-6 lg:mx-8 mt-4 sm:mt-6 
        ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 transform-none rounded-none !mx-0 !mt-0"
            : ""
        }
      `} // Adjusted sticky styles
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-3 lg:px-5">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeAllDropdowns}>
              <img
                className="h-10 w-auto sm:h-14"
                src={darkFullLogo}
                alt="Maxtron Logo"
              />
            </Link>
          </div>

          {/* Desktop and Tablet Menu */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <div className="flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
              {" "}
              {/* Reduced spacing slightly */}
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeaveWrapper}
                  ref={(el) => (navItemRefs.current[link.id] = el)}
                >
                  <NavLink
                    to={link.path}
                    onClick={(e) =>
                      handleLinkClick(link.id, e, !!link.hasDropdown)
                    }
                    className={({ isActive }) =>
                      `text-[#4E009C] hover:text-purple-800 px-2 py-2 rounded-md text-sm xl:text-base font-medium font-openSansHebrew flex items-center whitespace-nowrap
                       ${
                         isActive && !link.hasDropdown
                           ? "!text-purple-900 font-semibold"
                           : ""
                       }
                       ${
                         visibleDropdownKey === link.id && link.hasDropdown
                           ? "!text-purple-900 font-semibold"
                           : ""
                       }
                      `
                    }
                  >
                    {link.label}
                    {link.hasDropdown && dropdownContents[link.id] && (
                      <ChevronDownIcon />
                    )}
                  </NavLink>

                  {visibleDropdownKey === link.id &&
                    link.hasDropdown &&
                    dropdownContents[link.id] && (
                      <div
                        ref={dropdownContainerRef}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-[51]" // Ensure dropdown is above sticky navbar if z-index clash
                        onMouseEnter={handleMouseEnterDropdownPanel}
                        // onMouseLeave is handled by handleMouseLeaveWrapper for the parent
                      >
                        {dropdownContents[link.id](() => {
                          closeAllDropdowns();
                          // Navigation will occur via Link components inside dropdown
                        })}
                      </div>
                    )}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-3 lg:space-x-4 xl:ml-6 ml-3">
              {" "}
              {/* Adjusted margin */}
              <Link
                to="/contact"
                onClick={closeAllDropdowns}
                className="text-white bg-[#4E009C] hover:bg-purple-800 px-4 lg:px-5 xl:px-6 py-2 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap font-openSansHebrew" // Slightly reduced padding
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  closeAllDropdowns();
                  window.open("https://calendly.com/business-maxtron/30min");
                }}
                className="text-white bg-[#4E009C] hover:bg-purple-800 px-4 lg:px-5 xl:px-6 py-2 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap font-openSansHebrew" // Slightly reduced padding
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-purple-600 hover:text-purple-800 focus:outline-none focus:text-purple-800 font-openSansHebrew"
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
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={`mobile-${link.id}`}
                to={link.path}
                onClick={() =>
                  handleLinkClick(link.id, {} as React.MouseEvent, false)
                } // Treat mobile links as direct navigators for now
                className="block text-[#4E009C] hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium font-openSansHebrew"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="px-5 pb-3 space-y-2">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white bg-[#4E009C] hover:bg-purple-800 px-3 py-2 rounded-full text-base font-medium text-center font-openSansHebrew"
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                window.open("https://calendly.com/business-maxtron/30min");
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-white bg-[#4E009C] hover:bg-purple-800 px-3 py-2 rounded-full text-base font-medium font-openSansHebrew"
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
