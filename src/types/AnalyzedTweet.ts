import { Tweet } from '.';

export interface AnalyzedTweet extends Tweet {
  hasServiceDelay: boolean;
  hasServiceRestoration: boolean;
  serviceDelay: any;
  serviceRestoration: any;
}

export default AnalyzedTweet;
