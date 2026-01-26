import type { Metadata } from 'next';

import { SolutionsByUseCasePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: 'Transactions | Patent & IP Due Diligence at Scale | &AI',
  description:
    'Run faster IP diligence for M&A and licensing: query thousands of documents with Tables, search product documentation across the web, and pressure-test patents with prior art search—one workflow.',
};

const challenges = [
  'IP diligence can make—or break—the deal',
  'Teams need to validate ownership, assess validity/enforceability, and evaluate infringement risk before signing',
  'When the target\'s value is IP-heavy, the diligence burden increases',
  'Missing key risks can have significant financial consequences post-close',
];

const workflowSteps = [
  {
    title: 'Load the corpus',
    description: 'Portfolio exports, key agreements, diligence binders—get everything into one place for consistent analysis.',
    image: '/2.2.png',
  },
  {
    title: 'Tables triage',
    description: 'Query thousands of documents simultaneously—like an AI-powered Excel sheet. Identify high-value assets + red flags fast. Portfolio triage, red-flag screening, consistency checks, and "show me the exceptions" filtering.',
    image: '/2.1.png',
  },
  {
    title: 'Product Search',
    description: 'Validate product reality with real documentation. Confirm whether features exist (and where they\'re documented), assess product-to-claim fit for key assets, and reduce "unknown unknowns" before signing.',
    image: '/1.3.png',
  },
  {
    title: 'Prior Art Search',
    description: 'Pressure-test the deal thesis on novelty and competitive landscape. Prior art searching across patents, NPL, and competitor products to assess the state of the art—because validity risk can materially change valuation.',
    image: '/1.1.png',
  },
  {
    title: 'Shareable outputs',
    description: 'Structured findings your deal team can act on. Export diligence summaries, risk assessments, and supporting evidence for deal documentation.',
    image: '/3.2.png',
  },
];

const products = [
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    description: 'Pressure-test patents on novelty and competitive landscape.',
    image: '/1.1.png',
  },
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    description: 'Identify validity risks in target patents.',
    image: '/2.1.png',
  },
  {
    name: 'Infringement Detection',
    href: '/product/infringement-detection',
    description: 'Evaluate enforcement and licensing potential.',
    image: '/4.1.png',
  },
];

const relatedUseCases = [
  { name: 'Defense Litigation', href: '/solutions/defense-litigation', description: 'Build stronger invalidity positions faster' },
  { name: 'Plaintiff Litigation', href: '/solutions/plaintiff-litigation', description: 'Find infringement evidence at scale' },
  { name: 'Litigation Funding', href: '/solutions/litigation-funding', description: 'Evaluate case strength for funding decisions' },
];

export default function TransactionsPage() {
  return (
    <SolutionsByUseCasePage
      badge="Use Case"
      h1=""
      h1Highlight="Transactions"
      subheading="Faster IP diligence for M&A, licensing, and portfolio deals."
      description="In modern transactions, IP diligence can make—or break—the deal. Teams need to validate ownership, assess validity/enforceability, and evaluate infringement risk before signing or closing. &AI helps you do that work faster and more consistently."
      challengeTitle="What transaction-ready diligence actually requires"
      challenges={challenges}
      workflowTitle="The transaction workflow"
      workflowDescription="Tables → Product Search → Prior Art Search → Shareable outputs"
      workflowSteps={workflowSteps}
      productsTitle="Products for transactions"
      products={products}
      relatedUseCases={relatedUseCases}
      faqs={[
        {
          question: 'What is patent/IP due diligence in M&A?',
          answer: 'It\'s the process of evaluating IP risks and value—commonly including ownership analysis, validity/enforceability assessment, and infringement risk evaluation—before closing.',
        },
        {
          question: 'Why does patent due diligence matter in transactions?',
          answer: 'Overlooking patent diligence can create legal and financial consequences after the deal, especially in tech-centric acquisitions.',
        },
        {
          question: 'How do Tables help with IP diligence?',
          answer: 'Tables are designed to query large document sets and return structured answers with reasoning—useful for portfolio triage and consistent screening at scale.',
        },
        {
          question: 'Why include product documentation in transaction diligence?',
          answer: 'Because product evidence often determines whether key patents map to real-world offerings and whether competitive features create exposure—critical inputs to deal valuation and risk.',
        },
      ]}
    />
  );
}
