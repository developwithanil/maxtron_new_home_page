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
import dog from "../../assets/case/dog.webp";
import geeta from "../../assets/case/geeta.webp";
import pooran from "../../assets/case/pooran.webp";
import rishikesh from "../../assets/case/rishikesh.webp";
import trish from "../../assets/case/trish.webp";
import vc from "../../assets/case/888vc.webp";
import team from "../../assets/case/team.webp";
import TeamLastComponent from "../elementalComponent/TeamLastComponent";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { AiFillLinkedin } from "react-icons/ai";
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
        description: "",
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
        title: "Prashant",
        designation: "Co-Founder & Partner",
        image: prashant,
        details: [
            "Partner (Serial Entrepreneur)",
            "Technology & Product",
            "Selected at Draper University, Summer Program (USA)",
            "Inter IIT Technology Meet: Gold Medalist"
        ],
        linkedin: "https://www.linkedin.com/in/prashant-kumar-939327ab/"
    },
    {
        title: "Trish Kane",
        designation: "Director of business USA",
        image: trish,
        details: [
            "20+ Years Disruptive Technologies, Sales & Startups",
            "Tech & Motivational Keynote Speaker",
            "Ex: Wall Street, Aflac & Informa Tech",
            "3.5 years CTO & Project Manager, Healerverse (2022-2025)",
            "Awarded Woman of the Year Web 3 & Tech, 2024, UAE"
        ],
        linkedin: "https://www.linkedin.com/in/trishmkane"
    },
    {
        title: "Rishikesh Trivedi",
        designation: "Director of business Mena region",
        image: rishikesh,
        details: [
            "Market Acceleration Specialist & Investor with 20+ years driving global growth",
            "Co-Founder of Enabler ONE",
            "President at SCLG ExCom",
            "Managing Partner at 888vc & Strategy Advisor at PitchMatter"
        ],
        linkedin: "https://www.linkedin.com/in/rishikeshtrivedi/"
    },
    {
        title: "Hue H. Nguyễn",
        designation: "Regulatory & Compliance Advisor",
        image: hui,
        details: [
            "Ex- U.S. SEC",
            "Pricewaterhouse Regulatory Group",
            "Former COO of Investment Management",
            "Influential Expertise in TradFi, DeFi, SEC Regulation",
            "25+ years Experience"
        ],
        linkedin: "https://www.linkedin.com/in/hue-h-nguyen-7027852/"
    },
    {
        title: "Ridha Agarwal",
        designation: "Web3 Product Leader",
        image: ridha,
        details: [
            "5+ Years in Scaling Web3 Innovative Products",
            "Leading Tech Communities (Web3 & AI)",
            "Expanded Products to US, UAE, Europe & Asian Markets",
            "Ex- Founding Team: Create Protocol & Healaverse"
        ],
        linkedin: "https://www.linkedin.com/in/ridha-agarwal-549ba9187/"
    },
    {
        title: "Pooran Singh",
        designation: "Partner",
        image: pooran,
        details: [
            "20+ years in government infrastructure & procurement",
            "Former advisor in Ministry of Finance (GoI)",
            "Expert in public-private partnerships & regulatory strategy",
            "Guides Maxtron’s smart city & clean energy initiatives",
            "Key advisor for government relations in India & Africa",
        ],
        linkedin: "https://www.linkedin.com/in/pooran-singh-ahirwar-409b0932/"
    },
    {
        title: "Geeta Vali",
        designation: "Partner",
        image: geeta,
        details: [],
        linkedin: ""
    },
    {
        title: "Craig Henderson",
        designation: "Crypto Exchange Specialist",
        image: craig,
        details: [
            "Listings Manager on top-tier crypto exchanges",
            "Advisor to multiple Web3 startups across DeFi and GameFi",
            "Expert in exchange strategy, token lifecycle, and community development",
            "Led exchange negotiations, KOL outreach, and ambassador programs"
        ],
        linkedin: "https://www.linkedin.com/in/craig-henderson-5a7509bb/"
    },
    {
        title: "Aman Shah",
        designation: "Web3 Solutions Expert",
        image: aman,
        details: [
            "Web3 Solutions Development Expert",
            "HPE & Blockchain Startup",
            "Scalable, agile solution builder.",
            "Blends corporate and startup strengths."
        ],
        linkedin: "https://www.linkedin.com/in/shah-aman/"
    },
    {
        title: "Ishan Dwivedi",
        designation: "Design Manager & Lead",
        image: ishan,
        details: [
            "Product & UI/UX",
            "Led 100+ UI/UX Projects Globally",
            "Experienced in user research, prototyping and creating engaging interfaces"
        ],
        linkedin: "https://www.linkedin.com/in/ishan-dwivedi-2021a9376"
    },
    {
        title: "Riddhi Jaiswal",
        designation: "Project Manager & Lead",
        image: riddhi,
        details: [
            "Project Manager & Lead",
            "Led 50+ Web3 Projects",
            "Ex Wipro, Ex Swayatt Robots"
        ],
        linkedin: "https://www.linkedin.com/in/ritz-jais/"
    },
    {
        title: "Crypto",
        designation: "Chief Happiness Officer",
        image: dog,
        details: [
            "He may not write code, but he debugs stress better than anyone.",
            "His playful presence brings smiles, laughter, and a stress-free atmosphere",
            "Crypto reminds us to enjoy the little moments."
        ],
        linkedin: ""
    }
];
const OurTeam = () => {
    const [selected, setSelected] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Our Team | Maxtron" }), _jsx("meta", { name: "description", content: "Meet the Maxtron team: experts in blockchain, AI, product, and marketing, driving innovation and business growth." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/our-team" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" }), _jsx("meta", { property: "og:title", content: "Our Team | Maxtron" }), _jsx("meta", { property: "og:description", content: "Meet the Maxtron team: experts in blockchain, AI, product, and marketing, driving innovation and business growth." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/our-team" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsx("div", { className: "w-full", children: _jsxs("div", { className: "w-full max-w-[96rem] mx-auto pl-5 sm:pl-6 md:pl-14 xl:pl-16 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ", children: [_jsxs("div", { className: "flex flex-row gap-7", children: [_jsx("div", { className: "w-[32%] hidden lg:flex flex-col justify-start items-start", children: _jsx("img", { src: ourteamrightimage, alt: "Affiliate team", className: "w-full h-[25rem] lg:h-[27rem] xl:h-[34rem] object-fit" }) }), _jsx("div", { className: "flex-1 flex items-start pr-0", children: _jsx("img", { src: affiliaterightlanding, alt: "Affiliate team", className: "w-full h-full  lg:h-[27rem] xl:h-[34rem] object-fit filter grayscale" }) })] }), _jsxs("div", { className: "w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start", children: [_jsx("div", { className: "w-full text-left ", children: _jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start", children: "Our Partners" }) }), _jsx("div", { className: "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 xl:grid-cols-4 gap-7 lg:gap-8 justify-start items-start", children: items.map((item, index) => (_jsxs("div", { className: "flex flex-col items-start ", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-32 md:w-36 lg:w-40 xl:w-44 h-32 md:h-36 lg:h-40 xl:h-44 object-contain rounded-md" }), _jsx("p", { className: "text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl font-semibold text-left mt-3", children: item.title }), _jsx("p", { className: "text-xl lg:text-2xl text-[#363348] text-left mt-1", children: item.description })] }, index))) })] }), _jsx("div", { className: "w-full  mt-9 md:mt-14 lg:mt-20 xl:mt-24 pr-4 md:pr-6 lg:pr-10 ", children: _jsx("img", { src: team, alt: "team", className: "w-full h-full object-cover rounded-md" }) }), _jsxs("div", { className: "w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start", children: [_jsx("div", { className: "w-full text-left ", children: _jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl font-bold leading-[140%] text-center", children: "About The Founder" }) }), _jsx("div", { className: "w-full flex justify-center", children: _jsxs("div", { className: "relative flex flex-col items-center bg-white rounded-3xl shadow-3xl p-4 md:p-7 max-w-xl w-full mx-auto border border-violet-100 founder-card", style: {
                                            background: 'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)',
                                        }, children: [_jsxs("div", { className: "relative mt-2 mb-3", children: [_jsx("span", { className: "absolute inset-0 rounded-full bg-gradient-to-tr from-[#a084e8] via-[#58269A] to-[#a084e8] blur-xl opacity-70 animate-pulse z-10" }), _jsx("div", { className: "relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-xl bg-white z-10 founder-img-glow", children: _jsx("img", { src: "/girish.webp", alt: "Girish Ahirwar", className: "object-cover w-full h-full rounded-full border-4 border-[#a084e8] shadow-lg animate-fadeIn" }) })] }), _jsx("div", { className: "w-16 h-1 rounded-full bg-gradient-to-r from-[#a084e8] via-[#58269A] to-[#a084e8] mb-3 animate-pulse" }), _jsx("h2", { className: "text-4xl md:text-5xl font-extrabold mt-2 mb-1 text-[#58269A] text-center tracking-tight drop-shadow-lg", children: "Girish Ahirwar" }), _jsx("p", { className: "text-xl md:text-2xl font-semibold text-[#7c3aed] text-center mb-2", children: "CEO & Founder" }), _jsxs("ul", { className: "flex flex-col gap-1 text-base md:text-lg text-gray-800 w-full max-w-md mx-auto mb-4 mt-4", children: [_jsxs("li", { className: "flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2", children: [_jsx("span", { className: "text-[#7c3aed] mt-1", children: "\u2714\uFE0F" }), " Partner & Ex- CBO Tagbin"] }), _jsxs("li", { className: "flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2", children: [_jsx("span", { className: "text-[#7c3aed] mt-1", children: "\u2714\uFE0F" }), " Pitched, Won & Delivered Digital & Experiential Projects Worth $500mn+"] }), _jsxs("li", { className: "flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2", children: [_jsx("span", { className: "text-[#7c3aed] mt-1", children: "\u2714\uFE0F" }), " Fundraising And Partnerships"] }), _jsxs("li", { className: "flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2", children: [_jsx("span", { className: "text-[#7c3aed] mt-1", children: "\u2714\uFE0F" }), " IIT Roorkee"] }), _jsxs("li", { className: "flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2", children: [_jsx("span", { className: "text-[#7c3aed] mt-1", children: "\u2714\uFE0F" }), " 10+ Years Experience in Emerging Tech"] })] }), _jsx("blockquote", { className: "italic text-center text-gray-500 text-lg border-l-4 border-[#a084e8] pl-4 mt-1", children: "\"Innovation is not just about technology, it's about creating impact.\"" }), _jsx("a", { href: "https://www.linkedin.com/in/girish-ahirwar/", target: "_blank", rel: "noopener noreferrer", className: "mt-4", children: _jsx(AiFillLinkedin, { className: "w-8 h-8 text-[#0A66C2] hover:opacity-80 transition-opacity" }) })] }) })] }), _jsxs("div", { className: "w-full flex flex-col gap-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20 pr-4 md:pr-5 lg:pr-10 items-start", children: [_jsx("div", { className: "w-full text-left ", children: _jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start", children: "Our Team and Partners" }) }), _jsx("div", { className: "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 justify-start items-start", children: teams.map((item, index) => (_jsxs("div", { className: "relative flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 group cursor-pointer overflow-hidden team-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-violet-300 border border-transparent", style: {
                                            background: 'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)',
                                        }, onClick: () => setSelected(index), children: [_jsx("div", { className: "absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#58269A] to-[#a084e8] opacity-10 rounded-full z-0 group-hover:opacity-20 transition-all duration-300" }), _jsx("img", { src: item.image, alt: item.title, className: "w-28 h-28 object-cover rounded-full border-4 border-violet-200 shadow-md z-10 group-hover:scale-110 transition-transform duration-300 team-img-glow" }), _jsx("p", { className: "text-[#58269A] font-[Switzer] text-xl lg:text-2xl font-bold text-center mt-4 z-10", children: item.title }), _jsx("p", { className: "text-[#7c3aed] text-base lg:text-lg font-medium text-center mt-1 z-10", children: item.designation }), _jsx("div", { className: "flex items-center gap-3 mt-4 z-10", children: _jsx("button", { className: "px-5 py-2 bg-gradient-to-r from-[#58269A] to-[#a084e8] text-white rounded-full font-semibold shadow hover:from-[#6d3bbd] hover:to-[#b39ddb] transition-all duration-300 scale-100 group-hover:scale-105 group-hover:shadow-lg", children: "Read More" }) })] }, index))) }), _jsx(AnimatePresence, { children: selected !== null && (_jsx(motion.div, { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => setSelected(null), children: _jsxs(motion.div, { className: "bg-white rounded-3xl shadow-2xl p-0 max-w-md w-full relative overflow-hidden animate-fadeIn", initial: { scale: 0.7, opacity: 0, y: 80 }, animate: { scale: 1, opacity: 1, y: 0 }, exit: { scale: 0.7, opacity: 0, y: 80 }, transition: { type: 'spring', stiffness: 300, damping: 25 }, onClick: e => e.stopPropagation(), children: [_jsxs("div", { className: "w-full h-32 bg-gradient-to-r from-[#58269A] to-[#a084e8] flex items-center justify-center relative", children: [_jsx("img", { src: teams[selected].image, alt: teams[selected].title, className: "w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 bg-white animate-fadeIn" }), _jsx("button", { className: "absolute top-3 right-3 text-3xl text-white bg-black bg-opacity-20 hover:bg-opacity-40 rounded-full w-10 h-10 flex items-center justify-center leading-none  transition-all z-30 aspect-square", onClick: () => setSelected(null), "aria-label": "Close", children: _jsx("span", { className: "flex items-center text-center justify-center w-full h-full", children: "\u00D7" }) })] }), _jsxs("div", { className: "pt-16 pb-8 px-8", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-1 text-[#58269A]", children: teams[selected].title }), _jsx("p", { className: "text-lg font-semibold text-center text-[#7c3aed] mb-4", children: teams[selected].designation }), _jsx("ul", { className: "list-disc pl-5 space-y-1 text-left text-gray-700", children: teams[selected].details.map((point, i) => (_jsx("li", { children: point }, i))) }), teams[selected].linkedin && (_jsx("div", { className: "flex justify-center mt-4", children: _jsx("a", { href: teams[selected].linkedin, target: "_blank", rel: "noopener noreferrer", children: _jsx(AiFillLinkedin, { className: "w-8 h-8 text-[#0A66C2] hover:opacity-80 transition-opacity" }) }) }))] })] }) })) })] }), _jsx(TeamLastComponent, {})] }) })] }));
};
export default OurTeam;
