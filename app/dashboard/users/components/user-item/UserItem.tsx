import Avatar from '@/components/avatar/Avatar';
import NextImage from '@/components/image-component/ImageComponent';
import { Button } from '@/components/ui/button/Button';
import CustomLink from '@/components/ui/custom-link/CustomLink';
import React from 'react';
import { VscTrash } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';

interface UserItemProps {
  name: string;
  email: string;
  createdAt: Date;
  role: string;
  action: boolean;
  profileImg: string;
}

const UserItem = ({
  name,
  email,
  createdAt,
  role,
  action,
  profileImg,
}: UserItemProps) => {
  const formattedDate = createdAt.toLocaleString();
  return (
    <tr className='bg-white dark:bg-gray-800 border-b-[1px] border-[#888] flex items-center'>
      <th
        scope='row'
        className='flex items-center gap-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:bg-gray-400 cursor-pointer'
      >
        {profileImg ? <Avatar profileImg={profileImg} /> : <CgProfile />}

        {name}
      </th>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>{email}</td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>
        {formattedDate}
      </td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>{role}</td>
      <td className='px-6 py-4 cursor-pointer flex'>
        <CustomLink href='' title='view' />
        <Button tone='danger' size='sm'>
          <VscTrash className='text-black' />
        </Button>
      </td>
    </tr>
  );
};

export default UserItem;

/* 

for use on the attendace lists

 <tr className='bg-white dark:bg-gray-800'>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:bg-gray-400 cursor-pointer'
      >
        {name}
      </th>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>
        {classYear}
      </td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>{a}</td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>{b}</td>
      {/* This will be used in the attedance lists
       <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'> <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" /></td>
     </tr>

*/
