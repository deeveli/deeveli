'use client';

import {
  Copyright,
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { siteConfig } from '@/data/app';
import { footerNavigationData } from '@/data/app/globals';
import { cn } from '@/lib/utils';

const Footer = () => {
  const router = usePathname();
  const isContactPage = router === '/contact';

  return (
    <>
      {!isContactPage && (
        <footer
          className={cn(
            'relative z-10 w-full  bg-slate-950 px-40 py-4',
            'dark:bg-slate-950',
            'sm:px-6',
            'md:px-10',
            'lg:px-40',
            'xl:px-80',
            'sm:py-5',
            'md:py-12',
            'lg:py-16',
            'xl:py-20'
          )}
        >
          <div
            className={cn(
              'flex flex-wrap items-start justify-between text-slate-50'
            )}
          >
            <div className={cn('sm:w-full md:w-1/2')}>
              <h2
                className={cn(
                  'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text py-4 text-left tracking-tight text-transparent drop-shadow-sm',
                  'dark:from-gray-100 dark:to-gray-800',
                  'md:text-6xl md:leading-tight'
                )}
              >
                <div
                  className={cn(
                    'w-full text-4xl font-bold leading-normal',
                    'sm:text-5xl',
                    'md:text-6xl',
                    'lg:text-7xl',
                    'xl:text-9xl'
                  )}
                >
                  <Balancer>Let's Talk</Balancer>
                </div>
              </h2>
              <p
                className={cn(
                  'text-3xlunderline -mt-8 mb-4 font-normal leading-snug underline-offset-8',
                  'sm:-mt-4 md:ml-1 xl:ml-2',
                  'sm:text-base',
                  'md:text-lg',
                  'lg:text-xl',
                  'xl:text-2xl'
                )}
              >
                <Link href={'mailto:hey@hush.com'}>
                  <Balancer>hey@hush.com</Balancer>
                </Link>
              </p>
            </div>
            <div className={cn('w-1/2 md:pl-32 lg:pl-60 xl:pl-96 ')}>
              <div className={cn('py-5')}>
                {footerNavigationData.map((page, index) => (
                  <LinkPick key={index} {...page} />
                ))}
              </div>
            </div>
          </div>
          <div className={cn('pt-5  text-slate-50 md:ml-1 xl:ml-2')}>
            <div>
              <p
                className={cn(
                  'flex flex-wrap font-normal leading-loose underline underline-offset-4',
                  'sm:underline-offset-4 md:w-3/5 xl:w-full xl:underline-offset-8',
                  'sm:text-sm',
                  'md:text-base',
                  'lg:text-base',
                  'xl:text-xl'
                )}
              >
                <Link href={'https://maps.app.goo.gl/Rx3wYE7k8vJMtTAU8'}>
                  <Balancer>East Legon, GA, Ghana 00233</Balancer>
                </Link>
              </p>
            </div>
            <div
              className={cn(
                'mx-auto my-8 flex w-full flex-wrap text-slate-500 underline underline-offset-8',
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
          </div>
          <div
            className={cn(
              'flex flex-col items-center justify-between gap-4',
              'md:h-20 md:py-0',
              'md:flex-row'
            )}
          >
            <div
              className={cn(
                'flex w-full justify-between gap-8',
                'sm:flex-col md:flex-row '
              )}
            >
              <p
                className={cn(
                  'text-left text-sm leading-loose text-muted-foreground',
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
                rel="noreferrer"
                className={cn(
                  'flex flex-row items-center',
                  'text-left text-xs leading-loose text-muted-foreground',
                  'sm:text-xs',
                  'md:text-sm',
                  'lg:text-sm',
                  'xl:text-lg',
                  'hover:underline hover:underline-offset-4',
                  'sm:mr-0 md:mr-32 lg:mr-40 xl:mr-72'
                )}
              >
                <Copyright className={cn('mr-1')} />
                2024, Hush UX, LLC
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

interface LinkPickProps {
  page: string;
  href: string;
}

const LinkPick: React.FC<LinkPickProps> = ({ page, href }) => (
  <p
    className={cn(
      'mb-3 text-3xl font-normal leading-snug underline underline-offset-8',
      'sm:text-sm',
      'md:text-base',
      'lg:text-lg',
      'xl:text-2xl'
    )}
  >
    <Link href={href}>
      <Balancer>{page}</Balancer>
    </Link>
  </p>
);
