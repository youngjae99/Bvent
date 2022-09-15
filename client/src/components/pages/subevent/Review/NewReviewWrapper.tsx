import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import styled from 'styled-components';
import UserInfoWrapper from './UserInfoWrapper';
import TextButton from '@/components/Button/TextButton';
import { userState } from '@/recoil/atoms/user';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ReviewAPI from '@/api/review';

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

const SignintoWritePlaceholder = ({ onClose }: any) => {
  return (
    <div className="fixed top-16 left-0 z-10 w-screen h-full flex flex-col items-center">
      <div className="w-full max-w-mobile h-full bg-black bg-opacity-100 text-white">
        <TitleBarWrapper>
          <div className="w-20">
            <ArrowLeftIcon className="w-6 cursor-pointer" onClick={onClose} />
          </div>
          <p>Write Review</p>
          <div className="w-20"></div>
        </TitleBarWrapper>
        <div className="h-3/5 flex justify-center items-center">
          <a href="/auth/signin" className="text-blue-400 mr-1">
            Sign In
          </a>{' '}
          to write your review
        </div>
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

    if (review.length === 0) {
      alert('Write more than 0 characters');
      return;
    }

    const loginRes = await ReviewAPI.writeReview({
      review_content: review,
      event_name: event_name,
      subevent_id: subevent_id,
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
    return SignintoWritePlaceholder({ onClose: onClose });
  }

  return (
    <div className="fixed top-16 left-0 z-10 w-screen h-full flex flex-col items-center">
      <div className="w-full max-w-mobile h-full bg-black bg-opacity-100 text-white">
        <TitleBarWrapper>
          <div className="w-20">
            <ArrowLeftIcon className="w-6 cursor-pointer" onClick={onClose} />
          </div>
          <p>Write Review</p>
          <TextButton onClick={submitReview}>Submit</TextButton>
        </TitleBarWrapper>
        <div className="flex flex-col gap-2 justify-start w-full h-full px-4 mt-4">
          <UserInfoWrapper {...user} isMyProfile />
          <textarea
            className="h-3/4 p-1 ml-12 mb-5 rounded-lg text-white"
            style={{ backgroundColor: 'black', outline: '0', resize: 'none' }}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here"
            autoFocus
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NewReviewWrapper;
