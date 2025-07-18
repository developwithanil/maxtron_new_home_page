import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import realproject1 from "../../assets/case/realproject1.webp";
import realproject2 from "../../assets/case/realproject2.webp";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
const items = [
    {
        image: realproject1,
        title: "Tokenized Summit Trekking – Mt. Kilimanjaro Web3 Experience",
        description: [
            "Bringing the world's highest freestanding mountain to the blockchain.",
            "Backed by immersive storytelling, digital collectibles, and a DAO-driven model.",
        ],
    },
    {
        image: realproject2,
        title: "Decentralized Health Utility – Tokenizing Medical Data for Ownership",
        description: [
            "Users earn crypto by sharing medical data with full control & transparency.",
            "Built for the future of DeSci & personal health sovereignty.",
        ],
    },
];
const RealProject = () => {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container)
            return;
        const card = container.firstElementChild;
        const cardWidth = card ? card.offsetWidth : 300;
        const scrollAmount = cardWidth + 16; // Adjusted for padding/gap
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };
    return (_jsx("div", { className: "w-full max-w-[96rem] mx-auto py-6 md:py-10 lg:py-12 xl:py-16 mt-10 md:mt-12 lg:mt-16", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [_jsxs("div", { className: "lg:col-span-4 flex flex-col gap-3 lg:gap-6 mt-3 md:mt-4 lg:mt-5", children: [_jsx("h2", { className: "text-[#2A2A2A] text-start font-[Switzer] font-semibold text-2xl lg:text-3xl xl:text-3xl leading-tight", children: "Real Projects We're Backing" }), _jsxs("div", { children: [_jsx("p", { className: "text-[#2A2A2A] text-base md:text-lg  font-openSansHebrew", children: "Want to build something radical like this?" }), _jsx(Link, { to: "/contact", className: "text-[#7A35C1] font-openSansHebrew text-lg font-normal leading-[160%] underline", children: "We want to hear from you." })] })] }), _jsxs("div", { className: "lg:col-span-8 w-full relative", children: [_jsx(motion.div, { ref: scrollRef, className: "flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-1 lg:overflow-visible lg:flex-wrap", children: items.map((item, idx) => (_jsxs("div", { className: "snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[calc(50%-0.75rem)] bg-white border border-[#DFDEE7] rounded-2xl p-4 flex flex-col gap-3 shadow-sm", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-full h-44 object-cover rounded-xl mb-2" }), _jsx("h3", { className: "font-semibold text-lg md:text-xl text-[#2A2A2A] leading-snug font-[Switzer]", children: item.title }), _jsx("ul", { className: "list-disc pl-5 text-[#3B3C4A] text-sm md:text-base flex flex-col gap-1 font-openSansHebrew", children: item.description.map((desc, i) => (_jsx("li", { children: desc }, i))) })] }, idx))) }), _jsxs("div", { className: "w-full flex flex-row gap-3 justify-end mt-3 lg:hidden ", children: [_jsx("button", { className: "z-10 flex  flex-col justify-center items-center   border border-[#BEBCCA] p-3 rounded-3xl border-solid aspect-square", onClick: () => scroll("left"), "aria-label": "Scroll left", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "14", viewBox: "0 0 18 14", fill: "none", children: _jsx("path", { d: "M17 7L0.999999 7M0.999999 7L7 13M0.999999 7L7 1", stroke: "#2A2A2A", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), _jsx("button", { className: " z-10 flex  flex-col justify-center items-center  border border-[#BEBCCA] p-3 rounded-3xl border-solid aspect-square", onClick: () => scroll("right"), "aria-label": "Scroll right", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "14", viewBox: "0 0 18 14", fill: "none", children: _jsx("path", { d: "M1 7H17M17 7L11 1M17 7L11 13", stroke: "#2A2A2A", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] })] })] }) }));
};
export default RealProject;
