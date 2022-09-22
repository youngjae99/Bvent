import React, { ReactNode } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Sidebar } from '@/components/sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen max-w-mobile flex flex-col pt-2 bg-black mx-auto">
      <Header />
      <Sidebar />
      <div className="px-5 pt-16 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
