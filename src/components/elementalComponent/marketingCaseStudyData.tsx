import { MarketingCaseStudyProps } from "./types";

import heroWaveMarketing from "../../assets/marketingcasestudy/heroWaveMarketing.webp";
import frontwavemarketing from "../../assets/marketingcasestudy/frontwavemarketing.webp";
import wavemoneydesc from "../../assets/marketingcasestudy/wavemoneydesc.webp";
import detailedcampaign1 from "../../assets/marketingcasestudy/detailedcampaign1.webp";
import detailedcampaign2 from "../../assets/marketingcasestudy/detailedcampaign2.webp";
import wavemoneycampaign from "../../assets/marketingcasestudy/wavemoneycampaign.webp";
import medimintlogo from "../../assets/marketingcasestudy/medimintlogo.webp";
import pitchmatterlogo from "../../assets/marketingcasestudy/pitchmatterlogo.webp";
import shapercultlogo from "../../assets/marketingcasestudy/shapercultlogo.webp";
import shapercultbottom1 from "../../assets/marketingcasestudy/shapercultbottom1.webp";
import shapercultbottom2 from "../../assets/marketingcasestudy/shapercultbottom2.webp";
import pitchmatterhero1 from "../../assets/marketingcasestudy/pitchmatterhero1.webp";
import pitchmatterhero2 from "../../assets/marketingcasestudy/pitchmatterhero2.webp";
import pitchmatterhero3 from "../../assets/marketingcasestudy/pitchmatterhero3.webp";
import pitchmatterhero4 from "../../assets/marketingcasestudy/pitchmatterhero4.webp";
import pitchmatterbottom1 from "../../assets/marketingcasestudy/pitchmatterbottom1.webp";
import pitchmatterbottom2 from "../../assets/marketingcasestudy/pitchmatterbottom2.webp";
import mediminthero from "../../assets/marketingcasestudy/mediminthero.webp";
import medimintbottom1 from "../../assets/marketingcasestudy/medimintbottom1.webp";
import medimintbottom2 from "../../assets/marketingcasestudy/medimintbottom2.webp";
import shaperculthero from "../../assets/marketingcasestudy/shaperculthero.webp";
import pitchmattermain from "../../assets/marketingcasestudy/pitchmattermain.webp";
import medimintmain from "../../assets/marketingcasestudy/medimintmain.webp";
import shapercultmain from "../../assets/marketingcasestudy/shapercultmain.webp";

import campaignmedimint from "../../assets/marketingcasestudy/campaignmedimint.webp";
import campaignpitchmatter from "../../assets/marketingcasestudy/campaignpitchmatter.webp";
import campaignshapecult from "../../assets/marketingcasestudy/campaignshapecult.webp";

