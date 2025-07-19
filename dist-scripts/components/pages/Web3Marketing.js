import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Web3MarketingHeroSection from "../Web3MarketingHeroSection";
import MarketingCase from "../elementalComponent/MarketingCase";
import Web3MarketingOffers from "../elementalComponent/Web3MarketingOffers";
import Web3MarketingFooter from "../elementalComponent/Web3MarketingFooter";
import Web3Speed from "../elementalComponent/Web3Speed";
const Web3Marketing = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { id: "Home", children: [_jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black" }), _jsxs("main", { id: "main-content", role: "main", children: [_jsx(Web3MarketingHeroSection, {}), _jsx("section", { id: "web3marketing-offers", "aria-label": "Web3 Offers", children: _jsx(Web3MarketingOffers, {}) }), _jsx("section", { id: "marketing-case", "aria-label": "Marketing Case", children: _jsx(MarketingCase, {}) }), _jsx("section", { id: "web3-speed", "aria-label": "Web3 Speed", children: _jsx(Web3Speed, {}) }), _jsx("section", { id: "web3marketing-footer", "aria-label": "Web3 Marketing Footer", children: _jsx(Web3MarketingFooter, {}) })] })] }) }));
};
export default Web3Marketing;
