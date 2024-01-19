import React from 'react'
import PostsList from '@/components/posts/PostsList'
import PostItem from '@/components/posts/PostItem'

// mockData will be updated to data from db

export type Post = {
  id: number;
  date: string;
  title: string;
  tags: string[];
  body: string;
  author: {
    _id: string;
    username: string
}
};



const Dashboard = () => {
  return (
    <div className="relative flex min-h-screen h-full w-full flex-col items-center justify-between red-gradient">
      <h1>Admin dashboard!</h1>
      {/* <PostsList>
        {posts.map(({ id, date, title, tags, body }) => (
          <PostItem
            key={id}
            title={title}
            date={date}
            body={body}
            tags={tags}
            id={id.toString()}
          />
        ))}
      </PostsList> */}
    </div>
  )
}

export default Dashboard