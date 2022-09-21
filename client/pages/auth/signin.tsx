import React from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import { LoginButton } from '@/components/pages/auth/LoginButton';

const Signin: React.FC = () => {
  const router = useRouter();
  const { callback } = router.query;
  console.log(callback);
  
  const redirectCallback = () => {
    console.log("redirectCallback");
    router.push(callback as string); 
  }

  return (
    <Layout>
      <h1>Sign In</h1>
      <div className="my-10 h-40 flex justify-center items-center">
        <LoginButton onSuccess={()=>redirectCallback()}/>
      </div>
    </Layout>
  );
};

export default Signin;
