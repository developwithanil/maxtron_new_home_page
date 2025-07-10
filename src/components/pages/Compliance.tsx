"use client";

import compliance from "../../assets/compliance/compliance.webp";
import ComplianceOffer from "../elementalComponent/ComplianceOffer";
import ComplianceInnovation from "../elementalComponent/ComplianceInnovation";
import MaxtronLead from "../elementalComponent/MaxtronLead";
import ComplianceChoose from "../elementalComponent/ComplianceChoose";
import ComplianceFooter from "../elementalComponent/ComplianceFooter";
import { Link } from "react-router-dom";

const Compliance = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-7 md:px-16 xl:px-16 py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
        <div className="flex flex-col lg:flex-row bg-[#F3EBFC] ">
          <div className="w-full lg:w-1/2 px-8 sm:px-14 py-12">
            <div className="flex items-center gap-2 bg-[#7A35C1] px-5 mb-10 w-fit">
              <p className="bg-white w-3 h-3"></p>
              <p className="text-white text-base font-[switzer] py-3 uppercase">
                Powering Trust, Across Borders and Blockchains
              </p>
            </div>
            <div className="mb-6">
              <h1 className="text-[#2A2A2A] text-5xl xl:text-6xl font-normal leading-tight">
                A New Era of Digital
                <br />
                Asset Legislation
              </h1>
            </div>
            <p className="text-[#2A2A2A] text-base font-openSansHebrew leading-[150%] mb-16 lg:mb-28">
              At Maxtron.ai, compliance isn't an afterthought—it's a competitive
              advantage. As global digital asset laws evolve, our platform
              ensures your projects stay legally sound, strategically
              positioned, and future-ready
            </p>
            <div>
              <Link to="/contact">
                <button className="bg-[#7A35C1] text-white text-base font-[switzer] px-5 py-3 hover:bg-[#D8D0F4] hover:text-black transition-transform transform hover:scale-105">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-end bg-white flex-col">
            <div className="bg-white w-full h-full"></div>
            <div className="bg-[#F3EBFC] w-full h-full"></div>
            <div>
              <img src={compliance} alt="compliance" className="w-full" />
            </div>
          </div>
        </div>
        <ComplianceOffer />
        <ComplianceInnovation />
        <MaxtronLead />
        <ComplianceChoose />
        <ComplianceFooter />
      </div>
    </div>
  );
};

export default Compliance;
