import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/schema';
import { ProductPage } from '@/module/product';

export const metadata: Metadata = {
  title: 'Patent Claim Charts (Invalidity + EOU) | &AI',
  description:
    'Generate litigation-ready invalidity and evidence-of-use claim charts in minutes, informed by claim construction and prosecution history—with citations you control. Request a free sample chart.',
};

const faqs = [
  {
    question: 'Can I request a free sample claim chart?',
    answer:
      "Yes—send a patent and one or more references (prior art or product materials). We'll return a first-draft export so you can validate citations, mapping quality, and formatting.",
  },
  {
    question: 'Do you support claim construction and prosecution history?',
    answer:
      'Yes—Charts uses claim constructions generated from the as-filed application, prosecution history, related family, and more.',
  },
  {
    question: 'What kinds of charts can I generate?',
    answer:
      'Invalidity (including §102/§103/§112 support) and evidence-of-use charts are core, and the workflow is designed for litigation-ready exports.',
  },
  {
    question: 'Do I stay in control of what gets exported?',
    answer:
      'Yes—Charts is built for review, editing, and export. You control what goes out.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Product', url: 'https://tryandai.com/product' },
  { name: 'Claim Charts', url: 'https://tryandai.com/product/claim-charts' },
];

const relatedProducts = [
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    image: '/2.1.png',
    description: 'Build stronger invalidity arguments at scale.',
  },
  {
    name: 'Infringement Detection',
    href: '/product/infringement-detection',
    image: '/4.1.png',
    description: 'Find evidence of use faster with AI-powered analysis.',
  },
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    image: '/1.1.png',
    description:
      'Discover relevant prior art across patents, NPL, and products.',
  },
];

export default function ClaimChartsPage() {
  const schemas = [
    generateSoftwareApplicationSchema({
      name: 'Patent Claim Charts',
      description:
        'Generate litigation-ready invalidity and evidence-of-use claim charts in minutes, informed by claim construction and prosecution history.',
      url: 'https://tryandai.com/product/claim-charts',
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <ProductPage
        h1="Litigation-Ready"
        h1Highlight="Claim Charts"
        subheading="Win cases faster with trial-ready analysis."
        valueProp={`Claim charting follows a familiar routine: pull the patent, pull the prior art or product materials, open Word, build a table. Copy each limitation into the left column. Hunt for evidence. Paste. Format citations. Repeat. And when litigation strategy changes midstream, too much of that work starts over.

&AI built Charts to shorten that loop—without taking control away from you. Generate precise invalidity or evidence-of-use claim charts in minutes instead of days.`}
        secondaryCta={{
          label: 'Request a free sample chart',
          href: '/request-sample-chart',
        }}
        sections={[
          {
            label: 'Claims and elements',
            title: 'Element-by-element charts with citations',
            description:
              'Charts produces element-by-element claim charts with citations to prior art and product documentation. Charts are composed entirely of citations and produced in a trial-ready format—so all you have to do is review, edit, and export.',
            type: 'bullets',
            image: '/2.1.png',
            items: [
              'Limitation-by-limitation mapping',
              'Pinpoint citations to source material',
              'Trial-ready formatting',
            ],
          },
          {
            label: 'Claim construction',
            title: 'Use construction from day one',
            description:
              'Charts is informed by a detailed claim construction. Constructions are generated from the as-filed application, prosecution history, related family, and more.',
            type: 'bullets',
            image: '/2.2.png',
            items: [
              'Tighten disputed terms before mapping evidence',
              'Preserve consistency across drafts and exports',
              'Keep the record in view as positions evolve',
            ],
          },
          {
            label: 'Invalidity charts',
            title: 'Built for §102, §103, and §112 workflows',
            description:
              'Charts supports invalidity charting in the way litigation teams actually work.',
            type: 'bullets',
            items: [
              '§102 charts (anticipation / single-reference mapping)',
              '§103 charts (combination-ready mapping as theories develop)',
              '§112 support (spec grounding and clarity gaps where relevant)',
            ],
          },
          {
            label: 'Evidence of Use charts',
            title: 'Map claims to real products—fast',
            description:
              "Generate evidence-of-use charts against product materials such as specs, manuals, teardowns, screenshots, and video—then refine with search across everything you've uploaded.",
            type: 'bullets',
            items: [
              'Product specs and manuals',
              'Teardowns and screenshots',
              'Video and marketing materials',
            ],
          },
          {
            label: 'Compare references',
            title: 'Pick the strongest reference before you polish',
            description:
              'Instead of committing to one reference and discovering gaps late, create first-draft charts for multiple candidates and quickly see which elements are strongest.',
            type: 'bullets',
            items: [
              'Which elements are strongest per reference',
              'Where the gaps are',
              'Whether a §103 combination is more efficient than forcing a weak single reference',
            ],
          },
          {
            title: 'Quality you can measure',
            description:
              "Charts are designed to be usable on the first pass. Over thousands of charts produced on &AI, the first pass is reported as 89% similar to what's ultimately exported for litigation.",
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            background: 'light',
            items: [
              'First-pass accuracy: 89% similarity to final export',
              'Designed for expert review and iteration',
              'Full audit trails for defensibility',
            ],
          },
        ]}
        faqs={faqs}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
