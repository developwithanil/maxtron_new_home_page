import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const categories = [
    {
        title: "Asset managers",
        items: [
            "Funds",
            "Private equity & VC",
            "Investment banking",
            "Real estate",
            "Art & collectibles",
        ],
    },
    {
        title: "Issuers",
        items: ["Start-up founders", "Non-profits", "Enterprise", "Corporations"],
    },
    {
        title: "Industry",
        items: ["Music", "Film", "Tech", "Finance", "Gaming"],
    },
    {
        title: "Crypto",
        items: [
            "Blockchains",
            "Decentralized Finance",
            "Infrastructure",
            "Decentralized Apps",
            "NFTs",
        ],
    },
];
const WhoisworkingwithUs = () => {
    return (_jsxs("div", { className: "w-full max-w-[96rem] mx-auto flex flex-col gap-6 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-8 md:py-12 lg:py-16", children: [_jsx("h2", { className: "text-center text-[#2A2A2A] font-[Switzer] text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight", children: "Who we\u2019re working with" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto", children: categories.map((category, index) => (_jsxs("div", { children: [_jsx("h3", { className: "shrink-0 self-stretch text-[#2A2A2A] font-[Switzer] text-lg lg:text-2xl font-semibold leading-[30px] tracking-[-0.48px] mb-4", children: category.title }), _jsx("ul", { className: "flex flex-col gap-2", children: category.items.map((item, idx) => (_jsx("li", { className: "bg-[#F3EBFC] text-sm lg:text-base font-openSansHebrew text-[#2A2A2A] rounded-lg px-2 lg:px-3 py-1.5 font-medium w-fit", children: item }, idx))) })] }, index))) })] }));
};
export default WhoisworkingwithUs;
