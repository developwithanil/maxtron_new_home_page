import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import feature1 from "../assets/whymaxtron/feature1.webp";
import feature2 from "../assets/whymaxtron/feature2.webp";
import feature3 from "../assets/whymaxtron/feature3.webp";
import feature4 from "../assets/whymaxtron/feature4.webp";
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
    return (_jsx("section", { id: "about-us", className: "relative py-4 md:py-8 lg:py-11 xl:py-12 inset-0  text-center ", children: _jsx("div", { children: _jsxs("div", { className: "p-4 ", children: [_jsx("h2", { className: "text-2xl lg:text-6xl font-bold text-[#2A2A2A] mb-4 text-[Switzer]", children: "Why Maxtron" }), _jsx("p", { className: "mb-8 md:mb-10 lg:mb-14 xl:mb-16  text-[#5B5570] font-openSansHebrew text-md md:text-lg mx-auto w-[80%]", children: "At Maxtron.ai, we\u2019re more than just a digital product engineering company \u2014 we\u2019re your innovation partner. We combine cutting-edge technologies like AI, blockchain, and cloud with deep business insight to build scalable, high-performance digital products." }), _jsx("h3", { className: "text-2xl lg:text-3xl font-bold text-[#2A2A2A] mb-4 text-[Switzer] mb-8 md:mb-10 lg:mb-14 xl:mb-16 ", children: "What sets us apart:" }), _jsx("div", { className: "container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-8", children: cardData.map((card, index) => (_jsxs("div", { className: "bg-white border border-solid border-[#DFDEE7] rounded-[20px] p-4 flex flex-col items-start gap-5", children: [_jsx("div", { className: "text-[#2A2A2A] font-[Switzer] font-semibold text-lg lg:text-lg text-start gap-5", children: card.text }), _jsx("img", { src: card.image, alt: card.text, className: "w-full h-auto rounded-xl text-center" })] }, index))) })] }) }) }));
};
export default WhyMaxtron;
