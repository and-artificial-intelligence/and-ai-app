import type { PersonSchemaProps } from '@/lib/schema';

export interface Advisor {
  name: string;
  title: string;
  firm: string;
  imageSrc: string;
  logoSrc: string;
  bioUrl: string;
}

const SITE_URL = 'https://tryandai.com';

export const advisors: Advisor[] = [
  {
    name: 'Charles Calkins',
    title: 'Partner',
    firm: 'Kilpatrick Townsend',
    imageSrc: '/advisory-processed/charles-kts.png',
    logoSrc: '/advisory-logos/kilpatrick.png',
    bioUrl: 'https://ktslaw.com/en/People/C/CalkinsCharlesW',
  },
  {
    name: 'Peter Magic',
    title: 'Managing Partner, SF',
    firm: 'Desmarais LLP',
    imageSrc: '/advisory-processed/peter-desmarais.png',
    logoSrc: '/advisory-logos/desmarais.png',
    bioUrl: 'https://www.desmaraisllp.com/peter-magic',
  },
  {
    name: 'Ben Herbert',
    title: 'Partner',
    firm: 'Procopio',
    imageSrc: '/advisory-processed/ben-procopio.png',
    logoSrc: '/advisory-logos/procopio.png',
    bioUrl: 'https://www.procopio.com/people/benjamin-herbert',
  },
  {
    name: 'Tigran Guledjian',
    title: 'IP Litigation Co-Chair',
    firm: 'Quinn Emanuel',
    imageSrc: '/advisory-processed/tigran-quinn.png',
    logoSrc: '/advisory-logos/quinn.png',
    bioUrl: 'https://www.quinnemanuel.com/attorneys/guledjian-tigran/',
  },
  {
    name: 'Scott Flanz',
    title: 'Principal',
    firm: 'Fish & Richardson',
    imageSrc: '/advisory-processed/scott-fish.png',
    logoSrc: '/advisory-logos/fish.png',
    bioUrl: 'https://www.fr.com/team/scott-m-flanz/',
  },
  {
    name: 'Josef Schenker',
    title: 'Partner',
    firm: 'Gish PLLC',
    imageSrc: '/advisory-processed/josef-gish.png',
    logoSrc: '/advisory-logos/gish.png',
    bioUrl: 'https://www.gishpllc.com/team-member/josef-schenker/',
  },
  {
    name: 'Jason Mueller',
    title: 'Partner',
    firm: 'Vorys',
    imageSrc: '/advisory-processed/jason-vorys.png',
    logoSrc: '/advisory-logos/vorys.png',
    bioUrl: 'https://www.vorys.com/mueller',
  },
  {
    name: 'Ybet Villacorta',
    title: 'Of Counsel',
    firm: 'Foley & Lardner',
    imageSrc: '/advisory-processed/ybet-foley.png',
    logoSrc: '/advisory-logos/foley.png',
    bioUrl: 'https://www.foley.com/people/villacorta-gilberto-m/',
  },
  {
    name: 'Peter Mastroianni',
    title: 'Discovery Counsel',
    firm: 'Reichman Jorgensen Lehman Feldberg LLP',
    imageSrc: '/advisory-processed/peter-rjlf.png',
    logoSrc: '/advisory-logos/rjlf.png',
    bioUrl: 'https://www.reichmanjorgensen.com/peter-mastroianni',
  },
];

export const advisorSchemaData: PersonSchemaProps[] = advisors.map((advisor) => ({
  name: advisor.name,
  jobTitle: advisor.title,
  worksFor: advisor.firm,
  image: `${SITE_URL}${advisor.imageSrc}`,
}));
