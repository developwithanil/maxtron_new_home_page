"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { logo1, logo2, logo3, logo4 } from "../assets/products";
import { product1, product2, product3, product4, product5, product6, product7 } from "../assets/products";
const projects = [
    {
      serviceKey: "realAsset",
      title: "Maxtron Real Asset",
      subtitle: "(www.realasset.maxtron.ai)",
      url: "https://www.realasset.maxtron.ai",
      logo: logo1,
      description: "Our experiential innovation division uniting physical and digital worlds to create immersive brand ecosystems. We design AI-driven installations, AR/VR/MR environments, projection mapping, drone and laser shows, interactive gesture systems, metaverse activations, and experiential marketing environments.\n\nFrom product launches to intelligent experience centers, we build high-impact storytelling platforms that captivate audiences and elevate brand presence.",
      image: product1,
    },
    {
      serviceKey: "strategy",
      title: "Maxtron Strategy",
      subtitle: "(www.strategy.maxtron.ai)",
      url: "https://www.strategy.maxtron.ai/",
      logo: logo2,
      description: "Our AI-powered growth and marketing arm delivering scalable expansion through automation-led systems, Web3 and metaverse campaigns, performance marketing, creator and KOL partnerships, and full-funnel strategy.\n\nCombining analytics, AI optimization, and structured growth frameworks, Maxtron Studio transforms brand visibility, engagement, and revenue into measurable, repeatable outcomes for technology-first companies.",
      image: product2,
    },
    {
      serviceKey: "studio",
      title: "Maxtron Studio",
      subtitle: "(www.studio.maxtron.ai)",
      url: "https://www.studio.maxtron.ai",
      logo: logo3,
      description: "Our AI-powered growth and marketing arm delivering scalable expansion through automation-led systems, Web3 and metaverse campaigns, performance marketing, creator and KOL partnerships, and full-funnel strategy.\n\nCombining analytics, AI optimization, and structured growth frameworks, Maxtron Studio transforms brand visibility, engagement, and revenue into measurable, repeatable outcomes for technology-first companies.",
      image: product3,
    },
    {
      serviceKey: "experiences",
      title: "Maxtron Experiences",
      subtitle: "(www.experiences.maxtron.ai)",
      url: "https://www.experiences.maxtron.ai",
      logo: logo4,
      description: "A compliant real-world asset tokenization platform enabling programmable ownership of gold, mining assets, real estate, equities, bonds, and infrastructure across global markets including the USA, UK, Dubai and India.\n\nBuilt for scalability and regulatory alignment, RealAsset.Maxtron.ai unlocks liquidity for high-value assets within the rapidly expanding RWA economy.",
      image: product4,
    },
    {
      serviceKey: "web3",
      title: "Web3 Custom Solutions",
      description: "We deliver enterprise-grade Web3 and blockchain solutions, including native token development and launch, dApp and smart contract engineering, DeFi platforms, crypto gaming, metaverse experiences, and native payment systems, built for scalability, security, and long-term performance.",
      image: product5,
    },
    {
      serviceKey: "appliedAI",
      title: "Applied AI Products & Services",
      description: "We deliver practical applied AI solutions including custom machine learning models, AI agents, LLM-powered applications, predictive analytics, and automation systems built to accelerate decision-making, optimize processes, and unlock new business value.",
      image: product6,
    },
    {
      serviceKey: "otherTech",
      title: "Other Tech Services",
      description: "We provide comprehensive tech services spanning full-stack development, mobile and cloud solutions, enterprise software, API integrations, DevOps, and system architecture ensuring robust, scalable, and secure digital products.",
      image: product7,
    },
];

const getKeywords = (key: string) =>
  ({
    web3: ["Web3", "dApp", "DeFi", "crypto gaming", "metaverse", "blockchain"],
    appliedAI: ["AI", "machine learning", "LLM", "automation", "predictive analytics", "AI agents"],
    experiences: ["AR", "VR", "RWA", "tokenization", "liquidity"],
    otherTech: ["full-stack", "mobile", "cloud", "DevOps", "API"],
    strategy: ["growth", "Web3", "metaverse", "marketing", "analytics"],
    studio: ["growth", "automation", "marketing", "analytics"],
    realAsset: ["innovation", "AR/VR/MR", "AI-driven"],
  }[key] || []);

