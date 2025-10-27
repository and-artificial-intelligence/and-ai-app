'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

import {
  DocumentTextIcon,
  SearchDocumentIcon,
  FileCopyIcon,
  Ar3DIcon,
  SpreadsheetIcon,
  ListIcon,
  MessageIcon,
} from '@/common/components/icon';
import Tab from '@/common/components/tab';
import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

import {
  ItemAndSlider,
  ItemAndSliderProps,
} from './components/item-and-slider';

const features: ItemAndSliderProps[] = [
  {
    tag: 'Search',
    tagColor: BrandColor.PRIMARY,
    title: 'Find what your opponents miss.',
    description:
      'Search patent documents, non-patent literature, and products, in real time, from all over the world.',
    items: [
      {
        icon: <SearchDocumentIcon />,
        title: 'Patents',
        description:
          'Patent applications and publications from major jurisdictions',
        imageSrc: '/1.1.png',
      },
      {
        icon: <FileCopyIcon />,
        title: 'Non-patent literature',
        description:
          'Research papers, standards, clinical trials, and more across the internet',
        imageSrc: '/1.2.png',
      },
      {
        icon: <Ar3DIcon />,
        title: 'Products',
        description:
          'Current and archival product listings, specifications, manuals, videos, and teardowns',
        imageSrc: '/1.3.png',
      },
    ],
  },
  {
    tag: 'Charts',
    tagColor: BrandColor.ACCENT_BLUE_DARK,
    title: 'Win cases faster with trial-ready analysis.',
    description:
      'Generate precise invalidity or evidence-of-use claim charts in minutes instead of days.',
    items: [
      {
        icon: <SpreadsheetIcon />,
        title: 'Claims and elements',
        description:
          'Element-by-element claim charts with citations to prior art and product documentation',
        imageSrc: '/2.1.png',
      },
      {
        icon: <ListIcon />,
        title: 'Claim construction',
        description:
          'Claim constructions generated from the as-filed application, prosecution history, related family, and more',
        imageSrc: '/2.2.png',
      },
    ],
  },
  {
    tag: 'Drafts',
    tagColor: BrandColor.ACCENT_PURPLE,
    title: 'Pitch more clients profitably.',
    description:
      'Draft invalidity contentions, expert reports, and pitch materials grounded in your case. Make unbillable work economical.',
    items: [
      {
        icon: <DocumentTextIcon />,
        title: 'Templates',
        description:
          'Pre-formatted templates with smart variables and generation blocks for flexible, on-demand drafting',
        imageSrc: '/3.1.png',
      },
      {
        icon: <MessageIcon />,
        title: 'Editor',
        description:
          'Collaborative workspace where your team and AI refine documents together in real time',
        imageSrc: '/3.2.png',
      },
    ],
  },
  {
    tag: 'Tables',
    tagColor: BrandColor.PRIMARY,
    title: 'Discover opportunities worth pursuing.',
    description:
      'Query thousands of documents simultaneously to identify litigation opportunities and infringement patterns.',
    items: [
      {
        icon: <SearchDocumentIcon />,
        title: 'Structured analysis',
        description:
          'Apply prompts to each document with shared context to extract structured data and answer questions',
      },
      {
        icon: <DocumentTextIcon />,
        title: 'Views',
        description:
          'Slice and filter tables using natural language or metadata to surface exactly what you need',
      },
    ],
    singleImage: '/4.1.png',
  },
];

export const FeaturesSection = () => {
  const [tabsVisible, setTabsVisible] = useState(false);
  const [activeTag, setActiveTag] = useState<string>('Search');
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  const tagIds = useMemo(
    () =>
      features.reduce<Record<string, string>>((acc, f) => {
        acc[f.tag] = `feature-${f.tag.toLowerCase()}`;
        return acc;
      }, {}),
    [],
  );

  useEffect(() => {
    const nodes = features
      .map((f) => document.getElementById(tagIds[f.tag]))
      .filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        const onScreen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setTabsVisible(onScreen.length > 0);
        if (isAutoScrolling) return;
        if (onScreen[0]) {
          const id = onScreen[0].target.id;
          const match = Object.entries(tagIds).find(([, v]) => v === id);
          if (match) setActiveTag(match[0]);
        }
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.55, 0.75],
        rootMargin: '-20% 0px -60% 0px',
      },
    );

    nodes.forEach((n) => {
      spy.observe(n);
    });
    return () => spy.disconnect();
  }, [tagIds, isAutoScrolling]);

  const handleTabClick = (tag: string) => {
    const id = tagIds[tag];
    const target = document.getElementById(id);
    if (!target) return;
    setIsAutoScrolling(true);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveTag(tag);
    setTimeout(() => {
      setIsAutoScrolling(false);
    }, 800);
  };

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto w-full px-4 py-12 md:px-6 md:py-16 xl:px-8"
      id="features"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className={cn(
            'relative h-full w-full',
            '[background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:20px_20px,20px_20px] [background-position:0_0,0_0] [background-repeat:repeat,repeat]',
            '[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)] [mask-mode:alpha] [mask-repeat:no-repeat] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)] [-webkit-mask-repeat:no-repeat]',
          )}
        />
      </div>
      <div className="bg-background-lighter shadow-gray-dark/10 relative z-10 mx-auto w-full rounded-xs border border-gray-300 shadow xl:max-w-[1376px]">
        <div className="flex items-center justify-between px-6 pt-6 md:px-16 md:pt-10 lg:px-6 xl:px-18">
          <p className="font-mono text-sm font-medium text-gray-500">
            FEATURES
          </p>
          <p className="font-mono text-sm font-medium text-gray-500">
            SECTION 2 OF 4
          </p>
          <p className="hidden font-mono text-sm font-medium text-gray-500 md:block">
            US 6,237,565 B1
          </p>
        </div>
        {/* Tabs */}
        <div
          className={cn(
            'z-[98] mx-auto w-fit transition-all duration-500 ease-out',
            tabsVisible
              ? 'fixed top-20 left-1/2 -translate-x-1/2 translate-y-0 opacity-100 xl:top-24'
              : 'pointer-events-none fixed top-20 left-1/2 -translate-x-1/2 -translate-y-2 opacity-0 xl:top-24',
          )}
        >
          <Tab size="responsive">
            {features.map((f) => (
              <Tab.Button
                key={f.tag}
                isActive={activeTag === f.tag}
                size="responsive"
                onClick={() => handleTabClick(f.tag)}
              >
                {f.tag}
              </Tab.Button>
            ))}
          </Tab>
        </div>
        {features.map((feature, index) => (
          <div
            key={feature.tag}
            className="scroll-mt-24 md:scroll-mt-28"
            data-feature-tag={feature.tag}
            id={tagIds[feature.tag]}
          >
            <ItemAndSlider index={index} {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};
