import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import feature1 from "../assets/whymaxtron/feature1.png";
import feature2 from "../assets/whymaxtron/feature2.png";
import feature3 from "../assets/whymaxtron/feature3.png";
import feature4 from "../assets/whymaxtron/feature4.png";
const cardData = [
    { text: "Quick Response", image: feature1 },
    { text: "Generating Value", image: feature2 },
    { text: "Approachable Team", image: feature3 },
    {
        text: "Cutting-Edge Products",
        image: feature4,
    },
];
const WhyMaxtron = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
            },
        },
    };
    return (_jsx(motion.section, { id: "about-us", className: "relative py-4 md:py-8 lg:py-11 xl:py-12 inset-0 ", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.1 }, variants: containerVariants, children: _jsx("div", { children: _jsxs("div", { className: "p-4", children: [_jsx(motion.h2, { className: "text-2xl lg:text-6xl font-light text-[#2A2A2A] mb-4 font-[IBM Plex Sans]  text-start mx-auto w-[90%]", variants: itemVariants, children: "Why Maxtron" }), _jsx(motion.p, { className: "mb-8 md:mb-10 lg:mb-14 xl:mb-16  text-[#5B5570] font-[IBM Plex Sans] text-md md:text-lg mx-auto w-[90%] text-start", variants: itemVariants, children: "We go beyond merely serving the industry - we forge enduring relationships founded on trust and mutual success." }), _jsx("div", { className: "container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-8", children: cardData.map((card, index) => (_jsxs(motion.div, { className: "bg-white border border-solid border-[#DFDEE7] p-6 flex flex-col items-start gap-5 shadow-sm transition-all duration-300", variants: cardVariants, whileHover: {
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                                transition: { duration: 0.4 },
                            }, children: [_jsx("div", { className: "text-[#525252] font-[IBM Plex Sans] font-normal text-lg lg:text-lg text-start gap-5", children: card.text }), _jsx("img", { src: card.image, alt: card.text, className: "w-full h-auto text-center" })] }, index))) })] }) }) }));
};
export default WhyMaxtron;
