import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, useState } from "react";
import herovideo from "../assets/herovideo.mp4";
import logo from "../assets/maxtronlogo.svg";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";
const Web3HeroSection = () => {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
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
                await new Promise((resolve) => setTimeout(resolve, 1000)); // fake API delay
                // toast.success("Email submitted successfully!");
                formRef.current.reset();
                setShowPopup(true);
            }
            catch (err) {
                // toast.error("Submission failed. Please try again.");
            }
            finally {
                setIsLoading(false);
            }
        }
    };
    return (_jsxs("div", { className: "relative top-0", children: [_jsx("div", { className: "mx-4 mt-4 sm:mx-6 lg:mx-8", children: _jsxs("div", { className: "relative h-screen w-full overflow-hidden rounded-3xl", children: [_jsx("video", { className: "absolute top-0 left-0 w-full h-full object-cover", autoPlay: true, loop: true, muted: true, playsInline: true, children: _jsx("source", { src: herovideo, type: "video/mp4" }) }), _jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-opacity-50" }), _jsxs("div", { className: "relative z-10 flex flex-col items-center justify-start h-full text-white p-4 sm:p-6 lg:p-16 mt-8", children: [_jsx("img", { src: logo, alt: "web3 logo", className: "w-54 h-51" }), _jsx("h2", { className: "text-2xl sm:text-xl md:text-6xl font-normal text-center text-[#171717] mb-5", children: "Powering the Next Internet with AI & Automation" }), _jsx("p", { className: "text-lg sm:text-lg md:text-xl text-center text-[#171717] mb-12", children: "The internet is evolving\u2014faster, more decentralized and trustless by design. At Maxtron, we're helping forward-thinking teams build in Web3 with the intelligence and automation edge they need to scale securely, compliantly and globally." }), _jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md", children: [_jsx("input", { type: "email", name: "email", required: true, placeholder: "Enter Your Email", className: "text-white border-[#FFFFFF] border font-normal py-2 px-4 sm:py-3 sm:px-6 rounded-full bg-transparent w-full placeholder:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#7A35C1]" }), _jsx("button", { type: "submit", disabled: isLoading, className: "bg-[#7A35C1] hover:bg-indigo-200 hover:text-[#7A35C1] font-normal py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 w-full sm:w-auto", children: isLoading ? "Submitting..." : "Connect" })] })] })] }) }), _jsx(AnimatePresence, { children: showPopup && (_jsx(motion.div, { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsxs(motion.div, { className: "bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-2xl text-center relative", initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "w-16 h-16 bg-[#E9D8FD] text-[#7A35C1] text-3xl rounded-full flex items-center justify-center shadow-inner animate-bounce", children: "\uD83C\uDF89" }) }), _jsx("h2", { className: "text-2xl font-bold text-[#1E1E1E] mb-2", children: "Congratulations!" }), _jsx("p", { className: "text-gray-600", children: "Your email has been submitted successfully." }), _jsx("button", { onClick: () => setShowPopup(false), className: "mt-6 px-6 py-2 bg-[#7A35C1] text-white rounded-lg hover:bg-[#6B2F9C] transition-all", children: "Close" })] }) })) })] }));
};
export default React.memo(Web3HeroSection);
