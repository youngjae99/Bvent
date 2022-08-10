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
  return (
    <div className="flex flex-row mb-3">
      <div className="w-16">
        <img
          src="/icons/default-profile-image.png"
          width="40rem"
          style={{ borderRadius: '25' }}
        />
      </div>
      <div>
        <p className="text-white">{username.slice(0, 20)}</p>
        <p className="text-gray-500">{parseEventTime(timestamp, 'UTC')}</p>
        <p>{review_title}</p>
        <p>{review_content}</p>
      </div>
    </div>
  );
};

export default Review;
