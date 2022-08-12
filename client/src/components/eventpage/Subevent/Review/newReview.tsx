import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useWeb3React } from '@web3-react/core';
import { BiArrowBack, BiShareAlt, BiPencil } from 'react-icons/bi';
import axios from 'axios';
import styled from 'styled-components';

type Props = {
  event_name: string;
  subevent_id: string;
  handleClose: any;
};

const TitleBarWrapper = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;

  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

const NewReview = (props: Props) => {
  //  const [user, ] = useRecoilState(auth)
  const { active, account, connector, chainId } = useWeb3React();
  const { event_name, subevent_id, handleClose } = props;
  const [comment, setComment] = useState<string>('');

  const submitReview = async () => {
    const data = {
      timestamp: Date.now(),
      event_name: event_name,
      subevent_id: subevent_id,
      review_title: 'TEST',
      review_content: comment,
    };
    const res = await axios.post(
      `https://bvent-seoul.web.app/review/${subevent_id}`,
      data
    );
    console.log(res.status);
  };

  return (
    <div>
      <div
        className="inset-0 fixed w-full h-full"
        style={{backgroundColor:"rgba(0,0,0,0.5)"}}
        onClick={handleClose}
      />
      <div
        className="fixed bottom-0 left-0 w-screen flex flex-col items-center rounded-t-2xl"
        style={{ backgroundColor: '#010F21' }}
      >
        <TitleBarWrapper>
          <div>
            <BiArrowBack style={{ cursor: 'pointer' }} />
          </div>
          <p>Write Review</p>
          <div onClick={submitReview}>
            <BiPencil style={{ cursor: 'pointer' }} />
          </div>
        </TitleBarWrapper>
        <div className="flex flex-row justify-start w-full px-10 mt-4">
          <img src="/images/chat-profile.png" width={150}></img>
        </div>
        <textarea
          className="bg-gray-700 w-10/12 h-32 p-1 m-2 mb-5 rounded-lg"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default NewReview;
