import NestedTweet from './NestedTweet';

export interface Tweet {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: {
    hashtags: Array<any>;
    symbols: Array<any>;
    user_mentions: Array<{
      screen_name: string;
      name: string;
      id: number;
      id_str: string;
      indices: number[];
    }>;
    urls: Array<{
      url: string;
      expanded_url: string;
      display_url: string;
      indices: number[];
    }>;
  };
  source: string;
  in_reply_to_status_id: number;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id: number;
  in_reply_to_user_id_str: string;
  in_reply_to_screen_name: string;
  user: {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url: string;
    entities: {
      url: {
        urls: Array<{
          url: string;
          expanded_url: string;
          display_url: string;
          indices: number[];
        }>;
      };
      description: {
        urls: any[];
      };
    };
    protected: false;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset: number;
    time_zone: string;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang: string;
    [index: string]: any;
  };
  geo: null;
  coordinates: null;
  place: null;
  contributors: null;
  retweeted_status?: NestedTweet;
  quoted_status?: NestedTweet;
  [index: string]: any;
}

export default Tweet;
