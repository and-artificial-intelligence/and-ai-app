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
  title: 'AI Prior Art Search Tool (Patents + NPL) | &AI',
  description:
    'Replace outside prior art search firms. Search global patents, NPL, product documentation, archived web, and clinical trials in seconds—then export evidence-ready results.',
};

const faqs = [
  {
    question: 'Does this replace a prior art search firm?',
    answer:
      "That's the point. &AI is built to let teams run searches internally—faster iteration, more sources, and outputs you can immediately analyze.",
  },
  {
    question: 'What sources do you search?',
    answer:
      'Patents, non-patent literature, and products—including clinical trials and archival product materials.',
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
        h1="AI-Powered"
        h1Highlight="Prior Art Search"
        subheading="Skip the external search firm invoice—and the wait."
        valueProp={`Search for invalidating prior art and infringing products across patents, non-patent literature, and product documentation—across the internet—in minutes. &AI enables native multimodal searches optimized for what matters most—whether isolating specific limitations or reinforcing a §103 combination.`}
        secondaryCta={{
          label: 'See sample outputs',
          href: '/request-sample-chart',
        }}
        sections={[
          {
            label: 'Patents',
            title: 'Search 60M+ patent publications',
            description:
              'Patent applications and publications across major jurisdictions—built to iterate fast when the claim language changes. Results come back with summaries, at-a-glance invalidity or infringement analysis, citations to key disclosures.',
            type: 'bullets',
            image: '/1.1.png',
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
              'Research papers, standards, clinical trials, and more across the public internet.',
            type: 'bullets',
            image: '/1.2.png',
            items: [
              'Academic papers and journals',
              'Technical standards',
              'US clinical trials (ClinicalTrials.gov)',
              'Archived web (Wayback Machine)',
            ],
          },
          {
            label: 'Products',
            title: 'Search product documentation',
            description:
              'Current and archival product listings, specs, manuals, videos, and teardowns.',
            type: 'bullets',
            image: '/1.3.png',
            items: [
              'Product specs and manuals',
              'Marketing materials and videos',
              'Teardowns and technical docs',
              'Archived web (Wayback Machine)',
            ],
          },
          {
            title: 'Replace prior art search firms—without lowering the bar',
            description:
              'Outside prior art search firms cost thousands and take days to weeks. &AI prior art search gives the control to the expert, allowing fast iterations and key results delivered at a fraction of the cost.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            background: 'light',
            items: [
              'Explore broader, faster (patents + NPL + products + archives)',
              'Results delivered with first-pass analysis',
              'Keep the full trail when you need to explain why these are the best references',
            ],
          },
        ]}
        faqs={faqs}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
