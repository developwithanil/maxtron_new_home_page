import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import darkFullLogo from "../assets/darkFullLogo.png";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const CustomArrowIcon = () => (_jsx("div", { className: "flex-shrink-0 w-6 h-6 bg-[#7A35C1] rounded flex items-center justify-center ml-2", children: _jsx("svg", { width: "10", height: "10", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M1 11L6 6L1 1", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
const dropdownContentData = {
    industries: {
        head: "Who We Help",
        title: "Industries",
        link: "/industries",
        liTags: [
            { name: "Gaming", link: "/industries" },
            {
                name: "Banking & Financial Services",
                link: "/industries",
            },
            { name: "Food & Beverages", link: "/industries" },
            { name: "Retail & E-Commerce", link: "/industries" },
            {
                name: "Supply Chain & Logistics",
                link: "/industries",
            },
            {
                name: "Sustainable Industry",
                link: "/industries",
            },
            { name: "Construction", link: "/industries" },
            { name: "Healthcare", link: "/industries" },
        ],
    },
    services: {
        head: "What We Do",
        title: "Services",
        link: "/services",
        liTags: [
            { name: "Web3", link: "/web3" },
            { name: "Web3 Marketing", link: "/web3-marketing" },
            { name: "Blockchain", link: "/blockchain-app-development-company" },
            { name: "Artificial Intelligence", link: "/services" },
            {
                name: "Experiential Development",
                link: "https://experiences.maxtron.ai/",
            },
            { name: "Business Enhancement", link: "/services" },
            { name: "Staff Augmentation", link: "/staff-augmentation" },
            { name: "Fund Raising", link: "/fund-raising" },
            { name: "Affiliate Program", link: "/affiliate" },
            { name: "Events", link: "/events" },
            { name: "Our Team", link: "/our-team" },
            { name: "Digital Compliance", link: "/compliance" },
        ],
    },
    caseStudies: {
        head: "Our Work",
        title: "Projects",
        link: "/case-studies",
        liTags: [
            {
                name: "Blockchain Game Development",
                link: "/case-study/Blockchain-Game-Development",
            },
            {
                name: "E-commerce Marketing",
                link: "/case-study/ECommerce-Marketing",
            },
            {
                name: "Mini-Gaming Platform",
                link: "/case-study/Mini-Gaming-Platform",
            },
            {
                name: "AI-Calling Tool",
                link: "/case-study/AI-Calling-Tool",
            },
            {
                name: "Crypto Project Marketing",
                link: "/case-study/Crypto-Project-Marketing",
            },
            {
                name: "Blockchain Based E-Voting System",
                link: "/case-study/Blockchain-Based-EVoting-System",
            },
            { name: "Good Standing", link: "/case-study/Good-Standing" },
            { name: "GRO8", link: "/case-study/Gro8" },
            { name: "Token Launch", link: "/case-study/Token-Launch" },
            { name: "ICCA", link: "/case-study/ICCA" },
            { name: "Tawuniya", link: "/case-study/Tawuniya" },
            { name: "ULALO", link: "/case-study/ULALO" },
        ],
    },
    tokenization: {
        head: "Explore Tokenization",
        title: "Tokenization",
        link: "/tokenization",
        liTags: [
            { name: "Asset Tokenization", link: "/tokenization/asset" },
            { name: "Real World Assets (RWA)", link: "/tokenization/rwa" },
            { name: "Security Tokens (STO)", link: "/tokenization/security-tokens" },
            { name: "Utility Tokens", link: "/tokenization/utility-tokens" },
        ],
    },
    about: {
        head: "Learn About Us",
        title: "About Maxtron",
        link: "/about",
        liTags: [
            { name: "Our Mission & Vision", link: "/about/mission" },
            { name: "Meet The Team", link: "/about/team" },
            { name: "Our Journey", link: "/about/history" },
        ],
    },
    careers: {
        head: "Join Our Team",
        title: "Careers at Maxtron",
        link: "/careers",
        liTags: [
            { name: "Current Openings", link: "/careers/openings" },
            { name: "Life at Maxtron", link: "/careers/life-at-maxtron" },
            { name: "Employee Benefits", link: "/careers/benefits" },
        ],
    },
};
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { pathname } = useLocation();
    const navRef = useRef(null);
    const [activeDropdownKey, setActiveDropdownKey] = useState(null);
    const [openMobileDropdownKey, setOpenMobileDropdownKey] = useState(null);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
        setActiveDropdownKey(null);
        if (isMobileMenuOpen) {
            setOpenMobileDropdownKey(null);
        }
    };
    const handleMobileNavClick = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdownKey(null);
    };
    const handleMobileDropdownToggle = (key) => {
        setOpenMobileDropdownKey((prevKey) => (prevKey === key ? null : key));
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
        setActiveDropdownKey(null);
        setIsMobileMenuOpen(false);
        setOpenMobileDropdownKey(null);
    }, [pathname]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdownKey(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleNavButtonClick = (key) => {
        setActiveDropdownKey((prevKey) => (prevKey === key ? null : key));
    };
    const closeDesktopDropdown = () => {
        setActiveDropdownKey(null);
    };
    const navLinksConfig = [
        {
            label: "Industries",
            key: "industries",
        },
        { label: "Services", key: "services" },
        {
            label: "Our Work",
            key: "caseStudies",
        },
    ];
    const currentDropdownContent = activeDropdownKey
        ? dropdownContentData[activeDropdownKey]
        : null;
    return (_jsxs("nav", { ref: navRef, className: `shadow-lg ${activeDropdownKey ? "rounded-t-3xl" : "rounded-3xl"} 
        ${isSticky
            ? "fixed top-0  left-0 right-0 z-50 bg-white  backdrop-blur-sm transform transition-all duration-300 ease-in-out mx-4 sm:mx-2 md:mx-6 lg:mx-8  mt-4 sm:mt-6"
            : "relative mx-4 sm:mx-2 md:mx-6 lg:mx-8 mt-4 sm:mt-6 "}
      `, children: [_jsx("div", { className: "max-w-screen mx-auto px-4", children: _jsxs("div", { className: "flex items-center justify-between h-20", children: [" ", _jsxs("div", { className: "max-w-7xl mx-auto flex xl:gap-10 justify-between w-full", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(Link, { to: "/", onClick: closeDesktopDropdown, children: _jsx("img", { className: "h-10 w-auto sm:h-12", src: darkFullLogo, alt: "Maxtron Logo" }) }) }), _jsxs("div", { className: "hidden lg:flex items-center", children: [_jsxs("div", { className: "flex items-baseline space-x-1 xl:space-x-2", children: [navLinksConfig.map(({ label, key }) => (_jsxs("div", { className: "relative", children: [" ", _jsxs("button", { onClick: () => handleNavButtonClick(key), className: `flex items-center px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium focus:outline-none transition-colors duration-150 ease-in-out
                                ${activeDropdownKey === key
                                                                ? "text-purple-900 bg-purple-100"
                                                                : "text-[#2A2A2A] hover:text-purple-800 font-openSansHebrew hover:bg-purple-50"}`, "aria-haspopup": "true", "aria-expanded": activeDropdownKey === key, children: [label, key && (_jsx("span", { className: "ml-1", children: activeDropdownKey === key ? (_jsx(FiChevronUp, { size: 16 })) : (_jsx(FiChevronDown, { size: 16 })) }))] })] }, key))), _jsx(NavLink, { to: "/tokenization", onClick: closeDesktopDropdown, className: ({ isActive }) => `block ${isActive
                                                        ? "bg-purple-100 text-purple-700"
                                                        : "text-[#2A2A2A] font-openSansHebrew"} hover:bg-purple-50 hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium`, "aria-label": "Learn about our tokenization services", children: "Tokenization" }), _jsx(NavLink, { to: "/careers", onClick: closeDesktopDropdown, className: ({ isActive }) => `block ${isActive
                                                        ? "bg-purple-100 text-purple-700"
                                                        : "text-[#2A2A2A] font-openSansHebrew"} hover:bg-purple-50 hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium`, children: "Careers" }), _jsx(NavLink, { to: "/about", onClick: closeDesktopDropdown, className: ({ isActive }) => `block ${isActive
                                                        ? "bg-purple-100 text-purple-700"
                                                        : "text-[#2A2A2A] font-openSansHebrew"} hover:bg-purple-50 hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium`, children: "About Us" })] }), _jsxs("div", { className: "flex items-center space-x-1 xl:space-x-4 ml-4 xl:ml-6", children: [_jsx(Link, { to: "/contact", onClick: closeDesktopDropdown, className: "text-white bg-[#7A35C1] hover:bg-purple-800 px-5 py-2.5 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap transition-colors duration-150 font-SegoeUISymbol", children: "Contact Us" }), _jsx("button", { onClick: () => {
                                                        window.open("https://calendly.com/business-maxtron/30min", "_blank");
                                                        closeDesktopDropdown();
                                                    }, className: "text-white bg-gradient-to-r bg-[#7A35C1] hover:from-purple-700 hover:to-indigo-700 px-5 py-2.5 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-150 shadow-md hover:shadow-lg font-SegoeUISymbol", children: "Book a Call" })] })] }), _jsx("div", { className: "lg:hidden flex items-center", children: _jsxs("button", { onClick: toggleMobileMenu, className: "text-purple-600 hover:text-purple-800 focus:outline-none focus:text-purple-800 p-2 rounded-md", "aria-controls": "mobile-menu", "aria-expanded": isMobileMenuOpen, children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), _jsx("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: isMobileMenuOpen
                                                        ? "M6 18L18 6M6 6l12 12"
                                                        : "M4 6h16M4 12h16M4 18h16" }) })] }) })] })] }) }), activeDropdownKey && currentDropdownContent && (_jsx("div", { className: `
      absolute left-0 right-0 z-40 top-full
      ${activeDropdownKey
                    ? "dropdown-animation-open"
                    : "dropdown-animation-close"}
    `, onClick: (e) => e.stopPropagation(), children: _jsxs("div", { className: "mx-auto", children: [" ", _jsxs("div", { className: "bg-gray-50 rounded-b-xl p-6 ring-1 ring-black ring-opacity-5 max-h-[calc(100vh-8rem)] overflow-y-auto", children: [_jsxs(Link, { to: currentDropdownContent.link, onClick: closeDesktopDropdown, className: "flex items-center mb-5", children: [_jsx("h3", { className: "text-xl font-bold text-gray-800", children: currentDropdownContent.head }), _jsx(CustomArrowIcon, {})] }), _jsx(Link, { to: currentDropdownContent.link, onClick: closeDesktopDropdown, className: "block text-[18px] font-semibold text-[#9693A6] mb-5", children: currentDropdownContent.title }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 font-openSansHebrew text-[20px] text-[#2A2A2A]", children: currentDropdownContent.liTags.map((item, index) => {
                                        const itemName = typeof item === "string" ? item : item.name;
                                        let itemLink = "#";
                                        if (typeof item === "object" && item.link) {
                                            itemLink = item.link;
                                        }
                                        else if (typeof item === "string") {
                                            itemLink = `${currentDropdownContent.link}/${itemName
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")
                                                .replace(/&/g, "and")}`;
                                        }
                                        return (_jsx(Link, { to: itemLink, onClick: closeDesktopDropdown, className: "text-gray-700 hover:text-purple-700 hover:font-medium py-1 text-sm rounded-md transition-colors duration-150 ease-in-out", children: itemName }, `${activeDropdownKey}-item-${index}`));
                                    }) })] })] }) })), isMobileMenuOpen && (_jsxs("div", { className: "lg:hidden shadow-lg rounded-b-3xl z-30 overflow-y-auto max-h-[calc(100vh-6rem)] bg-white", id: "mobile-menu", children: [_jsxs("div", { className: "px-2 pt-2 pb-1 space-y-1 sm:px-3", children: [navLinksConfig.map(({ label, key }) => {
                                const content = dropdownContentData[key];
                                const isMobileDropdownOpen = openMobileDropdownKey === key;
                                return (_jsxs("div", { children: [_jsxs("button", { onClick: () => handleMobileDropdownToggle(key), className: `w-full flex justify-between items-center text-left px-3 py-2.5 rounded-md text-base font-medium
                      ${isMobileDropdownOpen
                                                ? "bg-purple-100 text-purple-700"
                                                : "text-[#2A2A2A] hover:bg-purple-50 hover:text-purple-800"}`, children: [_jsx("span", { children: label }), isMobileDropdownOpen ? (_jsx(FiChevronUp, { size: 20 })) : (_jsx(FiChevronDown, { size: 20 }))] }), isMobileDropdownOpen && content && (_jsxs("div", { className: "py-2 pl-5 pr-2 space-y-1 bg-purple-50/40 rounded-b-md", children: [_jsx("div", { className: "px-3 pt-2 pb-1", children: _jsx(Link, { to: content.link, onClick: handleMobileNavClick, className: "text-sm font-semibold text-purple-700 hover:text-purple-900 hover:underline", children: content.title }) }), content.liTags.map((item, index) => {
                                                    const itemName = typeof item === "string" ? item : item.name;
                                                    let itemLink = "#";
                                                    if (typeof item === "object" && item.link) {
                                                        itemLink = item.link;
                                                    }
                                                    else if (typeof item === "string") {
                                                        itemLink = `${content.link}/${itemName
                                                            .toLowerCase()
                                                            .replace(/\s+/g, "-")
                                                            .replace(/&/g, "and")}`;
                                                    }
                                                    return (_jsx(NavLink, { to: itemLink, onClick: handleMobileNavClick, className: ({ isActive }) => `block ${isActive
                                                            ? "text-purple-700 font-semibold"
                                                            : "text-gray-700"} hover:text-purple-600 hover:font-medium py-1.5 px-3 rounded-md text-sm transition-colors duration-150 ease-in-out`, children: itemName }, `mobile-sub-${key}-${index}`));
                                                })] }))] }, `mobile-dropdown-${key}`));
                            }), _jsx(NavLink, { to: "/tokenization", onClick: handleMobileNavClick, className: ({ isActive }) => `block ${isActive ? "bg-purple-100 text-purple-700" : "text-[#2A2A2A]"} hover:bg-purple-50 hover:text-purple-800 px-3 py-2.5 rounded-md text-base font-medium`, children: "Tokenization" }), _jsx(NavLink, { to: "/careers", onClick: handleMobileNavClick, className: ({ isActive }) => `block ${isActive ? "bg-purple-100 text-purple-700" : "text-[#2A2A2A]"} hover:bg-purple-50 hover:text-purple-800 px-3 py-2.5 rounded-md text-base font-medium`, children: "Careers" }), _jsx(NavLink, { to: "/about", onClick: handleMobileNavClick, className: ({ isActive }) => `block ${isActive ? "bg-purple-100 text-purple-700" : "text-[#2A2A2A]"} hover:bg-purple-50 hover:text-purple-800 px-3 py-2.5 rounded-md text-base font-medium`, children: "About Us" })] }), _jsx("div", { className: "flex flex-row justify-between pt-3 p-10 pb-4 space-y-3 border-gray-200 mt-2", children: _jsxs("div", { className: "flex flex-grow space-x-2", children: [_jsx(Link, { to: "/contact", onClick: handleMobileNavClick, className: "flex-1 text-white text-center bg-[#7A35C1]  hover:bg-purple-800 px-3 py-2.5 rounded-md text-base font-medium", children: "Contact Us" }), _jsx("button", { onClick: () => {
                                        window.open("https://calendly.com/business-maxtron/30min", "_blank");
                                        handleMobileNavClick();
                                    }, className: "flex-1 text-white bg-gradient-to-r bg-[#7A35C1] hover:from-purple-700 hover:to-indigo-700 px-3 py-2.5 rounded-md text-base font-medium", children: "Book a Call" })] }) })] }))] }));
};
export default React.memo(Navbar);
