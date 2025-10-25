import React from "react";
import aiSvg from "../../assets/ai_images/first.webp";
import aiProduct from "../../assets/ai_images/second.webp";
import aiCallingBg from "../../assets/ai_images/third.webp";
import AIPowTeam from "../elementalComponent/aipowteam";
import MaxtronFeatures from "../elementalComponent/MaxtronFeatures";
import IdealFor from "../elementalComponent/Ideal";
import AIStudioDelivers from "../elementalComponent/AiDelivers";
import AIFooter from "../elementalComponent/AIFooter";
import WhyMaxtronAI from "../elementalComponent/WhyMaxtronAI";
import AIFaq from "../elementalComponent/AIFaqs";
import { Helmet } from "react-helmet-async";

const ArtificialIntelligence = () => {
  return (
    <>
      <Helmet>
        <title>Artificial Intelligence | Maxtron</title>
        <meta
          name="description"
          content="Maxtron delivers advanced Artificial Intelligence solutions to accelerate your business growth with cutting-edge technology."
        />
        <link
          rel="canonical"
          href="https://www.maxtron.ai/artificial-intelligence"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <meta property="og:title" content="Artificial Intelligence | Maxtron" />
        <meta
          property="og:description"
          content="Maxtron delivers advanced Artificial Intelligence solutions to accelerate your business growth with cutting-edge technology."
        />
        <meta
          property="og:image"
          content="https://www.maxtron.ai/src/assets/MaxtronLogo.png"
        />
        <meta
          property="og:url"
          content="https://www.maxtron.ai/artificial-intelligence"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="w-full max-w-[96rem] mx-auto bg-white text-gray-900 min-h-screen">
        <div className="flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-20">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-[Switzer] md:text-5xl lg:text-5xl font-black leading-[126%] text-[#1A1A1A] tracking-tight mb-8">
              Artificial Intelligence Solutions in India
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[Switzer] text-[#6C4AB6] font-normal mt-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover how Maxtron Innovation is transforming India with AI. We
              deliver cutting-edge AI, ML, NLP, and automation solutions
              tailored for Indian industries—healthcare, finance, agriculture,
              and more. Ethical, scalable, and multilingual AI built for Bharat.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl">
              <div className="flex-1">
                <img
                  src={aiSvg}
                  alt="AI abstract"
                  loading="lazy"
                  className="rounded-2xl w-full h-full object-cover shadow-xl"
                  style={{ aspectRatio: "3/4", maxHeight: "500px" }}
                />
              </div>

              <div className="flex flex-1 flex-col gap-6">
                <img
                  src={aiProduct}
                  alt="AI Product"
                  loading="lazy"
                  className="rounded-2xl w-full object-cover shadow-xl"
                  style={{ aspectRatio: "1/1", maxHeight: "240px" }}
                />
                <img
                  src={aiCallingBg}
                  alt="AI Studio Background"
                  loading="lazy"
                  className="rounded-2xl w-full object-cover shadow-xl"
                  style={{ aspectRatio: "1/1", maxHeight: "240px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <AIPowTeam />
        <AIStudioDelivers />
        <MaxtronFeatures />
        <IdealFor />
        <WhyMaxtronAI />
        <AIFaq />
        <div className="w-full max-w-[96rem] mx-auto py-12 px-8 lg:px-16">
          <AIFooter />
        </div>
      </div>
    </>
  );
};

export default ArtificialIntelligence;
