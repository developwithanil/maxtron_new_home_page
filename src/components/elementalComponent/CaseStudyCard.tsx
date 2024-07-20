import React from "react";

interface CaseStudyCardProps {
  projectName: string;
  title: string;
  description: string;
  imageUrl: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  projectName,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-purple-200 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{projectName}</h3>
      <div className="flex items-center mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h4 className="text-md font-semibold">{title}</h4>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
