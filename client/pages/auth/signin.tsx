import React from 'react';
import Layout from '@/components/Layout';
import { LoginButton } from '@/components/pages/auth/LoginButton';

const Signin: React.FC = () => {
  return (
    <Layout>
      <h1>SignIn</h1>
      <div className="my-10">
        <LoginButton />
      </div>
    </Layout>
  );
};

export default Signin;
