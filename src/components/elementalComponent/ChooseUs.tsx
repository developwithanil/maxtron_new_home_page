import React from "react";
import Card from "./Card";
import { FaMedal, FaLightbulb, FaUsers } from "react-icons/fa";

const cardData = [
  {
    title: "Expertise",
    subtitle: "Title",
    description: "Description",
    icon: <FaMedal />,
  },
  {
    title: "Innovation",
    subtitle: "Title",
    description: "Description",
    icon: <FaLightbulb />,
  },
  {
    title: "Customer-Centric Approach",
    subtitle: "Title",
    description: "Description",
    icon: <FaUsers />,
  },
  {
    title: "Customer-Centric Approach",
    subtitle: "Title",
    description: "Description",
    icon: <FaUsers />,
  },
];

const ChooseUs: React.FC = () => {
  return (
    <section className="py-12 md:px-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-4">
        Why Choose <span className="text-purple-600">Us</span>
      </h2>
      <p className="mb-12 text-gray-600">
        Delivering innovative IT solutions and emerging technologies to drive
        your success.
      </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </section>
  );
};

export default ChooseUs;
