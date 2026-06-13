import { MarketingCaseStudyProps } from "./types";

import heroWaveMarketing from "../../assets/marketingcasestudy/heroWaveMarketing.webp";
import frontwavemarketing from "../../assets/marketingcasestudy/frontwavemarketing.webp";
import wavemoneydesc from "../../assets/marketingcasestudy/wavemoneydesc.webp";
import detailedcampaign1 from "../../assets/marketingcasestudy/detailedcampaign1.webp";
import detailedcampaign2 from "../../assets/marketingcasestudy/detailedcampaign2.webp";
import wavemoneycampaign from "../../assets/marketingcasestudy/wavemoneycampaign.webp";

export const marketingCaseStudiesData: Record<string, MarketingCaseStudyProps> = {
  "wave-money": {
    hero: {
      bgImage: heroWaveMarketing,
      title: "Wave Money",
      subtitle: "Digital Growth Campaign & Partnered with Maxtron Innovations",
      tags: ["Marketing", "Google Ads", "Meta Ads", "ASO", "SEO"],
    },
    intro: {
      logo: frontwavemarketing,
      description: "Wave Money partnered with Maxtron Innovations to accelerate digital growth, improve app discoverability, and establish a strong online presence across search, social, and mobile platforms. Through a comprehensive strategy combining SEO, ASO, performance marketing, and growth optimization, Maxtron transformed Wave Money from a virtually invisible digital brand into a highly discoverable fintech platform. The campaign successfully increased brand awareness, improved search rankings, drove qualified traffic, and generated measurable user acquisition across multiple channels.",
      industries: "Fintech / Digital Payments",
      services: ["Marketing", "Local Growth", "SEO Optimization"],
    },
    challenges: {
      description: "Despite offering a strong digital financial solution, Wave Money struggled to gain visibility in an increasingly competitive fintech landscape. The brand had minimal presence across search engines, social media platforms, and app stores, making it difficult for potential users to discover its services. Low rankings for branded and industry-related keywords, poor Play Store visibility, limited website traffic, and weak brand awareness significantly impacted user acquisition efforts. Without a scalable digital growth framework in place, the company faced challenges in attracting, engaging, and converting new users, restricting its ability to achieve sustainable growth and compete effectively in the market.",
      cards: [
        {
          title: "Invisibility",
          description: "Non-existent ranking for brand keywords and primary service terms. Consumers simply couldn't find the brand in organic search.",
        },
        {
          title: "High Friction",
          description: "Poor Play Store discoverability leading to stagnant app acquisition rates and a disconnect between marketing and downloads.",
        },
        {
          title: "Discoverability",
          description: "Not ranking on Google search results for brand or category keywords, Low brand awareness resulting in minimal user acquisition.",
        },
      ],
    },
    framework: {
      subtitle: "A data-driven, four-pillar strategy designed for long-term scalability and immediate market impact.",
      pillars: [
        {
          title: "ASO Optimization",
          description: "Improve app discoverability and rankings on Play Store with keyword strategy and competitor analysis.",
          points: ["Keyword Research", "Metadata Optimization", "Store Listing Enhancement"],
        },
        {
          title: "SEO & Visibility",
          description: "Build strong search presence and brand authority to rank for high-intent keywords across regions.",
          points: ["On-Page SEO", "Technical SEO", "Brand Visibility"],
        },
        {
          title: "Performance Marketing",
          description: "Drive high-quality installs, traffic, and engagement through targeted paid campaigns.",
          points: ["App Install Ads", "Retargeting", "Multi-Channel Reach"],
        },
        {
          title: "Growth Strategy",
          description: "Build brand awareness and a scalable growth engine for long-term fintech market success.",
          points: ["Viral Loops", "Data Science"],
        },
      ],
    },
    businessNeed: {
      description: "Wave Money required a partner to strengthen app discoverability in a competitive market. They needed to accelerate user acquisition across search, social, and mobile platforms while building a sustainable growth engine that could scale without inflating CAC.",
    },
    results: {
      points: [
        "Achieved **#1 Play Store ranking** for branded searches.",
        "Increased Meta visibility by **57,500%** and engagement by **2,011%**.",
        "Generated **400+ app installs** and **4,000+** website/app clicks.",
        "Delivered **2,400%+** website growth with **1,000+ active users**.",
      ],
    },
    metrics: [
      { title: "META VIEW GROWTH", value: "57.5K%", subtitle: "+57,500%" },
      { title: "ENGAGEMENT GROWTH", value: "2,011%", subtitle: "+2,011%" },
      { title: "WEBSITE TRAFFIC", value: "2,400%", subtitle: "+2,400%" },
      { title: "APP STORE RANK", value: "#1", subtitle: "Top of Category" },
    ],
    detailedData: {
      searchVisibility: [
        { label: "Google Search Ranking", value: "Top 3 Positions" },
        { label: "Play Store Ranking", value: "#1 Brand Search" },
        { label: "Total Impressions", value: "12M+" },
      ],
      userAcquisition: [
        { label: "Direct App Installs", value: "400,000+" },
        { label: "Registration Rate", value: "+18.5% YoY" },
        { label: "CAC Reduction", value: "-42% Improvement" },
      ],
    },
    mockups: {
      image1: wavemoneydesc,
      image2: detailedcampaign1,
      image3: detailedcampaign2,
    },
    growthChannels: [
      { name: "Google Ads" },
      { name: "Meta Ads" },
      { name: "SEO" },
      { name: "ASO" },
      { name: "Analytics" },
      { name: "Performance" },
      { name: "Acquisition" },
      { name: "Tracking" },
    ],
    highlights: {
      points: [
        "Optimized over 500+ keywords for organic search ranking.",
        "Reduced cost per install (CPI) by 35% through A/B testing.",
        "Executed multi-channel creative strategy for Meta and Google.",
        "Implemented real-time attribution and event tracking.",
      ],
      image: wavemoneycampaign,
    },
  },
};
