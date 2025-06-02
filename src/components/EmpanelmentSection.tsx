import React, { useState } from "react";
import { industryData } from "../../src/components/industryData";

const CircleIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div
    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 shrink-0 transition-colors duration-300
      ${
        isActive ? "border-purple-500" : "border-gray-600 hover:border-gray-400"
      }`}
  ></div>
);

const EmpanelmentSection = () => {
  const [activeIndustryId, setActiveIndustryId] = useState(
    industryData[industryData.length - 1].id
  );

  const selectedIndustry = industryData.find(
    (industry) => industry.id === activeIndustryId
  );

  return (
    <div className="  p-5 md:p-8 lg:p-11 xl:p-16 ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="pt-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2A2A2A]  mb-6 [font-family:Switzer]">
              Fast-Track Empanelment & Onboarding
            </h2>
            <p
              className="text-gray-400  text-[14px] md:text-3xl
        lg:text-3xl xl:text-3xl mb-3 font-openSansHebrew leading-relaxed"
            >
              We're already empaneled or in the procurement pipeline of major
              clients across
            </p>
            <p className="text-gray-400 text-base lg:text-lg font-openSansHebrew leading-relaxed">
              We support MSA, SoW, NDA, SLA agreements and are ISO-compliant,
              GDPR-aligned.
            </p>
          </div>

          <div>
            <ul>
              {industryData.map((industry) => (
                <li
                  key={industry.id}
                  onClick={() => setActiveIndustryId(industry.id)}
                  className={`flex items-center py-3 cursor-pointer border-b border-gray-700 transition-colors duration-300
                    ${
                      activeIndustryId === industry.id
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-gray-100"
                    }`}
                >
                  <CircleIcon isActive={activeIndustryId === industry.id} />
                  <span className="text-lg font-medium [font-family:Switzer]">
                    {industry.title}
                  </span>
                </li>
              ))}
            </ul>

            {selectedIndustry && (
              <div className="mt-8 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={selectedIndustry.imageSrc}
                  alt={selectedIndustry.altText}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpanelmentSection;
