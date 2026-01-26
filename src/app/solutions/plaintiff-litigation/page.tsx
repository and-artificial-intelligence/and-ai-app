import type { Metadata } from 'next';

import { SolutionsByUseCasePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: 'Plaintiff-Side Patent Litigation | Infringement Mining + EOU Charts | &AI',
  description:
    'Identify infringing products faster with product documentation search, generate evidence-of-use claim charts with citations, and draft complaints and licensing materials—one plaintiff workflow.',
};

const challenges = [
  'Most plaintiff workflows start too narrow—missing potential targets',
  'Product evidence is scattered across manuals, specs, release notes, and marketing pages',
  'EoU mapping is slow and repetitive (copy, paste, cite, format, repeat)',
  'Work gets redone when you change targets or theories',
];

const workflowSteps = [
  {
    title: 'Infringement mining and detection',
    description: 'Expand the funnel beyond "known suspects." Mine for targets at scale by surfacing relevant product evidence across the web—then narrow quickly to what\'s chartable.',
    image: '/4.1.png',
  },
  {
    title: 'Product Search',
    description: 'Search the public footprint of products: manuals, spec sheets, developer docs, marketing pages, release notes, teardowns, and video. Keep what matters in one project so your evidence doesn\'t evaporate when pages change.',
    image: '/1.3.png',
  },
  {
    title: 'Evidence-of-Use (EOU) Claim Charts',
    description: 'Element-by-element mapping with pinpoint citations. Generate a first-draft EOU chart in minutes, review and control what makes it into the export, iterate quickly as targets or theories change.',
    image: '/3.1.png',
  },
  {
    title: 'Drafts',
    description: 'From evidence to filings and outreach. Turn project evidence into licensing outreach, complaints, infringement contentions, and supporting memos—without starting from blank pages each time.',
    image: '/3.2.png',
  },
];

const products = [
  {
    name: 'Infringement Detection',
    href: '/product/infringement-detection',
    description: 'Find evidence of use across products and patents.',
    image: '/4.1.png',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    description: 'Generate EOU charts with pinpoint citations.',
    image: '/3.1.png',
  },
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    description: 'Anticipate invalidity defenses with thorough prior art analysis.',
    image: '/1.1.png',
  },
];

const relatedUseCases = [
  { name: 'Defense Litigation', href: '/solutions/defense-litigation', description: 'Build stronger invalidity positions faster' },
  { name: 'Litigation Funding', href: '/solutions/litigation-funding', description: 'Evaluate case strength for funding decisions' },
  { name: 'Transactions', href: '/solutions/transactions', description: 'Accelerate IP due diligence' },
];

export default function PlaintiffLitigationPage() {
  return (
    <SolutionsByUseCasePage
      badge="Use Case"
      h1="Plaintiff-Side"
      h1Highlight="Litigation"
      subheading="Find infringers faster. Build the EOU. Draft the case."
      description="Plaintiff-side litigation is a speed game: identify the right products, assemble clean evidence, and turn it into work product your team can file and defend. &AI supports the plaintiff workflow end-to-end: Product Search → Evidence-of-Use Charts → Drafts."
      challengeTitle="Why infringement mining is hard"
      challenges={challenges}
      workflowTitle="The plaintiff workflow"
      workflowDescription="Product Search → Evidence-of-Use Charts → Drafts"
      workflowSteps={workflowSteps}
      productsTitle="Products for plaintiff litigation"
      products={products}
      relatedUseCases={relatedUseCases}
      faqs={[
        {
          question: 'What is infringement mining?',
          answer: 'Infringement mining is the process of scanning products and documentation to identify likely infringers and prioritize which targets merit full evidence-of-use charting.',
        },
        {
          question: 'What is an evidence-of-use (EOU) claim chart?',
          answer: 'An EOU claim chart maps each claim element to supporting product evidence (often in a table) to assess infringement or non-infringement.',
        },
        {
          question: 'Why does product documentation matter for plaintiff-side cases?',
          answer: 'Because the strongest early infringement theories usually rely on clear, citable disclosures in manuals, specs, developer docs, and other product materials.',
        },
      ]}
    />
  );
}
