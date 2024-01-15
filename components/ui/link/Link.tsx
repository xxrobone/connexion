import Link from 'next/link';
import cn from 'clsx';
import { ComponentProps } from 'react';

// styling this link later, this is just to hurry up the process

const NextLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        props.className,
        `hover:underline font-medium text-black transition-all duration-200 rounded dark:text-gray-300`
      )}
      href={props.href}
      title={props.title}
    >
      {props.children}
    </Link>
  );
};

export default NextLink;