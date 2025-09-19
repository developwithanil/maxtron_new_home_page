import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Verify } from "./VectorImage";
import MaxtronLogo from "../assets/maxtronlogo.svg";
import product1 from "../assets/products/blockchainproduct1.webp";
import product2 from "../assets/products/aiproduct2.webp";
import product3 from "../assets/products/experientialproduct3.webp";
import product4 from "../assets/products/otherproduct4.webp";
import fund1 from "../assets/products/marketing.webp";
import fund2 from "../assets/products/fundraising.webp";
import { logo1, logo2, logo3, logo4, logo5, logo6 } from "./VectorImage";
const tabSystemData = {
    mainTabs: [
        { id: "products", label: "Creating Winning Products" },
        { id: "success", label: "Ensuring Your Success" },
    ],
    subTabs: {
        products: [
            { id: "web3", icon: logo1, label: "Web3 Custom Solutions" },
            { id: "ai", icon: logo2, label: "Applied AI Products & Services" },
            { id: "experiential", icon: logo3, label: "Experiential Development" },
            { id: "otherTech", icon: logo4, label: "Other Tech Services" },
        ],
        success: [
            { id: "marketing", icon: logo5, label: "Marketing & Digital Strategy" },
            { id: "fundraising", icon: logo6, label: "Fundraising & Partnership" },
        ],
    },
    content: {
        web3: {
            category: "WEB3 & BLOCKCHAIN SOLUTIONS",
            title: "Blockchain-Ready Performance",
            points: [
                "Native Crypto Token Development & Launch",
                "DApps Development",
                "Crypto Gaming Development",
                "Smart Contract Development",
                "DeFi Development",
                "Metaverse Development",
                "Native Payment Development",
            ],
            image: product1,
        },
        ai: {
            category: "AI SOLUTIONS",
            title: "Impact-Driven Innovation",
            points: [
                "Custom AI App Development",
                "AI Integration",
                "AI Agent/Copilot Development",
                "PoC & MVP Development",
                "GenAI Development & LLM Fine-tuning",
            ],
            image: product2,
        },
        experiential: {
            category: "IMMERSIVE EXPERIENCES",
            title: "99% Engagement Rate",
            points: [
                "Kinetic Installation ",
                "AR Virtual Try-ons & Immersive Gaming ",
                "Nano Mist Hologram & Holo Box",
                "AI Avatar & 3D Models ",
                "Transparent Screen ",
                "Gesture Based Installation ",
                "Projection Mapping",
            ],
            image: product3,
        },
        otherTech: {
            category: "TECHNOLOGY SOLUTIONS",
            title: "Confidence Delivery",
            points: [
                "Mobile App Development",
                "Web Development",
                "UX/UI Design",
                "IT Staff Augmentation",
                "IT Cousulting",
                "Digital Transformation",
                "Data & Cybersecurity",
            ],
            image: product4,
        },
        marketing: {
            category: "GROWTH & GO-TO-MARKET SOLUTIONS",
            title: "Revenue-Focused Execution",
            points: [
                "B2B: AI-Powered Email & LinkedIn Sales Prospecting",
                "B2C: Performance Marketing - PPC, Programmatic, Influencers",
                "AI-Phone Calling Tool For Sales, Marketing & Support",
                "Web3 Projects: Marketing & Growth - KOLs, Community, etc",
                "Branding & MarComm - Advisory & Execution",
                "PR Solutions - Tier-1 Media, Tier-2 Media",
                "Go-to-market Strategy For Digital Products",
            ],
            image: fund1,
        },
        fundraising: {
            category: "STRATEGIC GROWTH PARTNERSHIPS",
            title: "Relationship-Driven Expansion",
            points: [
                "Investor Outreach: Online, In-person, Networks",
                "Channel Partnership: VARs, Integrators, MSPs, Whitelabel",
                "Equity Partnership For Emerging Tech Projects",
            ],
            image: fund2,
        },
        hiring: {},
        resource: {},
    },
};
const ChevronUpIcon = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 3, stroke: "currentColor", className: "w-4 h-4", children: [" ", _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 15.75l7.5-7.5 7.5 7.5" }), " "] }));
const ChevronDownIcon = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 3, stroke: "currentColor", className: "w-4 h-4", children: [" ", _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }), " "] }));
const WhoMaxtron = () => {
    const [activeMainTab, setActiveMainTab] = useState(tabSystemData.mainTabs[0].id);
    const [activeSubTabs, setActiveSubTabs] = useState({});
    useEffect(() => {
        if (tabSystemData.subTabs[activeMainTab]?.length > 0 &&
            !activeSubTabs[activeMainTab]) {
            setActiveSubTabs((prev) => ({
                ...prev,
                [activeMainTab]: tabSystemData.subTabs[activeMainTab][0].id,
            }));
        }
    }, [activeMainTab]);
    const handleMainTabClick = (mainTabId) => {
        setActiveMainTab(mainTabId);
    };
    const handleSubTabClick = (subTabId) => {
        setActiveSubTabs((prevActiveSubTabs) => {
            const currentActiveForMain = prevActiveSubTabs[activeMainTab];
            if (currentActiveForMain === subTabId) {
                return { ...prevActiveSubTabs, [activeMainTab]: null };
            }
            return { ...prevActiveSubTabs, [activeMainTab]: subTabId };
        });
    };
    const currentSubTabsList = tabSystemData.subTabs[activeMainTab] || [];
    const currentContentKey = activeSubTabs[activeMainTab];
    const currentContent = currentContentKey
        ? tabSystemData.content[currentContentKey]
        : null;
    return (_jsxs("section", { id: "about-us", className: "relative py-4 md:py-8 lg:py-11 xl:py-12 bg-white max-w-[96rem] mx-auto", children: [_jsxs("div", { className: "p-4 text-center ", children: [_jsxs("p", { className: " text-xs md:text-sm flex items-center justify-center text-center text-[#7A35C1] mb-1", children: [" ", _jsx(Verify, {}), " ENTERPRISE-GRADE SOLUTIONS", " "] }), _jsxs("h1", { className: "text-2xl sm:text-2xl md:text-5xl font-bold text-[#2A2A2A] mb-3 md:mb-4 font-[Switzer]", children: [" ", "Who Are We", " "] }), _jsxs("p", { className: "text-base sm:text-sm md:text-lg mb-6 md:mb-10 lg:mb-10 xl:mb-10 text-[#5B5570] font-openSansHebrew px-2 w-[80%] mx-auto", children: [" ", "Maxtron.ai is a global digital product engineering and consulting company founded by a team of IITians. We specialize in harnessing advanced technologies such as AI, blockchain, and cloud computing to develop innovative, high-performance digital products. Our mission is to empower startups, SMBs, and enterprises by transforming their ideas into scalable solutions that solve real business challenges."] })] }), _jsxs("h2", { className: "text-2xl sm:text-2xl md:text-4xl font-bold text-[#2A2A2A] mb-3 md:mb-4 font-[Switzer] mx-auto text-center", children: [" ", "Our Services", " "] }), _jsxs("div", { className: "w-full", children: [_jsx("div", { className: "flex justify-between items-center border-t border-b border-[#EEEEEE] w-full", children: tabSystemData.mainTabs.map((tab, index) => (_jsxs(React.Fragment, { children: [_jsxs("div", { onClick: () => handleMainTabClick(tab.id), className: `text-[14px] md:text-2xl lg:text-3xl font-semibold cursor-pointer px-3 py-4 md:py-6 flex-1 text-center border-l border-r border-[#DFDEE7] ${activeMainTab === tab.id
                                        ? "text-[#2A2A2A] bg-[#F8F8F8] [font-family:Switzer]"
                                        : "text-[#5B5570] bg-white hover:text-[#6A0DAD] [font-family:Switzer]"}`, children: [" ", tab.label, " "] }), index < tabSystemData.mainTabs.length - 1 && (_jsxs("div", { className: "hidden md:flex px-2 md:px-4 lg:px-6 items-center justify-center", children: [" ", _jsx("img", { className: "h-8 sm:h-10 md:h-14 w-auto", src: MaxtronLogo, alt: "Maxtron Logo" }), " "] }))] }, tab.id))) }), _jsxs("div", { className: "hidden md:block", children: [currentSubTabsList.length > 0 && (_jsx("div", { className: "flex w-full bg-gray-50 border-b border-[#DFDEE7] overflow-hidden", children: currentSubTabsList.map((subTab, index) => {
                                    const isSubTabActive = activeSubTabs[activeMainTab] === subTab.id;
                                    return (_jsxs("div", { onClick: () => handleSubTabClick(subTab.id), className: `flex flex-1 items-center justify-center cursor-pointer px-2 sm:px-3 py-3 text-xs sm:text-sm font-medium transition-all duration-200 group
                      ${index < currentSubTabsList.length - 1
                                            ? "border-r border-[#DFDEE7]"
                                            : ""}
                      ${isSubTabActive ? "" : "hover:bg-gray-100"}`, children: [subTab.icon && (_jsx("div", { className: `p-1 rounded mr-1.5  sm:mr-2 flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 shrink-0 transition-colors duration-200 
                          ${isSubTabActive
                                                    ? "bg-[#7A35C1]"
                                                    : "bg-[#DFDEE7] group-hover:bg-[#7A35C1]"}`, children: typeof subTab.icon === "function" &&
                                                    React.createElement(subTab.icon, {
                                                        className: `h-full w-full object-contain ${isSubTabActive
                                                            ? "text-white"
                                                            : "hover:text-white text-gray-400 group-hover:text-white"}`,
                                                    }) })), _jsx("span", { className: `leading-tight ${isSubTabActive
                                                    ? "font-normal text-lg text-[#7A35C1] font-openSansHebrew"
                                                    : "text-[#79748A] group-hover:text-[#7A35C1] font-normal text-lg font-openSansHebrew"}`, children: subTab.label })] }, subTab.id));
                                }) })), currentContent && (_jsxs("div", { className: "flex flex-col md:flex-row gap-6 md:gap-16 p-4 md:p-6 lg:p-16", children: [_jsxs("div", { className: "md:w-3/5 text-left ", children: [" ", _jsxs("p", { className: "text-xs md:text-sm font-normal uppercase font-[Switzer] text-[#7A35C1] mb-1.5", children: [" ", currentContent.category, " "] }), " ", _jsxs("h3", { className: "text-2xl md:text-3xl font-normal  text-[#2A2A2A] mb-4 font-[Switzer]", children: [" ", currentContent.title, " "] }), " ", _jsxs("ul", { className: "space-y-2.5", children: [" ", currentContent.points.map((point, pointIndex) => (_jsxs("li", { className: "flex items-start text-base text-[#5B5570] ", children: [" ", _jsx("span", { className: "text-[#5B5570] font-bold mr-2 mt-1", children: "\u2022" }), " ", point, " "] }, pointIndex))), " "] }), " "] }), _jsxs("div", { className: "md:w-2/5 flex items-center justify-center p-4 md:p-0", children: [" ", _jsx("img", { src: currentContent.image, alt: currentContent.title, className: "w-full max-w-sm md:max-w-full h-full md:h-full rounded-lg object-cover shadow-md" }), " "] })] }))] }), _jsx("div", { className: "block md:hidden bg-[#F7F7FA]", children: currentSubTabsList.length > 0 &&
                            currentSubTabsList.map((subTab) => {
                                const isActive = activeSubTabs[activeMainTab] === subTab.id;
                                const contentForAccordionItem = isActive
                                    ? tabSystemData.content[subTab.id]
                                    : null;
                                return (_jsxs("div", { className: "bg-white border-b border-[#E5E7EB]", children: [_jsxs("div", { onClick: () => handleSubTabClick(subTab.id), className: "flex justify-between items-center p-5 cursor-pointer", children: [_jsxs("div", { className: "flex items-center", children: [subTab.icon && (_jsx(_Fragment, { children: typeof subTab.icon === "function" ? (React.createElement(subTab.icon, {
                                                                className: `h-6 w-6 mr-3 text-[#79748A]    ${isActive
                                                                    ? "fill-[#7A35C1] bg-[#7A35C1]  text-white rounded-md "
                                                                    : ""}`,
                                                            })) : (_jsx("img", { src: subTab.icon, alt: "", className: "h-6 w-6 mr-3 " })) })), _jsxs("span", { className: `text-base font-medium ${isActive ? "text-[#7A35C1]" : "text-gray-800"}`, children: [" ", subTab.label, " "] })] }), isActive ? (_jsxs("span", { className: "text-[#7A35C1]", children: [" ", _jsx(ChevronUpIcon, {}), " "] })) : (_jsxs("span", { className: "text-gray-500", children: [" ", _jsx(ChevronDownIcon, {}), " "] }))] }), isActive && contentForAccordionItem && (_jsxs("div", { className: "p-10 pt-0 text-left", children: [_jsx("p", { className: "text-[12px] font-semibold uppercase text-[#7A35C1] mb-2 font-openSansHebrew", children: contentForAccordionItem.category }), _jsx("h3", { className: "text-xl font-normal text-[#2A2A2A] mb-4 font-[Switzer]", children: contentForAccordionItem.title }), _jsx("ul", { className: "space-y-2.5 mb-4", children: contentForAccordionItem.points.map((point, pointIndex) => (_jsxs("li", { className: "flex items-start text-[14px] text-[#5B5570]", children: [_jsx("span", { className: "text-[#5B5570] font-bold mr-2 mt-[1px] text-lg leading-none", children: "\u2022" }), " ", point] }, pointIndex))) }), contentForAccordionItem.image && (_jsx("img", { src: contentForAccordionItem.image, alt: contentForAccordionItem.title, className: "w-full rounded-lg object-cover shadow-sm max-h-[300px]" }))] }))] }, subTab.id));
                            }) })] })] }));
};
export default WhoMaxtron;
