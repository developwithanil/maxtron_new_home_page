import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Statistics.js
import CountUp from "react-countup";
import React from "react";
const Statistics = () => {
    const stats = [
        { id: 1, number: 11, label: "Years of Experience" },
        { id: 2, number: 12, suffix: "+", label: "Countries World Wide" },
        { id: 3, number: 100, suffix: "+", label: "Business Partners" },
        { id: 4, number: 3000, suffix: "+", label: "Products Delivered" },
        { id: 5, number: 5, label: "Industry Awards" },
    ];
    return (_jsxs("div", { className: "py-20 text-center", children: [_jsx("h2", { className: "text-2xl md:text-4xl font-bold mb-16 text-black", children: "We Take Pride In Our Numbers" }), _jsx("div", { className: "flex flex-wrap justify-center gap-8", children: stats.map((stat) => (_jsxs("div", { className: "text-center", children: [_jsx(CountUp, { start: 0, end: stat.number, duration: 2.5, separator: ",", suffix: stat.suffix || "", className: "text-4xl md:text-6xl font-bold text-purple-600" }), _jsx("p", { className: "mt-2 text-lg md:text-xl text-purple-700", children: stat.label })] }, stat.id))) })] }));
};
export default React.memo(Statistics);
