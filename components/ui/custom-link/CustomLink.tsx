import Link from 'next/link';
import cn from 'clsx';
import { ComponentProps } from 'react';

// styling this link later, this is just to hurry up the process

const CustomLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        props.className,
        `lg:hover:text-[#f8f8f8] text-[#f8f8f8] max-lg:text-white block font-semibold text-[15px]`
      )}
      href={props.href}
    >
      {props.title}
      {props.children}
    </Link>
  );
};

export default CustomLink;