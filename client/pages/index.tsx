import React from 'react';

import Layout from '@/components/Layout';
import { Main } from '@/components/main';
import { GradientText } from '@/components/Text/GradientText';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';
import CurrentTime from '@/components/Time';

const Home: React.FC = () => {
  const [timezone] = useRecoilState(timezoneState);
  return (
    <Layout>
      <div className="flex flex-col justify-center" style={{ height: '100vh' }}>
        <h1>
          Check out all <GradientText>Blockchain Events</GradientText> in the
          world
        </h1>
        <p className="text-white mt-3 text-xl">You are in {timezone}</p>
        <CurrentTime />
      </div>
      <Main />
    </Layout>
  );
};

export default Home;
