import React from 'react';

import Modal from '@/components/modal';
import Layout from '@/components/Layout';
import { Main } from '@/components/pages/main/main';
import { GradientText } from '@/components/Text/GradientText';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';
import CurrentTime from '@/components/Time';

const Home: React.FC = () => {
  const [timezone] = useRecoilState(timezoneState);
  return (
    <Layout>
      <div className="flex flex-col justify-center" style={{ height: '70vh' }}>
        <div className="ml-0 md:ml-10">
          <h1 className="text-6xl	max-w-lg">
            Discover all <GradientText>Blockchain Events</GradientText> from here
          </h1>
        </div>
        {/* <p className="text-white mt-3 text-xl">You are in {timezone}</p> */}
        {/* <CurrentTime /> */}
      </div>
      <Main />
      {/* <Modal /> */}
    </Layout>
  );
};

export default Home;
