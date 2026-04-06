'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo, RefObject, useEffect, useState } from 'react';

import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';
import { advisors, type Advisor } from '@/module/advisory-board/advisors';

import { useBlazeSlider } from '@/tools/blaze-slider/useBlazeSlider';

const ADVISORY_SLIDER_LAYOUT_CLASS =
  '[--slides-to-show:1] [--slide-gap:16px] min-[480px]:[--slides-to-show:2] min-[480px]:[--slide-gap:20px] md:[--slides-to-show:3] md:[--slide-gap:24px] min-[880px]:[--slides-to-show:4] min-[1100px]:[--slides-to-show:5]';
const AUTO_SCROLL_INTERVAL_MS = 2000;

const getVisibleAdvisors = (windowWidth: number) =>
  windowWidth >= 1100
    ? 5
    : windowWidth >= 880
      ? 4
      : windowWidth >= 768
        ? 3
        : windowWidth >= 480
          ? 2
          : 1;
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
    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#31343b] bg-[#232329] text-white transition-colors duration-200 hover:bg-[#2d2d35]"
    type="button"
    onClick={onClick}
  >
    <CarouselArrow direction={direction} />
  </button>
);

const AdvisorCard = ({ advisor }: { advisor: Advisor }) => (
  <Link
    className="group mx-auto flex w-full max-w-[17rem] flex-col items-center transition-transform duration-300 hover:-translate-y-2 min-[480px]:max-w-none"
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
  const [showControls, setShowControls] = useState(false);
  const [advisorySliderRef, advisorySlider] = useBlazeSlider({
    all: {
      slidesToShow: 1,
      slideGap: '16px',
      loop: true,
      enableAutoplay: false,
      transitionDuration: 600,
    },
    '(min-width: 480px)': {
      slidesToShow: 2,
      slideGap: '20px',
    },
    '(min-width: 768px)': {
      slidesToShow: 3,
      slideGap: '24px',
    },
    '(min-width: 880px)': {
      slidesToShow: 4,
    },
    '(min-width: 1100px)': {
      slidesToShow: 5,
    },
  });

  useEffect(() => {
    const updateOverflowState = () => {
      setShowControls(advisors.length > getVisibleAdvisors(window.innerWidth));
    };

    updateOverflowState();
    window.addEventListener('resize', updateOverflowState);

    return () => {
      window.removeEventListener('resize', updateOverflowState);
    };
  }, []);

  useEffect(() => {
    if (!showControls) return;

    const intervalId = window.setInterval(() => {
      advisorySlider.current?.next(1);
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [advisorySlider, showControls]);

  const goToPreviousSlide = () => {
    const slider = advisorySlider.current;
    if (!slider) return;
    slider.prev(1);
  };

  const goToNextSlide = () => {
    const slider = advisorySlider.current;
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

      <AdvisorySlider
        className={ADVISORY_SLIDER_LAYOUT_CLASS}
        sliderRootRef={advisorySliderRef}
      />

      {showControls && (
        <div className="mt-6 flex justify-center gap-4 md:mt-8">
          <CarouselControl
            direction="left"
            label="Previous advisors"
            onClick={goToPreviousSlide}
          />
          <CarouselControl
            direction="right"
            label="Next advisors"
            onClick={goToNextSlide}
          />
        </div>
      )}
    </section>
  );
};
