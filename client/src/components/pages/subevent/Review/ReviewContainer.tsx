import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useSWR from 'swr';
import axios from 'axios';

// import { BsPencilSquare } from 'react-icons/bs';
// import NewReview from './newReview';
import Review from './Review';
import ReviewForm from './ReviewForm';

type Props = {
  event_name: string;
  subevent_id: string;
};

const fetcher = (url) => axios.get(url).then((res) => res.data);

// TODO(youngjae): erase this
// const WriteReviewButton = ({ onClick }: any) => {
//   return (
//     <div
//       onClick={onClick}
//       className="text-white text-2xl cursor-pointer hover:text-green-100"
//     >
//       <BsPencilSquare></BsPencilSquare>
//     </div>
//   );
// };

const ReviewContainer = (props: Props) => {
  const { event_name, subevent_id } = props;

  const { data } = useSWR(
    `https://api.bventdao.xyz/review?subevent_id=${subevent_id}`,
    fetcher,
  );
  const review = data ? data : {};
  const reviewCnt = review ? Object.keys(review).length : 0;

  console.log(review);

  return (
    <div className="text-white mt-3">
      {/* <ReviewForm /> */}
      <div className="flex flex-row justify-between mb-2">
        <p>{reviewCnt} reviews</p>
      </div>
      <ul>
        {review ? (
          Object.keys(review)
            .sort((a, b) => review[b].timestamp - review[a].timestamp)
            .map((key) => {
              const _review = review[key];
              return <Review key={key} {..._review} />;
            })
        ) : (
          <>No review</>
        )}
      </ul>
    </div>
  );
};

export default ReviewContainer;
