import type { Metadata } from 'next';

import { SolutionsByTypePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: '&AI for Litigation Funds | Patent Case Diligence at Scale',
  description:
    'Source patent litigation opportunities faster and run diligence with prior art search, claim charts, and portfolio-scale analysis. Build investment memos and outreach materials in hours.',
};

const valueProps = [
  {
    title: 'Fast triage',
    description: 'Screen more matters without expanding headcount.',
    icon: 'speed' as const,
  },
  {
    title: 'Consistent diligence',
    description: "Same structure across deals, fewer 'one-off' workstreams.",
    icon: 'quality' as const,
  },
  {
    title: 'Clear audit trail',
    description: 'Citations and exports that outside counsel can validate.',
    icon: 'scale' as const,
  },
];

export default function LitigationFundsPage() {
  return (
    <SolutionsByTypePage
      badge="&AI for Litigation Funds"
      description="Speed and rigor shouldn't be tradeoffs. &AI helps you move faster from first look to funded—screen more opportunities, run deeper diligence, and build conviction without cutting corners."
      faqs={[
        {
          question: 'Why does this matter for funders?',
          answer:
            'Because underwriting requires quickly evaluating legal/technical strength—and non-recourse funding models make diligence quality critical.',
        },
        {
          question: 'Do you replace outside counsel?',
          answer:
            'No—&AI speeds up diligence and work product generation so counsel time goes further and decisions happen faster.',
        },
        {
          question: 'How does &AI help with deal flow?',
          answer:
            'Use &AI to monitor and triage litigation opportunities, then enrich them with the context you need to decide whether to lean in.',
        },
      ]}
      h1="Diligence at the Speed of"
      h1Highlight="Dealflow"
      subheading="Find and underwrite the right cases efficiently."
      valueProps={valueProps}
    />
  );
}
