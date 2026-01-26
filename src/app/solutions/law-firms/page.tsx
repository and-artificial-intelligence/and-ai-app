import type { Metadata } from 'next';

import { SolutionsByTypePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: '&AI for Law Firms | Trial-Ready Patent Work at Machine Scale',
  description:
    'From Am Law 100 to IP boutiques—discover prior art, generate claim charts, draft contentions, and pitch clients faster with &AI\'s patent litigation workspace.',
};

const useCases = [
  {
    name: 'Defense Litigation',
    href: '/solutions/defense-litigation',
    description: 'Build stronger invalidity positions and respond faster to infringement claims.',
  },
  {
    name: 'Plaintiff Litigation',
    href: '/solutions/plaintiff-litigation',
    description: 'Find evidence of infringement and build compelling claim charts at scale.',
  },
  {
    name: 'Defense Business Development',
    href: '/solutions/defense-business-development',
    description: 'Win more defense mandates with rapid invalidity assessments.',
  },
  {
    name: 'Transactions',
    href: '/solutions/transactions',
    description: 'Accelerate IP due diligence for M&A and portfolio transactions.',
  },
];

const valueProps = [
  {
    title: 'Slash write-offs',
    description: 'Reduce non-billable research time with AI-assisted prior art and claim analysis.',
    icon: 'savings' as const,
  },
  {
    title: 'Capture more billables',
    description: 'Complete more work in less time while maintaining quality standards.',
    icon: 'speed' as const,
  },
  {
    title: 'Win more pitches',
    description: 'Differentiate with rapid preliminary assessments that demonstrate value.',
    icon: 'quality' as const,
  },
  {
    title: 'Scale your practice',
    description: 'Handle more matters without proportionally growing headcount.',
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
      description="Replace unbillable scanning and first drafts with a workflow that scales your best lawyers—without changing how you practice. You stay in charge of the work product. &AI accelerates the tedious loop—search, chart, draft, iterate—while keeping outputs reviewable and exportable."
      valueProps={valueProps}
      useCasesTitle="How law firms use &AI"
      useCasesDescription="Select a use case to see how &AI fits into your workflows."
      useCases={useCases}
      faqs={[
        {
          question: 'Is &AI built for litigation-grade work product?',
          answer: 'Yes—&AI positions outputs as trial-ready and designed for litigation workflows. Generate invalidity or evidence-of-use claim charts in minutes, informed by claim construction built from the as-filed application, prosecution history, related family, and more.',
        },
        {
          question: 'Can teams standardize outputs across partners/offices?',
          answer: 'Yes—templates + collaborative editing help teams keep drafts consistent while preserving attorney control.',
        },
        {
          question: 'How does &AI handle security for legal work?',
          answer: 'Enterprise-grade security and compliance built for law, including "no training," SSO/RBAC, encryption in transit/at rest, and public-only mode.',
        },
      ]}
    />
  );
}
