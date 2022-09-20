import React, { useEffect, useState } from 'react';
import { parseEventTime } from '@/utils/parseTime';
// import { Review } from './type';
// import ProfileImage from './ProfileImage';
import UserInfoWrapper from './UserInfoWrapper';
import ReviewAPI from '@/api/review';
import { useWeb3React } from '@web3-react/core';

// type Props = {
//   timestamp: string;
//   username: string;
//   review_title: string;
//   review_content: string;
//   txHash: string;
//   amount: number;
// };

const UpBtn = (props: any) => {
  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.9255 5.86415L4.80978 0.164489C4.73538 0.0611941 4.61501 0.000313014 4.48706 0C4.35832 0.000313014 4.23732 0.0619767 4.1626 0.165741L0.0734128 5.8654C-0.0128351 5.98545 -0.0238923 6.14336 0.0445058 6.2742C0.111798 6.40488 0.248594 6.48721 0.397711 6.48721H2.32218L2.32202 11.6064C2.32202 11.8239 2.49973 12 2.71945 12L6.2801 11.9998C6.49951 12 6.67737 11.8239 6.67753 11.6059L6.67753 6.48736H8.60263C8.75111 6.48736 8.88744 6.40441 8.95599 6.27342C9.02423 6.14258 9.01238 5.98435 8.9255 5.86415Z" />
    </svg>
  );
};

const DownBtn = (props: any) => {
  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.0744949 6.13585L4.19022 11.8355C4.26462 11.9388 4.38499 11.9997 4.51294 12C4.64168 11.9997 4.76268 11.938 4.8374 11.8343L8.92659 6.1346C9.01284 6.01456 9.02389 5.85664 8.95549 5.7258C8.8882 5.59512 8.75141 5.5128 8.60229 5.5128L6.67783 5.5128L6.67798 0.393616C6.67798 0.176071 6.50027 7.35141e-07 6.28055 7.15932e-07L2.7199 0.000156807C2.50049 3.85469e-07 2.32263 0.176071 2.32247 0.394084L2.32247 5.51264L0.397372 5.51264C0.248887 5.51264 0.112564 5.59559 0.0440078 5.72658C-0.0242323 5.85742 -0.0123848 6.01565 0.0744949 6.13585Z" />
    </svg>
  );
};

const UpDownWrapper = ({ review_id, likes }: any) => {
  const [updown, setUpDown] = useState<string>('none');
  const { active, account, connector, chainId } = useWeb3React();
  // let upCnt = 0;
  // let downCnt = 0;
  const [upCnt, setUpCnt] = useState<number>(0);
  const [downCnt, setDownCnt] = useState<number>(0);

  useEffect(() => {
    setUpCnt(
      likes ? Object.keys(likes).filter((key) => likes[key] === 1).length : 0,
    );
    setDownCnt(
      likes ? Object.keys(likes).filter((key) => likes[key] === -1).length : 0,
    );
    const parsedAccount = account?.toLowerCase() + ' my wallet';
    console.log(parsedAccount);
    if (likes && likes[parsedAccount]) {
      if (likes[parsedAccount] == 1) {
        setUpDown('up');
      } else if (likes[parsedAccount] == -1) {
        setUpDown('down');
      }
    }
  }, []);

  const handleUp = async () => {
    if (updown === 'up') {
      // setUpDown('none'); not-allowed
      alert('You have already liked/disliked this review');
    } else {
      const res = await ReviewAPI.likeReivew({
        review_id: review_id,
      });
      console.log(res);
      if (res.status === 'like complete!') {
        console.log('liked!');
        setUpDown('up');
        setUpCnt((prev) => prev + 1);
      } else if (res.status === 'You have already liked this review') {
        alert('You have already liked/disliked this review');
      } else if (res.status === 'You are the owner') {
        alert('You cannot like your own review');
      } else if (res.status === 403) {
        console.log('please login');
      }
    }
  };

  const handleDown = async () => {
    if (updown === 'down') {
      // setUpDown('none'); not-allowed
      alert('You have already liked/disliked this review');
    } else {
      const res = await ReviewAPI.dislikeReivew({
        review_id: review_id,
      });
      console.log(res);
      if (res.status === 'like complete!') {
        console.log('disliked!');
        setUpDown('down');
        setDownCnt((prev) => prev + 1);
      } else if (res.status === 'You have already liked this review') {
        alert('You have already liked/disliked this review');
      } else if (res.status === 'You are the owner') {
        alert('You cannot like your own review');
      } else if (res.status === 403) {
        console.log('please login');
      }
    }
  };

  return (
    <div className="flex flex-row justify-end gap-4 my-2">
      <div
        className="flex flex-row items-center gap-1 cursor-pointer"
        onClick={handleUp}
        style={{
          color: updown == 'up' ? '#EE5390' : 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <UpBtn fill={updown == 'up' ? '#EE5390' : 'rgba(255, 255, 255, 0.7)'} />
        <p>{upCnt}</p>
      </div>
      <div
        className="flex flex-row items-center gap-1 cursor-pointer"
        onClick={handleDown}
      >
        <DownBtn
          fill={updown == 'down' ? '#0EDAE9' : 'rgba(255, 255, 255, 0.7)'}
        />
      </div>
    </div>
  );
};

const Review = (props: any) => {
  const {
    review_id,
    timestamp,
    walletAddress,
    review_content,
    likes,
    txHash,
    hideUpDown = false,
  } = props;

  return (
    <div className="flex flex-col mb-3">
      <UserInfoWrapper userAddress={walletAddress} timestamp={timestamp} />
      <div className="ml-12">
        <p style={{ whiteSpace: 'pre-line', wordBreak: 'break-all' }}>
          {review_content}
        </p>
      </div>
      {!hideUpDown && <UpDownWrapper review_id={review_id} likes={likes} />}
    </div>
  );
};

export default Review;
