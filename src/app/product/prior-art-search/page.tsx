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
  title: 'AI Prior Art Search Tool (Patents + NPL) | &AI',
  description:
    'Replace outside prior art search firms. Search global patents, NPL, product documentation, archived web, and clinical trials in seconds—then export evidence-ready results.',
};

const faqs = [
  {
    question: 'Does this replace a prior art search firm?',
    answer:
      'Yes. &AI is built to let teams run searches internally with faster iteration, more sources, and outputs you can immediately analyze.',
  },
  {
    question: 'What sources do you search?',
    answer:
      'Patents, non-patent literature, products, clinical trials, and archival web materials.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Product', url: 'https://tryandai.com/product' },
  {
    name: 'Prior Art Search',
    url: 'https://tryandai.com/product/prior-art-search',
  },
];

const relatedProducts = getProductsByName([
  'Invalidity Analysis',
  'Claim Charts',
  'Infringement Detection',
]);

export default function PriorArtSearchPage() {
  const schemas = [
    generateSoftwareApplicationSchema({
      name: 'AI Prior Art Search',
      description:
        'Replace outside prior art search firms. Search global patents, NPL, product documentation, archived web, and clinical trials in seconds—then export evidence-ready results.',
      url: 'https://tryandai.com/product/prior-art-search',
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
        h1Highlight="Prior Art Search"
        relatedProducts={relatedProducts}
        sections={[
          {
            label: 'Patents',
            title: 'Search 60M+ patent publications',
            description:
              'Patent applications and publications across major jurisdictions—built to iterate fast and narrow down on key references.',
            type: 'bullets',
            image: '/stylized-features/search-patent.png',
            items: [
              'US and international patents',
              'Applications and publications',
              'Multi-modal support with images and claims',
            ],
          },
          {
            label: 'Non-patent literature',
            title: 'Find invalidating art in NPL',
            description:
              'Research papers, standards, clinical trials, and more across the entire public internet.',
            type: 'bullets',
            image: '/stylized-features/search-npl.png',
            items: [
              'Academic papers and journals',
              'Technical standards',
              'US clinical trials',
              'Archived web',
            ],
          },
          {
            label: 'Products',
            title: 'Search product documentation',
            description:
              'Current and archival product listings, specs, manuals, videos, and teardowns.',
            type: 'bullets',
            image: '/stylized-features/search-product.png',
            items: [
              'Product specs and manuals',
              'Teardowns and technical docs',
              'Archived web',
            ],
          },
          {
            title: 'Replace prior art search firms without lowering the bar',
            description:
              'Outside prior art search firms cost thousands and take days to weeks. &AI prior art search gives the control to the expert, allowing fast iterations and key results delivered at a fraction of the cost.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            background: 'light',
            items: [
              'Explore patents, NPL, and product documentation faster',
              'Results delivered with robust, clear analysis',
              'An interface built for quick iteration and exploration',
            ],
          },
        ]}
        subheading="Skip the external search firm invoice—and the wait."
        valueProp={`Search for invalidating prior art, across patents, non-patent literature (NPL), and product documentation across the internet in minutes. &AI enables multimodal searches optimized for what matters most—whether isolating specific limitations or reinforcing a §103 combination.`}
      />
    </>
  );
}
