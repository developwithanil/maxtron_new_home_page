import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Globe from "./Globe";

const HeroSection = React.memo(function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden">
    
      <div className="absolute top-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-[#7A35C1]/5 blur-[80px]" />
      
      <div className="mx-auto px-6 sm:px-8 lg:pl-12 lg:pr-0 relative z-10">
        <div className="grid min-h-[60vh] grid-cols-1 items-center gap-8 py-10 sm:min-h-[75vh] sm:py-12 lg:grid-cols-2 lg:gap-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[#593E91] text-[36px] font-light leading-[1.15] tracking-tight sm:text-[48px] lg:text-[56px] font-[IBM Plex Sans] leading-[1.5]"
            >
              Creating Winning Companies,
              <br className="hidden lg:block" />
              Making Them Successful and
              <br className="hidden lg:block" />
              Taking them Public
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#161616]/80 sm:text-base lg:mx-0"
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
                className="bg-[#7A35C1] px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#602E8D] rounded-sm hover:shadow-lg"
              >
                Book A Call
              </Link>
            </motion.div>
          </motion.div>

          {/* Premium 3D Globe Section - Larger size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:justify-end lg:min-h-[600px]"
          >
             <div className="relative w-full max-w-[500px] aspect-square lg:max-w-[800px] lg:-mr-32">
                <Globe className="w-full h-full" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
