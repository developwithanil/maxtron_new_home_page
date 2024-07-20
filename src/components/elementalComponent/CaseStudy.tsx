import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const caseStudyData = [
  {
    projectName: "Project XYZ",
    title: "Title",
    description: "Description",
    imageUrl: "/path-to-image1.jpg",
  },
  {
    projectName: "Project LMN",
    title: "Title",
    description: "Description",
    imageUrl: "/path-to-image2.jpg",
  },
  {
    projectName: "Project HHH",
    title: "Title",
    description: "Description",
    imageUrl: "/path-to-image3.jpg",
  },
  {
    projectName: "Project WDB",
    title: "Title",
    description: "Description",
    imageUrl: "/path-to-image4.jpg",
  },
  {
    projectName: "Project VHB",
    title: "Title",
    description: "Description",
    imageUrl: "/path-to-image5.jpg",
  },
  {
    projectName: "Project JJJ",
    title: "Title",
    description: "Description",
    imageUrl: "/path-to-image6.jpg",
  },
];

const CaseStudy: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-700 to-purple-900 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Case Study</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudyData.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              projectName={caseStudy.projectName}
              title={caseStudy.title}
              description={caseStudy.description}
              imageUrl={caseStudy.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
