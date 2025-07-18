import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import affiliaterightlanding from "../../assets/case/affiliaterightlanding.webp";
import ourteamrightimage from "../../assets/case/ourteamrightimage.webp";
import gro8 from "../../assets/case/gro8.webp";
import bitangels from "../../assets/case/bitangels.webp";
import leventiscapital from "../../assets/case/leventiscapital.webp";
import agnix from "../../assets/case/agnix.webp";
import prashant from "../../assets/case/prashant.webp";
import hui from "../../assets/case/hui.webp";
import ridha from "../../assets/case/ridha.webp";
import craig from "../../assets/case/craig.webp";
import riddhi from "../../assets/case/riddhi.webp";
import ishan from "../../assets/case/ishan.webp";
import aman from "../../assets/case/aman.webp";
import vc from "../../assets/case/888vc.webp";
import team from "../../assets/case/team.webp";
import TeamLastComponent from "../elementalComponent/TeamLastComponent";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet-async';
const items = [
    {
        title: "Gro8 CLUB",
        description: "Investment Platform",
        image: gro8,
    },
    {
        title: "888vc",
        description: "VC Syndicate",
        image: vc,
    },
    {
        title: "BitAngels",
        description: "Angel Network",
        image: bitangels,
    },
    {
        title: "Leventis Captial DIFC",
        description: "Desc",
        image: leventiscapital,
    },
    {
        title: "AgniX Capital",
        description: "Investment Group",
        image: agnix,
    },
];
const teams = [
    {
        title: "Hue H. Nguyễn",
        image: hui,
        details: [
            "Ex- U.S. SEC",
            "Pricewaterhouse Regulatory Group",
            "Former COO of Investment Management",
            "Influential Expertise in TradFi, DeFi, SEC Regulation",
            "25+ years Experience"
        ]
    },
    {
        title: "Ridha Agarwal",
        image: ridha,
        details: [
            "5+ Years in Scaling Web3 Innovative Products",
            "Leading Tech Communities (Web3 & AI)",
            "Expanded Products to US, UAE, Europe & Asian Markets",
            "Ex- Founding Team: Create Protocol & Healaverse"
        ]
    },
    {
        title: "Craig Henderson",
        image: craig,
        details: [
            "Listings Manager on top-tier crypto exchanges",
            "Advisor to multiple Web3 startups across DeFi and GameFi",
            "Expert in exchange strategy, token lifecycle, and community development",
            "Led exchange negotiations, KOL outreach, and ambassador programs"
        ]
    },
    {
        title: "Prashant",
        image: prashant,
        details: [
            "Partner (Serial Entrepreneur)",
            "Technology & Product",
            "Selected at Draper University, Summer Program (USA)",
            "Inter IIT Technology Meet: Gold Medalist"
        ]
    },
    {
        title: "Aman Shah",
        image: aman,
        details: [
            "Web3 Solutions Development Expert",
            "HPE & Blockchain Startup",
            "Scalable, agile solution builder.",
            "Blends corporate and startup strengths."
        ]
    },
    {
        title: "Ishan Dwivedi",
        image: ishan,
        details: [
            "Product & UI/UX",
            "Led 100+ UI/UX Projects Globally",
            "Experienced in user research, prototyping and creating engaging interfaces"
        ]
    },
    {
        title: "Riddhi Jaiswal",
        image: riddhi,
        details: [
            "Project Manager & Lead",
            "Led 50+ Web3 Projects",
            "Ex Wipro, Ex Swayatt Robots"
        ]
    }
];
const OurTeam = () => {
    const [selected, setSelected] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Our Team | Maxtron" }), _jsx("meta", { name: "description", content: "Meet the Maxtron team: experts in blockchain, AI, product, and marketing, driving innovation and business growth." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/our-team" }), _jsx("meta", { property: "og:title", content: "Our Team | Maxtron" }), _jsx("meta", { property: "og:description", content: "Meet the Maxtron team: experts in blockchain, AI, product, and marketing, driving innovation and business growth." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/our-team" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsx("div", { className: "w-full", children: _jsxs("div", { className: "w-full max-w-[96rem] mx-auto pl-5 sm:pl-6 md:pl-14 xl:pl-16 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ", children: [_jsxs("div", { className: "flex flex-row gap-7", children: [_jsx("div", { className: "w-[32%] hidden lg:flex flex-col justify-start items-start", children: _jsx("img", { src: ourteamrightimage, alt: "Affiliate team", className: "w-full h-[25rem] lg:h-[27rem] xl:h-[34rem] object-fit" }) }), _jsx("div", { className: "flex-1 flex items-start pr-0", children: _jsx("img", { src: affiliaterightlanding, alt: "Affiliate team", className: "w-full h-full  lg:h-[27rem] xl:h-[34rem] object-fit filter grayscale" }) })] }), _jsxs("div", { className: "w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start", children: [_jsx("div", { className: "w-full text-left ", children: _jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start", children: "Our Partners" }) }), _jsx("div", { className: "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 xl:grid-cols-4 gap-7 lg:gap-8 justify-start items-start", children: items.map((item, index) => (_jsxs("div", { className: "flex flex-col items-start ", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-32 md:w-36 lg:w-40 xl:w-44 h-32 md:h-36 lg:h-40 xl:h-44 object-contain rounded-md" }), _jsx("p", { className: "text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl font-semibold text-left mt-3", children: item.title }), _jsx("p", { className: "text-xl lg:text-2xl text-[#363348] text-left mt-1", children: item.description })] }, index))) })] }), _jsx("div", { className: "w-full  mt-9 md:mt-14 lg:mt-20 xl:mt-24 pr-4 md:pr-6 lg:pr-10 ", children: _jsx("img", { src: team, alt: "team", className: "w-full h-full object-cover rounded-md" }) }), _jsxs("div", { className: "w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-5 md:pr-8 lg:pr-14 items-start", children: [_jsx("div", { className: "w-full text-left ", children: _jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl font-bold leading-[140%] text-center", children: "About The Founder" }) }), _jsxs("div", { className: "w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-10", children: [_jsx("div", { className: "flex-shrink-0 w-52 h-52 xl:w-72 xl:h-72 lg:w-64 lg:h-64  flex items-center justify-center overflow-hidden", children: _jsx("img", { src: "/girish.webp", alt: "Girish Ahirwar", className: "object-cover w-full h-full rounded-lg" }) }), _jsxs("div", { className: "flex-1 ", children: [_jsx("h2", { className: "text-4xl font-semibold mb-3 pl-5 text-[#58269A]", children: "Girish Ahirwar" }), _jsxs("ul", { className: "list-disc pl-5 space-y-2 text-xl font-normal", children: [_jsx("li", { children: "CEO & Founder " }), _jsx("li", { children: "Partner & Ex- CBO Tagbin" }), _jsx("li", { children: "Pitched, Won & Delivered- Digital & Experiential Projects Worth $500mn+" }), _jsx("li", { children: "Fundraising And Partnerships" }), _jsx("li", { children: "IIT Roorkee" }), _jsx("li", { children: "10+ Years Experience in Emerging Tech" })] })] })] })] }), _jsxs("div", { className: "w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start", children: [_jsx("div", { className: "w-full text-left ", children: _jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start", children: "Our Team" }) }), _jsx("div", { className: "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-8 lg:gap-y-10 justify-start items-start", children: teams.map((item, index) => (_jsxs("div", { className: "flex flex-col items-start ", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-36 lg:w-44 h-36 lg:h-44 object-contain rounded-md" }), _jsx("p", { className: "text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl font-semibold text-left mt-3", children: item.title }), _jsx("button", { className: "mt-2 px-4 py-1 bg-[#58269A] text-white rounded hover:bg-[#6d3bbd] transition-colors", onClick: () => setSelected(index), children: "Read More" })] }, index))) }), _jsx(AnimatePresence, { children: selected !== null && (_jsx(motion.div, { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => setSelected(null), children: _jsxs(motion.div, { className: "bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative", initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 }, onClick: e => e.stopPropagation(), children: [_jsx("button", { className: "absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-600", onClick: () => setSelected(null), children: "\u00D7" }), _jsx("img", { src: teams[selected].image, alt: teams[selected].title, className: "w-28 h-28 object-contain rounded-md mx-auto mb-4" }), _jsx("h2", { className: "text-2xl font-bold text-center mb-2 text-[#58269A]", children: teams[selected].title }), _jsx("ul", { className: "list-disc pl-5 space-y-2 text-left text-gray-700", children: teams[selected].details.map((point, i) => (_jsx("li", { children: point }, i))) })] }) })) })] }), _jsx(TeamLastComponent, {})] }) })] }));
};
export default OurTeam;
