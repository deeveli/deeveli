import { Figma, FileBadge } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import { Button } from '@/components/ui/button';
import { FallbackImage } from '@/components/ui/fallback';
import { deeveliData } from '@/data/app/content/partners/deeveli';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Intro = async () => {
  return (
    <section
      id="Deeveli"
      className={cn(
        'flex w-full justify-start space-y-6 px-40 dark:bg-black',
        'sm:px-6',
        'md:px-10',
        'lg:px-40',
        'xl:px-80',
        'sm:py-10',
        'md:py-20',
        'lg:py-30',
        'xl:py-40'
      )}
    >
      <div
        className={cn('flex w-full flex-wrap-reverse items-center md:gap-x-20')}
      >
        <div
          className={cn(
            'items-left justify-left flex flex-col space-y-6 py-6 sm:w-full sm:gap-y-10 md:w-[70%] md:gap-y-20 lg:w-[60%] xl:w-[45%]'
          )}
        >
          <div className={cn('flex w-full flex-wrap sm:gap-y-5 md:gap-y-10')}>
            <div>
              <div
                className={cn(
                  'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400',
                  'bg-clip-text text-left tracking-tight text-transparent drop-shadow-sm',
                  'w-full text-7xl  leading-relaxed',
                  'dark:from-gray-100 dark:to-gray-800',
                  'sm:text-4xl',
                  'md:text-7xl',
                  'lg:text-7xl',
                  'xl:text-9xl',
                  'flex w-full flex-wrap'
                )}
              >
                <p
                  className={cn(
                    'font-black sm:leading-normal md:leading-relaxed'
                  )}
                >
                  <Balancer>{deeveliData.introTitle}</Balancer>
                </p>
              </div>
              <div
                className={cn(
                  'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400',
                  'bg-clip-text text-left tracking-tight text-transparent drop-shadow-sm',
                  'w-full text-7xl  leading-relaxed opacity-70',
                  'dark:from-gray-100 dark:to-gray-800',
                  'sm:text-xl',
                  'md:text-3xl',
                  'lg:text-4xl',
                  'xl:text-6xl',
                  'flex w-full flex-wrap'
                )}
              >
                <p
                  className={cn(
                    'font-black sm:leading-normal md:leading-relaxed'
                  )}
                >
                  <Balancer>{deeveliData.introJob}</Balancer>
                </p>
              </div>
            </div>
            {/*  Hero Subtext */}
            <div
              className={cn('justify flex flex-row items-end justify-between')}
            >
              <div className={cn('flex flex-wrap sm:gap-y-10 md:gap-y-12')}>
                <div
                  className={cn(
                    'sm:text-base',
                    'md:text-base',
                    'lg:text-lg',
                    'xl:text-2xl'
                  )}
                >
                  <p
                    className={cn(
                      'sm:pb-3 md:pb-7',
                      'font-normal sm:leading-normal md:leading-relaxed'
                    )}
                  >
                    {deeveliData.introSubtext1}
                  </p>
                  <p
                    className={cn(
                      // "sm:pb-5 md:pb-10",
                      'font-normal sm:leading-normal md:leading-relaxed'
                    )}
                  >
                    {deeveliData.introSubtext2}
                  </p>
                </div>
              </div>
            </div>

            <div className={cn('flex gap-5')}>
              <div>
                <Link
                  href={'/files/Divine-Elikplim-Abah-Resume-2025.pdf'}
                  target={'/files/Divine-Elikplim-Abah-Resume-2025.pdf'}
                >
                  <Button className="bg-slate-200 font-normal text-slate-950 hover:bg-red-500 hover:font-bold dark:bg-slate-800 dark:text-slate-50">
                    <FileBadge className="mr-2" /> Get CV/Resume
                  </Button>
                </Link>
              </div>
              <div>
                <Link
                  href={'/files/Abah-Divine-Portfolio-2024_C.pdf'}
                  target={'/files/Abah-Divine-Portfolio-2024_C.pdf'}
                >
                  <Button className="bg-slate-200 font-normal text-slate-950 hover:bg-red-500 hover:font-bold dark:bg-slate-800 dark:text-slate-50">
                    <Figma className="mr-2" /> Download Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'flex sm:w-full sm:justify-center md:w-[25%] md:justify-end lg:w-[30%] xl:w-[45%]',
            'relative'
          )}
        >
          {/* Background Image */}
          <div
            className={cn(
              'absolute inset-0 bg-cover bg-center sm:blur-sm md:blur-2xl'
            )}
            style={{ backgroundImage: 'url("/media/jpg/deev-portfolio.png")' }}
          />

          {/* Transparent Overlay */}
          <div
            className={cn(
              'absolute inset-0 rounded-2xl bg-slate-50 dark:bg-slate-950 sm:opacity-50 md:opacity-0'
            )}
          />

          {/* Content */}
          <div className="flex sm:w-[60%] sm:p-3 md:w-[90%] md:p-0">
            <FallbackImage
              imageSrc="/media/jpg/deev-portfolio.png"
              alt={undefined}
              width={3000}
              height={3000}
              className={cn(
                'shadow-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl'
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
