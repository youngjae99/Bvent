import React from 'react';

import { Container, Header, Main, Footer, Cards, Logo } from '@components';
import { GradientText } from '@components/text/GradientText';

const MyPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <h1>
          <GradientText>My Page</GradientText>
        </h1>
      </div>
    </Container>
  );
};

export default MyPage;
