import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import InsightCard from "./elementalComponent/InsightCard";
// import { Link } from "react-router-dom";
import profile from "../../assets/profile.svg";
// import profile from "../../assets/profile.svg";
const insightsData = [
    {
        image: profile,
        imageUrl: profile,
        category: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        authorName: "Tracey Wilson",
        date: "July 02, 2024",
    },
    {
        image: profile,
        imageUrl: profile,
        category: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        authorName: "Jason Francisco",
        date: "July 02, 2024",
    },
    {
        image: profile,
        imageUrl: profile,
        category: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        authorName: "Elizabeth Slavin",
        date: "July 02, 2024",
    },
];
const LatestInsights = () => {
    return (_jsx("section", { className: "py-12 px-4 text-center", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold text-black mb-8", children: "Latest Insights" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: insightsData.map((insight, index) => (_jsx(InsightCard, { image: insight.image, imageUrl: insight.imageUrl, category: insight.category, title: insight.title, authorName: insight.authorName, date: insight.date }, index))) })] }) }));
};
export default React.memo(LatestInsights);
