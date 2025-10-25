// import { Link } from "react-router-dom";
import footerImg from "../../assets/ai_images/aifooterimg.webp";

const AIFooter = () => {
  return (
    <div className="w-full mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8">
      <div
        style={{ backgroundImage: `url(${footerImg})` }}
        className="w-full rounded-xl py-12 md:py-26 lg:py-20 xl:py-24 px-5 md:px-8 lg:px-12 lg:rounded-2xl relative overflow-hidden items-start justify-start flex flex-col gap-6 md:gap-7 lg:gap-10 bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 z-20 px-12 max-w-2xl text-start justify-start items-start">
          <h1 className="text-[#FFF] text-start font-[Inter] text-xl md:text-2xl lg:text-4xl xl:text-5xl font-normal leading-[140%]">
            Contact Us
          </h1>
          <p className="text-[#FFF] text-start text-sm md:text-lg lg:text-xl xl:text-xl font-normal leading-[140%] font-[Geist]">
            If you're looking to harness Artificial Intelligence in India for
            your organization, let's talk.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 z-20 px-12 max-w-2xl text-start justify-start items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[#FFF] text-lg">📩</span>
              <span className="text-[#FFF] text-sm md:text-base lg:text-lg font-[Geist]">
                Email: info@maxtron.ai
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#FFF] text-lg">🌐</span>
              <span className="text-[#FFF] text-sm md:text-base lg:text-lg font-[Geist]">
                Website: www.maxtron.ai
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#FFF] text-lg">📞</span>
              <span className="text-[#FFF] text-sm md:text-base lg:text-lg font-[Geist]">
                Call / WhatsApp: +91-87911-56224
              </span>
            </div>
          </div>
        </div>
        <div className="w-[655px] h-[655px] hidden lg:flex absolute bottom-[-279px] border-[#FFF]  rounded-[655px] border-0 border-solid right-28 z-10"></div>
        <div className="w-[248px] md:hidden h-[248px] absolute right-[-22px] bottom-[-40.801px] "></div>
        <div className="w-[360px] hidden md:flex h-[360px] absolute  "></div>
      </div>
    </div>
  );
};

export default AIFooter;
