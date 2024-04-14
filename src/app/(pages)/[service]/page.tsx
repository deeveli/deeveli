import React from 'react'

import { deeveliData } from '@/data/app/content/partners/deeveli'

import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { Skills } from './components/skills'

interface ProjectProp {
  params: {
    service: string
  }
}

const Page: React.FC<ProjectProp> = ({ params }) => {
  const services = deeveliData.service.find(
    (c) => c.slug.toLowerCase() === params.service.toLowerCase()
  );

  if (!services) {
    return (
      <div className="text-md flex h-80 w-full items-center justify-center bg-slate-700">
        Page not found
      </div>
    )
  }

  return (
    <>
      <Hero service={services} />
      <Skills service={services} />
      <Projects service={services} />
    </>
  );
};

export default Page;