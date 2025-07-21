import usecase from "../../assets/usecase.webp";

const marketingStepsData = [
  {
    number: "1",
    title: "DeFi platforms needing long-term liquidity providers",
    description:
      "Automate liquidity risk checks, user behavior monitoring and tokenomics optimization.",
  },
  {
    number: "2",
    title: "NFT marketplaces targeting creator ecosystems",
    description: "Track ownership, enforce royalties, detect fraud.",
  },
  {
    number: "3",
    title: "DAOs looking to activate governance",
    description:
      "Streamline proposals, auto-generate meeting summaries and smartly route tasks.",
  },
  {
    number: "4",
    title: "Web3 infra and tooling solving B2B pain points",
    description:
      "Compliance automation, real-time trading analytics, fraud detection.",
  },
  {
    number: "5",
    title: "Token projects prepping for CEX/DEX listings",
    description:
      "Run health checks, node analytics and validator coordination at scale.",
  },
];

const UseCase = () => {
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
            <div className="bg-[#F5F5F5] text-[#1D1B33]  w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-xl flex-shrink-0 mt-1">
              {step.number}
            </div>
            <div className="flex-grow">
              <h3 className="text-sm lg:text-lg md:text-lg xl:text-lg text-[#2A2A2A] mb-1 font-semibold lg:mb-2 font-lexendDeca">
                {step.title}
              </h3>
              <p className="text-[#2A2A2A] text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCase;
