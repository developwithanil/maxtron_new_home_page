"use client";
import React from "react";
import { led, licensed, global } from "../ComplianceVector";

const featuresData = [
  {
    number: "1",
    Icon: led,
    title: "Led by Compliance Veterans",
    points: [
      "Former SEC regulatory experts in leadership",
      "Global legal advisors with deep experience in crypto, AI, DeFi",
      "Knowledge of inter-country regulations and cross-border data laws",
    ],
  },
  {
    number: "2",
    Icon: licensed,
    title: "Licensed & Trusted",
    points: [
      "DIFC-licensed for fintech operations",
      "Built-in legal protocols for financial-grade asset security",
      "Designed for regulated environments like healthcare, finance, and banking",
    ],
  },
  {
    number: "3",
    Icon: global,
    title: "Global Legal Infrastructure",
    points: [
      "Real-time monitoring of U.S., EU, UAE, and APAC regulations",
      "Structured asset frameworks that comply with FATF, AML, and KYC laws",
      "Integrated country-by-country compliance mapping.",
    ],
  },
];

const MaxtronLead = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-12 lg:gap-20 p-5 md:p-8 lg:p-10 text-left max-w-[96rem] mx-auto">
      <div className="md:w-1/2">
        <h1
          className="font-[switzer] font-medium text-[#2A2A2A] lg:text-5xl sm:text-3xl
          text-xl leading-tight"
        >
          Why Maxtron is Built Different
        </h1>
      </div>

      <div className="md:w-1/2">
        <div className="relative">
          {featuresData.map((feature, index) => (
            <div key={feature.number} className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#1314161F] bg-white flex items-center justify-center text-[#818688] font-semibold z-10">
                  {feature.number}
                </div>

                {index < featuresData.length - 1 && (
                  <div className="w-px h-full bg-gray-200 "></div>
                )}
              </div>

              <div className="pb-16 transform -translate-y-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-black text-white p-3 rounded-xl">
                    <div className="w-6 h-6">
                      <feature.Icon />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-medium text-[#27282B] font-[switzer]">
                    {feature.title}
                  </h3>
                </div>
                <ul className="list-disc  list-inside text-[#505355] font-openSansHebrew pl-4 space-y-1 text-sm">
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaxtronLead;
