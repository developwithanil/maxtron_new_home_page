import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const Card = ({ title, description, imageUrl }) => {
    return (_jsx("div", { className: " text-[#1E1E1E] bg-cover bg-[#FFEFFC] bg-center p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl", children: _jsxs("div", { className: "flex flex-col items-start pl-2 pt-1", children: [_jsx("div", { className: "text-xl mb-2 ", children: _jsx("img", { src: imageUrl, alt: title, className: "w-7 h-7 rounded-full " }) }), _jsx("h3", { className: "text-xl text-[#4E009C] font-OpenSans text-left font-bold", children: title }), _jsx("p", { className: "bg-[#FFFFFF]  bg-opacity-90 text-[#4E009C] mt-4 sm:min-h-[150px]  mb-1 p-3 flex text-left justify-stretch font-normal text-sm rounded-xl font-OpenSans", children: description })] }) }));
};
export default React.memo(Card);
