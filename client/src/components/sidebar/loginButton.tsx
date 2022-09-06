import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { useWallet } from '@/hook/useWallet';
import { formatAddress } from '@/utils/formatAddress';
import axios from 'axios';

const SignInWrapper = ({ onClick, active, children }: any) => {
  if (active) {
    return (
      <div
        className="cursor-pointer bg-white text-indigo-500 border border-indigo-400 py-4 hover:bg-indigo-100 rounded-xl transition-all"
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
    console.log(active, account);
  }, [active]);

  const handleLogin = async () => {
    connectMetamaskWallet();
    const address = '0x163B3Bd064023B017bB6d06295591554D380b5C8';
    console.log(account);

    const frm = new FormData();
    frm.append('username', address);
    frm.append('password', '990326');
    frm.append('loginType', 'wallet');
    const loginRes = await axios
      .post(`https://bvent-seoul.web.app/auth/login`, frm, {
        withCredentials: true,
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(loginRes);
    sessionStorage.setItem('session', JSON.stringify(loginRes));
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
