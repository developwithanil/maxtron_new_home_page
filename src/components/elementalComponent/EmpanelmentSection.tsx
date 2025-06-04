import React, { useState } from "react";
import Banking from "../../assets/augmentation/EmpanelmentSection/Banking.svg";
import Retail from "../../assets/augmentation/EmpanelmentSection/Retail.svg";
import Gaming from "../../assets/augmentation/EmpanelmentSection/Gaming.svg";
import SaaS from "../../assets/augmentation/EmpanelmentSection/SaaS.svg";
import Healthcare from "../../assets/augmentation/EmpanelmentSection/healthcare.svg";

const industryData = [
  {
    id: 1,
    title: "Banking, Financial Services & Insurance",
    image: Banking,
    altText: "Banking",
  },
  {
    id: 2,
    title: "Retail & E-commerce",
    image: Retail,
    altText: "Retail",
  },
  {
    id: 3,
    title: "Gaming Studios",
    image: Gaming,
    altText: "Gaming",
  },
  {
    id: 4,
    title: "SaaS & Startups",
    image: SaaS,
    altText: "SaaS",
  },
  {
    id: 5,
    title: "Healthcare & MedTech",
    image: Healthcare,
    altText: "Healthcare & MedTech",
  },
];

const CircleIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div
    className={`w-8 h-8 rounded-full border flex items-center justify-center mr-4 
      ${
        isActive
          ? "border-[#BEBCCA]"
          : "border-[#BEBCCA] group-hover:border-[#BEBCCA] text-[#2A2A2A]"
      }`}
  >
    <span
      className={`text-sm font-semibold  
        ${
          isActive
            ? "text-[#2A2A2A]"
            : "text-[#2A2A2A] group-hover:text-[#7A35C1]"
        }`}
    >
      +
    </span>
  </div>
);

const EmpanelmentSection = () => {
  const [activeIndustryId, setActiveIndustryId] = useState(
    industryData[industryData.length - 1].id
  );

  const selectedIndustry = industryData.find(
    (industry) => industry.id === activeIndustryId
  );

  return (
    <div className=" text-white  p-5 md:p-12 lg:p-16 xl:p-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl  text-[#2A2A2A] font-[Switzer] mb-6 font-bold">
            Fast-Track Empanelment & Onboarding
          </h2>
          <p className="mb-4 font-openSansHebrew text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg font-normal">
            We're already empaneled or in the procurement pipeline of major
            clients across
          </p>
          <p className="font-openSansHebrew text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg font-normal">
            We support{" "}
            <strong className="text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg ">
              MSA, SoW, NDA, SLA agreements
            </strong>{" "}
            and are{" "}
            <strong className="text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg">
              ISO-compliant, GDPR-aligned.
            </strong>
          </p>
        </div>

        <div>
          <ul className="mb-6">
            {industryData.map((industry) => (
              <li
                key={industry.id}
                onClick={() => setActiveIndustryId(industry.id)}
                className={`group flex items-center py-3 cursor-pointer border-b border-[#BEBCCA] transition-colors duration-300 ${
                  activeIndustryId === industry.id
                    ? "text-[#7A35C1]"
                    : "text-[#79748A] hover:text-[#7A35C1]"
                }`}
              >
                <CircleIcon isActive={activeIndustryId === industry.id} />
                <span className="text-base font-normal font-openSansHebrew md:text-xl lg:text-xl xl:text-xl ">
                  {industry.title}
                </span>
              </li>
            ))}
          </ul>

          {selectedIndustry && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.altText}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpanelmentSection;
