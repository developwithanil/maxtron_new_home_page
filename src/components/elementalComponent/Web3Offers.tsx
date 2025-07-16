import React from "react";

interface CardProps {
  title: string;
  description: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, description, number }) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col justify-start p-4 relative pb-16 ">
      <div>
        <h3 className="text-xl font-medium mb-4 text-[#2A2A2A] [font-family:Switzer] items-start text-start">
          {title}
        </h3>
        <p className="text-base text-[#171717] font-openSansHebrew items-start text-start">
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
    title: "Blockchain & Web3",
    description: "Solidity, Ethereum, Smart Contracts, NFTs, DeFi, Layer-2s",
  },
  {
    id: 2,
    number: 2,
    title: "Web Development",
    description: "MERN, MEAN, JAMstack, Headless CMS, SEO-optimized builds.",
  },
  {
    id: 3,
    number: 3,
    title: "Mobile App Development",
    description: "iOS, Android, Flutter, React Native",
  },
  {
    id: 4,
    number: 4,
    title: "Game Development",
    description: "Unity, Unreal, WebGL, Multiplayer Infra, AR/VR",
  },
  {
    id: 5,
    number: 5,
    title: "Full Stack Teams",
    description:
      "Combine Frontend + Backend + DevOps + QA for full delivery units",
  },
  {
    id: 6,
    number: 6,
    title: "Cloud & DevOps",
    description: "CI/CD, Kubernetes, AWS, Terraform, Infrastructure as Code",
  },
  {
    id: 7,
    number: 7,
    title: "AI/ML & Data",
    description:
      "Python, TensorFlow, LLM Integrations, RAG, LangChain, Data Pipelines",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
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
