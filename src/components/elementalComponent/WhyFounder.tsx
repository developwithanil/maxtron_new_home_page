import React from "react";
import { Link } from "react-router-dom";

const WhyFounder = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 md:px-8 xl:px-6 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12  gap-3 md:gap-5  lg:gap-6">
        {/* Left Section */}
        <div className="lg:col-span-4 flex flex-col gap-3 lg:gap-6 ">
          <h2 className="text-[#2A2A2A] text-start font-[Switzer] font-bold text-2xl lg:text-3xl xl:text-4xl leading-tight">
            Why Founders Choose Us
          </h2>
          <div className="flex flex-col justify-center  gap-2 sm:gap-2.5 w-fit ">
            <Link
              to={"#"}
              className="flex items-center justify-center w-full sm:w-auto bg-[#7A35C1] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#6a2eb0] transition-colors duration-300"
            >
              <p className="text-[#FFF] text-center font-openSansHebrew text-sm sm:text-base font-normal leading-[160%]">
                Request Talent
              </p>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-8 w-full flex flex-col lg:flex-row lg:gap-4">
            <div className="flex flex-col ">
                <div className="lg:flex gap-4 py-5 hidden  lg:opacity-0">
                    <div className="flex w-12 h-12 justify-center font-[Switzer] font-semibold items-center bg-[#F5F5F5] rounded-full">1</div>
                    <div >
                        <h1 className='text-[#2A2A2A]  text-lg font-bold leading-7 font-lexendDeca'>Boundless Ideas</h1>
                        <p className='self-stretch text-[#2A2A2A] font-openSansHebrew text-base font-normal leading-[160%]'>We’re not here to box your vision.</p>
                    </div>
                </div>
                <div className="flex gap-4 py-5">
                    <div className="flex w-12 h-12 font-[Switzer] font-semibold justify-center items-center bg-[#F5F5F5] rounded-full">1</div>
                    <div >
                        <h1 className='text-[#2A2A2A]  text-lg font-bold leading-7 font-lexendDeca'>Boundless Ideas</h1>
                        <p className='self-stretch text-[#2A2A2A] font-openSansHebrew text-base font-normal leading-[160%]'>We’re not here to box your vision.</p>
                    </div>
                </div>
                <div className="w-full border-[#DFDEE7] border-b border-solid "></div>
                 <div className="flex gap-4 py-5 border-[#DFDEE7] border-b lg:border-b-0 border-solid ">
                    <div className="flex w-12 h-12 justify-center font-[Switzer] font-semibold items-center bg-[#F5F5F5] rounded-full aspect-square">2</div>
                    <div >
                        <h1 className='text-[#2A2A2A]  text-lg font-bold leading-7 font-lexendDeca'>Capital, Your Way</h1>
                        <p className='self-stretch text-[#2A2A2A] font-openSansHebrew text-base font-normal leading-[160%]'>We help you raise capital on your terms — whether you're building with code or climbing mountains.</p>
                    </div>
                </div>
            </div>
            <div className="border-[#DFDEE7] border-r border-solid"></div>
           <div className="flex flex-col ">
               
                <div className="flex gap-4 py-5">
                    <div className="flex w-12 h-12 justify-center font-[Switzer] font-semibold items-center bg-[#F5F5F5] rounded-full aspect-square">3</div>
                    <div >
                        <h1 className='text-[#2A2A2A]  text-lg font-bold leading-7 font-lexendDeca'>Built on Three Pillars</h1>
                        <p className='self-stretch text-[#2A2A2A] font-openSansHebrew text-base font-normal leading-[160%]'>Our platform has infrastructure + capital + community. - short heading</p>
                    </div>
                </div>
                <div className="w-full border-[#DFDEE7] border-b border-solid "></div>
                 <div className="flex gap-4 py-5">
                    <div className="flex w-12 h-12 justify-center font-[Switzer] font-semibold items-center bg-[#F5F5F5] rounded-full aspect-square">4</div>
                    <div >
                        <h1 className='text-[#2A2A2A]  text-lg font-bold leading-7 font-lexendDeca'>Dual Advantages</h1>
                        <p className='self-stretch text-[#2A2A2A] font-openSansHebrew text-base font-normal leading-[160%]'>You get both liquidity and legitimacy.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFounder;
