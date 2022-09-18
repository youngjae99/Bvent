import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useSWR from 'swr';
import axios from 'axios';
import Review from './Review';

type Props = {
  subevent_id: string;
};

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ReviewContainer = (props: Props) => {
  const { subevent_id } = props;

  const { data } = useSWR(
    `/api/review?subevent_id=${subevent_id}`,
    fetcher,
  );
  const review = data ? data : {};
  const reviewCnt = review ? Object.keys(review).length : 0;

  console.log(review);

  return (
    <div className="text-white mt-3">
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
