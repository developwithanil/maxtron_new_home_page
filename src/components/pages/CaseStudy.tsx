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
import { ArrowDown, ArrowUp } from "../VectorImage";
import { motion } from "framer-motion"; // fixed from "motion/react"
import { useState } from "react";
import CasesCard from "../elementalComponent/CasesCard";

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
      <div className='flex w-full flex-col h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[35rem] xl:h-[40rem] justify-center items-center [background:linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),url("./assets/case/hero.png")_lightgray_50%_/_cover_no-repeat]'>
        <div className="w-full max-w-[88rem] px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <p className="text-[#FFFFFF] text-xl sm:text-2xl md:text-3xl lg:text-4xl">CASE STUDIES</p>
          <p className="text-[#FFFFFF] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
            Our products are reshaping how industry leaders conduct their core business operations.
          </p>
        </div>
      </div>

      <div className="relative z-0 marquee-container w-[95%] sm:w-[90%] md:w-[85%] mx-auto max-w-[88rem]">
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
          <div className="p-3 sm:p-4 flex justify-center items-center text-[#8941C4] text-center [font-family:Switzer] text-lg sm:text-xl md:text-2xl font-bold leading-[120%]">
            All Cases
          </div>

          {/* Project Type Dropdown */}
          <div className={`relative z-10 flex justify-center md:border-l md:border-r border-[rgba(0,0,0,0.20)] ${isProjectTypeOpen ? "bg-[#f8e7ea]" : ""} border-solid flex-col items-start flex-[1_0_0] px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8`}>
            <motion.div
              onClick={() => setIsProjectTypeOpen(!isProjectTypeOpen)}
              className="flex justify-between w-full cursor-pointer"
            >
              <p className={`${isProjectTypeOpen ? "text-[#8941C4]" : "text-[#1E1E1E]"} [font-family:Switzer] text-lg sm:text-xl md:text-2xl font-semibold leading-[120%]`}>
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
              className="absolute top-full left-0 w-full bg-[#f8e7ea] z-50 border-l border-r border-b border-[rgba(0,0,0,0.20)] px-4 sm:px-8 md:px-12 lg:px-16 pb-4"
            >
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="text-[#1E1E1E] [font-family:Switzer] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-[120%] cursor-pointer w-full flex justify-between py-2 sm:py-3 border-t border-[rgba(0,0,0,0.20)]"
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
          <div className={`${isProjectTypeOpen ? "hidden" :""} relative z-10 flex justify-center border-[rgba(0,0,0,0.20)] ${isIndustryOpen ? "bg-[#f8e7ea]" : ""} border-solid flex-col items-start flex-[1_0_0] px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8`}>
            <motion.div
              onClick={() => setIsIndustryOpen(!isIndustryOpen)}
              className="flex justify-between w-full cursor-pointer"
            >
              <p className={`${isIndustryOpen ? "text-[#8941C4]" : "text-[#1E1E1E]"} [font-family:Switzer] text-lg sm:text-xl md:text-2xl font-semibold leading-[120%]`}>
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
              className={`absolute top-full left-0 w-full bg-[#f8e7ea]  z-40 border-l border-r border-b border-[rgba(0,0,0,0.20)] px-4 sm:px-8 md:px-12 lg:px-16 pb-4`}
            >
              {industries.map((type, index) => (
                <div
                  key={index}
                  className="text-[#1E1E1E] [font-family:Switzer] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-[120%] cursor-pointer w-full flex justify-between py-2 sm:py-3 border-t border-[rgba(0,0,0,0.20)]"
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
    </div>
  );
};

export default CaseStudy;
