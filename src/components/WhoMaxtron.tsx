"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import product1 from "../assets/products/blockchainproduct1.webp";
import product2 from "../assets/products/aiproduct2.webp";
import product3 from "../assets/products/experientialproduct3.webp";
import product4 from "../assets/products/otherproduct4.webp";
import fund1 from "../assets/products/marketing.webp";
import fund2 from "../assets/products/fundraising.webp";

const content = {
  web3: {
    title: "Web3 Custom Solutions",
    description:
      "We deliver enterprise-grade Web3 and blockchain solutions, including native token development and launch, dApp and smart contract engineering, DeFi platforms, crypto gaming, metaverse experiences, and native payment systems, built for scalability, security, and long-term performance.",
    image: product1,
  },
  ai: {
    title: "Applied AI Products & Services",
    description:
      "We deliver practical applied AI solutions including custom machine learning models, AI agents, LLM-powered applications, predictive analytics, and automation systems built to accelerate decision-making, optimize processes, and unlock new business value.",
    image: product2,
  },
  experiential: {
    title: "Experiential Development",
    description:
      "We design immersive and interactive digital experiences using cutting-edge technology from real-time 3D and AR/VR to branded experiential platforms crafted to captivate audiences and drive deeper engagement.",
    image: product3,
  },
  otherTech: {
    title: "Other Tech Services",
    description:
      "We provide comprehensive tech services spanning full-stack development, mobile and cloud solutions, enterprise software, API integrations, DevOps, and system architecture ensuring robust, scalable, and secure digital products.",
    image: product4,
  },
  marketing: {
    title: "Marketing and Digital Strategy",
    description:
      "We create results-focused digital strategies covering brand positioning, growth marketing, performance campaigns, community building, and analytics designed to elevate visibility, engagement, and measurable business growth.",
    image: fund1,
  },
  fundraising: {
    title: "Fundraising and Partnership",
    description:
      "We support fundraising readiness and strategic partnerships with investor narratives, pitch materials, go-to-market advisory, and ecosystem engagement connecting teams with capital, collaborators, and long-term growth opportunities.",
    image: fund2,
  },
};

const projects = Object.entries(content)
  .filter(([, value]) => value && "title" in value)
  .map(([key, value]) => {
    const item = value as { title: string; description: string; image: string };
    return { ...item, serviceKey: key };
  });

const getKeywords = (key: string) =>
  ({
    web3: [
      "Web3",
      "dApp",
      "DeFi",
      "crypto gaming",
      "metaverse",
      "native payment systems",
    ],
    ai: ["AI", "machine learning", "LLM", "automation", "predictive analytics"],
    experiential: ["AR", "VR", "3D", "immersive", "interactive"],
    otherTech: [
      "mobile",
      "web",
      "cloud",
      "API",
      "DevOps",
      "system architecture",
    ],
    marketing: [
      "brand",
      "growth marketing",
      "performance campaigns",
      "analytics",
    ],
    fundraising: ["fundraising", "investors", "partnerships", "capital"],
  }[key] || []);

const HighlightedText = ({
  text,
  serviceKey,
}: {
  text: string;
  serviceKey: string;
}) => {
  const keywords = getKeywords(serviceKey);
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <span key={match.index} className="text-[#7A35C1] font-semibold">
        {match[0]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return <>{parts.length > 0 ? parts : text}</>;
};

const WhoMaxtron: React.FC = () => {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const directionRef = useRef(0);
  const prevIndexRef = useRef(0);

  useEffect(() => {
    const measure = () => {
      const center = window.innerHeight / 2;
      let bestIdx = 0;
      let minDist = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - center);
        if (dist < minDist) {
          minDist = dist;
          bestIdx = idx;
        }
      });

      if (bestIdx !== activeIndex) {
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
  }, [activeIndex]);

  const variants: Variants = {
    initial: (dir: number) => ({ opacity: 0, y: dir === 1 ? 60 : -60 }),
    animate: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir === 1 ? -60 : 60 }),
  };

  return (
    <div
      className="relative w-full bg-white px-5 sm:px-10 md:px-12 lg:px-24 py-16 md:py-24"
      id="projects"
    >
      <div className="max-w-[1500px] mx-auto">
        <header className="mb-12 md:mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] font-[IBM Plex Sans] text-center md:text-left tracking-tighter">
            Smarter business.
            <br className="md:hidden" /> Real impact.
          </h2>
        </header>

        {/* 
           Layout Logic: 
           - Mobile: Stacked, single column.
           - Tablet (md): Asymmetric Grid (42% / 58%) prevents "Skinny Pillar" images.
           - Desktop (lg): Large Gap and wide column proportions.
        */}
        <div className="grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr] lg:grid-cols-2 gap-10 md:gap-14 lg:gap-32 items-start">
          {/* TEXT SIDE (Left) */}
          <div className="flex flex-col relative order-2 md:order-1">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;
              return (
                <section
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="min-h-[40vh] md:min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-center py-10 md:py-0 border-t border-gray-100 first:border-none relative"
                >
                  <div
                    className={`transition-all duration-700 ease-out pl-6 md:pl-10 lg:pl-12 relative ${
                      isActive ? "opacity-100" : "opacity-25 translate-x-1"
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[4px] md:w-[6px] bg-[#7A35C1] rounded-full transition-all duration-700 origin-top
                        ${
                          isActive
                            ? "scale-y-100 opacity-100"
                            : "scale-y-0 opacity-0"
                        }`}
                    />

                    <h3 className="text-[#111111] font-medium text-2xl lg:text-4xl mb-5 lg:mb-8 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-[#2A2A2A] font-light text-base md:text-lg lg:text-xl leading-relaxed max-w-lg font-[IBM Plex Sans]">
                      <HighlightedText
                        text={project.description}
                        serviceKey={project.serviceKey}
                      />
                    </p>

                    <div className="mt-8 md:hidden rounded-2xl overflow-hidden shadow-lg aspect-video">
                      <img
                        src={project.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="hidden md:flex sticky top-28 md:top-36 lg:top-40 h-fit md:order-2">
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[75vh] rounded-3xl md:rounded-[40px] lg:rounded-[56px] overflow-hidden shadow-2xl bg-[#f0f0f0]">
              <AnimatePresence mode="wait" custom={directionRef.current}>
                <motion.div
                  key={activeIndex}
                  custom={directionRef.current}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="absolute inset-0"
                >
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover scale-[1.01]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoMaxtron;
