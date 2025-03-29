"use client";
import React, { useMemo } from "react";
import { motion } from 'framer-motion';

interface TechnologyProps {
    techs: Array<{
        name: string;
        icon: string;
    }>;
}

const Technology: React.FC<TechnologyProps> = ({ techs }) => {
    const itemWidth = 180;
    const animationDuration = 40; 

   
    const { containerWidth, totalContentWidth, shouldScroll } = useMemo(() => {
        const calculatedContainerWidth = typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.8, 1200) : 1200;
        const calculatedTotalContentWidth = techs.length * itemWidth;
        const calculatedShouldScroll = calculatedTotalContentWidth > calculatedContainerWidth;

        return {
            containerWidth: calculatedContainerWidth,
            totalContentWidth: calculatedTotalContentWidth,
            shouldScroll: calculatedShouldScroll,
        };
    }, [techs]);

    const animationVariants = {
        initial: { x: containerWidth },
        animate: {
            x: shouldScroll ? `-${totalContentWidth}px` : 0,
            transition: {
                x: {
                    repeat: Infinity,
                    duration: animationDuration,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="flex flex-col lg:flex-row w-full mx-auto max-w-[88rem] items-start gap-5 md:gap-8 px-4 sm:px-6 md:px-8 py-7 md:py-10 lg:py-12">
            {/* Header */}
            <div className="lg:w-1/4 w-full">
                <p className="text-[#B1B1B1] [font-family:Switzer] text-lg md:text-2xl font-medium leading-[160%] uppercase">
                    Technology used
                </p>
            </div>

            {/* Tech Stack Container */}
            <div className="lg:w-3/4 w-full ">
                {/* Desktop Row Layout */}
                <div className="w-full relative overflow-hidden">
                    <motion.div
                        className="flex flex-nowrap gap-4 md:gap-6"
                        style={{ width: `${containerWidth}px` }}
                        variants={animationVariants}
                        initial="intial"
                        animate="animate"
                    >
                        {techs.concat(techs).concat(techs).concat(techs).concat(techs).concat(techs).map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 py-2 lg:py-3 px-4  lg:px-6 rounded-xl border border-gray-100"
                            >
                                {tech.icon && (
                                    <div className="w-8 h-8 flex items-center justify-center bg-[#8941C4]/10 rounded-lg">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-5 h-5 object-contain"
                                        />
                                    </div>
                                )}
                                <span className="text-gray-800 [font-family:Inter] font-medium whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Technology;