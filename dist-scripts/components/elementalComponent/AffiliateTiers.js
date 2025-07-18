import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const tiers = [
    {
        name: "Starter",
        bg: "#A16EDA",
        commission: "Up to 20% per deal",
        referrals: "1–4",
        perks: ["Access to affiliate toolkit"],
    },
    {
        name: "Pro",
        bg: "#8E52CA",
        commission: "Up to 25% per deal",
        referrals: "5–9",
        perks: ["Co-branded content", "Optimization tips"],
    },
    {
        name: "Elite",
        bg: "#7A35C1",
        commission: "Up to 30% per deal",
        referrals: "10+",
        perks: [
            "Dedicated manager",
            "Exclusive bonuses",
            "Early access to new products",
        ],
    },
];
const firstrow = [
    { title: "empty", bg: "#fffff" },
    { title: "Starter", bg: "#A16EDA" },
    { title: "Pro", bg: "#8E52CA" },
    { title: "Elite", bg: "#7A35C1" },
];
const secondrow = [
    "Commission Rate",
    "Upto 20% per deal",
    "Upto 25% per deal",
    "Upto 30% per deal",
];
const thirdrow = ["Monthly Referrals", "1–4", "5–9", "10+"];
const fourthrow = [
    { points: ["Bonus Perks"] },
    { points: ["Access to affiliate toolkit"] },
    { points: ["Co-branded content", "Optimization tips"] },
    {
        points: [
            "Dedicated manager",
            "Exclusive bonuses",
            "Early access to new products",
        ],
    },
];
const AffiliateTiers = () => {
    return (_jsxs("section", { className: "w-full mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8", children: [_jsxs("div", { className: "w-full text-center", children: [_jsx("h2", { className: "text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-[140%] mb-2 mt-8 md:mt-10 lg:mt-12 xl:mt-16", children: "Affiliate Tiers" }), _jsx("p", { className: "text-[#2A2A2A] font-openSansHebrew text-lg lg:text-xl font-normal leading-8", children: "We believe you should always have room to grow." })] }), _jsx("div", { className: "grid grid-cols-1 gap-8 mt-12 lg:hidden", children: tiers.map((tier, idx) => (_jsxs("article", { className: "flex flex-col gap-6 rounded-2xl shadow-md border border-[#DFDEE7]  bg-white overflow-hidden", "aria-label": `Affiliate tier: ${tier.name}`, children: [_jsx("header", { className: "flex justify-center items-center p-4 rounded-t-2xl", style: { background: tier.bg }, children: _jsx("h3", { className: "text-white text-center font-[Switzer] text-2xl font-semibold leading-[140%]", children: tier.name }) }), _jsxs("div", { className: "flex flex-row gap-4 justify-start px-4", children: [_jsx("span", { className: "flex-1 font-semibold text-[#2A2A2A] font-[Switzer]", children: "Commission Rate" }), _jsx("span", { className: "flex-1 text-right font-[Switzer]", children: tier.commission })] }), _jsxs("div", { className: "flex flex-row gap-4 justify-start px-4", children: [_jsx("span", { className: "flex-1 font-semibold text-[#2A2A2A]  font-[Switzer]", children: "Monthly Referrals" }), _jsx("span", { className: "flex-1 text-right font-[Switzer]", children: tier.referrals })] }), _jsxs("div", { className: "flex flex-row gap-4 justify-start px-4 pb-4", children: [_jsx("span", { className: "flex-1 font-semibold text-[#2A2A2A]  font-[Switzer]", children: "Bonus Perks" }), _jsx("ul", { className: "list-disc list-inside space-y-1", children: tier.perks.map((perk, i) => (_jsx("li", { className: "text-[#2A2A2A] text-base font-normal leading-[140%] font-[Switzer]", children: perk }, i))) })] })] }, idx))) }), _jsx("div", { className: "hidden lg:flex flex-row gap-5 mt-16", children: firstrow.map((item, index) => (_jsx("div", { className: `flex justify-center items-center gap-2.5 flex-[1_0_0] p-4 rounded-xl ${index === 0 ? "opacity-0" : "opacity-100"}`, style: { backgroundColor: item.bg }, children: _jsx("p", { className: "text-white text-center font-[Switzer] text-2xl font-semibold leading-[140%]", children: item.title }) }, index))) }), _jsx("div", { className: "hidden lg:flex flex-row gap-5 mt-7", children: secondrow.map((item, index) => (_jsx("div", { className: `flex justify-center items-center gap-2.5 flex-[1_0_0] p-4 rounded-xl ${index === 0
                        ? "bg-[rgba(223,222,231,0.40)]"
                        : "border border-solid border-[#DFDEE7]"}`, children: _jsx("p", { className: `text-[#2A2A2A] text-center font-[Switzer] text-2xl ${index === 0 ? "font-semibold" : "font-normal"}`, children: item }) }, index))) }), _jsx("div", { className: "hidden lg:flex flex-row gap-5 mt-7", children: thirdrow.map((item, index) => (_jsx("div", { className: `flex justify-center items-center gap-2.5 flex-[1_0_0] p-4 rounded-xl ${index === 0
                        ? "bg-[rgba(223,222,231,0.40)]"
                        : "border border-solid border-[#DFDEE7]"}`, children: _jsx("p", { className: `text-[#2A2A2A] text-center font-[Switzer] text-2xl ${index === 0 ? "font-semibold" : "font-normal"}`, children: item }) }, index))) }), _jsx("div", { className: "hidden lg:flex flex-row gap-5 mt-7", children: fourthrow.map((item, index) => (_jsx("div", { className: `flex items-start justify-center gap-2.5 flex-[1_0_0] p-4 rounded-xl ${index === 0
                        ? "bg-[rgba(223,222,231,0.40)]"
                        : "border border-solid border-[#DFDEE7]"}`, children: index === 0 ? (_jsx("p", { className: "text-[#2A2A2A] text-center font-[Switzer] text-2xl font-semibold", children: item.points[0] })) : (_jsx("ul", { className: "list-disc pl-5 text-left space-y-1", children: item.points.map((perk, i) => (_jsx("li", { className: "text-[#2A2A2A] font-[Switzer] text-2xl font-normal leading-snug break-words", children: perk }, i))) })) }, index))) })] }));
};
export default AffiliateTiers;
