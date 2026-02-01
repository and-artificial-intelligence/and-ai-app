'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';

import { useBlazeSlider } from '@/tools/blaze-slider/useBlazeSlider';

export interface Advisor {
  name: string;
  title: string;
  firm: string;
  imageSrc: string;
  logoSrc: string;
  bioUrl: string;
}

const advisors: Advisor[] = [
  {
    name: 'Peter Magic',
    title: 'Managing Partner, SF',
    firm: 'Desmarais LLP',
    imageSrc: '/advisory-processed/peter-desmarais.png',
    logoSrc: '/advisory-logos/desmarais.png',
    bioUrl: 'https://www.desmaraisllp.com/peter-magic',
  },
  {
    name: 'Charles Calkins',
    title: 'Partner',
    firm: 'Kilpatrick Townsend',
    imageSrc: '/advisory-processed/charles-kts.png',
    logoSrc: '/advisory-logos/kilpatrick.png',
    bioUrl: 'https://ktslaw.com/en/People/C/CalkinsCharlesW',
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
    name: 'Ybet Villacorta',
    title: 'Of Counsel',
    firm: 'Foley & Lardner',
    imageSrc: '/advisory-processed/ybet-foley.png',
    logoSrc: '/advisory-logos/foley.png',
    bioUrl: 'https://www.foley.com/people/villacorta-gilberto-m/',
  },
  {
    name: 'Josef Schenker',
    title: 'Partner',
    firm: 'Gish PLLC',
    imageSrc: '/advisory-processed/josef-gish.png',
    logoSrc: '/advisory-logos/gish.png',
    bioUrl: 'https://www.gishpllc.com/team-member/josef-schenker/',
  },
];

interface AdvisoryBoardSectionProps {
  showHeader?: boolean;
  headerTitle?: string;
  leadingCopy?: string;
}

const AdvisorCard = ({ advisor }: { advisor: Advisor }) => (
  <Link
    className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
    href={advisor.bioUrl}
    rel="noopener noreferrer"
    target="_blank"
  >
    {/* Profile Image - Square with rounded corners and border */}
    <div className="border-gray-dark/5 relative mb-4 aspect-square w-full overflow-hidden rounded-sm border bg-gray-200 transition-shadow duration-300 group-hover:shadow-lg">
      <Image
        fill
        alt={advisor.name}
        className="object-cover object-top"
        sizes="(max-width: 768px) 60vw, (max-width: 1024px) 28vw, 200px"
        src={advisor.imageSrc}
      />
    </div>

    {/* Name and Title */}
    <div className="mb-4 flex flex-col gap-1 text-center">
      <h3 className="text-element-high-em text-base font-medium group-hover:underline md:text-lg">
        {advisor.name}
      </h3>
      <p className="text-element-mid-em text-sm">{advisor.title}</p>
    </div>

    {/* Firm Logo - Fixed height container for consistent sizing */}
    <div className="mt-auto flex h-7 items-center justify-center">
      <div className="relative h-full w-28">
        <Image
          fill
          alt={advisor.firm}
          className="object-contain opacity-60 grayscale transition-opacity duration-300 group-hover:opacity-80"
          sizes="112px"
          src={advisor.logoSrc}
        />
      </div>
    </div>
  </Link>
);

export const AdvisoryBoardSection = ({
  showHeader = true,
  headerTitle = 'Guided by the best in patent law',
  leadingCopy = 'Leading voices in patent litigation and strategy — who know what it takes to win.',
}: AdvisoryBoardSectionProps) => {
  const [sliderRef, slider] = useBlazeSlider({
    all: {
      slidesToShow: 1.2,
      slideGap: '16px',
      loop: false,
      enableAutoplay: false,
    },
    '(min-width: 480px)': {
      slidesToShow: 2.2,
      slideGap: '20px',
    },
    '(min-width: 768px)': {
      slidesToShow: 3.2,
      slideGap: '24px',
    },
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const s = slider.current;
    if (!s) return;
    const unsubscribe = s.onSlide((pageIndex) => {
      setActiveIndex(pageIndex);
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [slider]);

  return (
    <section className="mx-auto w-full px-4 pt-16 pb-0 md:px-6 md:pt-20 md:pb-0 xl:max-w-[80rem] xl:px-8 xl:pt-24 xl:pb-0">
      {/* Header */}
      {showHeader && (
        <div className="mb-12 flex flex-col gap-6 md:mb-16">
          <SubHeader brand={BrandColor.PRIMARY} title="Advisory Board" />
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-martina text-element-high-em text-4.5xl text-center xl:text-5xl">
              {headerTitle}
            </h2>
            <p className="text-element-mid-em max-w-2xl text-center text-base md:text-lg">
              {leadingCopy}
            </p>
          </div>
        </div>
      )}

      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
        {advisors.map((advisor) => (
          <AdvisorCard key={advisor.name} advisor={advisor} />
        ))}
      </div>

      {/* Mobile/Tablet: Horizontal slider */}
      <div ref={sliderRef} className="blaze-slider lg:hidden">
        <div className="blaze-container">
          <div className="blaze-track-container">
            <div className="blaze-track">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="px-1">
                  <AdvisorCard advisor={advisor} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex justify-center gap-2">
          {advisors.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex
                  ? 'bg-brand-primary'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => {
                const s = slider.current;
                if (!s) return;
                const delta = index - s.stateIndex;
                if (delta > 0) s.next(delta);
                else if (delta < 0) s.prev(-delta);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
