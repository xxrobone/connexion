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
        `group lg:hover:text-[#f8f8f8] text-[#f8f8f8] max-lg:text-white border-transparent block font-semibold text-[15px] px-4 py-2 transition-all duration-300 ease-in-out`
      )}
      href={props.href}
    >
     
      {props.title}
      {props.children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ff4040]"></span>
    </Link>
  );
};

export default CustomLink;

/* 
for a border rounded arounde the link
hover:border-[#fff] border-[1px] rounded-full
*/