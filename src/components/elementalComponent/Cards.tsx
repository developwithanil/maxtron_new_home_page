import React from "react";

interface CardsProps {
  title: string;

  description: string;
  icon: React.ReactNode;
}

const Cards: React.FC<CardsProps> = ({ title, description, icon }) => {
  return (
    <div className=" text-[#1E1E1E] p-2 rounded-lg shadow-lg border-[#9B9696] border-[2px]">
      <div className="flex flex-col space-y-4 items-center justify-center p-2">
        <div className="text-xl ">{icon}</div>

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
