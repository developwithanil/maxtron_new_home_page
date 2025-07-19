import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { icon1 } from "../../components/VectorImage";
import { icon2 } from "../../components/VectorImage";
import { icon3 } from "../../components/VectorImage";
import { icon4 } from "../../components/VectorImage";
import { icon5 } from "../../components/VectorImage";
import { icon6 } from "../../components/VectorImage";
import { icon7 } from "../../components/VectorImage";
const Card = ({ icon: Icon, title, description }) => {
    return (_jsxs("div", { className: "border border-[#DFDEE7] rounded-[24px] flex flex-col  justify-start p-4", children: [_jsx("div", { className: " mb-8  bg-[#F5F5F5] flex items-start justify-start  h-12 w-12 rounded-lg", children: _jsx(Icon, {}) }), _jsxs("div", { className: "", children: [_jsx("h3", { className: "text-xl font-semibold mb-4 text-[#2A2A2A] [font-family:Switzer] items-start text-start ", children: title }), _jsx("p", { className: "text-sm text-[#595465] font-openSansHebrew items-start text-start", children: description })] })] }));
};
const cardsData = [
    {
        id: 1,
        icon: icon1,
        title: "Blockchain & Web3",
        description: "Solidity, Ethereum, Smart Contracts, NFTs, DeFi, Layer-2s",
    },
    {
        id: 2,
        icon: icon2,
        title: "Web Development",
        description: "MERN, MEAN, JAMstack, Headless CMS, SEO-optimized builds.",
    },
    {
        id: 3,
        icon: icon3,
        title: "Mobile App Development",
        description: "iOS, Android, Flutter, React Native",
    },
    {
        id: 4,
        icon: icon4,
        title: "Game Development",
        description: "Unity, Unreal, WebGL, Multiplayer Infra, AR/VR",
    },
    {
        id: 5,
        icon: icon5,
        title: "Full Stack Teams",
        description: "Combine Frontend + Backend + DevOps + QA for full delivery units",
    },
    {
        id: 6,
        icon: icon6,
        title: "Cloud & DevOps",
        description: "CI/CD, Kubernetes, AWS, Terraform, Infrastructure as Code",
    },
    {
        id: 7,
        icon: icon7,
        title: "AI/ML & Data",
        description: "Python, TensorFlow, LLM Integrations, RAG, LangChain, Data Pipelines",
    },
];
const WeOffer = () => {
    return (_jsxs("div", { className: "relative p-5 md:p-8 lg:p-11 xl:p-16 inset-0  text-center max-w-[96rem] mx-auto", children: [_jsx("h2", { className: "text-[#2A2A2A] justify-center [font-family: Switzer]  text-xl md:text-3xl\n        lg:text-3xl xl:text-3xl text-center font-bold mb-2", children: "What We Offer" }), _jsxs("p", { className: "text-[#595465] font-openSansHebrew lg:text-lg md:text-lg xl:text-lg sm:text-[14px] text-center font-normal mb-12", children: ["We provide ", _jsx("strong", { children: "scalable, on-demand tech resources" }), " across all major stacks and domains. Whether you're a product company, digital agency, SI partner, or enterprise, our flexible staff augmentation model ensures ", _jsx("strong", { children: "zero downtime" }), " in your delivery roadmap."] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5", children: cardsData.map((card) => (_jsx(Card, { icon: card.icon, title: card.title, description: card.description }, card.id))) })] }));
};
export default WeOffer;
