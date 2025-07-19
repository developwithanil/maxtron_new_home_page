import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import img1 from "../../assets/insights/img1.png";
import img2 from "../../assets/insights/img2.png";
import img3 from "../../assets/insights/img3.png";
import img4 from "../../assets/insights/img4.png";
import img5 from "../../assets/insights/img5.png";
import img6 from "../../assets/insights/img6.png";
import img7 from "../../assets/insights/img7.png";
import img8 from "../../assets/insights/img8.png";
import img9 from "../../assets/insights/Rectangle 38 (8).png";
import person1 from "../../assets/insights/person1.png";
import person2 from "../../assets/insights/person2.png";
import person3 from "../../assets/insights/person3.png";
import person4 from "../../assets/insights/person4.png";
import person5 from "../../assets/insights/person5.png";
import person from "../../assets/insights/person.png";
const Insights = () => {
    const cardData = [
        {
            img: img1,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person1,
            personName: "Tracey Wilson",
            date: "August 20, 2022",
        },
        {
            img: img2,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person2,
            personName: "Jason Francisco",
            date: "August 20, 2022",
        },
        {
            img: img3,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person3,
            personName: "Elizabeth Slavin",
            date: "August 20, 2022",
        },
        {
            img: img4,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person4,
            personName: "Ernie Smith",
            date: "August 20, 2022",
        },
        {
            img: img5,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person5,
            personName: "Eric Smith",
            date: "August 20, 2022",
        },
        {
            img: img6,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person1,
            personName: "Tracey Wilson",
            date: "August 20, 2022",
        },
        {
            img: img7,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person2,
            personName: "Person Name 2",
            date: "August 20, 2022",
        },
        {
            img: img8,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person3,
            personName: "Jason Francisco",
            date: "August 20, 2022",
        },
        {
            img: img9,
            subheading: "Technology",
            heading: "The Impact of Technology on the Workplace: How Technology is Changing",
            personImg: person4,
            personName: "Elizabeth Slavin",
            date: "August 20, 2022",
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Insights | Maxtron" }), _jsx("meta", { name: "description", content: "Explore technology insights and trends with Maxtron. Stay updated on how tech is changing the workplace and business landscape." }), _jsx("link", { rel: "canonical", href: "https://www.maxtron.ai/insights" }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" }), _jsx("meta", { property: "og:title", content: "Insights | Maxtron" }), _jsx("meta", { property: "og:description", content: "Explore technology insights and trends with Maxtron. Stay updated on how tech is changing the workplace and business landscape." }), _jsx("meta", { property: "og:image", content: "https://www.maxtron.ai/src/assets/MaxtronLogo.png" }), _jsx("meta", { property: "og:url", content: "https://www.maxtron.ai/insights" }), _jsx("meta", { property: "og:type", content: "website" })] }), _jsxs("div", { children: [_jsx("div", { className: "h-14" }), _jsxs("div", { className: "relative z-10 text-left insights_hero_img", children: [_jsx("p", { className: "text-white mb-2 bg-black w-fit px-2 py-1 rounded-lg", children: "Technology" }), _jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold pt-4", children: ["The Impact of Technology on the ", _jsx("br", {}), "Workplace: How Technology is Changing"] }), _jsxs("div", { className: "flex items-center py-8", children: [_jsx("img", { src: person, alt: `Person `, className: "md:w-10 md:h-10 w-8 h-8 rounded-full mr-2" }), _jsx("p", { className: "text-white text-lg pl-2", children: "Tracey Wilson" }), _jsx("p", { className: "text-white text-lg pl-4", children: "August 20, 2022" })] })] }), _jsx("div", { className: "container m-auto grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8", children: cardData.map((card, index) => (_jsxs("div", { className: "bg-white shadow-md rounded-lg my-4 p-2 md:p-4 transform transition-transform duration-300 hover:scale-105", children: [_jsx("img", { src: card.img, alt: `Card Image ${index + 1}`, className: "w-full rounded-lg mb-4" }), _jsx("p", { className: "text-[#C07061] mb-2 bg-[#F5F5F5] text-xs md:text-[16px] w-fit px-2 py-1 rounded-lg", children: card.subheading }), _jsx("h3", { className: "md:text-xl text-sm font-bold mb-4", children: card.heading }), _jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: card.personImg, alt: `Person ${index + 1}`, className: "md:w-10 md:h-10 w-8 h-8 rounded-full mr-2" }), _jsx("p", { className: "text-gray-500 md:text-[16px] text-xs", children: card.personName }), _jsx("p", { className: "text-gray-500 md:text-[16px] text-xs", children: card.date })] })] }, index))) }), _jsx("div", { className: "relative z-10 text-center mb-14", children: _jsx("button", { className: " border-black border-[4px] text-sm md:text-[16px] font-bold px-5 py-3 rounded-xl ", children: "Load More" }) })] })] }));
};
export default Insights;
