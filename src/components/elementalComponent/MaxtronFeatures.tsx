import React from "react";


import contentImg from "../../assets/ai_images/content.webp";
import dataImg from "../../assets/ai_images/data.webp";
import modularImg from "../../assets/ai_images/modular.webp";
import creativeImg from "../../assets/ai_images/creative.webp";

const features = [
  {
    title: "ENHANCE",
    items: [
      {
        text: "Multi-format content pipelines",
        image: contentImg,
      },
      {
        text: "Creative + Data in One Stack",
        image: dataImg,
      },
    ],
  },
  {
    title: "POLISH",
    items: [
      {
        text: "Modular for Web3, SaaS, Consumer & more",
        image: modularImg,
      },
      {
        text: "Faster than any traditional creative team",
        image: creativeImg,
      },
    ],
  },
];

const MaxtronFeatures = (): JSX.Element => {
  return (
    <section className="w-full bg-white">
      <h2 className="text-4xl font-semibold text-center mb-12 text-black pt-16">
        Why Brands Choose Maxtron AI Studio
      </h2>

      {features.map((section, i) => (
        <div
          key={i}
          className="mb-16 w-full bg-purple-100 py-12 px-4 md:px-20"
        >
          <h3 className="text-sm font-semibold text-purple-500 uppercase mb-10">
            {section.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {section.items.map((item, j) => (
              <div
                key={j}
                className="bg-white px-6 py-6 flex flex-col text-left shadow-sm w-full h-[460px]"
              >
                <div className="flex-grow w-full flex items-center justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full max-h-[300px] object-cover"
                  />
                </div>
                <p className="text-gray-800 text-lg font-medium">
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









