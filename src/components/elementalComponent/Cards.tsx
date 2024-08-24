import React from "react";

interface CardsProps {
  title: string;
  description: string[];
  imageUrl: string;
}

const Cards: React.FC<CardsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="text-[#1E1E1E] p-2 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg rounded-lg shadow-lg border-[#9B9696] border-[2px]">
      <div className="flex flex-col p-2">
        <div className="flex justify-center mb-4"> {/* Center the image */}
          <img
            src={imageUrl}
            alt={title}
            className="w-10 h-10 rounded-full"
          />
        </div>

        <h3 className="text-sm font-OpenSans text-[#4E009C] mb-4 text-left font-bold">
          {title}
        </h3>

        {description.map((item, index) => (
          <p
            key={index}
            className="text-left text-[#4E009C] font-normal text-sm rounded-lg font-OpenSans"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cards;
