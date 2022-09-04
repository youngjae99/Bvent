import React, { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import NewReview from './newReview';
import Review from './Review';
import ReviewForm from './ReviewForm';

type Props = {
  event_name: string;
  subevent_id: string;
  review: any;
};

const WriteReviewButton = ({ onClick }: any) => {
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
  const [showPopup, setShowPopup] = useState(false);
  const reviewCnt = review ? Object.keys(review).length : 0;

  console.log(review);

  return (
    <div className="text-white mt-3">
      <div className="flex flex-row justify-between mb-2">
        <p>{reviewCnt} reviews</p>
        <WriteReviewButton onClick={() => setShowPopup(true)} />
      </div>
      <ul>
        {review ? (
          Object.keys(review).map((key) => {
            const _review = review[key];
            return <Review key={key} {..._review} />;
          })
        ) : (
          <>No review</>
        )}
      </ul>
      {/* <NewReview
        event_name={event_name}
        subevent_id={subevent_id}
        handleClose={() => setShowPopup(false)}
      /> */}
      <ReviewForm />
    </div>
  );
};

export default ReviewContainer;
