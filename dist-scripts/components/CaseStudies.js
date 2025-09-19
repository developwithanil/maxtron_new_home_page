import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { caseStudiesData, ArrowUpIcon, ArrowDownIcon, ArrowRightIcon, } from "./caseStudyData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const CaseStudies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(null);
    const currentStudy = caseStudiesData[currentIndex];
    const totalStudies = caseStudiesData.length;
    const isPrevDisabled = currentIndex === 0 || totalStudies <= 1;
    const isNextDisabled = currentIndex === totalStudies - 1 || totalStudies <= 1;
    const handleNext = () => {
        if (!isNextDisabled) {
            setAnimationDirection("right");
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handlePrev = () => {
        if (!isPrevDisabled) {
            setAnimationDirection("left");
            setCurrentIndex(currentIndex - 1);
        }
    };
    useEffect(() => {
        if (animationDirection) {
            const timer = setTimeout(() => setAnimationDirection(null), 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, animationDirection]);
    const contentAnimationClass = animationDirection
        ? animationDirection === "left"
            ? "animate-slide-in-left-content"
            : "animate-slide-in-right-content"
        : "animate-fade-in";
    const imageAnimationClass = animationDirection
        ? animationDirection === "left"
            ? "animate-slide-in-left"
            : "animate-slide-in-right"
        : "animate-fade-in";
    return (_jsx("section", { id: "case-studies", className: "relative py-5 md:py-24 bg-brand-bg-dark text-brand-text-light overflow-hidden ", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex flex-row justify-between items-center mb-12 md:mb-16", children: [_jsx("h2", { className: "text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0 text-left text-brand-text-light", children: "Case Studies" }), _jsx("a", { href: "/case-studies", className: "px-5 py-2.5 text-white bg-[#7A35C1] text-sm font-medium rounded-md transition-colors duration-200 shadow-lg hover:bg-[#F3EBFC] hover:text-[#7A35C1]", children: "View All Cases" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-2 md:gap-12 lg:gap-16 items-center ", children: [_jsx("div", { className: "relative w-full aspect-[4/3]  rounded-xl md:rounded-2xl overflow-hidden shadow-2xl", children: _jsx("img", { src: currentStudy.image, alt: currentStudy.title, className: `absolute inset-0 w-full h-full object-cover duration-500 ${imageAnimationClass}` }, `case-study-image-${currentStudy.id}`) }), _jsxs("div", { className: "flex flex-row md:flex-col items-center text-center relative  md:min-h-[400px] justify-between py-6 md:py-0 w-full ", children: [_jsxs("button", { onClick: handlePrev, "aria-label": `Previous case study: ${caseStudiesData[(currentIndex - 1 + totalStudies) % totalStudies].title}`, disabled: isPrevDisabled, className: `p-3 transition-colors duration-200 z-10
                          ${isPrevDisabled
                                        ? "text-[#79748A] opacity-50 cursor-not-allowed"
                                        : "text-[#5E28A0] hover:text-[#5E28A0]"}`, children: [_jsx(ArrowUpIcon, { className: `hidden md:block ` }), _jsx(FaArrowLeftLong, { className: `md:hidden w-6 h-6` })] }), _jsxs("div", { className: "flex flex-col justify-center items-center flex-grow px-2 md:px-0", children: [_jsxs("div", { className: `w-full max-w-md px-2 md:px-4 ${contentAnimationClass} duration-300`, children: [_jsx("h3", { className: "sm:text-3xl  md:text-4xl lg:text-[32px] font-bold text-[#2A2A2A] mb-3", children: currentStudy.title }), _jsx("div", { className: "flex flex-wrap justify-center gap-x-2.5 gap-y-1 mb-4", children: currentStudy.tags.map((tag, index) => (_jsxs("span", { className: "text-[14px] sm:text-[14px] font-semibold text-[#7A35C1] font-[switzer] tracking-wider", children: [tag, index < currentStudy.tags.length - 1 && (_jsx("span", { className: "text-brand-text-medium mx-0.5", children: "|" }))] }, index))) }), _jsx("p", { className: "text-brand-text-medium text-xs sm:text-sm lg:text-base leading-relaxed mb-6 text-[#5B5570] line-clamp-2", children: currentStudy.description })] }, `case-study-content-${currentStudy.id}`), _jsxs("a", { href: currentStudy.learnMoreLink, target: "_blank", rel: "noopener noreferrer", className: "w-fit flex gap-1 items-center px-4 py-2.5 sm:px-7 sm:py-3 md:py-3 border border-[#7A35C1] text-[#7A35C1] font-semibold rounded-xl hover:bg-[#7A35C1] hover:text-white transition-all duration-300 group text-sm sm:text-base md:text-lg shadow-md text-center", children: ["Learn More", _jsx(ArrowRightIcon, { className: "ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" }), " "] })] }), _jsxs("button", { onClick: handleNext, "aria-label": `Next case study: ${caseStudiesData[(currentIndex + 1) % totalStudies].title}`, disabled: isNextDisabled, className: `p-3 transition-colors duration-200 z-10
                          ${isNextDisabled
                                        ? "text-[#79748A] opacity-50 cursor-not-allowed"
                                        : "text-[#5E28A0] hover:text-[#5E28A0]"}`, children: [_jsx(ArrowDownIcon, { className: `hidden md:block ` }), _jsx(FaArrowRightLong, { className: `md:hidden w-6 h-6` })] })] })] })] }) }));
};
export default CaseStudies;
