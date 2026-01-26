import type { Metadata } from 'next';

import { SolutionsByUseCasePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: 'Litigation Funding | Source and Underwrite Patent Cases Faster | &AI',
  description:
    'Discover patent litigation opportunities at scale and accelerate underwriting: prior art + claim charts + product evidence + structured diligence in one workflow. Built for non-recourse litigation finance.',
};

const challenges = [
  'Sourcing better matters requires monitoring at scale',
  'Underwriting requires quickly evaluating legal merits, expected duration, damages, and collectability',
  'Non-recourse funding models make diligence quality critical',
  'Deal flow is limited by diligence capacity—not capital',
];

const workflowSteps = [
  {
    title: 'Opportunities',
    description: 'A feed designed for "is this worth funding?" Personalized, real-time feed of new filings and litigation signals—built to help teams surface pitch-worthy matters quickly and route them to the right reviewer.',
    image: '/feature-2-1.png',
  },
  {
    title: 'Tables',
    description: 'Portfolio-scale screening before you spend hours charting. Analyze large sets of documents consistently—screen complaints, exhibits, and diligence binders at scale, extract structured fields, and filter to the highest-signal matters.',
    image: '/2.2.png',
  },
  {
    title: 'Prior Art Search',
    description: 'Pressure-test validity early. A lot of underwriting time goes into answering: is this patent strong enough to carry the case? Move quickly from "interesting" to "investable" by accelerating prior art discovery.',
    image: '/1.1.png',
  },
  {
    title: 'Product Search',
    description: 'Validate infringement evidence with real product materials. Diligence often depends on what\'s publicly documented: manuals, specs, release notes, developer docs, teardowns, and video.',
    image: '/1.3.png',
  },
  {
    title: 'Claim Charts',
    description: 'Litigation-ready mapping with citations. Draft invalidity charts (single reference and combinations) and evidence-of-use charts grounded in product evidence.',
    image: '/3.1.png',
  },
  {
    title: 'Drafts',
    description: 'Investment memos and diligence summaries—done faster. Underwriting memo sections (merits/risks, timelines, damages frame), diligence summaries for IC review, and outreach materials.',
    image: '/3.2.png',
  },
];

const products = [
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    description: 'Pressure-test validity with thorough prior art analysis.',
    image: '/1.1.png',
  },
  {
    name: 'Infringement Detection',
    href: '/product/infringement-detection',
    description: 'Validate infringement evidence across target products.',
    image: '/4.1.png',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    description: 'Litigation-ready mapping for diligence work product.',
    image: '/3.1.png',
  },
];

const relatedUseCases = [
  { name: 'Plaintiff Litigation', href: '/solutions/plaintiff-litigation', description: 'Find infringement evidence at scale' },
  { name: 'Defense Litigation', href: '/solutions/defense-litigation', description: 'Build stronger invalidity positions faster' },
  { name: 'Transactions', href: '/solutions/transactions', description: 'Accelerate IP due diligence' },
];

export default function LitigationFundingPage() {
  return (
    <SolutionsByUseCasePage
      badge="Use Case"
      h1=""
      h1Highlight="Litigation Funding"
      subheading="Discover opportunities at scale. Underwrite faster. Move first."
      description="Litigation finance is typically non-recourse—funders get repaid only from case proceeds, and if the case loses, repayment is generally not owed. That makes diligence everything: the best funds win by sourcing better matters and underwriting faster without losing rigor."
      challengeTitle="The underwriting challenge"
      challenges={challenges}
      workflowTitle="The funding workflow"
      workflowDescription="Opportunities → Tables → Prior Art Search / Product Search → Claim Charts → Drafts"
      workflowSteps={workflowSteps}
      productsTitle="Products for litigation funding"
      products={products}
      outcomes={[
        { metric: 'More', description: 'Opportunities reviewed without adding headcount' },
        { metric: 'Same', description: 'Diligence quality, standardized across deals' },
        { metric: 'Clear', description: 'Audit trail with citations and exports' },
      ]}
      relatedUseCases={relatedUseCases}
      faqs={[
        {
          question: 'What is litigation funding (litigation finance)?',
          answer: 'Litigation funding is typically non-recourse financing where repayment comes from case proceeds (and if the case loses, repayment is generally not owed).',
        },
        {
          question: 'What do litigation funders look for in diligence?',
          answer: 'Common diligence focus areas include legal merits, expected duration, damages, and collectability.',
        },
        {
          question: 'How does &AI help underwrite patent cases?',
          answer: '&AI speeds up the work that underpins underwriting: prior art discovery, product evidence collection, claim charts with citations, and structured portfolio screening—then turns it into exportable diligence drafts.',
        },
      ]}
    />
  );
}
