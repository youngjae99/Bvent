import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';

type Props = {
    event_name: string;
  subevent_id: string;
  show: any;
};

const NewReview = (props: Props) => {
  //  const [user, ] = useRecoilState(auth)
  const { active, account, connector, chainId } = useWeb3React();
  const { event_name, subevent_id } = props;
  const [comment, setComment] = useState<string>('');

  const submitReview = async () => {
    const data = {
        timestamp: Date.now(),
        event_name: event_name,
        subevent_id: subevent_id,
        review_title: "TEST",
        review_content: comment
    }
    const res = await axios.post(
      `https://bvent-seoul.web.app/review/${subevent_id}`,
      data
    );
    console.log(res.status);
  };

  return (
    <div className="fixed bottom-0 left-0 w-screen h-40 bg-black flex flex-col items-center">
      {account}
      <textarea className="bg-gray-700 w-10/12 p-1 m-2" onChange={(e)=>setComment(e.target.value)}></textarea>
      <div onClick={submitReview}>Submit</div>
    </div>
  );
};

export default NewReview;
