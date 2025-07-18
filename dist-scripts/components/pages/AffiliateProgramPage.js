import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import affiliaterightlanding from "../../assets/case/affiliaterightlanding.webp";
import darkFullLogo from "../../assets/darkFullLogo.png";
import { deals, offer, report } from "../AffiliateVectorImage";
import AffiliateLastComponent from "../elementalComponent/AffiliateLastComponent";
import AffiliateTiers from "../elementalComponent/AffiliateTiers";
import Faq from "../elementalComponent/Faq";
const items = [
    {
        icon: deals,
        title: "Upto 30% Commission on Closed Deals",
        description: "Get rewarded for real value. Unlike most programs, we pay based on actual deal closures, meaning higher payouts—often $1,000+ per referral.",
    },
    {
        icon: report,
        title: "Transparent Tracking & Reporting",
        description: "Stay in control with real-time dashboards, performance insights, and clear attribution across the full sales cycle.",
    },
    {
        icon: offer,
        title: "Premium B2B Offerings",
        description: "We specialize in advanced innovation solutions for mid-to-enterprise-level companies—giving you the opportunity to earn from high-value deals with long-term customers.",
    },
];
const items1 = [
    "SaaS Reviewers & Bloggers",
    "B2B Content Creators",
    "Consultants & Agencies",
    "Startup Advisors",
    "LinkedIn Influencers",
    "Tech Community Builders",
];
const items2 = [
    {
        title: "Apply to Join",
        description: "Submit your info and promotion plan. We'll review and respond within 2–3 business days.",
    },
    {
        title: "Get Approved & Onboarded",
        description: "Once approved, you'll gain access to your affiliate dashboard, links, and custom assets.",
    },
    {
        title: "Refer & Promote",
        description: "Use your unique tracking link to refer companies to Maxtron. We provide sales collateral, email templates, and more.",
    },
    {
        title: "Earn Commission",
        description: "When your referral signs and pays, you'll earn up to 30% of the deal value. It's that simple.",
    },
];
const AffiliateProgramPage = () => {
    return (_jsx("div", { className: "w-full", children: _jsxs("div", { className: "w-full max-w-[96rem] mx-auto pl-4 sm:pl-7 md:pl-12 xl:pl-14 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ", children: [_jsxs("div", { className: "flex flex-col-reverse lg:flex-row gap-5 sm:gap-7 md:gap-9 lg:gap-10", children: [_jsxs("div", { className: "flex-1 flex flex-col  justify-center items-start px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 gap-4 md:gap-5 lg:gap-6 xl:gap-8", children: [_jsxs("div", { className: "flex flex-col gap-1 sm:gap-2", children: [_jsx("h1", { className: " font-[Switzer] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[110%] mb-2", children: "Turn your network into" }), _jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[110%]", children: _jsxs("span", { className: "flex items-center gap-2 flex-wrap", children: [_jsx("span", { className: "bg-[#F3EBFC] px-[7px] lg:px-[11px] py-1 rounded-xl text-[#7A35C1] text-center w-fit", children: "revenue" }), "with", _jsx("span", { className: "flex items-center bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.14)] px-2 lg:px-4 py-1 rounded-xl", children: _jsx("img", { src: darkFullLogo, alt: "Maxtron logo", className: "w-[110px] md:w-[130px] lg:w-[141.857px] h-9 md:h-10 lg:h-12" }) })] }) })] }), _jsx("p", { className: "text-[#5B5570] font-openSansHebrew text-base md:text-lg lg:text-xl font-normal leading-[160%]", children: "Earn upto 30% commission for every deal you help close with Maxtron Innovations." }), _jsx("div", { className: "flex justify-center items-center w-fit border border-[#7A35C1] px-6 py-2 lg:py-3 rounded-lg transition duration-300 hover:bg-[#7A35C1] group cursor-pointer", children: _jsx(Link, { to: "/contact", className: "text-[#7A35C1] group-hover:text-white text-base font-openSansHebrew font-medium leading-[160%] transition-colors duration-300 tracking-[0.3px]", children: "Become an affiliate" }) }), _jsxs("p", { className: "text-start text-sm sm:text-base md:text-lg text-[#363348] leading-[140%] tracking-wide font-openSansHebrew ", children: ["Already a partner?", " ", _jsx(Link, { to: "/contact", className: "text-[#5B5570] font-semibold underline underline-offset-2 hover:text-[#7A35C1] transition-colors duration-300", children: "Access your affiliate dashboard" })] })] }), _jsx("div", { className: "flex-1 mt-6 lg:mt-0", children: _jsx("img", { src: affiliaterightlanding, alt: "Affiliate team", className: "w-full h-full object-contain filter grayscale " }) })] }), _jsxs("div", { className: "w-full  mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8", children: [_jsx("h2", { className: "self-stretch text-[#2A2A2A]  font-[Switzer] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-[140%] text-center mt-8 md:mt-10 lg:mt-12 xl:mt-16", children: "Why Join the Maxtron Innovations Affiliate Program?" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7 md:mt-10 lg:mt-12 xl:mt-16 ", children: items.map((item, index) => (_jsxs("div", { className: "flex flex-col items-start gap-2 md:gap-3 lg:gap-5 ", children: [_jsx("div", { className: "w-16 h-16 ", children: _jsx(item.icon, {}) }), _jsx("h3", { className: " self-stretch text-[#213343] font-lexendDeca text-base lg:text-lg font-semibold leading-7", children: item.title }), _jsx("p", { className: " text-[#213343] font-lexendDeca text-sm lg:text-base font-light leading-7 pr-4", children: item.description })] }, index))) })] }), _jsxs("div", { className: "w-full flex flex-col lg:flex-row gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8", children: [_jsxs("div", { className: "w-full lg:w-[40%] text-center lg:text-start", children: [_jsx("h1", { className: "text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl xl:text-4xl mb-2 font-semibold leading-[140%]", children: "Who Should Join?" }), _jsx("p", { className: "text-[#2A2A2A] font-openSansHebrew text-lg lg:text-xl font-normal leading-8", children: "If you have an audience, influence, or insider industry knowledge, we want to work with you:" })] }), _jsx("div", { className: "w-full lg:w-[60%] grid grid-cols-2 gap-4 md:gap-5 lg:gap-5 xl:gap-6", children: items1.map((item, index) => (_jsx("div", { className: "flex flex-col items-center gap-2.5 border border-[#DFDEE7] p-2 md:p-3 lg:p-3 xl:p-4 rounded-lg", children: _jsx("p", { className: "text-[#2A2A2A] font-[Switzer] text-base lg:text-lg font-semibold leading-[23.4px] text-center", children: item }) }, index))) })] }), _jsxs("div", { className: "w-full  mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8", children: [_jsx("h2", { className: "self-stretch text-[#2A2A2A]  font-[Switzer] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-[140%] text-center mt-8 md:mt-10 lg:mt-12 xl:mt-16", children: "How it Works" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-4 mt-10 md:mt-12 lg:mt-16 xl:mt-20", children: items2.map((item, index) => (_jsxs("div", { className: "flex relative flex-col items-center text-center p-3 pt-10 border border-gray-200 rounded-2xl shadow-sm bg-white", children: [_jsx("div", { className: "w-12 h-12 absolute -top-[20px] font-[Switzer] flex items-center justify-center rounded-full bg-[#F5F5F5] text-[#1D1B33] font-bold ", children: index + 1 }), _jsx("h3", { className: "text-[#2A2A2A] text-center font-lexendDeca text-lg font-semibold leading-7 mb-2", children: item.title }), _jsx("p", { className: "self-stretch text-[#2A2A2A] text-center font-openSansHebrew text-base font-normal leading-6", children: item.description })] }, index))) })] }), _jsx(AffiliateTiers, {}), _jsx(Faq, {}), _jsx(AffiliateLastComponent, {})] }) }));
};
export default AffiliateProgramPage;
