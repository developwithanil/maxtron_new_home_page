import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
const faqData = [
    {
        question: "Who can become an affiliate?",
        answer: "Anyone with a relevant audience or network can apply — no need to be a Maxtron customer.",
    },
    {
        question: "Is there a cost to join?",
        answer: " No, it’s completely free.",
    },
    {
        question: "How and when do I get paid?",
        answer: "We pay out commissions monthly once the deal is closed and payment is received.",
    },
    {
        question: "Can I refer clients from my agency or network?",
        answer: "Absolutely. We welcome agencies, consultants, and advisors to participate.",
    },
];
const FaqItem = ({ item, isOpen, onClick, }) => (_jsxs("div", { className: "border-b  px-6", children: [_jsxs("button", { className: "w-full flex justify-between items-center text-left py-4 px-2", onClick: onClick, "aria-expanded": isOpen, "aria-controls": `faq-answer-${item.question
                .replace(/\s+/g, "-")
                .toLowerCase()}`, children: [_jsx("span", { className: "text-[#2A2A2A] font-[Switzer] text-base md:text-lg", children: item.question }), _jsx(FiChevronDown, { className: `transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-[#7A35C1]`, size: 20 })] }), _jsx("div", { className: `grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`, id: `faq-answer-${item.question.replace(/\s+/g, "-").toLowerCase()}`, children: _jsx("div", { className: "overflow-hidden", children: _jsx("div", { className: "pb-4 px-2", children: _jsx("p", { className: "text-[#6e6a7b] font-openSansHebrew", children: item.answer }) }) }) })] }));
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (_jsxs("div", { className: "w-full mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8", children: [_jsx("h2", { className: "self-stretch text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-[140%] text-center mb-8 md:mb-12", children: "Frequently Asked Questions" }), _jsx("div", { className: "w-full  mx-auto border rounded-lg", children: faqData.map((item, index) => (_jsx(FaqItem, { item: item, isOpen: openIndex === index, onClick: () => handleItemClick(index) }, index))) })] }));
};
export default Faq;
