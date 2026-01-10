import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactImg from "../../public/formimg.webp";
import "../page.css";
import "react-toastify/dist/ReactToastify.css";
import { RightClick } from "./VectorImage";
import { Helmet } from "react-helmet-async";
const schema = z.object({
    fullName: z
        .string()
        .min(1, "Full Name is required")
        .min(3, "Full Name must be at least 3 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phoneNumber: z
        .string()
        .min(1, "Phone number is required")
        .regex(/^[6-9]\d{9}$/, "Phone number must be 10 digits and valid"),
    designation: z
        .string()
        .min(1, "Designation is required")
        .min(2, "Designation must be at least 2 characters"),
    companyName: z
        .string()
        .min(1, "Company Name is required")
        .min(2, "Company Name must be at least 2 characters"),
    description: z
        .string()
        .min(1, "Description is required")
        .min(10, "Description must be at least 10 characters"),
});
const ContactForm = () => {
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
    });
    console.log("Current form errors:", errors);
    const sectionClassName = location.pathname === "/contact"
        ? "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-36"
        : "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12";
    return (_jsxs(_Fragment, { children: [location.pathname === "/contact" && (_jsxs(Helmet, { children: [_jsx("title", { children: "Contact Us | Maxtron Innovations" }), _jsx("meta", { name: "description", content: "Get in touch with Maxtron Innovations for AI, Blockchain, Web3 and product development services." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/contact" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" })] })), _jsxs("section", { id: "contact-us", className: sectionClassName, children: [_jsxs("div", { className: "shadow-lg border border-[#BEBCCA] rounded-3xl p-5 md:p-8", children: [_jsx("div", { className: "w-full flex p-2 items-start gap-2 rounded-lg container mx-auto ", style: {
                                    background: "linear-gradient(270deg, var(--Primary-100, #CAA8EF) 0%, var(--Primary-500, #7A35C1) 100%)",
                                }, children: _jsx("p", { className: "p-2 text-white", children: "Free 30-Minutes Consultation" }) }), _jsxs("div", { className: "container mx-auto flex flex-col lg:flex-row bg-white items-center py-5 md:p-5 justify-between gap-6 lg:gap-8", children: [_jsxs("div", { className: "lg:w-1/2 text-left lg:text-left", children: [_jsx("h2", { className: "self-stretch text-[#1E1E1E] [font-family:Switzer] font-bold text-xl md:text-[40px] leading-[120%]", children: "Fill the form & Get your project moving!" }), _jsxs("ul", { className: "mb-8 mt-8 space-y-4", children: [_jsxs("li", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "md:w-8 w-6 h-6 md:h-8", children: _jsx(RightClick, {}) }), _jsx("div", { className: "text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]", children: "We will respond to you within 24 hours." })] }), _jsxs("li", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "md:w-8 w-6 h-6 md:h-8", children: _jsx(RightClick, {}) }), _jsx("div", { className: "text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]", children: "You'll be talking to product and tech experts (no account managers)." })] })] }), _jsx("img", { src: ContactImg, alt: "Contact", className: "w-full h-auto" })] }), _jsx("div", { className: "w-full lg:w-1/2 p-0 sm:p-6 rounded-2xl", children: _jsxs("form", { onSubmit: handleSubmit(async () => {
                                                try {
                                                    await new Promise((resolve) => setTimeout(resolve, 1000));
                                                    reset();
                                                    setShowPopup(true);
                                                }
                                                catch (error) {
                                                    console.error("Error submitting form:", error);
                                                }
                                            }), className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("label", { htmlFor: "fullName", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Full Name ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("fullName", {
                                                                onChange: (e) => {
                                                                    console.log("Full name changed:", e.target.value);
                                                                },
                                                            }), type: "text", id: "fullName", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.fullName ? "border-2 border-red-500" : ""}`, placeholder: "Enter Full Name" }), errors.fullName && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.fullName.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Email ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("email", {
                                                                onChange: (e) => {
                                                                    console.log("Email changed:", e.target.value);
                                                                },
                                                            }), type: "email", id: "email", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.email ? "border-2 border-red-500" : ""}`, placeholder: "Enter Email" }), errors.email && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.email.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "phoneNumber", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Phone Number ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("phoneNumber"), type: "tel", id: "phoneNumber", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.phoneNumber ? "border-2 border-red-500" : ""}`, placeholder: "Enter Phone Number" }), errors.phoneNumber && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.phoneNumber.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "designation", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Designation ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("designation"), type: "text", id: "designation", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.designation ? "border-2 border-red-500" : ""}`, placeholder: "Enter Designation" }), errors.designation && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.designation.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "companyName", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Company Name ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("companyName"), type: "text", id: "companyName", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.companyName ? "border-2 border-red-500" : ""}`, placeholder: "Enter Company Name" }), errors.companyName && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.companyName.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "description", className: "block text-gray-700 font-medium mb-2 font-['Switzer']", children: ["Description ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("textarea", { ...register("description"), id: "description", rows: 4, required: true, className: `w-full p-3 bg-[#DFDEE74D] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.description ? "border-2 border-red-500" : ""}`, placeholder: "Write Something" }), errors.description && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.description.message }))] }), _jsx("div", { className: "text-right", children: _jsx("button", { type: "submit", className: "px-8 py-3 text-white font-semibold rounded-lg bg-[#7A35C1] hover:bg-[#6B2F9C] transition-transform duration-300 transform hover:scale-105 active:scale-95 font-['Switzer']", disabled: isSubmitting, children: isSubmitting ? (_jsxs("span", { className: "flex items-center justify-center", children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Submitting..."] })) : ("Submit") }) })] }) })] })] }), _jsx(AnimatePresence, { children: showPopup && (_jsx(motion.div, { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsxs(motion.div, { className: "bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-2xl text-center relative", initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "w-16 h-16 bg-[#E9D8FD] text-[#7A35C1] text-3xl rounded-full flex items-center justify-center shadow-inner animate-bounce", children: "\uD83C\uDF89" }) }), _jsx("h2", { className: "text-2xl font-bold text-[#1E1E1E] mb-2", children: "Congratulations!" }), _jsx("p", { className: "text-gray-600", children: "Your form has been submitted successfully." }), _jsx("button", { onClick: () => setShowPopup(false), className: "mt-6 px-6 py-2 bg-[#7A35C1] text-white rounded-lg hover:bg-[#6B2F9C] transition-all", children: "Close" })] }) })) })] })] }));
};
export default React.memo(ContactForm);
