import React from "react";
import { useParams } from "react-router-dom";
import MarketingCaseStudyTemplate from "../elementalComponent/MarketingCaseStudyTemplate";
import { marketingCaseStudiesData } from "../elementalComponent/marketingCaseStudyData";
import ContactForm from "../ContactForm";

const MarketingCaseStudyPage = () => {
  const { casestudyName } = useParams<{ casestudyName: string }>();

  const caseStudyData = casestudyName ? marketingCaseStudiesData[casestudyName] : null;

  if (!caseStudyData) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700">Case study not found</h2>
      </div>
    );
  }

  return (
    <>
      <MarketingCaseStudyTemplate data={caseStudyData} />
      <ContactForm sectionClassName="pb-8 md:pb-14 pt-4 md:pt-6 px-4 bg-white" />
    </>
  );
};

export default MarketingCaseStudyPage;
