import React from 'react';

import { Container, Header, Main, Footer, Cards, Logo } from '@components';
import { GradientText } from '@components/text/GradientText';

const Now: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>
          <GradientText>Upcoming Events</GradientText>
        </h1>
      </div>
    </Container>
  );
};

export default Now;
