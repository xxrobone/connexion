import React from 'react';
import UsersList from './components/users-list/UsersList';
import AddUser from './add/page';

const Users = () => {
  return (
    <div className='h-full bg-gray-800 relative'>
      <UsersList />
     {/*  <AddUser /> */}
    </div>
  );
};

export default Users;
