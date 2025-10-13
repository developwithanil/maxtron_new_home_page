import React from "react";

const metrics = [
  {
    title: "DeFi Protocol Launch (2024):",
    points: [
      "🔹 25K+ organic community members in 3 months",
      "🔹 Token listing on 2 major exchanges",
    ],
  },
  {
    title: "NFT Marketplace Growth:",
    points: [
      "🔹 100K+ website visits within 45 days",
      "🔹 50+ influencer collaborations",
    ],
  },
];

const ProofOfValue = () => {
  return (
    <div className="relative py-8 md:py-12 lg:py-16 xl:py-20 text-center max-w-[96rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="text-[#2A2A2A] [font-family: Switzer] text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 md:mb-6 font-semibold leading-tight">
        Our Success Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#F5F5F5] p-3 md:p-5 rounded-xl  transition-all duration-300 border-l-4 border-[#7A35C1] text-left"
          >
            <h3 className="text-[#2A2A2A] font-[Switzer] text-lg md:text-xl font-medium mb-3 leading-tight">
              {metric.title}
            </h3>
            <div className="text-[#2A2A2A] font-[Switzer] text-base md:text-lg leading-relaxed space-y-1">
              {metric.points.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofOfValue;
