import React from 'react'
import PostsList from '@/components/posts/PostsList'
import PostItem from '@/components/posts/PostItem'
import CustomLink from '@/components/ui/custom-link/CustomLink';

// mockData will be updated to data from db

export type Post = {
  id: number;
  date: string;
  title: string;
  tags: string[];
  desc: string;
};

const posts: Post[] = [
  {
    id: 1,
    date: '2024-01-17',
    title: 'Ändring i Dansschema',
    tags: ['Dansstil', 'Vikarie'],
    desc: 'Vi har en ändring i dansschemat. En vikarie kommer att hålla lektionen under den här tiden.',
  },
  {
    id: 2,
    date: '2024-01-18',
    title: 'Studiebesök på Webbutvecklingsföretag',
    tags: ['Webbutveckling', 'Studiebesök'],
    desc: 'Vi kommer att ha ett spännande studiebesök på ett lokalt företag som fokuserar på webbutveckling och Next.js.',
  },
  {
    id: 3,
    date: '2024-01-19',
    title: 'Vikarie med Redux-expertis',
    tags: ['Vikarie', 'Redux', 'React'],
    desc: 'Vi har en vikarie som är expert på Redux och kommer att guida oss genom principerna för tillståndshantering i React.',
  },
  {
    id: 4,
    date: '2024-01-20',
    title: 'Responsiv Design Workshop',
    tags: ['CSS', 'Responsiv Design', 'Workshop'],
    desc: 'Deltag i vår workshop där vi kommer att utforska olika tekniker för att skapa responsiv design i webbutveckling.',
  },
  {
    id: 5,
    date: '2024-01-21',
    title: 'Introduktion till GraphQL',
    tags: ['GraphQL', 'APIs', 'Webbutveckling'],
    desc: 'Lär dig fördelarna med att använda GraphQL för att skapa moderna och effektiva API:er.',
  },
  {
    id: 6,
    date: '2024-01-22',
    title: 'Jest Testing Workshop',
    tags: ['React', 'Testing', 'Workshop'],
    desc: 'Delta i vår workshop om att testa React-komponenter med Jest och andra relevanta verktyg.',
  },
  {
    id: 7,
    date: '2024-01-23',
    title: 'Säkerhetsåtgärder i React-applikationer',
    tags: ['React', 'Säkerhet', 'Workshop'],
    desc: 'Implementera säkra autentiseringsmekanismer och lär dig bästa praxis för säkerhet i React-applikationer.',
  },
  {
    id: 8,
    date: '2024-01-24',
    title: 'Server-Side Rendering med Next.js',
    tags: ['Next.js', 'React', 'Webbutveckling'],
    desc: 'Lär dig hur du implementerar server-side rendering i Next.js för förbättrad prestanda och användarupplevelse.',
  },
];

const Posts = () => {
  return (
    <div className="relative flex min-h-screen h-full w-full flex-col items-center justify-between red-gradient">
      <h1>Post Page!</h1>
      <nav><CustomLink href='/dashboard/posts/add' /></nav>
      <PostsList>
        {posts.map(({ id, date, title, tags, desc }) => (
          <PostItem
            key='id'
            title={title}
            date={date}
            desc={desc}
            tags={tags}
          />
        ))}
      </PostsList>
    </div>
  )
}

export default Posts