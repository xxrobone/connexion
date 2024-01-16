import type { Metadata } from 'next';
import Sidebar from './components/ui/sidebar/Sidebar';
import Header from '@/app/dashboard/components/ui/header/Header';
import DashboardHeader from './components/ui/header/DashboardHeader';

export const metadata: Metadata = {
  title: 'Danscenter | Dashboard',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex w-screen'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='flex flex-col relative w-full'>
        <Header />
        <DashboardHeader />
        {children}
      </div>
    </main>
  );
};

export default Layout;
