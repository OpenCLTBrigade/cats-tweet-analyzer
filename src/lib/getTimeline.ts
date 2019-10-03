import { Tweet } from '../types';
import getTwitterClient from './getTwitterClient';

export const getTimeline = (): Promise<Tweet[]> => {
  const { TWITTER_CATS_USER, TWITTER_TIMELINE_LIMIT } = process.env;
  return new Promise((resolve, reject) => {
    const twitter = getTwitterClient();

    twitter.get(
      'statuses/user_timeline.json',
      { screen_name: TWITTER_CATS_USER, count: TWITTER_TIMELINE_LIMIT },
      (error, tweets, response) => {
        if (error) {
          reject(error);
        }
        resolve(tweets);
      }
    );
  });
};

export default getTimeline;
