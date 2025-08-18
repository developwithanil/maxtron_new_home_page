import React from "react";

const reasons = [
  {
    title: "One partner, many capabilities",
    description: "full‑stack services usually spread across multiple crypto PR agencies and performance shops—consolidated under one accountable team."
  },
  {
    title: "Crypto‑native credibility",
    description: "trusted by builders, respected by creators."
  },
  {
    title: "Outcome‑focused",
    description: "strategies tied to on‑chain metrics and real adoption. If you're hunting for the best crypto marketing agency, start with the team that reports on wallets, TVL, and retention."
  }
];

const WhyMaxtron = () => {
  return (
    <div className="relative py-8 md:py-12 lg:py-16 xl:py-20  text-center max-w-[96rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="text-[#2A2A2A] [font-family: Switzer] text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-8 md:mb-12 font-semibold leading-tight">
        Why Maxtron
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mx-auto">
        {reasons.map((reason, index) => (
          <div 
            key={index}
            className="bg-[#F9F9F9] p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-left w-full"
          >
            <h3 className="text-[#7A35C1] font-[Switzer] text-lg md:text-xl lg:text-2xl font-semibold mb-3 leading-tight">
              {reason.title}:
            </h3>
            <p className="text-[#2A2A2A] font-[Switzer] text-base md:text-lg leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMaxtron;
