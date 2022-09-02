import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { useWallet } from '@hook/useWallet';
import { formatAddress } from '@utils/formatAddress';
import axios from 'axios';

const MenuItem = ({ onClick, selected, children }: any) => (
  <li className="text-white py-4 cursor-pointer">
    <div className="flex items-center" onClick={onClick}>
      {selected ? (
        <p className="text-indigo-500 ml-3 text-lg">{children}</p>
      ) : (
        <p className="text-gray-400 ml-3 text-lg hover:text-indigo-300">
          {children}
        </p>
      )}
    </div>
  </li>
);

const AccountWrapper = styled.div`
  color: white;
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
    const loginRes = await axios.post(
      `https://bvent-seoul.web.app/auth/login`,
      {
        username: address,
        password: '990326',
        loginType: 'wallet',
      },
    );
    console.log(loginRes);
  };

  console.log(active);

  if (active) {
    return (
      <MenuItem onClick={disconnectWallet}>
        <AccountWrapper>{formatAddress(account)}</AccountWrapper>
        <div>Sign Out</div>
      </MenuItem>
    );
  } else {
    return <MenuItem onClick={handleLogin}>Sign In</MenuItem>;
  }
};
