import {
  DocumentTextIcon,
  SearchDocumentIcon,
  FileCopyIcon,
  Ar3DIcon,
  SpreadsheetIcon,
  ListIcon,
  MessageIcon,
} from '@/common/components/icon';
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
  return (
    <>
      {features.map((feature) => (
        <ItemAndSlider key={feature.tag} {...feature} />
      ))}
    </>
  );
};
