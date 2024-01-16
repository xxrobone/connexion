import React from 'react';
import UserItem from '../user-item/UserItem';

const mockData = [
  {
    profileImg: '/images/rob12.png',
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: '2022-01-15T08:00:00Z',
    role: 'Teacher',
    action: true,
  },
  {
    profileImg: '/images/rob12.png',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    createdAt: '2022-02-20T10:30:00Z',
    role: 'Student',
    action: true,
  },
  {
    profileImg: '/images/rob12.png',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    createdAt: '2022-03-10T14:45:00Z',
    role: 'Student',
    action: false,
  },
  {
    profileImg: '/images/rob12.png',
    name: 'Alice Williams',
    email: 'alice.williams@example.com',
    createdAt: '2022-04-05T12:15:00Z',
    role: 'Teacher',
    action: true,
  },
  {
    profileImg: '/images/rob12.png',
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    createdAt: '2022-05-18T09:20:00Z',
    role: 'Student',
    action: true,
  },
  {
    profileImg: '/images/rob12.png',
    name: 'Eva Davis',
    email: 'eva.davis@example.com',
    createdAt: '2022-06-22T11:00:00Z',
    role: 'Teacher',
    action: false,
  },
];

const UsersList = () => {
  return (
    <div className='relative overflow-x-auto h-full p-20'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Email
            </th>
            <th scope='col' className='px-6 py-3'>
              Created at
            </th>
            <th scope='col' className='px-6 py-3'>
              Role
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {mockData.map(
            ({ name, email, createdAt, role, action, profileImg }) => (
              <UserItem
                key={name}
                name={name}
                email={email}
                createdAt={createdAt}
                action={action}
                role={role}
                profileImg={profileImg}
              />
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
