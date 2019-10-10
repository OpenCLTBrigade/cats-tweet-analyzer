import analyzeTweets from './lib/analyzeTweets';
import getTimeline from './lib/getTimeline';
import { AnalyzedTweet, Tweet } from './types';

export const getTimelineAnalysis = async (): Promise<AnalyzedTweet[] | any> => {
  return new Promise(async (resolve, reject) => {
    let analyzedTweets = [];
    try {
      const tweets: Tweet[] = await getTimeline();
      analyzedTweets = analyzeTweets(tweets);
    } catch (err) {
      reject(err);
    }
    resolve(analyzedTweets);
  });
};

export default getTimelineAnalysis;
