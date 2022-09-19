import React from 'react';
import Layout from '@/components/Layout';
import { LoginButton } from '@/components/pages/auth/LoginButton';

const Signin: React.FC = () => {

  return (
    <Layout>
      <h1>SignIn</h1>
      <LoginButton/>
    </Layout>
  );
};

export default Signin;
