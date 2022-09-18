import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { useWallet } from '@/hook/useWallet';
import { formatAddress } from '@/utils/formatAddress';
import axios from 'axios';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

const SignInWrapper = ({ onClick, active, children }: any) => {
  if (active) {
    return (
      <div
        className="cursor-pointer bg-black text-gray-400 border border-primary py-4 hover:bg-indigo-100 hover:bg-opacity-20 rounded-xl transition-all"
        onClick={onClick}
      >
        <div className="flex items-center">
          <p className="ml-3 text-lg">{children}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="cursor-pointer bg-indigo-500 text-white py-4 hover:bg-indigo-600 rounded-xl transition-all"
        onClick={onClick}
      >
        <div className="flex items-center">
          <p className="ml-3 text-lg">{children}</p>
        </div>
      </div>
    );
  }
};
const AccountWrapper = styled.div`
  color: text-gray-400;
  font-size: 1.2rem;
`;
const SignInOutButton = styled.div``;

export const LoginButton = () => {
  const { connectMetamaskWallet, disconnectWallet } = useWallet();
  const { active, account, connector, chainId } = useWeb3React();

  useEffect(() => {
    console.log("activate changed", active, account);

    const postLogin = async () => {
      const loginRes = await axios
      .post(
        `/api/auth/login`,
        {
          username: account,
          password: '',
          loginType: 'wallet',
        },
        { withCredentials: true },
      )
      console.log(loginRes);
    }

    if(account){
      postLogin();
    }
  }, [active]);

  const handleLogin = async () => {
    await connectMetamaskWallet();
    console.log(account);
  };

  if (active) {
    return (
      <SignInWrapper active onClick={disconnectWallet}>
        <AccountWrapper>{formatAddress(account)}</AccountWrapper>
        <div>Sign Out</div>
      </SignInWrapper>
    );
  } else {
    return <SignInWrapper onClick={handleLogin}>Sign In</SignInWrapper>;
  }
};
