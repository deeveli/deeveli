// Components/little-fingers/stats-pick.tsx
import Balancer from 'react-wrap-balancer';

import type { PartnerServiceInfoProps } from '@/data/app/interface';
import { cn } from '@/lib/utils';

export const Hero: React.FC<PartnerServiceInfoProps> = ({ service }) => {
  return (
    <>
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
        <div className={cn('flex w-full flex-row justify-between')}>
          {/* Hero Text */}
          <div
            className={cn(
              'items-left justify-left flex flex-col space-y-6 py-6 sm:w-full sm:gap-y-10 md:w-[75%] md:gap-y-20 lg:w-[45%]'
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
                    <Balancer>{service.title}</Balancer>
                  </p>
                </div>
              </div>
              {/*  Hero Subtext */}
              <div
                className={cn(
                  'justify flex flex-row items-end justify-between'
                )}
              >
                <div className={cn('flex flex-wrap sm:gap-y-10 md:gap-y-16')}>
                  <div
                    className={cn(
                      'sm:text-base',
                      'md:text-lg',
                      'lg:text-xl',
                      'xl:text-3xl'
                    )}
                  >
                    <p
                      className={cn(
                        // "sm:pb-5 md:pb-10",
                        'font-normal sm:leading-normal md:leading-relaxed'
                      )}
                    >
                      {service.subtext}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Clay Image */}
          <div
            className={
              cn()
              // "flex flex-col sm:w-full md:w-[55%] lg:w-[45%] sm:gap-y-10 md:gap-y-20 items-left justify-left space-y-6 py-6"
            }
          >
            {/* <div>
              <FallbackImage
                imageSrc={"/media/jpg/clay-1.webp"}
                alt={"clay-1"}
                width={1000}
                height={1000}
                className=""
              />{" "}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
