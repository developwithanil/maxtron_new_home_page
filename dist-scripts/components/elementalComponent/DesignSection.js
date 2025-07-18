import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { designItems, DoubleArrowIcon } from "./DesignData";
import logo from "../../assets/augmentation/EmpanelmentSection/logo.svg";
const SelectableItem = ({ itemData, isActive, onSelect }) => {
    const desktopBaseClasses = isActive ? "md:w-full" : "md:flex-1 md:basis-0";
    return (_jsxs("div", { className: `
        ${itemData.bgColor}
        ${itemData.textColor}
        w-full 
        md:h-full
        overflow-hidden 
        cursor-pointer
        transition-all duration-300 ease-in-out
        ${desktopBaseClasses}
      `, onClick: () => {
            const isDesktop = window.innerWidth >= 768;
            if (isActive && isDesktop) {
                return;
            }
            onSelect();
        }, children: [_jsxs("div", { className: "md:hidden", children: [_jsxs("div", { className: "flex justify-between items-center p-4", children: [_jsx("h3", { className: "text-xl font-bold [font-family:Switzer]", children: itemData.tabLabel }), _jsx("span", { className: `transform transition-transform duration-300 ${isActive ? "rotate-90" : "rotate-0"}`, children: _jsx(DoubleArrowIcon, { colorClass: itemData.arrowColor }) })] }), _jsx("div", { className: `
            overflow-hidden transition-all duration-300 ease-in-out
            ${isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} 
            `, style: { transitionProperty: "max-height, opacity" }, children: _jsx("div", { className: "px-4 pb-4 pt-1", children: _jsx("p", { className: "text-sm leading-relaxed [font-family:Switzer,sans-serif]", children: itemData.description }) }) })] }), _jsx("div", { className: `hidden md:flex md:flex-col md:h-full`, children: isActive ? (_jsxs("div", { className: `p-6 sm:p-8 text-left h-full flex flex-col relative ${itemData.textColor}`, children: [_jsx("button", { onClick: (e) => {
                                e.stopPropagation();
                                onSelect();
                            }, className: "absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1", "aria-label": "Close tab", children: _jsxs("span", { className: "transform -rotate-180 inline-block", children: [" ", _jsx(DoubleArrowIcon, { colorClass: itemData.arrowColor })] }) }), _jsx("h3", { className: "text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 [font-family:Switzer,sans-serif]", children: itemData.tabLabel }), _jsx("p", { className: "text-sm sm:text-base leading-relaxed [font-family:Switzer,sans-serif]", children: itemData.description })] })) : (_jsxs("div", { className: `flex flex-col items-center justify-between h-full py-4 px-1 sm:py-6 ${itemData.textColor}`, children: [_jsx("div", { className: "flex-grow flex items-center justify-center w-full overflow-hidden", children: _jsx("h3", { className: "text-sm sm:text-xl font-bold whitespace-nowrap transform rotate-90 origin-center [font-family:Switzer]", children: itemData.tabLabel }) }), _jsxs("div", { className: "mt-2 sm:mt-4", children: [_jsx(DoubleArrowIcon, { colorClass: itemData.arrowColor }), " "] })] })) })] }));
};
const DesignSection = () => {
    const [activeItemId, setActiveItemId] = useState(null);
    const handleSelect = (itemId) => {
        setActiveItemId((prevId) => (prevId === itemId ? null : itemId));
    };
    const resetView = () => {
        setActiveItemId(null);
    };
    const activeItem = activeItemId !== null
        ? designItems.find((item) => item.id === activeItemId)
        : null;
    return (_jsxs("section", { className: "p-5 md:px-32 lg:px-32 xl:px-32 md:py-16 lg:py-16 xl:py-16  ", children: [" ", _jsx("div", { className: "", children: _jsxs("div", { className: "flex flex-col md:flex-row rounded-t-2xl overflow-hidden shadow-xl bg-[#F5F5F5]", children: [_jsxs("div", { className: "bg-[#7A35C1] text-white md:w-[40%] lg:w-[50%] w-full p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center rounded-t-[32px]   cursor-pointer order-first h-auto md:min-h-[28rem] lg:min-h-[30rem]", onClick: resetView, children: [_jsx("img", { src: logo, alt: "Maxtron Logo" }), _jsx("h2", { className: "text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold mt-4 [font-family:Switzer,sans-serif]", children: "Web3 Design & Development" })] }), _jsxs("div", { className: "flex-1 flex flex-col md:flex-row order-last md:rounded-bl-none overflow-hidden md:min-h-[28rem] lg:min-h-[30rem]", children: [_jsx("div", { className: "hidden md:flex md:flex-row w-full h-full", children: activeItem ? (_jsx(SelectableItem, { itemData: activeItem, isActive: true, isAnyActive: true, onSelect: () => handleSelect(activeItem.id) }, activeItem.id)) : (designItems.map((item) => (_jsx(SelectableItem, { itemData: item, isActive: false, isAnyActive: false, onSelect: () => handleSelect(item.id) }, item.id)))) }), _jsx("div", { className: "md:hidden flex flex-col w-full", children: activeItem ? (_jsx(SelectableItem, { itemData: activeItem, isActive: true, isAnyActive: true, onSelect: () => handleSelect(activeItem.id) }, activeItem.id)) : (designItems.map((item) => (_jsx(SelectableItem, { itemData: item, isActive: false, isAnyActive: false, onSelect: () => handleSelect(item.id) }, item.id)))) })] })] }) })] }));
};
export default DesignSection;
