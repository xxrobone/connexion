'use client';
import React from 'react';
import SearchDashboard from '../search-dashboard/SearchDashboard';

const DashboardHeader = () => {
  return (
    <header className='w-full shadow-md pl-0 pr-4 sm:pr-10 bg-black font-[sans-serif] h-[60px] flex justify-between'>
      <div className='flex items-center justify-between gap-5 relative w-full'>
    
          <SearchDashboard />
          
              
        </div>
    </header>
  );
};

export default DashboardHeader;
