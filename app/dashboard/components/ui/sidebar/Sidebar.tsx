import React from 'react';
import CustomLink from '@/components/ui/custom-link/CustomLink';
import { MdDashboard, MdSupervisedUserCircle, MdPersonAddAlt } from 'react-icons/md'
import { PiStudent } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa6";

interface SidebarMenuItem {
  href: string;
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: SidebarMenuItem[] = [
  {
  href: '/dashboard',
  title: 'Dashboard',
  icon: <MdDashboard />
  },
  {
    href: '/Users',
    title: 'Users',
    icon: <MdSupervisedUserCircle />,
  },
  {
    href: '/year1',
    title: 'År1',
    icon: <PiStudent  />,
  },
  {
    href: '/year2',
    title: 'År2',
    icon: <PiStudent  />,
  },
  {
    href: '/teachers',
    title: 'Lärare',
    icon: <FaUserTie />,
  },
  {
    href: '/add-user',
    title: 'Lägg till',
    icon: <MdPersonAddAlt />,
  },
]

const Sidebar = () => {
  return (
    <div className='relative w-fit h-full bg-black shadow flex-col items-center justify-center pt-[20vh] px-2 border-r-4 border-[red]'>
      {SidebarMenuItems.map(({ href, title, icon }) => (
        <CustomLink key={title} href={href} title={title}>{icon}</CustomLink>
      ) )}
    </div>
  );
};

export default Sidebar;