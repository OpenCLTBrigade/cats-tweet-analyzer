import { NestedTweet, ServiceRestorationData, Tweet } from '../types';
import getServiceDelayDataForTweet from './getServiceDelayDataForTweet';

// Initial rule set has been determined by manually analyzing recent CATS service restoration messages.
const RULE_POSITIVE_KEYWORDS = [
  {
    term: 'cleared',
    score: 1,
    penaltyForMissing: 0
  },
  {
    term: 'resumed',
    score: 2,
    penaltyForMissing: 1
  },
  {
    term: 'normal service',
    score: 3,
    penaltyForMissing: 2
  },
  {
    term: 'restored',
    score: 1,
    penaltyForMissing: 1
  },
  {
    term: 'service restored',
    score: 1,
    penaltyForMissing: 0
  }
];

export const getServiceRestorationDataForTweet = (tweet: Tweet | NestedTweet): ServiceRestorationData => {
  const text = tweet.text.toLowerCase();

  // Look for a few key words in the tweet
  const confidence = RULE_POSITIVE_KEYWORDS.reduce(
    (aggregate, searchTerm) => {
      const { term, score, penaltyForMissing } = searchTerm;

      if (text.indexOf(term) > -1) {
        aggregate.confidenceScore += score;
        aggregate.matchedTerms.push(term);
      } else {
        aggregate.confidenceScore -= penaltyForMissing;
      }
      return aggregate;
    },
    { confidenceScore: 0, matchedTerms: [], retweetedDelay: false }
  );

  return {
    hasServiceRestoration: confidence.confidenceScore > 1,
    serviceRestoration: { analysis: { ...confidence } }
  };
};

export default getServiceRestorationDataForTweet;
