import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import Layout from '@components/Layout';
import { GradientText } from '@components/Text/GradientText';
import TitleBar from '@components/eventpage/Subevent/TitleBar';
import { AboutMe } from '@components/mypage/AboutMe';
import { Button } from '@components/Button';

const MyPage: React.FC = () => {
  const saveSettings = () => {
    alert('saved!');
  };

  return (
    <Layout>
      <TitleBar title="My Page" backUrl={`/`} />
      <AboutMe />
      <Button onClick={saveSettings}>Save Settings</Button>
    </Layout>
  );
};

export default MyPage;
