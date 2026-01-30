import type { Metadata } from 'next';

import { SolutionsByTypePage } from '@/module/solutions';

export const metadata: Metadata = {
  title:
    '&AI for In-House IP & Litigation Teams | Faster Decisions, Stronger Positions',
  description:
    'Litigation prep, infringement mining, and transactions—search patents/NPL/products, generate EOU charts, and draft positions faster with &AI Tables, Charts, and Drafts.',
};

const valueProps = [
  {
    title: 'Litigation prep',
    description:
      'Get to a defensible view faster: claim charts, constructions, and draft positions grounded in the record.',
    icon: 'speed' as const,
  },
  {
    title: 'Infringement mining',
    description:
      'Scan portfolios and product materials at scale, then generate evidence-of-use charts for the best targets.',
    icon: 'scale' as const,
  },
  {
    title: 'Transactions',
    description:
      'Analyze large sets of documents consistently, without sampling and without starting from scratch on every deal.',
    icon: 'savings' as const,
  },
];

export default function InHousePage() {
  return (
    <SolutionsByTypePage
      badge="&AI for In-House"
      description=" Whether you're responding to an assertion, evaluating a portfolio, or prepping for a deal, &AI gives in-house IP teams the search, charting, and drafting tools to build your position quickly—without sacrificing rigor."
      faqs={[
        {
          question: 'How does the platform work for in-house teams?',
          answer:
            'Search across patents, NPL, and products. Generate evidence-of-use and invalidity claim charts in minutes. Draft memos, contentions, and strategy materials grounded in your project context.',
        },
      ]}
      h1="Monetize your portfolio. Prep your defense.
"
      h1Highlight="Faster."
      subheading="Whether you're asserting or defending, get to evidence-backed positions quickly and cost-effectively."
      valueProps={valueProps}
    />
  );
}
