import React from "react";

// ✅ Import your actual WebP icons from the assets folder
import icon1 from "../../assets/ai_img/firstI.webp";
import icon2 from "../../assets/ai_icons/second.webp";
import icon3 from "../../assets/ai_icons/third.webp";
import icon4 from "../../assets/ai_icons/fourth.webp";
import icon5 from "../../assets/ai_icons/fifth.webp";

// ✅ Replace placeholder URLs with actual icon imports
const icons = [icon1, icon2, icon3, icon4, icon5];

const data = [
  {
    number: "01",
    title: "AI-Powered Explainer Videos",
    desc: "Scriptwriting, voiceover, animation, editing - all generated using AI pipelines. Perfect for product walkthroughs, feature launches and FAQs.",
    icon: icons[0],
  },
  {
    number: "02",
    title: "AI for Social Media & Growth",
    desc: "From tweet threads and carousels to viral short videos and auto-generated community Q&As - designed for traction, conversion, and consistency.",
    icon: icons[1],
  },
  {
    number: "03",
    title: "Content from Raw Data",
    desc: "From tweet threads and carousels to viral short videos and auto-generated community Q&As - designed for traction, conversion, and consistency.",
    icon: icons[2],
  },
  {
    number: "04",
    title: "AI Blog & Website Copy",
    desc: "Branded content for your site, landing pages, blogs, and thought leadership - crafted to sound intelligent, consistent and conversion-optimized.",
    icon: icons[3],
  },
  {
    number: "05",
    title: "Campaigns Built by AI",
    desc: "Launch-ready content packs: banners, CTAs, scripts, captions, summaries - auto-generated and quality-checked for brand tone.",
    icon: icons[4],
  },
];

const Aipowerdelivers = () => (
  <section className="w-full bg-black py-8 px-2 sm:px-4 md:px-8">
    <h2 className="text-[2.5rem] sm:text-[3rem] font-light italic text-[#222] mb-8" style={{ fontFamily: "inherit" }}>
      Our AI Studio Delivers
    </h2>
    <div className="flex flex-col gap-8">
      {data.map((item, idx) => (
        <div
          key={item.number}
          className="flex flex-col md:flex-row items-center justify-between bg-[#f7f7f7] rounded-xl shadow-md px-6 py-8 md:py-10 md:px-12"
        >
          <div className="flex-1 flex flex-col items-start">
            <span className="text-[1.5rem] font-light text-[#C2C2C2] mb-1">{item.number}</span>
            <span className="text-[1.35rem] sm:text-[1.5rem] md:text-[1.7rem] font-medium text-white bg-[#A259FF] rounded-md px-2 py-1 mb-2">
              {item.title}
            </span>
            <span className="text-[0.95rem] sm:text-base text-[#888] max-w-lg">{item.desc}</span>
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0 flex items-center justify-center min-w-[120px] min-h-[80px]">
            <div className="w-[100px] h-[80px] flex items-center justify-center">
              <img src={item.icon} alt={item.title} className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Aipowerdelivers;
