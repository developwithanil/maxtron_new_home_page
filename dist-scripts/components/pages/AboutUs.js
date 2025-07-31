import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstImg from "../../assets/about/first.webp";
// import img1 from '../../assets/about/about1.png'
// import img2 from '../../assets/about/about2.png'
// import img3 from '../../assets/about/about3.png'
// import img4 from '../../assets/about/about4.png'
import { good } from "../../components/VectorImage";
import { cup } from "../../components/VectorImage";
import { handshake } from "../../components/VectorImage";
import { person } from "../../components/VectorImage";
import ContactForm from "../ContactForm";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
    // const cardData = [
    //   {
    //     image: img1,
    //     name: "Won Cee",
    //   },
    //   {
    //     image: img2,
    //     name: "Jenny Wilson",
    //   },
    //   {
    //     image: img3,
    //     name: "Eleanor Pena",
    //   },
    //   {
    //     image: img4,
    //     name: "Robert Fox",
    //   },
    // ];
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   speed: 100,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: false,
    //         autoplay: true,
    //         autoplaySpeed: 3000,
    //       },
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 3000,
    //       },
    //     },
    //   ],
    // };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "About Us | Maxtron" }), _jsx("meta", { name: "description", content: "Meet the Maxtron team: technical, marketing, and creative experts delivering innovative solutions." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/about" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" }), _jsx("meta", { property: "og:title", content: "About Us | Maxtron" }), _jsx("meta", { property: "og:description", content: "Meet the Maxtron team: technical, marketing, and creative experts delivering innovative solutions." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/about" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsxs("div", { children: [_jsxs("div", { className: "relative z-10 text-center mb-8 about_hero_img px-4 sm:px-6 lg:px-8", children: [_jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold", children: "Hello, We're Maxtron" }), _jsx("p", { className: "text-base sm:text-lg lg:text-xl mt-4", children: "Our team is an extension of yours. Bringing experience, expertise, rigor, problem-solving skills, innovation and user-focused approach" })] }), _jsxs("div", { className: "relative container mx-auto p-0 md:p-8", children: [_jsx("div", { className: "absolute inset-0 opacity-10 z-0" }), _jsxs("div", { className: `relative z-10 flex flex-col md:flex-row items-center mb-8 rounded-lg `, children: [_jsx("div", { className: "w-full md:w-1/2 p-4", children: _jsx("img", { src: firstImg, alt: "firstImg", className: "rounded-lg w-full" }) }), _jsxs("div", { className: `w-full md:w-1/2 p-4 `, children: [_jsx("h2", { className: "text-2xl font-bold mb-2", children: "An Ideal Fusion Of Technical, Marketing And Creative Expertise" }), _jsx("p", { className: "bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans", children: "Our team blends ex-successful startup founders with top talent from Blockchain, AI, Product, UX/UI, Software Development, Data Analytics & Marketing. We're driven by one goal: to redefine product innovation with a deep understanding of your business and tech needs. Before we build, we dig in to ensure our solutions are perfectly aligned with your goals. Let's turn your vision into reality with expertise and a user-first approach. Ready to elevate your business? Let's make it happen!" })] })] })] }), _jsxs("div", { className: "bg-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 p-8 mt-8 py-14", children: [_jsxs("div", { className: " rounded-sm p-4  m-4 md:m-0 text-center border-2 border-black", children: [_jsx("div", { className: "mx-auto my-4 w-auto h-20 flex justify-center items-center", children: good() }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "PROVEN TRACK RECORD" }), _jsx("p", { className: "bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans", children: "Our deep-tech, product, software development, marketing teams have successfully brought 3000+ projects to life." })] }), _jsxs("div", { className: " rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black", children: [_jsx("div", { className: "mx-auto my-4 w-auto h-20 flex justify-center items-center", children: handshake() }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "BUSINESS MINDSET" }), _jsx("p", { className: "bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans", children: "As ex-startup founders with a corporate background, we have experienced many of the struggles on both sides. We know there is more to a successful product than technology, so we will always look at your product from a business standpoint." })] }), _jsxs("div", { className: " rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black", children: [_jsx("div", { className: "mx-auto my-4 w-auto h-20 flex justify-center items-center", children: cup() }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "TOP TALENT" }), _jsx("p", { className: "bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans", children: "We work with the best and brightest in tech talent to ensure you get high-quality tech architecture." })] }), _jsxs("div", { className: " rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black", children: [_jsx("div", { className: "mx-auto my-4 w-auto h-20 flex justify-center items-center", children: person() }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "USER-CENTRIC APPROACH" }), _jsx("p", { className: "bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans", children: "We value our end-user above specifications. We take the time to understand our client's needs and desires. The result is a product they will actually use." })] })] }), _jsx(ContactForm, {})] })] }));
};
export default AboutUs;
