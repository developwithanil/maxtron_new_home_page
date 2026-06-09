import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import offerimg from "../../assets/web3marketing/marketingofferimg.webp";
const Card = ({ title, description, number }) => {
    return (_jsxs("div", { className: "bg-[#F5F5F5] flex flex-col justify-start p-4 relative pb-16 min-h-72 hover:scale-95 transition-all duration-300 w-full ", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-medium mb-4 text-[#2A2A2A] [font-family:Switzer] items-start text-start", children: title }), _jsx("p", { className: "text-base text-[#171717] font-openSansHebrew items-start text-start pr-7", children: description })] }), _jsx("div", { className: "bg-[#7A35C1] absolute bottom-0 right-0  h-12 w-12  flex items-center justify-center text-[#FFFFFF]", children: number })] }));
};
const cardsData = [
    {
        id: 1,
        number: 1,
        title: "Token Launch Marketing",
        description: "End-to-end launch support — from pre-launch hype to post-listing visibility.",
    },
    {
        id: 2,
        number: 2,
        title: "Community Building",
        description: "Grow and manage active Telegram, Discord, and Reddit communities.",
    },
    {
        id: 3,
        number: 3,
        title: "Social Media Marketing",
        description: "Organic + paid campaigns across X (Twitter), LinkedIn, Instagram, and YouTube.",
    },
    {
        id: 4,
        number: 4,
        title: "Influencer & PR Outreach",
        description: "Collaborate with leading crypto influencers, KOLs, and global media houses.",
    },
    {
        id: 5,
        number: 5,
        title: "Content & Thought Leadership",
        description: "Blogs, whitepapers, website copy, and educational content that builds credibility.",
    },
    {
        id: 6,
        number: 6,
        title: "SEO for Crypto",
        description: "Rank higher on Google with crypto-focused SEO strategies.",
    },
    {
        id: 7,
        number: 7,
        title: "Paid Ads & Growth Hacking",
        description: "Crypto ad networks, native ads, and airdrop campaigns that drive traction.",
    },
    {
        id: 8,
        number: 8,
        title: "Metaverse & NFT Promotions",
        description: "Launch and promote NFT drops, Metaverse events, and virtual collaborations.",
    },
];
const Web3MarketingOffers = () => {
    return (_jsxs("div", { className: "relative p-5 md:p-8 lg:p-11 xl:p-16 inset-0 text-center max-w-[96rem] mx-auto", children: [_jsx("h2", { className: "text-[#2A2A2A] justify-center [font-family: Switzer] text-xl md:text-3xl\r\n        lg:text-5xl xl:text-5xl text-start font-normal mb-12", children: "Our Services" }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-8 lg:gap-[100px]", children: [_jsx("div", { className: "w-full lg:w-[30%] flex items-start justify-start lg:sticky lg:top-8", children: _jsx("img", { src: offerimg, alt: "", className: "w-full h-auto object-cover rounded-lg" }) }), _jsx("div", { className: "w-full lg:w-[70%] max-h-[550px] overflow-y-auto ", style: { scrollbarWidth: "none", msOverflowStyle: "none" }, children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-2", children: cardsData.map((card) => (_jsx(Card, { number: card.number, title: card.title, description: card.description }, card.id))) }) })] })] }));
};
export default Web3MarketingOffers;
