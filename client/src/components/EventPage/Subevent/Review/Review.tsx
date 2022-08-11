import React from 'react';
import { parseEventTime } from '@utils/parseTime';

type Props = {
  timestamp: string;
  username: string;
  review_title: string;
  review_content: string;
  txHash: number;
  amount: number;
};

const Review = (props: Props) => {
  const { timestamp, username, review_title, review_content, txHash, amount } =
    { ...props };
  console.log(timestamp);

  return (
    <div className="flex flex-row mb-3">
      <div className="w-12">
        <img
          src="/icons/default-profile-image.png"
          width="36rem"
          style={{ borderRadius: '18rem' }}
        />
      </div>
      <div className="flex-1">
        <p className="text-white text-md">{username.slice(0, 20)}</p>
        <div className="flex flex-row justify-start gap-2">
          <p className="text-gray-400">{parseEventTime(timestamp, 'UTC')}</p>
          |
          <a href={`https://ropsten.etherscan.io/tx/${txHash}`}>
            <div className="flex flex-row gap-1 text-gray-300 hover:text-blue-400">
              <img src="/icons/ethereum-logo.svg" width="10px" height="10px" />
              {txHash.slice(0, 10) + '...'}
            </div>
          </a>
        </div>
        <p>{review_title}</p>
        <p>{review_content}</p>
      </div>
    </div>
  );
};

export default Review;
