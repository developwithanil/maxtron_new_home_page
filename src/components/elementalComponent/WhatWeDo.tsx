import React from "react";
import Card from "./Card";
import { FaBrain, FaCloud, FaNetworkWired } from "react-icons/fa";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "AI & ML",
    subtitle: "Title",
    description: "Description",
    icon: <FaBrain />,
  },
  {
    title: "Cloud Computing",
    subtitle: "Title",
    description: "Description",
    icon: <FaCloud />,
  },
  {
    title: "Blockchain",
    subtitle: "Title",
    description: "Description",
    icon: <FaNetworkWired />,
  },
  {
    title: "Blockchain",
    subtitle: "Title",
    description: "Description",
    icon: <FaNetworkWired />,
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-700 to-purple-900 text-center">
      <div className="container mx-auto md:px-28">
        <h2 className="text-4xl font-bold text-white mb-4">
          What we <span className="text-[#F9CEC0]">Do</span>.
        </h2>
        <p className="mb-12 text-gray-300">
          Delivering innovative IT solutions and emerging technologies to drive
          your success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="text-white underline">
            View All &gt;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
