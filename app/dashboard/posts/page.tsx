import React from 'react';
import PostsList from '@/components/posts/PostsList';
import PostItem from '@/components/posts/PostItem';
import CustomLink from '@/components/ui/custom-link/CustomLink';
import { fetchPosts } from '@/lib/data/postLoader';
import Pagination from '@/components/pagination/Pagination';

// mockData will be updated to data from db

export type PostTypes = {
  id: string;
  date: string;
  title: string;
  tags?: string[];
  body: string;
  author: {
    _id: string;
    username: string
}

  searchParams: {
    q?: string;
    page?: string;
  };
};

const Posts = async ({ searchParams }: PostTypes) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';

  const { count, posts } = await fetchPosts(q, page);

  console.log('loggin all posts:', posts)
  return (
    <div className='relative flex min-h-screen h-full w-full flex-col items-center mt-20 red-gradient'>
      <h1>Post Page!</h1>
      <nav>
        <CustomLink href='/dashboard/posts/add' />
      </nav>
      <PostsList>
        {posts.map(({ id, date, title, tags, body, author }) => (
          <PostItem
            key={id}
            title={title}
            date={date}
            body={body}
            tags={tags}
            id={id.toString()}
            author={author}
          />
        ))}
      </PostsList>
      <Pagination count={count} />
    </div>
  );
};

export default Posts;
