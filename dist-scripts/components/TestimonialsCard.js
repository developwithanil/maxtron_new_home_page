import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { testimonialsData } from "./testimonialData";
const TestimonialsCard = () => {
    const allTestimonialsToDisplay = [...testimonialsData, ...testimonialsData];
    return (_jsxs("div", { className: "py-0 my-2", children: [" ", _jsx("div", { className: "animate-marquee whitespace-nowrap flex hover:[animation-play-state:paused] ", children: allTestimonialsToDisplay.map((testimonial, index) => (_jsx("div", { className: "inline-block mx-3 md:mx-4 flex-shrink-0 ", children: _jsxs("div", { className: " border  rounded-2xl p-6 w-[300px] sm:w-[340px] md:w-[370px] min-h-[240px] sm:min-h-[250px] flex flex-col transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(190,147,245,0.15)] transform hover:-translate-y-0.5 ", children: [_jsx("span", { className: "absolute top-6 text-[10px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap", style: {
                                    color: testimonial.tagColor || "#7A35C1",
                                    backgroundColor: testimonial.tagColor
                                        ? `${testimonial.tagColor}1A`
                                        : "rgba(190, 147, 245, 0.1)",
                                }, children: testimonial.tag }), _jsx("div", { className: "flex items-start justify-between mt-10 mb-4 gap-2 relative ", children: _jsxs("div", { className: "flex items-center space-x-3 flex-1 min-w-0 ", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-brand-purple-accent object-cover flex-shrink-0" }), _jsxs("div", { className: "min-w-0 text-left", children: [_jsx("p", { className: "text-lg font-normal font-[Switzer] truncate", children: testimonial.name }), _jsx("p", { className: "text-xs text-[#2A2A2A] whitespace-normal [font-family: openSansHebrew]", children: testimonial.title })] })] }) }), _jsx("p", { className: "text-xs sm:text-sm leading-relaxed text-[open] flex-grow text-left whitespace-normal [font-family: openSansHebrew] font-normal", children: testimonial.testimonial })] }) }, `${testimonial.id}-marquee-${index}`))) })] }));
};
export default React.memo(TestimonialsCard);
