import { Link } from "react-router-dom";
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
            The speed of automation with the clarity of human
          </h1>
          <p className="text-[#FFF] text-start text-sm md:text-lg lg:text-xl xl:text-xl font-normal leading-[140%] font-[Geist]">
            Your industry, and Your audience
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 z-20 px-12 max-w-2xl text-start justify-start items-start">
          <Link
            to={"https://experiences.maxtron.ai/"}
            className="flex justify-start items-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-7  border-[#FFF] px-3 md:px-4 lg:px-5 py-2 md:py-2 lg:py-2 rounded-lg border-2 border-solid z-20 hover:bg-[#FFF] transition-all duration-300 group bg-[#FFFFFF]"
          >
            <p className="text-[#9554C8] group-hover:text-[#7A35C1] text-center font-[Inter] text-[12px] sm:text-sm md:text-base lg:text-lg font-normal leading-[140%] transition-colors duration-300 ">
              Begin Now
            </p>
          </Link>
        </div>
        <div className="w-[655px] h-[655px] hidden lg:flex absolute bottom-[-279px] border-[#FFF]  rounded-[655px] border-0 border-solid right-28 z-10"></div>
        <div className="w-[248px] md:hidden h-[248px] absolute right-[-22px] bottom-[-40.801px] "></div>
        <div className="w-[360px] hidden md:flex h-[360px] absolute  "></div>
      </div>
    </div>
  );
};

export default AIFooter;
