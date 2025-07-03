import { Link } from "react-router-dom";
import affiliaterightlanding from "../../assets/case/affiliaterightlanding.webp";
import ourteamrightimage from "../../assets/case/ourteamrightimage.webp";
import darkFullLogo from "../../assets/darkFullLogo.png"; 





const OurTeam = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[96rem] mx-auto pl-4 sm:pl-7 md:pl-12 xl:pl-14 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
        <div className="flex flex-col lg:flex-row justify-between">
  
          <div className="w-full lg:w-[32%] hidden lg:flex flex-col justify-center items-start ">
            <img
              src={ourteamrightimage}
              alt="Affiliate team"
              className="w-full h-auto lg:h-[25rem] xl:h-[30rem] 2xl:h-[34rem] object-fit"
            />
          </div>

          <div className="w-full lg:w-[64%] xl:w-[62%] 2xl:w-[64%]  flex items-center">
            <img
              src={affiliaterightlanding}
              alt="Affiliate team"
              className="w-full h-auto   2xl:h-[34rem] object-contain filter grayscale"
            />
          </div>
        </div>
    
       
        
      </div>
    </div>
  );
};

export default OurTeam;
