import { AnalyzedTweet, Tweet } from '../types';
import analyzeTweet from './analyzeTweet';

export const analyzeTweets = (timeline): AnalyzedTweet[] => {
  return timeline.map((tweet: Tweet) => {
    return analyzeTweet(tweet);
  });
};

export default analyzeTweets;
