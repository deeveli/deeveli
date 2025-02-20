/* eslint-disable react/jsx-key */
import Balancer from 'react-wrap-balancer';

import { clients } from '@/data/app/content/clients';
import { cn } from '@/lib/utils';

import ArchivePick from './little-fingers/archive-pick';

const Archives = () => {
  return (
    <div
      id="archive"
      className={cn(
        'w-full space-y-6 bg-slate-200 dark:bg-black',
        'sm:px-6',
        'md:px-10',
        'lg:px-40',
        'xl:px-80',
        'sm:py-5',
        'md:py-20',
        'lg:py-30',
        'xl:py-40',
        'align-center justify-center'
      )}
    >
      <h2
        className={cn(
          'w-full font-bold leading-normal text-slate-700 dark:text-slate-50',
          'sm:text-xl',
          'md:text-3xl',
          'lg:text-3xl',
          'xl:text-5xl',
          'sm:pb-2',
          'md:pb-6',
          'lg:pb-8',
          'xl:pb-12'
        )}
      >
        <Balancer>Archives</Balancer>
      </h2>
      <div
        className={cn(
          'grid sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-6 lg:gap-8 xl:gap-12'
        )}
      >
        {clients
          .filter((archived) => archived.archived === 'Yes')
          .map((work, index) => (
            <div className={cn('')}>
              <ArchivePick key={index} client={work} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Archives;
