import Link from 'next/link'
import React from 'react'
import Balancer from 'react-wrap-balancer'

import type { ClientInfo } from '@/data/app/interface'
import { cn } from '@/lib/utils'

interface ArchivePickProps {
  work: any
}

const ArchivePick: React.FC<ClientInfo> = ({ client }) => {
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-left tracking-tight text-transparent drop-shadow-sm',
        'pb-3 dark:from-gray-100 dark:to-gray-800',
      )}
    >
      <Link
        href={client.src}
        className={cn(
          'w-full cursor-pointer text-4xl font-bold leading-normal',
          'sm:text-lg',
          'md:text-2xl',
          'lg:text-3xl',
          'xl:text-4xl',
        )}
      >
        <Balancer>{client.name}</Balancer>
      </Link>
    </div>
  )
}

export default ArchivePick
