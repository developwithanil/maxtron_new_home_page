import React from "react";
import robotimg from "../../assets/ai_img/Shutterstock_01.webp";

interface CardProps {
  title: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, number }) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col justify-start p-6 relative pb-16 min-h-[16rem] hover:scale-95 transition-all duration-300 w-full">
      <div>
        <h3 className="text-lg md:text-xl font-medium mb-4 text-[#2A2A2A] [font-family:Switzer] items-start text-start">
          {title}
        </h3>
      </div>
      <div className="bg-[#7A35C1] absolute bottom-0 right-0 h-12 w-12 flex items-center justify-center text-white">
        {number}
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    number: 1,
    title:
      "Discovery & Needs Assessment - We understand your business goals, data readiness, infrastructure, stakeholders, and regulatory environment.",
  },
  {
    id: 2,
    number: 2,
    title:
      "Solution Design & Proof of Concept - Prototype, test models, validate AI performance.",
  },
  {
    id: 3,
    number: 3,
    title:
      "Implementation & Integration - Deploy AI into your existing systems; ensure scalability and maintainability.",
  },
  {
    id: 4,
    number: 4,
    title:
      "Monitoring, Evaluation & Iteration - Continuous evaluation of model performance, retraining as needed, ensuring accuracy and reliability.",
  },
  {
    id: 5,
    number: 5,
    title:
      "Support & Scaling - Post-deployment support, optimization, and scaling of AI solutions as usage grows.",
  },
];

const Ideal = () => {
  return (
    <div className="relative p-5 md:p-8 lg:p-12 xl:p-16 inset-0 text-center max-w-[96rem] mx-auto">
      <h2 className="text-[#2A2A2A] justify-center [font-family:Switzer] text-3xl md:text-4xl lg:text-5xl text-start font-normal mb-12">
        Our Process
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Container */}
        <div className="w-full lg:w-[30%] flex items-start justify-start">
          <img
            src={robotimg}
            alt="AI robot analyzing data charts"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        {/* Cards Grid */}
        <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardsData.map((card) => (
            <Card key={card.id} number={card.number} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ideal;
