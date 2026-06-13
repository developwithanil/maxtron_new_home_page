import type { ComponentType, SVGProps } from "react";

export interface CaseStudy {
  title: string;
  subtitle: string;
  heroImage: string;
  industryInfo: string;
  projectDuration: string;
  theprocessText: string;
  clientSatisfaction: number;
  afterHeroSection: string;
  description?: string;
  type: string[];
  name: string;
  problemSolutionResult: Array<{
    heading: string;
    subheading: string;
    points: string[];
  }>;
  techs: Array<{
    name: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
  }>;
  bussinessNeeds?: {
    title?: string;
    description?: Array<string>;
  };
  results?: {
    title?: string;
    description?: Array<string>;
  };

  processSteps: Array<{
    title: string;
    description: string[];
  }>;
  keyFeatures: Array<string | { title: string; details: string[] }>;

  keyFeaturesImage: string[];
  bgImage: string;
}

export interface MarketingCaseStudyProps {
  hero: {
    bgImage: string;
    title: string;
    subtitle: string;
    tags: string[];
  };
  intro: {
    logo: string;
    description: string;
    industries: string;
    services: string[];
  };
  challenges: {
    description: string;
    cards: {
      iconUrl?: string;
      title: string;
      description: string;
    }[];
  };
  framework: {
    subtitle: string;
    pillars: {
      iconUrl?: string;
      title: string;
      description: string;
      points: string[];
    }[];
  };
  businessNeed: {
    description: string;
  };
  results: {
    points: string[];
  };
  metrics: {
    title: string;
    value: string;
    subtitle: string;
  }[];
  detailedData: {
    searchVisibility: { label: string; value: string }[];
    userAcquisition: { label: string; value: string }[];
  };
  mockups: {
    image1: string;
    image2: string;
    image3?: string;
  };
  growthChannels: {
    iconUrl?: string;
    name: string;
  }[];
  highlights: {
    points: string[];
    image: string;
  };
}
