const MarketingChoose = () => {
  const chooseUsData = [
    {
      id: 1,
      text: "ROI-focused strategies tailored to your goals",
    },
    {
      id: 2,
      text: "Expertise across industries & platforms",
    },
    {
      id: 3,
      text: "Continuous optimization for long-term growth",
    },
    {
      id: 4,
      text: "Transparent reporting & no hidden costs",
    },
  ];

  return (
    <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[96rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-x-12">
          <div className="w-full lg:w-1/4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2A2A2A] mb-6 sm:mb-8 lg:mb-0 font-[switzer]">
              Why Choose Us
            </h2>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-8 md:gap-12 divide-y-0 sm:divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-200 lg:mt-9">
              <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 px-3 sm:px-4 md:px-8 pt-4 sm:pt-6 md:pt-12 pb-4 sm:pb-6 md:pb-11">
                {chooseUsData.slice(0, 2).map((item, index) => (
                  <div key={item.id} className="relative">
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-100 text-[#2A2A2A] font-semibold text-xs sm:text-sm md:text-base flex-shrink-0">
                        {item.id}
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#2A2A2A] font-lexendDeca">
                        {item.text}
                      </p>
                    </div>
                    {index === 0 && (
                      <div className="hidden sm:block mt-3 sm:mt-4 md:mt-6 w-full h-px bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 px-3 sm:px-4 md:px-8 py-2 md:py-2">
                {chooseUsData.slice(2).map((item, index) => (
                  <div key={item.id} className="relative">
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-100 text-[#2A2A2A] font-semibold text-xs sm:text-sm md:text-base flex-shrink-0">
                        {item.id}
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#2A2A2A] font-lexendDeca">
                        {item.text}
                      </p>
                    </div>
                    {index === 0 && (
                      <div className="hidden sm:block mt-3 sm:mt-4 md:mt-6 w-full h-px bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingChoose;
