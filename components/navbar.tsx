'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import logo from '@/assets/img/logo.webp';
import { sections } from '@/data/sections';
import useScreenSize from '@/hooks/use-screen-resize';
import Link from 'next/link';
import { DropdownMenuRadio } from './drop-down-menu';

export function Navbar() {
  const { width } = useScreenSize();
  const getMenu = () => {
    if (!width) return null;
    return width < 640
      ? <DropdownMenuRadio />
      : sections.map((sect) => (
        <li key={sect.id}>
          <Link className={cn('no-underline hover:text-white')} href={sect.path}>{sect.name}</Link>
        </li>
      ));
  };
  return (
    <nav className={cn('bg-primary p-4 border-b-2 border-white/60 flex justify-center items-center')}>
      <div className="max-w-7xl w-screen flex justify-between">
        <div className={cn('relative mr-2')} style={{ width: '100px', height: '25px' }}>
          <Image src={logo} alt="Skill logo" fill sizes="100px" className={cn('rounded object-contain')} />
        </div>
        <ul className={cn('flex gap-x-4 text-white/80 font-semibold')}>
          { getMenu() }
        </ul>
      </div>
    </nav>
  );
}
