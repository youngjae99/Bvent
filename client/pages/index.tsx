import React from 'react';

import { Container, Header, Main, Footer, Cards, Logo } from '@components';
import { GradientText } from '@components/text/GradientText';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <h1>
          Blockchain For All <GradientText>Hello</GradientText>
        </h1>
        <Logo />
      </div>
      <Main />
    </Container>
  );
};

export default Home;
