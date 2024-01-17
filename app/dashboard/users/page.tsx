import React from 'react';
import UsersList from './components/users-list/UsersList';
import AddUser from './add/page';
import { fetchUsers } from '@/lib/data/userData';

const Users = async () => {

  const users = await fetchUsers();

  console.log(users)
  return (
    <div className='h-full bg-gray-800 relative'>
      {/* <UsersList /> */}
     {/*  <AddUser /> */}
    </div>
  );
};

export default Users;
