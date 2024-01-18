import React from 'react';
import UsersList from './components/users-list/UsersList';
import AddUser from './add/page';
import { fetchUsers } from '@/lib/data/userData';
import UserItem from './components/user-item/UserItem';
import SearchDashboard from '../components/ui/search-dashboard/SearchDashboard';
import Pagination from '@/components/pagination/Pagination';

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
  },
];

interface UsersProps {
  searchParams: {
    q?: string;
    page?: string;
  };
}


const Users = async ({ searchParams }: UsersProps) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';

  const { count, users } = await fetchUsers(q, page);

  /* console.log(users); */
  return (
    <div className='h-full bg-gray-800 relative'>
     
      <div className='pl-20 pt-20 flex '>
        <SearchDashboard placeholder='search for users' /> 
      <button
      className='group mx-3 px-2 rounded-md text-sm font-medium uppercase text-primary-500 hover:text-white hover:bg-zinc-800 dark:hover:text-primary-400 font-alt transition-all duration-300 border-[1px] border-[#888]'
    >
      Elever år 1
      <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ff4040] opacity-50'></span>
    </button>
      </div>
      <UsersList>
        {users ? (
          users.map(
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
          )
        ) : (
          <div>No users found</div>
        )}
      </UsersList>
      {/*  <AddUser /> */}
      <div>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Users;
