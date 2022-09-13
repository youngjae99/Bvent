import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import styled from 'styled-components';
import UserInfoWrapper from './UserInfoWrapper';
import Button from '@/components/Button';
import { userState } from '@/recoil/atoms/user';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type Props = {
  event_name: string;
  subevent_id: string;
  onClose: () => void;
};

const TitleBarWrapper = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

const SignintoWritePlaceholder = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center mb-2 text-white text-lg outline-none w-full h-32 p-2 rounded-lg"
        style={{ backgroundColor: 'rgba(255,255,255,.1)' }}
      >
        <a href="/auth/signin" className="text-blue-400 mr-1">
          Sign In
        </a>{' '}
        to write your review
      </div>
      <div className="flex flex-row justify-end">
        <Button disabled>Submit</Button>
      </div>
    </div>
  );
};

const NewReviewWrapper = (props: Props) => {
  const { active, account, connector, chainId } = useWeb3React();
  const { event_name, subevent_id, onClose } = props;
  const user = useRecoilValue(userState);
  const [review, setReview] = useState<string>('');

  const submitReview = async () => {
    console.log(review);
    const loginRes = await axios
      .post(`https://api.bventdao.xyz/reviews/create`, {
        review_content: review,
        review_title: 'Title', // TODO(aaron) : remove this field
        event_name: event_name,
        subevent_id: subevent_id,
        timestamp: Date.now(),
        amount: 10,
        idToken: sessionStorage.getItem('session'),
      })
      .then((res) => {
        console.log(res);
        onClose();
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 403) {
          alert('로그인이 필요합니다.');
        }
      });
    console.log(loginRes); // TODO(aaron): remove this
  };

  if (!active) {
    return SignintoWritePlaceholder();
  }

  return (
    <div className="fixed bottom-0 left-0 z-20 w-screen h-5/6 flex flex-col items-center bg-black bg-opacity-100 text-white">
      <TitleBarWrapper>
        <div className='w-20'>
          <ArrowLeftIcon className="w-6 cursor-pointer" onClick={onClose}/>
        </div>
        <p>Write Review</p>
        <Button onClick={submitReview}>Submit</Button>
      </TitleBarWrapper>
      <div className="flex flex-row justify-start w-full px-4 mt-4">
        <UserInfoWrapper {...user} isMyProfile />
      </div>
      <textarea
        className="w-10/12 h-32 p-1 m-2 mb-5 rounded-lg text-white"
        style={{ backgroundColor: 'rgba(255,255,255,.1)' }}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here"
      ></textarea>
    </div>
  );
};

export default NewReviewWrapper;
