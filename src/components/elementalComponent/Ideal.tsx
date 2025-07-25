import React from 'react';
import robotImg from "../../assets/ai_img/Shutterstock_01.webp";

const idealForData = [
  { id: 1, title: "Web3 startups launching new tokens or DAOs.", number: "1" },
  { id: 2, title: "SaaS companies needing product content at scale.", number: "2" },
  { id: 3, title: "Agencies looking to automate client deliverables", number: "3" },
  { id: 4, title: "Marketing teams under pressure to publish more, faster", number: "4" },
  { id: 5, title: "Founders who want consistent, high-quality content without overhead", number: "5" },
  { id: 6, title: "And Much More..", number: "6" }
];

const IdealFor = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 py-12 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
      
      {/* Left: Robot Image with "Ideal For" above it */}
      <div className="relative flex-shrink-0 w-[360px] h-[440px] flex justify-start items-start">
        {/* "Ideal For" heading with more gap + larger font */}
        <h2 className="absolute -top-14 left-0 text-[32px] font-semibold font-Switzer text-black">
          Ideal For
        </h2>

        {/* Image */}
        <img
          src={robotImg}
          alt="AI Robot illustration"
          className="w-[260px] h-[320px] object-fill object-left-top rounded-[12px]"
        />
      </div>

      {/* Right: Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {idealForData.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-100 w-[320px] sm:w-[340px] h-[180px] flex px-5 sm:px-6 font-Switzer sans text-[14px] bold leading-snug text-black"
          >
            <div className="z-10 w-full">
              {item.title}
            </div>
            <span
              className="absolute bottom-0 right-0"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '36px',
                background: '#7B3AED',
                color: 'white',
                fontFamily: 'Switzer',
                fontWeight: 400,
                fontSize: '16px',
              }}
            >
              {item.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdealFor;



