'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { LiaSearchSolid } from 'react-icons/lia';

// so trying out this way of doing the search using the next navigation methods

const SearchDashboard = ({ placeholder = 'search' }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: { target: HTMLInputElement }) => {
    const params = new URLSearchParams(searchParams);
    params.set('q', e.target.value);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className='w-fit h-[32px] bg-black rounded-none flex items-center px-2 border-[1px] border-[#888]'>
      <LiaSearchSolid className='text-[#888] w-5 h-5' />
      <input
        className='flex gap-2 border-none outline-none w-full focus:outline-none  placeholder-gray-500 border px-2'
        type='text'
        id='searchDashboard'
        name='searchDashboard'
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchDashboard;
