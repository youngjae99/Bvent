import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { FC, useEffect, useState } from 'react';

import { WalletConnectorName } from '../constants/wallet';
import { LocalStorageKey } from '@/constants/localStorage';

import { getItem } from '../utils/localStorage';

import { injectedConnector, walletConnectConnector } from './connector';

const LoadingScreen = () => (
  <div className="bg-green-500 text-white">Loading...</div>
);

const WalletProvider = ({ children }: any) => {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const connectorName = getItem(LocalStorageKey.CONNECTOR_NAME);

    if (connectorName === WalletConnectorName.WALLET_CONNECT) {
      if (!networkActive && !networkError) {
        activateNetwork(walletConnectConnector())
          .catch((e) => {
            console.log(e);
          });
      }
    } else if (connectorName === WalletConnectorName.METAMASK) {
      injectedConnector
        .isAuthorized()
        .then((isAuthorized) => {
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

  if (loaded) {
    return <>{children}</>;
  }

  return <LoadingScreen />;
};

export default WalletProvider;
