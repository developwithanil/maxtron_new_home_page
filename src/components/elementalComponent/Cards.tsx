import React from "react";

interface CardsProps {
  title: string;
  description: string[];
  imageUrl: string;
}

const Cards: React.FC<CardsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#ca6ce5] text-[#1E1E1E] p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl rounded-xl shadow-md border-[#8A7B8B] border-[1.5px]">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-16 h-16 rounded-full"
          />
        </div>

        <h3 className="text-lg font-semibold text-[#2e1730] mb-4 text-center font-Poppins">
          {title}
        </h3>

        <ul className="list-disc text-justify mx-4 text-[#2e1730] font-light text-sm font-OpenSans space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
