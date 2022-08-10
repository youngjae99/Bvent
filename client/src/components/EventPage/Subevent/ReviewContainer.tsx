import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';

type Props = {
  eventInfo: any;
};

const WriteReviewButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-white text-2xl cursor-pointer hover:text-green-100"
    >
      <BsPencilSquare></BsPencilSquare>
    </div>
  );
};

const ReviewContainer = (props: Props) => {
  const { eventInfo } = props;
  return (
    <div className="text-white mt-3">
      <div className='flex flex-row justify-between'>
        <p>3 reviews</p>
        <WriteReviewButton onClick={() => alert('ho')} />
      </div>
      <ul>
        <li>Review1</li>
        <li>Review2</li>
        <li>Review3</li>
      </ul>
    </div>
  );
};

export default ReviewContainer;
