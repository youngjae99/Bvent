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
      .post(`/api/auth/login`, {
        username: address,
        password: '990326',
        loginType: 'wallet',
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
    sessionStorage.setItem('session', loginRes.idToken); // TODO(aaron): change to cookie
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
