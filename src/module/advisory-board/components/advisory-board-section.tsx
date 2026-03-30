'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo, RefObject, useEffect, useRef, useState } from 'react';

import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';

import { useBlazeSlider } from '@/tools/blaze-slider/useBlazeSlider';

const DESKTOP_CARD_MIN_WIDTH = 176;
const MOBILE_SLIDER_LAYOUT_CLASS =
  '[--slides-to-show:1.2] [--slide-gap:16px] min-[480px]:[--slides-to-show:2.2] min-[480px]:[--slide-gap:20px] md:[--slides-to-show:3.2] md:[--slide-gap:24px]';
const DESKTOP_SLIDER_LAYOUT_CLASS =
  '[--slides-to-show:3.2] [--slide-gap:20px] min-[1200px]:[--slides-to-show:4.25] min-[1200px]:[--slide-gap:24px] min-[1440px]:[--slides-to-show:5.1]';

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
  {
    name: 'Jason Mueller',
    title: 'Partner',
    firm: 'Vorys',
    imageSrc: '/advisory-processed/jason-vorys.png',
    logoSrc: '/advisory-logos/vorys.png',
    bioUrl: 'https://www.vorys.com/mueller',
  },
];

interface AdvisoryBoardSectionProps {
  showHeader?: boolean;
  headerTitle?: string;
  leadingCopy?: string;
}

const CarouselArrow = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={
        direction === 'left'
          ? 'M9.5 3.5L5 8l4.5 4.5'
          : 'M6.5 3.5L11 8l-4.5 4.5'
      }
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
    />
  </svg>
);

const CarouselControl = ({
  direction,
  label,
  onClick,
}: {
  direction: 'left' | 'right';
  label: string;
  onClick: () => void;
}) => (
  <button
    aria-label={label}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-[#232329] text-white transition-colors duration-200 hover:bg-[#2d2d35]"
    onClick={onClick}
    type="button"
  >
    <CarouselArrow direction={direction} />
  </button>
);

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

const AdvisorySlider = memo(
  ({
    sliderRootRef,
    className = '',
  }: {
    sliderRootRef: RefObject<HTMLDivElement | null>;
    className?: string;
  }) => (
    <div ref={sliderRootRef} className={`blaze-slider pt-2 ${className}`}>
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
    </div>
  ),
);

AdvisorySlider.displayName = 'AdvisorySlider';

export const AdvisoryBoardSection = ({
  showHeader = true,
  headerTitle = 'Guided by the best in patent law',
  leadingCopy = 'Leading voices in patent litigation and strategy—who know what it takes to win.',
}: AdvisoryBoardSectionProps) => {
  const desktopMeasureRef = useRef<HTMLDivElement | null>(null);
  const [showDesktopCarousel, setShowDesktopCarousel] = useState(false);

  const [mobileSliderRef, mobileSlider] = useBlazeSlider({
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

  const [desktopSliderRef, desktopSlider] = useBlazeSlider({
    all: {
      slidesToShow: 3.2,
      slideGap: '20px',
      loop: false,
      enableAutoplay: false,
    },
    '(min-width: 1200px)': {
      slidesToShow: 4.25,
      slideGap: '24px',
    },
    '(min-width: 1440px)': {
      slidesToShow: 5.1,
      slideGap: '24px',
    },
  });

  useEffect(() => {
    const measureTarget = desktopMeasureRef.current;
    if (!measureTarget) return;

    const updateDesktopMode = () => {
      const gap = window.innerWidth >= 1280 ? 24 : 20;
      const requiredWidth =
        advisors.length * DESKTOP_CARD_MIN_WIDTH + (advisors.length - 1) * gap;

      setShowDesktopCarousel(measureTarget.clientWidth < requiredWidth);
    };

    updateDesktopMode();

    const resizeObserver = new ResizeObserver(updateDesktopMode);
    resizeObserver.observe(measureTarget);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const goToPreviousMobileSlide = () => {
    const slider = mobileSlider.current;
    if (!slider) return;
    slider.prev(1);
  };

  const goToNextMobileSlide = () => {
    const slider = mobileSlider.current;
    if (!slider) return;
    slider.next(1);
  };

  const goToPreviousDesktopSlide = () => {
    const slider = desktopSlider.current;
    if (!slider) return;
    slider.prev(1);
  };

  const goToNextDesktopSlide = () => {
    const slider = desktopSlider.current;
    if (!slider) return;
    slider.next(1);
  };

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

      <div ref={desktopMeasureRef} className="hidden lg:block">
        {showDesktopCarousel ? (
          <>
            <AdvisorySlider
              className={`hidden lg:block ${DESKTOP_SLIDER_LAYOUT_CLASS}`}
              sliderRootRef={desktopSliderRef}
            />

            <div className="mt-8 flex justify-center gap-4">
              <CarouselControl
                direction="left"
                label="Previous advisors"
                onClick={goToPreviousDesktopSlide}
              />
              <CarouselControl
                direction="right"
                label="Next advisors"
                onClick={goToNextDesktopSlide}
              />
            </div>
          </>
        ) : (
          <div className="grid pt-2 lg:grid-cols-6 lg:gap-5 xl:gap-6">
            {advisors.map((advisor) => (
              <AdvisorCard key={advisor.name} advisor={advisor} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile/Tablet: Horizontal slider */}
      <div className="lg:hidden">
        <AdvisorySlider
          className={`lg:hidden ${MOBILE_SLIDER_LAYOUT_CLASS}`}
          sliderRootRef={mobileSliderRef}
        />

        <div className="mt-6 flex justify-center gap-4">
          <CarouselControl
            direction="left"
            label="Previous advisors"
            onClick={goToPreviousMobileSlide}
          />
          <CarouselControl
            direction="right"
            label="Next advisors"
            onClick={goToNextMobileSlide}
          />
        </div>
      </div>
    </section>
  );
};
