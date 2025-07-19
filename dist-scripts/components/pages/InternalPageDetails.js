import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import ContactForm from "../ContactForm";
import Problem from "../elementalComponent/Problem";
import ImageSection from "../elementalComponent/ImageSection";
import Solution from "../elementalComponent/Solution";
import BusinessResult from "../elementalComponent/BusinessResult";
import Technology from "../elementalComponent/Technology";
import Process from "../elementalComponent/Process";
import KeyFeature from "../elementalComponent/KeyFeature";
import { Helmet } from 'react-helmet-async';
const InternalPageDetails = ({ caseStudies }) => {
    const { casestudyName } = useParams();
    const canonicalUrl = `https://www.maxtron.ai/case-study/${casestudyName}`;
    const caseStudyName = casestudyName?.replace(/-/g, " ");
    const caseStudy = caseStudies.find((study) => study.name === caseStudyName);
    if (!caseStudy) {
        return (_jsx("div", { className: "container mx-auto px-4 py-8", children: "Case study not found" }));
    }
    const { title, subtitle, heroImage, type, industryInfo, bussinessNeeds, results, projectDuration, clientSatisfaction, problemSolutionResult, techs, afterHeroSection, keyFeatures, description, keyFeaturesImage, bgImage, } = caseStudy;
    console.log("image internal ", bgImage);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsxs("title", { children: [title, " | Case Study | Maxtron"] }), _jsx("meta", { name: "description", content: description || subtitle || title }), _jsx("link", { rel: "canonical", href: canonicalUrl }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { httpEquiv: "X-Robots-Tag", content: "index, follow" }), _jsx("meta", { property: "og:title", content: `${title} | Case Study | Maxtron` }), _jsx("meta", { property: "og:description", content: description || subtitle || title }), _jsx("meta", { property: "og:image", content: heroImage }), _jsx("meta", { property: "og:url", content: canonicalUrl }), _jsx("meta", { property: "og:type", content: "article" })] }), _jsxs("div", { className: "w-full flex flex-col gap-3 md:gap-5 lg:gap-6 xl:gap-7 mt-2 mb-4 relative", children: [_jsxs("div", { className: "w-full flex flex-col lg:flex-row max-w-[130rem] mx-auto justify-between items-center p-4 sm:p-8 md:p-12 lg:p-16 gap-6 sm:gap-10 ", style: {
                            background: `linear-gradient(0deg, rgba(0,0,0,0.80), rgba(0,0,0,0.80)), url(${bgImage}) center/cover no-repeat`,
                        }, children: [_jsxs("div", { className: "w-full md:w-1/2 max-w-[88rem] px-4 sm:px-6 md:px-8 py-4 flex flex-col gap-2 md:gap-4", children: [_jsx("div", { className: "flex flex-wrap gap-2", children: type.map((tag, index) => (_jsx("div", { className: "px-4 py-2 border border-transparent rounded-3xl bg-white/20 flex items-center", children: _jsx("p", { className: "text-white text-xs md:text-sm font-bold font-openSansHebrew leading-none", children: tag }) }, index))) }), _jsx("h1", { className: "text-white font-['Switzer'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug", children: title }), _jsx("p", { className: "text-white font-openSansHebrew text-base sm:text-lg md:text-xl font-normal", children: subtitle })] }), _jsx("div", { className: "w-full md:w-1/2 max-w-[88rem] flex justify-center items-center mt-6 md:mt-0", children: _jsx("img", { src: heroImage, alt: "Case Study", className: "w-full h-auto max-h-[500px] object-contain rounded-xl" }) })] }), description && (_jsxs("div", { className: "flex flex-col md:flex-row w-full mx-auto max-w-[88rem] items-center gap-20 md:gap-24 lg:gap-32 px-[20px] md:px-[30px] lg:px-[50px] py-7 md:py-10 lg:py-12", children: [_jsx("div", { className: "w-48 md:w-[14%]", children: _jsx("img", { src: afterHeroSection, alt: "Hero section" }) }), _jsx("div", { className: "flex-1 ", children: _jsx("h2", { className: "text-black font-openSansHebrew text-lg md:text-2xl font-normal leading-[160%]", children: description }) })] })), _jsx(Problem, { heading: problemSolutionResult[0].heading, subheading: problemSolutionResult[0].subheading, points: problemSolutionResult[0].points }), _jsx(ImageSection, { keyFeaturesImage: keyFeaturesImage }), _jsx(Solution, { heading: problemSolutionResult[1].heading, subheading: problemSolutionResult[1].subheading, points: problemSolutionResult[1].points }), _jsx(BusinessResult, { points: problemSolutionResult[0].points, results: problemSolutionResult[1].points, industryInfo: industryInfo, projectDuration: projectDuration, clientSatisfaction: clientSatisfaction, afterHeroSection: afterHeroSection, bussinessNeeds: bussinessNeeds, resultsData: results }), techs.length > 0 && _jsx(Technology, { techs: techs }), _jsx(Process, { processSteps: caseStudy.processSteps }), _jsx(KeyFeature, { keyFeatures: keyFeatures }), _jsx(ContactForm, {})] })] }));
};
export default InternalPageDetails;
