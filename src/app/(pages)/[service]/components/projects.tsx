import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { FallbackImage } from '@/components/ui/fallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { clients } from '@/data/app/content/clients';
import { projectPictures } from '@/data/app/content/pictures';
import type { PartnerServiceInfoProps } from '@/data/app/interface';
import { cn } from '@/lib/utils';

export const Projects: React.FC<PartnerServiceInfoProps> = ({ service }) => {
  return (
    <section
      id="Clients"
      className={cn(
        'flex w-full justify-start space-y-6 px-40',
        'sm:px-6',
        'md:px-10',
        'lg:px-40',
        'xl:px-80',
        'sm:pb-10',
        'md:pb-20',
        'lg:pb-30',
        'xl:pb-40'
      )}
    >
      <div
        className={cn(
          'items-left justify-left flex w-full flex-col space-y-6 py-6 sm:gap-y-10 md:gap-y-20'
        )}
      >
        {clients
          .filter((project) =>
            project.serviceCategory?.includes(service.slug.toLowerCase())
          )
          .map((project, index) => (
            <>
              <div className="h-[1px] w-full bg-slate-500 text-slate-500" />
              <div
                key={(index = project.id)}
                className={cn('sm:py-3 md:py-10')}
              >
                <div
                  className={cn(
                    'flex w-full flex-wrap items-center sm:gap-10 md:gap-20 lg:justify-between'
                  )}
                >
                  <div className={cn('sm:w-full lg:w-4/12')}>
                    <div
                      className={cn(
                        'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400',
                        'bg-clip-text text-left tracking-tight text-transparent drop-shadow-sm',
                        'w-full text-7xl  leading-relaxed',
                        'dark:from-gray-100 dark:to-gray-800',
                        'sm:text-2xl',
                        'md:text-4xl',
                        'lg:text-5xl',
                        'xl:text-7xl',
                        'flex w-full flex-wrap'
                      )}
                    >
                      <p
                        className={cn(
                          'font-black sm:leading-normal md:leading-relaxed'
                        )}
                      >
                        <Balancer>
                          {'0'}
                          {index + 1} {'/'} {project.name}
                        </Balancer>
                      </p>
                    </div>
                    <div
                      className={cn(
                        'sm:text-base',
                        'md:text-lg',
                        'lg:text-xl',
                        'xl:text-3xl',
                        'flex w-full flex-wrap'
                      )}
                    >
                      <p
                        className={cn(
                          'sm:py-5 md:py-10',
                          'font-normal sm:leading-normal md:leading-relaxed'
                        )}
                      >
                        {project.descA}
                      </p>
                    </div>
                    <div
                      className={cn(
                        'sm:text-base',
                        'md:text-lg',
                        'lg:text-xl',
                        'xl:text-3xl'
                      )}
                    >
                      {project.services.map((skills, index) => (
                        <p
                          key={index}
                          className={cn(
                            '',
                            'font-normal text-slate-500 dark:text-slate-400'
                          )}
                        >
                          {skills}
                        </p>
                      ))}
                    </div>
                    <Link
                      className={cn(
                        'text group flex w-full cursor-pointer flex-row items-center text-center text-2xl font-normal underline underline-offset-8 ',
                        'sm:pt-5 md:pt-20',
                        'sm:text-lg',
                        'md:text-xl',
                        'lg:text-2xl',
                        'xl:text-4xl'
                      )}
                      href={project.src}
                    >
                      <Balancer>See project</Balancer>
                      <div
                        className={cn(
                          'ml-3 transform text-slate-400 transition-transform duration-200 group-hover:translate-x-3 group-hover:text-slate-100'
                        )}
                      >
                        <ArrowUpRight />
                      </div>
                    </Link>
                  </div>
                  <div className={cn('sm:w-full lg:w-7/12', 'sm:px-0 lg:pl-5')}>
                    <Carousel>
                      <CarouselContent>
                        {projectPictures
                          .filter((pic) => pic.client === project.name)
                          .map((imagePic) =>
                            imagePic.images.map((image, imageIndex) => (
                              <CarouselItem key={imageIndex}>
                                <div className="flex w-auto h-[400px] bg-slate-200 dark:bg-slate-800 rounded-2xl items-center justify-center">
                                  <FallbackImage
                                    imageSrc={image}
                                    alt={`Image ${imageIndex}`}
                                    width={2000}
                                    height={2000}
                                    className="object-cover object-center"
                                  />
                                </div>
                              </CarouselItem>
                            ))
                          )}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </section>
  );
};

// {deeveliData.projectsData.map((images) =>
//                           images.productImages?.map((image) => (
//                             <>
//                               <CarouselItem className="flex size-auto  bg-slate-200 dark:bg-slate-800 lg:items-center lg:justify-center">
//                                 <div className="flex size-auto  items-center justify-center bg-slate-200 dark:bg-slate-800">
//                                   <div className="flex items-center justify-center">
//                                     <FallbackImage
//                                       imageSrc={image}
//                                       alt={images}
//                                       width={2000}
//                                       height={2000}
//                                       className="object-cover object-center"
//                                     />
//                                   </div>
//                                 </div>
//                               </CarouselItem>
//                             </>
//                           )),
//                         )}

// .filter((picture) => {
//   const slugMatch = picture.slug.includes(
//     service.slug.toLowerCase(),
//   )
//   const projectDataMatch =
//     service.projectData?.find(
//       (data) => data.title === picture.clientSlug,
//     )?.title || ''
//   return projectDataMatch && slugMatch
// })
