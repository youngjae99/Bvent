import React from 'react';
import { parseEventTime } from '@/utils/parseTime';
import { Review } from './type';
import ProfileImage from './ProfileImage';
import UserInfoWrapper from './UserInfoWrapper';

// type Props = {
//   timestamp: string;
//   username: string;
//   review_title: string;
//   review_content: string;
//   txHash: string;
//   amount: number;
// };

const Review = (props: Review) => {
  const { timestamp, username, review_content, txHash, amount } = { ...props };

  console.log(timestamp);

  return (
    <div className="flex flex-col mb-3">
      <UserInfoWrapper {...props} />
      <div className="ml-12">{review_content}</div>
    </div>
  );
};

export default Review;
