import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Verify } from "./VectorImage";
import TestimonialsCard from "./TestimonialsCard";
const Testimonials = () => {
    return (_jsxs("section", { id: "about-us", className: "relative py-4 md:py-8 lg:py-11 xl:py-12 text-center bg-white max-w-[96rem] mx-auto ", children: [_jsxs("div", { className: "p-4", children: [_jsxs("p", { className: "text-xs md:text-sm flex items-center justify-center text-center text-[#7A35C1]", children: [_jsx(Verify, {}), "TESTIMONIALS"] }), _jsx("h2", { className: "text-2xl lg:text-5xl text-[#2A2A2A] font-[IBM Plex Sans] ", children: "Our Believers And Supporters" }), _jsx("p", { className: "md:mb-10 lg:mb-14 xl:mb-16 text-[#5B5570] [font-family: openSansHebrew] text-lg", children: "Find out how our clients are spreading the word!" })] }), _jsx("div", { className: "mx-6 md:mx-8 lg:mx-16  overflow-hidden", children: _jsx(TestimonialsCard, {}) })] }));
};
export default Testimonials;
