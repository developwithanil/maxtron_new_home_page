import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
// eslint-disable-next-line react-refresh/only-export-components
const Cards = ({ title, description, imageUrl }) => {
    return (_jsx("div", { className: " text-[#4E009C] bg-cover bg-[#FFEFFC] bg-center p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl", children: _jsxs("div", { className: "flex flex-col items-", children: [_jsx("div", { className: "mb-2", children: _jsx("img", { src: imageUrl, alt: title, className: "w-8 h-8 rounded-full shadow-md" }) }), _jsx("h3", { className: "text-xl text-[#4E009C] font-OpenSans md:h-14 text-left font-bold", children: title }), _jsx("ul", { className: "list-disc text-left px-7 py-4 mt-2 bg-[#FFFFFF] md:min-h-[200px]  bg-opacity-90 text-[#4E009C] rounded-xl font-normal text-sm space-y-1", children: description.map((item, index) => (_jsx("li", { className: "pl-[2px]", children: item }, index))) })] }) }));
};
export default React.memo(Cards);
