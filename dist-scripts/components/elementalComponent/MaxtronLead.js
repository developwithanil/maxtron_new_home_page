"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { led, licensed, global } from "../ComplianceVector";
const featuresData = [
    {
        number: "1",
        Icon: led,
        title: "Led by Compliance Veterans",
        points: [
            "Former SEC regulatory experts in leadership",
            "Global legal advisors with deep experience in crypto, AI, DeFi",
            "Knowledge of inter-country regulations and cross-border data laws",
        ],
    },
    {
        number: "2",
        Icon: licensed,
        title: "Licensed & Trusted",
        points: [
            "DIFC-licensed for fintech operations",
            "Built-in legal protocols for financial-grade asset security",
            "Designed for regulated environments like healthcare, finance, and banking",
        ],
    },
    {
        number: "3",
        Icon: global,
        title: "Global Legal Infrastructure",
        points: [
            "Real-time monitoring of U.S., EU, UAE, and APAC regulations",
            "Structured asset frameworks that comply with FATF, AML, and KYC laws",
            "Integrated country-by-country compliance mapping.",
        ],
    },
];
const MaxtronLead = () => {
    return (_jsxs("div", { className: "relative flex flex-col md:flex-row gap-12 lg:gap-20 p-5 md:p-8 lg:p-10 text-left max-w-[96rem] mx-auto", children: [_jsx("div", { className: "md:w-1/2", children: _jsx("h2", { className: "font-[switzer] font-medium text-[#2A2A2A] lg:text-5xl sm:text-3xl\n          text-xl leading-tight", children: "Why Maxtron is Built Different" }) }), _jsx("div", { className: "md:w-1/2", children: _jsx("div", { className: "relative", children: featuresData.map((feature, index) => (_jsxs("div", { className: "flex gap-8", children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#1314161F] bg-white flex items-center justify-center text-[#818688] font-semibold z-10", children: feature.number }), index < featuresData.length - 1 && (_jsx("div", { className: "w-px h-full bg-gray-200 " }))] }), _jsxs("div", { className: "pb-16 transform -translate-y-1", children: [_jsxs("div", { className: "flex items-center gap-4 mb-8", children: [_jsx("div", { className: "bg-black text-white p-3 rounded-xl", children: _jsx("div", { className: "w-6 h-6", children: _jsx(feature.Icon, {}) }) }), _jsx("h3", { className: "text-xl lg:text-2xl font-medium text-[#27282B] font-[switzer]", children: feature.title })] }), _jsx("ul", { className: "list-disc  list-inside text-[#505355] font-openSansHebrew pl-4 space-y-1 text-sm", children: feature.points.map((point, i) => (_jsx("li", { children: point }, i))) })] })] }, feature.number))) }) })] }));
};
export default MaxtronLead;
