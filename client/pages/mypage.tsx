import React from 'react';

import Layout from '@components/Layout';
import { GradientText } from '@components/Text/GradientText';
import TitleBar from '@components/eventpage/Subevent/TitleBar';

const MyPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <TitleBar title="My Page" backUrl={`/`} />
      </div>
      <img src="/images/my-page.png"></img>
    </Layout>
  );
};

export default MyPage;
