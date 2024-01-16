import React from 'react';
import UsersList from './components/users-list/UsersList';

const Users = () => {
  return (
    <div className='h-screen bg-gray-800 relative'>
      <UsersList />
    </div>
  );
};

export default Users;
