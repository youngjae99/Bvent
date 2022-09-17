import React from 'react';

import Modal from '@/components/modal';
import Layout from '@/components/Layout';
import { Main } from '@/components/pages/main/main';
import { GradientText } from '@/components/Text/GradientText';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';
import CurrentTime from '@/components/Time';
import Tabs from '@/components/pages/main/Tabs';
import HeroSection from '@/components/pages/main/HeroSection';
import LogoSection from '@/components/pages/main/LogoSection';
import RecentReviewsSection from '@/components/pages/main/RecentReviewsSection';

const Home: React.FC = () => {
  // const [timezone] = useRecoilState(timezoneState);
  return (
    <Layout>
      <HeroSection />
      <LogoSection />
      <h1>Events</h1>
      <Tabs />
      <h1>Recent Reviews</h1>
      <RecentReviewsSection />
    </Layout>
  );
};

export default Home;
