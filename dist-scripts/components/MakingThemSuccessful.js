import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Cards from "./elementalComponent/Cards";
import Fund from "../../public/fund.svg";
import Marketing from "../../public/marketing.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const cardData = [
    {
        title: "Marketing & Digital Strategy",
        description: [
            "B2B: AI-Powered Email & LinkedIn Sales Prospecting",
            "B2C: Performance Marketing - PPC, Programmatic, Influencers",
            "AI-Phone Calling Tool For Sales, Marketing & Support",
            "Web3 Projects Marketing & Growth - KOLs, Community, etc",
            "Branding & MarComm - Advisory & Execution",
            "PR Solutions - Tier-1 Media, Tier-2 Media",
            "Go-to-market Strategy For Digital Products",
        ],
        imageUrl: Marketing,
    },
    {
        title: "Fundraising & Partnership",
        description: [
            "Investor Outreach: Online, In-person, Networks",
            "Channel Partnership: VARs, Integrators, MSPs, Whitelabel",
            "Equity Partnership For Emerging Tech Projects"
        ],
        imageUrl: Fund,
    },
];
const MakingThemSuccessful = () => {
    AOS.init();
    return (_jsx("section", { id: "Our-services", className: "py-12 text-center ", children: _jsxs("div", { className: "container px-4 md:px-8 mx-auto animate__backInDown", children: [_jsx("h2", { className: "text-4xl font-bold text-black mb-4 animate__backInDown", children: "Ensuring Their Success" }), _jsx("p", { className: "mb-16 lg:mx-40  font-OpenSans font-normal text-[#757575]", children: "We build great products and make them successful to the market across a range of verticals & industries. We can help you turn your vision into a successful product together." }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2  border-[#9B9696] gap-8", children: cardData.map((card, index) => (_jsx(Cards, { title: card.title, description: card.description, imageUrl: card.imageUrl }, index))) })] }) }));
};
export default React.memo(MakingThemSuccessful);
