import React from 'react';

import { Container } from '@components/container';
import { GradientText } from '@components/text/GradientText';
import TitleBar from '@components/eventPage/subevent/TitleBar';

const MyPage: React.FC = () => {
  return (
    <Container>
      <div>
        <TitleBar title="My Page" backUrl={`/`} />
      </div>
      <img src="/images/my-page.png"></img>
    </Container>
  );
};

export default MyPage;
