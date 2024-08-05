import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div
      style={{ backgroundImage: "url(/cardbg.svg)" }}
      className=" text-[#1E1E1E] bg-cover bg-center p-4 rounded-lg shadow-md"
    >
      <div className="flex flex-col  items-start p-2">
        <div className="text-xl ">{icon}</div>

        <h3 className="text-xl font-OpenSans text-left font-bold">{title}</h3>

        <p className="bg-[#F7F4F480] my-4 p-2 flex items-center justify-stretch font-normal text-sm rounded-lg font-OpenSans">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
