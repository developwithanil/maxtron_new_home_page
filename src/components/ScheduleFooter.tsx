import React from "react";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2 sm:ml-3 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out" // Subtle animation on hover
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>
);

const ScheduleFooter = () => {
  return (
    <div className="md:p-16 xl:p-16 lg:p-16 sm:p-5">
      <div className="bg-gradient-to-br from-violet-600 to-violet-800 text-white py-12 sm:py-16 md:py-20  rounded-3xl ">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Augment Your Tech Team?
          </h2>
          <p className="text-base sm:text-lg text-violet-200 mb-8 sm:mb-10 md:mb-12 max-w-xl">
            Let's help you build faster, smarter, and more cost-efficiently.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <button
              className="group bg-violet-500 hover:bg-violet-400 border-2 border-white rounded-full 
                       py-3 px-6 sm:px-8 
                       text-sm sm:text-base font-semibold 
                       text-white
                       flex items-center justify-center 
                       transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            >
              Schedule a Free Strategy Call
              <ArrowRightIcon />
            </button>

            <button
              className="group bg-violet-500 hover:bg-violet-400 border-2 border-white rounded-full 
                       py-3 px-6 sm:px-8 
                       text-sm sm:text-base font-semibold 
                       text-white
                       flex items-center justify-center 
                       transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            >
              Chat With Talent Advisor
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFooter;
