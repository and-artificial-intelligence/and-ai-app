import Image from 'next/image';

import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';

interface Advisor {
  name: string;
  title: string;
  firm: string;
  imageSrc: string;
}

export default function About() {
  const advisors: Advisor[] = [
    {
      name: 'Peter Magic',
      title: 'Managing Partner',
      firm: 'Desmarais LLP',
      imageSrc: '/advisor-1.jpeg',
    },
    {
      name: 'Charles Calkins',
      title: 'Partner',
      firm: 'Kilpatrick Townsend',
      imageSrc: '/advisor-4.jpeg',
    },
    {
      name: 'Tigran Guledjian',
      title: 'IP Litigation Co-Chair',
      firm: 'Quinn Emanuel',
      imageSrc: '/advisor-2.jpeg',
    },
    {
      name: 'Ybet Villacorta',
      title: 'Partner',
      firm: 'Foley & Lardner',
      imageSrc: '/advisor-3.jpg',
    },
    {
      name: 'Josef Schenker',
      title: 'Partner',
      firm: 'Gish PLLC',
      imageSrc: '/advisor-5.jpeg',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
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
                they both studied computer science through undergrad and
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

          <div className="relative h-[20rem] w-full rounded-lg md:h-[28rem] lg:w-[40%] xl:h-[32rem]">
            <Image
              fill
              alt="Company"
              className="rounded-lg object-cover object-top"
              src="/founders.jpg"
            />
          </div>
        </div>
      </section>

      {/* <section className="relative mx-auto w-full px-4 py-12 md:px-6 md:py-16 xl:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="relative h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)] [background-size:20px_20px,20px_20px] [background-position:0_0,0_0] [background-repeat:repeat,repeat] [mask-mode:alpha] [mask-repeat:no-repeat] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)] [-webkit-mask-repeat:no-repeat]" />
        </div>
        <div className="bg-background-lighter shadow-gray-dark/10 relative z-10 mx-auto w-full rounded-xs border border-gray-300 shadow xl:max-w-[1376px]">
          <div className="flex items-center justify-between px-6 pt-6 md:px-16 md:pt-10 lg:px-6 xl:px-20">
            <p className="font-mono text-sm font-medium text-gray-500">
              ADVISORY BOARD
            </p>
            <p className="font-mono text-sm font-medium text-gray-500">
              5 MEMBERS
            </p>
            <p className="hidden font-mono text-sm font-medium text-gray-500 md:block">
              US 6,237,565 B1
            </p>
          </div>

          <div className="grid gap-8 px-6 py-12 md:grid-cols-2 md:px-16 md:py-16 lg:grid-cols-5 lg:px-6 xl:px-20">
            {advisors.map((advisor, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-gray-200">
                  <Image
                    fill
                    alt={advisor.name}
                    className="object-cover"
                    src={advisor.imageSrc}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-element-high-em text-lg font-medium">
                    {advisor.name}
                  </h3>
                  <p className="text-element-mid-em text-sm">{advisor.title}</p>
                  <p className="text-element-mid-em text-sm">{advisor.firm}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
