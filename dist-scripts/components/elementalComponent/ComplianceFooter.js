import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import schedule from "../../assets/augmentation/schedulefooter.svg";
import { Link } from "react-router-dom";
const ArrowRightIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 ml-2 sm:ml-3 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" }) }));
const ComplianceFooter = () => {
    return (_jsx("div", { className: " max-w-[96rem] mx-auto", children: _jsx("div", { className: "bg-[#F3EBFC] text-white py-12 sm:py-16 md:py-20 rounded-3xl", style: {
                backgroundImage: `url(${schedule})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }, children: _jsxs("div", { className: "max-w-6xl mx-auto flex flex-col items-center text-center md:p-0 p-5", children: [_jsx("h2", { className: "text-[24px] md:text-[48px]  lg:text-[48px]  xl:text-[48px] font-bold mb-4 font-[Switzer] text-[#2A2A2A]", children: "You\u2019re not too early. You\u2019re just early enough." }), _jsx("p", { className: "text-[14px] md:text-[16px]  lg:text-[16px]  xl:text-[16px] text-[#2A2A2A] mb-8 sm:mb-10 md:mb-12 max-w-xl", children: "We help radical founders raise capital the world hasn\u2019t seen \u2014 yet." }), _jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6", children: _jsx(Link, { to: "/contact", children: _jsxs("button", { className: "group  hover:bg-[#CAA8EF] border-2 border-[#2A2A2A] rounded-full \n                       py-3 px-6 sm:px-8 \n                       text-sm sm:text-base font-normal \n                       text-[#2A2A2A]\n                       flex items-center justify-center \n                       transition-all duration-200 ease-in-out\n                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75\n                       w-full sm:w-auto bg-[#FFFFFF] ", children: ["Contact Us Now", _jsx(ArrowRightIcon, {})] }) }) })] }) }) }));
};
export default ComplianceFooter;
