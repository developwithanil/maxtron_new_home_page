export interface CaseStudy {
    title: string;
    subtitle: string;
    heroImage: string;
    industryInfo: string;
    projectDuration: string;
    theprocessText:string,
    clientSatisfaction: number;
    problemSolutionResult: Array<{
      heading: string;
      subheading: string;
      points: Array<string | { title: string; details: string[] }>;
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