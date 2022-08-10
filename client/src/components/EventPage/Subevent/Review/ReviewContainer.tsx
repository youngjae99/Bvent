import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import NewReview from './newReview';
import Review from './Review';

type Props = {
  event_name: string;
  subevent_id: string;
  review: any;
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
  const { event_name, subevent_id, review } = props;
  console.log(review);

  if (review) {
    const reviewCnt = review ? Object.keys(review).length : 0;
    return (
      <div className="text-white mt-3">
        <div className="flex flex-row justify-between">
          <p>{reviewCnt} reviews</p>
          <WriteReviewButton onClick={() => alert('ho')} />
        </div>
        <ul>
          {Object.keys(review).map((key) => {
            const _review = review[key];
            return (
              <Review {..._review}/>
            );
          })}
        </ul>
        <NewReview event_name={event_name} subevent_id={subevent_id} show={false}/>
      </div>
    );
  } else {
    return <div>no review!</div>;
  }
};

export default ReviewContainer;
