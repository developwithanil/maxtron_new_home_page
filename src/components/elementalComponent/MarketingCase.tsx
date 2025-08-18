import usecase from "../../assets/usecase.webp";

const marketingStepsData = [
  {
    number: "1",
    title: "DeFi platforms",
    description:
      "needing durable liquidity providers",
  },
  {
    number: "2",
    title: "NFT marketplaces",
    description: "activating creator ecosystems",
  },
  {
    number: "3",
    title: "DAOs",
    description:
      "increasing proposals, votes, and contributor funnels",
  },
  {
    number: "4",
    title: "Web3 infrastructure & tooling",
    description:
      "solving B2B pain points",
  },
  {
    number: "5",
    title: "Token projects",
    description:
      "prepping for CEX/DEX listings and post‑listing momentum",
  },
];

const MarketingCase = () => {
  return (
    <div className="max-w-[96rem]  mx-auto p-5 md:p-16 lg:p-16 xl:p-16 text-white flex flex-col md:flex-row w-full md:gap-28 gap-5">
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8">
        <h2 className="text-[20px] sm:text-[32px] lg:text-[48px] xl:text-[48px] font-medium text-[#2A2A2A] leading-tight">
          Where We Excel
        </h2>

        <div className="w-full flex justify-center items-center  ">
          <div className="w-full max-w-xs sm:max-w-xs flex justify-center items-center ">
            <img
              src={usecase}
              alt="Staff Augmentation Process Diagram"
              className="w-full h-auto m-0 p-0"
            />
          </div>
        </div>
      </div>

      <div
        className="md:w-1/2 w-full flex flex-col 
                      space-y-5 sm:space-y-5 lg:space-y-5 
                     "
      >
        {marketingStepsData.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 ">
            <div className="bg-[#F5F5F5] text-[#1D1B33]  w-7 h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center text-xl lg:text-xl flex-shrink-0 mt-1">
              {step.number}
            </div>
            <div className="flex gap-1 mt-2">
              <h3 className="text-sm lg:text-lg md:text-lg xl:text-lg text-[#2A2A2A] mb-1 font-semibold lg:mb-2 font-lexendDeca">
                {step.title}
              </h3>
              <p className="text-[#2A2A2A] text-sm sm:text-base mt-[1px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingCase;
