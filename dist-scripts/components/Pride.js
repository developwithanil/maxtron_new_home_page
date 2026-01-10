import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const prideData = [
    {
        id: "experience",
        number: 12,
        suffix: "+",
        label: "Years Of Experience",
    },
    {
        id: "products",
        number: 3,
        suffix: "K+",
        label: "Products Delivered",
    },
    {
        id: "countries",
        number: 20,
        suffix: "+",
        label: "Countries Reached Worldwide",
    },
    {
        id: "awards",
        number: 15,
        suffix: "+",
        label: "Industry Awards",
    },
    {
        id: "partners",
        number: 100,
        suffix: "+",
        label: "Business Partners",
    },
];
const Pride = () => {
    return (_jsx("section", { className: "py-8 lg:py-16  overflow-hidden", children: _jsx("div", { className: "max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-16 xl:px-20", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-20 items-start", children: [_jsx(motion.div, { className: "w-full lg:w-5/12  text-left", initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.8, ease: "easeOut" }, children: _jsxs("h2", { className: "text-3xl sm:text-4xl  lg:text-6xl font-light text-[#2A2A2A] leading-tight font-[IBM Plex Sans]", children: ["Maxtron\u2019s", _jsx("span", { className: "font-normal lg:block  mt-2", children: " Achievements" })] }) }), _jsx("div", { className: "w-full lg:w-7/12 ", children: _jsx("div", { className: "grid grid-cols-2 gap-y-12 sm:gap-x-12 lg:gap-x-24", children: prideData.map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: {
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }, className: "flex flex-col", children: [_jsx("span", { className: "text-sm font-bold text-[#2A2A2A] mb-2 block tracking-wide ont-[IBM Plex Sans]", children: item.label }), _jsxs("div", { className: "flex items-baseline", children: [_jsx("span", { className: "text-5xl sm:text-6xl font-light text-[#9747FF]", style: {
                                                    background: "linear-gradient(180deg, #BCA1DD 0%, #7A35C1 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                }, children: _jsx(CountUp, { end: item.number, duration: 2.5, enableScrollSpy: true, scrollSpyOnce: true }) }), _jsx("span", { className: "text-5xl sm:text-6xl font-light ml-1", style: {
                                                    background: "linear-gradient(180deg, #BCA1DD 0%, #7A35C1 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                }, children: item.suffix })] })] }, item.id))) }) })] }) }) }));
};
export default Pride;
