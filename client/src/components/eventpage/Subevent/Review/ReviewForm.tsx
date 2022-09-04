import React, { useState } from 'react';
import Button from '@/components/button';
import qs from 'qs';
import axios from 'axios';

type Props = any;

const ReviewForm = (props: Props) => {
  const [review, setReview] = useState<string>('');

  const handleClick = async () => {
    console.log(review);
    const loginRes = await axios
      .post(
        `https://bvent-seoul.web.app/reviews/create`,
        qs.stringify({
          review_content: 'wow',
          event_name: '2021 ETH Denver',
          subevent_id: 17,
          timestamp: Date.now(),
          amount: 10,
          withCreadentials: true,
        }),
        // { withCreadentials: true },
      )
      .catch((error) => {
        console.log(error.response);
      });
    console.log(loginRes);
  };

  return (
    <div>
      Your Review
      <textarea
        className="text-white outline-none w-full h-32 p-2 rounded-lg"
        onChange={(e) => setReview(e.target.value)}
        style={{ backgroundColor: 'rgba(255,255,255,.1)' }}
      ></textarea>
      <div className="flex flex-row justify-end">
        <Button onClick={handleClick}>Submit</Button>
      </div>
    </div>
  );
};

export default ReviewForm;
