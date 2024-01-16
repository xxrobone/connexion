import type { Metadata } from 'next';
import Sidebar from './components/ui/sidebar/Sidebar';
import Header from '@/app/dashboard/components/ui/header/Header';

export const metadata: Metadata = {
  title: 'Danscenter | Dashboard',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='flex flex-col relative'>
        <Header />
        {children}
      </div>
    </main>
  );
};

export default Layout;
