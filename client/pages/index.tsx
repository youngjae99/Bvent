import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import Layout from '@/components/Layout';
import Tabs from '@/components/pages/main/Tabs';
import HeroSection from '@/components/pages/main/HeroSection';
import LogoSection from '@/components/pages/main/LogoSection';
import RecentReviewsSection from '@/components/pages/main/RecentReviewsSection';

const Home: React.FC = () => {
  const { active } = useWeb3React();

  return (
    <Layout>
      <DefaultSeo {...SEO} />
      {!active && <HeroSection />}
      <LogoSection />
      <div className="mb-10">
        <h1>Events</h1>
        <Tabs />
      </div>
      <div className="mb-10">
        <h1>Recent Reviews</h1>
        <RecentReviewsSection />
      </div>
    </Layout>
  );
};

export default Home;
