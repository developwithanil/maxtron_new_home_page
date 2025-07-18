"use client";
import {
  motion,
  useScroll,
  useTransform,
  cubicBezier,
  easeInOut,
} from "framer-motion";
import React, { useRef } from "react";
import bgcard1 from "../../assets/bgcard1.webp";
import bgcard2 from "../../assets/bgcard2.webp";
import bgcard3 from "../../assets/bgcard3.webp";
import bgcard4 from "../../assets/bgcard4.webp";

const smoothEase = cubicBezier(0.6, 0.01, -0.05, 0.95);

interface CardData {
  title: string;
  className: string;
  rotate: number;
  style: React.CSSProperties;
  yAmplitude: number;
  yDuration: number;
  rotateAmplitude: number;
  rotateDuration: number;
  delay: number;
}

export const getFloatingProps = (
  yAmplitude: number,
  rotateAmplitude: number,
  yDuration: number,
  rotateDuration: number,
  delay: number = 0
) => ({
  animate: {
    y: [0, -yAmplitude, 0, yAmplitude, 0],
    rotateZ: [-rotateAmplitude, rotateAmplitude, -rotateAmplitude],
  },
  transition: {
    y: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: yDuration,
      ease: easeInOut,
      delay,
    },
    rotateZ: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: rotateDuration,
      ease: easeInOut,
      delay: delay + yDuration * 0.1,
    },
  },
});

