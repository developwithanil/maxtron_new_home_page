import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Verify } from "../VectorImage";
import TestimonialsCard from "../TestimonialsCard";
const Testimonials = () => {
    return (_jsxs("section", { id: "about-us", className: " max-w-[96rem] mx-auto relative py-4 md:py-8 lg:py-11 xl:py-12 text-center bg-white ", children: [_jsxs("div", { className: "p-4 ", children: [_jsxs("p", { className: "text-xs md:text-sm flex items-center justify-center text-center text-[#7A35C1]", children: [_jsx(Verify, {}), "TESTIMONIALS"] }), _jsx("p", { className: "md:mb-8 lg:mb-8 xl:mb-8  text-[#2A2A2A] [font-family: openSansHebrew] text-[32px] font-bold", children: "Client Testimonials" })] }), _jsx("div", { className: "mx-6 md:mx-8 lg:mx-16  overflow-hidden", children: _jsx(TestimonialsCard, {}) })] }));
};
export default Testimonials;
