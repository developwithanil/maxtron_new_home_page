import { Link } from "react-router-dom";
import affiliaterightlanding from "../../assets/case/affiliaterightlanding.webp";
import ourteamrightimage from "../../assets/case/ourteamrightimage.webp";
import darkFullLogo from "../../assets/darkFullLogo.png"; 





const OurTeam = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[96rem] mx-auto pl-4 sm:pl-7 md:pl-12 xl:pl-14 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
        <div className="flex flex-row gap-7">
  
          <div className="w-[32%] hidden lg:flex flex-col justify-center items-start">
            <img
              src={ourteamrightimage}
              alt="Affiliate team"
              className="w-full h-[25rem] lg:h-[27rem] xl:h-[34rem] object-fit"
            />
          </div>

          <div className="flex-1 flex items-end pr-0">
            <img
              src={affiliaterightlanding}
              alt="Affiliate team"
              className="w-full h-[25rem] lg:h-[27rem] xl:h-[34rem] object-fit filter grayscale"
            />
          </div>
        </div>
    
       
        
      </div>
    </div>
  );
};

export default OurTeam;
