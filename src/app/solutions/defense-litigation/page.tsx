import type { Metadata } from 'next';

import { SolutionsByUseCasePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: 'Defense Patent Litigation | Prior Art + Claim Charts + Contentions | &AI',
  description:
    'Defend faster with prior art search, prosecution history + patent family analysis, Markman-ready claim construction, litigation-ready claim charts, and drafted invalidity contentions—one workflow.',
};

const workflowSteps = [
  {
    title: 'Discover prior art (fast)',
    description: 'Search patents and non-patent literature to surface invalidating references early—then iterate as constructions and theories evolve.',
    image: '/1.1.png',
  },
  {
    title: 'Prosecution History + Patent Family',
    description: 'See what was argued, what changed, and why it matters. View claim evolution, track amendments, and understand the entire patent family in one visualization.',
    image: '/2.1.png',
  },
  {
    title: 'Claim Construction (Markman-ready)',
    description: 'Define the terms, then keep every chart and argument consistent. Zero-in on key disputed terms and develop airtight definitions with intrinsic and extrinsic support.',
    image: '/2.2.png',
  },
  {
    title: 'Claim Charts',
    description: 'Litigation-ready charts in minutes, not days. Generate invalidity claim charts and compare candidate references before you commit.',
    image: '/3.1.png',
  },
  {
    title: 'Drafts',
    description: 'Draft invalidity positions faster—grounded in your record. Turn your work into §102/§103/§112 arguments, invalidity contentions, expert-report sections, and strategy memos.',
    image: '/3.2.png',
  },
];

const products = [
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    description: 'Search global patents, NPL, and product documentation.',
    image: '/1.1.png',
  },
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    description: 'Build airtight invalidity positions with AI-assisted mapping.',
    image: '/2.1.png',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    description: 'Generate detailed claim charts in minutes, not days.',
    image: '/3.1.png',
  },
];

const relatedUseCases = [
  { name: 'Plaintiff Litigation', href: '/solutions/plaintiff-litigation', description: 'Find infringement evidence at scale' },
  { name: 'Defense Business Development', href: '/solutions/defense-business-development', description: 'Win more mandates with rapid assessments' },
  { name: 'Transactions', href: '/solutions/transactions', description: 'Accelerate IP due diligence' },
];

export default function DefenseLitigationPage() {
  return (
    <SolutionsByUseCasePage
      badge="Use Case"
      h1=""
      h1Highlight="Defense Litigation"
      subheading="Build the record. Pressure-test the case. Draft faster."
      description="Defense patent litigation is won on speed + rigor: find the best prior art, understand what the patentee gave up in prosecution, control claim meaning at Markman, and turn it all into charts and contentions your team can ship. &AI brings the full defense workflow into one place."
      workflowTitle="The defense workflow"
      workflowDescription="Prior Art Search → Prosecution History + Patent Family → Claim Construction → Claim Charts → Drafts"
      workflowSteps={workflowSteps}
      productsTitle="Products for defense litigation"
      products={products}
      relatedUseCases={relatedUseCases}
      faqs={[
        {
          question: 'Why does prosecution history matter in defense litigation?',
          answer: 'The prosecution history/file wrapper is the official record of the application and the papers exchanged during examination—often revealing amendments and arguments that shape claim scope and defense strategy.',
        },
        {
          question: 'What is a patent family and why analyze it?',
          answer: 'A family groups related filings connected through priority. Extended family definitions (like INPADOC) link documents sharing at least one priority directly or indirectly, which helps you spot where scope expanded or narrowed across jurisdictions.',
        },
        {
          question: 'What evidence is used in claim construction (Markman)?',
          answer: 'Intrinsic evidence includes the claims, specification, and prosecution history; extrinsic evidence can include dictionaries, treatises, and expert testimony.',
        },
        {
          question: 'How do claim charts help with invalidity contentions?',
          answer: 'Invalidity claim charts convert theories into litigation-ready work product by mapping each limitation to evidence with pinpoint citations—making §102 (single reference) and §103 (combination) positions easier to evaluate, revise, and serve.',
        },
        {
          question: 'Where does §112 fit in a defense strategy?',
          answer: '§112 governs requirements like written description and enablement, which can be critical when a patent overreaches beyond what the specification supports—especially once claim construction clarifies the asserted scope.',
        },
      ]}
    />
  );
}
