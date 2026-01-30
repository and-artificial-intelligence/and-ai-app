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
  title: 'Infringement Analysis + Infringement Mining | &AI',
  description:
    'Mine portfolios for infringement targets, search product documentation across the web, and generate evidence-of-use charts and (non)infringement analysis—at scale with &AI Tables.',
};

const faqs = [
  {
    question: 'What is infringement mining?',
    answer:
      'Using scalable analysis across portfolios, products, and documentation to identify the highest-likelihood infringement targets before investing time in full evidence-of-use charting.',
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

const relatedProducts = getProductsByName([
  'Claim Charts',
  'Prior Art Search',
  'Invalidity Analysis',
]);

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
        faqs={faqs}
        h1="AI-Powered"
        h1Highlight="Infringement Analysis"
        relatedProducts={relatedProducts}
        sections={[]}
        subheading="Find infringers faster. Build stronger positions."
        valueProp={`Scan portfolios at scale, search the full internet of product documentation, and build litigation-grade evidence-of-use charts—all in one place.`}
      />
    </>
  );
}
