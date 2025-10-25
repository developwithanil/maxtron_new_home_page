import React from "react";
// import robotimg from "../../assets/ai_img/Shutterstock_01.webp";

interface CardProps {
  title: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, number }) => {
  return (
    <div className="bg-gradient-to-br from-white to-[#F8F9FF] border border-[#E5E7EB] flex flex-col justify-start p-8 relative pb-20 min-h-[18rem] hover:scale-105 hover:shadow-xl transition-all duration-300 w-full rounded-2xl group">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-[#7A35C1] to-[#9F7AEA] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        <div className="w-8 h-0.5 bg-gradient-to-r from-[#7A35C1] to-transparent"></div>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-[#1F2937] [font-family:Switzer] leading-relaxed">
          {title}
        </h3>
      </div>
      <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#7A35C1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    number: 1,
    title:
      "Deep understanding of Indian data, language, regulatory frameworks.",
  },
  {
    id: 2,
    number: 2,
    title:
      "Strong technical team with experience across sectors: healthcare, agriculture, finance, education.",
  },
  {
    id: 3,
    number: 3,
    title: "Focus on ethical, transparent and explainable AI.",
  },
  {
    id: 4,
    number: 4,
    title:
      "Proven track record in building AI solutions that scale locally and deliver ROI.",
  },
];

const WhyMaxtronAI = () => {
  return (
    <div className="relative p-5 md:p-8 lg:p-12 xl:p-16 inset-0 text-center max-w-[96rem] mx-auto">
      <h2 className="text-[#2A2A2A] justify-center [font-family:Switzer] text-3xl md:text-4xl lg:text-5xl text-start font-normal mb-12">
        Why Choose Maxtron Innovation for AI in India
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cardsData.map((card) => (
          <Card key={card.id} number={card.number} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default WhyMaxtronAI;
