import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Mercedes from "../../../public/client/mercedes.svg";
import Fitburn from "../../../public/client/fitburn.svg";
import Create from "../../../public/client/createProtocol.svg";
import IndiaToday from "../../../public/client/indiaToday.svg";
import Convival from "../../../public/client/convival.svg";
import Uber from "../../../public/client/uber.svg";
import Tenup from "../../../public/client/tenup.svg";
import PmIndia from "../../../public/client/pmIndia.svg";
import Sc from "../../../public/client/sc.svg";
import Ministry from "../../../public/client/ministry.svg";
import FoodVerse from "../../../public/client/foodVerse.svg";
import GovtHy from "../../../public/client/govtHyryana.svg";
import Ludo from "../../../public/client/ludoLove.svg";
import cadbury from "../../../public/client/cadbury.svg";
import Audi from "../../../public/client/audi.svg";
import { ArrowDown, ArrowUp } from "../VectorImage";
import { motion } from "motion/react";
import { useState } from "react";
import CasesCard from "../elementalComponent/CasesCard";
import ContactForm from "../ContactForm";
import { Helmet } from 'react-helmet-async';
const clients = [
    { name: "Mercedes", logo: Mercedes },
    { name: "Fitburn", logo: Fitburn },
    { name: "Create Protocol", logo: Create },
    { name: "India Today", logo: IndiaToday },
    { name: "Convival", logo: Convival },
    { name: "Uber", logo: Uber },
    { name: "Tenup", logo: Tenup },
    { name: "PM India", logo: PmIndia },
    { name: "SC", logo: Sc },
    { name: "Ministry", logo: Ministry },
    { name: "FoodVerse", logo: FoodVerse },
    { name: "Govt Haryana", logo: GovtHy },
    { name: "lud", logo: Ludo },
    { name: "cadbury", logo: cadbury },
    { name: "Audi", logo: Audi },
];
const projectTypes = [
    "All",
    "Mobile App",
    "Web Application",
    "Event",
    "Management",
    "Web Development",
    "UX/UI",
    "Marketing",
    "Graphic Design",
    "Chat Bot",
    "Web3 Development",
    "Video Editing",
];
const industries = [
    "All",
    "Gaming",
    "E-Commerce",
    "AI",
    "Web3",
    "Education",
    "Healthcare",
    "Government",
    "Social",
    "Startup",
    "Culinary",
    "Sports",
];
const CaseStudy = () => {
    const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
    const [isIndustryOpen, setIsIndustryOpen] = useState(false);
    const [selectedProjectType, setSelectedProjectType] = useState("All");
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    // const [selectedProjectType, ] = useState("All");
    // const [selectedIndustry, ] = useState("All");
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Case Studies | Maxtron" }), _jsx("meta", { name: "description", content: "Explore Maxtron's case studies: real-world examples of our IT, blockchain, AI, and marketing solutions driving business success." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/case-studies" }), _jsx("meta", { property: "og:title", content: "Case Studies | Maxtron" }), _jsx("meta", { property: "og:description", content: "Explore Maxtron's case studies: real-world examples of our IT, blockchain, AI, and marketing solutions driving business success." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/case-studies" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsxs("div", { className: "w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-2 mb-4 relative", children: [_jsx("div", { className: 'flex w-full max-w-[96rem] mx-auto flex-col h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[35rem] xl:h-[40rem] justify-center items-start [background:linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),url("./assets/case/hero.webp")_lightgray_50%_/_cover_no-repeat]', children: _jsxs("div", { className: "md:w-1/2  w-full max-w-[88rem]  px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-5", children: [_jsx("p", { className: "text-[#FFFFFF] font-['Switzer'] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  tracking-[0.02em] leading-[160%] mb-2 sm:mb-3 md:mb-4", children: "CASE STUDIES" }), _jsx("p", { className: `flex-[1_0_0] text-white font-openSansHebrew text-xl sm:text-xl md:text-2xl lg:text-2xl font-normal `, children: "Our products are reshaping how industry leaders conduct their core business operations." })] }) }), _jsx("div", { className: "relative z-30 marquee-container w-[95%] sm:w-[90%] md:w-[85%] mx-auto max-w-[88rem]", children: _jsx("div", { className: "animate-marquee whitespace-nowrap", children: clients.concat(clients).map((client, index) => (_jsx("div", { className: "marquee-item inline-block", children: _jsx("img", { src: client.logo, alt: client.name, className: "h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 p-2 sm:p-3 md:p-4" }) }, index))) }) }), _jsx("div", { className: "w-[95%] sm:w-[90%] md:w-[85%] mx-auto max-w-[88rem] relative", children: _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 border-t border-[rgba(0,0,0,0.20)] border-solid", children: [_jsx("div", { className: "p-3 sm:p-4 flex justify-center items-center text-[#8941C4] text-center font-['Switzer'] text-lg sm:text-xl md:text-2xl font-bold leading-[120%]", children: "All Cases" }), _jsxs("div", { className: `relative z-30 flex justify-center md:border-l md:border-r border-[rgba(0,0,0,0.20)] ${isProjectTypeOpen ? "bg-[#f8e7ea]" : ""} border-solid flex-col items-start flex-[1_0_0] px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8`, children: [_jsxs(motion.div, { onClick: () => setIsProjectTypeOpen(!isProjectTypeOpen), className: "flex justify-between w-full cursor-pointer", children: [_jsx("p", { className: `${isProjectTypeOpen ? "text-[#8941C4]" : "text-[#1E1E1E]"} font-['Switzer'] text-lg sm:text-xl md:text-2xl font-semibold leading-[120%]`, children: selectedProjectType === "All"
                                                        ? "Project type"
                                                        : selectedProjectType }), _jsx(motion.div, { animate: { rotate: isProjectTypeOpen ? 360 : 0 }, transition: { type: "spring", stiffness: 300, damping: 20 }, className: "scale-75 sm:scale-100", children: isProjectTypeOpen ? _jsx(ArrowDown, {}) : _jsx(ArrowUp, {}) })] }), _jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: {
                                                opacity: isProjectTypeOpen ? 1 : 0,
                                                height: isProjectTypeOpen ? "auto" : 0,
                                            }, transition: { duration: 0.3 }, className: "absolute top-full left-0 w-full bg-[#f8e7ea] z-40 border-l-[1px] border-r-[1px] border-b-[1px] border-[rgba(0,0,0,0.20)] px-4 sm:px-8 md:px-12 lg:px-16 pb-4 pointer-events-none", style: { pointerEvents: isProjectTypeOpen ? "auto" : "none" }, children: projectTypes.map((type, index) => (_jsxs("div", { className: `text-[#1E1E1E] font-['Switzer'] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-[120%] cursor-pointer w-full flex justify-between py-2 sm:py-3 border-t-[1px] border-[rgba(0,0,0,0.20)] ${type === selectedProjectType ? "text-[#8941C4]" : ""}`, onClick: () => {
                                                    setSelectedProjectType(type);
                                                    setIsProjectTypeOpen(false);
                                                }, children: [_jsx("div", { children: type }), type === selectedProjectType && (_jsx("div", { className: "w-2 h-2 rounded-full bg-[#8941C4]" }))] }, index))) })] }), _jsxs("div", { className: `relative z-30 flex ${isProjectTypeOpen ? "hidden md:block" : ""} justify-center border-[rgba(0,0,0,0.20)] ${isIndustryOpen ? "bg-[#f8e7ea]" : ""} border-solid flex-col items-start flex-[1_0_0] px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8`, children: [_jsxs(motion.div, { onClick: () => setIsIndustryOpen(!isIndustryOpen), className: "flex justify-between w-full cursor-pointer", children: [_jsx("p", { className: `${isIndustryOpen ? "text-[#8941C4]" : "text-[#1E1E1E]"} font-['Switzer'] text-lg sm:text-xl md:text-2xl font-semibold leading-[120%]`, children: selectedIndustry === "All" ? "Industry" : selectedIndustry }), _jsx(motion.div, { animate: { rotate: isIndustryOpen ? 360 : 0 }, transition: { type: "spring", stiffness: 300, damping: 20 }, className: "scale-75 sm:scale-100", children: isIndustryOpen ? _jsx(ArrowDown, {}) : _jsx(ArrowUp, {}) })] }), _jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: {
                                                opacity: isIndustryOpen ? 1 : 0,
                                                height: isIndustryOpen ? "auto" : 0,
                                            }, transition: { duration: 0.3 }, className: "absolute top-full left-0 w-full bg-[#f8e7ea] z-40 border-l-[1px] border-r-[1px] border-b-[1px] border-[rgba(0,0,0,0.20)] px-4 sm:px-8 md:px-12 lg:px-16 pb-4 pointer-events-none", style: { pointerEvents: isIndustryOpen ? "auto" : "none" }, children: industries.map((type, index) => (_jsxs("div", { className: `text-[#1E1E1E] font-['Switzer'] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-[120%] cursor-pointer w-full flex justify-between py-2 sm:py-3 border-t-[1px] border-[rgba(0,0,0,0.20)] ${type === selectedIndustry ? "text-[#8941C4]" : ""}`, onClick: () => {
                                                    setSelectedIndustry(type);
                                                    setIsIndustryOpen(false);
                                                }, children: [_jsx("div", { children: type }), type === selectedIndustry && (_jsx("div", { className: "w-2 h-2 rounded-full bg-[#8941C4]" }))] }, index))) })] })] }) }), _jsx("div", { className: "w-[95%] sm:w-[90%] md:w-[85%] mx-auto max-w-[88rem] relative", children: _jsx(CasesCard, { selectedProjectType: selectedProjectType, selectedIndustry: selectedIndustry }) }), _jsx(ContactForm, {})] })] }));
};
export default CaseStudy;
