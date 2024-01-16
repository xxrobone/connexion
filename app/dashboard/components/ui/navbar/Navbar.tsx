'use client'
import { usePathname } from 'next/navigation'

import React from 'react'

const Navbar = () => {
    const pathname = usePathname()
  return (
      <nav className='flex h-[60px]'>
          <div className='px-2 text-sm font-thin text-[#888] capitalize'>/{pathname.split("/").pop()}</div>
          <ul  id='collapseMenu'
          className='lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
              
          </ul>
    </nav>
  )
}

export default Navbar