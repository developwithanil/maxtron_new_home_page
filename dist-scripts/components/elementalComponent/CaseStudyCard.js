import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CaseStudyCard = ({ 
// projectName,
title, description, imageUrl, }) => {
    return (_jsx("div", { className: "p-4 rounded-lg md:min-h-[230px] lg:min-h-40 bg-[#F1DFED] border-[#E3C4E1] transform transition-transform duration-300 hover:scale-110 hover:shadow-lg border-[1px] shadow-md", children: _jsxs("div", { className: "flex space-y-4 flex-col items-start", children: [_jsx("h2", { className: "text-2xl font-bold", children: title }), _jsxs("div", { className: "flex", children: [_jsx("img", { src: imageUrl, alt: title, className: "w-10 h-10 rounded-full mr-4" }), _jsx("p", { className: "text-sm text-left text-black ", children: description })] })] }) }));
};
export default CaseStudyCard;
