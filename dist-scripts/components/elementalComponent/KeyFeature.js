import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Key } from "../VectorImage";
const KeyFeature = ({ keyFeatures }) => {
    return (_jsxs("div", { className: "flex flex-col w-full mx-auto max-w-[88rem] items-center gap-5 md:gap-8 px-[30px] py-7 md:py-10 lg:py-12", children: [_jsx("div", { className: "w-full flex items-start justify-start self-start", children: _jsx("h2", { className: "text-[#595959] [font-family:Switzer] text-lg md:text-2xl font-medium leading-[160%]", children: "key features" }) }), _jsxs("div", { className: "grid grid-cols-1 relative lg:grid-cols-3 w-full items-center justify-center", children: [_jsx("div", { className: "border-[rgba(0,0,0,0.20)] border-solid border-r h-full absolute left-1/3 hidden lg:flex" }), _jsx("div", { className: "border-[rgba(0,0,0,0.20)] border-solid border-r h-full absolute left-2/3 hidden lg:flex" }), keyFeatures.map((feature, index) => {
                        const itemsPerRow = 3;
                        const totalItems = keyFeatures.length;
                        const lastRowStartIndex = totalItems - (totalItems % itemsPerRow || itemsPerRow);
                        const isInLastRow = index >= lastRowStartIndex;
                        return (_jsxs("div", { className: `flex flex-col items-center justify-center gap-6 px-6 md:px-12 lg:px-20 py-6 md:py-8 border-[rgba(0,0,0,0.20)] border-solid
                ${index % 2 !== 0 ? "lg:pb-32" : "lg:pb-20"}
                ${!isInLastRow ? "border-b" : "lg:border-b-0 border-b"}
              `, children: [index % 2 !== 0 && (_jsx("div", { children: _jsx(Key, {}) })), typeof feature === "string" ? (_jsx("p", { className: "text-[#595959] [font-family:Switzer] text-lg md:text-2xl font-medium leading-[160%]", children: feature })) : (_jsxs("div", { className: "text-center", children: [_jsx("h3", { className: "text-[#2A2A2A] text-xl font-semibold mb-2", children: feature.title }), feature.details.map((detail, i) => (_jsx("p", { className: "text-[#595959] text-lg mb-1", children: detail }, i)))] }))] }, index));
                    })] })] }));
};
export default KeyFeature;
