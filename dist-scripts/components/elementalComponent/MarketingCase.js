import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import usecase from "../../assets/usecase.webp";
const marketingStepsData = [
    {
        number: "1",
        title: "Discovery & Research",
        description: "— Understand your project’s vision, goals, and target community.",
    },
    {
        number: "2",
        title: "Strategy Design",
        description: "— Tailored marketing roadmap aligned with your tokenomics and timelines.",
    },
    {
        number: "3",
        title: "Creative Execution",
        description: "— Content creation, influencer partnerships, and paid media rollout.",
    },
    {
        number: "4",
        title: "Optimization & Reporting",
        description: "— Continuous monitoring, analytics, and transparent progress reports.",
    },
    {
        number: "5",
        title: "Scale & Sustain",
        description: "— Ongoing growth campaigns for long-term brand visibility.",
    },
];
const MarketingCase = () => {
    return (_jsxs("div", { className: "max-w-[96rem]  mx-auto p-5 md:p-16 lg:p-16 xl:p-16 text-white flex flex-col md:flex-row w-full md:gap-28 gap-5", children: [_jsxs("div", { className: "md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8", children: [_jsx("h2", { className: "text-[20px] sm:text-[32px] lg:text-[48px] xl:text-[48px] font-medium text-[#2A2A2A] leading-tight", children: "Our Process" }), _jsx("div", { className: "w-full flex justify-center items-center  ", children: _jsx("div", { className: "w-full max-w-xs sm:max-w-xs flex justify-center items-center ", children: _jsx("img", { src: usecase, alt: "Staff Augmentation Process Diagram", className: "w-full h-auto m-0 p-0" }) }) })] }), _jsx("div", { className: "md:w-1/2 w-full flex flex-col \r\n                      space-y-5 sm:space-y-5 lg:space-y-5 \r\n                     ", children: marketingStepsData.map((step, index) => (_jsxs("div", { className: "flex items-start space-x-4 ", children: [_jsx("div", { className: "bg-[#F5F5F5] text-[#1D1B33]  w-7 h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center text-xl lg:text-xl flex-shrink-0 mt-1", children: step.number }), _jsxs("div", { className: "flex flex-wrap items-start mt-2", children: [_jsx("h3", { className: "text-sm md:text-base lg:text-lg xl:text-lg text-[#2A2A2A] mb-1 lg:mb-2 font-semibold font-lexendDeca mr-1", children: step.title }), _jsx("p", { className: "text-[#2A2A2A] text-sm sm:text-base md:text-base mt-[1px]", children: step.description })] })] }, index))) })] }));
};
export default MarketingCase;
