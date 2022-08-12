import Header from '@components/Header';
import { Sidebar } from '@components/sidebar';

const Layout = ({ children }) => {
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

export default Layout;