import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WALLET_SUPPORT_HEX, WalletConnectorName } from '@/constants/wallet';
import { setItem } from '@/utils/localStorage';
import { LocalStorageKey } from '@/constants/localStorage';

// import { SUPPORT_CHAIN } from '@/utils/contractInit';
export const SUPPORT_CHAIN = 9001;
import { isMobileDevice } from '@/utils/isMobileDevice';

const injectedConnector = new InjectedConnector({
  supportedChainIds: [9000, 9001], //[1, 3, 4, 5, 42],
});

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export const useWallet = () => {
  const { activate, deactivate, active, account, connector, library, chainId } =
    useWeb3React();
  const [eth, setEth] = useState('0.0');

  const connectMetamaskWallet = async () => {
    if (
      typeof window.ethereum === 'undefined' &&
      typeof window.web3 === 'undefined'
    ) {
      if (isMobileDevice()) {
        window.open(`https://metamask.app.link/dapp/${window.location.host}`);
      } else {
        alert('need to install METAMASK!');
        return;
      }
    }
    try {
      await activate(injectedConnector);
      setItem(LocalStorageKey.CONNECTOR_NAME, WalletConnectorName.METAMASK);
    } catch (e) {
      const error = e;
      console.error(e);
    }
  };

  const disconnectWallet = () => {
    try {
      document.cookie = 'idToken=; Max-Age=-99999999;';
      setItem(LocalStorageKey.CONNECTOR_NAME, 'null');
      deactivate();
    } catch (e) {
      // do nothing
    }
  };

  useEffect(() => {
    if (account && library) {
      setItem(LocalStorageKey.ACCOUNT, account);
      library.getBalance(account).then((balance: number) => {
        setEth(Number(ethers.utils.formatEther(balance)).toFixed(6).toString());
      });
    }
  }, [account, chainId, library]);

  useEffect(() => {
    if (window.ethereum !== undefined) {
      if (chainId && chainId !== SUPPORT_CHAIN) {
        window.ethereum
          .request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: WALLET_SUPPORT_HEX }],
          })
          .catch(() => {
            console.error('error');
          });
      }
    }
  }, [chainId]);

  return {
    eth,
    connectMetamaskWallet,
    disconnectWallet,
  };
};
