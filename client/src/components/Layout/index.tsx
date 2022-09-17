import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/sidebar';

const Layout = ({ children }:any) => {
  return (
    <div
      className="relative min-h-screen max-w-mobile flex flex-col pt-2 bg-black mx-auto"
    >
      <Header />
      <Sidebar />
      <div className="px-5 pt-16">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;