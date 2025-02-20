import { FallbackImage } from '@/components/ui/fallback';
import { cn } from '@/lib/utils';

import { ContactInfo } from './little-fingers/contact-info';

const Contact = async () => {
  return (
    <section
      id="contact"
      className={cn(
        'flex w-full flex-col justify-start space-y-6 px-40',
        'sm:px-6',
        'md:px-10',
        'lg:px-40',
        'xl:px-80',
        'sm:py-10',
        'md:py-10',
        'lg:py-10',
        'xl:py-20'
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
              <ContactInfo />
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

export default Contact;
