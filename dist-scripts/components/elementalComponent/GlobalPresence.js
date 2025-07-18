import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import presence from "../../assets/case/presence.webp";
const items = [
    "KOLs and degen army",
    "Market and trends analysis",
    "Tailor-made solutions",
    "Legal and compliance",
];
const GlobalPresence = () => {
    return (_jsxs("div", { className: "w-full max-w-[96rem] mx-auto flex flex-col gap-5 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-5 md:py-7 lg:py-10", children: [_jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-3xl lg:text-4xl xl:text-5xl font-black leading-[160%] tracking-[-1.0px] lg:tracking-[-1.44px]", children: "Global Presence" }), _jsxs("div", { className: "flex flex-col-reverse lg:flex-row gap-6 w-full items-stretch", children: [_jsx("div", { className: "flex flex-col gap-4 flex-1", children: items.map((item, idx) => (_jsxs("div", { className: "bg-[#F3EBFC] border border-solid border-[#7A35C1] rounded-xl p-4  lg:p-5 flex flex-col items-start gap-2", children: [_jsx("div", { className: "flex items-center font-mono justify-center w-8 h-8 rounded-lg bg-[#CAA8EF] text-[#363348] font-bold text-lg", children: `0${idx + 1}` }), _jsx("div", { className: "text-[#2A2A2A] font-[Switzer] font-medium text-base lg:text-lg", children: item })] }, idx))) }), _jsx("div", { className: "flex-1 flex justify-center items-center lg:h-auto", children: _jsx("div", { className: "w-full  h-full", children: _jsx("img", { src: presence, alt: "Global presence", className: "w-full h-[300px] md:h-[400px] lg:h-[490px]  rounded-xl object-fill" }) }) })] })] }));
};
export default GlobalPresence;
