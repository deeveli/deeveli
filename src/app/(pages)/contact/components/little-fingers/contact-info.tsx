import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

export const ContactInfo = async () => {
  return (
    <div className={cn('flex flex-col justify-between')}>
      <div
        className={cn(
          'items-left justify-left flex h-full w-full flex-col pb-6'
        )}
      >
        <div className={cn('')}>
          <h1
            className={cn(
              'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400',
              'bg-clip-text text-left tracking-tight text-transparent drop-shadow-sm',
              'w-full text-7xl font-black leading-relaxed',
              'dark:from-gray-100 dark:to-gray-800',
              'sm:text-4xl',
              'md:text-7xl',
              'lg:text-8xl',
              'xl:text-9xl',
              'xl:mb-5 xl:mt-10'
            )}
          >
            <div className={cn('sm:leading-normal md:leading-relaxed')}>
              <Balancer>Let's Talk</Balancer>
            </div>
          </h1>
        </div>
        <div
          className={cn(
            'flex flex-wrap justify-start text-left leading-relaxed sm:w-full md:w-full lg:w-[80%] xl:w-[90%]',
            'sm:pb-5 md:pb-5 lg:pb-5 xl:pb-10',
            'sm:text-base',
            'md:text-xl',
            'lg:text-2xl',
            'xl:text-3xl'
          )}
        >
          <p className={cn('sm:leading-normal md:leading-relaxed')}>
            I'd love to learn more about you and what we can design and build
            together.
          </p>
        </div>
        <div className={cn('flex flex-row flex-wrap sm:gap-y-5 md:gap-y-10')}>
          <div
            className={cn(
              'flex flex-col',
              'w-full sm:underline-offset-4 md:w-5/12 xl:underline-offset-8'
            )}
          >
            <p
              className={cn(
                'text-slate-500 dark:text-slate-400 lg:mb-1',
                'sm:text-sm',
                'md:text-lg',
                'lg:text-xl',
                'xl:text-2xl'
              )}
            >
              Become a Client?
            </p>
            <Link
              href={'mailto:divine.e.abah@gmail.com'}
              className={cn(
                'underline sm:underline-offset-4 md:underline-offset-8',
                'sm:text-base',
                'md:text-xl',
                'lg:text-2xl',
                'xl:text-3xl'
              )}
            >
              hey@deeveli.com
            </Link>
          </div>
          <div className={cn('flex flex-col', 'w-full md:w-5/12')}>
            <p
              className={cn(
                'text-slate-500 dark:text-slate-400 lg:mb-1',
                'sm:text-sm',
                'md:text-lg',
                'lg:text-xl',
                'xl:text-2xl'
              )}
            >
              Need me in your team?
            </p>
            <Link
              href={'mailto:divine.e.abah@gmail.com'}
              className={cn(
                'underline sm:underline-offset-4 md:underline-offset-8',
                'sm:text-base',
                'md:text-xl',
                'lg:text-2xl',
                'xl:text-3xl'
              )}
            >
              partner@deeveli.com
            </Link>
          </div>
          <div className={cn('flex flex-col', 'w-full md:w-5/12')}>
            <p
              className={cn(
                'text-slate-500 dark:text-slate-400 lg:mb-1',
                'sm:text-sm',
                'md:text-lg',
                'lg:text-xl',
                'xl:text-2xl'
              )}
            >
              How about a Call or WhatsApp DM?
            </p>
            <Link
              href={'tel:+233503657878'}
              className={cn(
                'underline sm:underline-offset-4 md:underline-offset-8',
                'sm:text-base',
                'md:text-xl',
                'lg:text-2xl',
                'xl:text-3xl'
              )}
            >
              +233 50 365 78 78
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
