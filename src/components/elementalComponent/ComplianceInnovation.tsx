"use client";
import React from "react";
import bg from "../../assets/compliance/compliancebg.webp";
import {
  rwa as Icon1,
  crypto,
  decentralized,
  medicine,
} from "../ComplianceVector";
import frame1 from "../../assets/compliance/frame1.webp";
import frame2 from "../../assets/compliance/frame2.webp";

import { Link } from "react-router-dom";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>
);

interface CardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  background?: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  background,
}) => {
  return (
    <div className="bg-[#FBF8FF] p-4 sm:p-6 lg:p-8 flex flex-col items-start gap-4 sm:gap-6 relative min-h-[280px] sm:min-h-[320px]">
      <div className="h-10 w-10 sm:h-12 sm:w-12">
        <Icon />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-start text-[#131416] [font-family:Switzer]">
        {title}
      </h3>
      <p className="text-[#131416] font-openSansHebrew text-sm sm:text-base lg:text-lg text-start font-normal mb-8 sm:mb-12 lg:mb-16">
        {description}
      </p>
      {background && (
        <div
          className="absolute bottom-0 right-0 w-full h-24 sm:h-28 lg:h-32"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    icon: decentralized,
    background: frame1,
    title: "Decentralized Hedge Fund Infrastructure",
    description: "",
  },
  {
    id: 2,
    icon: crypto,
    background: frame2,
    title: "CRYPTO Compliance Monitoring ",
    description:
      " Preclearance checks of investment portfolio guidelines & restrictions",
  },
  {
    id: 3,
    icon: medicine,
    background: frame1,
    title: "AI-Powered Medical Data Solutions",
    description: " All while meeting the toughest legal standards globally.",
  },
];

const ComplianceInnovation = () => {
  return (
    <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 xl:p-16 text-center max-w-[96rem] mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        <div className="w-full lg:w-1/2 bg-black p-4 sm:p-6 lg:p-9">
          <h1 className="text-[#FFFFFF] [font-family: Switzer] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-start font-normal mb-3 sm:mb-4">
            Where Compliance Meets Innovation
          </h1>
          <p className="text-[#FFFFFF] font-[switzer] text-sm sm:text-base lg:text-lg text-start font-normal mb-8 sm:mb-12 lg:mb-16">
            We help shape the future of regulated digital innovation.
          </p>
          <div className="items-start flex flex-row justify-start text-start">
            <Link to="/contact">
              <button className="bg-[#7A35C1] text-white text-sm sm:text-base font-[switzer] p-3 sm:p-4 rounded-xl text-start flex flex-row justify-start items-center hover:bg-[#D8D0F4] hover:text-black transition-transform transform hover:scale-105">
                CONTACT US
                <ArrowRightIcon />
              </button>
            </Link>
          </div>
        </div>

        <div
          className="w-full lg:w-1/2 bg-[#FBF8FF] p-4 sm:p-6 lg:p-8"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-row gap-8 sm:gap-12 lg:gap-16 mb-3">
            <Icon1 />
          </div>
          <p className="text-[#131416] font-[switzer] text-sm sm:text-base lg:text-lg xl:text-2xl text-start font-normal mb-8 sm:mb-12 lg:mb-16">
            Gold & RWA Tokenization Platforms
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            background={card.background.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default ComplianceInnovation;
