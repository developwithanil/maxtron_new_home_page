"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banking from "../../assets/augmentation/EmpanelmentSection/Banking.webp";
import Retail from "../../assets/augmentation/EmpanelmentSection/Retail.webp";
import Gaming from "../../assets/augmentation/EmpanelmentSection/Gaming.webp";
import SaaS from "../../assets/augmentation/EmpanelmentSection/SaaS.webp";
import Healthcare from "../../assets/augmentation/EmpanelmentSection/healthcare.webp";
const industryData = [
    {
        id: 1,
        title: "Banking, Financial Services & Insurance",
        image: Banking,
        altText: "Banking",
    },
    { id: 2, title: "Retail & E-commerce", image: Retail, altText: "Retail" },
    { id: 3, title: "Gaming Studios", image: Gaming, altText: "Gaming" },
    { id: 4, title: "SaaS & Startups", image: SaaS, altText: "SaaS" },
    {
        id: 5,
        title: "Healthcare & MedTech",
        image: Healthcare,
        altText: "Healthcare & MedTech",
    },
];
const CircleIcon = ({ isActive }) => (_jsx("div", { className: `w-8 h-8 rounded-full border flex items-center justify-center mr-4 transition-colors duration-300
      ${isActive
        ? "border-[#7A35C1]"
        : "border-[#BEBCCA] group-hover:border-[#7A35C1]"}`, children: _jsx("span", { className: `text-sm font-semibold transition-colors duration-300
        ${isActive
            ? "text-[#7A35C1]"
            : "text-[#2A2A2A] group-hover:text-[#7A35C1]"}`, children: isActive ? "−" : "+" }) }));
const EmpanelmentSection = () => {
    const [activeIndustryId, setActiveIndustryId] = useState(null);
    const handleIndustryClick = (id) => {
        setActiveIndustryId((prevId) => (prevId === id ? null : id));
    };
    const imageContainerVariants = {
        hidden: { opacity: 0, height: 0, marginTop: 0, overflow: "hidden" },
        visible: {
            opacity: 1,
            height: "auto",
            marginTop: "1rem",
            overflow: "visible",
            transition: { duration: 0.4, ease: "easeInOut" },
        },
        exit: {
            opacity: 0,
            height: 0,
            marginTop: 0,
            overflow: "hidden",
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };
    return (_jsx("div", { className: " text-white p-5 md:p-12 lg:p-16 xl:p-16", children: _jsxs("div", { className: "max-w-[96rem]  mx-auto grid md:grid-cols-2 gap-12 items-start", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-xl md:text-2xl lg:text-2xl xl:text-3xl text-[#2A2A2A] font-[Switzer] mb-6 font-bold", children: "Fast-Track Empanelment & Onboarding" }), _jsx("p", { className: "mb-4 font-openSansHebrew text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg font-normal", children: "We're already empaneled or in the procurement pipeline of major clients across" }), _jsxs("p", { className: "font-openSansHebrew text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg font-normal", children: ["We support", " ", _jsx("strong", { className: "text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg ", children: "MSA, SoW, NDA, SLA agreements" }), " ", "and are", " ", _jsx("strong", { className: "text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg", children: "ISO-compliant, GDPR-aligned." })] })] }), _jsx("div", { children: _jsx("ul", { className: "mb-6", children: industryData.map((industry) => {
                            const isActive = activeIndustryId === industry.id;
                            return (_jsxs("li", { className: `group transition-colors duration-300 ${!isActive ? "border-b border-[#BEBCCA]" : ""}`, children: [_jsxs("div", { onClick: () => handleIndustryClick(industry.id), className: `flex items-center py-3 cursor-pointer transition-colors duration-300 ${isActive
                                            ? "text-[#7A35C1]"
                                            : "text-[#79748A] hover:text-[#7A35C1]"}`, role: "button", tabIndex: 0, "aria-expanded": isActive, "aria-controls": `image-content-${industry.id}`, onKeyDown: (e) => {
                                            if (e.key === "Enter" || e.key === " ")
                                                handleIndustryClick(industry.id);
                                        }, children: [_jsx(CircleIcon, { isActive: isActive }), _jsx("span", { className: `text-base 
                        font-normal font-openSansHebrew md:text-xl lg:text-xl xl:text-xl ${isActive ? "text-[#7A35C1]" : "text-[#595465]"}`, children: industry.title })] }), _jsx(AnimatePresence, { initial: false, children: isActive && (_jsx(motion.div, { id: `image-content-${industry.id}`, variants: imageContainerVariants, initial: "hidden", animate: "visible", exit: "exit", children: _jsx("div", { className: "rounded-lg overflow-hidden shadow-lg", children: _jsx("img", { src: industry.image, alt: industry.altText, className: "w-full h-auto object-cover" }) }) }, `image-content-${industry.id}`)) })] }, industry.id));
                        }) }) })] }) }));
};
export default EmpanelmentSection;
