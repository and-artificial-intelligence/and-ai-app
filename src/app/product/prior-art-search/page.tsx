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
      'Yes. Teams use &AI to run comprehensive prior art searches in-house—often in a single afternoon. You get faster iteration, broader source coverage (patents, NPL, products, archived web), and results you can immediately chart or export.',
  },
  {
    question: 'What sources do you search?',
    answer:
      'Patents, non-patent literature, products, clinical trials, and archival web materials.',
  },
  {
    question: 'Can I search using images or figures from a patent?',
    answer:
      'Yes. Select a figure from a patent and &AI will find similar prior art across patents—useful for mechanical or design-focused claims.',
  },
  {
    question: 'What patent offices are included?',
    answer: 'US, EP, JP, WO, KR, CN, GB, DE.',
  },
  {
    question: 'What NPL sources do you include?',
    answer:
      'Anything available on the internet, including archived web pages via the Wayback Machine.',
  },
  {
    question: 'How long does a typical search take?',
    answer:
      'Most users find strong candidate references within 30–60 minutes. Compare that to 1–3 weeks from an outside search firm.',
  },
  {
    question: 'How much does this cost compared to a search firm?',
    answer:
      'Outside firms typically charge $5K–$15K per search. With &AI, search is iterative and depends on the size of the patent, the number of results requested, and other factors. Searches typically cost around a few hundred dollars worth of credits ($100-$300).',
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
            title:
              'Search 60M+ patent publications without leaving your workspace',
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
            title: 'Find the NPL your opponents will miss',
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
            title: "Surface product evidence others can't find",
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
            title: 'Search firm quality. In-house speed and control.',
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
        valueProp={`Find invalidating prior art across 60M+ patents, NPL, and product documentation—in minutes, not weeks. Search by specific limitations or images to build your §102 or §103 position faster.`}
      />
    </>
  );
}
