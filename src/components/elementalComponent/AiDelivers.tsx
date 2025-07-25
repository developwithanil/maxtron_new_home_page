import React from "react";

import mp4Img from "../../assets/ai_img/mp4.webp";
import browserImg from "../../assets/ai_img/browser.webp";
import recordImg from "../../assets/ai_img/record.webp";
import starImg from "../../assets/ai_img/star.webp";
import sliderImg from "../../assets/ai_img/slider.webp";

const items = [
  {
    number: "01",
    title: "AI-Powered Explainer Videos",
    desc: "Scriptwriting, voiceover, animation, editing – all generated using AI pipelines. Perfect for product walkthroughs, feature launches and FAQs.",
    icon: mp4Img,
  },
  {
    number: "02",
    title: "AI for Social Media & Growth",
    desc: "From tweet threads and carousels to viral short videos and auto-generated community Q&As – designed for traction, conversion, and consistency.",
    icon: browserImg,
  },
  {
    number: "03",
    title: "Content from Raw Data",
    desc: "From tweet threads and carousels to viral short videos and auto-generated community Q&As – designed for traction, conversion, and consistency.",
    icon: recordImg,
  },
  {
    number: "04",
    title: "AI Blog & Website Copy",
    desc: "Branded content for your site, landing pages, blogs, and thought leadership – crafted to sound intelligent, consistent and conversion-optimized.",
    icon: starImg,
  },
  {
    number: "05",
    title: "Campaigns Built by AI",
    desc: "Launch-ready content packs: banners, CTAs, scripts, captions, summaries – auto-generated and quality-checked for brand tone.",
    icon: sliderImg,
  },
];

const AiStudioDelivers: React.FC = () => {
  return (
    <div
      className="w-full bg-white py-10 px-4 flex flex-col items-center min-h-screen"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <h2 className="w-full max-w-6xl text-[2.2rem] sm:text-[2.5rem] font-italic font-normal mb-8 text-black italic tracking-tight">
        Our AI Studio Delivers
      </h2>

      <div className="w-full max-w-6xl flex flex-col gap-8">
        {items.map((item) => (
          <div
            key={item.number}
            className="w-full flex flex-col md:flex-row justify-between items-center bg-[#F6F6F8] rounded-2xl p-6 gap-6 shadow-sm"
          >
            {/* Left - Text */}
            <div className="w-full md:w-2/3 flex flex-col justify-start items-start">
              <span className="text-[1rem] text-[#FFFFFF] font-semibold mb-1">
                {item.number}
              </span>
              <span className="text-[1.1rem] font-semibold text-white bg-[#8E52CA] px-3 py-1 rounded-md mb-2">
                {item.title}
              </span>
              <p className="text-[#6B6B6B] text-[0.95rem] leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Right - Image */}
            <div className="w-full md:w-[300px] h-[220px] rounded-xl overflow-hidden">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiStudioDelivers;