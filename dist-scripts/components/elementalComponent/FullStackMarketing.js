import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Card = ({ title, description }) => {
    return (_jsx("div", { className: "border-[#F3EBFC] border-[4px] sm:border-[6px] shadow-lg flex flex-col justify-start p-3 sm:p-4 md:p-6 h-full hover:scale-105 transition-all duration-300", style: {
            boxShadow: "0px 4px 12px 0px var(--Primary-0, #F3EBFC)",
        }, children: _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 md:mb-4 text-[#2A2A2A] [font-family:Switzer] text-start leading-tight", children: title }), _jsx("p", { className: "text-xs sm:text-sm md:text-base text-[#2A2A2A] [font-family:Switzer]", children: description })] }) }));
};
const cardsData = [
    {
        id: 1,
        title: "Deep Web3 Expertise",
        description: "Our team has hands-on experience working with blockchain, DeFi, NFTs, and token launches — we speak your language.",
    },
    {
        id: 2,
        title: "India + Global Reach",
        description: "Based in India, with a pulse on both domestic and international crypto communities.",
    },
    {
        id: 3,
        title: "Result-Oriented Growth",
        description: "Every strategy we create is backed by performance metrics, analytics, and ROI optimization.",
    },
    {
        id: 4,
        title: "Compliant & Transparent",
        description: "We ensure all campaigns align with evolving crypto regulations and platform policies.",
    },
];
const FullStackMarketing = () => {
    return (_jsxs("div", { className: "relative py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 text-center max-w-[96rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16", children: [_jsx("h2", { className: "text-[#2A2A2A] [font-family: Switzer] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-center mb-3 sm:mb-4 md:mb-6 font-semibold px-2 sm:px-4 md:px-8 lg:px-48 xl:px-48 leading-tight", children: "Why Choose Maxtron Innovation?" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-12 md:mb-16", children: cardsData.map((card) => (_jsx(Card, { title: card.title, description: card.description }, card.id))) })] }));
};
export default FullStackMarketing;
