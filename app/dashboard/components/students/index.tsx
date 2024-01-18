import React from 'react';
import UsersList from '../../users/components/users-list/UsersList';
import { getStudents } from '@/lib/data/userData';
import UserItem from '../../users/components/user-item/UserItem';
/* import SearchDashboard from '../components/ui/search-dashboard/SearchDashboard'; */
import Pagination from '@/components/pagination/Pagination';
/* import { Button } from '@/components/ui/button/Button'; */


interface StudentProps {
  searchParams: {
    page?: string;
  };
}

const Students = async ({ searchParams }: StudentProps) => {
  const page = searchParams?.page || '1';

  const { count, students } = await getStudents(page);

  console.log(students);
  return (
    <div className='h-full bg-gray-800 relative'>
      <UsersList>
        {students ? (
          students.map(
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

export default Students;
