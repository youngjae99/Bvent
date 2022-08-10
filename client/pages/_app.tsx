import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import { StyledThemeProvider } from '@definitions/styled-components';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { RecoilRoot } from 'recoil';


const getLibrary = (provider?: any) =>
  new ethers.providers.Web3Provider(provider);


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </Hydrate>
        </QueryClientProvider>
      </Web3ReactProvider>
    </StyledThemeProvider>
  );
}

export default MyApp;
