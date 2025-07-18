import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ContactImg from "../../public/formimg.webp";
import "../page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RightClick } from "./VectorImage";
const ContactForm = () => {
    const formRef = useRef(null);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
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
                const response = await fetch("https://maxtron-backend.vercel.app/sendData", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formObject),
                });
                if (response.ok) {
                    toast.success("Request submitted successfully!");
                    formRef.current.reset();
                }
                else {
                    const errorText = await response.text();
                    toast.error(errorText);
                }
            }
            catch (error) {
                console.error("Failed to submit the request:", error);
                toast.error("Error submitting request. Please try again.");
            }
            finally {
                setIsLoading(false);
            }
        }
    };
    return (_jsxs("section", { id: "contact-us", className: sectionClassName, children: [_jsxs("div", { className: "shadow-lg border border-[#BEBCCA] rounded-3xl p-5 md:p-8", children: [_jsx("div", { className: "w-full flex p-2 items-start gap-2 rounded-lg container mx-auto ", style: {
                            background: "linear-gradient(270deg, var(--Primary-100, #CAA8EF) 0%, var(--Primary-500, #7A35C1) 100%)",
                        }, children: _jsx("p", { className: "p-2 text-white", children: "Free 30-Minutes Consultation" }) }), _jsxs("div", { className: "container mx-auto flex flex-col lg:flex-row bg-white items-center py-5 md:p-5 justify-between gap-6 lg:gap-8", children: [_jsxs("div", { className: "lg:w-1/2 text-left lg:text-left", children: [_jsx("h2", { className: "self-stretch text-[#1E1E1E] [font-family:Switzer] font-bold text-xl md:text-[40px] leading-[120%]", children: "Fill the form & Get your project moving!" }), _jsxs("ul", { className: "mb-8 mt-8 space-y-4", children: [_jsxs("li", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "md:w-8 w-6 h-6 md:h-8", children: _jsx(RightClick, {}) }), _jsx("div", { className: "text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]", children: "We will respond to you within 24 hours." })] }), _jsxs("li", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "md:w-8 w-6 h-6 md:h-8", children: _jsx(RightClick, {}) }), _jsx("div", { className: "text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]", children: "You'll be talking to product and tech experts (no account managers)." })] })] }), _jsx("div", { className: "", children: _jsx("img", { src: ContactImg, alt: "Contact illustration", className: "w-full h-auto" }) })] }), _jsx("div", { className: "w-full lg:w-1/2  p-0 sm:p-6  rounded-2xl  ", children: _jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "fullName", className: "block text-gray-700 font-medium mb-2 font-['Switzer']", children: "Full Name" }), _jsx("input", { type: "text", id: "fullName", name: "fullName", className: "w-full p-3  rounded-lg placeholder-gray-400 bg-[#DFDEE74D]  focus:border-transparent transition-all duration-300 font-['Switzer']", placeholder: "Enter Your Full Name", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2 font-['Switzer']", children: "Work Email" }), _jsx("input", { type: "email", id: "email", name: "email", className: "w-full p-3  bg-[#DFDEE74D]   rounded-lg placeholder-gray-400   focus:border-transparent transition-all duration-300 font-['Switzer']", placeholder: "Enter Your Email", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "designation", className: "block text-gray-700 font-medium mb-2 font-['Switzer']", children: "Designation" }), _jsx("input", { type: "text", id: "designation", name: "designation", className: "w-full p-3 bg-[#DFDEE74D]   rounded-lg placeholder-gray-400  focus:border-transparent transition-all duration-300 font-['Switzer']", placeholder: "Enter Designation" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "companyName", className: "block text-gray-700 font-medium mb-2 font-['Switzer']", children: "Company Name" }), _jsx("input", { type: "text", id: "companyName", name: "companyName", className: "w-full p-3 bg-[#DFDEE74D]   rounded-lg placeholder-gray-400  focus:border-transparent transition-all duration-300 font-['Switzer']", placeholder: "Enter Company Name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "description", className: "block text-gray-700 font-medium mb-2 font-['Switzer']", children: "Description" }), _jsx("textarea", { id: "description", name: "description", rows: 4, className: "w-full p-3 bg-[#DFDEE74D]   rounded-lg placeholder-gray-400  focus:border-transparent transition-all duration-300 font-['Switzer']", placeholder: "Write Something" })] }), _jsx("div", { className: "text-right", children: _jsx("button", { type: "submit", className: "px-8 py-3 text-white font-semibold rounded-lg bg-[#7A35C1] hover:bg-[#6B2F9C] transition-all duration-300 transform hover:scale-105 active:scale-95 font-['Switzer']", disabled: isLoading, children: isLoading ? (_jsxs("span", { className: "flex items-center justify-center", children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Submitting..."] })) : ("Submit") }) })] }) })] })] }), _jsx(ToastContainer, { position: "top-right" })] }));
};
export default React.memo(ContactForm);
