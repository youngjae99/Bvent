import React, { useRef } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';

import { WalletConnectorName } from '../constants/wallet';
import { LocalStorageKey } from '@/constants/localStorage';

import { getItem } from '../utils/localStorage';

import { injectedConnector, walletConnectConnector } from './connector';
import axios from 'axios';
import UserAPI from '@/api/user';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/atoms/user';
import { useRouter } from 'next/router';

const WalletProvider = ({ children }: any) => {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
    account,
  } = useWeb3React();
  const [userInfoState, setUserInfoState] = useRecoilState(userState);
  const { address } = userInfoState;
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  const prevAccount = useRef<string | null | undefined>(address);

  console.log(networkActive);

  useEffect(() => {
    async function detectAccountChanged() {
      if (networkActive && address !== account?.toLocaleLowerCase()) {
        try {
          await axios.post(`/api/auth/login`, {
            username: account,
          });
          const userInfo = await UserAPI.getMyInfo();
          prevAccount.current = account;
          setUserInfoState({
            ...userInfo,
            isSignIn: true,
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
            const userInfo = await UserAPI.getMyInfo();
            prevAccount.current = account;
            setUserInfoState({
              ...userInfo,
              isSignIn: true,
            });

            router.push('/mypage?edit=true', '/mypage');
          } catch (error) {
            console.log(error);
            setUserInfoState({
              isSignIn: false,
            });
          }
        }
      }
    }
    detectAccountChanged();
  }, [account]);

  useEffect(() => {
    console.log(activateNetwork, account);
  }, [activateNetwork]);

  useEffect(() => {
    const connectorName = getItem(LocalStorageKey.CONNECTOR_NAME);

    if (connectorName === WalletConnectorName.WALLET_CONNECT) {
      if (!networkActive && !networkError) {
        activateNetwork(walletConnectConnector()).catch((e) => {
          console.log(e);
        });
      }
    } else if (connectorName === WalletConnectorName.METAMASK) {
      injectedConnector
        .isAuthorized()
        .then((isAuthorized) => {
          if (!networkActive && !networkError) {
            document.cookie = 'idToken=; Max-Age=-99999999;';
            setUserInfoState({
              isSignIn: false,
            });
          }
          if (isAuthorized && !networkActive && !networkError) {
            activateNetwork(injectedConnector);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    setLoaded(true);
  }, [activateNetwork, networkActive, networkError]);
  return <>{children}</>;
};

export default WalletProvider;
