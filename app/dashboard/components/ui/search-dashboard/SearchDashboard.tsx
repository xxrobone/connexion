import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";
import Input from '@/components/ui/input-field/Input';

const SearchDashboard = () => {

  const handleSearch = () => {
    console.log('search')
  }
  return (
    <div className="w-fit h-[32px] bg-black rounded-[10px] flex items-center px-2 border-[1px] border-[#888]"><LiaSearchSolid className='text-[#888] w-5 h-5'/><Input
      htmlFor='search'
      type='text'
      id='search'
      labelValue='Search'
      name='search'
      handleForm={handleSearch}
    /></div>
  )
}

export default SearchDashboard