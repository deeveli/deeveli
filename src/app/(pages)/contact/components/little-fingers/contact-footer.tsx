import {
  Copyright,
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { siteConfig } from '@/data/app';
import { cn } from '@/lib/utils';

export const ContactFooter = async () => {
  return (
    <div
      className={cn(
        'bg-slate-950',
        'flex w-full flex-col justify-start space-y-6 px-40',
        'sm:px-6',
        'md:px-10',
        'lg:px-40',
        'xl:px-80',
        'sm:py-10',
        'md:py-16',
        'lg:py-20',
        'xl:py-30'
      )}
    >
      <div
        className={cn(
          'flex w-full flex-col items-center justify-between gap-y-5 md:flex-row'
        )}
      >
        <div
          className={cn(
            'flex w-full flex-wrap text-slate-500 underline sm:underline-offset-4 md:w-5/12 md:underline-offset-8',
            'justify-start',
            'sm:gap-5 sm:text-xs',
            'md:gap-5 md:text-sm',
            'lg:text-sm',
            'xl:text-xl'
          )}
        >
          <Link href={siteConfig.author.dribbble}>
            <Dribbble />
          </Link>
          <Link href={siteConfig.author.behance}>
            <Dribbble />
          </Link>
          <Link href={siteConfig.author.linkedIn}>
            <Linkedin />
          </Link>
          <Link href={siteConfig.author.twitterURL}>
            <Twitter />
          </Link>
          <Link href={siteConfig.author.instagram}>
            <Instagram />
          </Link>
          <Link href={siteConfig.author.facebook}>
            <Facebook />
          </Link>
        </div>
        <div
          className={cn(
            'flex w-full text-slate-500 underline sm:underline-offset-0 md:w-3/12 md:underline-offset-2',
            'md:justify-end',
            'sm:text-xs',
            'md:text-sm',
            'lg:text-sm',
            'xl:text-xl'
          )}
        >
          <Link href={'https://maps.app.goo.gl/Rx3wYE7k8vJMtTAU8'}>
            <Balancer>East Legon, GA, Ghana 00233</Balancer>
          </Link>
        </div>
      </div>

      <div
        className={cn(
          'flex w-full flex-col items-center justify-between gap-y-5 md:flex-row'
        )}
      >
        <p
          className={cn(
            'w-full text-sm leading-loose text-muted-foreground md:w-5/12',
            'sm:text-xs',
            'md:text-sm',
            'lg:text-sm',
            'xl:text-lg'
          )}
        >
          Developed by{' '}
          <Link
            href={siteConfig.author.url}
            target="_blank"
            rel="noreferrer"
            className={cn('font-medium underline underline-offset-4')}
          >
            {siteConfig.author.name}
          </Link>
        </p>
        <a
          target="_blank"
          rel="https://www.hushux.com"
          className={cn(
            'flex w-full text-slate-500 underline sm:underline-offset-0 md:w-3/12 md:underline-offset-2',
            'md:justify-end',
            'sm:text-xs',
            'md:text-sm',
            'lg:text-sm',
            'xl:text-xl',
            'flex w-full flex-row items-center md:w-3/12',
            'hover:underline hover:underline-offset-4'
          )}
        >
          <Copyright className={cn('mr-1')} />
          2024, Hush UX, LLC
        </a>
      </div>
    </div>
  );
};
