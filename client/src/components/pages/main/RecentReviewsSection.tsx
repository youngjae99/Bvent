import ReviewAPI from '@/api/review';
import React, { useEffect, useState } from 'react';
import Review from '../review/Review';

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
              return <Review key={key} {..._review} hideUpDown/>;
            })
        ) : (
          <>No review</>
        )}
    </div>
  );
};

export default RecentReviewsSection;
