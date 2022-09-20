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
        router.replace('/');

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
      <NextSeo
        title="MyPage"
        description="Bvent Mypage"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <TitleBar title="My Page" backUrl={`/`} />
      <AboutMe />
    </Layout>
  );
};

export default MyPage;
