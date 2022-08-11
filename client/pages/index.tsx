import React from 'react';

import { Container } from '@components/container';
import { Main } from '@components/main';
import { GradientText } from '@components/text/GradientText';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@recoil/atoms/timezone';
import CurrentTime from '@components/currentTime';

const Home: React.FC = () => {
  const [timezone] = useRecoilState(timezoneState);
  return (
    <Container>
      <div className="flex flex-col justify-center" style={{ height: '100vh' }}>
        <h1>
          Check out all <GradientText>Blockchain Events</GradientText> in the
          world
        </h1>
        <p className="text-white mt-3 text-xl">You are in {timezone}</p>
        <CurrentTime />
      </div>

      <Main />
    </Container>
  );
};

export default Home;
