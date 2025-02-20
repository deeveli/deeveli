import React from 'react';

import { Hero } from '../../works/(case-study)/[name]/components/hero';
import { NextCaseStudy } from '../../works/(case-study)/[name]/components/next-case-study';
import { SectionOne } from '../../works/(case-study)/[name]/components/section-one';
import { SectionFour } from '../../works/(case-study)/[name]/components/sectionFour';
import { SectionThree } from '../../works/(case-study)/[name]/components/sectionThree';
import { SectionTwo } from '../../works/(case-study)/[name]/components/sectionTwo';
import { deeveliData } from '@/data/app/content/partners/deeveli';
import { clientsData } from '@/data/app/globals';

interface PartnerServiceProps {
  params: {
    project: string;
  };
}

const Page: React.FC<PartnerServiceProps> = async ({ params }) => {
  const projects = deeveliData.projectsData.find(
    (c) => c.slug.toLowerCase() === params.project
  );

  if (!projects) {
    return (
      <div className="text-md flex h-80 w-full items-center justify-center bg-slate-700">
        Page not found
      </div>
    );
  }

  const nextClient = clientsData.find((c) => c.id === projects.id + 1);

  return (
    <>
      <Hero client={projects} />
      <SectionOne client={projects} />
      <SectionTwo client={projects} />
      <SectionThree client={projects} />
      <SectionFour client={projects} />
      <NextCaseStudy client={nextClient} />
    </>
  );
};

export default Page;
