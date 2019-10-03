export interface NestedTweet {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: {
    hashtags: any[];
    symbols: any[];
    user_mentions: any[];
    urls: Array<{
      url: string;
      expanded_url: string;
      display_url: string;
      indices: number[];
    }>;
  };
  source: string;
  in_reply_to_status_id?: number;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id: number;
  in_reply_to_user_id_str: string;
  in_reply_to_screen_name: string;
  user: any;
  [index: string]: any;
}

export default NestedTweet;
