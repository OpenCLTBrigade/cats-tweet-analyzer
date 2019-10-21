import { getConfig } from '.';

const TwitterClient = require('twitter');

export function getTwitterClient() {
  const { CONSUMER_KEY: consumer_key, CONSUMER_SECRET: consumer_secret, BEARER_TOKEN: bearer_token } = getConfig();

  const twitter = new TwitterClient({
    consumer_key,
    consumer_secret,
    bearer_token
  });
  return twitter;
}

export default getTwitterClient;
