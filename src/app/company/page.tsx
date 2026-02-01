import type { Metadata } from 'next';
import Image from 'next/image';

import { Footer } from '@/common/components/footer';
import { SchemaScript } from '@/common/components/schema-script';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';

import { generateBreadcrumbSchema, generatePersonSchema } from '@/lib/schema';
import { AdvisoryBoardSection } from '@/module/advisory-board';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Meet the team behind &AI. Founded by MIT engineers building the AI workspace for patent litigation.',
};

const companyBreadcrumb = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Company', url: 'https://tryandai.com/company' },
];

// Schema data for SEO
const advisorSchemaData = [
  {
    name: 'Peter Magic',
    jobTitle: 'Managing Partner, SF',
    worksFor: 'Desmarais LLP',
    image: 'https://tryandai.com/advisory-processed/peter-desmarais.png',
  },
  {
    name: 'Charles Calkins',
    jobTitle: 'Partner',
    worksFor: 'Kilpatrick Townsend',
    image: 'https://tryandai.com/advisory-processed/charles-kts.png',
  },
  {
    name: 'Tigran Guledjian',
    jobTitle: 'IP Litigation Co-Chair',
    worksFor: 'Quinn Emanuel',
    image: 'https://tryandai.com/advisory-processed/tigran-quinn.png',
  },
  {
    name: 'Ybet Villacorta',
    jobTitle: 'Of Counsel',
    worksFor: 'Foley & Lardner',
    image: 'https://tryandai.com/advisory-processed/ybet-foley.png',
  },
  {
    name: 'Josef Schenker',
    jobTitle: 'Partner',
    worksFor: 'Gish PLLC',
    image: 'https://tryandai.com/advisory-processed/josef-gish.png',
  },
];

const advisorSchemas = advisorSchemaData.map((advisor) =>
  generatePersonSchema(advisor),
);

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <SchemaScript
        schema={[
          generateBreadcrumbSchema(companyBreadcrumb),
          ...advisorSchemas,
        ]}
      />

      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 xl:gap-24">
          <div className="space-y-8 lg:flex-1">
            <div className="space-y-3">
              <SubHeader brand={BrandColor.PRIMARY} title="Company" />
              <h1 className="text-element-high-em text-5xl md:text-6xl xl:text-7xl">
                Our <span className="font-martina italic">vision</span>
              </h1>
            </div>
            <div className="text-element-mid-em space-y-4 text-base xl:text-lg">
              <p>
                Co-founders Herbie Turner and Caleb Harris met at MIT, where
                they both studied computer science through undergraduate and
                graduate school. Caleb went on to serve as a technical expert in
                patent litigation, whereas Herbie built his career in machine
                learning and AI. Through the lenses of procurement and
                litigation, both saw the inefficiencies in the patent system.
                Proving validity or infringement required such deep technical
                analysis that countless inventions and billions in potential
                licensing revenue remained locked away.
              </p>
              <p>
                In 2024, LLMs reached the sophistication needed to handle the
                scientific complexity of patent material and the ambiguity of
                drafting. This insight sparked Herbie and Caleb to found &AI
                with an early team of MIT engineers with experience from Google,
                Meta, and Citadel Securities. The goal was to build the system
                that makes patent litigation efficient and unlock new revenue
                opportunities for asset holders, funders, litigators, and
                clients alike.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-[45%]">
            <Image
              alt="Company founders"
              className="h-auto w-full"
              height={0}
              src="/founders.png"
              width={0}
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      <div className="pb-16 md:pb-20 xl:pb-24">
        <AdvisoryBoardSection />
      </div>

      <Footer />
    </main>
  );
}
