import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import globe from "../globe.png";

const HeroSection = React.memo(function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:pl-8 lg:pr-0">
        <div className="grid min-h-[70vh] grid-cols-1 items-center gap-10 py-10 sm:min-h-[85vh] sm:py-12 lg:grid-cols-2 lg:gap-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="bg-gradient-to-r from-[#593E91] to-[#6069B5] bg-clip-text text-[42px] font-light leading-[1.1] tracking-tight text-transparent sm:text-[60px] lg:text-[60px] font-[IBM Plex Sans]"
            >
              Creating Winning Companies,
              <br />
              Making Them Successful and
              <br />
              Taking them Public
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#161616]/80 sm:text-lg lg:mx-0"
            >
              Maxtron delivers the best digital product engineering and
              consulting services, driving innovation with AI, blockchain, and
              end-to-end product development solution for startups, SMBs, and
              enterprises.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#7A35C1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#602E8D] hover:shadow-lg active:scale-95"
              >
                Book A Call
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden justify-center lg:flex lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="w-full max-w-[280px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[680px] lg:-mr-16 xl:-mr-24"
            >
              <img
                src={globe}
                alt="Globe"
                className="h-full w-full select-none object-contain"
                draggable={false}
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
