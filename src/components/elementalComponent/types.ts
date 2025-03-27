export interface CaseStudy {
    title: string;
    subtitle: string;
    heroImage: string;
    industryInfo: string;
    projectDuration: string;
    theprocessText:string,
    clientSatisfaction: number;
    afterHeroSection:string;
    type:string;
    problemSolutionResult: Array<{
      heading: string;
      subheading: string;
      points: string[];
  }>;
    techs: Array<{
      name: string;
      icon: string;
    }>;
    processSteps: Array<{
      title: string;
      description: string[];  
    }>;
    keyFeatures: Array<string | { title: string; details: string[] }>;
    mobileImage: string;
    keyFeaturesImage: string;
    bgImage:string  

  }