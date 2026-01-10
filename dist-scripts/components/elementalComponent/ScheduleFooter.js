import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import schedule from "../../assets/augmentation/schedulefooter.svg";
const ArrowRightIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 ml-2 sm:ml-3 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" }) }));
const ScheduleFooter = () => {
    return (_jsx("div", { className: "md:p-16 xl:p-16 lg:p-16 p-5 max-w-[96rem] mx-auto", children: _jsx("div", { className: "bg-[#7A35C1] text-white py-12 sm:py-16 md:py-20 rounded-3xl", style: {
                backgroundImage: `url(${schedule})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }, children: _jsxs("div", { className: "max-w-4xl mx-auto flex flex-col items-center text-center md:p-0 p-5", children: [_jsx("h2", { className: "text-[24px] md:text-[48px]  lg:text-[48px]  xl:text-[48px] font-bold mb-4 font-[Switzer]", children: "Ready to Augment Your Tech Team?" }), _jsx("p", { className: "text-[14px] md:text-[16px]  lg:text-[16px]  xl:text-[16px] text-[#FFF] mb-8 sm:mb-10 md:mb-12 max-w-xl", children: "Let's help you build faster, smarter, and more cost-efficiently." }), _jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6", children: _jsxs("button", { onClick: () => {
                                window.open("https://calendly.com/business-maxtron/30min");
                            }, className: "group  hover:bg-[#682BAF] border-2 border-white rounded-full \r\n                       py-3 px-6 sm:px-8 \r\n                       text-sm sm:text-base font-normal \r\n                       text-[#FFF]\r\n                       flex items-center justify-center \r\n                       transition-all duration-200 ease-in-out\r\n                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75\r\n                       w-full sm:w-auto", children: ["Schedule a Free Strategy Call", _jsx(ArrowRightIcon, {})] }) })] }) }) }));
};
export default ScheduleFooter;
