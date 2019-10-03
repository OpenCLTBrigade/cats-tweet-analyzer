import getTimelineAnalysis from './getTimelineAnalysis';
import { getTimeline } from './lib';
import { AnalyzedTweet } from './types';

const displayAlertTweets = async () => {
  try {
    const tweets: Array<AnalyzedTweet> = await getTimelineAnalysis();
    const filtered = tweets.filter(
      (tweet) =>
        tweet.hasServiceDelay || tweet.hasServiceRestoration || tweet.serviceRestoration.analysis.confidenceScore > 1
    );
    filtered.forEach((tweet: AnalyzedTweet) => {
      const restoreScore = tweet.serviceRestoration.analysis.confidenceScore;
      console.log(
        `delay: ${tweet.hasServiceDelay} | restore: ${tweet.hasServiceRestoration} (${restoreScore}) |`,
        tweet.text,
        '\n\n'
      );
    });
  } catch (err) {
    console.error(err);
  }
};

const logAllTweetTexts = async () => {
  const tweets = await getTimeline();
  tweets.forEach((tweet) => {
    console.log(tweet.text);
  });
};

displayAlertTweets();
// logAllTweetTexts();
