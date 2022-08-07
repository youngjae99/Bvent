import { Sidebar } from '@components/sidebar';

export const Container = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{backgroundImage:"linear-gradient(90deg,#01152a,#000a17)"}}>
      <Sidebar />
      {children}
    </div>
  );
};
