import React from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
import Input from '@/components/ui/input-field/Input';

const SearchDashboard = () => {
  const handleSearch = () => {
    console.log('search');
  };
  return (
    <div className='w-fit h-[32px] bg-black rounded-none flex items-center px-2 border-[1px] border-[#888]'>
      <LiaSearchSolid className='text-[#888] w-5 h-5' />
      <Input
        htmlFor='search2'
        type='text'
        id='search2'
        labelValue='Search'
        name='search2'
        handleForm={handleSearch}
      />
    </div>
  );
};

export default SearchDashboard;
