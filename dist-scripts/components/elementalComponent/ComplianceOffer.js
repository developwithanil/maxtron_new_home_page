import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { banking, bitcoin, brain, document, documentkey, finance, link, lock, timer, } from "../ComplianceVector";
const Card = ({ icon: Icon, title, description }) => {
    return (_jsxs("div", { className: "border border-[#F3EBFC] shadow-lg flex flex-col justify-start p-4 sm:p-6 h-full hover:scale-105 transition-all duration-300", style: {
            boxShadow: "0px 4px 12px 0px var(--Primary-0, #F3EBFC)",
        }, children: [_jsx("div", { className: "mb-6 sm:mb-8 p-2 bg-[#F3EBFC] flex items-center justify-center h-12 w-12 flex-shrink-0", children: _jsx(Icon, {}) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-2xl sm:text-2xl lg:text-2xl xl:text-2xl font-normal mb-3 sm:mb-4 text-[#2A2A2A] [font-family:Switzer] text-start", children: title }), _jsx("p", { className: "text-sm sm:text-base text-[#2A2A2A] font-openSansHebrew font-normal text-start leading-relaxed", children: description })] })] }));
};
const Cards = ({ icon: Icon, title }) => {
    return (_jsxs("div", { className: "border border-[#F3EBFC] shadow-lg flex flex-col justify-start p-4 sm:p-6 h-full hover:scale-105 transition-all duration-300 ", children: [_jsx("div", { className: "mb-6 sm:mb-8 p-2 bg-[#F3EBFC] flex items-center justify-center h-12 w-12 flex-shrink-0", children: _jsx(Icon, {}) }), _jsx("div", { className: "flex flex-col items-start w-full flex-1", children: _jsx("h2", { className: "text-lg sm:text-xl lg:text-[24px] font-normal text-start text-[#131416] [font-family:Switzer]", children: title }) })] }));
};
const cardsData = [
    {
        id: 1,
        icon: lock,
        title: "Collateral Structuring & Verification",
        description: "We help clients legally structure and verify digital assets as compliant collateral from crypto to tokenized gold and real-world assets.",
    },
    {
        id: 2,
        icon: document,
        title: "Audit-Ready Risk Management Tools",
        description: "Customizable dashboards for audit trails, risk exposure, asset registration, and regulatory triggers.",
    },
    {
        id: 3,
        icon: timer,
        title: "Real-Time Policy Intelligence",
        description: "Stay informed with a live compliance layer that evolves as laws do across jurisdictions and asset types.",
    },
];
const cardsData2 = [
    {
        id: 1,
        icon: documentkey,
        title: "Crypto lending protocols",
    },
    {
        id: 2,
        icon: bitcoin,
        title: "Tokenized asset issuance",
    },
    {
        id: 3,
        icon: link,
        title: "Liquidity Pools pairing",
    },
    {
        id: 4,
        icon: brain,
        title: "AI-powered medical data systems",
    },
    {
        id: 5,
        icon: banking,
        title: "Decentralized hedge funds",
    },
    {
        id: 6,
        icon: finance,
        title: "Staking risk management ",
    },
];
const ComplianceOffer = () => {
    return (_jsxs("div", { className: "relative py-5 sm:py-6 md:py-8 lg:py-16 xl:py-16 text-center max-w-[96rem] mx-auto", children: [_jsx("h2", { className: "text-[#2A2A2A] [font-family: Switzer] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-center font-normal mb-3 sm:mb-4", children: "What We Offer" }), _jsx("p", { className: "text-[#595465] font-openSansHebrew text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg text-center font-normal mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto", children: "Everything You Need to Go from Vision to Valuation" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 ", children: cardsData.map((card) => (_jsx(Card, { icon: card.icon, title: card.title, description: card.description }, card.id))) }), _jsxs("div", { className: "flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full", children: [_jsxs("div", { className: "w-full lg:w-1/2 lg:max-w-full", children: [_jsx("h2", { className: "text-[#2A2A2A] text-center lg:text-start [font-family: Switzer] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-normal mb-3 sm:mb-4", children: "Smart Legal Integrations" }), _jsx("p", { className: "text-[#5A5A5A] font-openSansHebrew text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg text-center lg:text-start font-normal mb-8 sm:mb-10 md:mb-12", children: "Plug-and-play modules for" })] }), _jsx("div", { className: "w-full lg:w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6", children: cardsData2.map((card) => (_jsx(Cards, { icon: card.icon, title: card.title }, card.id))) })] })] }));
};
export default ComplianceOffer;
