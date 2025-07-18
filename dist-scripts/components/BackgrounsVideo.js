import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import useWebAnimations from "@wellyshen/use-web-animations";
import MainImg from "../assets/internal/main.png";
import "../animation.css";
const BackgroundVideo = () => {
    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: "translateY(-25px)" },
            { transform: "translateY(25px)" },
        ],
        timing: {
            delay: 300,
            duration: 1500,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
    const handleMouseEnter = () => {
        getAnimation()?.pause();
    };
    const handleMouseLeave = () => {
        getAnimation()?.play();
    };
    return (_jsxs("div", { className: "relative flex flex-col md:flex-row overflow-hidden", children: [_jsx("div", { className: "overlay z-10" }), _jsx("div", { className: "left-section relative z-30 flex flex-col items-start justify-start py-28 px-8 md:py-28 md:px-16 w-full md:w-1/2 bg-gradient-to-r from-black/40 to-transparent", children: _jsxs("div", { className: "space-y-4 md:space-y-6", children: [_jsx("h1", { className: "text-white text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg leading-snug", children: "Transform Your Business And Growth With 360\u00B0 Cutting-Edge Tech Solutions" }), _jsx("p", { className: "text-left text-sm sm:text-lg md:text-xl text-white font-normal font-OpenSans", children: "Building Innovative Products And Making Them Successful" }), _jsxs("div", { className: "flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0", children: [_jsx(Link, { to: "/services", children: _jsx("button", { className: "bg-white text-[#55308D] font-OpenSans font-bold py-3 px-6 sm:px-8 text-sm sm:text-lg rounded-full shadow-lg hover:bg-black hover:text-white transition-transform transform hover:scale-105", children: "Learn More" }) }), _jsx(Link, { to: "/contact", children: _jsx("button", { className: "bg-black text-white font-OpenSans font-bold py-3 px-6 sm:px-8 text-sm sm:text-lg rounded-full shadow-lg hover:bg-[#D8D0F4] hover:text-black transition-transform transform hover:scale-105", children: "Get In Touch" }) })] })] }) }), _jsx("div", { className: "right-section relative flex items-start justify-start w-full md:w-1/2 mt-4 md:mt-0 hidden md:flex", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: _jsx("img", { ref: ref, src: MainImg, alt: "Animated Illustration", className: "animated-image opacity-70 max-w-[80%] md:max-w-[100%] lg:max-w-[120%] xl:max-w-[150%] 2xl:max-w-[170%]" }) })] }));
};
export default BackgroundVideo;
