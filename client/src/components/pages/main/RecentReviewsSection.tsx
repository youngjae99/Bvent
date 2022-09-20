import ReviewAPI from '@/api/review';
import React, { useEffect, useState } from 'react';
import Review from '../review/Review';

const ReveiwLinkWrapper = (props: any) => {
  const { review, key, children } = props;
  if (review.subevent_id !== '-1') {
    return (
      <a key={key} href={`/event/${review.event_title}/${review.subevent_id}`}>
        {children}
      </a>
    );
  } else {
    return (
      <a key={key} href={`/event/${review.event_title}`}>
        {children}
      </a>
    );
  }
};

const RecentReviewsSection = () => {
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const getReveiwsData = async () => {
      const res = await ReviewAPI.getRecentReviews({ cnt: 4 });
      setReviews(res);
    };
    getReveiwsData();
  }, []);

  return (
    <div className="text-white">
      {reviews ? (
        Object.keys(reviews)
          .sort((a, b) => reviews[b].timestamp - reviews[a].timestamp)
          .map((key) => {
            const _review = reviews[key];
            return (
              <ReveiwLinkWrapper review={_review} key={key}>
                <div className="hover:bg-darkgray hover:bg-opacity-80 rounded-lg transition-all cursor-pointer">
                  <Review key={key} {..._review} hideUpDown />
                </div>
              </ReveiwLinkWrapper>
            );
          })
      ) : (
        <>No review</>
      )}
    </div>
  );
};

export default RecentReviewsSection;
