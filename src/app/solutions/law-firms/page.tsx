import type { Metadata } from 'next';

import { SolutionsByTypePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: '&AI for Law Firms | Trial-Ready Patent Work at Machine Scale',
  description:
    "From Am Law 100 to IP boutiques—discover prior art, generate claim charts, draft contentions, and pitch clients with &AI's patent litigation workspace.",
};

const valueProps = [
  {
    title: 'Reduce non-billable time',
    description:
      'Reduce non-billable business development time with Opportunities.',
    icon: 'savings' as const,
  },
  {
    title: 'Win more clients',
    description:
      'Differentiate with rapid, high quality assessments that demonstrate value.',
    icon: 'quality' as const,
  },
  {
    title: 'Scale your practice',
    description:
      'Handle more matters without proportionally growing headcount.',
    icon: 'scale' as const,
  },
];

export default function LawFirmsPage() {
  return (
    <SolutionsByTypePage
      badge="&AI for Law Firms"
      h1="From Am Law 100 to"
      h1Highlight="IP Boutiques"
      subheading="Trial-ready work product for patent litigators—fast enough for pitches, strong enough for court."
      description="Replace unbillable scanning and first drafts with a workflow that scales your best lawyers—without changing how you practice. You stay in charge of the work product. &AI accelerates the tedious loop of searching, charting, drafting, and iterating—while keeping outputs reviewable and exportable."
      valueProps={valueProps}
      faqs={[
        {
          question: 'Is &AI built for litigation-grade work product?',
          answer:
            'Yes. &AI supports litigators crafting trial-ready and is designed for litigation workflows.',
        },
        {
          question:
            'Can teams standardize outputs across partners and offices?',
          answer:
            'Yes. Templates and collaborative editing help teams keep drafts consistent while preserving attorney control.',
        },
        {
          question: 'How does &AI handle security for legal work?',
          answer:
            '&AI has enterprise-grade security and compliance built for law — including zero-data retention policies with model providers, SSO/RBAC, encryption in transit/at rest, and public-only mode.',
        },
      ]}
    />
  );
}
