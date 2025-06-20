import { Link } from "react-router-dom";
import affiliaterightlanding from "../../assets/case/affiliaterightlanding.webp";
import darkFullLogo from "../../assets/darkFullLogo.png"; 
import { deals, offer, report } from "../AffiliateVectorImage";


const items = [
  {
    icon: deals,
    title: "Up to 30% Commission on Closed Deals",
    description: "Get rewarded for real value. Unlike most programs, we pay based on actual deal closures, meaning higher payouts—often $1,000+ per referral.",
  },
  {
    icon: report,
    title: "Transparent Tracking & Reporting",
    description: "Stay in control with real-time dashboards, performance insights, and clear attribution across the full sales cycle.",
  },
  {
    icon: offer,
    title: "Premium B2B Offerings",
    description: "We specialize in advanced innovation solutions for mid-to-enterprise-level companies—giving you the opportunity to earn from high-value deals with long-term customers.",
  },
  
]

const AffiliateProgramPage = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[96rem] mx-auto pl-4 sm:pl-7 md:pl-12 xl:pl-14 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
        <div className="flex flex-col-reverse lg:flex-row gap-5 sm:gap-7 md:gap-9 lg:gap-10">
          {/* Text Content */}
          <div className="flex-1 flex flex-col  justify-center items-start px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1
                className=" font-[Switzer] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[110%] mb-2"
               
              >
                Turn your network into
              </h1>
            <h1 className="text-[#2A2A2A] font-[Switzer] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[110%]">
  <span className="flex items-center gap-2 flex-wrap">
    <span className="bg-[#F3EBFC] px-[7px] lg:px-[11px] py-1 rounded-xl text-[#7A35C1] text-center w-fit">revenue</span>
    with
    <span className="flex items-center bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.14)] px-2 lg:px-4 py-1 rounded-xl">
      <img src={darkFullLogo} alt="Maxtron logo" className="w-[110px] md:w-[130px] lg:w-[141.857px] h-9 md:h-10 lg:h-12" />
    </span>
  </span>
</h1>
            </div>

           <p className=" text-[#79748A] font-openSansHebrew text-base md:text-lg lg:text-xl font-normal leading-[160%]">Earn up to 30% commission for every deal you help close with Maxtron Innovations.</p>
          <div className="flex justify-center items-center w-fit border border-[#7A35C1] px-6 py-2 lg:py-3 rounded-lg transition duration-300 hover:bg-[#7A35C1] group cursor-pointer">
  <Link
    to="/contact"
    className="text-[#7A35C1] group-hover:text-white text-base font-openSansHebrew font-medium leading-[160%] transition-colors duration-300 tracking-[0.3px]"
  >
   Become an affiliate
  </Link>

</div>
<p className="text-start text-sm sm:text-base md:text-lg text-[#363348] leading-[140%] tracking-wide font-openSansHebrew ">
  Already a partner?{" "}
  <Link
    to="/contact"
    className="text-[#79748A] font-semibold underline underline-offset-2 hover:text-[#7A35C1] transition-colors duration-300"
  >
    Access your affiliate dashboard
  </Link>
</p>

          </div>

          {/* Image */}
          <div className="flex-1 mt-6 lg:mt-0">
            <img
              src={affiliaterightlanding}
              alt="Affiliate team"
              className="w-full h-full object-contain filter grayscale "
            />
          </div>
        </div>
         <div className="w-full  mt-12 md:mt-16 lg:mt-20 xl:mt-36 pr-2">
          <h2
            className="self-stretch text-[#2A2A2A]  font-[Switzer] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-[140%] text-center mt-8 md:mt-10 lg:mt-12 xl:mt-16"
          >
           Why Join the Maxtron Innovations Affiliate Program?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7 md:mt-10 lg:mt-12 xl:mt-16 ">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2 md:gap-3 lg:gap-5 "
              >
                <div className="w-16 h-16 ">
                  <item.icon />
                </div>
                <h3 className=" self-stretch text-[#213343] font-lexendDeca text-base lg:text-lg font-semibold leading-7">
                  {item.title}
                </h3>
                <p className=" text-[#213343] font-lexendDeca text-sm lg:text-base font-light leading-7 pr-4">{item.description}</p>
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgramPage;
