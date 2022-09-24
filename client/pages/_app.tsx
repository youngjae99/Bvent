import React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Hydrate } from 'react-query/hydration';
import { ethers } from 'ethers';

import { StyledThemeProvider } from '@/definitions/styled-components';
import { Web3ReactProvider } from '@web3-react/core';
import WalletProvider from '@/wallet/WalletProvider';
import '../styles/global.css';
import UserAPI from '@/api/user';
import { userState } from '@/recoil/atoms/user';

const getLibrary = (provider?: any) =>
  new ethers.providers.Web3Provider(provider);

const initializeRecoilState =
  (initialRecoilState) =>
  ({ set }) =>
    set(userState, {
      ...initialRecoilState,
      isSignIn: true,
    });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <StyledThemeProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot
              initializeState={
                pageProps.userInfo && initializeRecoilState(pageProps.userInfo)
              }
            >
              <WalletProvider>
                <Component {...pageProps} />
              </WalletProvider>
            </RecoilRoot>
          </Hydrate>
        </QueryClientProvider>
      </Web3ReactProvider>
    </StyledThemeProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const cookie = ctx?.req?.headers?.cookie;
  let parsedCookie = '';

  if (cookie) {
    const array = cookie.split(escape('idToken') + '=');
    if (array.length >= 2) {
      const arraySub = array[1].split(';');
      parsedCookie = unescape(arraySub[0]);
    }
  }

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = Component.getInitialProps(ctx);
  }

  try {
    const userInfo = await UserAPI.getMyInfo(true, parsedCookie);

    return {
      pageProps: {
        ...pageProps,
        userInfo,
      },
    };
  } catch (error) {
    return { pageProps };
  }
};

export default MyApp;
