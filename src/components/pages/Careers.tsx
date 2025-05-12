
import career from "../../../src/assets/career.png";

const Careers = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-5 md:mt-6 lg:mt-8 xl:mt-10 px-5 md:px-8 xl:px-6">
        <div className="flex w-full flex-col-reverse lg:flex-row gap-[14px] md:gap-[32px] lg:gap-[44px]  ">
            <div className="flex-1">
             <img src={career} alt={"Career Image"} className="w-full h-full object-cover rounded-xl px-3 md:px-4 lg:px-7 lg:py-4"/>
            </div>
            <div className="flex-1 lg:py-6 lg:pt-12">
                <div className="flex flex-col gap-5  lg:gap-9 xl:gap-10 px-3 md:px-4 lg:px-7 xl:px-10">

                <h1 className={`self-stretch text-[#2A2A2A] font-openSansHebrew text-2xl md:text-3xl lg:text-5xl font-bold leading-[120%]`}>Stay Connected with Maxtron</h1>
                <p className={`self-stretch text-[#3B3C4A] font-openSansHebrew text-lg md:text-xl lg:text-3xl font-normal leading-[160%] pr-8`}>By joining our talent community, we will notify you about relevant positions, and keep you in mind whenever we have interesting opportunities.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Careers