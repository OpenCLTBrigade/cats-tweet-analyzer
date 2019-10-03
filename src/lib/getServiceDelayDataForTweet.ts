import { NestedTweet, ServiceDelayData, Tweet } from '../types';

const RULE_LYNX_BLUE_LINE = 'lynx blue line';
const RULE_DELAY = 'delay';

/**
 * Determines if a Tweet is in reference to an active delay.
 *
 * Currently can not detect if tweet is regarding a future scheduled delay but
 * that can be added later with natural language processing if we want it.
 *
 * @param tweet
 */
export const getServiceDelayDataForTweet = (tweet: Tweet | NestedTweet): ServiceDelayData => {
  const text = tweet.text.toLowerCase();

  const hasServiceDelay = text.indexOf(RULE_LYNX_BLUE_LINE) > -1 && text.indexOf(RULE_DELAY) > -1;

  return {
    hasServiceDelay,
    serviceDelay: null // TODO: Add AWS Comprehend Integration eventually
  };
};

export default getServiceDelayDataForTweet;
