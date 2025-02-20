/* eslint-disable unused-imports/no-unused-vars */
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { FallbackImage } from '@/components/ui/fallback';
import { deeveliData } from '@/data/app/content/partners/deeveli';
import { cn } from '@/lib/utils';
import { projectPictures } from '@/data/app/content/pictures';
import { clients } from '@/data/app/content/clients';

export const Services = async () => {
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
        {deeveliData.service.map((service, index) => (
          <>
            <div className="h-[5px] w-full bg-slate-500 text-slate-500" />
            <div
              key={(index = service.id)}
              className={cn('sm:py-3 md:py-5 lg:py-10')}
            >
              <div
                className={cn(
                  'flex w-full flex-wrap sm:gap-10 md:gap-16 lg:items-center lg:justify-between lg:gap-20'
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
                      <Balancer>{service.title}</Balancer>
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
                    <p
                      className={cn(
                        'sm:py-5 md:py-10',
                        'font-normal sm:leading-normal md:leading-relaxed'
                      )}
                    >
                      {service.headtext}
                    </p>
                  </div>
                  <div
                    className={cn(
                      'sm:text-xs',
                      'md:text-base',
                      'lg:text-lg',
                      'xl:text-2xl'
                    )}
                  >
                    {service.subService.map((skills, index) => (
                      <p
                        key={index}
                        className={cn(
                          'sm:pb-1 md:pb-1',
                          'font-normal text-slate-500 dark:text-slate-400 sm:leading-normal md:leading-relaxed'
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
                    href={service.link}
                  >
                    <Balancer>See projects</Balancer>
                    <div
                      className={cn(
                        'ml-3 transform text-slate-400 transition-transform duration-200 group-hover:translate-x-3 group-hover:text-slate-100'
                      )}
                    >
                      <ArrowUpRight />
                    </div>
                  </Link>
                </div>
                <div
                  className={cn('', 'sm:w-full lg:w-5/12', 'sm:px-0 lg:pl-5')}
                >
                  <Carousel>
                    <CarouselContent>
                      {projectPictures
                        .filter(
                          (serv) =>
                            serv.slug.includes(service.slug) &&
                            clients.filter(
                              (archived) => archived.archived === 'No'
                            )
                        )
                        .slice(0, 5)
                        .filter((image) => image != null)
                        .map((imagePic) =>
                          imagePic.images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex}>
                              <div className="flex w-auto h-[400px] bg-slate-200 dark:bg-slate-800 items-center justify-center rounded-xl">
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
                      {/* {deeveliData.serviceImages
                        .slice(0, 5)
                        .filter((image) => image != null)
                        .map((images, index) => (
                          <>
                            <CarouselItem
                              key={index}
                              className="flex size-auto  bg-slate-200 dark:bg-slate-800 lg:items-center lg:justify-center"
                            >
                              <div className="flex size-auto  items-center justify-center bg-slate-200 dark:bg-slate-800">
                                <div className="flex items-center justify-center">
                                  <FallbackImage
                                    imageSrc={images}
                                    alt={images}
                                    width={1000}
                                    height={1000}
                                    className="object-fit object-center"
                                  />
                                </div>
                              </div>
                            </CarouselItem>
                          </>
                        ))} */}
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
