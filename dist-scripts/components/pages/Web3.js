import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import ClientMarquee from "../elementalComponent/ClientMarquee";
import Web3HeroSection from "../Web3HeroSection";
import Web3Needs from "../elementalComponent/Web3Needs";
import Web3Offers from "../elementalComponent/Web3Offers";
import DesignSection from "../elementalComponent/DesignSection";
import UseCase from "../elementalComponent/UseCase";
import Web3Footer from "../elementalComponent/Web3Footer";
import Web3Ethos from "../elementalComponent/Web3Ethos";
const Web3 = () => {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Web3 Services | Maxtron" }), _jsx("meta", { name: "description", content: "Explore Maxtron's Web3 services: blockchain, decentralized apps, and next-gen digital solutions for your business." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/web3" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" }), _jsx("meta", { property: "og:title", content: "Web3 Services | Maxtron" }), _jsx("meta", { property: "og:description", content: "Explore Maxtron's Web3 services: blockchain, decentralized apps, and next-gen digital solutions for your business." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/web3" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsxs("div", { id: "Home", children: [_jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black", children: "Skip to main content" }), _jsxs("main", { id: "main-content", role: "main", children: [_jsx(Web3HeroSection, {}), _jsx("section", { id: "clients", "aria-label": "Our Clients", children: _jsx(ClientMarquee, {}) }), _jsx("section", { id: "web3-needs", "aria-label": "Web3 Needs", children: _jsx(Web3Needs, {}) }), _jsx("section", { id: "web3-offers", "aria-label": "Web3 Offers", children: _jsx(Web3Offers, {}) }), _jsx("section", { id: "design-section", "aria-label": "Design Section", children: _jsx(DesignSection, {}) }), _jsx("section", { id: "web3-ethos", "aria-label": "Web3 Ethos", children: _jsx(Web3Ethos, {}) }), _jsx("section", { id: "use-case", "aria-label": "Use Case", children: _jsx(UseCase, {}) }), _jsx("section", { id: "web3-footer", "aria-label": "Web3 Footer", children: _jsx(Web3Footer, {}) })] })] })] }));
};
export default Web3;
