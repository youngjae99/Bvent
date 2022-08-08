import React from 'react';

import { Container, Main, Footer, Cards, Logo } from '@components';
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
