import { Link } from "react-router-dom";
import footerImg from "../../assets/events/EventsFooter.png";

const EventsLastComponent = () => {
  return (
    <div className="w-full mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8">
      <div
        style={{ backgroundImage: `url(${footerImg})` }}
        className="w-full rounded-xl py-12 md:py-26 lg:py-20 xl:py-24 px-5 md:px-8 lg:px-12 lg:rounded-2xl relative overflow-hidden items-center justify-center flex flex-col gap-6 md:gap-7 lg:gap-10 bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 z-20">
          <h1 className="text-[#FFF] text-center font-[Switzer] text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-[140%]">
            Explore Experiencial Tech
          </h1>
        </div>
        <Link
          to={"https://experiences.maxtron.ai/"}
          className="flex justify-between items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-7 border-[#FFF] px-3 md:px-4 lg:px-7 py-2 md:py-3 lg:py-3 rounded-[38px] border-2 border-solid z-20 hover:bg-[#FFF] transition-all duration-300 group"
        >
          <p className="text-[#fff] group-hover:text-[#7A35C1] text-center font-[Switzer] text-[12px] sm:text-sm md:text-base lg:text-lg font-normal leading-[140%] transition-colors duration-300">
            Explore
          </p>
          <p className="group-hover:translate-x-1 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
            >
              <g clip-path="url(#clip0_1686_3708)">
                <path
                  d="M1.5 7.5H17.5M17.5 7.5L11.5 1.5M17.5 7.5L11.5 13.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#7A35C1] transition-colors duration-300"
                />
              </g>
              <defs>
                <clipPath id="clip0_1686_3708">
                  <rect
                    width="18"
                    height="14"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </p>
        </Link>
        <div className="w-[655px] h-[655px] hidden lg:flex absolute bottom-[-279px] border-[#FFF]  rounded-[655px] border-0 border-solid right-28 z-10"></div>
        <div className="w-[248px] md:hidden h-[248px] absolute right-[-22px] bottom-[-40.801px] "></div>
        <div className="w-[360px] hidden md:flex h-[360px] absolute  "></div>
      </div>
    </div>
  );
};

export default EventsLastComponent;
