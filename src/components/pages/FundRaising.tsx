import ContactAndSubscribe from "../elementalComponent/ContactAndSubscribe";
import fund from "../../assets/case/fund.svg";
import { Link } from "react-router-dom";

const FundRaising = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 md:px-8 xl:px-6 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-7 md:gap-9 lg:gap-10">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center items-start px-2 sm:px-3 md:px-4 lg:px-5 xl:px-7 gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1
                className="text-transparent bg-clip-text font-openSansHebrew text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[110%]"
                style={{
                  backgroundImage:
                 "linear-gradient(90deg, #2A2A2A 0%, #7A35C1 54.42%)",
                }}
              >
                Raise Capital
              </h1>
              <h1 className="text-[#2A2A2A] font-openSansHebrew text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[110%]">
                for the Future You're Building
              </h1>
            </div>

            <p className="text-[#3B3C4A] font-openSansHebrew text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-[160%]">
              We back founders building in <span className="text-[#2A2A2A] font-semibold">Web3, AI, Quantum, and Emerging Tech -</span> with token fundraising, line of credit, legal support, and a global VC network. Now accepting early pitches for Freedom Capital, our upcoming founder-first Web3 fund
            </p>
            <div className="flex flex-col justify-center  gap-2 sm:gap-2.5 w-auto ">
              <Link to={"#"} className="flex items-center justify-center w-full sm:w-auto bg-[#7A35C1] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#6a2eb0] transition-colors duration-300">
                <p className='text-[#FFF] text-center font-openSansHebrew text-sm sm:text-base font-normal leading-[160%]'>
                  Start Your Fundraise
                </p>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 mt-6 lg:mt-0">
            <img
              src={fund}
              alt="Raise Capital"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
      </div>

      <ContactAndSubscribe />
    </div>
  );
};

export default FundRaising;
