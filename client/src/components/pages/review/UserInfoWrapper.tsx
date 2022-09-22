import React, { useEffect, useState } from 'react';
import { parseReviewTime } from '@/utils/parseTime';
import ProfileImage from './ProfileImage';
import UserAPI from '@/api/user';

type Props = {
  userAddress: string;
  timestamp?: number;
  isMyProfile?: boolean;
};

const defaultUserInfo = {
  username: '',
  bio: 'Bventer',
  profile_pic: '/icons/default_profile_pic.png',
};

const UserInfoWrapper = (props: Props) => {
  const { userAddress, timestamp } = props;
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const { username, bio = 'Bventer', profile_pic } = userInfo;

  useEffect(() => {
    const fetch = async () => {
      const data = await UserAPI.getUserInfoWithAddress(userAddress);
      setUserInfo(data);
    };
    fetch();
  }, []);

  return (
    <div className="flex flex-row text-white">
      <div className="w-12">
        <ProfileImage src={profile_pic} />
      </div>
      <div className="flex-1">
        <div className="flex flex-row gap-2">
          <p className="text-white text-md text-left">
            {username?.slice(0, 20) || userAddress.slice(0, 15)}
          </p>
          <p className="text-white text-opacity-70 text-sm text-left">
            {timestamp && parseReviewTime(timestamp)}
          </p>
        </div>
        <p className="text-white text-opacity-70 text-sm text-left">
          {bio || 'Bventer'}
        </p>
        <div className="flex flex-row justify-start gap-2"></div>
      </div>
    </div>
  );
};

export default UserInfoWrapper;
