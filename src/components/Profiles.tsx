import React from "react";
import icon1 from "../assets/augmentation/blockchain.svg";

interface CardProps {
  status: string;
  title: string;
  description: string;
  experience: string;
  timings: string;
}

const Card: React.FC<CardProps> = ({
  status,
  title,
  description,
  experience,
  timings,
}) => {
  return (
    <div className="border border-[#DFDEE7] rounded-[24px] flex flex-col  justify-start p-4">
      <div className=" mb-8 bg-[#F5F5F5] flex items-start justify-start p-2  rounded-lg">
        {status}
      </div>
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-[#2A2A2A] [font-family:Switzer]">
            {title}
          </h3>
          <p className="text-sm text-[#79748A]">{experience}</p>
        </div>
        <p>{timings}</p>
        <p className="text-sm text-[#79748A] font-openSansHebrew items-start text-start ">
          {description}
        </p>
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    icon: icon1,
    title: "Blockchain & Web3",
    status: "Expert",
    experience: "5 years",
    timings: "Full-time",
    description: "Solidity, Ethereum, Smart Contracts, NFTs, DeFi, Layer-2s",
  },
  {
    id: 2,
    icon: icon1,
    title: "Blockchain & Web3",
    status: "Expert",
    experience: "5 years",
    timings: "Full-time",
    description: "Solidity, Ethereum, Smart Contracts, NFTs, DeFi, Layer-2s",
  },
  {
    id: 3,
    icon: icon1,
    title: "Blockchain & Web3",
    status: "Expert",
    experience: "5 years",
    timings: "Full-time",
    description: "Solidity, Ethereum, Smart Contracts, NFTs, DeFi, Layer-2s",
  },
];
// --- End of ICONS & CARD DATA ---

const Profiles = () => {
  return (
    <div className="xl:p-16 md:p-16 lg:p-16 sm:p-5">
      <h1 className="text-[#2A2A2A] justify-center [font-family: Switzer] text-2xl text-center font-bold mb-12">
        Sample Developer Profiles from Our Bench{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            status={card.status}
            title={card.title}
            description={card.description}
            timings={card.timings}
            experience={card.experience}
          />
        ))}
      </div>
      <div className="p-12">
        <div className="text-center justify-center items-center  bg-[#7A35C1] text-[#FFFFFF] py-3 px-8">
          <button>Request for a profile you need</button>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
