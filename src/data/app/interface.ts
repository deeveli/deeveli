export interface ClientInfo {
  client: {
    id: number;
    color: string;
    color2: string;
    name: string;
    slug: string;
    logo: string;
    src: string;
    workCategory: string[];
    featured: string;
    productImages?: string[];
  };
}
export interface HeroSection {
  image: string;
  video: string;
  alt: string;
  descA: string;
  descB: string;
  descC: string;
  services: string[];
  link: string;
}

export interface SectionOne {
  image1a: string;
  image1b: string;
  alt1a: string;
  alt1b: string;
  video1a: string;
  video1b: string;
  ht1a: string;
  st1a: string;
  st1b: string;
}

export interface SectionTwo {
  image2a: string;
  image2b: string;
  image2c: string;
  video2a: string;
  video2b: string;
  video2c: string;
  alt2a: string;
  alt2b: string;
  alt2c: string;
  ht2a: string;
  st2a: string;
  st2b: string;
  st2c: string;
}

export interface SectionThree {
  image3a: string;
  alt3a: string;
  ht3a: string;
  st3a: string;
}

export interface SectionFour {
  image4a: string;
  image4b: string;
  alt4a: string;
  alt4b: string;
  ht4a: string;
  st4a: string;
}

export interface ClientInfoProps {
  client: {
    id?: number;
    color?: string;
    color2?: string;
    name?: string;
    slug?: string;
    logo?: string;
    src?: string;
    workCategory?: string[];
    productImages?: string[];

    // heroSection: HeroSection;
    image?: string;
    video?: string;
    imageA?: string;
    imageB?: string;
    alt?: string;
    descA?: string;
    descB?: string;
    descC?: string;
    services?: string[];
    link?: string;

    // sectionOne: SectionOne;
    image1a?: string;
    image1b?: string;
    alt1a?: string;
    alt1b?: string;
    video1a?: string;
    video1b?: string;
    ht1a?: string;
    st1a?: string;
    st1b?: string;

    // sectionTwo: SectionTwo;
    image2a?: string;
    image2b?: string;
    image2c?: string;
    video2a?: string;
    video2b?: string;
    video2c?: string;
    alt2a?: string;
    alt2b?: string;
    alt2c?: string;
    ht2a?: string;
    st2a?: string;
    st2b?: string;
    st2c?: string;

    // sectionThree: SectionThree;
    image3a?: string;
    alt3a?: string;
    ht3a?: string;
    st3a?: string;

    // sectionFour: SectionFour;
    image4a?: string;
    image4b?: string;
    alt4a?: string;
    alt4b?: string;
    ht4a?: string;
    st4a?: string;
  };
}

export interface PartnerServiceInfoProps {
  service: {
    id: number;
    title: string;
    link: string;
    slug: string;
    headtext: string;
    subtext: string;
    subService: string[];
    tools: string[];
    skills: string[];
    project?: string[];
    projectData?: {
      id: number;
      title: string;
      link: string;
      slug: string;
      headtext: string;
      subtext: string;
      color: string;
      color2: string;
      name: string;
      tools: string[];
      skills: string[];
      image1: string;
      image2: string;
      image3: string;
      iamge: string;
      imageA: string;
      imageB: string;
      alr: string;
      descA: string;
      descB: string;
      descC: string;
      serviceCategory: string[];
      services: string[];
    }[];
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  };

  projectDatas?: {
    id: number;
    title: string;
    link: string;
    slug: string;
    headtext: string;
    subtext: string;
    color: string;
    color2: string;
    name: string;
    tools: string[];
    skills: string[];
    image1: string;
    image2: string;
    image3: string;
    iamge: string;
    imageA: string;
    imageB: string;
    alr: string;
    descA: string;
    descB: string;
    descC: string;
    serviceCategory: string[];
    services: string[];
  };
}
export interface PartnerServiceInfoProps2 {
  partner: {
    id: number;
    title: string;
    link: string;
    slug: string;
    headtext: string;
    subtext: string;
    subService: string[];
    tools: string[];
    skills: string[];
    project?: string[];
    projectData?: string[];
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  };
}

export interface PartnerInterfaceProps {
  introTitle: string;
  introJob: string;
  introSubtext1: string;
  introSubtext2: string;
  skills: string[];
  productivityTools: string[];
  service: {
    id: number;
    title: string;
    link: string;
    slug: string;
    headtext: string;
    subtext: string;
    subService: string[];
    tools: string[];
    skills: string[];
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  }[];
}
