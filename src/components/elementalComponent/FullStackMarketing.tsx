import React from "react";
import { airdrop, community, education, onchain } from "../Web3VectorImage";

interface CardProps {
  icon: React.ComponentType;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title }) => {
  return (
    <div
      className="border-[#F3EBFC] border-[4px] sm:border-[6px] shadow-lg flex flex-col justify-start p-3 sm:p-4 md:p-6 h-full hover:scale-105 transition-all duration-300"
      style={{
        boxShadow: "0px 4px 12px 0px var(--Primary-0, #F3EBFC)",
      }}
    >
      <div className="mb-4 sm:mb-6 md:mb-8 p-2 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
        <Icon />
      </div>
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 md:mb-4 text-[#2A2A2A] [font-family:Switzer] text-start leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    icon: airdrop,
    title: "KOLs, airdrops, and tokenomics",
  },
  {
    id: 2,
    icon: onchain,
    title: "On-chain + off-chain insights",
  },
  {
    id: 3,
    icon: community,
    title: "Community-first strategies",
  },
  {
    id: 4,
    icon: education,
    title: "Education and transparency",
  },
];

const FullStackMarketing = () => {
  return (
    <div className="relative py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 text-center max-w-[96rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="text-[#2A2A2A] [font-family: Switzer] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl text-center mb-3 sm:mb-4 md:mb-6 font-semibold px-2 sm:px-4 md:px-8 lg:px-48 xl:px-48 leading-tight">
        Full-Stack Marketing Built for Web3
      </h2>
      <p className="text-[#5E28A0] font-[Switzer] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center font-normal mb-6 sm:mb-8 md:mb-10 lg:mb-12 mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 leading-relaxed">
        Traditional growth tactics don't work in decentralized ecosystems. You
        need :
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-12 md:mb-16">
        {cardsData.map((card) => (
          <Card key={card.id} icon={card.icon} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default FullStackMarketing;
