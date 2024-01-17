import React from 'react';

interface PostItemProps {
    date: string;
    title: string;
    tags: string[];
    desc: string;
  }

  const PostItem: React.FC<PostItemProps> = ({ date, title, tags, desc }) => {
  return (
    <div className='py-5'>
      <article className='flex flex-col space-y-2 xl:space-y-0'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
            <time dateTime='2023-08-05T00:00:00.000Z'>{date}</time>
          </dd>
        </dl>
        <div className='space-y-3'>
          <div>
            <h2 className='text-2xl font-bold leading-8 tracking-tight'>
              <a
                className='text-gray-900 dark:text-gray-100'
                href='/blog/release-of-tailwind-nextjs-starter-blog-v2.0'
              >
               {title}
              </a>
            </h2>
            <div className='flex flex-wrap'>
            {tags.map((tag, index) => (
                <a
                  key={index}
                  className='mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                  href={`/tags/${tag.toLowerCase()}`}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
          <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                      Tyvärr så är Bettan borta och vi blir tvugna att ta in vikarie 
                      Vikarie blir LiseLotte som kommer köra modern contemporary ballett med pom poms
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostItem;
