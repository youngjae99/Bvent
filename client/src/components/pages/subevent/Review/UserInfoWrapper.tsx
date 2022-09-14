import React from 'react';
import { parseEventTime } from '@/utils/parseTime';
import ProfileImage from './ProfileImage';

type Props = {
  username: string;
  walletAddress?: string;
  timestamp?: string;
  amount?: number;
  txHash?: string;
  isMyProfile?: boolean;
};

const UserInfoWrapper = (props: Props) => {
  const { username, walletAddress, timestamp, amount, txHash, isMyProfile } =
    props;
  return (
    <div className="flex flex-row mb-3 text-white">
      <div className="w-12">
        <ProfileImage />
      </div>
      <div className="flex-1">
        <p className="text-white text-md text-left">
          {username?.slice(0, 20) || 'undefined user'}
        </p>
        <p className="text-white text-md text-left">{walletAddress}</p>
        <div className="flex flex-row justify-start gap-2">
          <p className="text-gray-400">
            {timestamp && parseEventTime(timestamp, 'UTC')}
          </p>
          |
          <a href={`https://ropsten.etherscan.io/tx/${txHash}`}>
            <div className="flex flex-row gap-1 text-gray-300 hover:text-blue-400">
              <img
                src="/icons/ethereum-logo.svg"
                width="10px"
                height="10px"
                alt="ethereum-logo"
              />
              {txHash?.slice(0, 10) + '...'}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfoWrapper;
