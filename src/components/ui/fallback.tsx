'use client';

import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface FallbackImageProps {
  videoSrc?: string;
  imageSrc?: string;
  alt: any;
  width: number;
  height: number;
  className?: string;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  videoSrc,
  imageSrc,
  alt,
  width,
  height,
  className,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const srcI = imageSrc || '/undefined';
  const srcV = videoSrc || '/undefined';
  const altI = alt || 'undefined';

  return (
    <div className="relative">
      <Image
        src={srcI}
        typeof="picture/jpg"
        alt={altI}
        blurDataURL={imageSrc}
        // placeholder="blur"
        width={width}
        height={height}
        className={cn(
          ` ${className} h-auto w-full bg-slate-700 object-cover ${videoLoaded ? 'hidden' : 'block'}`
        )}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`${className} h-auto w-full object-cover ${videoLoaded ? 'block' : 'hidden'}`}
        onLoadedData={handleVideoLoad}
      >
        <source src={srcV} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
