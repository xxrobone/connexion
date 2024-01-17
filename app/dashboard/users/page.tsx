import React from 'react';
import UsersList from './components/users-list/UsersList';
import AddUser from './add/page';
import { fetchUsers } from '@/lib/data/userData';
import UserItem from './components/user-item/UserItem';

const mockData = [
  {
    profileImg: '/images/rob.png',
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: '2022-01-15T08:00:00Z',
    role: 'Teacher',
  },
  {
    profileImg: '/images/rob.png',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    createdAt: '2022-02-20T10:30:00Z',
    role: 'Student',
  },
  {
    profileImg: '/images/rob.png',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    createdAt: '2022-03-10T14:45:00Z',
    role: 'Student',
    action: false,
  },
  {
    profileImg: '/images/rob.png',
    name: 'Alice Williams',
    email: 'alice.williams@example.com',
    createdAt: '2022-04-05T12:15:00Z',
    role: 'Teacher',
  },
  {
    profileImg: '/images/rob.png',
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    createdAt: '2022-05-18T09:20:00Z',
    role: 'Student',
  },
  {
    profileImg: '/images/rob.png',
    name: 'Eva Davis',
    email: 'eva.davis@example.com',
    createdAt: '2022-06-22T11:00:00Z',
    role: 'Teacher',
    action: false,
  },
];

const Users = async () => {
  const users = await fetchUsers();

  console.log(users);
  return (
    <div className='h-full bg-gray-800 relative'>
      <UsersList>
        {users.map(
          ({ username, email, createdAt, role, profileImg }, index) => (
            <UserItem
              key={index}
              username={username}
              email={email}
              createdAt={createdAt}
              role={role}
              profileImg={profileImg}
            />
          ),
        )}
      </UsersList>
      {/*  <AddUser /> */}
    </div>
  );
};

export default Users;
