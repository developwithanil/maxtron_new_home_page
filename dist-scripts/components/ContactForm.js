import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactImg from "../../public/formimg.webp";
import "../page.css";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
        .min(1, "Phone number is required"),
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
const ContactForm = ({ sectionClassName: customSectionClassName }) => {
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
    const { register, handleSubmit, reset, control, formState: { errors, isSubmitting }, } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
    });
    console.log("Current form errors:", errors);
    const sectionClassName = customSectionClassName
        ? customSectionClassName
        : location.pathname === "/contact"
            ? "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-36"
            : "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12";
    return (_jsxs(_Fragment, { children: [location.pathname === "/contact" && (_jsxs(Helmet, { children: [_jsx("title", { children: "Contact Us | Maxtron Innovations" }), _jsx("meta", { name: "description", content: "Get in touch with Maxtron Innovations for AI, Blockchain, Web3 and product development services." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/contact" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" })] })), _jsxs("section", { id: "contact-us", className: sectionClassName, children: [_jsxs("div", { className: "shadow-lg border border-[#BEBCCA] rounded-3xl p-5 md:p-8", children: [_jsx("div", { className: "w-full flex p-2 items-start gap-2 rounded-lg container mx-auto ", style: {
                                    background: "linear-gradient(270deg, var(--Primary-100, #CAA8EF) 0%, var(--Primary-500, #7A35C1) 100%)",
                                }, children: _jsx("p", { className: "p-2 text-white", children: "Free 30-Minutes Consultation" }) }), _jsxs("div", { className: "container mx-auto flex flex-col lg:flex-row bg-white items-center py-5 md:p-5 justify-between gap-6 lg:gap-8", children: [_jsxs("div", { className: "lg:w-1/2 text-left lg:text-left", children: [_jsx("h2", { className: "self-stretch text-[#1E1E1E] [font-family:Switzer] font-bold text-xl md:text-[40px] leading-[120%]", children: "Fill the Form & Get Your Project Moving!" }), _jsxs("ul", { className: "mb-8 mt-8 space-y-4", children: [_jsxs("li", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "md:w-8 w-6 h-6 md:h-8", children: _jsx(RightClick, {}) }), _jsx("div", { className: "text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]", children: "We will respond to you within 24 hours." })] }), _jsxs("li", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "md:w-8 w-6 h-6 md:h-8", children: _jsx(RightClick, {}) }), _jsx("div", { className: "text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]", children: "You'll be talking to product and tech experts (no account managers)." })] })] }), _jsx("img", { src: ContactImg, alt: "Contact", className: "w-full h-auto" })] }), _jsx("div", { className: "w-full lg:w-1/2 p-0 sm:p-6 rounded-2xl", children: _jsxs("form", { id: "webform989313000000558020", name: "WebToLeads989313000000558020", onSubmit: handleSubmit(async (data) => {
                                                try {
                                                    const formData = new FormData();
                                                    // Hidden keys specific to ContactForm
                                                    formData.append("xnQsjsdp", "1206814bdf2ba4cd5436285612ea370c0cec15a2b83f701f75484c9f22b715ce");
                                                    formData.append("zc_gad", "");
                                                    formData.append("xmIwtLD", "1d5615443eb72b01b07da0c7fca8eaab1f8d9214a3cf0db55275e86008d4df73503d8d0a956e75e7f60ea21f58d9372c");
                                                    formData.append("actionType", "TGVhZHM=");
                                                    formData.append("returnURL", "null");
                                                    // HoneyPot
                                                    formData.append("aG9uZXlwb3Q", "");
                                                    // Visitor Tracking
                                                    const ldeskuidVal = document.getElementById("ldeskuid")
                                                        ?.value || "";
                                                    const LDTuvidVal = document.getElementById("LDTuvid")
                                                        ?.value || "";
                                                    let finalLDTuvid = LDTuvidVal;
                                                    const w = window;
                                                    if (w.$zoho &&
                                                        w.$zoho.salesiq &&
                                                        w.$zoho.salesiq.visitor &&
                                                        w.$zoho.salesiq.visitor.uniqueid) {
                                                        const id = w.$zoho.salesiq.visitor.uniqueid();
                                                        if (id)
                                                            finalLDTuvid = id;
                                                    }
                                                    formData.append("ldeskuid", ldeskuidVal);
                                                    formData.append("LDTuvid", finalLDTuvid);
                                                    // Field Mapping
                                                    formData.append("Last Name", data.fullName);
                                                    formData.append("Email", data.email);
                                                    formData.append("Phone", data.phoneNumber);
                                                    formData.append("Company", data.companyName);
                                                    formData.append("LEADCF5", data.designation); // Designation
                                                    formData.append("Description", data.description);
                                                    formData.append("Lead Source", "Web Form- Contact Us Page");
                                                    console.log("Submitting ContactForm to Zoho...");
                                                    const response = await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
                                                        method: "POST",
                                                        body: formData,
                                                        mode: "no-cors",
                                                    });
                                                    console.log("Zoho fetch response:", response);
                                                    reset();
                                                    setShowPopup(true);
                                                }
                                                catch (error) {
                                                    console.error("Error submitting form:", error);
                                                    alert("There was an error submitting the form. Please try again.");
                                                }
                                            }), className: "space-y-4", children: [_jsx("input", { type: "text", style: { display: "none" }, name: "xnQsjsdp", value: "1206814bdf2ba4cd5436285612ea370c0cec15a2b83f701f75484c9f22b715ce", readOnly: true }), _jsx("input", { type: "hidden", name: "zc_gad", id: "zc_gad", value: "" }), _jsx("input", { type: "text", style: { display: "none" }, name: "xmIwtLD", value: "1d5615443eb72b01b07da0c7fca8eaab1f8d9214a3cf0db55275e86008d4df73503d8d0a956e75e7f60ea21f58d9372c", readOnly: true }), _jsx("input", { type: "text", style: { display: "none" }, name: "actionType", value: "TGVhZHM=", readOnly: true }), _jsx("input", { type: "text", style: { display: "none" }, name: "returnURL", value: "null", readOnly: true }), _jsx("input", { type: "text", style: { display: "none" }, name: "aG9uZXlwb3Q", value: "", readOnly: true }), _jsx("input", { type: "text", style: { display: "none" }, id: "ldeskuid", name: "ldeskuid" }), _jsx("input", { type: "text", style: { display: "none" }, id: "LDTuvid", name: "LDTuvid" }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "fullName", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Full Name ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("fullName", {
                                                                onChange: (e) => {
                                                                    console.log("Full name changed:", e.target.value);
                                                                },
                                                            }), type: "text", id: "fullName", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.fullName ? "border-2 border-red-500" : ""}`, placeholder: "Enter Full Name" }), errors.fullName && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.fullName.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Email ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("email", {
                                                                onChange: (e) => {
                                                                    console.log("Email changed:", e.target.value);
                                                                },
                                                            }), type: "email", id: "email", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.email ? "border-2 border-red-500" : ""}`, placeholder: "Enter Email" }), errors.email && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.email.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "phoneNumber", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Phone Number ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("div", { className: "w-full", children: _jsx(Controller, { name: "phoneNumber", control: control, render: ({ field }) => (_jsx(PhoneInput, { country: "in", value: field.value, onChange: (phone) => field.onChange(phone), inputStyle: {
                                                                        width: "100%",
                                                                        height: "48px",
                                                                        borderRadius: "0.5rem",
                                                                        border: errors.phoneNumber
                                                                            ? "2px solid #ef4444"
                                                                            : "none",
                                                                        backgroundColor: "#DFDEE74D",
                                                                        fontFamily: "Switzer",
                                                                        paddingLeft: "48px",
                                                                    }, buttonStyle: {
                                                                        borderRadius: "0.5rem 0 0 0.5rem",
                                                                        border: "none",
                                                                        backgroundColor: "#DFDEE74D",
                                                                    }, dropdownStyle: {
                                                                        borderRadius: "0.5rem",
                                                                        fontFamily: "Switzer",
                                                                    }, containerStyle: {
                                                                        width: "100%",
                                                                        borderRadius: "0.5rem",
                                                                    }, inputProps: {
                                                                        name: "phone",
                                                                        required: true,
                                                                    } })) }) }), errors.phoneNumber && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.phoneNumber.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "designation", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Designation ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("designation"), type: "text", id: "designation", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.designation ? "border-2 border-red-500" : ""}`, placeholder: "Enter Designation" }), errors.designation && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.designation.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "companyName", className: "block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize", children: ["Company Name ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { ...register("companyName"), type: "text", id: "companyName", required: true, className: `w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.companyName ? "border-2 border-red-500" : ""}`, placeholder: "Enter Company Name" }), errors.companyName && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.companyName.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "description", className: "block text-gray-700 font-medium mb-2 font-['Switzer']", children: ["Description ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("textarea", { ...register("description"), id: "description", rows: 4, required: true, className: `w-full p-3 bg-[#DFDEE74D] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${errors.description ? "border-2 border-red-500" : ""}`, placeholder: "Write Something" }), errors.description && (_jsx("p", { className: "text-red-500 text-sm mt-1 font-normal", children: errors.description.message }))] }), _jsx("div", { className: "text-right", children: _jsx("button", { type: "submit", className: "px-8 py-3 text-white font-semibold rounded-lg bg-[#7A35C1] hover:bg-[#6B2F9C] transition-transform duration-300 transform hover:scale-105 active:scale-95 font-['Switzer']", disabled: isSubmitting, children: isSubmitting ? (_jsxs("span", { className: "flex items-center justify-center", children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Submitting..."] })) : ("Submit") }) })] }) })] })] }), _jsx(AnimatePresence, { children: showPopup && (_jsx(motion.div, { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsxs(motion.div, { className: "bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-2xl text-center relative", initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "w-16 h-16 bg-[#E9D8FD] text-[#7A35C1] text-3xl rounded-full flex items-center justify-center shadow-inner animate-bounce", children: "\uD83C\uDF89" }) }), _jsx("h2", { className: "text-2xl font-bold text-[#1E1E1E] mb-2", children: "Congratulations!" }), _jsx("p", { className: "text-gray-600", children: "Your form has been submitted successfully." }), _jsx("button", { onClick: () => setShowPopup(false), className: "mt-6 px-6 py-2 bg-[#7A35C1] text-white rounded-lg hover:bg-[#6B2F9C] transition-all", children: "Close" })] }) })) })] })] }));
};
export default React.memo(ContactForm);
