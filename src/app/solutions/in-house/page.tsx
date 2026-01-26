import type { Metadata } from 'next';

import { SolutionsByTypePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: '&AI for In-House IP & Litigation Teams | Faster Decisions, Stronger Positions',
  description:
    'Litigation prep, infringement mining, and transactions—search patents/NPL/products, generate EOU charts, and draft positions faster with &AI Tables, Charts, and Drafts.',
};

const useCases = [
  {
    name: 'Defense Litigation',
    href: '/solutions/defense-litigation',
    description: 'Get to a defensible view faster: claim charts, constructions, and draft positions grounded in the record.',
  },
  {
    name: 'Plaintiff Litigation',
    href: '/solutions/plaintiff-litigation',
    description: 'Use Tables to scan portfolios and product materials at scale—then generate evidence-of-use charts for the best targets.',
  },
  {
    name: 'Transactions',
    href: '/solutions/transactions',
    description: 'Accelerate diligence by analyzing large sets of documents consistently—without sampling and without starting from scratch.',
  },
];

const valueProps = [
  {
    title: 'Litigation prep',
    description: 'Get to a defensible view faster: claim charts, constructions, and draft positions grounded in the record.',
    icon: 'speed' as const,
  },
  {
    title: 'Infringement mining',
    description: 'Scan portfolios and product materials at scale—then generate evidence-of-use charts for the best targets.',
    icon: 'scale' as const,
  },
  {
    title: 'Transactions',
    description: 'Analyze large sets of documents consistently—without sampling and without starting from scratch on every deal.',
    icon: 'savings' as const,
  },
  {
    title: 'Answers you can act on',
    description: 'What\'s asserted, what it means, what the exposure is, and what to do next.',
    icon: 'quality' as const,
  },
];

export default function InHousePage() {
  return (
    <SolutionsByTypePage
      badge="&AI for In-House"
      h1="Faster decisions across litigation,"
      h1Highlight="licensing, and deals"
      subheading="Answers you can act on—not more dashboards."
      description="In-house teams don't need more dashboards—they need answers they can act on: what's asserted, what it means, what the exposure is, and what to do next. &AI centralizes the work: search, charting, drafting, and high-volume analysis—so you can move quickly without losing rigor."
      valueProps={valueProps}
      useCasesTitle="How in-house teams use &AI"
      useCasesDescription="Select a use case to see how &AI supports your internal workflows."
      useCases={useCases}
      faqs={[
        {
          question: 'Do we need a big enablement project?',
          answer: '&AI is a collaborative workspace with templates and workflows that teams can adopt incrementally.',
        },
        {
          question: 'Can we run public-only evaluations?',
          answer: 'Yes—public-only mode is supported. &AI also supports no-training guarantees and enterprise controls (SSO/RBAC, encryption).',
        },
        {
          question: 'How does the platform work for in-house teams?',
          answer: 'Search across patents, NPL, and products. Generate evidence-of-use and invalidity claim charts in minutes. Draft memos, contentions, and strategy materials grounded in your project context.',
        },
      ]}
    />
  );
}
