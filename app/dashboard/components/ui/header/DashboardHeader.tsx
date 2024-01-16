'use client';
import React from 'react';
import SearchDashboard from '../search-dashboard/SearchDashboard';
import { Button } from '@/components/ui/button/Button';

const DashboardHeader = () => {
  return (
    <header className='w-full shadow-md pl-0 pr-4 sm:pr-10 bg-black font-[sans-serif] h-fit flex justify-between'>
      <div className='flex items-center justify-between gap-5 relative w-full'>    
          <SearchDashboard />          
            <Button tone='alt' shape='square'>Lägg till +</Button>
        </div>
    </header>
  );
};

export default DashboardHeader;
