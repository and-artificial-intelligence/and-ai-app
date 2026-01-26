import type { Metadata } from 'next';

import { SolutionsByTypePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: '&AI for Litigation Funds | Discover and Evaluate Patent Opportunities at Scale',
  description:
    'Source patent litigation opportunities faster and run diligence with prior art search, claim charts, and portfolio-scale analysis. Build investment memos and outreach materials in hours.',
};

const useCases = [
  {
    name: 'Litigation Funding',
    href: '/solutions/litigation-funding',
    description: 'Evaluate patent strength and infringement evidence for funding decisions.',
  },
  {
    name: 'Plaintiff Litigation',
    href: '/solutions/plaintiff-litigation',
    description: 'Support portfolio companies with infringement analysis and claim charts.',
  },
  {
    name: 'Defense Litigation',
    href: '/solutions/defense-litigation',
    description: 'Assess invalidity risk for defense-side funding opportunities.',
  },
];

const valueProps = [
  {
    title: 'Fast triage',
    description: 'Screen more matters without expanding headcount.',
    icon: 'speed' as const,
  },
  {
    title: 'Consistent diligence',
    description: 'Same structure across deals, fewer "one-off" workstreams.',
    icon: 'quality' as const,
  },
  {
    title: 'Clear audit trail',
    description: 'Citations and exports that outside counsel can validate.',
    icon: 'scale' as const,
  },
  {
    title: 'Source better deals',
    description: 'Monitor and triage litigation opportunities, then enrich with context.',
    icon: 'savings' as const,
  },
];

export default function LitigationFundsPage() {
  return (
    <SolutionsByTypePage
      badge="&AI for Litigation Funds"
      h1="Discover opportunities"
      h1Highlight="at scale"
      subheading="Find and underwrite the right cases efficiently."
      description="Litigation finance is built on one thing: finding and underwriting the right cases efficiently. &AI helps you source more opportunities and evaluate them faster—without sacrificing rigor. Many funders provide capital on a non-recourse basis and evaluate merits, damages, and collectability before investing."
      valueProps={valueProps}
      useCasesTitle="How litigation funds use &AI"
      useCasesDescription="Select a use case to see how &AI supports your investment process."
      useCases={useCases}
      faqs={[
        {
          question: 'Why does this matter for funders?',
          answer: 'Because underwriting requires quickly evaluating legal/technical strength—and non-recourse funding models make diligence quality critical.',
        },
        {
          question: 'Do you replace outside counsel?',
          answer: 'No—&AI speeds up diligence and work product generation so counsel time goes further and decisions happen faster.',
        },
        {
          question: 'How does &AI help with deal flow?',
          answer: 'Use &AI to monitor and triage litigation opportunities, then enrich them with the context you need to decide whether to lean in.',
        },
      ]}
    />
  );
}
