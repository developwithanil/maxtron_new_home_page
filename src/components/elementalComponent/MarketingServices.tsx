import searchEngineMarketing from "../../assets/marketing/Container1.png";
import retargetingAds from "../../assets/marketing/container2.png";
import socialAds from "../../assets/marketing/container3.webp";
import ecommerceMarketing from "../../assets/marketing/container4.webp";
import d2cMarketing from "../../assets/marketing/container5.webp";
import influencerMarketing from "../../assets/marketing/container6.webp";
import cro from "../../assets/marketing/container7.webp";
import analyticsReporting from "../../assets/marketing/container8.webp";
import {
  competitive,
  conversion,
  festive,
  funnel,
  heatmaps,
  landingpage,
  longterm,
  marketingicon,
  monitoring,
  product,
  roi,
  setup,
  wavebg,
  copywriting,
  audience,
  creative,
  optimization,
  marketplace,
  upselling,
  growth,
  performance,
  loyality,
  campaigns,
  celebrity,
  campaign,
  graphics,
} from "../../components/Web3VectorImage";

const MarketingServices = () => {
  const serviceCards = [
    {
      title: "Be where your customers are searching",
      heading: (
        <>
          Search Engine
          <span className="text-[#A16EDA] font-semibold"> Marketing</span>(SEM)
        </>
      ),
      icon: marketingicon(),
      description:
        "We create and manage targeted ad campaigns on Google and Bing to connect you with high-intent customers. From in-depth keyword research to smart bidding strategies, we ensure your brand ranks on top when it matters most.",
      features: [
        {
          text: "Keyword research & competitor analysis",
          icon: competitive,
        },
        {
          text: "Ad copywriting & A/B testing",
          icon: copywriting,
        },
        {
          text: "Campaign setup & bid optimization",
          icon: setup,
        },
        {
          text: "Conversion tracking & performance monitoring",
          icon: conversion,
        },
      ],
      imageUrl: searchEngineMarketing,
    },
    {
      title: "Re-engage. Remind. Retain.",
      heading: (
        <>
          Display &{" "}
          <span className="text-[#A16EDA] font-semibold">Retargeting</span> Ads
        </>
      ),
      icon: marketingicon(),
      description:
        "Most customers don't convert on the first visit. That's where retargeting ads come in. With banner ads, video ads, and programmatic campaigns, we ensure your brand stays top-of-mind until customers return to complete their purchase.",
      features: [],
      imageUrl: retargetingAds,
    },
    {
      title: "Turn conversations into conversions.",
      heading: (
        <>
          Social Media <span className="text-[#A16EDA] font-semibold">Ads</span>
        </>
      ),
      icon: marketingicon(),
      description:
        "Social media is more than just likes and shares—it’s a powerful driver of business. We design ad campaigns across Facebook, Instagram, LinkedIn, and Twitter that not only capture attention but also convert into sales.",
      features: [
        {
          text: "Precision audience targeting",
          icon: audience,
        },
        {
          text: "Creative ad design & storytelling",
          icon: creative,
        },
        {
          text: "Funnel-based campaigns",
          icon: funnel,
        },
        {
          text: "Continuous optimization to reduce cost per lead",
          icon: optimization,
        },
      ],
      imageUrl: socialAds,
    },
    {
      title: "Scale your online store with performance-driven campaigns.",
      heading: (
        <>
          <span className="text-[#A16EDA] font-semibold">E-commerce</span>{" "}
          Marketing
        </>
      ),
      icon: marketingicon(),
      description:
        "We help e-commerce businesses increase sales across platforms like Amazon, Flipkart, and Shopify. From product visibility to customer retention, we ensure your store stands out in a competitive marketplace.",
      features: [
        {
          text: " Marketplace ads (Amazon Sponsored Ads, Flipkart Ads",
          icon: marketplace,
        },
        {
          text: "Product listing optimization with keywords & visuals",
          icon: product,
        },
        {
          text: "Festive & seasonal campaign strategies",
          icon: festive,
        },
        {
          text: "Upselling & cross-selling techniques",
          icon: upselling,
        },
      ],
      imageUrl: ecommerceMarketing,
    },
    {
      title: "Empowering Direct-to-Consumer brands to grow faster.",
      heading: (
        <>
          <span className="text-[#A16EDA] font-semibold">D2C</span> Marketing
        </>
      ),
      icon: marketingicon(),
      description: (
        <>
          D2C brands thrive when they connect directly with customers without
          middlemen. We create{" "}
          <span className="font-semibold">multi-channel campaigns </span>
          {""}
          tailored for startups and established brands to scale revenue and
          build long-term relationships.
        </>
      ),
      features: [
        {
          text: "End-to-end growth strategy (SEO, paid ads)",
          icon: growth,
        },
        {
          text: "Performance-focused sales funnels",
          icon: performance,
        },
        {
          text: "Customer retention & loyalty programs",
          icon: loyality,
        },
        {
          text: "Campaigns designed to lower Customer Acquisition Cost (CAC)",
          icon: campaigns,
        },
      ],
      imageUrl: d2cMarketing,
    },
    {
      title: "Leverage authentic voices to build trust.",
      heading: (
        <>
          <span className="text-[#A16EDA] font-semibold">Influencer</span>{" "}
          Marketing
        </>
      ),
      icon: marketingicon(),
      description:
        "Today’s consumers trust creators more than brands. We connect you with influencers who align with your audience and values, ensuring genuine brand advocacy and conversions.",
      features: [
        {
          text: "Micro, macro & celebrity influencer collaborations",
          icon: celebrity,
        },
        {
          text: "Creative campaign design & storytelling",
          icon: campaign,
        },
        {
          text: "Tracking influencer ROI & engagement metrics",
          icon: roi,
        },
        {
          text: "Long-term brand ambassador programs",
          icon: longterm,
        },
      ],
      imageUrl: influencerMarketing,
    },
    {
      title: "Turn visitors into paying customers.",
      heading: (
        <>
          Conversion Rate Optimization{" "}
          <span className="text-[#A16EDA] font-semibold">(CRO)</span>
        </>
      ),
      icon: marketingicon(),
      description:
        "Driving traffic is important, but converting them is critical. We use data, design, and behavioral insights to optimize your website and ad funnels for maximum impact.",
      features: [
        {
          text: "Landing page audits & redesigns",
          icon: landingpage,
        },
        {
          text: "Heatmaps, user testing & funnel analysis",
          icon: heatmaps,
        },
        {
          text: "A/B testing for creatives & CTAs",
          icon: graphics,
        },
        {
          text: "Reduced drop-offs, higher conversions",
          icon: conversion,
        },
      ],
      imageUrl: cro,
    },
    {
      title: "Data is at the core of performance marketing.",
      heading: (
        <>
          <span className="text-[#A16EDA] font-semibold">Analytics</span> &{" "}
          Reporting
        </>
      ),
      icon: marketingicon(),
      description:
        "We don’t just run campaigns—we analyze, measure, and refine them continuously. Our reports give you a clear picture of your ad spend, ROI, and business growth.",
      features: [
        {
          text: "Real-time performance dashboards",
          icon: performance,
        },
        {
          text: "ROI tracking & attribution modeling",
          icon: roi,
        },
        {
          text: "Tracking influencer ROI & engagement metrics",
          icon: roi,
        },
        {
          text: "Transparent reporting",
          icon: monitoring,
        },
      ],
      imageUrl: analyticsReporting,
    },
  ];

  return (
    <div className="w-full max-w-[96rem] mx-auto py-4 sm:py-6 md:py-10 lg:py-24 xl:py-24">
      <div className="w-full flex flex-col lg:flex-row mx-auto justify-between items-center p-4 sm:p-8 md:p-12 lg:p-16 gap-6 sm:gap-10">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl sm:rounded-3xl md:rounded-[32px] lg:rounded-[64px] border border-gray-200 overflow-hidden mb-4 sm:mb-6 lg:mb-6 justify-between relative ${
                index % 2 !== 0
                  ? "lg:flex-row  bg-gradient-to-r from-purple-200  to-white"
                  : "lg:flex-row-reverse bg-gradient-to-l from-purple-200 to-white"
              }`}
            >
              <div className="absolute inset-0 z-0">{wavebg()}</div>

              <div className="hidden sm:block lg:w-fit m-0 p-0 flex float-right items-end justify-end relative z-10">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="flex w-full h-32 sm:h-40 md:h-48 lg:h-96 object-contain"
                />
              </div>
              <div className="w-full lg:w-[70%] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col relative z-10 backdrop-blur-sm">
                <div className="flex items-center mb-2 sm:mb-3 lg:mb-2 border border-gray-200 rounded-lg sm:rounded-xl lg:rounded-xl p-2 w-fit">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl mr-2 sm:mr-3 lg:mr-3">
                    {card.icon}
                  </span>
                  <h2 className="text-xs sm:text-sm lg:text-base font-bold font-inter uppercase text-[#A16EDA]">
                    {card.title}
                  </h2>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-3 lg:mb-4">
                  {card.heading}
                </h2>
                <p className="text-[#2A2A2A] font-normal mb-6 sm:mb-8 lg:mb-12 font-openSansHebrew text-sm sm:text-base lg:text-base">
                  {card.description}
                </p>
                {card.features.length > 0 && (
                  <ul className="text-[#2A2A2A] font-normal text-xs sm:text-sm lg:text-sm flex flex-col sm:flex-row lg:flex-row gap-3 sm:gap-4 lg:gap-4">
                    {card.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-2 font-openSansHebrew text-xs sm:text-sm lg:text-sm relative"
                      >
                        <span className="text-base sm:text-lg lg:text-lg">
                          {feature.icon()}
                        </span>
                        <span className="text-center text-xs sm:text-sm lg:text-sm leading-tight">
                          {feature.text}
                        </span>
                        {i < card.features.length - 1 && (
                          <div className="hidden sm:block lg:block absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-px h-12 sm:h-16 lg:h-16 bg-gray-300"></div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingServices;
