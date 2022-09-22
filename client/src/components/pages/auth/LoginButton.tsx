import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { useWallet } from '@/hook/useWallet';
import { formatAddress } from '@/utils/formatAddress';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignInWrapper = ({ onClick, active, children }: {onClick: ()=>void, active?:boolean, children:ReactNode}) => {
  if (active) {
    return (
      <div
        className="cursor-pointer bg-primary border border-primary py-4 text-white bg-opacity-20 hover:bg-opacity-30 rounded-xl transition-all"
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
        className="cursor-pointer border border-primary text-white py-4 hover:bg-primary-dark rounded-xl transition-all"
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

export const LoginButton = () => {
  const { connectMetamaskWallet, disconnectWallet } = useWallet();
  const { active, account } = useWeb3React();
  const router = useRouter();

  const handleLogin = async () => {
    await connectMetamaskWallet();

    if (account) {
      try {
        await axios.post(`/api/auth/login`, {
          username: account,
        });
      } catch (error) {
        await axios.post(`/api/auth/register`, {
          username: account,
          address: account,
        });
        try {
          await axios.post(`/api/auth/login`, {
            username: account,
          });

          router.push('/mypage?edit=true', '/mypage');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  if (active) {
    return (
      <SignInWrapper active onClick={disconnectWallet}>
        <AccountWrapper>{formatAddress(account)}</AccountWrapper>
      </SignInWrapper>
    );
  } else {
    return (
      <SignInWrapper onClick={handleLogin}>Sign In with Metamask</SignInWrapper>
    );
  }
};
