import { cn } from '@/lib/utils';
import Balancer from 'react-wrap-balancer';
import { FallbackImage } from '@/components/ui/fallback';
import { ClientInfoProps } from '@/data/app/interface';

export const SectionFour: React.FC<ClientInfoProps> = ({ client }) => {
  return (
    <>
      <section
        id="Clients"
        className={cn(
          `space-y-6 ${client.color}`,
          'sm:px-6',
          'md:px-10',
          'lg:px-40',
          'xl:px-80',
          'sm:pt-10',
          'md:pt-20',
          'lg:pt-32',
          'xl:pt-40',
          'sm:pb-5',
          'md:pb-10',
          'lg:pb-16',
          'xl:pb-20'
        )}
      >
        <div
          className={cn(
            'flex h-full w-full flex-col items-left justify-left space-y-6 py-6 text-slate-50',
            'sm:gap-y-5',
            'md:gap-y-10',
            'lg:gap-y-16',
            'xl:gap-y-20'
          )}
        >
          <div className={cn('mx-auto w-full max-w-full')}>
            <div
              className={cn(
                'dark:from-gray-100 dark:to-gray-800 font-black',
                'sm:text-2xl',
                'md:text-4xl',
                'lg:text-5xl',
                'xl:text-7xl',
                'sm:w-full',
                'md:w-full',
                'lg:w-4/5 lg:my-6 lg:mb-5',
                'xl:w-4/5 xl:my-10 xl:mb-5'
              )}
            >
              <div className={cn('sm:leading-normal md:leading-relaxed')}>
                <Balancer>{client.ht4a}</Balancer>
              </div>
            </div>
            <div
              className={cn(
                'flex flex-col whitespace-pre-line text-left ',
                'sm:w-full',
                'md:w-6/12',
                'lg:w-6/12',
                'xl:w-6/12',
                'sm:text-base',
                'md:text-xl',
                'lg:text-2xl',
                'xl:text-4xl',
                'mb-5',
                'sm:gap-y-4 md:gap-y-6 lg:gap-y-8 '
              )}
            >
              <div>
                <Balancer>{client.st4a}</Balancer>
              </div>
            </div>
            <div
              className={cn(
                'w-full flex flex-row flex-wrap',
                'sm:items-center md:items-start',
                'sm:py-5 sm:gap-10 md:py-10 md:gap-20 lg:py-20 lg:gap-20'
              )}
            >
              <div
                className={cn(
                  'sm:w-full sm:px-24 md:px-0 md:w-3/12 h-fit'
                  // "sm:border-8 lg:border-[15px]"
                )}
              >
                <FallbackImage
                  videoSrc={''}
                  imageSrc={client.image4a}
                  alt={client.alt4a}
                  width={1920}
                  height={1000}
                  className="sm:rounded-md sm:p-1 md:p-2 lg:p-3 md:rounded-xl lg:rounded-3xl object-cover border-solid bg-slate-900 dark:bg-slate-100 drop-shadow-2xl"
                />
              </div>
              <div className={cn('sm:w-full md:w-8/12 h-fit sm:mt-0 lg:mt-40')}>
                <FallbackImage
                  videoSrc={''}
                  imageSrc={client.image4b}
                  alt={client.alt4b}
                  width={1920}
                  height={1000}
                  className="sm:rounded-md sm:p-1 md:p-2 lg:p-3 md:rounded-xl lg:rounded-3xl object-cover border-solid bg-slate-900 dark:bg-slate-100 drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
