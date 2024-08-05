import React from "react";

interface CardsProps {
  title: string;
  description: string[];
  imageUrl: string;
}

const Cards: React.FC<CardsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className=" text-[#1E1E1E] p-2 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg rounded-lg shadow-lg border-[#9B9696] border-[2px]">
      <div className="flex flex-col space-y-4 items-center justify-center p-2">
        <div className="text-xl ">
          <img
            src={imageUrl}
            alt={title}
            className="w-10 h-10 rounded-full mr-4"
          />
        </div>

        <h3 className="text-sm font-OpenSans text-[#4E009C] text-left font-bold">
          {title}
        </h3>

        <p className="flex items-center text-[#4E009C] justify-stretch font-normal text-sm rounded-lg font-OpenSans">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
