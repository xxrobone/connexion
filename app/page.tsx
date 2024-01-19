import PostItem from '@/components/posts/PostItem';
import PostsList from '@/components/posts/PostsList';
import Image from 'next/image';

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


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-20'>
      <h1 className='py-8 font-semibold text-lg'>clean</h1>
    </main>
  );
}
