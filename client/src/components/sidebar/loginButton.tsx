import React from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { useWallet } from '@hook/useWallet';
import { formatAddress } from '@utils/formatAddress';

type Props = {};

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
`
const SignInOutButton = styled.div`
    
`

export const LoginButton = (props: Props) => {
  const { connectMetamaskWallet, disconnectWallet } = useWallet();
  const { active, account, connector, chainId } = useWeb3React();

  if (active) {
    return (
      <MenuItem onClick={disconnectWallet}>
        <AccountWrapper>{formatAddress(account)}</AccountWrapper>
        <div>Sign Out</div>
      </MenuItem>
    );
  } else {
    return <MenuItem onClick={connectMetamaskWallet}>Sign In</MenuItem>;
  }
};
