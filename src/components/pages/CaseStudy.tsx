import Mercedes from "../../../public/client/mercedes.svg";
import Fitburn from "../../../public/client/fitburn.svg";
import Create from "../../../public/client/createProtocol.svg";
import IndiaToday from "../../../public/client/indiaToday.svg";
import Convival from "../../../public/client/convival.svg";
import Uber from "../../../public/client/uber.svg";
import Tenup from "../../../public/client/tenup.svg";
import PmIndia from "../../../public/client/pmIndia.svg";
import Sc from "../../../public/client/sc.svg";
import Ministry from "../../../public/client/ministry.svg";
import FoodVerse from "../../../public/client/foodVerse.svg";
import GovtHy from "../../../public/client/govtHyryana.svg";
import Ludo from "../../../public/client/ludoLove.svg";
import cadbury from "../../../public/client/cadbury.svg";
import Audi from "../../../public/client/audi.svg";
import { ArrowDown, ArrowUp, WhiteLogo } from "../VectorImage";
import { motion } from "motion/react"; 
import { useState } from "react";
import CasesCard from "../elementalComponent/CasesCard";
import ContactForm from "../ContactForm";
import { Link } from "react-router-dom";

const clients = [
  { name: "Mercedes", logo: Mercedes },
  { name: "Fitburn", logo: Fitburn },
  { name: "Create Protocol", logo: Create },
  { name: "India Today", logo: IndiaToday },
  { name: "Convival", logo: Convival },
  { name: "Uber", logo: Uber },
  { name: "Tenup", logo: Tenup },
  { name: "PM India", logo: PmIndia },
  { name: "SC", logo: Sc },
  { name: "Ministry", logo: Ministry },
  { name: "FoodVerse", logo: FoodVerse },
  { name: "Govt Haryana", logo: GovtHy },
  { name: "lud", logo: Ludo },
  { name: "cadbury", logo: cadbury },
  { name: "Audi", logo: Audi },
];

const projectTypes = ["Mobile Apps", "Web Applications", "Website"];
const industries = ["Mobile Apps", "Web Application", "Websites"];

