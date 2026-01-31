import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';
import { getProductsByName } from '@/common/constants/products';

import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/schema';

import { ProductPage } from '@/module/product';

export const metadata: Metadata = {
  title: 'Invalidity Analysis (102/103/112) + Claim Charts | &AI',
  description:
    'Discover prior art, generate claim charts, and draft §102, §103, and §112 arguments—grounded in claim construction and full prosecution history. Trial-ready outputs in one workflow.',
};

const faqs = [
  {
    question: 'Can I build §103 combinations with motivation to combine?',
    answer:
      'Yes. Generate drafts for multiple references, see coverage gaps early, and propose §103 combinations—charting them before you invest time polishing.',
  },
  {
    question:
      'Do you support §112 written description and enablement analysis?',
    answer:
      'Yes. &AI helps you anchor analysis in the specification, flag weak support by limitation, and draft written description and enablement narratives faster.',
  },
  {
    question: 'What deliverables do I get?',
    answer:
      'You receive invalidity claim charts with element-by-element mappings, invalidity contentions, motivation to combine narratives, and all exports in Word format ready for filings.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Product', url: 'https://tryandai.com/product' },
  {
    name: 'Invalidity Analysis',
    url: 'https://tryandai.com/product/invalidity-analysis',
  },
];

const relatedProducts = getProductsByName([
  'Prior Art Search',
  'Claim Charts',
  'Infringement Detection',
]);

export default function InvalidityAnalysisPage() {
  const schemas = [
    generateSoftwareApplicationSchema({
      name: 'Invalidity Analysis Software',
      description:
        'Discover prior art, generate claim charts, and draft §102, §103, and §112 arguments—grounded in claim construction and full prosecution history.',
      url: 'https://tryandai.com/product/invalidity-analysis',
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <ProductPage
        faqs={faqs}
        h1="Patent"
        h1Highlight="Invalidity Analysis"
        relatedProducts={relatedProducts}
        secondaryCta={{
          label: 'See Prior Art Search',
          href: '/product/prior-art-search',
        }}
        sections={[
          {
            label: 'The invalidity workflow',
            title: 'Find the art. Build the charts. Draft the arguments.',
            description:
              'Invalidity work is document- and citation-driven, and it evolves as the record develops and positions sharpen. &AI supports the core steps—reference review, limitation mapping, and theory development—so teams can revise charts and arguments efficiently without duplicating work.',
            type: 'bullets',
            image: '/stylized-features/chart-claim.png',
            items: [
              'Source, compare, and organize the strongest prior arts',
              'Map each limitation with precise, reviewable citations',
              'Develop and pressure-test §102 and §103 positions',
              'Assess §112 vulnerabilities, including written description and enablement',
              'Generate drafts for contentions and supporting materials',
            ],
          },
          {
            label: 'Claim construction',
            title: 'Define the terms. Control the case.',
            description:
              'Claim construction drives everything—invalidity, infringement, and settlement posture. Build Markman-ready constructions with a clear evidentiary record.',
            type: 'bullets',
            image: '/stylized-features/chart-construction.png',
            items: [
              'Zero in on disputed terms and generate draft definitions fast',
              'Ground each definition in intrinsic evidence from the claims, specification, and prosecution history',
              'Keep constructions live as strategy evolves—so charts, analysis, and drafts stay consistent',
            ],
          },
          {
            title: '§102. Single-reference theories with pinpoint support',
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Identify the specific limitation that controls the outcome',
              'Capture pinpoint citations—not just "close" passages',
            ],
          },
          {
            title:
              '§103. Combination suggestions and charts that evolve with strategy',
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Build limitation mappings across multiple references—side by side',
              'Surface coverage gaps and weak links early',
              'Propose and chart candidate §103 combinations before investing time in a polished theory',
            ],
          },
          {
            title: '§112. Surface vulnerabilities in the target patent',
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Ground the analysis in the specification and figures',
              'Flag thin or missing support by limitation and asserted scope',
              'Accelerate written description and enablement drafting with citation-backed narratives',
            ],
          },
        ]}
        subheading="From discovery to contentions, without switching tools."
        valueProp={`Discover prior art, generate claim charts, and draft §102, §103, and §112 arguments—built around the way litigators actually work.`}
      />
    </>
  );
}
