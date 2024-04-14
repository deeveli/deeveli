'use client'

import Link from 'next/link'

import { siteConfig } from '@/data/app'
import { useMediaQuery, useOnScroll } from '@/hooks'
import { cn } from '@/lib/utils'

import { NavigationMenuBar } from '../navigation-menu'
import SideMenu from '../sidebar/side-menu'
import ThemeSwitch from '../theme-switch'

const Header = () => {
  const isScrolled = useOnScroll()
  const isMobileOrTablet = useMediaQuery('(max-width: 640px)')

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full bg-transparent px-40',
        'sm:px-6',
        'md:px-10',
        'lg:px-40',
        'xl:px-80',
        'sm:h-16',
        'md:h-16',
        'lg:h-16',
        'xl:h-20',
        isScrolled
          ? 'shadow-sm backdrop-blur-[10px] duration-300 ease-in-out'
          : '',
      )}
    >
      {isMobileOrTablet ? (
        <div className={cn('flex h-full items-center justify-between')}>
          <Link
            href="/"
            className={cn(
              'font-bold',
              'sm:text-2xl',
              'md:text-3xl',
              'lg:text-4xl',
              'xl:text-9xl',
            )}
          >
            {siteConfig.name}
          </Link>
          <div className={cn('flex items-center')}>
            <SideMenu />
            <div className="ml-5">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      ) : (
        <div className={cn('flex h-full items-center justify-between')}>
          <Link
            href="/"
            className={cn(
              'font-bold',
              'sm:text-2xl',
              'md:text-2xl',
              'lg:text-2xl',
              'xl:text-5xl',
            )}
          >
            {siteConfig.name}
          </Link>
          <div className={cn('flex items-center gap-5')}>
            <NavigationMenuBar />
            <ThemeSwitch />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
