import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';

import { SubHeader } from '@/common/components/subheader';
import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

import { useBlazeSlider } from '@/tools/blaze-slider/useBlazeSlider';


export interface ItemAndSliderProps {
  tag: string;
  tagColor: BrandColor;
  title: string;
  description: string;
  items: {
    icon: ReactElement;
    title: string;
    description: string;
    imageSrc?: string;
  }[];
  singleImage?: string;
}

export const ItemAndSlider = ({
  tag,
  tagColor,
  title,
  description,
  items,
  singleImage,
}: ItemAndSliderProps) => {
  const [ref, sliderRef] = useBlazeSlider({
    all: {
      loop: true,
      enableAutoplay: true,
    },
  });

  const [activePageIndex, setActivePageIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const unsubscribe = slider.onSlide((pageIndex) => {
      setActivePageIndex(pageIndex);
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [sliderRef]);

  const goToPage = (pageIndex: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const delta = pageIndex - slider.stateIndex;
    if (delta > 0) slider.next(delta);
    else if (delta < 0) slider.prev(-delta);
  };

  const toGradientColor =
    tag === 'Discovery'
      ? 'to-feature-1'
      : tag === 'Charts'
        ? 'to-feature-2/50'
        : tag === 'Drafts'
          ? 'to-feature-3/50'
          : 'to-feature-4';

  const backgroundColor =
    tag === 'Discovery'
      ? 'bg-feature-1'
      : tag === 'Charts'
        ? 'bg-feature-2/50'
        : tag === 'Drafts'
          ? 'bg-feature-3/50'
          : 'bg-feature-4';

  const sliderBrandColorBackground =
    tagColor === BrandColor.ACCENT_BLUE_DARK
      ? '[&_button.active]:bg-brand-accent-blue-dark'
      : tagColor === BrandColor.ACCENT_PURPLE
        ? '[&_button.active]:bg-brand-accent-purple'
        : '[&_button.active]:bg-brand-primary';

  const isTagTables = tag === 'Tables';

  return (
    <div
      className={cn(
        'border-t-gray-dark/20 flex flex-col gap-8 border-t border-dashed px-4 py-12 first-of-type:border-t-0 md:px-16 md:py-16 lg:flex-row lg:px-6 xl:gap-0 xl:px-20',
      )}
    >
      <div className="flex flex-col gap-12 pt-4 pb-4 lg:min-w-[448px] lg:justify-between lg:pt-10 lg:pb-4 xl:min-w-[560px]">
        <div className="space-y-5">
          <div className="space-y-3">
            <SubHeader brand={tagColor} title={tag} />
            <h3 className="text-element-high-em font-martina xl:text-4.5xl text-4xl tracking-[-0.32px] md:tracking-[-0.36px] xl:max-w-[520px] xl:tracking-[-0.4px]">
              {title}
            </h3>
          </div>
          <p className="text-element-mid-em tracking-[-0.16px] lg:max-w-[400px] xl:max-w-[500px] xl:text-lg xl:tracking-[-0.18px]">
            {description}
          </p>
        </div>

        <div>
          {items.map((item, index) => {
            const brandColor =
              tagColor === BrandColor.ACCENT_BLUE_DARK
                ? 'border-l-brand-accent-blue-dark'
                : tagColor === BrandColor.ACCENT_PURPLE
                  ? 'border-l-brand-accent-purple'
                  : 'border-l-brand-primary';
            const selected = index === activePageIndex;
            return (
              <div
                key={item.title}
                className={cn(
                  'flex flex-col gap-2 py-1.5',
                  !isTagTables && 'border-l-2 border-l-gray-300 pl-4 md:pl-6',
                  selected && brandColor,
                )}
                onClick={() => {
                  setActivePageIndex(index);
                  goToPage(index);
                }}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-element-high-em font-medium">
                    {item.title}
                  </p>
                </div>

                <p className="text-element-mid-em">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div ref={ref} className="blaze-slider w-full">
        <div
          className={cn(
            'blaze-container border-gray-dark/10 rounded-sm border pt-4 pl-4 md:pt-8 md:pl-8',
            backgroundColor,
          )}
        >
          <div className="blaze-track-container">
            <div className="blaze-track">
              {isTagTables ? (
                <div className="relative grid h-[360px] w-full place-content-center md:h-[560px]">
                  <Image
                    fill
                    alt={`Feature ${tag}`}
                    className="object-cover object-top-left lg:object-none"
                    src={singleImage ?? ''}
                  />
                </div>
              ) : (
                items.map((item, i) => (
                  <div
                    key={i}
                    className="relative grid h-[360px] w-full place-content-center md:h-[560px]"
                  >
                    <Image
                      fill
                      alt={`Feature ${tag}-${i + 1}`}
                      className="object-cover object-top-left lg:object-none"
                      src={item.imageSrc ?? ''}
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* linear gradient */}
          <div
            className={cn(
              'pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-100%',
              toGradientColor,
            )}
          />
          {/* pagination */}
          {!isTagTables && (
            <div
              className={cn(
                'blaze-pagination absolute bottom-4 left-1/2 -translate-x-1/2',
                '[&_button]:bg-gray-300',
                sliderBrandColorBackground,
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};
