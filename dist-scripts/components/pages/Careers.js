import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import career from "../../../src/assets/career.webp";
import FormTalent from "../FormTalent";
import { changer, connection, rightIcon } from "../VectorImage";
const items = [
    {
        icon: rightIcon(),
        title: "Always Updated",
        description: "You'll be the first to know about new job openings",
    },
    {
        icon: connection(),
        title: "Make your connections",
        description: "You'll build your professional network",
    },
    {
        icon: changer(),
        title: "Game changer",
        description: "You'll stand out from other applicants",
    },
];
const Careers = () => {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Careers | Maxtron" }), _jsx("meta", { name: "description", content: "Join Maxtron's talent community. Get notified about new jobs and build your network in tech and marketing." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/careers" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" }), _jsx("meta", { property: "og:title", content: "Careers | Maxtron" }), _jsx("meta", { property: "og:description", content: "Join Maxtron's talent community. Get notified about new jobs and build your network in tech and marketing." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/careers" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsx("div", { className: "w-full", children: _jsxs("div", { className: "w-full max-w-[96rem] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-5 md:mt-6 lg:mt-8 xl:mt-10 px-5 md:px-8 xl:px-6", children: [_jsxs("div", { className: "flex w-full flex-col-reverse lg:flex-row gap-[14px] md:gap-[32px] lg:gap-[44px]  ", children: [_jsx("div", { className: "flex-1 ", children: _jsx("img", { src: career, alt: "Career Image", className: "w-full h-[430px] lg:h-[500px] object-contain rounded-xl px-3 md:px-4 lg:px-7 lg:py-4" }) }), _jsx("div", { className: "flex-1 lg:py-6 lg:pt-12", children: _jsxs("div", { className: "flex flex-col gap-5  lg:gap-9 xl:gap-10 px-3 md:px-4 lg:px-7 xl:px-10", children: [_jsx("h1", { className: `self-stretch text-[#2A2A2A] font-openSansHebrew text-2xl md:text-3xl lg:text-5xl font-bold leading-[120%]`, children: "Stay Connected with Maxtron" }), _jsx("p", { className: `self-stretch text-[#3B3C4A] font-openSansHebrew text-lg md:text-xl lg:text-3xl font-normal leading-[160%] pr-8`, children: "By joining our talent community, we will notify you about relevant positions, and keep you in mind whenever we have interesting opportunities." })] }) })] }), _jsx("div", { children: _jsx(FormTalent, {}) }), _jsxs("div", { className: "w-full mt-5 md:mt-9 lg:mt-12 xl:mt-16 mb-6 lg:mb-10", children: [_jsx("h1", { className: "self-stretch text-[#3B3C4A] mx-auto w-[90%] md:w-[80%] lg:w-[75%]  text-center font-openSansHebrew text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-[120%]", children: "Take your job search to the next level" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-8 lg:mt-11 xl:mt-14", children: items.map((item, index) => (_jsxs("div", { className: "flex flex-col p-4 md:p-6 lg:p-8 gap-4 items-center text-center border-b md:border-b-0 border-[#C9C2C3]", children: [_jsx("div", { children: item.icon }), _jsx("h1", { className: "text-[#2A2A2A] font-openSansHebrew text-lg md:text-xl lg:text-2xl font-bold leading-[120%]", children: item.title }), _jsx("p", { className: "text-[#3B3C4A] font-openSansHebrew text-base md:text-lg lg:text-xl font-normal leading-[160%]", children: item.description })] }, index))) })] })] }) })] }));
};
export default Careers;
