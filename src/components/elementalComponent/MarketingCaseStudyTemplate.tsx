import React, { useEffect, useRef } from "react";
import { MarketingCaseStudyProps } from "./types";
import {
  FaCheckCircle, FaEyeSlash,
  FaThumbsDown, FaBullhorn,
  FaCog, FaSearch, FaChartLine, FaUserPlus,
  FaEye
} from "react-icons/fa";
import { FiSearch, FiUserPlus } from "react-icons/fi";
import {
  GoogleAdsIcon, MetaAdsIcon, SeoIcon, AsoIcon,
  AnalyticsIcon, PerformanceIcon, AcquisitionIcon, TrackingIcon
} from "../icons/MarketingIcons";

function useReveal(rootMargin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return ref;
}

const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}> = ({ children, className = "", delay = 0, direction = "up" }) => {
  const ref = useReveal();
  const dirClass =
    direction === "up"
      ? "reveal-up"
      : direction === "left"
        ? "reveal-left"
        : direction === "right"
          ? "reveal-right"
          : "reveal-fade";

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const MarketingCaseStudyTemplate: React.FC<{ data: MarketingCaseStudyProps }> = ({ data }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        /* base hidden state */
        .reveal { opacity: 0; transition: opacity 0.7s ease, transform 0.7s ease; will-change: opacity, transform; }
        .reveal-up    { transform: translateY(40px); }
        .reveal-left  { transform: translateX(-40px); }
        .reveal-right { transform: translateX(40px); }
        .reveal-fade  { transform: none; }

        /* visible state */
        .reveal.is-visible { opacity: 1; transform: none; }

        /* metric counter pulse */
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.85) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .metric-value { animation: none; }
        .metric-card.is-visible .metric-value {
          animation: countUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        /* hero text slide */
        @keyframes heroSlide {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-title   { animation: heroSlide 0.9s 0.2s both; }
        .hero-sub     { animation: heroSlide 0.9s 0.45s both; }
        .hero-tags    { animation: heroSlide 0.9s 0.65s both; }

        /* wave chart draw */
        @keyframes drawLine {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }
        .wave-line { stroke-dasharray: 600; stroke-dashoffset: 600; }
        .metric-card.is-visible .wave-line {
          animation: drawLine 1.2s 0.3s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        /* highlight bullet bounce-in */
        @keyframes bounceIn {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .bullet-dot { animation: none; }
        .highlight-li.is-visible .bullet-dot {
          animation: bounceIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        /* card hover lift */
        .lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .lift:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.10); }
      `}</style>

      <div className="w-full bg-white text-gray-900 pb-24 overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>

        <div className="w-full relative bg-[#111111] overflow-hidden">
          <img
            src={data.hero.bgImage}
            alt={data.hero.title}
            className="w-full h-[60vh] md:h-[80vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start md:justify-end px-5 sm:px-12 lg:px-20">
            <div className="flex flex-col space-y-3 md:space-y-6 max-w-2xl w-full md:w-1/2 pt-16">
              <h1 className="hero-title text-white font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight drop-shadow-lg">
                {data.hero.title}
              </h1>
              <p className="hero-sub text-white/90 text-sm sm:text-lg lg:text-xl leading-relaxed drop-shadow-md">
                {data.hero.subtitle}
              </p>
              <div className="hero-tags flex flex-wrap gap-3 pt-2">
                {data.hero.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors text-white text-sm font-medium rounded-full tracking-wide shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 space-y-12 md:space-y-24">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pt-4 md:pt-8">
            <Reveal className="lg:w-3/5 space-y-6" direction="left">
              {data.intro.logo && (
                <img src={data.intro.logo} alt="Brand Logo" className="h-16 w-auto object-contain mb-6" />
              )}
              <p className="text-lg text-[#050505] leading-relaxed font-normal">
                {data.intro.description}
              </p>
            </Reveal>
            <Reveal className="lg:w-2/5 space-y-8 pl-0 lg:pl-12 pt-4 lg:pt-0" direction="right" delay={150}>
              <div>
                <h3 className="text-2xl font-medium text-[#050505] mb-2">Industries</h3>
                <p className="text-[#1A1C1E] font-normal">{data.intro.industries}</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#050505] mb-4">Service we offered</h3>
                <ul className="space-y-2 text-[#1A1C1E] font-normal">
                  {data.intro.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-[#1A1C1E] font-bold">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>


          {data.mockups.image1 && (
            <Reveal className="py-8">
              <img src={data.mockups.image1} alt="Mockup 1" className="w-full h-auto rounded-[2.5rem] object-cover shadow-2xl" />
            </Reveal>
          )}


          <div className="space-y-6 md:space-y-8 pt-4 md:pt-8">
            <Reveal direction="up">
              <h2 className="text-3xl font-bold text-gray-900">Challenges</h2>
              <p className="text-[#1A1C1E] text-base md:text-lg leading-relaxed mt-4">
                {data.challenges.description}
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {data.challenges.cards.map((card, idx) => {
                const bgColors = ["bg-[#B5FCD4]", "bg-[#CCEFFF]", "bg-[#FFEFE2]"];
                const icons = [
                  <FaEyeSlash className="text-black text-xl" />,
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                    <polyline points="17 18 23 18 23 12" />
                  </svg>,
                  <FaThumbsDown className="text-black text-xl" />
                ];
                return (
                  <Reveal key={idx} delay={idx * 120} direction="up">
                    <div className={`lift ${bgColors[idx % 3]} p-6 md:p-8 rounded-[1.5rem] space-y-4 md:space-y-6 flex flex-col justify-between min-h-[220px] md:min-h-[260px] shadow-sm`}>
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        {icons[idx % 3]}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                        <p className="text-gray-800 text-sm leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="space-y-8 md:space-y-12 text-center pt-10 md:pt-16">
            <Reveal direction="up">
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">OUR METHODOLOGY</h4>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1C35] mt-2">Multi-Channel Growth Framework</h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">{data.framework.subtitle}</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.framework.pillars.map((pillar, idx) => {
                const icons = [
                  <FaCog className="text-[#845ec2]" />,
                  <FaSearch className="text-[#845ec2]" />,
                  <FaBullhorn className="text-[#845ec2]" />,
                  <FaChartLine className="text-[#845ec2]" />
                ];
                const bulletColor = idx === 1 ? "text-[#00C2A0]" : "text-[#845ec2]";
                return (
                  <Reveal key={idx} delay={idx * 100} direction="up">
                    <div className="lift bg-white border border-[#CEC2D5] rounded-2xl p-6 lg:p-8 space-y-4 md:space-y-6 shadow-sm flex flex-col justify-start h-full">
                      <div className="space-y-6 min-h-[260px] xl:min-h-[240px]">
                        <div className="w-12 h-12 bg-[#F2EBFF] rounded-2xl flex items-center justify-center text-xl">
                          {icons[idx % 4]}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                      </div>
                      <ul className="space-y-2 pt-2">
                        {pillar.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start text-sm text-gray-700 font-medium">
                            <span className={`mr-2 font-bold ${bulletColor}`}>•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 md:pt-16 items-stretch">
            <Reveal direction="left" className="h-full">
              <div className="bg-[#4E148C] text-white p-8 sm:p-12 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-start relative overflow-hidden h-full">
                <h3 className="text-2xl font-bold mb-4 md:mb-6 relative z-10">Business Need</h3>
                <p className="text-purple-100 leading-relaxed text-base md:text-lg relative z-10 pr-0 sm:pr-16 font-medium">
                  {data.businessNeed.description}
                </p>
                <div className="absolute right-8 top-8 text-purple-700/20 pointer-events-none">
                  <svg width="90" height="95" viewBox="0 0 90 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-20">
                    <path d="M15 94.9996V74.8459C10.25 70.5126 6.5625 65.5462 3.9375 59.9469C1.3125 54.3475 0 48.5158 0 42.4517C0 30.6569 4.1346 20.6329 12.4038 12.3798C20.673 4.12658 30.705 0 42.4998 0C52.2113 0 60.8956 2.90223 68.5526 8.7067C76.2096 14.5112 81.1823 22.0416 83.4708 31.2979L89.2977 54.3747C89.6823 55.7977 89.4227 57.091 88.5188 58.2545C87.615 59.4179 86.4099 59.9996 84.9035 59.9996H74.9996V75.9612C74.9996 78.4548 74.1166 80.5846 72.3506 82.3506C70.5846 84.1166 68.4548 84.9996 65.9612 84.9996H54.9996V94.9996H47.4998V77.4998H65.9612C66.41 77.4998 66.7786 77.3556 67.0671 77.0671C67.3556 76.7786 67.4998 76.41 67.4998 75.9612V52.4998H80.9998L76.2498 33.1248C74.3332 25.5094 70.2338 19.3347 63.9517 14.6008C57.6697 9.8668 50.519 7.49982 42.4998 7.49982C32.8331 7.49982 24.5832 10.8828 17.7498 17.6489C10.9165 24.4149 7.49982 32.6312 7.49982 42.2979C7.49982 47.2979 8.52065 52.0399 10.5623 56.5239C12.604 61.0078 15.4998 64.9998 19.2498 68.4998L22.4998 71.4998V94.9996H15ZM38.6057 61.442H46.394L46.9516 56.0094C47.9388 55.7594 48.8636 55.3956 49.7258 54.9181C50.588 54.4405 51.3236 53.8491 51.9325 53.144L56.8171 55.4036L60.7112 48.7787L56.3844 45.5576C56.7434 44.5383 56.9229 43.5191 56.9229 42.4998C56.9229 41.4806 56.7434 40.4613 56.3844 39.442L60.7112 36.2209L56.8171 29.5961L51.9325 31.8557C51.3236 31.1505 50.588 30.5592 49.7258 30.0816C48.8636 29.604 47.9388 29.2402 46.9516 28.9902L46.394 23.5576H38.6057L38.048 28.9902C37.0608 29.2402 36.1361 29.604 35.2739 30.0816C34.4117 30.5592 33.6761 31.1505 33.0671 31.8557L28.1825 29.5961L24.2884 36.2209L28.6153 39.442C28.2563 40.4613 28.0768 41.4806 28.0768 42.4998C28.0768 43.5191 28.2563 44.5383 28.6153 45.5576L24.2884 48.7787L28.1825 55.4036L33.0671 53.144C33.6761 53.8491 34.4117 54.4405 35.2739 54.9181C36.1361 55.3956 37.0608 55.7594 38.048 56.0094L38.6057 61.442ZM42.4998 50.9133C40.1601 50.9133 38.1729 50.096 36.5382 48.4614C34.9036 46.8268 34.0863 44.8396 34.0863 42.4998C34.0863 40.1601 34.9036 38.1729 36.5382 36.5382C38.1729 34.9036 40.1601 34.0863 42.4998 34.0863C44.8396 34.0863 46.8268 34.9036 48.4614 36.5382C50.096 38.1729 50.9133 40.1601 50.9133 42.4998C50.9133 44.8396 50.096 46.8268 48.4614 48.4614C46.8268 50.096 44.8396 50.9133 42.4998 50.9133Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={100} className="h-full">
              <div className="bg-[#DECDEE] p-8 sm:p-12 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-start relative overflow-hidden h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-6 relative z-10">Campaign Results</h3>
                  <ul className="space-y-4 relative z-10">
                    {data.results.points.map((point, idx) => {
                      const parts = point.split("**");
                      return (
                        <li key={idx} className="flex items-start text-gray-900 font-medium text-base md:text-lg leading-relaxed" style={{ transitionDelay: `${idx * 80}ms` }}>
                          <FaCheckCircle className="text-[#4E148C] text-xl mt-1 mr-3 md:mr-4 flex-shrink-0" />
                          <span>
                            {parts.map((part, pIdx) =>
                              pIdx % 2 === 1
                                ? <strong key={pIdx} className="font-extrabold text-[#111111]">{part}</strong>
                                : part
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="absolute right-8 top-8 text-purple-800/15 pointer-events-none">
                  <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-20">
                    <path d="M20.9616 84.9996V77.4998H38.7499V60.3651C34.5063 59.5125 30.7563 57.7273 27.4999 55.0093C24.2435 52.2913 21.9294 48.9035 20.5576 44.8458C14.7884 44.1599 9.91983 41.7112 5.9519 37.4997C1.98397 33.2882 0 28.2882 0 22.4998V17.4998C0 15.455 0.738764 13.6938 2.21629 12.2163C3.69382 10.7388 5.455 10 7.49982 10H19.1346V0H65.8651V10H77.4998C79.5446 10 81.3058 10.7388 82.7833 12.2163C84.2609 13.6938 84.9996 15.455 84.9996 17.4998V22.4998C84.9996 28.2882 83.0157 33.2882 79.0477 37.4997C75.0798 41.7112 70.2112 44.1599 64.442 44.8458C63.0703 48.9035 60.7562 52.2913 57.4997 55.0093C54.2433 57.7273 50.4933 59.5125 46.2497 60.3651V77.4998H64.038V84.9996H20.9616ZM19.1346 36.7883V17.4998H7.49982V22.4998C7.49982 25.987 8.59278 29.0495 10.7787 31.6874C12.9646 34.3252 15.7499 36.0255 19.1346 36.7883ZM42.4998 53.1729C46.8909 53.1729 50.6168 51.6425 53.6777 48.5816C56.7387 45.5207 58.2691 41.7947 58.2691 37.4037V7.49982H26.7305V37.4037C26.7305 41.7947 28.261 45.5207 31.3219 48.5816C34.3828 51.6425 38.1088 53.1729 42.4998 53.1729ZM65.8651 36.7883C69.2497 36.0255 72.035 34.3252 74.2209 31.6874C76.4069 29.0495 77.4998 25.987 77.4998 22.4998V17.4998H65.8651V36.7883Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>


        </div>
        <div className="w-full py-10 md:py-12 mt-8" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #F2E6FF)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
            <Reveal direction="up">
              <h3 className="text-2xl font-bold text-gray-900">Key Metrics at a Glance</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.metrics.map((metric, idx) => {
                if (idx === 3) {
                  return (
                    <MetricReveal key={idx} delay={idx * 120}>
                      <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#4E148C] text-white relative overflow-hidden flex flex-col min-h-[200px] md:min-h-[220px] shadow-lg justify-between">
                        <div className="flex justify-between items-center mb-4">
                          <div className="w-10 h-10 border border-white/20 bg-white/10 rounded-xl flex items-center justify-center text-white text-lg">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.13843 19.7307L5.35382 16.723L1.96537 15.9807L2.29614 12.4922L0 9.86534L2.29614 7.23843L1.96537 3.74998L5.35382 3.00768L7.13843 0L10.3269 1.35384L13.5153 0L15.2999 3.00768L18.6884 3.74998L18.3576 7.23843L20.6537 9.86534L18.3576 12.4922L18.6884 15.9807L15.2999 16.723L13.5153 19.7307L10.3269 18.3768L7.13843 19.7307ZM7.77687 17.8153L10.3269 16.7346L12.9076 17.8153L14.3269 15.4153L17.0769 14.7846L16.8269 11.9653L18.6769 9.86534L16.8269 7.73457L17.0769 4.91534L14.3269 4.31534L12.8769 1.91534L10.3269 2.99611L7.74611 1.91534L6.32687 4.31534L3.57687 4.91534L3.82687 7.73457L1.97687 9.86534L3.82687 11.9653L3.57687 14.8153L6.32687 15.4153L7.77687 17.8153ZM9.27687 13.0692L14.5807 7.76534L13.5269 6.68075L9.27687 10.9307L7.12687 8.81152L6.07305 9.86534L9.27687 13.0692Z" fill="currentColor" />
                            </svg>
                          </div>
                          <span className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Leader</span>
                        </div>
                        <div className="mt-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-purple-200">{metric.title}</p>
                          <h4 className="metric-value text-4xl font-bold mt-1">{metric.value}</h4>
                        </div>
                        <p className="text-sm font-medium text-purple-200 mt-auto pt-4">{metric.subtitle}</p>
                      </div>
                    </MetricReveal>
                  );
                }

                let icon = <FaEye className="text-[#845ec2]" />;
                let iconBg = "bg-[#F2EBFF]";
                let textColor = "text-[#845ec2]";

                if (idx === 1) {
                  icon = (
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.49996 17.1768L8.39614 16.1846C6.73845 14.6807 5.36762 13.3884 4.28365 12.3076C3.19967 11.2269 2.3407 10.265 1.70673 9.42206C1.07275 8.57911 0.629807 7.81021 0.377884 7.11534C0.125961 6.42047 0 5.71534 0 4.99996C0 3.58074 0.478522 2.39261 1.43557 1.43557C2.39261 0.478522 3.58074 0 4.99996 0C5.87304 0 6.69804 0.204168 7.47496 0.612505C8.25189 1.02084 8.92689 1.60642 9.49996 2.36925C10.073 1.60642 10.748 1.02084 11.525 0.612505C12.3019 0.204168 13.1269 0 14 0C15.4192 0 16.6073 0.478522 17.5644 1.43557C18.5214 2.39261 18.9999 3.58074 18.9999 4.99996C18.9999 5.71534 18.874 6.42047 18.622 7.11534C18.3701 7.81021 17.9272 8.57911 17.2932 9.42206C16.6592 10.265 15.8019 11.2269 14.7211 12.3076C13.6403 13.3884 12.2679 14.6807 10.6038 16.1846L9.49996 17.1768ZM9.49996 15.15C11.1 13.7102 12.4166 12.4762 13.45 11.448C14.4833 10.4198 15.3 9.52656 15.9 8.76823C16.5 8.0099 16.9166 7.3365 17.15 6.74804C17.3833 6.15958 17.5 5.57689 17.5 4.99996C17.5 3.99996 17.1666 3.16663 16.5 2.49996C15.8333 1.8333 15 1.49996 14 1.49996C13.2102 1.49996 12.4804 1.724 11.8105 2.17208C11.1407 2.62016 10.6102 3.24356 10.2192 4.04228H8.78075C8.3833 3.23715 7.85125 2.61214 7.18458 2.16727C6.51791 1.7224 5.78971 1.49996 4.99996 1.49996C4.00637 1.49996 3.17464 1.8333 2.50477 2.49996C1.8349 3.16663 1.49996 3.99996 1.49996 4.99996C1.49996 5.57689 1.61663 6.15958 1.84996 6.74804C2.0833 7.3365 2.49996 8.0099 3.09996 8.76823C3.69996 9.52656 4.51663 10.4182 5.54996 11.4432C6.5833 12.4682 7.89996 13.7038 9.49996 15.15Z" fill="#006970" />
                    </svg>
                  );
                  iconBg = "bg-[#E6FBF9]";
                  textColor = "text-[#00C2A0]";
                } else if (idx === 2) {
                  icon = (
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50766 18.9999C8.19997 18.9999 6.96824 18.7502 5.81248 18.2509C4.65671 17.7515 3.6487 17.0717 2.78845 16.2115C1.9282 15.3512 1.24839 14.3432 0.749036 13.1874C0.249679 12.0317 0 10.8 0 9.49227C0 8.18458 0.249679 6.95542 0.749036 5.80479C1.24839 4.65415 1.9282 3.6487 2.78845 2.78845C3.6487 1.9282 4.65671 1.24839 5.81248 0.749036C6.96824 0.249679 8.19997 0 9.50766 0C10.8153 0 12.0445 0.249679 13.1951 0.749036C14.3458 1.24839 15.3512 1.9282 16.2115 2.78845C17.0717 3.6487 17.7515 4.65415 18.2509 5.80479C18.7502 6.95542 18.9999 8.18458 18.9999 9.49227C18.9999 10.8 18.7502 12.0317 18.2509 13.1874C17.7515 14.3432 17.0717 15.3512 16.2115 16.2115C15.3512 17.0717 14.3458 17.7515 13.1951 18.2509C12.0445 18.7502 10.8153 18.9999 9.50766 18.9999ZM9.49996 17.4788C10.0102 16.8019 10.4397 16.1192 10.7884 15.4307C11.1372 14.7423 11.4211 13.9897 11.6404 13.173H7.35956C7.59161 14.0153 7.8788 14.7807 8.22111 15.4692C8.56342 16.1577 8.9897 16.8275 9.49996 17.4788ZM7.56347 17.2038C7.18013 16.6538 6.8359 16.0285 6.53076 15.3278C6.22563 14.6272 5.98845 13.9089 5.81921 13.173H2.42687C2.95508 14.2115 3.66342 15.0839 4.5519 15.7904C5.44037 16.4968 6.44423 16.9679 7.56347 17.2038ZM11.4365 17.2038C12.5557 16.9679 13.5596 16.4968 14.448 15.7904C15.3365 15.0839 16.0448 14.2115 16.5731 13.173H13.1807C12.9794 13.9153 12.7262 14.6368 12.4211 15.3375C12.1159 16.0381 11.7877 16.6602 11.4365 17.2038ZM1.79804 11.6731H5.51537C5.45255 11.3013 5.40704 10.9368 5.37883 10.5798C5.35063 10.2227 5.33653 9.86279 5.33653 9.49996C5.33653 9.13714 5.35063 8.7772 5.37883 8.42015C5.40704 8.0631 5.45255 7.69867 5.51537 7.32687H1.79804C1.70189 7.66662 1.62817 8.01982 1.57689 8.38649C1.5256 8.75316 1.49996 9.12432 1.49996 9.49996C1.49996 9.87561 1.5256 10.2468 1.57689 10.6134C1.62817 10.9801 1.70189 11.3333 1.79804 11.6731ZM7.01534 11.6731H11.9846C12.0474 11.3013 12.0929 10.94 12.1211 10.5894C12.1493 10.2387 12.1634 9.87561 12.1634 9.49996C12.1634 9.12432 12.1493 8.76118 12.1211 8.41053C12.0929 8.05989 12.0474 7.69867 11.9846 7.32687H7.01534C6.95252 7.69867 6.907 8.05989 6.8788 8.41053C6.85059 8.76118 6.83649 9.12432 6.83649 9.49996C6.83649 9.87561 6.85059 10.2387 6.8788 10.5894C6.907 10.94 6.95252 11.3013 7.01534 11.6731ZM13.4846 11.6731H17.2019C17.298 11.3333 17.3718 10.9801 17.423 10.6134C17.4743 10.2468 17.5 9.87561 17.5 9.49996C17.5 9.12432 17.4743 8.75316 17.423 8.38649C17.3718 8.01982 17.298 7.66662 17.2019 7.32687H13.4846C13.5474 7.69867 13.5929 8.0631 13.6211 8.42015C13.6493 8.7772 13.6634 9.13714 13.6634 9.49996C13.6634 9.86279 13.6493 10.2227 13.6211 10.5798C13.5929 10.9368 13.5474 11.3013 13.4846 11.6731ZM13.1807 5.82691H16.5731C16.0384 4.77561 15.3349 3.90317 14.4625 3.20957C13.59 2.51597 12.5813 2.04161 11.4365 1.78649C11.8198 2.36854 12.1608 3.00509 12.4595 3.69612C12.7583 4.38715 12.9987 5.09742 13.1807 5.82691ZM7.35956 5.82691H11.6404C11.4083 4.99101 11.1163 4.22081 10.7644 3.51632C10.4125 2.81183 9.99099 2.14676 9.49996 1.52112C9.00893 2.14676 8.58746 2.81183 8.23553 3.51632C7.8836 4.22081 7.59161 4.99101 7.35956 5.82691ZM2.42687 5.82691H5.81921C6.00127 5.09742 6.24166 4.38715 6.54038 3.69612C6.8391 3.00509 7.18013 2.36854 7.56347 1.78649C6.41218 2.04161 5.40191 2.51758 4.53266 3.21438C3.66342 3.91118 2.96149 4.78202 2.42687 5.82691Z" fill="#5B2990" />
                    </svg>
                  );
                  iconBg = "bg-[#F2EBFF]";
                  textColor = "text-[#845ec2]";
                }

                return (
                  <MetricReveal key={idx} delay={idx * 120}>
                    <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100 shadow-sm relative overflow-hidden flex flex-col min-h-[220px] md:min-h-[240px]">
                      <div className="flex justify-between items-center mb-4">
                        <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center text-lg`}>
                          {icon}
                        </div>
                        <span className={`text-xs font-semibold ${textColor}`}>{metric.subtitle}</span>
                      </div>
                      <div className="relative z-10 mt-4 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{metric.title}</p>
                        <h4 className="metric-value text-4xl font-bold text-gray-900 mt-1">{metric.value}</h4>
                      </div>

                      {idx === 0 && (
                        <svg width="216" height="63" viewBox="0 0 216 63" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-0 left-0 w-full h-20 pointer-events-none z-0" preserveAspectRatio="none">
                          <path d="M31.9089 31.562C87.1359 31.562 105.327 -8.75265 140.875 1.744C203.466 20.2257 200.066 25.0424 210.273 41.6418C216 50.9556 216 62.7426 216 62.7426H0.00110174C0.00110174 62.7426 -0.681141 31.562 31.9089 31.562Z" fill="url(#m0_grad)" />
                          <defs>
                            <linearGradient id="m0_grad" x1="100.227" y1="2.05822" x2="101.212" y2="62.8522" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#705DFB" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg width="219" height="101" viewBox="0 0 219 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-0 left-0 w-full h-20 pointer-events-none z-0" preserveAspectRatio="none">
                          <path d="M26.058 47.7923C81.2849 47.7923 131.541 54.0782 162.562 33.7922C196.969 11.293 205.72 -10.8037 215.927 5.79561C221.655 15.1095 216.677 100.47 216.677 100.47H0.678546C0.678546 100.47 -6.53212 47.7923 26.058 47.7923Z" fill="url(#m1_grad)" />
                          <defs>
                            <linearGradient id="m1_grad" x1="100.907" y1="39.7809" x2="101.892" y2="100.575" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#A2E6EC" />
                              <stop offset="1" stopColor="#F1FEFF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg width="216" height="63" viewBox="0 0 216 63" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-0 left-0 w-full h-20 pointer-events-none z-0" preserveAspectRatio="none">
                          <path d="M31.9089 31.562C87.1359 31.562 105.327 -8.75265 140.875 1.744C203.466 20.2257 200.066 25.0424 210.273 41.6418C216 50.9556 216 62.7426 216 62.7426H0.00110174C0.00110174 62.7426 -0.681141 31.562 31.9089 31.562Z" fill="url(#m2_grad)" />
                          <defs>
                            <linearGradient id="m2_grad" x1="100.227" y1="2.05822" x2="101.212" y2="62.8522" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#EFDBFF" />
                              <stop offset="1" stopColor="#F9F6FC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      )}
                    </div>
                  </MetricReveal>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full py-10 md:py-12" style={{ background: 'linear-gradient(to bottom, #F3E7FF, #FFFFFF)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
            <Reveal direction="up">
              <h3 className="text-2xl font-bold text-gray-900">Detailed Campaign Data</h3>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Reveal direction="left" delay={0}>
                <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-[#D7C3E9] px-6 py-5 flex justify-between items-center">
                    <h4 className="font-semibold text-[#1A1C35] text-sm">Search Visibility</h4>
                    <FiSearch className="text-[#845ec2] text-lg" />
                  </div>
                  <div className="divide-y divide-gray-100 bg-white">
                    {data.detailedData.searchVisibility.map((item, idx) => {
                      let valueColor = "text-gray-900";
                      if (item.value.includes("12M+")) valueColor = "text-[#845ec2]";

                      return (
                        <div key={idx} className="flex justify-between items-center px-6 py-4">
                          <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                          <span className={`font-bold text-sm ${valueColor}`}>{item.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
              <Reveal direction="right" delay={120}>
                <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-[#D7C3E9] px-6 py-5 flex justify-between items-center">
                    <h4 className="font-semibold text-[#1A1C35] text-sm">User Acquisition</h4>
                    <FiUserPlus className="text-[#845ec2] text-lg" />
                  </div>
                  <div className="divide-y divide-gray-100 bg-white">
                    {data.detailedData.userAcquisition.map((item, idx) => {
                      let valueColor = "text-gray-900";
                      if (item.value.includes("-")) valueColor = "text-[#00C2A0]";

                      return (
                        <div key={idx} className="flex justify-between items-center px-6 py-4">
                          <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                          <span className={`font-bold text-sm ${valueColor}`}>{item.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-8 md:py-12">
            {data.mockups.image2 && (
              <Reveal direction="left">
                <img src={data.mockups.image2} alt="Mockup 2" className="w-full h-auto rounded-[2.5rem] object-cover shadow-lg" />
              </Reveal>
            )}
            {data.mockups.image3 && (
              <Reveal direction="right" delay={100}>
                <img src={data.mockups.image3} alt="Mockup 3" className="w-full h-auto rounded-[2.5rem] object-cover shadow-lg" />
              </Reveal>
            )}
          </div>

          <div className="space-y-12 md:space-y-16">
            <div className="space-y-6 md:space-y-10 text-center pt-4 md:pt-8">
              <Reveal direction="up">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Growth Channels</h3>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {data.growthChannels.map((channel, idx) => {
                  const icons = [
                    <GoogleAdsIcon />, <MetaAdsIcon />, <SeoIcon />, <AsoIcon />,
                    <AnalyticsIcon />, <PerformanceIcon />, <AcquisitionIcon />, <TrackingIcon />
                  ];
                  return (
                    <Reveal key={idx} delay={idx * 60} direction="up">
                      <div className="lift flex flex-col items-center justify-center space-y-3 md:space-y-4 bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2rem] py-6 md:py-8 shadow-sm">
                        <div className="w-14 h-14 bg-[#F2EBFF] rounded-2xl flex items-center justify-center text-3xl">{icons[idx % 8]}</div>
                        <span className="text-gray-700 font-medium text-sm">{channel.name}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>


            <Reveal direction="up">
              <div className="bg-[#F8F5FC] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
                <div className="space-y-6 md:space-y-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#050505]">Campaign Highlights</h3>
                  <ul className="space-y-6 md:space-y-8">
                    {data.highlights.points.map((point, idx) => (
                      <HighlightItem key={idx} point={point} delay={idx * 100} />
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

        </div >
      </div >
    </>
  );
};

const MetricReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { rootMargin: "-60px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="metric-card reveal reveal-up"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const HighlightItem: React.FC<{ point: string; delay: number }> = ({ point, delay }) => {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { rootMargin: "-40px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <li
      ref={ref}
      className="highlight-li reveal reveal-up flex items-start md:items-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bullet-dot mr-4 md:mr-5 w-7 h-7 md:w-8 md:h-8 mt-1 md:mt-0 rounded-full bg-[#B696ED] flex items-center justify-center flex-shrink-0 shadow-sm opacity-0" style={{ animationDelay: `${delay + 200}ms` }}>
        <FaCheckCircle className="text-white text-sm md:text-base" />
      </div>
      <span className="text-[#1A1C1E] text-base md:text-lg leading-relaxed">{point}</span>
    </li>
  );
};

export default MarketingCaseStudyTemplate;
