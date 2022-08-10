import React from 'react';

import { Container } from '@components/container';
import { Main } from '@components/main';
import { GradientText } from '@components/text/GradientText';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>
        Check out all <GradientText>Blockchain Events</GradientText> in the
        world
      </h1>
      <Main />
    </Container>
  );
};

export default Home;
