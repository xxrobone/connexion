import React from 'react';
import CustomLink from '@/components/ui/custom-link/CustomLink';

const Sidebar = () => {
  return (
    <div className='relative w-[7.875rem] h-full bg-black shadow flex-col items-center justify-center pt-[20vh] border-r-4 border-[red]'>
      <CustomLink href='/dashboard/create-info' title='Skapa nyhet'></CustomLink>
      <CustomLink href='/dashboard/year1' title='År1'></CustomLink>
      <CustomLink href='/dashboard/year2' title='År2'></CustomLink>
      <CustomLink href='/dashboard/teachers' title='Lärare'></CustomLink>
      <CustomLink href='/dashboard/users' title='Användare'></CustomLink>
      <CustomLink href='/dashboard/add-user' title='lägg till +'></CustomLink>
      <CustomLink href='/dashboard/settings'></CustomLink>
    </div>
  );
};

export default Sidebar;
