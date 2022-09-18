import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';
import TitleBar from '@/components/pages/subevent/TitleBar';
import { AboutMe } from '@/components/mypage/AboutMe';
import Button from '@/components/Button';

const MyPage: React.FC = () => {
  const saveSettings = () => {
    alert('saved!');
  };

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
      <Button onClick={saveSettings}>Save Settings</Button>
    </Layout>
  );
};

export default MyPage;
