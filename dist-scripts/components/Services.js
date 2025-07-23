import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import img1 from "../assets/service/service1.webp";
import img2 from "../assets/service/service2.webp";
import img3 from "../assets/service/service3.webp";
import img4 from "../assets/service/service4.webp";
import { Link } from "react-router-dom";
import React from "react";
import { triangle as Triangle, target as Target } from "./VectorImage";
import { Helmet } from 'react-helmet-async';
const services = [
    {
        title: "Web3 Custom Solutions",
        description: "As a leading Web3 development company, we specialize in designing and building dynamic Web3 solutions powered by blockchain, AI, IoT, and cryptography technologies. Our expert developers leverage advanced Web3 tools, frameworks, APIs, oracles, and programming languages like Rust and Solidity to deliver tailored solutions across various industries, including gaming, real estate, and fintech.",
        points: [
            "Native Crypto Token Development & Launch",
            "DApps Development",
            "Crypto Gaming Development",
            "Smart Contract Development",
            "DeFi Development",
            "Metaverse Development",
            "Native Payment Development",
            "Others",
        ],
        image: img1,
    },
    {
        title: "Applied AI Products & Services",
        description: "Unlock your business's full potential with our cutting-edge AI development services, tailored to optimize workflows and enhance operational efficiency. We provide end-to-end AI solutions, including expert AI consulting, custom AI application development, and seamless integration into your existing processes, delivering a complete suite of AI services for maximum impact.",
        points: [
            "Custom AI App Development",
            "Generative AI Development & Integration",
            "AI Integration",
            "AI Agent/Copilot Development",
            "PoC & MVP Development",
            "GenAI Development & LLM Fine-tuning",
            "AI Chatbot Development",
            "Others",
        ],
        image: img3,
    },
    {
        title: "Experiential Development",
        description: "Elevate your space with our cutting-edge experiential technology. We integrate innovative software, state-of-the-art hardware, and dynamic content to create fully immersive experiences that captivate and engage your audience.",
        points: [
            "AR Software/App Development",
            "AR/VR/MR Game Development",
            "Interactive Technologies",
            "Embedded Engineering",
            "Projection Mapping",
            "Hologram Technologies",
        ],
        image: img2,
    },
    {
        title: "Business Enhancement",
        description: "Achieve scientific business growth with our expert solutions in fundraising, marketing, and sales. Whether you're in B2B or B2C, we provide proven strategies, cutting-edge tools, and effective tactics to amplify your product's impact and deliver outstanding results.",
        points: [
            "B2B: AI-Powered Prospecting & AI Calling",
            "B2C: Performance Marketing",
            "Investor Outreach on Autopilot",
            "Channel Partnership",
            "Web3 Projects Marketing & Growth",
            "PR & Media Solutions",
            "Marketing Communications & Branding",
        ],
        image: img4,
    },
];
const Services = () => {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Our Services | Maxtron" }), _jsx("meta", { name: "description", content: "Explore Maxtron's innovative services: Web3 solutions, AI products, experiential development, and business enhancement for tech-driven growth." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/services" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" }), _jsx("meta", { property: "og:title", content: "Our Services | Maxtron" }), _jsx("meta", { property: "og:description", content: "Explore Maxtron's innovative services: Web3 solutions, AI products, experiential development, and business enhancement for tech-driven growth." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/services" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsxs("div", { className: "relative z-10 text-center mb-8 service_hero_img px-4 sm:px-6 lg:px-8 h-[90vh]", children: [_jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold", children: "Our Services At A Glance" }), _jsxs("p", { className: "text-base sm:text-lg lg:text-xl mt-4 text-white bg-transparent font-medium", style: { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }, children: ["At our core, we develop innovative tech products that put user needs first, leveraging cutting-edge technology. Additionally, we strategize and ", _jsx("br", { className: "sm:hidden md:block" }), "execute growth plans to maximize returns and drive substantial success for the products."] })] }), _jsxs("div", { className: "relative", children: [_jsx("label", { htmlFor: "fileInput", className: "sr-only", children: "Upload File" }), _jsx("input", { type: "file", id: "fileInput", name: "file", className: "hidden", "aria-label": "File upload" })] }), _jsxs("div", { className: "relative container mx-auto p-0 md:p-8", children: [_jsx("div", { className: "absolute inset-0 opacity-10 z-0" }), services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (_jsxs("div", { className: `relative z-10 flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} md:flex-row items-center mb-8 rounded-lg`, children: [_jsx("div", { className: "w-full md:w-1/2 p-4", children: _jsx("img", { src: service.image, alt: service.title, className: "rounded-lg w-full" }) }), _jsxs("div", { className: `w-full md:w-1/2 p-4 ${isEven ? "lg:text-left" : "lg:text-right"}`, children: [_jsx("h2", { className: "text-2xl font-bold mb-2", children: service.title }), _jsx("p", { className: "bg-[#F7F4F480] my-4 p-0 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans", children: service.description }), _jsx("ul", { className: `list-disc list-inside ${isEven ? "lg:text-left" : "lg:text-right"}`, children: service.points.map((point, idx) => (_jsx("li", { className: "text-[#8941C4] mb-1 text-sm rounded-lg font-OpenSans", children: point }, idx))) })] })] }, index));
                    }), _jsx("div", { className: "relative z-10 text-center my-7", children: _jsxs("div", { className: "flex flex-col sm:flex-row justify-center items-center gap-4", children: [_jsxs("button", { className: "flex items-center bg-gray-900 text-white my-1 px-6 py-4 text-base md:text-[16px] rounded-xl min-h-[44px] min-w-[44px]", children: [_jsx("span", { className: "inline-block pr-3 w-6 h-6 md:w-8 md:h-8", children: _jsx(Triangle, {}) }), _jsx(Link, { to: "/Contact", className: "inline-block", children: "Get in Touch" })] }), _jsxs("button", { className: "bg-gray-900 flex items-center text-white my-1 px-6 py-4 text-base md:text-[16px] rounded-xl min-h-[44px] min-w-[44px]", onClick: () => {
                                        window.open("https://calendly.com/business-maxtron/30min");
                                    }, children: [_jsx("span", { className: "inline pr-3 w-8 h-auto md:w-12", children: _jsx(Target, {}) }), "Book a Consultation"] })] }) })] })] }));
};
export default React.memo(Services);
