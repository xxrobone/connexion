import React from 'react';
import { Button } from '../button/Button';

const Header = () => {
  return (
    <header className='w-screen shadow-md py-4 px-4 sm:px-10 bg-zinc-900 font-[sans-serif] h-[80px]'>
      <div className='flex flex-wrap items-center justify-between gap-5 relative'>
        <div className='flex lg:order-1 max-sm:ml-auto'>
          <Button size='md' impact='bordered' shape='pill'>Login</Button>
          <Button size='md' impact='bordered' shape='pill'>SignUp</Button>
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
          <li className='max-lg:border-b max-lg:bg-[#f8f8f8] max-lg:py-2 px-3 max-lg:rounded'>
            <a
              href='#'
              className='lg:hover:text-[#f8f8f8] text-[#f8f8f8] max-lg:text-white block font-semibold text-[15px]'
            >
              Home
            </a>
          </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
            <a
              href='#'
              className='lg:hover:text-[#f8f8f8] text-gray-500 block font-semibold text-[15px]'
            >
              Team
            </a>
          </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
            <a
              href='#'
              className='lg:hover:text-[#f8f8f8] text-gray-500 block font-semibold text-[15px]'
            >
              Feature
            </a>
          </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
            <a
              href='#'
              className='lg:hover:text-[#f8f8f8] text-gray-500 block font-semibold text-[15px]'
            >
              Blog
            </a>
          </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
            <a
              href='#'
              className='lg:hover:text-[#f8f8f8] text-gray-500 block font-semibold text-[15px]'
            >
              About
            </a>
          </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
            <a
              href='#'
              className='lg:hover:text-[#f8f8f8] text-gray-500 block font-semibold text-[15px]'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
