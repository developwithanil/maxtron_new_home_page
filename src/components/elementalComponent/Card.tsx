import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, subtitle, description, icon }) => {
  return (
    <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-4xl">{icon}</div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <h4 className="text-lg">{subtitle}</h4>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
