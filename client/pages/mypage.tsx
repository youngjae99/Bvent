import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';
import TitleBar from '@/components/pages/subevent/TitleBar';
import { AboutMe } from '@/components/mypage/AboutMe';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/atoms/user';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';
import { useWallet } from '@/hook/useWallet';
import axios from 'axios';
import UserAPI from '@/api/user';

const MyPage = () => {
  const [userInfoState, setUserInfoState] = useRecoilState(userState);
  const { account } = useWeb3React();
  const router = useRouter();
  const { isSignIn } = userInfoState;

  useEffect(() => {
    async function handleLogin() {
      if (!isSignIn) {
        // router.replace('/auth/signin');
        router.push({pathname: '/auth/signin', query: { callback: '/mypage' }})

        try {
          await axios.post(`/api/auth/login`, {
            username: account,
          });
          const userInfo = await UserAPI.getMyInfo();
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
            setUserInfoState({
              ...userInfo,
              isSignIn: true,
            });

            router.push('/mypage?edit=true', '/mypage');
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
    handleLogin();
  }, [isSignIn]);

  return (
    <Layout>
      <TitleBar title="My Page" backUrl={`/`} />
      <AboutMe />
    </Layout>
  );
};

export default MyPage;
