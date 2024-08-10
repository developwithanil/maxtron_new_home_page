import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  // icon: React.ReactNode;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div
      style={{ backgroundImage: "url(/cardbg.svg)" }}
      className=" text-[#1E1E1E] bg-cover bg-center p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
    >
      <div className="flex flex-col items-start p-2">
        <div className="text-xl mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-10 h-10 rounded-full mr-4"
          />
        </div>

        <h3 className="text-xl font-OpenSans text-left font-bold">{title}</h3>

        <p className="bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