const CaseStudy = () => {
  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [, setSelectedProjectType] = useState("");
  const [, setSelectedIndustry] = useState("");

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-2 mb-4 relative">
      <div className='flex w-full max-w-[96rem] mx-auto flex-col h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[35rem] xl:h-[40rem] justify-center items-start [background:linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),url("./assets/case/hero.png")_lightgray_50%_/_cover_no-repeat]'>
        <div className="md:w-1/2  w-full max-w-[88rem]  px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-5">
          <p className="text-[#FFFFFF] font-['Switzer'] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  tracking-[0.02em] leading-[160%] mb-2 sm:mb-3 md:mb-4">
            CASE STUDIES
          </p>
          <p className={`flex-[1_0_0] text-white [font-family:"Open_Sans_Hebrew"] text-xl sm:text-xl md:text-2xl lg:text-3xl font-normal `}>
            Our products are reshaping how industry leaders conduct their core business operations.
          </p>
        </div>
      </div>

      <div className="relative z-30 marquee-container w-[95%] sm:w-[90%] md:w-[85%] mx-auto max-w-[88rem]">
        <div className="animate-marquee whitespace-nowrap">
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="marquee-item inline-block">
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 p-2 sm:p-3 md:p-4"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto max-w-[88rem] relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[rgba(0,0,0,0.20)] border-solid">
          <div className="p-3 sm:p-4 flex justify-center items-center text-[#8941C4] text-center font-['Switzer'] text-lg sm:text-xl md:text-2xl font-bold leading-[120%]">
            All Cases
          </div>

          {/* Project Type Dropdown */}
          <div className={`relative z-30 flex justify-center md:border-l md:border-r border-[rgba(0,0,0,0.20)] ${
            isProjectTypeOpen ? "bg-[#f8e7ea]" : ""
          } border-solid flex-col items-start flex-[1_0_0] px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8`}>
            <motion.div
              onClick={() => setIsProjectTypeOpen(!isProjectTypeOpen)}
              className="flex justify-between w-full cursor-pointer"
            >
              <p className={`${isProjectTypeOpen ? "text-[#8941C4]" : "text-[#1E1E1E]"} font-['Switzer'] text-lg sm:text-xl md:text-2xl font-semibold leading-[120%]`}>
                Project type
              </p>
              <motion.div
                animate={{ rotate: isProjectTypeOpen ? 360 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="scale-75 sm:scale-100"
              >
                {isProjectTypeOpen ? <ArrowDown /> : <ArrowUp />}
              </motion.div>
            </motion.div>

            {/* Dropdown Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isProjectTypeOpen ? 1 : 0,
                height: isProjectTypeOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#f8e7ea] z-40 border-l-[1px] border-r-[1px] border-b-[1px] border-[rgba(0,0,0,0.20)] px-4 sm:px-8 md:px-12 lg:px-16 pb-4"
            >
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="text-[#1E1E1E] font-['Switzer'] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-[120%] cursor-pointer w-full flex justify-between py-2 sm:py-3 border-t-[1px] border-[rgba(0,0,0,0.20)]"
                  onClick={() => {
                    setSelectedProjectType(type);
                    setIsProjectTypeOpen(false);
                  }}
                >
                  <div>{type}</div>
                  <div className="relative bg-green-400"></div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Industry Dropdown */}
          <div className={`relative z-30 flex ${isProjectTypeOpen ? "hidden md:block":""} justify-center border-[rgba(0,0,0,0.20)] ${
            isIndustryOpen ? "bg-[#f8e7ea]" : ""
          } border-solid flex-col items-start flex-[1_0_0] px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8`}>
            <motion.div
              onClick={() => setIsIndustryOpen(!isIndustryOpen)}
              className="flex justify-between w-full cursor-pointer"
            >
              <p className={`${isIndustryOpen ? "text-[#8941C4]" : "text-[#1E1E1E]"} font-['Switzer'] text-lg sm:text-xl md:text-2xl font-semibold leading-[120%]`}>
                Industry
              </p>
              <motion.div
                animate={{ rotate: isIndustryOpen ? 360 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="scale-75 sm:scale-100"
              >
                {isIndustryOpen ? <ArrowDown /> : <ArrowUp />}
              </motion.div>
            </motion.div>

            {/* Dropdown Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isIndustryOpen ? 1 : 0,
                height: isIndustryOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#f8e7ea] z-40 border-l-[1px] border-r-[1px] border-b-[1px] border-[rgba(0,0,0,0.20)] px-4 sm:px-8 md:px-12 lg:px-16 pb-4"
            >
              {industries.map((type, index) => (
                <div
                  key={index}
                  className="text-[#1E1E1E] font-['Switzer'] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-[120%] cursor-pointer w-full flex justify-between py-2 sm:py-3 border-t-[1px] border-[rgba(0,0,0,0.20)]"
                  onClick={() => {
                    setSelectedIndustry(type);
                    setIsIndustryOpen(false);
                  }}
                >
                  <div>{type}</div>
                  <div className="relative bg-green-400"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto max-w-[88rem] relative">
        <CasesCard/>
      </div>
      <ContactForm/>
      <div className="w-full relative -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 xl:-bottom-12 bg-gradient-to-r from-[#D77DD4] via-[#481658] to-[#69348F] pb-10">
  <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 py-10">
    
    {/* Logo */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <WhiteLogo/>
    </div>

    {/* Buttons */}
    <div className="w-full md:w-1/2 flex flex-row md:flex-col justify-center md:justify-end items-center gap-4 ">
      <Link to="/Contact">
        <button className="text-sm px-5 py-2 rounded-lg bg-[#F5F5F5] text-black hover:text-white hover:bg-transparent border-2 bprder-solid border-white font-['Open_Sans'] font-bold transition hover:bg-white shadow-md">
          Contact Us
        </button>
      </Link>
      <button
        onClick={() =>
          window.open("https://calendly.com/business-maxtron/30min", "_blank")
        }
        className="text-sm px-5 py-2 rounded-lg bg-[#F5F5F5] text-black font-['Open_Sans'] hover:text-white hover:bg-transparent border-2 bprder-solid border-white font-bold transition hover:bg-white shadow-md"
      >
        Book a Call
      </button>
    </div>

  </div>
</div>
    </div>
  );
};

export default CaseStudy;
