import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DoubleArrowIcon } from "./PartnerData"; // Adjust path as needed
const SelectableItem = ({ itemData, isActive, isAnyActive, onSelect, }) => {
    const isStripMode = !isAnyActive;
    const showContent = isActive && isAnyActive; // This item is active AND some item is active (content view)
    let outerDivClasses = `
    ${itemData.bgColor} 
    ${itemData.textColor} 
    relative 
    group 
    transition-all duration-500 ease-in-out 
    overflow-hidden
    rounded-tr-xl rounded-br-xl 
    cursor-pointer
  `;
    if (isStripMode) {
        // In strip mode, items have a fixed height and centered content (header)
        outerDivClasses += " h-[70px] sm:h-[80px] flex items-center";
    }
    else if (showContent) {
        // Active item expands to fill available space and arranges header & content vertically
        outerDivClasses += " flex-grow flex flex-ro";
    }
    else {
        // Inactive item (when another is active) collapses completely
        outerDivClasses += " h-0 opacity-0 p-0 m-0 border-0 pointer-events-none";
    }
    return (_jsxs("div", { className: outerDivClasses, onClick: onSelect, children: [_jsxs("div", { className: `
          flex justify-between items-center p-4 sm:p-5 w-full
          transition-opacity duration-300 ease-in-out
          ${isStripMode ? "h-full" : "h-[70px] sm:h-[80px] flex-shrink-0"} 
          ${isStripMode || showContent
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"}
        `, children: [_jsx("h3", { className: "text-lg sm:text-xl font-semibold font-[Switzer]", children: itemData.tabLabel }), isStripMode && ( // Show arrow only in strip mode
                    _jsx("div", { className: "shrink-0 ml-4", children: _jsx(DoubleArrowIcon, { colorClass: itemData.arrowColor }) }))] }), _jsx("div", { className: `
          px-4 sm:px-5 pb-4 sm:pb-5
          transition-all duration-300 ease-in-out
          overflow-y-auto 
          ${showContent
                    ? "flex-grow opacity-100 delay-200"
                    : "opacity-0 max-h-0 pointer-events-none"}
        `, children: showContent && (_jsx("p", { className: "text-base md:text-lg leading-relaxed font-['Open_Sans_Hebrew']", children: itemData.description })) })] }));
};
export default SelectableItem;
