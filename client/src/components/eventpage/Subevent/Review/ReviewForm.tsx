import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import Button from '@/components/Button';
import qs from 'qs';
import axios from 'axios';

const SignintoWritePlaceholder = () => {
  return (
    <div>
      Write your review
      <div
        className="flex justify-center items-center mb-2 text-white text-lg outline-none w-full h-32 p-2 rounded-lg"
        style={{ backgroundColor: 'rgba(255,255,255,.1)' }}
      >
        <a href="/auth/signin" className="text-blue-400 mr-1">Sign In</a> to write your review
      </div>
      <div className="flex flex-row justify-end">
        <Button disabled>Submit</Button>
      </div>
    </div>
  );
};

const ReviewForm = () => {
  const [review, setReview] = useState<string>('');
  const { active } = useWeb3React();

  if (!active) {
    return SignintoWritePlaceholder();
  }

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
      Write your review
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