const HighlightedText = ({ text, serviceKey }: { text: string; serviceKey: string }) => {
  const keywords = getKeywords(serviceKey);
  if (keywords.length === 0) return <>{text}</>;

  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className="text-[#7A35C1] font-bold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

const WhoMaxtron: React.FC = () => {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const directionRef = useRef(0);
  const prevIndexRef = useRef(0);

  useEffect(() => {
    const measure = () => {
     
      const viewportCenter = window.innerHeight * 0.45;
      let bestIdx = 0;
      let minDist = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elementCenter - viewportCenter);

        if (dist < minDist) {
          minDist = dist;
          bestIdx = idx;
        }
      });

      if (bestIdx !== prevIndexRef.current) {
        directionRef.current = bestIdx > prevIndexRef.current ? 1 : -1;
        prevIndexRef.current = bestIdx;
        setActiveIndex(bestIdx);
      }
    };

    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const variants: Variants = {
    initial: (dir: number) => ({ opacity: 0, y: dir === 1 ? 40 : -40 }),
    animate: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir === 1 ? -40 : 40 }),
  };

  return (
    <section className="relative w-full bg-white px-6 sm:px-10 md:px-12 lg:px-20 py-12 md:py-24" id="projects">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#2A2A2A] font-[IBM Plex Sans] tracking-tight">
            Smarter business. <br className="sm:hidden" /> 
            <span className="font-medium text-black">Real impact.</span>
          </h2>
        </header>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
       
          <div className="flex flex-col relative order-2 md:order-1">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;
              return (
                  <section
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className="flex flex-col justify-center py-12 md:py-20 lg:py-28 border-t border-gray-100 first:border-none relative"
                  >
                    <div
                      className={`transition-all duration-700 ease-in-out pl-6 md:pl-10 ${
                      isActive ? "opacity-100 translate-x-0" : "opacity-20 md:opacity-30 translate-x-0"
                    }`}
                  >
                   
                    <div
                      className={`absolute left-0 top-10 bottom-10 w-[3px] md:w-[5px] bg-[#7A35C1] rounded-full transition-all duration-700 origin-top
                        ${isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
                    />

                    
                    {project.logo && (
                      <div className="mb-6 h-10 md:h-12 lg:h-14">
                        <img 
                          src={project.logo} 
                          alt={`${project.title} logo`} 
                          className="h-full w-auto object-contain" 
                        />
                      </div>
                    )}

                  
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group mb-4">
                        <h3 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl leading-tight group-hover:text-[#7A35C1] transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <span className="text-[#7A35C1]/70 font-semibold text-base md:text-lg block mt-1 break-words">
                            {project.subtitle}
                          </span>
                        )}
                      </a>
                    ) : (
                      <div className="mb-4">
                        <h3 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    )}

                    <p className="text-[#000000] font-normal text-sm md:text-base lg:text-base leading-relaxed max-w-lg font-[IBM Plex Sans] whitespace-pre-wrap">
                      {project.description}
                    </p>

                   
                    <div className="mt-8 md:hidden rounded-2xl overflow-hidden shadow-xl aspect-video border border-gray-100">
                       <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

         
          <div className="hidden md:block sticky top-[15vh] h-fit md:order-2">
            <div className="relative w-full aspect-[4/5] xl:aspect-[1/1.2] rounded-3xl lg:rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-[#f8f8f8]">
              <AnimatePresence mode="wait" custom={directionRef.current}>
                <motion.div
                  key={activeIndex}
                  custom={directionRef.current}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {projects[activeIndex].url ? (
                    <a href={projects[activeIndex].url} target="_blank" rel="noopener noreferrer" className="block w-full h-full group">
                       <img
                        src={projects[activeIndex].image}
                        alt={projects[activeIndex].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                    </a>
                  ) : (
                    <img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                  )}
               
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
            
           
            <div className="mt-8 flex justify-center gap-2">
                {projects.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === i ? 'w-8 bg-[#7A35C1]' : 'w-2 bg-gray-200'}`}
                    />
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoMaxtron;