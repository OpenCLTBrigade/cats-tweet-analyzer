export interface ServiceRestorationData {
  hasServiceRestoration: boolean;
  serviceRestoration: {
    analysis?: {
      confidenceScore: number;
      matchedTerms: string[];
      retweetedDelay: boolean;
    };
  };
}

export default ServiceRestorationData;
