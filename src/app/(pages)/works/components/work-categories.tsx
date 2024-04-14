'use client'

import type { SetStateAction } from 'react'
import { useState } from 'react'

import { clients } from '@/data/app/content/clients'
import { workCategoriesData } from '@/data/app/globals'
import { cn } from '@/lib/utils'

import WorksPick from '../components/little-fingers/works-pick'
import WorkCategoryPick from './little-fingers/tab-pick'
import TabContent from './little-fingers/work-contents'

export const WorkCategories = () => {
  const [selectedTab, setSelectedTab] = useState('All Work')

  const handleTabClick = (tabNumber: SetStateAction<any>) => {
    setSelectedTab(tabNumber)
  }

  return (
    <section
      id="work-categories"
      className={cn(
        'space-y-6 px-40 py-8',
        'sm:px-6',
        'md:px-10',
        'lg:px-40',
        'xl:px-80',
        'sm:py-10',
        'md:py-20',
        'lg:py-30',
        'xl:py-40',
        'align-center justify-center',
      )}
    >
      <div
        className={cn(
          'flex flex-row flex-wrap items-start justify-start',
          'lg:my-16 xl:my-24',
        )}
      >
        <div className={cn('sm:w-full md:w-9/12')}>
          {selectedTab === selectedTab && (
            <TabContent>
              {workCategoriesData
                .filter((hero) => selectedTab === hero.workCategory)
                .map((hero, index) => (
                  <h1
                    key={index}
                    className={cn(
                      'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400',
                      'bg-clip-text text-left tracking-tight text-transparent drop-shadow-sm',
                      'w-full text-7xl font-bold leading-relaxed',
                      'dark:from-gray-100 dark:to-gray-800',
                      'sm:text-3xl',
                      'md:text-6xl',
                      'lg:text-7xl',
                      'xl:text-9xl',
                      'items-left justify-left',
                      'sm:w-full sm:pb-10',
                      'md:w-full md:pb-16',
                      'lg:w-4/5 lg:pb-10',
                      'xl:w-4/5 xl:pb-10',
                    )}
                  >
                    <div className={cn('w-9/12 leading-normal')}>
                      {hero.info}
                    </div>
                  </h1>
                ))}
            </TabContent>
          )}
        </div>
        <div
          className={cn(
            'flex flex-col sm:ml-40 sm:w-full sm:pb-10 md:ml-0 md:w-3/12',
          )}
        >
          {workCategoriesData.map((category) => (
            <WorkCategoryPick
              key={category.workCategory}
              tabNumber={category.workCategory}
              selectedTab={selectedTab}
              onClick={handleTabClick}
            >
              {category.workCategory}
            </WorkCategoryPick>
          ))}
        </div>
      </div>
      <div className={cn('flex')}>
        <div className={cn('w-full items-center justify-center')}>
          {selectedTab === selectedTab && (
            <TabContent>
              <div
                className={cn(
                  'grid w-full grid-cols-2 items-start justify-center',
                  'sm:grid-cols-1 sm:gap-10',
                  'md:grid-cols-2 md:gap-16',
                  'lg:grid-cols-2 lg:gap-20',
                  'xl:grid-cols-2 xl:gap-30',
                )}
              >
                {clients
                  .filter ((archived) => archived.archived === 'No')
                  .filter(
                    (work) =>
                      selectedTab === 'All Work' ||
                      work.workCategory.includes(selectedTab),
                  )
                  .map((work, index) => (
                    <WorksPick key={index} client={work} />
                  ))}
              </div>
            </TabContent>
          )}
        </div>
      </div>
    </section>
  )
}

