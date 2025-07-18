import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import map from "../../assets/augmentation/map.svg";
import { timezone } from "../../components/VectorImage";
import { communication } from "../../components/VectorImage";
import { agile } from "../../components/VectorImage";
const items = [
    { text: "<strong>Timezone-aligned</strong> developers", icon: timezone },
    {
        text: "<strong>Clear</strong> communication and English <strong>proficiency</strong>",
        icon: communication,
    },
    {
        text: "<strong>Cultural</strong> fit and <strong>agile</strong> process readiness",
        icon: agile,
    },
];
const TimeZone = () => {
    return (_jsx("div", { className: "w-full max-w-[96rem] mx-auto flex flex-col gap-5 md:gap-9 lg:gap-12 px-4 sm:p-5 lg:p-16 xl:p-16 py-5 md:py-7 lg:py-10", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-6 w-full items-stretch", children: [_jsxs("div", { className: "flex-1 relative flex   overflow-hidden rounded-xl bg-[#F5F5F5]", children: [_jsx("img", { src: map, alt: "Global presence", className: "absolute inset-0  z-0 " }), _jsxs("div", { className: "relative z-10 p-4 sm:p-8 md:p-8 max-w-[85%]", children: [_jsxs("h2", { className: "text-[22px] sm:text-[28px] md:text-[32px] font-semibold text-[#2A2A2A] mb-4 leading-tight", children: ["Global Delivery ", _jsx("span", { className: "italic font-normal", children: "With" }), _jsx("br", {}), _jsx("span", { className: "italic font-normal", children: "Local Sensitivity" })] }), _jsxs("p", { className: "text-[#2A2A2A] text-[14px] sm:text-base  max-w-[85%]", children: ["From", " ", _jsx("strong", { children: "India's top tech hubs (Bangalore, Pune, Noida, Hyderabad)" }), " ", "to global clients across the", " ", _jsx("strong", { children: "US, UK, MENA, and Australia" }), ", our model ensures you get:"] })] })] }), _jsx("div", { className: "flex flex-col gap-4 flex-1 order-2 lg:order-1", children: items.map((item, idx) => (_jsxs("div", { className: "bg-[#F5F5F5] rounded-xl p-4 lg:p-5 flex flex-col items-start gap-2", children: [_jsx("div", { className: "flex items-center justify-center w-8 h-8", children: _jsx(item.icon, {}) }), _jsx("div", { className: "text-[#2A2A2A] font-[Switzer] font-medium text-base lg:text-lg", dangerouslySetInnerHTML: { __html: item.text } })] }, idx))) })] }) }));
};
export default TimeZone;
