import React from 'react';
import { Button } from '../button/Button';
import Link from 'next/link';
import CustomLink from '../custom-link/CustomLink';

const Header = () => {
  return (
    <header className='w-screen shadow-md pl-0 pr-4 sm:pr-10 bg-black font-[sans-serif] h-[80px] flex justify-between'>
      <CustomLink  href='/' className='font-bold bg-[red] h-full w-fit px-8 grid place-content-center text-white'>Danscenter Fryshuset</CustomLink>
      <div className='flex flex-wrap items-center justify-between gap-5 relative'>
        <div className='flex lg:order-1 max-sm:ml-auto'>
          <Button size='md' impact='bordered' shape='pill'>
            Login
          </Button>
          <Button size='md' impact='bordered' shape='pill'>
            SignUp
          </Button>
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
        <ul
          id='collapseMenu'
          className='lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'
        >
          <CustomLink href='#' title='Home'></CustomLink>
          <CustomLink href='#' title='Skapa inlägg'></CustomLink>
          <CustomLink href='#' title='År 1'></CustomLink>
          <CustomLink href='#' title='År 2'></CustomLink>
          <CustomLink href='#' title='Lärare'></CustomLink>
          <CustomLink href='#' title='Lägg till +'></CustomLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
