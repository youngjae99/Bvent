import React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Hydrate } from 'react-query/hydration';
import { ethers } from 'ethers';
import { StyledThemeProvider } from '@definitions/styled-components';
import { Web3ReactProvider } from '@web3-react/core';
import '../styles/global.css';
import WalletProvider from 'src/wallet/WalletProvider';

const getLibrary = (provider?: any) =>
  new ethers.providers.Web3Provider(provider);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <WalletProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <RecoilRoot>
                <Component {...pageProps} />
              </RecoilRoot>
            </Hydrate>
          </QueryClientProvider>
        </WalletProvider>
      </Web3ReactProvider>
    </StyledThemeProvider>
  );
}

export default MyApp;
