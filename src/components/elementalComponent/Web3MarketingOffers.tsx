import React from "react";
import offerimg from "../../assets/web3marketing/marketingofferimg.webp";

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
    title: "Go-to-Market for Web3 Launches",
    description:
      "Full-stack GTM plans for dApps, tokens, Layer 1s/L2s and Web3 platforms- built for traction, not noise.",
  },
  {
    id: 2,
    number: 2,
    title: "Community Building & Management",
    description:
      "Grow active, engaged communities on Discord, Telegram, Farcaster, Lens and X with culture-driven strategies and real-time moderation.",
  },
  {
    id: 3,
    number: 3,
    title: "Crypto-Native Content & Creative",
    description:
      "Threads, explainers, motion graphics and token use-case storytelling - designed for DeFi degens, DAO voters and normie-curious alike.",
  },
  {
    id: 4,
    number: 4,
    title: "Influencer & KOL Campaigns",
    description:
      "End-to-end coordination with trusted creators in your niche - driven by authenticity, not inflated impressions.",
  },
  {
    id: 5,
    number: 5,
    title: " Data-Backed Growth Analytics",
    description:
      "Track airdrop efficiency, wallet behavior, retention rates and social sentiment - then optimize in real-time.",
  },
  {
    id: 6,
    number: 6,
    title: "SEO & Web3 PR",
    description:
      "Dominate organic search for crypto keywords and place stories where early adopters actually read - Bankless, Decrypt, CoinDesk and more.",
  },
];

const Web3MarketingOffers = () => {
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
            src={offerimg}
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

export default Web3MarketingOffers;
