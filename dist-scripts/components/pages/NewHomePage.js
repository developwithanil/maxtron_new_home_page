import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { Helmet } from "react-helmet-async";
import ClientMarquee from "../elementalComponent/ClientMarquee";
import TechnologyUsed from "../elementalComponent/TechnologyUsed";
import HeroSection from "../Hero";
import WhyMaxtron from "../WhyMaxtron";
import WhoMaxtron from "../WhoMaxtron";
import Pride from "../Pride";
import CaseStudies from "../CaseStudies";
import Gallery from "../Gallery";
import Testimonials from "../Testimonials";
import ContactForm from "../ContactForm";
// import Webinar from "./Webinar";
import ContactPopup from "../ContactPopup";
const NewHomePage = () => {
    const [showPopup, setShowPopup] = React.useState(false);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Creating Winning Companies and Making Them Successful | Best Digital Product Engineering & Consulting Services | Maxtron.ai" }), _jsx("meta", { name: "description", content: "Maxtron delivers the best digital product engineering and consulting services\u2014 driving innovation with AI, blockchain, and end-to-end product development solution for startups, SMBs, and enterprises." }), _jsx("meta", { name: "keywords", content: "Maxtron Innovations, Maxtron innovation, maxtron, Best Digital Product Engineering Service in india, Digital Product Engineering in India, Top Digital Product Engineering in India, Top Digital Product Engineering in usa, Top Digital Product Engineering in dubai, Best Digital Product Engineering in dubai, Best Digital Product Engineering in usa, AI-Powered Digital Product Engineering in India, USA-Based Digital Product Engineering with AI Expertise, AI-Powered Digital Product Engineering in USA, AI-Powered Digital Product Engineering in Dubai, AI and Web3 Product Engineering in Dubai, AI and Web3 Product Engineering in India, AI and Web3 Product Engineering in USA" }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" }), _jsx("meta", { property: "og:title", content: "Creating Winning Companies and Making Them Successful | Best Digital Product Engineering & Consulting Services  | Maxtron.ai" }), _jsx("meta", { property: "og:description", content: "Maxtron delivers the best digital product engineering and consulting services\u2014 driving innovation with AI, blockchain, and end-to-end product development solution for startups, SMBs, and enterprises." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsxs("div", { id: "Home", children: [_jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black", children: "Skip to main content" }), _jsxs("main", { id: "main-content", role: "main", children: [_jsx(HeroSection, {}), _jsx("section", { id: "clients", "aria-label": "Our Clients", children: _jsx(ClientMarquee, {}) }), _jsx("section", { id: "why-maxtron", "aria-label": "Why Choose Maxtron", children: _jsx(WhyMaxtron, {}) }), _jsx("section", { id: "who-maxtron", "aria-label": "Who We Are", children: _jsx(WhoMaxtron, {}) }), _jsx("section", { id: "technology", "aria-label": "Technologies We Use", children: _jsx(TechnologyUsed, {}) }), _jsx("section", { id: "pride", "aria-label": "Our Pride", children: _jsx(Pride, {}) }), _jsx("section", { id: "case-studies", "aria-label": "Case Studies", children: _jsx(CaseStudies, {}) }), _jsx("section", { id: "gallery", "aria-label": "Gallery", children: _jsx(Gallery, {}) }), _jsx("section", { id: "testimonials", "aria-label": "Testimonials", children: _jsx(Testimonials, {}) }), _jsx("section", { id: "contact", "aria-label": "Contact Form", children: _jsx(ContactForm, {}) })] }), showPopup && _jsx(ContactPopup, { open: showPopup, setOpen: setShowPopup })] })] }));
};
export default NewHomePage;
