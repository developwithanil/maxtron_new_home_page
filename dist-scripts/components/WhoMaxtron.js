"use client";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo1, logo2, logo3, logo4 } from "../assets/products";
import { product1, product2, product3, product4, product5, product6, product7 } from "../assets/products";
const projects = [
    {
        serviceKey: "Maxtronize",
        title: "Maxtronize - RWA Tokenization",
        subtitle: "(https://www.maxtronize.com/)",
        url: "https://www.maxtronize.com/",
        logo: logo1,
        description: "A compliant real-world asset tokenization platform enabling programmable ownership of gold, mining assets, real estate, equities, bonds, and infrastructure across global markets including the USA, UK, Dubai and India. \n\nBuilt for scalability and regulatory alignment, Maxtronize unlocks liquidity for high-value assets within the rapidly expanding RWA economy.",
        image: product1,
    },
    {
        serviceKey: "strategy",
        title: "Maxtron Strategy",
        subtitle: "(www.strategy.maxtron.ai)",
        url: "https://www.strategy.maxtron.ai/",
        logo: logo2,
        description: "Our capital deployment and strategic advisory arm focused on infrastructure-led, asset-backed, long-duration value creation. We structure and support scalable platforms across energy transition, battery ecosystems, circular economy assets, AI-enhanced RWAs, carbon markets, medical technology, eco-smart cities, agriculture, and climate-linked infrastructure.\n\nThrough thesis-driven structuring and aligned partnerships, we catalyze sustainable growth and long-term capital formation.",
        image: product2,
    },
    {
        serviceKey: "studio",
        title: "Maxtron Studio",
        subtitle: "(www.studio.maxtron.ai)",
        url: "https://www.studio.maxtron.ai",
        logo: logo3,
        description: "Our AI-powered growth and marketing arm delivering scalable expansion through automation-led systems, Web3 and metaverse campaigns, performance marketing, creator and KOL partnerships, and full-funnel strategy.\n\nCombining analytics, AI optimization, and structured growth frameworks, Maxtron Studio transforms brand visibility, engagement, and revenue into measurable, repeatable outcomes for technology-first companies.",
        image: product3,
    },
    {
        serviceKey: "experiences",
        title: "Maxtron Experiences",
        subtitle: "(www.experiences.maxtron.ai)",
        url: "https://www.experiences.maxtron.ai",
        logo: logo4,
        description: "A compliant real-world asset tokenization platform enabling programmable ownership of gold, mining assets, real estate, equities, bonds, and infrastructure across global markets including the USA, UK, Dubai and India.\n\nBuilt for scalability and regulatory alignment, RealAsset.Maxtron.ai unlocks liquidity for high-value assets within the rapidly expanding RWA economy.",
        image: product4,
    },
    {
        serviceKey: "web3",
        title: "Web3 Custom Solutions",
        description: "We deliver enterprise-grade Web3 and blockchain solutions, including native token development and launch, dApp and smart contract engineering, DeFi platforms, crypto gaming, metaverse experiences, and native payment systems, built for scalability, security, and long-term performance.",
        image: product5,
    },
    {
        serviceKey: "appliedAI",
        title: "Applied AI Products & Services",
        description: "We deliver practical applied AI solutions including custom machine learning models, AI agents, LLM-powered applications, predictive analytics, and automation systems built to accelerate decision-making, optimize processes, and unlock new business value.",
        image: product6,
    },
    {
        serviceKey: "otherTech",
        title: "Other Tech Services",
        description: "We provide comprehensive tech services spanning full-stack development, mobile and cloud solutions, enterprise software, API integrations, DevOps, and system architecture ensuring robust, scalable, and secure digital products.",
        image: product7,
    },
];
const getKeywords = (key) => ({
    web3: ["Web3", "dApp", "DeFi", "crypto gaming", "metaverse", "blockchain"],
    appliedAI: ["AI", "machine learning", "LLM", "automation", "predictive analytics", "AI agents"],
    experiences: ["AR", "VR", "RWA", "tokenization", "liquidity"],
    otherTech: ["full-stack", "mobile", "cloud", "DevOps", "API"],
    strategy: ["growth", "Web3", "metaverse", "marketing", "analytics"],
    studio: ["growth", "automation", "marketing", "analytics"],
    realAsset: ["innovation", "AR/VR/MR", "AI-driven"],
}[key] || []);
const HighlightedText = ({ text, serviceKey }) => {
    const keywords = getKeywords(serviceKey);
    if (keywords.length === 0)
        return _jsx(_Fragment, { children: text });
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);
    return (_jsx(_Fragment, { children: parts.map((part, i) => keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (_jsx("span", { className: "text-[#7A35C1] font-bold", children: part }, i)) : (part)) }));
};
const WhoMaxtron = () => {
    const itemRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const directionRef = useRef(0);
    const prevIndexRef = useRef(0);
    useEffect(() => {
        const measure = () => {
            const viewportCenter = window.innerHeight * 0.45;
            let bestIdx = 0;
            let minDist = Infinity;
            itemRefs.current.forEach((el, idx) => {
                if (!el)
                    return;
                const rect = el.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const dist = Math.abs(elementCenter - viewportCenter);
                if (dist < minDist) {
                    minDist = dist;
                    bestIdx = idx;
                }
            });
            if (bestIdx !== prevIndexRef.current) {
                directionRef.current = bestIdx > prevIndexRef.current ? 1 : -1;
                prevIndexRef.current = bestIdx;
                setActiveIndex(bestIdx);
            }
        };
        window.addEventListener("scroll", measure, { passive: true });
        window.addEventListener("resize", measure);
        measure();
        return () => {
            window.removeEventListener("scroll", measure);
            window.removeEventListener("resize", measure);
        };
    }, []);
    const variants = {
        initial: (dir) => ({ opacity: 0, y: dir === 1 ? 40 : -40 }),
        animate: { opacity: 1, y: 0 },
        exit: (dir) => ({ opacity: 0, y: dir === 1 ? -40 : 40 }),
    };
    return (_jsx("section", { className: "relative w-full bg-white px-6 sm:px-10 md:px-12 lg:px-20 py-12 md:py-24", id: "projects", children: _jsxs("div", { className: "max-w-[1440px] mx-auto", children: [_jsx("header", { className: "mb-12 md:mb-20", children: _jsxs("h2", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#2A2A2A] font-[IBM Plex Sans] tracking-tight", children: ["Smarter business. ", _jsx("br", { className: "sm:hidden" }), _jsx("span", { className: "font-medium text-black", children: "Real impact." })] }) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start", children: [_jsx("div", { className: "flex flex-col relative order-2 md:order-1", children: projects.map((project, index) => {
                                const isActive = activeIndex === index;
                                return (_jsx("section", { ref: (el) => (itemRefs.current[index] = el), className: "flex flex-col justify-center py-12 md:py-20 lg:py-28 border-t border-gray-100 first:border-none relative", children: _jsxs("div", { className: `transition-all duration-700 ease-in-out pl-6 md:pl-10 ${isActive ? "opacity-100 translate-x-0" : "opacity-20 md:opacity-30 translate-x-0"}`, children: [_jsx("div", { className: `absolute left-0 top-10 bottom-10 w-[3px] md:w-[5px] bg-[#7A35C1] rounded-full transition-all duration-700 origin-top
                        ${isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}` }), project.logo && (_jsx("div", { className: "mb-6 h-10 md:h-12 lg:h-14", children: _jsx("img", { src: project.logo, alt: `${project.title} logo`, className: "h-full w-auto object-contain" }) })), project.url ? (_jsxs("a", { href: project.url, target: "_blank", rel: "noopener noreferrer", className: "block group mb-4", children: [_jsx("h3", { className: "text-black font-bold text-2xl md:text-3xl lg:text-4xl leading-tight group-hover:text-[#7A35C1] transition-colors duration-300", children: project.title }), project.subtitle && (_jsx("span", { className: "text-[#7A35C1]/70 font-semibold text-base md:text-lg block mt-1 break-words", children: project.subtitle }))] })) : (_jsx("div", { className: "mb-4", children: _jsx("h3", { className: "text-black font-bold text-2xl md:text-3xl lg:text-4xl leading-tight", children: project.title }) })), _jsx("p", { className: "text-[#000000] font-normal text-sm md:text-base lg:text-base leading-relaxed max-w-lg font-[IBM Plex Sans] whitespace-pre-wrap", children: project.description }), _jsx("div", { className: "mt-8 md:hidden rounded-2xl overflow-hidden shadow-xl aspect-video border border-gray-100", children: _jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-fill" }) })] }) }, index));
                            }) }), _jsxs("div", { className: "hidden md:block sticky top-[15vh] h-fit md:order-2", children: [_jsx("div", { className: "relative w-full aspect-[4/5] xl:aspect-[1/1.2] rounded-3xl lg:rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-[#f8f8f8]", children: _jsx(AnimatePresence, { mode: "wait", custom: directionRef.current, children: _jsxs(motion.div, { custom: directionRef.current, variants: variants, initial: "initial", animate: "animate", exit: "exit", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, className: "absolute inset-0", children: [projects[activeIndex].url ? (_jsx("a", { href: projects[activeIndex].url, target: "_blank", rel: "noopener noreferrer", className: "block w-full h-full group", children: _jsx("img", { src: projects[activeIndex].image, alt: projects[activeIndex].title, className: "w-full h-full object-cover " }) })) : (_jsx("img", { src: projects[activeIndex].image, alt: projects[activeIndex].title, className: "w-full h-full object-cover" })), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" })] }, activeIndex) }) }), _jsx("div", { className: "mt-8 flex justify-center gap-2", children: projects.map((_, i) => (_jsx("div", { className: `h-1.5 transition-all duration-300 rounded-full ${activeIndex === i ? 'w-8 bg-[#7A35C1]' : 'w-2 bg-gray-200'}` }, i))) })] })] })] }) }));
};
export default WhoMaxtron;
