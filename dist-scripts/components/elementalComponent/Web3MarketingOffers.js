import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import offerimg from "../../assets/web3marketing/marketingofferimg.webp";
const Card = ({ title, description, number }) => {
    return (_jsxs("div", { className: "bg-[#F5F5F5] flex flex-col justify-start p-4 relative pb-16 min-h-72 hover:scale-95 transition-all duration-300 w-full ", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-medium mb-4 text-[#2A2A2A] [font-family:Switzer] items-start text-start", children: title }), _jsx("p", { className: "text-base text-[#171717] font-openSansHebrew items-start text-start pr-7", children: description })] }), _jsx("div", { className: "bg-[#7A35C1] absolute bottom-0 right-0  h-12 w-12  flex items-center justify-center text-[#FFFFFF]", children: number })] }));
};
const cardsData = [
    {
        id: 1,
        number: 1,
        title: "Go-to-Market for Web3 Launches",
        description: "Full-stack GTM plans for dApps, tokens, Layer 1s/L2s and Web3 platforms- built for traction, not noise.",
    },
    {
        id: 2,
        number: 2,
        title: "Community Building & Management",
        description: "Grow active, engaged communities on Discord, Telegram, Farcaster, Lens and X with culture-driven strategies and real-time moderation.",
    },
    {
        id: 3,
        number: 3,
        title: "Crypto-Native Content & Creative",
        description: "Threads, explainers, motion graphics and token use-case storytelling - designed for DeFi degens, DAO voters and normie-curious alike.",
    },
    {
        id: 4,
        number: 4,
        title: "Influencer & KOL Campaigns",
        description: "End-to-end coordination with trusted creators in your niche - driven by authenticity, not inflated impressions.",
    },
    {
        id: 5,
        number: 5,
        title: " Data-Backed Growth Analytics",
        description: "Track airdrop efficiency, wallet behavior, retention rates and social sentiment - then optimize in real-time.",
    },
    {
        id: 6,
        number: 6,
        title: "SEO & Web3 PR",
        description: "Dominate organic search for crypto keywords and place stories where early adopters actually read - Bankless, Decrypt, CoinDesk and more.",
    },
];
const Web3MarketingOffers = () => {
    return (_jsxs("div", { className: "relative p-5 md:p-8 lg:p-11 xl:p-16 inset-0 text-center max-w-[96rem] mx-auto", children: [_jsx("h2", { className: "text-[#2A2A2A] justify-center [font-family: Switzer] text-xl md:text-3xl\n        lg:text-5xl xl:text-5xl text-start font-normal mb-12", children: "What We Offer" }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-8 lg:gap-[100px]", children: [_jsx("div", { className: "w-full lg:w-[30%] flex items-start justify-start", children: _jsx("img", { src: offerimg, alt: "", className: "w-full h-auto object-cover rounded-lg" }) }), _jsx("div", { className: "w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-2", children: cardsData.map((card) => (_jsx(Card, { number: card.number, title: card.title, description: card.description }, card.id))) })] })] }));
};
export default Web3MarketingOffers;
