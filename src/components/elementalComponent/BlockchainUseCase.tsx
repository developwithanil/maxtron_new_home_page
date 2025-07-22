import React from "react";
import {
  asset,
  gaming,
  goods,
  infrastructure,
  legal,
  supplychain,
  tools,
} from "../Web3VectorImage";

interface CardProps {
  title: string;
  img: React.ComponentType;
}

const Card: React.FC<CardProps> = ({ title, img: Img }) => {
  return (
    <div
      className="border-[#B58AE5] bg-[#FBF8FF] border-2 shadow-lg flex flex-row justify-between items-center h-full hover:scale-105 transition-all duration-300 rounded-xl"
      style={{
        boxShadow: "0px 4px 12px 0px var(--Primary-0, #F3EBFC)",
      }}
    >
      <div className="flex-1 text-left py-6 sm:py-8 md:py-12 lg:py-16 px-6 sm:px-8 md:px-12 lg:px-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 md:mb-4 text-[#7A35C1] [font-family:Switzer] leading-tight">
          {title}
        </h3>
      </div>
      <div className="flex-1 flex justify-end items-end h-full">
        <div className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-full lg:w-full flex items-end overflow-hidden">
          <Img />
        </div>
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    title: "DeFi & Financial Infrastructure.",
    img: infrastructure,
  },
  {
    id: 2,
    title: "NFT Platforms & Digital Goods",
    img: goods,
  },
  {
    id: 3,
    title: "DAO Tools & Governance",
    img: tools,
  },
  {
    id: 4,
    title: "Real-World Asset Tokenization",
    img: asset,
  },
  {
    id: 5,

    title: "Supply Chain & Logistics",
    img: supplychain,
  },
  {
    id: 6,

    title: "Healthcare & Legal Systems",
    img: legal,
  },
  {
    id: 7,

    title: "Web3 Gaming Economy",
    img: gaming,
  },
];

const WhyBlockchain = () => {
  return (
    <div className="relative py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 text-center max-w-[96rem] mx-auto lg:p-16 xl:p-16 sm:p-10 md:p-10">
      <h2
        className="text-[#2A2A2A] [font-family: Switzer] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl text-start mb-3 sm:mb-4 md:mb-6 lg:mb-12
      xl:mb-12 font-medium  leading-tight"
      >
        Use Cases We Power
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-5 mb-8 sm:mb-12 md:mb-16">
        {cardsData.map((card, idx) => (
          <div
            key={card.id}
            className={
              idx === cardsData.length - 1 ? "col-span-1 sm:col-span-2" : ""
            }
          >
            <Card title={card.title} img={card.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBlockchain;
