import React from 'react';

import { Container, Header, Main, Footer, Cards, Logo } from '@components';
import { GradientText } from '@components/text/GradientText';

const Past: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>
          <GradientText>Past Events</GradientText>
        </h1>
      </div>
    </Container>
  );
};

export default Past;
