import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/schema';
import { ProductPage } from '@/module/product';

export const metadata: Metadata = {
  title: 'Infringement Analysis + Infringement Mining | &AI',
  description:
    'Mine portfolios for infringement targets, search product documentation across the web, and generate evidence-of-use charts and (non)infringement analysis—at scale with &AI Tables.',
};

const faqs = [
  {
    question: 'What is "infringement mining"?',
    answer:
      'Using scalable analysis (across portfolios/products/docs) to identify the highest-likelihood infringement targets before investing time in full evidence-of-use charting.',
  },
  {
    question: 'What product sources can &AI search?',
    answer:
      '&AI Search includes current and archival product listings plus specifications, manuals, videos, and teardowns.',
  },
  {
    question: 'How do Tables help with infringement detection?',
    answer:
      'Tables lets you query thousands of documents at once and filter results to identify infringement patterns and prioritize what to chart next.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Product', url: 'https://tryandai.com/product' },
  {
    name: 'Infringement Analysis',
    url: 'https://tryandai.com/product/infringement-detection',
  },
];

const relatedProducts = [
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    image: '/3.1.png',
    description:
      'Element-by-element mapping with citations to product documentation.',
  },
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    image: '/1.1.png',
    description:
      'Search patents, NPL, and product documentation across the web.',
  },
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    image: '/2.1.png',
    description:
      'Build airtight invalidity positions with AI-assisted claim mapping.',
  },
];

export default function InfringementDetectionPage() {
  const schemas = [
    generateSoftwareApplicationSchema({
      name: 'Infringement Analysis + Infringement Mining',
      description:
        'Mine portfolios for infringement targets, search product documentation across the web, and generate evidence-of-use charts and (non)infringement analysis—at scale with &AI Tables.',
      url: 'https://tryandai.com/product/infringement-detection',
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <ProductPage
        h1="AI-Powered"
        h1Highlight="Infringement Analysis"
        subheading="Find infringers faster. Build stronger positions."
        valueProp={`&AI is a collaborative workspace for patent invalidity and infringement work—built to deliver trial-ready work product enriched by your strategic context.

Whether you're pursuing enforcement, licensing, diligence, or defense, infringement work starts the same way: map claim elements to real-world products and evidence.`}
        secondaryCta={{
          label: 'See Tables',
          href: '/product/tables',
        }}
        sections={[
          {
            label: 'Infringement mining',
            title: "Don't spot-check—scan everything",
            description:
              'Most infringement workflows fail at the front end: you only analyze the products you already suspect. &AI helps you broaden the funnel without drowning in noise by combining Product Search + Tables + evidence-of-use charts in one place.',
            type: 'bullets',
            image: '/4.1.png',
            items: [
              'Scan portfolios at scale for infringement targets',
              'Combine Product Search + Tables + claim charts',
              'Prioritize products that deserve a full chart',
            ],
          },
          {
            label: 'Product Search',
            title: 'Full internet of product documentation',
            description:
              'Search current and archival product listings, specifications, manuals, videos, and teardowns—so you can connect claim language to how products actually work in the market.',
            type: 'bullets',
            image: '/1.3.png',
            items: [
              'Gather feature evidence fast (manuals, spec sheets, release notes)',
              'Locate older versions (archival listings + historical docs)',
              'Move from "possible overlap" to "chartable mapping"',
            ],
          },
          {
            label: 'Tables',
            title: 'The AI-powered Excel sheet for infringement mining',
            description:
              '&AI Tables lets you query thousands of documents simultaneously to identify infringement patterns and prioritize the products that deserve a full chart.',
            type: 'bullets',
            image: '/2.2.png',
            items: [
              'Structured analysis: apply prompts across documents with shared context',
              'Views: slice and filter using natural language or metadata',
              'Built for portfolio screening, diligence, and triage',
            ],
          },
          {
            label: 'Evidence of Use',
            title: 'Element-by-element mapping with citations',
            description:
              'Once you identify the best targets, Charts generates evidence-of-use claim charts with citations to product documentation—so you can move from triage to litigation-grade mapping quickly.',
            type: 'bullets',
            image: '/3.1.png',
            items: [
              'Limitation-by-limitation claim charts',
              'Citations to product documentation',
              'Export to Word, Excel, or PowerPoint',
            ],
          },
          {
            title: '(Non)infringement analysis',
            description:
              'Good infringement work isn\'t just "find support." It\'s also identifying missing limitations, documenting why a feature does not satisfy the claim as construed, and preserving clean, reviewable citations.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            background: 'light',
            items: [
              'Identify missing limitations',
              'Document why features do not satisfy claims as construed',
              'Preserve clean, reviewable citations',
              'Keep claim construction context in view across workflows',
            ],
          },
        ]}
        faqs={faqs}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
