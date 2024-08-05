import React from "react";
import Cards from "./Cards";
import { FaBrain, FaCloud, FaNetworkWired } from "react-icons/fa";
// import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Web3.0 Custom Solutions",
    subtitle: "Title",
    description:
      "Native Crypto Token Development & Launch-DApps Development-Crypto Gaming Development.Smart Contract Development-DeFi Development-Metaverse Development.Native Payment Development",
    icon: <FaBrain className="text-[#4E009C]" />,
  },
  {
    title: "Applied AI Products & Services",
    subtitle: "Title",
    description:
      "-Custom AI App Development-AI Integration-AI Agent/Copilot Development-PoC & MVP Development-GenAI Development & LLM Fine-tuning",
    icon: <FaCloud className="text-[#4E009C]" />,
  },
  {
    title: "Business Enhancement",
    subtitle: "Title",
    description:
      "-B2B: AI-Powered Prospecting & AI Calling-B2C: Performance Marketing-Investor Outreach On Autopilot-Channel Partnership-Web3 Projects Marketing & Growth",
    icon: <FaNetworkWired className="text-[#4E009C]" />,
  },
  {
    title: "Experiential Development",
    subtitle: "Title",
    description: "-AR Software/App Development-AR/VR/MR Game Development",
    icon: <FaNetworkWired className="text-[#4E009C]" />,
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-12 text-center ">
      <div className="container px-4 md:px-8 mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4">What we Do.</h2>
        <p className="mb-12  font-OpenSans  font-normal text-[#1E1E1E]">
          We build great products and make them successful to the market across
          a range of verticals & industries. We can help you turn your vision
          into a successful product together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[#9B9696] gap-4">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              // subtitle={card.subtitle}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
        {/* <div className="mt-8">
          <Link to="/services" className="text-black underline">
            View All &gt;
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
