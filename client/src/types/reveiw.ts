export interface Review {
  event_id: string;
  subevent_id: string;
  event_title: string;
  review_content: string;
  likes?: object;
  timestamp: number;
  txHash?: number;
  username: string;
  walletAddress: string;
}
