"use client";
import React, { ComponentType } from "react";
import {
  currency,
  customer,
  documentcheck,
  global,
  landmark,
  maintenance,
  shareplay,
  star as Star,
  software,
  finance2,
  bankingicon1,
  verify,
} from "../ComplianceVector";

const leftFeatures = [
  { icon: bankingicon1, text: "SEC-experienced leadership" },
  { icon: documentcheck, text: "DIFC-licensed operations" },
  {
    icon: global,
    text: "Global legal coverage across 30+ jurisdictions",
  },
  {
    icon: shareplay,
    text: "Built-in compliance with every product we deploy",
  },
  {
    icon: software,
    text: "Seamless integration with AI, DeFi, and digital finance",
  },
  {
    icon: landmark,
    text: "Designed for institutions, adaptable for startups",
  },
];
const policyCardsColumn1 = [
  {
    icon: verify,
    title: "SEC",
    description: "Create Safe Harbors for community governed coins tokens",
  },
  {
    icon: currency,
    title: "IRS",
    description:
      "Clarify tax rules, and set crypto exchange reporting standards",
  },
  {
    icon: finance2,
    title: "(Fed/OCC)",
    description:
      "Ensure financial stability with clear Stablecoin rules & careful banking integration",
  },
];
const policyCardsColumn2 = [
  {
    icon: maintenance,
    title: "CONGRESS",
    description: "Introduce DAOs as a new organizational structure",
  },
  {
    icon: landmark,
    title: "DOJ / CONGRESS",
    description: "Allow for state and city-level experimentation",
  },
  {
    icon: software,
    title: "FINCEN",
    description:
      "Set clear guidelines on KYC/AML reporting while preserving privacy",
  },
  {
    icon: customer,
    title: "THE WEB3 COMMISSION",
    description: "Harmonize exchange oversight",
  },
];

interface PolicyCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const PolicyCard = ({ icon: Icon, title, description }: PolicyCardProps) => {
  return (
    <div className="relative pt-10 w-full max-w-xs">
      <div
        className="relative bg-[#FBF8FF] rounded-[26px]   p-6 "
        style={{ minHeight: "260px" }}
      >
        <div className="relative z-10 flex flex-col justify-end h-full">
          <div className="pt-16">
            <p className="text-[#7A35C1] text-lg leading-tight font-normal font-[switzer] mb-2 mt-3">
              {title}
            </p>
            <p className="text-[#2A2A2A] text-[16px] leading-relaxed font-[switzer] font-normal">
              {description}
            </p>
          </div>
        </div>

        <div className="absolute top-5 right-5 text-gray-800 text-2xl font-bold h-6 w-6">
          <Star />
        </div>

        <div
          className="absolute top-0 left-0 w-[84px] h-[72px]  rounded-2xl bg-white z-0"
          style={{ borderRadius: "26px 0px 22px 0px" }}
        ></div>
      </div>

      <div className="absolute top-8 left-2 z-20 ">
        <div className="bg-black text-white p-2 rounded-2xl shadow-lg flex items-center justify-center w-14 h-14">
          <div className="w-9 h-9 flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

const ComplianceChoose = () => {
  return (
    <div className="bg-white relative py-5 sm:py-16 md:py-16 lg:py-16 xl:py-16 ">
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="policy-card-shape" clipPathUnits="objectBoundingBox">
            <path d="M 0.25,0 C 0.28,0,0.3,0.01,0.3,0.05 L 0.3,0.18 C 0.3,0.22,0.28,0.23,0.25,0.23 H 0.08 C 0.04,0.23,0,0.27,0,0.32 V 0.92 C 0,0.96,0.04,1,0.08,1 H 0.92 C 0.96,1,1,0.96,1,0.92 V 0.08 C 1,0.04,0.96,0,0.92,0 H 0.3" />
          </clipPath>
        </defs>
      </svg>

      <style>
        {`
          @keyframes scroll-vertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-vertical {
            animation: scroll-vertical 45s linear infinite;
          }
          .scrolling-container:hover .animate-scroll-vertical {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="relative flex flex-col md:flex-row gap-12 lg:gap-24 pl-5 pr-6 md:pl-8 md:pr-8 lg:pl-10 lg:pr-12 text-left max-w-[96rem] mx-auto">
        <div className="w-full md:w-1/2 lg:w-1/2 flex-shrink-0">
          <h2 className="font-normal  font-[switzer] text-black text-lg lg:text-5xl leading-none mb-16">
            Why Choose Maxtron
          </h2>
          <div className="space-y-6">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="bg-black text-white p-2 rounded-xl flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <feature.icon />
                  </div>
                </div>
                <span className="text-gray-800 text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-8/12 flex-grow relative scrolling-container h-[600px] overflow-hidden">
          <div className="grid grid-cols-2 gap-6 animate-scroll-vertical">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="space-y-6 flex flex-col w-full pb-8 pt-20">
                  {policyCardsColumn1.map((card, idx) => (
                    <PolicyCard key={`c1-${i}-${idx}`} {...card} />
                  ))}
                </div>
                <div className="space-y-6 flex flex-col w-full ">
                  {policyCardsColumn2.map((card, idx) => (
                    <PolicyCard key={`c2-${i}-${idx}`} {...card} />
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceChoose;
