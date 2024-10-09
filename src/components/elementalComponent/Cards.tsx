import React from "react";

interface CardsProps {
  title: string;
  description: string[];
  imageUrl: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const Cards: React.FC<CardsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#EBDCFB] text-[#1E1E1E] p-8 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl rounded-2xl shadow-lg border-[#D3C4E8] border-[1.5px]">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-20 h-20 rounded-full shadow-md"
          />
        </div>

        <h3 className="font-semibold text-[#4E009C] mb-4 text-left text-sm">
          {title}
        </h3>

        <ul className="list-disc text-left text-[#4E009C] font-normal text-sm space-y-1">
          {description.map((item, index) => (
            <li key={index} className="pl-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Cards);
