import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";
import Input from '../input-field/Input';

const SearchBar = () => {

  const handleSearch = () => {
    console.log('search')
  }
  return (
    <div className="w-fit h-[32px] bg-white rounded-[30px] flex items-center px-2"><LiaSearchSolid className='text-[#888] w-5 h-5'/><Input
      htmlFor='search'
      type='text'
      id='search'
      labelValue='Search'
      name='search'
      handleForm={handleSearch}
    /></div>
  )
}

export default SearchBar