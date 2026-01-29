import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/schema';
import { getProductsByName } from '@/common/constants/products';
import { ProductPage } from '@/module/product';

export const metadata: Metadata = {
  title: 'Patent Claim Charts (Invalidity + EOU) | &AI',
  description:
    'Generate precise patent invalidity claim charts and evidence-of-use charts, with dozens of formatting settings that make your chart exports trial-ready.',
};

const faqs = [
  {
    question: 'Can I request a free sample claim chart?',
    answer:
      "Yes—send a patent and one or more references (prior art or product materials). We'll return a first-draft export so you can validate citations, mapping quality, and formatting.",
  },
  {
    question: 'Do you support claim construction?',
    answer:
      'Yes—our charts use claim constructions generated from the as-filed application, prosecution history, and related family.',
  },
  {
    question: 'What kinds of charts can I generate?',
    answer:
      'You can generate invalidity (including §102/§103) and evidence-of-use charts. The workflow is designed for litigation-ready exports.',
  },
  {
    question: 'Do I stay in control of what gets exported?',
    answer:
      'Yes—every citation requires approval before it shows up in any exported work product.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Product', url: 'https://tryandai.com/product' },
  { name: 'Claim Charts', url: 'https://tryandai.com/product/claim-charts' },
];

const relatedProducts = getProductsByName([
  'Invalidity Analysis',
  'Infringement Detection',
  'Prior Art Search',
]);

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
        subheading="Precise claim charts in minutes, ready for you to refine"
        valueProp="Generate precise invalidity and evidence-of-use claim charts in minutes, with dozens of formatting settings that make your chart exports trial-ready."
        secondaryCta={{
          label: 'Request a free sample chart',
          href: '/request-sample-chart',
        }}
        sections={[
          {
            label: 'Claims and elements',
            title: 'Element-by-element charts with citations',
            description:
              'Charts are composed entirely of citations and produced in a trial-ready format—so all you have to do is review, edit, and export.',
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
            title: 'Informed by claim construction',
            description:
              'Each chart is informed by a detailed claim construction. Constructions are generated from the as-filed application, prosecution history, and related family.',
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
            title: 'Built for §102, §103, and §112 analysis',
            description:
              'Charts supports invalidity charting in the way litigation teams actually work.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            items: [
              '§102 charts (anticipation)',
              '§103 charts (obviousness)',
              '§112 support (written support)',
            ],
          },
          {
            label: 'Evidence of Use charts',
            title: 'Map claims to real products—fast',
            description:
              "Generate evidence-of-use charts against product materials such as specs, manuals, teardowns, screenshots, and video—then refine with search across everything you've uploaded.",
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
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
            bulletStyle: 'bullet',
            centered: true,
            items: [
              'Which elements are strongest per reference',
              'Where the gaps are',
              'Whether a §103 combination is more efficient than forcing a weak single reference',
            ],
          },
        ]}
        faqs={faqs}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
