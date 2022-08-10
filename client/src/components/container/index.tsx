import { Header } from '@components/header';
import { Sidebar } from '@components/sidebar';

export const Container = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col pt-2"
      style={{ backgroundImage: 'linear-gradient(90deg,#01152a,#000a17)' }}
    >
      <Header />
      <Sidebar />
      <div className="px-5 pt-16">{children}</div>
    </div>
  );
};
