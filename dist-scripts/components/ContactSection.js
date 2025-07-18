import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import contact from "../assets/contactImg.svg";
const ContactSection = () => {
    return (_jsxs("div", { className: "bg-gray-900 text-white p-6 md:p-16 space-y-4 rounded-3xl border-4 solid border-[#BDBCBC] flex flex-col md:flex-row justify-between items-center z-50 w-full", children: [_jsxs("div", { className: "flex flex-col mb-8 md:mb-0 md:w-1/4", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-extrabold font-OpenSans mb-4", children: "Let's Talk About Your Project" }), _jsx("button", { onClick: () => {
                            window.open("https://calendly.com/business-maxtron/30min?month=2024-08");
                        }, className: "bg-white max-w-fit text-black py-2 px-4 rounded transition duration-300", children: "Schedule A Call" })] }), _jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [_jsx("div", { children: _jsx("img", { src: contact, alt: "img", className: "" }) }), _jsxs("div", { children: [_jsx("div", { className: "mb-4", children: _jsx("p", { className: "font-bold", children: "US | UK | Europe | UAE | India | Singapore" }) }), _jsx("div", { className: "mb-4", children: _jsxs("p", { children: [_jsx("span", { className: "font-bold pr-2", children: "Phone: " }), "+918791156224"] }) }), _jsx("div", { children: _jsxs("p", { className: "font-bold pr-2", children: [_jsx("span", { className: "font-bold pr-2", children: " Email:" }), _jsx("a", { href: "mailto:business@maxtron.ai", className: "underline font-normal", children: "business@maxtron.ai" })] }) })] })] })] }));
};
export default React.memo(ContactSection);
