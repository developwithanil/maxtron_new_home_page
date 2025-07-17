"use client";
import { motion, easeOut, cubicBezier } from "framer-motion";
import bgcard1 from "../../assets/bgcard1.webp";
import bgcard2 from "../../assets/bgcard2.webp";
import bgcard3 from "../../assets/bgcard3.webp";
import bgcard4 from "../../assets/bgcard4.webp";

const smoothEase = cubicBezier(0.6, 0.01, -0.05, 0.95);

const fromLeftTop = {
  hidden: { opacity: 0, x: -80, y: -80, rotateZ: -6, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: 10,
    scale: 1,
    transition: { duration: 0.9, ease: smoothEase },
  },
};

const fromRightTop = {
  hidden: { opacity: 0, x: 80, y: -80, rotateZ: 6, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: -10,
    scale: 1,
    transition: { duration: 0.9, ease: smoothEase, delay: 0.2 },
  },
};

const fromLeftBottom = {
  hidden: { opacity: 0, x: -80, y: 80, rotateZ: -4, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: -2,
    scale: 1,
    transition: { duration: 0.9, ease: smoothEase, delay: 0.4 },
  },
};

const fromRightBottom = {
  hidden: { opacity: 0, x: 80, y: 80, rotateZ: -4, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: -10,
    scale: 1,
    transition: { duration: 0.9, ease: smoothEase, delay: 0.6 },
  },
};

const getFloatingProps = (
  amplitude: number,
  duration: number,
  delay: number = 0
) => ({
  animate: { y: [0, -amplitude, 0, amplitude, 0] },
  transition: {
    y: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration,
      ease: easeOut,
      delay,
    },
  },
});

const cards = [
  {
    title: "Rapid user growth and unpredictable load",
    className:
      "absolute left-[18%] top-[38%] md:left-[28%] md:top-[28%] lg:left-[23%] lg:top-[28%] p-4 bg-[#F0F2F5] rounded-lg shadow-xl",
    style: {
      width: "250px",
      transform: "rotate(-5deg)",
      backgroundImage: `url(${bgcard1})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    amplitude: 24,
    duration: 3.9,
    delay: 0.1,
    variant: fromLeftTop,
    icon: "h-24 bg-gray-300 rounded-md flex items-center justify-center text-gray-500",
  },
  {
    title: "Cross-chain interoperability and fragmentation",

    className:
      "absolute right-[18%] top-[43%] md:right-[23%] md:top-[23%] lg:right-[18%] lg:top-[18%] p-4 bg-[#E8E8E8] rounded-lg shadow-xl",
    style: {
      width: "280px",
      transform: "rotate(8deg)",
      backgroundImage: `url(${bgcard2})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    amplitude: 18,
    duration: 3.6,
    delay: 0.3,
    variant: fromRightTop,
    icon: "h-28 bg-gray-400 rounded-md flex items-center justify-center text-gray-600",
  },
  {
    title: "Real-time compliance and smart contract risks",

    className:
      "absolute left-1/2 bottom-[10%] -translate-x-[60%] p-4 bg-[#ECECEC] rounded-lg shadow-xl",
    style: {
      width: "270px",
      transform: "rotate(0deg)",
      backgroundImage: `url(${bgcard3})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    amplitude: 15,
    duration: 4.2,
    delay: 0.5,
    variant: fromLeftBottom,
    icon: "h-24 bg-gray-400 rounded-md flex items-center justify-center text-gray-600",
  },
  {
    title: "Demand for seamless, intuitive UX at Web2 standards",

    className:
      "absolute left-1/3 bottom-[10%] -translate-x-[-10%] p-4 bg-[#ECECEC] rounded-lg shadow-xl",
    style: {
      width: "270px",
      transform: "rotate(0deg)",
      backgroundImage: `url(${bgcard4})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    amplitude: 21,
    duration: 3.8,
    delay: 0.7,
    variant: fromRightBottom,
    icon: "h-24 bg-gray-400 rounded-md flex items-center justify-center text-gray-600",
  },
];

const Web3Needs = () => (
  <section
    id="about-us"
    className="relative py-12 text-center bg-white overflow-hidden min-h-[900px] md:min-h-[800px]"
  >
    <div className="mb-8 relative z-20">
      <div className="border border-[#E0E0E0] rounded-full w-fit mx-auto px-8 mb-2">
        <h2 className="text-lg text-[#2A2A2A] py-2 px-4 font-normal">
          We specialize in
        </h2>
      </div>
      <p className="text-[#171717] font-[Switzer] text-4xl md:text-6xl font-semibold max-w-4xl mx-auto">
        Why Web3 Needs Maxtron
      </p>
    </div>

    <div className="absolute inset-0 pointer-events-none z-10">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          className={`${card.className} overflow-hidden`}
          style={card.style}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={card.variant}
          {...getFloatingProps(card.amplitude, card.duration, card.delay)}
        >
          <div className="w-full h-full flex items-center justify-center p-6 backdrop-blur-md bg-white/60 rounded-xl shadow-md mb-20">
            <h3 className="text-xl md:text-2xl font-medium font-[Switzer] text-[#171717] leading-snug text-left w-full">
              {card.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="relative z-20">
      <p className="text-[#444] text-lg md:text-xl font-normal max-w-2xl mx-auto mb-16 px-6">
        Web3 projects – whether DeFi protocols, NFT platforms, DAOs or
        blockchain infrastructure – face unique challenges
      </p>
    </div>
    <motion.button
      className="inline-flex items-center justify-center px-8 py-3 text-white bg-[#5B34EA] rounded-full shadow-lg hover:bg-[#4a2bb3] transition duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Book a call
      <svg
        className="ml-2 w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
    </motion.button>
  </section>
);

export default Web3Needs;
