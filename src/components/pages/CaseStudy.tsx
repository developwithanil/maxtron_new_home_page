import Mercedes from "../../../public/client/mercedes.svg";
import Fitburn from "../../../public/client/fitburn.svg";
import Create from "../../../public/client/createProtocol.svg";
import IndiaToday from "../../../public/client/indiaToday.svg";
import Convival from "../../../public/client/convival.svg";
import Uber from "../../../public/client/uber.svg";
// import Cryptonite from "../../../public/client/cryptonite.svg";
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
import { motion } from "motion/react";
import { useState } from "react";

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
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  return (
    <div className="w-full flex flex-col gap-8 md:gap-10 lg:gap-12 mt-2 mb-4">
      <div className='flex w-full flex-col h-[28rem] md:h-[35rem] lg:h-[40rem] justify-center items-center  [background:linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),url("./assets/case/hero.png")_lightgray_50%_/_cover_no-repeat] '>
        <div className="w-full max-w-[88rem]  flex flex-col  gap-4 lg:gap-6">
          <p className="text-[#FFFFFF]">CASE STUDIES</p>
          <p className="text-[#FFFFFF]">
            Our products are reshaping how industry leaders conduct their core
            business operations.
          </p>
        </div>
      </div>

      <div className="relative marquee-container w-[90%] md:w-[85%] mx-auto max-w-[88rem]">
        <div className="animate-marquee whitespace-nowrap">
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="marquee-item">
              <img
                src={client.logo}
                alt={client.name}
                className="md:h-40 h-28 w-28 md:w-40 p-2 md:p-4"
                // effect="blur"
                // placeholderSrc={client.logo} // Optional: Placeholder image for better UX
                // threshold={100} // Load images 100px before they are in view
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" w-[90%] md:w-[85%] mx-auto max-w-[88rem] ">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-[1px] border-[rgba(0,0,0,0.20)] border-solid">
          <div className=" p-4 flex justify-center items-center text-[#8941C4] text-center [font-family:Switzer] text-2xl font-bold leading-[120%]">
            All Cases
          </div>
          <div
            className={`relative flex justify-center border-l-[1px] border-r-[1px] border-[rgba(0,0,0,0.20)] ${
              isProjectTypeOpen ? "bg-[#F2D8DD_0]" : ""
            } border-solid flex-col items-start flex-[1_0_0] px-16 py-8`}
          >
            <motion.div
              onClick={() => setIsProjectTypeOpen(!isProjectTypeOpen)}
              className="flex justify-between w-full cursor-pointer"
            >
              <p
                className={`text-[#1E1E1E] [font-family:Switzer] text-2xl font-semibold leading-[120%]`}
              >
                Project type
              </p>
              <motion.div
                animate={{ rotate: isProjectTypeOpen ? 360 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {isProjectTypeOpen ? <ArrowDown /> : <ArrowUp />}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isProjectTypeOpen ? 1 : 0,
                height: isProjectTypeOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute  top-full left-0 w-full bg-[#fff]  z-50 border-l-[1px] border-r-[1px] border-b-[1px] border-[rgba(0,0,0,0.20)] px-16  pb-4"
            >
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="text-[#1E1E1E] [font-family:Switzer] text-2xl font-semibold leading-[120%] cursor-pointer w-full flex justify-between py-3 border-t-[1px] border-[rgba(0,0,0,0.20)]"
                  onClick={() => {
                    setSelectedProjectType(type);
                    setIsProjectTypeOpen(false);
                  }}
                >
                  <div>{type}</div>
                  <div className="relative bg-green-400">f</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className=" relative flex justify-center border-[rgba(0,0,0,0.20)] border-solid flex-col items-start flex-[1_0_0] px-16 py-8 ">
            <motion.div
              onClick={() => setIsIndustryOpen(!isIndustryOpen)}
              className="flex justify-between w-full cursor-pointer"
            >
              <p
                className={`text-[#1E1E1E] [font-family:Switzer] text-2xl font-semibold leading-[120%]`}
              >
                Industry
              </p>
              <motion.div
                animate={{ rotate: isIndustryOpen ? 360 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {isIndustryOpen ? <ArrowDown /> : <ArrowUp />}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isIndustryOpen ? 1 : 0,
                height: isIndustryOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full    z-50 mt-2 overflow-hidden"
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedIndustry(industry);
                    setIsIndustryOpen(false);
                  }}
                >
                  {industry}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
