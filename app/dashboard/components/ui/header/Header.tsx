'use client';
import React from 'react';
import CustomLink from '@/components/ui/custom-link/CustomLink';
import { Button } from '@/components/ui/button/Button';
import Navbar from '../navbar/Navbar';
import SearchBar from '@/components/ui/search-bar/SearchBar';

const Header = () => {
  return (
    <header className='w-full shadow-md pl-0 pr-4 sm:pr-10 bg-black font-[sans-serif] h-[60px] flex justify-between'>
      <CustomLink
        href='/'
        className='font-bold bg-[red] h-full w-fit px-8 grid place-content-center text-white tracking-wide'
      >
        Danscenter Fryshuset
      </CustomLink>
      <div className='flex items-center justify-between gap-5 relative w-full'>
        <div className='flex lg:order-1 max-sm:ml-auto'>
          <SearchBar />
          <div className='relative'>
            <Button size='md' impact='bordered' shape='rounded' className='font-thin'>
              Login
            </Button>
            <Button size='md' impact='bordered' shape='rounded' className='font-thin'>
              SignUp
            </Button>
          </div>
          {/* Hamburger menu -  */}
          <button id='toggle' className='lg:hidden ml-7'>
            <svg
              className='w-7 h-7'
              fill='#000'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
