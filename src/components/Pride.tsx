import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

interface StatItem {
  id: string;
  number: number;
  suffix: string;
  label: string;
}

const prideData: StatItem[] = [
  {
    id: "experience",
    number: 12,
    suffix: "+",
    label: "Years Of Experience",
  },
  {
    id: "products",
    number: 3,
    suffix: "K+",
    label: "Products Delivered",
  },
  {
    id: "countries",
    number: 20,
    suffix: "+",
    label: "Countries Reached Worldwide",
  },
  {
    id: "awards",
    number: 15,
    suffix: "+",
    label: "Industry Awards",
  },
  {
    id: "partners",
    number: 100,
    suffix: "+",
    label: "Business Partners",
  },
];

const Pride = () => {
  return (
    <section className="py-8 lg:py-16  overflow-hidden">
      <div className="max-w-[90rem] mx-auto px- sm:px-6 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          <motion.div
            className="w-full lg:w-5/12  text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2A2A2A] leading-tight font-[IBM Plex Sans]">
              Maxtron’s
              <br />
              <span className="font-normal block mt-2">Achievements</span>
            </h2>
          </motion.div>

          <div className="w-full lg:w-7/12 ">
            <div className="grid grid-cols-2 gap-y-12 sm:gap-x-12 lg:gap-x-24">
              {prideData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex flex-col"
                >
                  <span className="text-sm font-bold text-[#2A2A2A] mb-2 block tracking-wide ont-[IBM Plex Sans]">
                    {item.label}
                  </span>
                  <div className="flex items-baseline">
                    <span
                      className="text-5xl sm:text-6xl font-light text-[#9747FF]"
                      style={{
                        background: "linear-gradient(180deg, #BCA1DD 0%, #7A35C1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <CountUp
                        end={item.number}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </span>
                    <span
                      className="text-5xl sm:text-6xl font-light ml-1"
                      style={{
                        background: "linear-gradient(180deg, #BCA1DD 0%, #7A35C1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.suffix}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pride;
