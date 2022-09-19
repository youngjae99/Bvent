import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Review from './Review';

type Props = {
  event_id?: string;
  subevent_id?: string;
};

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ReviewContainer = (props: Props) => {
  const { event_id, subevent_id } = props;

  let url = '';
  if (event_id) {
    url = `/api/review?event_id=${event_id}`;
  }
  if (subevent_id) {
    url = `/api/review?subevent_id=${subevent_id}`;
  }

  const { data } = useSWR(url, fetcher);
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
              return <Review key={key} review_id={key} {..._review} />;
            })
        ) : (
          <>No review</>
        )}
      </ul>
    </div>
  );
};

export default ReviewContainer;
