import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { useWallet } from '@/hook/useWallet';
import { formatAddress } from '@/utils/formatAddress';
import axios from 'axios';
import { useRouter } from 'next/router';
import UserAPI from '@/api/user';

const SignInWrapper = ({ onClick, active, children }: any) => {
  if (active) {
    return (
      <div
        className="cursor-pointer bg-primary border border-primary py-4 text-white bg-opacity-20 hover:bg-opacity-30 rounded-xl transition-all"
        onClick={onClick}
      >
        <div className="flex items-center">
          <p className="mx-3 text-lg">{children}</p>
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
          <p className="mx-3 text-lg">{children}</p>
        </div>
      </div>
    );
  }
};
const AccountWrapper = styled.div`
  color: text-gray-400;
  font-size: 1.2rem;
`;

export const LoginButton = (props: any) => {
  const { onSuccess } = props;
  const { connectMetamaskWallet, disconnectWallet } = useWallet();
  const { active, account, connector, chainId } = useWeb3React();
  const router = useRouter();

  const handleLogin = async () => {
    await connectMetamaskWallet();

    if (account) {
      try {
        await axios.post(`/api/auth/login`, {
          username: account,
        });
        const userInfo = await UserAPI.getMyInfo();
        onSuccess();
        console.log("success", userInfo);
      } catch (error) {
        await axios.post(`/api/auth/register`, {
          username: account,
          address: account,
        });
        try {
          await axios.post(`/api/auth/login`, {
            username: account,
          });
          const userInfo = await UserAPI.getMyInfo();
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
