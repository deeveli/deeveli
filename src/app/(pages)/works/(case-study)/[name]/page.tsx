import React from "react";
import { clientsData } from "@/data/app/globals";
import { Hero } from "./components/hero";
import { SectionOne } from "./components/section-one";
import { SectionTwo } from "./components/sectionTwo";
import { SectionThree } from "./components/sectionThree";
import { SectionFour } from "./components/sectionFour";
import { NextCaseStudy } from "./components/next-case-study";
import { clients } from "@/data/app/content/clients";

interface CaseStudyProps {
  params: {
    name: string;
  };
}

const CaseStudy: React.FC<CaseStudyProps> = async ({ params }) => {
  const client = clients.find((c) => c.slug.toLowerCase() === params.name);

  if (!client) {
    return (
      <div className="w-full h-80 bg-slate-700 justify-center items-center text-md flex">
        Page not found
      </div>
    );
  }

  const nextClient = clientsData.find((c) => c.id === client.id + 1);

  return (
    <>
      <Hero client={client} />
      <SectionOne client={client} />
      <SectionTwo client={client} />
      <SectionThree client={client} />
      <SectionFour client={client} />
      <NextCaseStudy client={nextClient} />
    </>
  );
};

export default CaseStudy;
