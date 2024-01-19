import type { Metadata } from 'next';
import Sidebar from './components/ui/sidebar/Sidebar';
import Header from '@/app/dashboard/components/ui/header/Header';

export const metadata: Metadata = {
  title: 'Danscenter | Dashboard',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex w-screen min-h-screen'>
      <div className='fixed left-0 top-0 min-w-fit w-[200px] h-screen z-10'>
        <Sidebar />
      </div>
      <div className='flex flex-col relative w-full ml-[200px]'>
        <Header />
        {children}
      </div>
    </main>
  );
};

export default Layout;
