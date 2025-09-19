import { CaseStudy } from "../elementalComponent/types";
import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../ContactForm";
import Problem from "../elementalComponent/Problem";
import ImageSection from "../elementalComponent/ImageSection";
import Solution from "../elementalComponent/Solution";
import BusinessResult from "../elementalComponent/BusinessResult";
import Technology from "../elementalComponent/Technology";
import Process from "../elementalComponent/Process";
import KeyFeature from "../elementalComponent/KeyFeature";
import { Helmet } from "react-helmet-async";

interface InternalPageProps {
  caseStudies: CaseStudy[];
}

const InternalPageDetails: React.FC<InternalPageProps> = ({ caseStudies }) => {
  const { casestudyName } = useParams<{ casestudyName: string }>();
  const canonicalUrl = `https://www.maxtron.ai/case-study/${casestudyName}`;
  const caseStudyName = casestudyName?.replace(/-/g, " ");
  const caseStudy = caseStudies.find((study) => study.name === caseStudyName);

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-8">Case study not found</div>
    );
  }
  const {
    title,
    subtitle,
    heroImage,
    type,
    industryInfo,
    bussinessNeeds,
    results,
    projectDuration,
    clientSatisfaction,
    problemSolutionResult,
    techs,
    afterHeroSection,
    keyFeatures,
    description,
    keyFeaturesImage,
    bgImage,
  } = caseStudy;
  console.log("image internal ", bgImage);
  return (
    <>
      <Helmet>
        {(() => {
          if (title === "Ludo Love") {
            return (
              <>
                <title>
                  Blockchain Game Development Case Study | Maxtron Innovations
                </title>
                <meta
                  name="description"
                  content="Discover how Maxtron created a blockchain-based game solution. This case study details the development process, challenges overcome, and results achieved."
                />
                <meta
                  property="og:title"
                  content="Blockchain Game Development Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Discover how Maxtron created a blockchain-based game solution. This case study details the development process, challenges overcome, and results achieved."
                />
                <meta
                  property="twitter:title"
                  content="Blockchain Game Development Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Discover how Maxtron created a blockchain-based game solution. This case study details the development process, challenges overcome, and results achieved."
                />
              </>
            );
          } else if (title === "ShaperCult") {
            return (
              <>
                <title>
                  ECommerce Marketing Case Study | Maxtron Innovations
                </title>
                <meta
                  name="description"
                  content="Learn how Maxtron transformed eCommerce marketing strategies to drive growth, optimize ROI, and increase conversions. Read the full case study."
                />
                <meta
                  property="og:title"
                  content="ECommerce Marketing Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Learn how Maxtron transformed eCommerce marketing strategies to drive growth, optimize ROI, and increase conversions. Read the full case study."
                />
                <meta
                  property="twitter:title"
                  content="ECommerce Marketing Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Learn how Maxtron transformed eCommerce marketing strategies to drive growth, optimize ROI, and increase conversions. Read the full case study."
                />
              </>
            );
          } else if (title === "HYPER CASUAL GAMES") {
            return (
              <>
                <title>
                  Mini Gaming Platform Case Study | Maxtron Innovations
                </title>
                <meta
                  name="description"
                  content="Discover how Maxtron engineered a compact, high-performance gaming platform. This case study delves into the design, development, and impact of the project."
                />
                <meta
                  property="og:title"
                  content="Mini Gaming Platform Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Discover how Maxtron engineered a compact, high-performance gaming platform. This case study delves into the design, development, and impact of the project."
                />
                <meta
                  property="twitter:title"
                  content="Mini Gaming Platform Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Discover how Maxtron engineered a compact, high-performance gaming platform. This case study delves into the design, development, and impact of the project."
                />
              </>
            );
          } else if (title === "AI CALLING AGENT") {
            return (
              <>
                <title>AI Calling Tool Case Study | Maxtron Innovations</title>
                <meta
                  name="description"
                  content="Explore Maxtron's approach to creating an AI calling tool that streamlines communication workflows. This case study delves into the project's journey from concept to deployment."
                />
                <meta
                  property="og:title"
                  content="AI Calling Tool Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Explore Maxtron's approach to creating an AI calling tool that streamlines communication workflows. This case study delves into the project's journey from concept to deployment."
                />
                <meta
                  property="twitter:title"
                  content="AI Calling Tool Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Explore Maxtron's approach to creating an AI calling tool that streamlines communication workflows. This case study delves into the project's journey from concept to deployment."
                />
              </>
            );
          } else if (title === "WEB 3.0 MARKETING PROJECT") {
            return (
              <>
                <title>
                  Crypto Project Marketing Case Study | Maxtron Innovations
                </title>
                <meta
                  name="description"
                  content="Explore Maxtron's approach to crypto project marketing, focusing on community building and strategic outreach. This case study highlights our methods and outcomes."
                />
                <meta
                  property="og:title"
                  content="Crypto Project Marketing Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Explore Maxtron's approach to crypto project marketing, focusing on community building and strategic outreach. This case study highlights our methods and outcomes."
                />
                <meta
                  property="twitter:title"
                  content="Crypto Project Marketing Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Explore Maxtron's approach to crypto project marketing, focusing on community building and strategic outreach. This case study highlights our methods and outcomes."
                />
              </>
            );
          } else if (title === "VOTING BLOCK USA") {
            return (
              <>
                <title>
                  Blockchain-Based E-Voting System Case Study | Maxtron
                  Innovations
                </title>
                <meta
                  name="description"
                  content="Discover how Maxtron developed a secure and transparent blockchain-based e-voting system. This case study explores the design, implementation, and impact of the solution."
                />
                <meta
                  property="og:title"
                  content="Blockchain-Based E-Voting System Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Discover how Maxtron developed a secure and transparent blockchain-based e-voting system. This case study explores the design, implementation, and impact of the solution."
                />
                <meta
                  property="twitter:title"
                  content="Blockchain-Based E-Voting System Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Discover how Maxtron developed a secure and transparent blockchain-based e-voting system. This case study explores the design, implementation, and impact of the solution."
                />
              </>
            );
          } else if (title === "Good Standing") {
            return (
              <>
                <title>Good Standing Case Study | Maxtron Innovations</title>
                <meta
                  name="description"
                  content="Explore Maxtron's approach to ensuring clients' good standing by implementing effective compliance strategies. This case study delves into the project's journey and outcomes."
                />
                <meta
                  property="og:title"
                  content="Good Standing Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Explore Maxtron's approach to ensuring clients' good standing by implementing effective compliance strategies. This case study delves into the project's journey and outcomes."
                />
                <meta
                  property="twitter:title"
                  content="Good Standing Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Explore Maxtron's approach to ensuring clients' good standing by implementing effective compliance strategies. This case study delves into the project's journey and outcomes."
                />
              </>
            );
          } else if (title === "GRO8") {
            return (
              <>
                <title>Gro8 Case Study | Maxtron Innovations</title>
                <meta
                  name="description"
                  content="Explore Maxtron's collaboration with Gro8, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
                <meta
                  property="og:title"
                  content="Gro8 Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Explore Maxtron's collaboration with Gro8, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
                <meta
                  property="twitter:title"
                  content="Gro8 Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Explore Maxtron's collaboration with Gro8, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
              </>
            );
          } else if (title === "TOKEN LAUNCH") {
            return (
              <>
                <title>Token Launch Case Study | Maxtron Innovations</title>
                <meta
                  name="description"
                  content="Explore Maxtron's comprehensive strategy for a token launch, focusing on market positioning, investor relations, and post-launch support. This case study delves into the project's journey and results."
                />
                <meta
                  property="og:title"
                  content="Token Launch Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Explore Maxtron's comprehensive strategy for a token launch, focusing on market positioning, investor relations, and post-launch support. This case study delves into the project's journey and results."
                />
                <meta
                  property="twitter:title"
                  content="Token Launch Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Explore Maxtron's comprehensive strategy for a token launch, focusing on market positioning, investor relations, and post-launch support. This case study delves into the project's journey and results."
                />
              </>
            );
          } else if (title === "ICCA") {
            return (
              <>
                <title>ICCA Case Study | Maxtron Innovations</title>
                <meta
                  name="description"
                  content="Explore Maxtron's collaboration with ICCA, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
                <meta
                  property="og:title"
                  content="ICCA Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Explore Maxtron's collaboration with ICCA, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
                <meta
                  property="twitter:title"
                  content="ICCA Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Explore Maxtron's collaboration with ICCA, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
              </>
            );
          } else if (title === "TAWUNIYA") {
            return (
              <>
                <title>Tawuniya Case Study | Maxtron Innovations</title>
                <meta
                  name="description"
                  content="Explore Maxtron's collaboration with Tawuniya, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
                <meta
                  property="og:title"
                  content="Tawuniya Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Explore Maxtron's collaboration with Tawuniya, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
                <meta
                  property="twitter:title"
                  content="Tawuniya Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Explore Maxtron's collaboration with Tawuniya, focusing on digital growth strategies and technological advancements. This case study delves into the project's journey and outcomes."
                />
              </>
            );
          } else if (title === "ULALO") {
            return (
              <>
                <title>ULALO Case Study | Maxtron Innovations</title>
                <meta
                  name="description"
                  content="Discover how Maxtron partnered with ULALO to drive digital transformation through innovative solutions. Read the full case study for insights into our approach and results."
                />
                <meta
                  property="og:title"
                  content="ULALO Case Study | Maxtron Innovations"
                />
                <meta
                  property="og:description"
                  content="Discover how Maxtron partnered with ULALO to drive digital transformation through innovative solutions. Read the full case study for insights into our approach and results."
                />
                <meta
                  property="twitter:title"
                  content="ULALO Case Study | Maxtron Innovations"
                />
                <meta
                  property="twitter:description"
                  content="Discover how Maxtron partnered with ULALO to drive digital transformation through innovative solutions. Read the full case study for insights into our approach and results."
                />
              </>
            );
          } else {
            return (
              <>
                <title>{title} | Case Study | Maxtron</title>
                <meta
                  name="description"
                  content={
                    description ||
                    subtitle ||
                    `Case study: ${title} - ${
                      subtitle || "Learn how we delivered innovative solutions"
                    }`
                  }
                />
                <meta
                  property="og:title"
                  content={`${title} | Case Study | Maxtron`}
                />
                <meta
                  property="og:description"
                  content={
                    description ||
                    subtitle ||
                    `Case study: ${title} - ${
                      subtitle || "Learn how we delivered innovative solutions"
                    }`
                  }
                />
                <meta
                  property="twitter:title"
                  content={`${title} | Case Study | Maxtron`}
                />
                <meta
                  property="twitter:description"
                  content={
                    description ||
                    subtitle ||
                    `Case study: ${title} - ${
                      subtitle || "Learn how we delivered innovative solutions"
                    }`
                  }
                />
              </>
            );
          }
        })()}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={heroImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:image" content={heroImage} />
      </Helmet>
      <div className="w-full flex flex-col gap-3 md:gap-5 lg:gap-6 xl:gap-7 mt-2 mb-4 relative">
        <div
          className="w-full flex flex-col lg:flex-row max-w-[130rem] mx-auto justify-between items-center p-4 sm:p-8 md:p-12 lg:p-16 gap-6 sm:gap-10 "
          style={{
            background: `linear-gradient(0deg, rgba(0,0,0,0.80), rgba(0,0,0,0.80)), url(${bgImage}) center/cover no-repeat`,
          }}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 max-w-[88rem] px-4 sm:px-6 md:px-8 py-4 flex flex-col gap-2 md:gap-4">
            <div className="flex flex-wrap gap-2">
              {type.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border border-transparent rounded-3xl bg-white/20 flex items-center"
                >
                  <p className="text-white text-xs md:text-sm font-bold font-openSansHebrew leading-none">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            {/* Main heading (h1) */}
            <h1 className="text-white font-['Switzer'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug">
              {title}
            </h1>
            <p className="text-white font-openSansHebrew text-base sm:text-lg md:text-xl font-normal">
              {subtitle}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 max-w-[88rem] flex justify-center items-center mt-6 md:mt-0">
            <img
              src={heroImage}
              alt="Case Study"
              className="w-full h-auto max-h-[500px] object-contain rounded-xl"
            />
          </div>
        </div>
        {description && (
          <div className="flex flex-col md:flex-row w-full mx-auto max-w-[88rem] items-center gap-20 md:gap-24 lg:gap-32 px-[20px] md:px-[30px] lg:px-[50px] py-7 md:py-10 lg:py-12">
            <div className="w-48 md:w-[14%]">
              <img src={afterHeroSection} alt="Hero section" />
            </div>
            <div className="flex-1 ">
              {/* Subheadings should be h2 */}
              <h2 className="text-black font-openSansHebrew text-lg md:text-2xl font-normal leading-[160%]">
                {description}
              </h2>
            </div>
          </div>
        )}
        <Problem
          heading={problemSolutionResult[0].heading}
          subheading={problemSolutionResult[0].subheading}
          points={problemSolutionResult[0].points}
        />
        <ImageSection keyFeaturesImage={keyFeaturesImage} />
        <Solution
          heading={problemSolutionResult[1].heading}
          subheading={problemSolutionResult[1].subheading}
          points={problemSolutionResult[1].points}
        />
        <BusinessResult
          points={problemSolutionResult[0].points}
          results={problemSolutionResult[1].points}
          industryInfo={industryInfo}
          projectDuration={projectDuration}
          clientSatisfaction={clientSatisfaction}
          afterHeroSection={afterHeroSection}
          bussinessNeeds={bussinessNeeds}
          resultsData={results}
        />
        {techs.length > 0 && <Technology techs={techs} />}
        <Process processSteps={caseStudy.processSteps} />
        <KeyFeature keyFeatures={keyFeatures} />
        <ContactForm />
        {/* <ContactAndSubscribe /> */}
      </div>
    </>
  );
};

export default InternalPageDetails;
