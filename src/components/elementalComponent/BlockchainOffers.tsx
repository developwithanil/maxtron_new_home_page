import React from "react";
import blockchainofferimg from "../../assets/blockchain/BlockchainOffer.webp";

interface CardProps {
  title: string;
  description: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, description, number }) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col justify-start p-4 relative pb-16 min-h-72 hover:scale-95 transition-all duration-300 w-full ">
      <div>
        <h3 className="text-xl font-medium mb-4 text-[#2A2A2A] [font-family:Switzer] items-start text-start">
          {title}
        </h3>
        <p className="text-base text-[#171717] font-openSansHebrew items-start text-start pr-7">
          {description}
        </p>
      </div>
      <div className="bg-[#7A35C1] absolute bottom-0 right-0  h-12 w-12  flex items-center justify-center text-[#FFFFFF]">
        {number}
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    number: 1,
    title: "Blockchain Consulting & Strategy",
    description:
      "Define your roadmap, pick the right chain and structure utility/tokenomics with expert guidance.",
  },
  {
    id: 2,
    number: 2,
    title: "Smart Contract Development",
    description:
      "Secure, gas-efficient, and fully audited contracts built using Solidity, Vyper, Rust or Move.",
  },
  {
    id: 3,
    number: 3,
    title: "dApp & Platform Development",
    description:
      "Frontend + backend for DeFi apps, NFT marketplaces, staking platforms, wallets and more.",
  },
  {
    id: 4,
    number: 4,
    title: " Custom Chain Infrastructure",
    description:
      "We build your own L1/L2, rollup, or modular chain - complete with block explorers, validators and APIs.",
  },
  {
    id: 5,
    number: 5,
    title: " Interoperability & Cross-Chain Bridges",
    description:
      "Seamless communication between Ethereum, BNB, Solana, Polygon, Avalanche and Cosmos ecosystems.",
  },
  {
    id: 6,
    number: 6,
    title: "Blockchain for Enterprise",
    description:
      "Private or permissioned blockchain solutions for logistics, identity, finance and compliance-heavy industries.",
  },
];

const BlockchainOffers = () => {
  return (
    <div className="relative p-5 md:p-8 lg:p-11 xl:p-16 inset-0 text-center max-w-[96rem] mx-auto">
      <h2
        className="text-[#2A2A2A] justify-center [font-family: Switzer] text-xl md:text-3xl
        lg:text-5xl xl:text-5xl text-start font-normal mb-12"
      >
        What We Offer
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
        <div className="w-full lg:w-[30%] flex items-start justify-start">
          <img
            src={blockchainofferimg}
            alt=""
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-2">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainOffers;
