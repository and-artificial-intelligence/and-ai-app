import type { Metadata } from 'next';

import { SolutionsByUseCasePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: 'Infringement Mining & Evidence-of-Use Search | Find Infringers Faster | &AI',
  description:
    'Run infringement mining at scale: search product documentation across the web, use Tables to analyze thousands of documents, and generate evidence-of-use claim charts with citations for licensing and litigation.',
};

const challenges = [
  'Too many targets to evaluate manually',
  'Product evidence scattered across manuals, specs, release notes, and marketing pages',
  'EoU mapping is slow and repetitive (copy, paste, cite, format, repeat)',
  'Work gets redone when you change targets or theories',
];

const workflowSteps = [
  {
    title: 'Define the claims/features you care about',
    description: 'Start with the patent claims and key features you want to find in the market. This focuses your search and makes downstream charting more efficient.',
    image: '/2.1.png',
  },
  {
    title: 'Product Search',
    description: 'Product documentation across the web—when it matters most. Find manuals, spec sheets, developer docs, release notes, teardowns, and other product materials. Confirm whether a feature exists and where it\'s documented.',
    image: '/1.3.png',
  },
  {
    title: 'Tables',
    description: 'An AI-powered spreadsheet for infringement mining. Screen many products quickly ("which ones implement X?"), extract structured fields (feature present, version, evidence snippet, URL), and filter down to the few targets worth full EoU charting.',
    image: '/2.2.png',
  },
  {
    title: 'Evidence-of-Use (EOU) Claim Charts',
    description: 'Turn "suspected overlap" into litigation-grade mapping. An EoU chart maps claim elements to features in an allegedly infringing product—connecting claim language to real-world evidence with pinpoint citations.',
    image: '/3.1.png',
  },
  {
    title: 'Drafts',
    description: 'From mining to outreach, licensing, and filings. Build licensing outreach packages, draft memos and internal diligence summaries, and support complaints and infringement contentions.',
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
    description: 'Search product documentation across the web.',
    image: '/1.1.png',
  },
];

const relatedUseCases = [
  { name: 'Plaintiff Litigation', href: '/solutions/plaintiff-litigation', description: 'Find infringement evidence at scale' },
  { name: 'Defense Litigation', href: '/solutions/defense-litigation', description: 'Build stronger invalidity positions faster' },
  { name: 'Transactions', href: '/solutions/transactions', description: 'Accelerate IP due diligence' },
];

export default function InfringementMiningPage() {
  return (
    <SolutionsByUseCasePage
      badge="Use Case"
      h1=""
      h1Highlight="Infringement Mining"
      subheading="Evidence-of-use search at scale—without drowning in documents."
      description="Infringement mining (often called an evidence-of-use search or patent infringement search) is the process of identifying potentially infringing products/services and collecting supporting evidence for enforcement, licensing, or diligence. &AI compresses the workflow into one system: Tables → Product Search → Evidence-of-Use Claim Charts → Drafts."
      challengeTitle="Why infringement mining is hard"
      challenges={challenges}
      workflowTitle="The infringement mining workflow"
      workflowDescription="Tables → Product Search → Evidence-of-Use Claim Charts → Drafts"
      workflowSteps={workflowSteps}
      productsTitle="Products for infringement mining"
      products={products}
      relatedUseCases={relatedUseCases}
      faqs={[
        {
          question: 'What is infringement mining?',
          answer: 'Infringement mining is the process of identifying likely infringing products/services and collecting supporting evidence—often via an evidence-of-use (EoU) search—before investing in full charting and enforcement.',
        },
        {
          question: 'What is an evidence-of-use claim chart?',
          answer: 'An EoU claim chart maps each claim element to corresponding product evidence to evaluate infringement or non-infringement.',
        },
        {
          question: 'Why is product documentation important for infringement detection?',
          answer: 'Because the cleanest early infringement theories usually come from citable sources like manuals, specs, release notes, and technical documentation.',
        },
      ]}
    />
  );
}
