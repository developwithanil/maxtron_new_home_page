import React from "react";
import augmentation from "../../assets/augmentation.svg";
import WeOffer from "../WeOffer";
import WhyChoose from "../WhyChoose";
import EmpanelmentSection from "../EmpanelmentSection";
import Profiles from "../Profiles";
import TimeZone from "../TimeZone";
import WhoPartner from "../WhoPartner";
import Process from "../Process";
import AugmentationFaqs from "../Augmentationfaqs";
import Testimonials from "../Testimonials";
import ScheduleFooter from "../ScheduleFooter";

const StaffAugmentation: React.FC = () => {
  return (
    <>
      <div className="w-full text-white flex flex-col lg:flex-row lg:items-center pt-5 px-6 sm:px-10 md:px-16 lg:pl-12 xl:pl-20 2xl:pl-32 lg:pr-8 xl:pr-12">
        <div className="w-full lg:w-[58%] xl:w-[60%] 2xl:w-[55%] flex flex-col justify-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A2A2A] to-[#7A35C1] sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl mb-5 font-semibold">
            Plug-and-Play
          </h1>

          <h1 className="sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-[#2A2A2A]  mb-3 sm:mb-3">
            Tech Talent From India's Deepest Bench of Developers
          </h1>

          <p className="text-[#2A2A2A] md:text-[20px] xl:text-[20px] lg:text-[20px] sm:text-[14px]leading-relaxed mb-8 sm:mb-12 font-openSansHebrew font-normal">
            Onboard pre-vetted, project-ready developers in 48 hours. No hiring
            bottlenecks. No overheads. Just pure development power, on-demand.
          </p>

          <div className="flex flex-col sm:flex-row md:items-start xl:items-start lg:items-start  gap-3 sm:gap-3 ">
            <button
              className="bg-[#7A35C1] hover:bg-purple-700 text-[#FFFFFF] font-medium 
                         py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-base 
                         transition-colors duration-300 shadow-lg hover:shadow-purple-500/50 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50  "
            >
              Request Talent
            </button>
            <div></div>
            <p className="text-[#000] font-openSansHebrew sm:text-[16px] md:text-lg lg:text-lg xl:text-lg font-normal">
              Looking for a job?
            </p>
            <a
              href="#"
              className="text-[#7A35C1] hover:text-purple-400 font-medium sm:text-[16px] md:text-lg lg:text-lg xl:text-lg underline
                         focus:outline-none focus:ring-1 focus:ring-purple-500 rounded-sm"
            >
              Explore Opportunities
            </a>
          </div>
        </div>

        <div>
          <img
            src={augmentation}
            alt="Developer coding on a laptop with a coffee cup nearby"
            className="w-full h-full object-cover"
            style={{
              clipPath: "ellipse(140% 75% at 110% 50%)",
            }}
          />
        </div>
      </div>

      <WeOffer />
      <WhyChoose />
      <EmpanelmentSection />
      <Profiles />
      <TimeZone />
      <WhoPartner />
      <Process />
      <AugmentationFaqs />
      <Testimonials />
      <ScheduleFooter />
    </>
  );
};

export default StaffAugmentation;
