import Balancer from 'react-wrap-balancer';

import { deeveliData } from '@/data/app/content/partners/deeveli';
import { cn } from '@/lib/utils';

export const Skills = async () => {
  return (
    <section
      id="Skills"
      className={cn(
        'flex w-full justify-start space-y-6 px-40',
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
        className={cn(
          'flex flex-row sm:flex-wrap sm:gap-20 md:flex-nowrap md:gap-20 lg:gap-60'
        )}
      >
        {/* Tools */}
        <div className={cn('flex flex-wrap sm:w-full md:w-1/2')}>
          <div className={cn('flex w-full flex-row justify-between')}>
            <div
              className={cn(
                'w-1/6',
                'sm:text-base',
                'md:text-lg',
                'lg:text-xl',
                'xl:text-3xl'
              )}
            >
              <p
                className={cn(
                  'font-bold underline sm:underline-offset-4 md:underline-offset-8',
                  'sm:leading-normal md:leading-relaxed'
                )}
              >
                <Balancer>Productivity / Stack</Balancer>
              </p>
            </div>
            <div
              className={cn(
                'sm:ml-16 md:ml-28 xl:ml-0 ',
                'w-5/6',
                'sm:text-xs',
                'md:text-xs',
                'lg:text-base',
                'xl:text-xl'
              )}
            >
              {deeveliData.productivityTools.map((tools, index) => (
                <p
                  key={index}
                  className={cn(
                    'sm:pb-1 md:pb-3',
                    'font-normal sm:leading-normal md:leading-relaxed'
                  )}
                >
                  {tools}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className={cn('flex flex-wrap sm:w-full md:w-1/2')}>
          <div
            className={cn(
              'flex w-full flex-row justify-between sm:gap-x-5 md:gap-x-10'
            )}
          >
            <div
              className={cn(
                'w-1/6',
                'sm:text-base',
                'md:text-lg',
                'lg:text-xl',
                'xl:text-3xl'
              )}
            >
              <p
                className={cn(
                  'font-bold underline sm:underline-offset-4 md:underline-offset-8',
                  'sm:leading-normal md:leading-relaxed'
                )}
              >
                <Balancer>Skills</Balancer>
              </p>
            </div>
            <div
              className={cn(
                'w-4/6',
                'sm:text-xs',
                'md:text-xs',
                'lg:text-base',
                'xl:text-xl'
              )}
            >
              {deeveliData.skills.map((tools, index) => (
                <p
                  key={index}
                  className={cn(
                    'sm:pb-1 md:pb-1',
                    'font-normal sm:leading-normal md:leading-relaxed'
                  )}
                >
                  {tools}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
