import React, { useState } from "react";
import {
  caseStudiesData,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from "./caseStudyData";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const currentStudy = caseStudiesData[currentIndex];

  const handleNext = () => {
    setAnimationKey((prevKey) => prevKey + 1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
  };

  const handlePrev = () => {
    setAnimationKey((prevKey) => prevKey + 1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudiesData.length - 1 : prevIndex - 1
    );
  };

  const contentAnimationClass = "animate-fade-in";

  return (
    <section
      id="case-studies"
      className="relative py-16 md:py-24 bg-brand-bg-dark text-brand-text-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row sm:flex-row justify-between items-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0 text-left text-brand-text-light">
            Case Studies
          </h2>
          <a
            href="#all-case-studies"
            className="px-5 py-2.5 bg-brand-purple-light text-white  bg-[#7A35C1] text-sm font-medium rounded-md hover:bg-brand-purple transition-colors duration-200 shadow-lg"
          >
            View All Case
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            <img
              key={`case-study-image-${currentStudy.id}-${animationKey}`}
              src={currentStudy.image}
              alt={currentStudy.title}
              className="absolute inset-0 w-full h-full object-cover animate-fade-in duration-500"
            />
          </div>

          <div className="flex flex-col items-center text-center relative min-h-[350px] md:min-h-[400px] justify-between py-6 md:py-0">
            {" "}
            <button
              onClick={handlePrev}
              aria-label="Previous case study"
              disabled={caseStudiesData.length <= 1}
              className="p-3 text-[#7A35C1] hover:text-[#CAA8EF] disabled:opacity-30 transition-colors duration-200 z-10"
            >
              <ArrowUpIcon className="w-7 h-7 md:w-8 md:h-8" />
            </button>
            <div
              key={`case-study-content-${currentStudy.id}-${animationKey}`}
              className={`w-full max-w-md px-4 ${contentAnimationClass} duration-300`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-[32px] font-bold text-[#2A2A2A]  mb-3">
                {currentStudy.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-1 mb-4">
                {currentStudy.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[14px] font-semibold text-[#7A35C1]  font-[switzer] tracking-wider"
                  >
                    {tag}
                    {index < currentStudy.tags.length - 1 && (
                      <span className="text-brand-text-medium  mx-0.5">|</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="text-brand-text-medium  text-sm lg:text-base leading-relaxed mb-6 text-[#79748A]">
                {currentStudy.description}
              </p>
            </div>
            <a
              href={currentStudy.learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-4 border-2 border-[#7A35C1] text-[#7A35C1] font-semibold rounded-xl hover:bg-brand-purple hover:text-[#7A35C1] transition-all duration-300 group text-lg shadow-md"
            >
              Learn More
              <ArrowRightIcon className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200 text-[#7A35C1]" />
            </a>
            <button
              onClick={handleNext}
              aria-label="Next case study"
              disabled={caseStudiesData.length <= 1}
              className="p-3 text-[#7A35C1] hover:text-[#CAA8EF] disabled:opacity-30 transition-colors duration-200 z-10"
            >
              <ArrowDownIcon className="w-7 h-7 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
