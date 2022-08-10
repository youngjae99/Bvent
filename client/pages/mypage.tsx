import React from 'react';

import { Container } from '@components/container';
import { GradientText } from '@components/text/GradientText';

const MyPage: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>
          <GradientText>My Page</GradientText>
        </h1>
      </div>
    </Container>
  );
};

export default MyPage;
