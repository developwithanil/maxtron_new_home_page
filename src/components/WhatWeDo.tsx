import React from "react";
import Cards from "./elementalComponent/Cards";
import Neuro from "../../public/neuro.svg";
import Cloud from "../../public/cloud.svg";
import Topology from "../../public/topology.svg";
import Network from "../../public/network.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    title: "Web3.0 Custom Solutions",
    description: [
      "Native Crypto Token Development & Launch",
      "DApps Development",
      "Crypto Gaming Development",
      "Smart Contract Development",
      "DeFi Development",
      "Metaverse Development",
      "Native Payment Development",
    ],
    imageUrl: Neuro,
  },
  {
    title: "Applied AI Products & Services",
    description: [
      "Custom AI App Development",
      "AI Integration",
      "AI Agent/Copilot Development",
      "PoC & MVP Development",
      "GenAI Development & LLM Fine-tuning",
    ],
    imageUrl: Cloud,
  },
  {
    title: "Business Enhancement",
    description: [
      "B2B: AI-Powered Prospecting & AI Calling",
      "B2C: Performance Marketing",
      "Investor Outreach On Autopilot",
      "Channel Partnership",
      "Web3 Projects Marketing & Growth",
    ],
    imageUrl: Topology,
  },
  {
    title: "Experiential Development",
    description: [
      "AR Software/App Development",
      "AR/VR/MR Game Development",
      "Interactive Technologies",
      "Embedded Engineering",
      "Projection Mapping ",
      "Hologram Technologies",
    ],
    imageUrl: Network,
  },
];

const WhatWeDo: React.FC = () => {
  AOS.init();
  return (
    <section id="Our-services" className="py-12 text-center ">
      <div className="container px-4 md:px-8 mx-auto animate__backInDown">
        <h2 className="text-4xl font-bold text-black mb-4 animate__backInDown">
          What We Do
        </h2>
        <p className="mb-16 font-OpenSans font-normal text-[#1E1E1E]">
          We build great products and make them successful to the market across
          a range of verticals & industries. We can help you turn your vision
          into a successful product together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[#9B9696] gap-8">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhatWeDo);
