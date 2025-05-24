// import React, { useState } from "react";
// import {
//   caseStudiesData,
//   ArrowUpIcon,
//   ArrowDownIcon,
//   ArrowRightIcon,
// } from "./caseStudyData";

// const CaseStudies = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationKey, setAnimationKey] = useState(0);

//   const currentStudy = caseStudiesData[currentIndex];

//   const handleNext = () => {
//     setAnimationKey((prevKey) => prevKey + 1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
//   };

//   const handlePrev = () => {
//     setAnimationKey((prevKey) => prevKey + 1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? caseStudiesData.length - 1 : prevIndex - 1
//     );
//   };

//   const contentAnimationClass = "animate-fade-in";

//   return (
//     <section
//       id="case-studies"
//       className="relative py-16 md:py-24 bg-brand-bg-dark text-brand-text-light"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-row sm:flex-row justify-between items-center mb-12 md:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0 text-left text-brand-text-light">
//             Case Studies
//           </h2>
//           <a
//             href="#all-case-studies"
//             className="px-5 py-2.5 bg-brand-purple-light text-white  bg-[#7A35C1] text-sm font-medium rounded-md hover:bg-brand-purple transition-colors duration-200 shadow-lg"
//           >
//             View All Case
//           </a>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
//           <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               key={`case-study-image-${currentStudy.id}-${animationKey}`}
//               src={currentStudy.image}
//               alt={currentStudy.title}
//               className="absolute inset-0 w-full h-full object-cover animate-fade-in duration-500"
//             />
//           </div>

//           <div className="flex flex-col items-center text-center relative min-h-[350px] md:min-h-[400px] justify-between py-6 md:py-0">
//             {" "}
//             <button
//               onClick={handlePrev}
//               aria-label="Previous case study"
//               disabled={caseStudiesData.length <= 1}
//               className="p-3 text-[#7A35C1] hover:text-[#CAA8EF] disabled:opacity-30 transition-colors duration-200 z-10"
//             >
//               <ArrowUpIcon className="w-7 h-7 md:w-8 md:h-8" />
//             </button>
//             <div
//               key={`case-study-content-${currentStudy.id}-${animationKey}`}
//               className={`w-full max-w-md px-4 ${contentAnimationClass} duration-300`}
//             >
//               <h3 className="text-3xl md:text-4xl lg:text-[32px] font-bold text-[#2A2A2A]  mb-3">
//                 {currentStudy.title}
//               </h3>
//               <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-1 mb-4">
//                 {currentStudy.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="text-[14px] font-semibold text-[#7A35C1]  font-[switzer] tracking-wider"
//                   >
//                     {tag}
//                     {index < currentStudy.tags.length - 1 && (
//                       <span className="text-brand-text-medium  mx-0.5">|</span>
//                     )}
//                   </span>
//                 ))}
//               </div>
//               <p className="text-brand-text-medium  text-sm lg:text-base leading-relaxed mb-6 text-[#79748A]">
//                 {currentStudy.description}
//               </p>
//             </div>
//             <a
//               href={currentStudy.learnMoreLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-7 py-4 border-2 border-[#7A35C1] text-[#7A35C1] font-semibold rounded-xl hover:bg-brand-purple hover:text-[#7A35C1] transition-all duration-300 group text-lg shadow-md"
//             >
//               Learn More
//               <ArrowRightIcon className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200 text-[#7A35C1]" />
//             </a>
//             <button
//               onClick={handleNext}
//               aria-label="Next case study"
//               disabled={caseStudiesData.length <= 1}
//               className="p-3 text-[#7A35C1] hover:text-[#CAA8EF] disabled:opacity-30 transition-colors duration-200 z-10"
//             >
//               <ArrowDownIcon className="w-7 h-7 md:w-8 md:h-8" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;

import React, { useState, useEffect } from "react";
import {
  caseStudiesData,
  ArrowRightIcon, // This can stay if it's for "Learn More"
} from "./caseStudyData"; // Make sure this path and its exports are correct

// Consider renaming these icons if they are visually different for horizontal navigation
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

const ArrowRightSliderIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right" | null
  >(null);

  const currentStudy = caseStudiesData[currentIndex];

  const handleNext = () => {
    setAnimationDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
  };

  const handlePrev = () => {
    setAnimationDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudiesData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (animationDirection) {
      const timer = setTimeout(() => setAnimationDirection(null), 500); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, animationDirection]);

  const getImageAnimationClass = () => {
    if (animationDirection === "right") return "animate-slide-in-right";
    if (animationDirection === "left") return "animate-slide-in-left";
    return "animate-fade-in"; // Initial fade-in
  };

  const getContentAnimationClass = () => {
    if (animationDirection === "right") return "animate-slide-in-right-content";
    if (animationDirection === "left") return "animate-slide-in-left-content";
    return "animate-fade-in"; // Initial fade-in
  };

  return (
    <section
      id="case-studies"
      className="relative py-16 md:py-24 bg-brand-bg-dark text-brand-text-light overflow-hidden" // Added overflow-hidden
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row sm:flex-row justify-between items-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0 text-left text-brand-text-light">
            Case Studies
          </h2>
          <a
            href="#all-case-studies" // Replace with actual link
            className="px-5 py-2.5 bg-brand-purple-light text-white  bg-[#7A35C1] text-sm font-medium rounded-md hover:bg-brand-purple transition-colors duration-200 shadow-lg"
          >
            View All Cases
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center relative">
          {/* Previous Button - Moved to the left of the image on larger screens */}
          <button
            onClick={handlePrev}
            aria-label="Previous case study"
            disabled={caseStudiesData.length <= 1}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30 hover:bg-white/50 rounded-full text-[#7A35C1] hover:text-[#CAA8EF] disabled:opacity-30 transition-all duration-200 shadow-lg hidden md:block -ml-6 lg:-ml-14"
          >
            <ArrowLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Image Container */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            <img
              key={`case-study-image-${currentStudy.id}`} // Key change triggers re-render and animation
              src={currentStudy.image}
              alt={currentStudy.title}
              className={`absolute inset-0 w-full h-full object-cover duration-500 ${getImageAnimationClass()}`}
            />
          </div>

          {/* Content Container */}
          <div
            key={`case-study-content-${currentStudy.id}`} // Key change triggers re-render and animation
            className={`w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative duration-500 ${getContentAnimationClass()}`}
          >
            <h3 className="text-3xl md:text-4xl lg:text-[32px] font-bold text-[#2A2A2A] mb-3">
              {currentStudy.title}
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-2.5 gap-y-1 mb-4">
              {currentStudy.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[14px] font-semibold text-[#7A35C1] font-[switzer] tracking-wider"
                >
                  {tag}
                  {index < currentStudy.tags.length - 1 && (
                    <span className="text-brand-text-medium mx-0.5">|</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-brand-text-medium text-sm lg:text-base leading-relaxed mb-6 text-[#79748A]">
              {currentStudy.description}
            </p>
            <a
              href={currentStudy.learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 md:py-4 border-2 border-[#7A35C1] text-[#7A35C1] font-semibold rounded-xl hover:bg-[#7A35C1] hover:text-white transition-all duration-300 group text-base md:text-lg shadow-md"
            >
              Learn More
              <ArrowRightIcon className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />{" "}
              {/* Removed text-[#7A35C1] here as it's inherited */}
            </a>
          </div>

          {/* Next Button - Moved to the right of the content on larger screens */}
          <button
            onClick={handleNext}
            aria-label="Next case study"
            disabled={caseStudiesData.length <= 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30 hover:bg-white/50 rounded-full text-[#7A35C1] hover:text-[#CAA8EF] disabled:opacity-30 transition-all duration-200 shadow-lg hidden md:block -mr-6 lg:-mr-10"
          >
            <ArrowRightSliderIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Mobile Navigation Buttons (if needed, or combine with above using responsive classes) */}
          <div className="flex md:hidden justify-center items-center w-full mt-8 gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous case study"
              disabled={caseStudiesData.length <= 1}
              className="p-3 text-[#7A35C1] hover:text-[#CAA8EF] disabled:opacity-30 transition-colors duration-200 z-10 bg-gray-200 rounded-full"
            >
              <ArrowLeftIcon className="w-7 h-7" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next case study"
              disabled={caseStudiesData.length <= 1}
              className="p-3 text-[#7A35C1] hover:text-[#CAA8EF] disabled:opacity-30 transition-colors duration-200 z-10 bg-gray-200 rounded-full"
            >
              <ArrowRightSliderIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