const cards: CardData[] = [
  {
    title: "Rapid user growth and unpredictable load",
    className:
      "absolute left-[5%] top-[35%] md:left-[28%] md:top-[28%] lg:left-[23%] lg:top-[28%] p-2 md:p-4 rounded-lg shadow-xl w-[280px] h-[160px] md:w-[416px] md:h-[226px]",
    rotate: 8,
    style: {
      backgroundImage: `url(${bgcard1})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    yAmplitude: 28,
    yDuration: 3.9,
    rotateAmplitude: 3,
    rotateDuration: 4.5,
    delay: 0.1,
  },
  {
    title: "Cross-chain interoperability and fragmentation",
    className:
      "absolute right-[5%] top-[40%] md:right-[23%] md:top-[23%] lg:right-[18%] lg:top-[18%] p-2 md:p-4 rounded-lg shadow-xl w-[280px] h-[160px] md:w-[416px] md:h-[226px]",
    rotate: -8,
    style: {
      backgroundImage: `url(${bgcard2})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    yAmplitude: 18,
    yDuration: 3.6,
    rotateAmplitude: 2.5,
    rotateDuration: 4.2,
    delay: 0.3,
  },
  {
    title: "Real-time compliance and smart contract risks",
    className:
      "absolute left-[5%] top-[60%] md:left-[20%] md:top-[60%] lg:left-[18%] lg:top-[58%] p-2 md:p-4 rounded-lg shadow-xl w-[280px] h-[160px] md:w-[416px] md:h-[226px]",
    rotate: 3,
    style: {
      backgroundImage: `url(${bgcard3})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    yAmplitude: 15,
    yDuration: 4.2,
    rotateAmplitude: 2,
    rotateDuration: 3.8,
    delay: 0.5,
  },
  {
    title: "Demand for seamless, intuitive UX at Web2 standards",
    className:
      "absolute right-[5%] top-[65%] md:right-[20%] md:top-[65%] lg:right-[18%] lg:top-[63%] p-2 md:p-4 rounded-lg shadow-xl w-[280px] h-[160px] md:w-[416px] md:h-[226px]",
    rotate: -4,
    style: {
      backgroundImage: `url(${bgcard4})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    yAmplitude: 21,
    yDuration: 3.8,
    rotateAmplitude: 3.5,
    rotateDuration: 5.0,
    delay: 0.7,
  },
];

const Web3Needs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const AnimatedCard: React.FC<{
    cardData: CardData;
    index: number;
  }> = ({ cardData, index }) => {
    const animationKeyframes = [
      {
        inputRange: [0.05, 0.2, 0.6, 0.7],
        yOutput: ["-50vh", "0vh", "-50vh", "-80vh"],
        xOutput: ["-50vw", "0vw", "0vw", "-50vw"],
        opacityOutput: [0, 1, 1, 0],
        rotateZOutput: [
          cardData.rotate + 15,
          cardData.rotate,
          cardData.rotate - 5,
          cardData.rotate - 15,
        ],
        scaleOutput: [0.8, 1, 1, 0.8],
      },
      {
        inputRange: [0.1, 0.25, 0.65, 0.75],
        yOutput: ["-50vh", "0vh", "-50vh", "-80vh"],
        xOutput: ["50vw", "0vw", "0vw", "50vw"],
        opacityOutput: [0, 1, 1, 0],
        rotateZOutput: [
          cardData.rotate - 15,
          cardData.rotate,
          cardData.rotate + 5,
          cardData.rotate + 15,
        ],
        scaleOutput: [0.8, 1, 1, 0.8],
      },
      {
        inputRange: [0.4, 0.55, 0.85, 0.95],
        yOutput: ["50vh", "0vh", "-30vh", "-60vh"],
        xOutput: ["-50vw", "0vw", "0vw", "-50vw"],
        opacityOutput: [0, 1, 1, 0],
        rotateZOutput: [
          cardData.rotate + 10,
          cardData.rotate,
          cardData.rotate - 3,
          cardData.rotate - 10,
        ],
        scaleOutput: [0.8, 1, 1, 0.8],
      },
      {
        inputRange: [0.45, 0.6, 0.9, 0.99],
        yOutput: ["50vh", "0vh", "-30vh", "-60vh"],
        xOutput: ["50vw", "0vw", "0vw", "50vw"],
        opacityOutput: [0, 1, 1, 0],
        rotateZOutput: [
          cardData.rotate - 10,
          cardData.rotate,
          cardData.rotate + 3,
          cardData.rotate + 10,
        ],
        scaleOutput: [0.8, 1, 1, 0.8],
      },
    ];

    const currentKeyframe = animationKeyframes[index];

    const y = useTransform(
      scrollYProgress,
      currentKeyframe.inputRange,
      currentKeyframe.yOutput,
      { ease: smoothEase }
    );
    const x = useTransform(
      scrollYProgress,
      currentKeyframe.inputRange,
      currentKeyframe.xOutput,
      { ease: smoothEase }
    );
    const opacity = useTransform(
      scrollYProgress,
      currentKeyframe.inputRange,
      currentKeyframe.opacityOutput,
      { ease: smoothEase }
    );
    const rotateZ = useTransform(
      scrollYProgress,
      currentKeyframe.inputRange,
      currentKeyframe.rotateZOutput,
      { ease: smoothEase }
    );
    const scale = useTransform(
      scrollYProgress,
      currentKeyframe.inputRange,
      currentKeyframe.scaleOutput,
      { ease: smoothEase }
    );

    return (
      <motion.div
        className={`${cardData.className} overflow-hidden`}
        style={{
          ...cardData.style,
          y,
          x,
          opacity,
          rotateZ,
          scale,
        }}
      >
        <motion.div>
          <div className="w-full h-full flex items-center justify-center p-3 md:p-6 backdrop-blur-md bg-white/60 rounded-xl shadow-md">
            <h3 className="text-sm md:text-xl lg:text-2xl font-medium font-[Switzer] text-[#171717] leading-tight md:leading-snug text-left w-full">
              {cardData.title}
            </h3>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      id="about-us"
      ref={ref}
      className="relative py-12 text-center  overflow-hidden h-[800px]  "
    >
      <div className="mb-8 sticky top-2 z-20 pt-8 pb-4 h-[700px] ">
        <div className="border border-[#E0E0E0] bg-white rounded-full w-fit mx-auto px-8 mb-2">
          <h2 className="text-lg text-[#2A2A2A] py-2 px-4 font-normal">
            We specialize in
          </h2>
        </div>
        <p className="text-[#171717] font-[Switzer] text-4xl md:text-9xl font-semibold max-w-8xl mx-auto">
          Why Web3 Needs Maxtron
        </p>
        <p className="text-[#171717]  text-lg md:text-xl font-bold max-w-2xl mx-auto mb-16 px-6 font-openSansHebrew py-32">
          Web3 projects – whether DeFi protocols, NFT platforms, DAOs or
          blockchain infrastructure – face unique challenges
        </p>

        <motion.button className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white bg-[#7A35C1] rounded-full shadow-lg hover:bg-[#4a2bb3] transition duration-300 ease-in-out sticky bottom-8 left-1/2 -translate-x-1/2 z-30 font-openSansHebrew">
          Book a call
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.05078 10.9497L10.2432 1.75734M2.46499 1.05023H9.95028C10.5026 1.05023 10.9503 1.49795 10.9503 2.05023V9.53551"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </motion.button>
      </div>

      <div className="absolute inset-0 z-10" style={{ pointerEvents: "none" }}>
        <AnimatedCard cardData={cards[0]} index={0} />
        <AnimatedCard cardData={cards[1]} index={1} />

        <AnimatedCard cardData={cards[2]} index={2} />
        <AnimatedCard cardData={cards[3]} index={3} />
      </div>
    </section>
  );
};

export default Web3Needs;
