import React from "react";

const metrics = [
  {
    category: "Wallets acquired & CAC per wallet",
    
  },
  {
    category: "TVL growth & liquidity depth", 
    
  },
  {
    category: "Community activation (MAU/WAU, contributor funnels, proposals, votes)",
   
  },
  {
    category: "Content reach & save rate (not just impressions)",
  
  },
  {
    category: "PR quality: tier‑1/2 placements, share of voice, backlink authority",
    
  },
  {
    category: "SEO: non‑brand traffic, intent rankings, conversions",
   
  }
];

const ProofOfValue = () => {
  return (
    <div className="relative py-8 md:py-12 lg:py-16 xl:py-20 text-center max-w-[96rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="text-[#2A2A2A] [font-family: Switzer] text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 md:mb-6 font-semibold leading-tight">
        Proof of Value
      </h2>
      
      <p className="text-[#5E28A0] font-[Switzer] text-base md:text-lg lg:text-xl text-center font-medium mb-8 md:mb-12 leading-relaxed">
        (What We Measure)
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className="bg-[#F5F5F5] p-3 md:p-5 rounded-xl  transition-all duration-300 border-l-4 border-[#7A35C1] text-left"
          >
            <h3 className="text-[#2A2A2A] font-[Switzer] text-lg md:text-xl font-medium mb-3 leading-tight">
              {metric.category}
            </h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofOfValue;
