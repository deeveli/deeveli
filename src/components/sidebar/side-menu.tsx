'use client';

import { MenuIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { NavigationMenuSideBar } from './navigation-menu';

const SideMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="size-8 rounded-full bg-accent p-0 shadow-sm"
          >
            <MenuIcon className={cn('h-4 w-4')} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <NavigationMenuSideBar />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SideMenu;
