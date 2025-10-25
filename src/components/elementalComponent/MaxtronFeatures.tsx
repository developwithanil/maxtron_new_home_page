import React from "react";

import contentImg from "../../assets/ai_images/content.webp";
import dataImg from "../../assets/ai_images/data.webp";
import modularImg from "../../assets/ai_images/modular.webp";
import creativeImg from "../../assets/ai_images/creative.webp";

// const FeatureIcon = () => (
//   <>
//     <svg
//       width="17"
//       height="16"
//       viewBox="0 0 17 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14.904 11.008V4.99123C14.904 4.68822 14.7328 4.41121 14.4618 4.2757L8.85664 1.47313C8.63144 1.36052 8.36633 1.36052 8.14111 1.47313L2.53597 4.2757C2.26495 4.41121 2.09375 4.68822 2.09375 4.99123V11.008C2.09375 11.311 2.26495 11.588 2.53597 11.7236L8.14111 14.5261C8.36633 14.6387 8.63144 14.6387 8.85664 14.5261L14.4618 11.7236C14.7328 11.588 14.904 11.311 14.904 11.008Z"
//         fill="white"
//         stroke="#7A35C1"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M14.7651 4.56624L11.7014 6.09809L10.1002 6.89874L9.29952 7.29906L8.55656 7.66491M2.49407 4.69697L2.89439 4.89713L3.69503 5.29745L5.29631 6.09809L8.05665 7.47826C8.32768 7.61378 8.49888 7.89078 8.49888 8.19379V13.3835V14.1363M8.85664 1.47313L14.4618 4.2757C14.7328 4.41121 14.904 4.68822 14.904 4.99123V11.008C14.904 11.311 14.7328 11.588 14.4618 11.7236L8.85664 14.5261C8.63144 14.6387 8.36633 14.6387 8.14111 14.5261L2.53597 11.7236C2.26495 11.588 2.09375 11.311 2.09375 11.008V4.99123C2.09375 4.68822 2.26495 4.41121 2.53597 4.2757L8.14111 1.47313C8.36633 1.36052 8.63144 1.36052 8.85664 1.47313Z"
//         stroke="#7A35C1"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   </>
// );

const features = [
  {
    title: "GENERATIVE AI MOMENTUM",
    items: [
      {
        text: "Generative AI is gaining momentum — content generation, creative industries, marketing, etc.",
        image: contentImg,
      },
      {
        text: "Increased adoption in rural India — agriculture, health, local governance benefitting from localized AI tools.",
        image: dataImg,
      },
    ],
  },
  {
    title: "AI ETHICS & ACCESSIBILITY",
    items: [
      {
        text: "Surge in demand for AI ethics, explainability, data privacy compliance.",
        image: modularImg,
      },
      {
        text: "Businesses leveraging AI-as-a-Service (AI SaaS), making AI accessible to SMEs without huge upfront investments.",
        image: creativeImg,
      },
    ],
  },
];

const MaxtronFeatures = (): JSX.Element => {
  return (
    <section className="w-full bg-white mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[Inter] font-normal text-start mb-8 sm:mb-12 text-black pt-8 sm:pt-12 lg:pt-16">
        AI Trends & Insights in India
      </h2>

      {features.map((section, i) => (
        <div
          key={i}
          className={`mb-12 w-full py-8 sm:py-12 px-4 md:px-12 lg:px-20 rounded-2xl ${
            section.title === "ENHANCE" ? "bg-[#F3EBFC]" : "bg-[#DCDFFF]"
          }`}
        >
          <h3 className="text-2xl font-[Inter] font-normal text-[#7A35C1] uppercase mb-10">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full">
            {section.items.map((item, j) => (
              <div
                key={j}
                className="bg-white rounded-lg px-6 py-6 flex flex-col text-left shadow-sm w-full min-h-[420px]"
              >
                <div className="flex-grow w-full flex items-center justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full max-h-[300px] object-cover rounded-md"
                  />
                </div>
                <p className="text-[#171717] font-normal font-[Inter] text-lg sm:text-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MaxtronFeatures;
