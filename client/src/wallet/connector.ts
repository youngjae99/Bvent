import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import { Config } from '@/utils/Config';

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [9000, 9001],//[1, 3, 4, 5, 42],
});

export const walletConnectConnector = () =>
  new WalletConnectConnector({
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    infuraId: Config.INFURA_ID,
  });
