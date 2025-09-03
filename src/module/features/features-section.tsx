'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

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
    tag: 'Discovery',
    tagColor: BrandColor.PRIMARY,
    title: 'Find what others miss. Nothing is out of reach.',
    description:
      'Case-aware search by text, figures, or biologics with claim-limitation attribution. Global coverage. Steerable and iterative',
    items: [
      {
        icon: <SearchDocumentIcon />,
        title: 'Patents',
        description:
          'Applications and publications across major jurisdictions and languages.',
        imageSrc: '/feature-1-1.png',
      },
      {
        icon: <FileCopyIcon />,
        title: 'Non-Patent Literature',
        description:
          'Research papers, standards, clinical trials, and more across the internet.',
        imageSrc: '/feature-1-1.png',
      },
      {
        icon: <Ar3DIcon />,
        title: 'Products',
        description:
          'Current and archival product listings, specs, manuals, and teardowns.',
        imageSrc: '/feature-1-1.png',
      },
    ],
  },
  {
    tag: 'Charts',
    tagColor: BrandColor.ACCENT_BLUE_DARK,
    title: 'Work product ready for court in minutes, not hours.',
    description:
      'Built on your context, strategy, and goals. Instant drafts to fully formatted exports.',
    items: [
      {
        icon: <SpreadsheetIcon />,
        title: 'Claims and features',
        description:
          'Reasoned citations to key disclosures for invalidity, infringement, and freedom-to-operate. ',
        imageSrc: '/feature-1-1.png',
      },
      {
        icon: <ListIcon />,
        title: 'Construction',
        description:
          'Term-by-term constructions drawn from the prosecution history and family.',
        imageSrc: '/feature-1-1.png',
      },
    ],
  },
  {
    tag: 'Drafts',
    tagColor: BrandColor.ACCENT_PURPLE,
    title: 'Create any document. Fast, consistent, court-ready.',
    description:
      'Using your case record, draft and edit anything from invalidity contentions to a litigation pitch deck.',
    items: [
      {
        icon: <DocumentTextIcon />,
        title: 'Template',
        description:
          'Fully formatted examples with variables and generation blocks for on-the-fly drafting.',
        imageSrc: '/feature-1-1.png',
      },
      {
        icon: <MessageIcon />,
        title: 'Editor',
        description:
          'A workspace to collaborate with colleagues – and Andy – on a single draft.',
        imageSrc: '/feature-1-1.png',
      },
    ],
  },
  {
    tag: 'Tables',
    tagColor: BrandColor.PRIMARY,
    title: 'Analysis at previously impossible scale.',
    description:
      'Ask questions across thousands of documents at once, grounded by web search and deep reasoning.',
    items: [
      {
        icon: <SearchDocumentIcon />,
        title: 'Structured Analysis',
        description:
          'Prompt each document with shared context to produce structured or free-text outputs.',
      },
      {
        icon: <DocumentTextIcon />,
        title: 'Views',
        description:
          'Slice the table by any natural-language or metadata filter. ',
      },
    ],
    singleImage: '/feature-1-1.png',
  },
];

export const FeaturesSection = () => {
  const [tabsVisible, setTabsVisible] = useState(false);
  const [activeTag, setActiveTag] = useState<string>('Discovery');
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  const isMd = useMediaQuery('(min-width: 768px)');

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
      <div className="bg-background-lighter shadow-gray-dark/10 mx-auto w-full rounded-xs border border-gray-300 shadow xl:max-w-[1376px]">
        <div className="flex items-center justify-between px-6 pt-6 md:px-16 md:pt-10 lg:px-6 xl:px-18">
          <p className="text-sm font-medium text-gray-500">FEATURES</p>
          <p className="text-sm font-medium text-gray-500">SECTION 2 OF 4</p>
          <p className="hidden text-sm font-medium text-gray-500 md:block">
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
          <Tab size={isMd ? 'md' : 'sm'}>
            {features.map((f) => (
              <Tab.Button
                key={f.tag}
                isActive={activeTag === f.tag}
                size={isMd ? 'md' : 'sm'}
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
