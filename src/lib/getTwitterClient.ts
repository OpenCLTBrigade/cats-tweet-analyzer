require('dotenv').config();
const TwitterClient = require('twitter');

export function getTwitterClient() {
  const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_BEARER_TOKEN } = process.env;

  const twitter = new TwitterClient({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    bearer_token: TWITTER_BEARER_TOKEN
  });
  console.info(TWITTER_BEARER_TOKEN);
  return twitter;
}

export default getTwitterClient;
