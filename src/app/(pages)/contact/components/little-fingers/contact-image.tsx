import { cn } from '@/lib/utils';
import Image from 'next/image';

export const ContactImage = async () => {
  return (
    // < div className={cn('flex flex-1 flex-wrap w-1/2 h-[80%] items-center justify-center align-middle')} >
    <Image
      src="/media/jpg/content.webp"
      typeof="picture/jpg"
      alt="contact"
      width={1000}
      height={1000}
      className={cn('bg-slate-700 justify-center items-center w-[80%]')}
    />
    // </div >
  );
};
