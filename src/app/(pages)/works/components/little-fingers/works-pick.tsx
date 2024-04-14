import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Balancer from 'react-wrap-balancer'

import { FallbackImage } from '@/components/ui/fallback'
import { cn } from '@/lib/utils'

interface WorksPickProps {
  client: {
    id: number
    name: string
    slug: string
    logo: string
    src: string
    image: string
    video: string
    alt: string
    descA: string
    services: string[]
  }
}

const WorksPick: React.FC<WorksPickProps> = ({ client }) => (
  <Link
    href={client.src}
    className={cn(
      'group flex w-full cursor-pointer items-start justify-center',
      
    )}
  >
    <div
      className={cn(
        'flex w-full flex-col justify-center',
        `w-[500px]`,
      )}
    >
      <div
        className={cn(
          'transform cursor-pointer bg-slate-300 transition-transform duration-500 hover:scale-[1.01] hover:opacity-90 hover:shadow-2xl hover:shadow-red-500',
          `sm:w-full`,
          // `md:h-[600px] md:w-[400px]`,
          // `lg:h-[700px] lg:w-[500px]`,
          // `xl:h-[1050px] xl:w-[750px]`,
        )}
      >
        <FallbackImage
          videoSrc={client.video}
          imageSrc={client.image}
          alt={client.alt}
          width={1000}
          height={1000}
          className={cn(
            'h-auto',
            'w-full',
            'object-cover',
            'transition-property-opacity',
            'transition-duration-1.3s',
            'transition-delay-0s',
            'transition-timing-function-cubic-bezier(0.19, 1, 0.22, 1)',
            'opacity-1',
            'filter-blur-0px',
          )}
        />
      </div>
      <h1
        className={cn(
          ' mb-0 mt-3 max-w-fit text-4xl font-bold',
          'sm:text-xl',
          'md:text-3xl',
          'lg:mb-1 lg:mt-4 lg:text-4xl',
          'xl:mb-2 xl:mt-5 xl:text-6xl',
        )}
      >
        {client.name}
      </h1>
      <p
        className={cn(
          'mb-0 text-xl font-normal leading-tight',
          'sm:text-base',
          'md:text-lg',
          'lg:text-lg',
          'xl:mb-2 xl:text-3xl',
        )}
      >
        {client.descA}
      </p>
      <div
        id="services"
        className={cn(
          'mt-1 flex flex-wrap items-center text-xl font-normal text-slate-500',
          'sm:text-xs',
          'md:text-sm',
          'lg:text-sm',
          'xl:text-lg',
        )}
      >
        {client.services.map((service, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
                className={cn(
                  'mx-5 h-1 w-1 rounded-full bg-slate-500',
                  'sm:mx-2',
                  'md:mx-3',
                  'lg:mx-5',
                  'xl:mx-5',
                )}
              />
            )}
            {service}
          </React.Fragment>
        ))}
      </div>
      <a
        className={cn(
          `text group flex w-full cursor-pointer flex-row items-center justify-start text-center text-2xl font-normal text-slate-700 underline underline-offset-8 dark:text-slate-500 dark:group-hover:text-slate-300`,
          'sm:text-sm',
          'md:text-base',
          'lg:text-base',
          'xl:text-lg',
          'sm:mt-1',
          'md:mt-1',
          'lg:mt-1',
          'xl:mt-2',
        )}
        href="#"
      >
        <Balancer>View case study</Balancer>
        <div
          className={cn(
            'ml-3 mt-1 transform text-slate-400 transition-transform duration-200 group-hover:translate-x-3 group-hover:text-slate-100',
          )}
        >
          <MoveRight />
        </div>
      </a>
    </div>
  </Link>
)

export default WorksPick
