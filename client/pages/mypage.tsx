import React from 'react';
import Layout from '@/components/Layout';
import TitleBar from '@/components/eventpage/Subevent/TitleBar';
import { AboutMe } from '@/components/mypage/AboutMe';
import Button from '@/components/button';

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
