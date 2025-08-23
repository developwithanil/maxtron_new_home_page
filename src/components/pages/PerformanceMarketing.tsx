import MarketingServices from "../elementalComponent/MarketingServices";
import MarketingChoose from "../elementalComponent/MarketingChoose";
import { circlebg } from "../Web3VectorImage";

const PerformanceMarketing = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full max-w-[96rem] mx-auto">
        <div
          className="w-full flex flex-col lg:flex-row mx-auto justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative"
          style={{
            background: "linear-gradient(0deg, #AD80DF 10.32%, #FBF8FF 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
          <div className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-12 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-4">
            <p className="text-[#2A2A2A] text-center font-['Switzer'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight px-2 sm:px-4 md:px-6 lg:px-8">
              Performance Marketing Services
            </p>
            <p className="text-[#2A2A2A] text-center font-normal  font-openSansHebrew text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl tracking-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              In today's digital-first world, every brand wants growth that is
              measurable, scalable, and profitable. At maxtron, we specialize in
              Performance Marketing — a results-driven approach where every
              campaign is optimized to deliver the maximum return on investment
              (ROI).
            </p>
          </div>
        </div>
        <div className="w-full max-w-[96rem] mx-auto relative">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
          {circlebg()}
        </div>
      </div>

      <MarketingServices />
      <MarketingChoose />
    </div>
  );
};

export default PerformanceMarketing;
