import React from "react";

import mp4Img from "../../assets/ai_img/mp4.webp";
import browserImg from "../../assets/ai_img/browser.webp";
import recordImg from "../../assets/ai_img/record.webp";
import starImg from "../../assets/ai_img/star.webp";
import sliderImg from "../../assets/ai_img/slider.webp";

const items = [
  {
    number: "01",

    title: "Natural Language Processing & Multilingual AI",
    desc: "Chatbots, speech recognition, sentiment analysis in Hindi, Tamil, Marathi, Bengali and other regional languages.",
    icon: mp4Img,
  },
  {
    number: "02",
    title: "Custom AI & ML Model Development",
    desc: "Building predictive models, classification systems, recommendation engines, time-series forecasting, etc.",
    icon: browserImg,
  },
  {
    number: "03",
    title: "Computer Vision & Image/Video Analytics",
    desc: "For security & surveillance, quality control in manufacturing, medical image diagnostics, etc.",
    icon: recordImg,
  },
  {
    number: "04",
    title: "AI-Powered Automation & Process Optimization",
    desc: "Workflow automation, robotic process automation (RPA), reducing manual effort, improving accuracy.",
    icon: starImg,
  },
  {
    number: "05",
    title: "Ethical AI & Explainable AI (XAI)",
    desc: "Ensuring transparency, fairness, data privacy, and responsible AI usage.",
    icon: sliderImg,
  },
  // {
  //   number: "06",
  //   title: "Ethical AI & Explainable AI (XAI)",
  //   desc: "Ensuring transparency, fairness, data privacy, and responsible AI usage.",
  //   icon: mp4Img,
  // },
  // {
  //   number: "07",
  //   title: "AI Consulting & Capacity Building",
  //   desc: "Roadmap creation, proof-of-concepts, training, upskilling teams for AI readiness.",
  //   icon: browserImg,
  // },
];

const AiStudioDelivers: React.FC = () => {
  return (
    <div
      className="w-full bg-white py-10 px-4 flex flex-col items-center min-h-screen"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <h2 className="w-full max-w-6xl text-[2.2rem] sm:text-[2.5rem] font-italic font-normal mb-8 text-black italic tracking-tight font-[Inter]">
        Our AI Services
      </h2>

      <div className="w-full max-w-6xl flex flex-col gap-8">
        {items.map((item) => (
          <div
            key={item.number}
            className="w-full flex flex-col md:flex-row justify-between items-center bg-[#F6F6F8] rounded-2xl p-16 gap-6 shadow-sm font-[Inter]"
          >
            {/* Left - Text */}
            <div className="w-full md:w-1/3 flex flex-col justify-start items-start">
              <span className=" text-[#D1D1D1] font-normal mb-1 font-[Inter] text-4xl">
                {item.number}
              </span>
              <span className="text-[1.1rem] font-semibold text-white bg-[#8E52CA] px-3  rounded-md mb-2 font-[Inter] text-3xl mt-3">
                {item.title}
              </span>
              <p className="text-[#6B6B6B] text-[0.95rem] leading-relaxed font-[Inter] text-2xl">
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
