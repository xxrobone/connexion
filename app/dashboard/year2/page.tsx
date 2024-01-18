import React from 'react';
import UsersList from '../users/components/users-list/UsersList';
import { getStudentsByClass } from '@/lib/data/userData';
import UserItem from '../users/components/user-item/UserItem';
import SearchDashboard from '../components/ui/search-dashboard/SearchDashboard';
import Pagination from '@/components/pagination/Pagination';
import { Button } from '@/components/ui/button/Button';
import { get } from 'http';

interface StudentProps {
  classId?: string;
  searchParams: {
    page?: string;
  };
}

const Year2 = async ({ searchParams }: StudentProps) => {
  const classId = 'DC2023';
  const page = searchParams?.page || '1';

  const { count, students } = await getStudentsByClass(classId, page);

  console.log(students);
  return (
    <div className='h-full bg-gray-800 relative'>
      <div className='pl-20 pt-20 flex '>
        <SearchDashboard placeholder='search for users' />
        <Button tone='alt' impact='bordered' shape='rounded'>
          Elever år 1
        </Button>
        <Button tone='alt' impact='bordered' shape='rounded'>
          Elever år 2
        </Button>
        <Button tone='alt' impact='bordered' shape='rounded'>
          Lärare
        </Button>
      </div>
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

export default Year2;