import ulalologo from "../../assets/marketingcasestudy/ulalologo.webp";
import ulalomain from "../../assets/marketingcasestudy/ulalomain.webp";
import ulalohero from "../../assets/marketingcasestudy/ulalohero.webp";
import ulalobottom1 from "../../assets/marketingcasestudy/ulalobottom1.webp";
import ulalobottom2 from "../../assets/marketingcasestudy/ulalobottom2.webp";
import campaignulalo from "../../assets/marketingcasestudy/campaignulalo.webp";

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
      top: [wavemoneydesc],
      bottom: [detailedcampaign1, detailedcampaign2],
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
     
    },
  },
  "mediment": {
    hero: {
      bgImage: medimintmain,
      title: "Mediment",
      subtitle: "Web3 Community Growth & Brand Awareness Campaign",
      tags: ["Web3 Marketing", "Community Management", "Webinar Marketing", "Video Marketing", "Growth Strategy"],
      textAlign: "left",
    },
    intro: {
      logo: medimintlogo,
      description: "Mediment partnered with Maxtron Innovations to strengthen its presence in the Web3 healthcare ecosystem through strategic community building, educational webinars, video marketing, and multi-channel growth initiatives. The objective was to increase brand awareness, build an engaged community, establish thought leadership, and create a scalable foundation for long-term ecosystem growth. Through a combination of content, community engagement, and educational campaigns, Maxtron helped Mediment expand its reach and improve audience participation across multiple channels.",
      industries: "Web3 Healthcare / Biotechnology",
      services: ["Web3 Marketing", "Community Management", "Webinar Marketing", "Video Marketing", "Growth Strategy"],
    },
    challenges: {
      description: "Before partnering with Maxtron, Mediment faced several growth challenges: limited visibility within the Web3 and healthcare communities, low community engagement across digital platforms, the need to educate audiences about blockchain-powered healthcare solutions, and a lack of structured community growth and retention strategies.",
      cards: [
        {
          title: "Limited Visibility",
          description: "Very low visibility and recognition within the competitive Web3 healthcare ecosystem.",
        },
        {
          title: "Low Engagement",
          description: "Stagnant member growth and minimal interaction across core community channels.",
        },
        {
          title: "Education Barrier",
          description: "High friction in educating non-technical users about complex decentralized healthcare tech.",
        },
      ],
    },
    framework: {
      subtitle: "A comprehensive growth framework focused on awareness, engagement, education, and community expansion.",
      pillars: [
        {
          title: "Community Growth",
          description: "Telegram and Discord community management and engagement campaigns.",
          points: ["Telegram & Discord Mgmt", "AMA Sessions & Discussions", "Retention Activities"],
        },
        {
          title: "Webinar Marketing",
          description: "Educational webinar planning, registration acquisition, and thought leadership positioning.",
          points: ["Webinar Planning", "Attendee Acquisition", "Thought Leadership"],
        },
        {
          title: "Video Marketing",
          description: "Educational Web3 content creation, promotional videos, and short-form distribution.",
          points: ["Content Creation", "Promotional Recaps", "Short-Form Content"],
        },
        {
          title: "Multi-Channel Growth",
          description: "X (Twitter) growth campaigns, LinkedIn marketing, and cross-platform distribution.",
          points: ["X Campaigns", "LinkedIn Marketing", "Cross-Distribution"],
        },
      ],
    },
    businessNeed: {
      description: "Mediment needed to construct an engaged Web3 community from scratch, establish educational touchpoints to build ecosystem trust, and scale brand awareness via an integrated multi-channel strategy.",
    },
    results: {
      points: [
        "Successfully built and scaled an engaged **Web3 healthcare community**.",
        "Generated **8M+ total impressions** through educational campaigns.",
        "Increased community growth by **350%** and engagement by **220%**.",
        "Delivered successful webinar campaigns with a **60%+ attendance rate**.",
      ],
    },
    metrics: [
      { title: "COMMUNITY GROWTH", value: "350%", subtitle: "+350%" },
      { title: "ENGAGEMENT GROWTH", value: "220%", subtitle: "+220%" },
      { title: "VIDEO VIEWS", value: "1.2M+", subtitle: "1.2M+ Views" },
      { title: "TOTAL IMPRESSIONS", value: "8M+", subtitle: "8M+ Impressions" },
    ],
    detailedData: {
      sections: [
        {
          title: "Community Growth",
          items: [
            { label: "Community Members Reached", value: "25,000+" },
            { label: "Community Growth", value: "+350%" },
            { label: "Engagement Increase", value: "+220%" },
            { label: "Retention Rate", value: "78%" },
          ],
        },
        {
          title: "Content & Video Marketing",
          items: [
            { label: "Video Views", value: "1.2M+" },
            { label: "Content Reach", value: "4M+" },
            { label: "Watch Time Growth", value: "+75%" },
            { label: "Engagement Growth", value: "+145%" },
          ],
        },
        {
          title: "Webinar Performance",
          items: [
            { label: "Registrations", value: "3,500+" },
            { label: "Attendees", value: "2,100+" },
            { label: "Attendance Rate", value: "60%+" },
            { label: "Audience Interaction", value: "High Engagement" },
          ],
        },
        {
          title: "Brand Awareness",
          items: [
            { label: "Total Impressions", value: "8M+" },
            { label: "Brand Visibility Growth", value: "+210%" },
            { label: "Social Growth", value: "+170%" },
            { label: "Multi-Channel Reach", value: "500,000+" },
          ],
        },
      ],
    },
    mockups: {
      top: [mediminthero],
      bottom: [medimintbottom1, medimintbottom2],
    },
    growthChannels: [
      { name: "Telegram" },
      { name: "Discord" },
      { name: "X (Twitter)" },
      { name: "LinkedIn" },
      { name: "Webinars" },
      { name: "Video Content" },
      { name: "SEO" },
      { name: "Analytics" },
    ],
    highlights: {
      points: [
        "Successfully built and scaled an engaged Web3 healthcare community.",
        "Generated millions of impressions through educational content and community campaigns.",
        "Increased engagement rates across social and community platforms.",
        "Delivered successful webinar campaigns with strong audience participation.",
        "Strengthened Mediment's position as an emerging thought leader in Web3 healthcare.",
        "Expanded brand visibility through a strategic multi-channel growth framework.",
      ],
      image: campaignmedimint,
    },
  },
  "pitchmatter": {
    hero: {
      bgImage: pitchmattermain,
      title: "Pitchmatter",
      subtitle: "Web2 & Web3 Growth Marketing Campaign",
      tags: ["Web2 Marketing", "Web3 Marketing", "Community Building", "Webinar Marketing", "Content Marketing", "Growth Strategy"],
      textAlign: "left",
    },
    intro: {
      logo: pitchmatterlogo,
      description: "Pitchmatter partnered with Maxtron Innovations to accelerate its growth across both Web2 and Web3 ecosystems. The objective was to increase brand awareness, build an engaged startup and investor community, generate quality leads, and establish Pitchmatter as a trusted platform for founders, investors, and emerging businesses. Through a combination of community building, webinar marketing, content strategy, and multi-channel growth campaigns, Maxtron helped Pitchmatter significantly expand its audience and strengthen its digital presence.",
      industries: "Startup Ecosystems / Fintech / Web3",
      services: ["Web2 Marketing", "Web3 Marketing", "Community Management", "Webinar Marketing", "Content Marketing", "Growth Strategy"],
    },
    challenges: {
      description: "Before partnering with Maxtron, Pitchmatter faced several growth challenges: limited visibility among startup founders and investors, low community engagement, the need to bridge traditional startup and Web3 audiences, and the lack of a structured webinar acquisition and content distribution framework.",
      cards: [
        {
          title: "Low Founder/Investor Reach",
          description: "Struggling to capture the attention of high-intent startup founders and early-stage investors.",
        },
        {
          title: "Fragmented Ecosystems",
          description: "Difficulties in appealing to both traditional Web2 startup audiences and Web3 communities simultaneously.",
        },
        {
          title: "Funnel Inefficiencies",
          description: "Inconsistent content distribution and lack of a structured webinar-led lead acquisition engine.",
        },
      ],
    },
    framework: {
      subtitle: "An integrated Web2 + Web3 growth framework focusing on awareness, engagement, lead generation, and community expansion.",
      pillars: [
        {
          title: "Web2 Marketing",
          description: "LinkedIn growth campaigns, founder-focused content strategy, and organic social media growth.",
          points: ["LinkedIn Campaigns", "Founder Content", "Lead Gen Campaigns"],
        },
        {
          title: "Web3 Marketing",
          description: "Community management, investor/founder engagement campaigns, and retention strategies.",
          points: ["Community Growth", "Investor Engagement", "Cross-Platform Growth"],
        },
        {
          title: "Content Marketing",
          description: "Educational startup content, founder success stories, and thought leadership positioning.",
          points: ["Success Stories", "Thought Leadership", "Content Distribution"],
        },
        {
          title: "Webinar Marketing",
          description: "Webinar execution, registration campaigns, post-webinar nurturing, and content repurposing.",
          points: ["Webinar Funnels", "Promotion Campaigns", "Nurturing Funnels"],
        },
      ],
    },
    businessNeed: {
      description: "Pitchmatter required a unified Web2 + Web3 positioning framework to scale authority, establish a high-converting webinar acquisition engine, and generate quality startup/investor partnerships.",
    },
    results: {
      points: [
        "Successfully scaled webinar attendance from **200 to over 5,000+**.",
        "Built a highly engaged community of **12,000+ founders and investors**.",
        "Generated **1,500+ qualified leads** and **3,000+ founder connections**.",
        "Achieved **5M+ total impressions** with **300% audience growth**.",
      ],
    },
    metrics: [
      { title: "WEBINAR AUDIENCE", value: "5,000+", subtitle: "Audience Growth" },
      { title: "AUDIENCE GROWTH", value: "300%", subtitle: "+300%" },
      { title: "ENGAGEMENT GROWTH", value: "180%", subtitle: "+180%" },
      { title: "TOTAL IMPRESSIONS", value: "5M+", subtitle: "5M+ Impressions" },
    ],
    detailedData: {
      sections: [
        {
          title: "Brand Awareness",
          items: [
            { label: "Total Impressions", value: "5M+" },
            { label: "Brand Visibility Growth", value: "+240%" },
            { label: "Social Reach", value: "2.5M+" },
            { label: "Audience Growth", value: "+300%" },
          ],
        },
        {
          title: "Community Growth",
          items: [
            { label: "Community Members Added", value: "12,000+" },
            { label: "Community Growth", value: "+220%" },
            { label: "Engagement Growth", value: "+180%" },
            { label: "Retention Rate", value: "75%" },
          ],
        },
        {
          title: "Webinar Growth",
          items: [
            { label: "Initial Webinar Attendance", value: "200+" },
            { label: "Total Webinar Audience Growth", value: "5,000+" },
            { label: "Webinar Registrations", value: "7,500+" },
            { label: "Average Attendance Rate", value: "65%+" },
            { label: "Repeat Attendee Rate", value: "40%+" },
            { label: "Community Members Acquired Through Webinars", value: "3,000+" },
          ],
        },
        {
          title: "Content Performance",
          items: [
            { label: "Content Reach", value: "3M+" },
            { label: "Profile Visits", value: "45,000+" },
            { label: "Content Engagement", value: "+190%" },
            { label: "Follower Growth", value: "+250%" },
          ],
        },
        {
          title: "Lead Generation",
          items: [
            { label: "Qualified Leads Generated", value: "1,500+" },
            { label: "Founder Connections", value: "3,000+" },
            { label: "Investor Reach", value: "500+" },
            { label: "Partnership Opportunities", value: "100+" },
          ],
        },
      ],
    },
    mockups: {
      top: [pitchmatterhero1, pitchmatterhero2, pitchmatterhero3, pitchmatterhero4],
      bottom: [pitchmatterbottom1, pitchmatterbottom2],
    },
    growthChannels: [
      { name: "LinkedIn" },
      { name: "Telegram" },
      { name: "Discord" },
      { name: "Webinars" },
      { name: "Content Marketing" },
      { name: "SEO" },
      { name: "Lead Gen" },
      { name: "Analytics" },
    ],
    highlights: {
      points: [
        "Successfully scaled webinar attendance from 200 participants to over 5,000 attendees.",
        "Built a highly engaged startup, founder, investor, and Web3 community.",
        "Generated millions of impressions through strategic content and awareness campaigns.",
        "Increased audience engagement across LinkedIn, X, Telegram, Discord, and community channels.",
        "Strengthened Pitchmatter's position within the startup and investment ecosystem.",
        "Created a sustainable growth engine through webinar-led community acquisition.",
        "Established a scalable framework for future audience and business growth.",
      ],
      image: campaignpitchmatter,
    },
  },
  "shapercult": {
    hero: {
      bgImage: shapercultmain,
      title: "Shapercult",
      subtitle: "D2C Growth & Performance Marketing Campaign",
      tags: ["Performance Marketing", "Meta Ads", "Google Ads", "Conversion Optimization", "Customer Acquisition", "D2C Growth"],
      textAlign: "right",
    },
    intro: {
      logo: shapercultlogo,
      description: "Shapercult partnered with Maxtron Innovations to scale its direct-to-consumer (D2C) business through performance marketing and data-driven customer acquisition strategies. The objective was to increase online sales, improve return on ad spend (ROAS), reduce customer acquisition costs, and create a scalable growth engine capable of generating consistent revenue month after month. By leveraging Meta Ads, Google Ads, conversion optimization, audience targeting, and creative testing, Maxtron helped Shapercult accelerate growth and drive profitable customer acquisition.",
      industries: "D2C / E-Commerce / Apparel",
      services: ["Performance Marketing", "Meta Ads", "Google Ads", "Conversion Optimization", "Customer Acquisition", "Growth Strategy"],
    },
    challenges: {
      description: "Before partnering with Maxtron, Shapercult faced several growth challenges: rising customer acquisition costs, limited scalability of existing campaigns, inconsistent sales performance, and low conversion rates across marketing funnels.",
      cards: [
        {
          title: "Rising CAC",
          description: "Spiraling customer acquisition costs eroding profit margins on digital channels.",
        },
        {
          title: "Scalability Limits",
          description: "Stagnating sales and difficulty scaling Meta and Google ad campaign budgets profitably.",
        },
        {
          title: "Funnel Leaks",
          description: "High cart abandonment rates and poor landing page/checkout conversion rates.",
        },
      ],
    },
    framework: {
      subtitle: "A performance-driven growth framework focused on high ROAS, customer acquisition, and funnel optimization.",
      pillars: [
        {
          title: "Meta Advertising",
          description: "Prospecting campaigns, retargeting campaigns, dynamic product ads, and creative testing/optimization.",
          points: ["Prospecting & Retargeting", "Creative Testing", "Lookalike Scaling"],
        },
        {
          title: "Google Advertising",
          description: "Search, shopping, Performance Max, and conversion-focused campaign optimization.",
          points: ["Performance Max", "Shopping Campaigns", "Conversion Optimization"],
        },
        {
          title: "Conversion Optimization",
          description: "Landing page improvements, funnel optimization, user journey analysis, and cart recovery.",
          points: ["Landing Page UX", "A/B Testing", "Cart Recovery"],
        },
        {
          title: "Growth Strategy",
          description: "Customer acquisition planning, audience segmentation, and data-driven revenue scaling.",
          points: ["Audience Segmentation", "Revenue Scaling", "Continuous Improvement"],
        },
      ],
    },
    businessNeed: {
      description: "Shapercult needed to establish a highly efficient customer acquisition funnel, lower their cost per acquisition (CAC), and scale monthly sales volume sustainably.",
    },
    results: {
      points: [
        "Generated **₹35L+ monthly revenue** through performance marketing campaigns.",
        "Achieved an average **4.8X ROAS** across acquisition campaigns.",
        "Reduced customer acquisition costs to an average **₹180 CAC**.",
        "Acquired **8,500+ new customers** and boosted revenue by **320%**.",
      ],
    },
    metrics: [
      { title: "MONTHLY REVENUE", value: "₹35L+", subtitle: "₹35L+ Generated" },
      { title: "AVERAGE ROAS", value: "4.8X", subtitle: "4.8X ROAS" },
      { title: "AVERAGE CAC", value: "₹180", subtitle: "₹180 CPI / CAC" },
      { title: "REVENUE GROWTH", value: "320%", subtitle: "+320% Revenue" },
    ],
    detailedData: {
      sections: [
        {
          title: "Performance Marketing",
          items: [
            { label: "Monthly Revenue", value: "₹35L+" },
            { label: "Revenue Growth", value: "+320%" },
            { label: "Average ROAS", value: "4.8X" },
            { label: "Purchase Growth", value: "+260%" },
          ],
        },
        {
          title: "Customer Acquisition",
          items: [
            { label: "Average CPI / CAC", value: "₹180" },
            { label: "New Customers Acquired", value: "8,500+" },
            { label: "Conversion Rate Growth", value: "+145%" },
            { label: "Repeat Customer Rate", value: "28%" },
          ],
        },
        {
          title: "Advertising Performance",
          items: [
            { label: "Meta Ad Reach", value: "3M+" },
            { label: "Total Impressions", value: "10M+" },
            { label: "Website Visitors", value: "120,000+" },
            { label: "Add-to-Cart Growth", value: "+180%" },
          ],
        },
        {
          title: "Website Performance",
          items: [
            { label: "Store Sessions", value: "100,000+" },
            { label: "Product Views", value: "250,000+" },
            { label: "Checkout Initiated", value: "12,000+" },
            { label: "Conversion Growth", value: "+145%" },
          ],
        },
      ],
    },
    mockups: {
      top: [shaperculthero],
      bottom: [shapercultbottom1, shapercultbottom2],
    },
    growthChannels: [
      { name: "Meta Ads" },
      { name: "Google Ads" },
      { name: "Search Ads" },
      { name: "Shopping Ads" },
      { name: "CRO" },
      { name: "Analytics" },
      { name: "Performance" },
      { name: "Retargeting" },
    ],
    highlights: {
      points: [
        "Generated ₹35L+ monthly revenue through performance marketing campaigns.",
        "Achieved an average 4.8X ROAS across acquisition campaigns.",
        "Reduced customer acquisition costs while scaling sales volume.",
        "Acquired 8,500+ new customers through Meta and Google Ads.",
        "Increased website conversion rates through funnel optimization.",
        "Built a scalable D2C growth engine capable of supporting future expansion.",
        "Improved overall profitability through continuous campaign optimization.",
      ],
      image: campaignshapecult,
    },
  },
  "ulalo": {
    hero: {
      bgImage: ulalomain,
      title: "ULALO",
      subtitle: "Web3 Community Growth & Ecosystem Expansion Campaign",
      tags: [
        "Community Building",
        "Web3 Marketing",
        "Ambassador Program",
        "Social Media Growth",
        "Partnerships",
        "Content Marketing",
      ],
      textAlign: "left",
    },
    intro: {
      logo: ulalologo,
      description:
        "ULALO partnered with Maxtron Innovations to accelerate ecosystem growth, expand community engagement, strengthen brand visibility, and establish a scalable marketing foundation ahead of major milestones including Testnet, DApps, Health Wallet, and Token Launch. Through a combination of strategic community building, social media marketing, ambassador management, partnership development, content creation, and ecosystem outreach, Maxtron helped ULALO build a highly engaged Web3 community while positioning the project for long-term growth and adoption.",
      industries: "Web3 / Blockchain / Decentralized Ecosystems",
      services: [
        "Web3 Marketing",
        "Community Management",
        "Ambassador Program Management",
        "Social Media Marketing",
        "Partnership Development",
        "Content Marketing",
        "Growth Strategy",
      ],
    },
    challenges: {
      description:
        "Before partnering with Maxtron, ULALO faced several growth challenges: limited community size and ecosystem awareness, need for stronger social media visibility and engagement, lack of structured ambassador and community programs, limited industry partnerships and ecosystem connections, need to prepare audience and community for upcoming Testnet and product launches, and building trust and credibility within the Web3 ecosystem.",
      cards: [
        {
          title: "Limited Awareness",
          description:
            "Limited community size and low ecosystem awareness ahead of major product and token releases.",
        },
        {
          title: "No Structured Programs",
          description:
            "Lack of structured ambassador and community programs to drive user-generated content and advocacy.",
        },
        {
          title: "Ecosystem Invisibility",
          description:
            "Limited industry partnerships, investor connections, and credibility within the Web3 ecosystem.",
        },
      ],
    },
    framework: {
      subtitle:
        "A multi-channel Web3 growth framework focused on awareness, engagement, community expansion, partnerships, and ecosystem development.",
      pillars: [
        {
          title: "Community Growth & Mgmt",
          description:
            "24/7 moderation and engagement across Telegram and Discord to build trust and retain early adopters.",
          points: [
            "24/7 Moderation",
            "Engagement Campaigns",
            "User Support & Retention",
          ],
        },
        {
          title: "Ambassador Program",
          description:
            "Structured recruitment, onboarding, and advocacy framework to scale community-generated content.",
          points: [
            "Ambassador Onboarding",
            "User-Generated Content",
            "Referral & Advocacy",
          ],
        },
        {
          title: "Social & Content Marketing",
          description:
            "Consistent publishing, interactive campaigns, and educational video production including YouTube Shorts.",
          points: [
            "Social Media Campaigns",
            "Educational Videos",
            "YouTube Shorts Production",
          ],
        },
        {
          title: "Partnerships & Activation",
          description:
            "Strategic partner outreach, investor networking, and community activation campaigns like Zealy.",
          points: [
            "Strategic Outreach",
            "Zealy Campaigns",
            "VC & Investor Introductions",
          ],
        },
      ],
    },
    businessNeed: {
      description:
        "ULALO required a comprehensive Web3 marketing partner to scale community size and engagement, design a high-performing ambassador acquisition pipeline, and secure strategic ecosystem partnerships to prepare for upcoming Testnet and DApp launches.",
    },
    results: {
      points: [
        "Successfully built and scaled a highly engaged **Web3 community**.",
        "Generated thousands of **organic engagement actions** across social platforms.",
        "Established a strong **ambassador acquisition pipeline** with 257+ applications.",
        "Successfully launched and scaled **Zealy community campaigns**.",
        "Expanded **networking opportunities** with investors, VCs, and strategic partners.",
      ],
    },
    metrics: [
      { title: "ORGANIC ENGAGEMENT", value: "3,000+", subtitle: "Engagement Actions" },
      { title: "TELEGRAM MEMBERS", value: "1,199+", subtitle: "Active Community" },
      { title: "ZEALY PARTICIPANTS", value: "981+", subtitle: "Campaign Participants" },
      { title: "AMBASSADOR APPS", value: "257+", subtitle: "93% Crypto-Native" },
    ],
    detailedData: {
      sections: [
        {
          title: "Community Growth",
          items: [
            { label: "Telegram Members", value: "1,199+" },
            { label: "Community Moderation", value: "24/7 Active" },
            { label: "Ambassador Applications", value: "257+" },
            { label: "Crypto-Native Ambassadors", value: "93%" },
            { label: "Zealy Participants", value: "981+" },
          ],
        },
        {
          title: "Social Media Performance",
          items: [
            { label: "Average Comments Per Post", value: "100+" },
            { label: "Average Reposts Per Post", value: "50+" },
            { label: "Average Likes Per Post", value: "100+" },
            { label: "Average Impressions Per Post", value: "2,000+" },
            { label: "Total Organic Engagement Actions", value: "3,000+" },
          ],
        },
        {
          title: "Ambassador Program Performance",
          items: [
            { label: "Applications Received", value: "257+" },
            { label: "Crypto Native Audience", value: "93%" },
            { label: "Third-Party Organic Posts", value: "200+" },
            { label: "Platform Coverage", value: "X, Discord, YouTube" },
          ],
        },
        {
          title: "Content & Outreach",
          items: [
            { label: "YouTube Shorts Completed", value: "4" },
            { label: "Long-form Videos Produced", value: "2" },
            { label: "Qualified LinkedIn Responses", value: "150+" },
            { label: "LinkedIn Outreach Campaigns", value: "Active" },
          ],
        },
      ],
    },
    mockups: {
      top: [ulalohero],
      bottom: [ulalobottom1, ulalobottom2],
    },
    growthChannels: [
      { name: "Telegram" },
      { name: "Discord" },
      { name: "X (Twitter)" },
      { name: "YouTube" },
      { name: "Zealy" },
      { name: "LinkedIn" },
      { name: "Content Creation" },
      { name: "Partnerships" },
    ],
    highlights: {
      points: [
        "Built and scaled a highly engaged Web3 community.",
        "Established a strong ambassador acquisition pipeline.",
        "Generated thousands of organic engagement actions across social platforms.",
        "Successfully launched and scaled Zealy community campaigns.",
        "Increased ecosystem visibility through content marketing and outreach.",
        "Created a foundation for upcoming Testnet, DApps, and Health Wallet launches.",
        "Expanded networking opportunities with investors, VCs, and strategic partners.",
        "Strengthened ULALO's positioning within the Web3 ecosystem.",
      ],
      image: campaignulalo,
    },
  },
};

marketingCaseStudiesData["medimint"] = marketingCaseStudiesData["mediment"];

