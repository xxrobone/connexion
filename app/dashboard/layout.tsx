import type { Metadata } from 'next';
import Sidebar from './components/ui/sidebar/Sidebar';
import Header from '@/app/dashboard/components/ui/header/Header';

export const metadata: Metadata = {
  title: 'Danscenter | Dashboard',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <Header />
      <div className='flex'>
        <Sidebar />
        {children}
      </div>
    </body>
  );
};

export default Layout;
