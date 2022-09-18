export interface Review {
    timestamp: string;
    username: string;
    walletAddress: string;
    review_content: string;
    txHash: string;
    amount: number;
    up_cnt: number;
    down_cnt: number;
}