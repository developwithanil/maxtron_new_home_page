import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ContactSection from "./ContactSection";
// import BackgroundVideo from "./BackgrounsVideo";
import CaseStudy from "./CaseStudy";
import ChooseUs from "./ChooseUs";
import ClientMarquee from "./elementalComponent/ClientMarquee";
import ContactForm from "./ContactForm";
// import LatestInsights from "./elementalComponent/LatestInsights";
import Statistics from "./Statistics";
import WhatWeDo from "./WhatWeDo";
import Slider from "./Slider";
import HeroSection from "./Hero";
import MakingThemSuccessful from "./MakingThemSuccessful";
// import Footer from "./Footer";
const Banner = () => {
    return (_jsxs("div", { id: "Home", className: "", children: [_jsx(HeroSection, {}), _jsx(ChooseUs, {}), _jsx(WhatWeDo, {}), _jsx(MakingThemSuccessful, {}), _jsx(Statistics, {}), _jsx(ClientMarquee, {}), _jsx(CaseStudy, {}), _jsx(Slider, {}), _jsx(ContactForm, {}), _jsx(ContactSection, {})] }));
};
export default Banner;
