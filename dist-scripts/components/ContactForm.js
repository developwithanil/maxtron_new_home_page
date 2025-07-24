import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ContactImg from "../../public/formimg.webp";
import "../page.css";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RightClick } from "./VectorImage";
const ContactForm = () => {
    const formRef = useRef(null);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const sectionClassName = location.pathname === "/Contact"
        ? "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-36"
        : "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12";
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value.toString();
            });
            try {
                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 1000));
                // toast.success("Request submitted successfully!");
                formRef.current.reset();
                setShowPopup(true);
            }
            catch (error) {
                // toast.error("Error submitting request. Please try again.");
            }
            finally {
                setIsLoading(false);
            }
        }
    };
    return (_jsxs("section", { id: "contact-us", className: sectionClassName, children: [_jsxs("div", { className: "shadow-lg border border-[#BEBCCA] rounded-3xl p-5 md:p-8", children: [_jsx("div", { className: "w-full flex p-2 items-start gap-2 rounded-lg container mx-auto ", style: {
                            background: "linear-gradient(270deg, var(--Primary-100, #CAA8EF) 0%, var(--Primary-500, #7A35C1) 100%)",
                        }, children: _jsx("p", { className: "p-2 text-white", children: "Free 30-Minutes Consultation" }) }), _jsxs("div", { className: "container mx-auto flex flex-col lg:flex-row bg-white items-center py-5 md:p-5 justify-between gap-6 lg:gap-8", children: [_jsxs("div", { className: "lg:w-1/2 text-left lg:text-left", children: [_jsx("h2", { className: "self-stretch text-[#1E1E1E] [font-family:Switzer] font-bold text-xl md:text-[40px] leading-[120%]", children: "Fill the form & Get your project moving!" }), _jsxs("ul", { className: "mb-8 mt-8 space-y-4", children: [_jsxs("li", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "md:w-8 w-6 h-6 md:h-8", children: _jsx(RightClick, {}) }), _jsx("div", { className: "text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]", children: "We will respond to you within 24 hours." })] }), _jsxs("li", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "md:w-8 w-6 h-6 md:h-8", children: _jsx(RightClick, {}) }), _jsx("div", { className: "text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]", children: "You'll be talking to product and tech experts (no account managers)." })] })] }), _jsx("img", { src: ContactImg, alt: "Contact", className: "w-full h-auto" })] }), _jsx("div", { className: "w-full lg:w-1/2 p-0 sm:p-6 rounded-2xl", children: _jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: "space-y-4", children: [["fullName", "email", "designation", "companyName"].map((id) => (_jsxs("div", { children: [_jsx("label", { htmlFor: id, className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: id === "fullName"
                                                        ? "Full Name"
                                                        : id === "companyName"
                                                            ? "Company Name"
                                                            : id }), _jsx("input", { type: id === "email" ? "email" : "text", id: id, name: id, required: id === "fullName" || id === "email", className: "w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer']", placeholder: `Enter ${id
                                                        .replace(/([A-Z])/g, " $1")
                                                        .trim()}` })] }, id))), _jsxs("div", { children: [_jsx("label", { htmlFor: "description", className: "block text-gray-700 font-medium mb-2 font-['Switzer']", children: "Description" }), _jsx("textarea", { id: "description", name: "description", rows: 4, className: "w-full p-3 bg-[#DFDEE74D] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer']", placeholder: "Write Something" })] }), _jsx("div", { className: "text-right", children: _jsx("button", { type: "submit", className: "px-8 py-3 text-white font-semibold rounded-lg bg-[#7A35C1] hover:bg-[#6B2F9C] transition-transform duration-300 transform hover:scale-105 active:scale-95 font-['Switzer']", disabled: isLoading, children: isLoading ? (_jsxs("span", { className: "flex items-center justify-center", children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Submitting..."] })) : ("Submit") }) })] }) })] })] }), _jsx(AnimatePresence, { children: showPopup && (_jsx(motion.div, { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsxs(motion.div, { className: "bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-2xl text-center relative", initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "w-16 h-16 bg-[#E9D8FD] text-[#7A35C1] text-3xl rounded-full flex items-center justify-center shadow-inner animate-bounce", children: "\uD83C\uDF89" }) }), _jsx("h2", { className: "text-2xl font-bold text-[#1E1E1E] mb-2", children: "Congratulations!" }), _jsx("p", { className: "text-gray-600", children: "Your form has been submitted successfully." }), _jsx("button", { onClick: () => setShowPopup(false), className: "mt-6 px-6 py-2 bg-[#7A35C1] text-white rounded-lg hover:bg-[#6B2F9C] transition-all", children: "Close" })] }) })) })] }));
};
export default React.memo(ContactForm);
