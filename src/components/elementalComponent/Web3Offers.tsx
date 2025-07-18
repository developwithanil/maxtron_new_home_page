import React from "react";

interface CardProps {
  title: string;
  description: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, description, number }) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col justify-start p-4 relative pb-16 min-h-80 hover:scale-95 transition-all duration-300">
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
    title: "AI Automation for Smart Workflows",
    description:
      "Automate KYC, AML and user onboarding with intelligent workflows that adapt to chain-level data and regional compliance.",
  },
  {
    id: 2,
    number: 2,
    title: "Smart Contract Monitoring & Alerts",
    description:
      "Stay ahead of exploits, governance shifts or suspicious behaviors via real-time contract analytics and AI-trained anomaly detection.",
  },
  {
    id: 3,
    number: 3,
    title: "Cross-Chain Data Intelligence",
    description:
      "Unified dashboards and AI summarization across Ethereum, Solana, BNB and more - so you don’t have to choose just one ecosystem.",
  },
  {
    id: 4,
    number: 4,
    title: "No-Code Web3 Integrations",
    description:
      "Plug-and-play modules for integrating wallets, NFTs, on-chain activity tracking and DeFi protocols into your platform - no developer bottleneck.",
  },
  {
    id: 5,
    number: 5,
    title: "Governance Automation",
    description:
      "Automate DAO proposals, voter notifications or treasury disbursements with customizable triggers and GPT-powered decision-making summaries.",
  },
  {
    id: 6,
    number: 6,
    title: "End-to-End Design & Development",
    description:
      "From user-centric dApp design to scalable smart contract architecture - Maxtron builds Web3 products that perform, engage and scale.",
  },
];

const Web3Offers = () => {
  return (
    <div className="relative p-5 md:p-8 lg:p-11 xl:p-16 inset-0  text-center max-w-[96rem] mx-auto">
      <h2
        className="text-[#2A2A2A] justify-center [font-family: Switzer]  text-xl md:text-3xl
        lg:text-5xl xl:text-5xl text-center font-normal mb-12"
      >
        What We Offer to Web3 Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 ">
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
  );
};

export default Web3Offers;
