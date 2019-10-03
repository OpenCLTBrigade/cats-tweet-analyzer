import { AnalyzedTweet, Tweet } from '../types';
import { analyzeTweets } from './analyzeTweets';
import getServiceDelayDataForTweet from './getServiceDelayDataForTweet';
import getServiceRestorationDataForTweet from './getServiceRestorationDataForTweet';

export const analyzeTweet = (tweet: Tweet): AnalyzedTweet => {
  const delay = getServiceDelayDataForTweet(tweet);
  const restoration = getServiceRestorationDataForTweet(tweet);
  return { ...tweet, ...delay, ...restoration };
};

export default analyzeTweet;
