import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';
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
      "That's the point. &AI is built to let teams run firm-grade searches internally—faster iteration, broader sources, and outputs you can actually use.",
  },
  {
    question: 'What sources do you search?',
    answer:
      'Patents, non-patent literature, and products—including standards/clinical trials and archival product materials.',
  },
  {
    question: 'Can you use archived web pages (Wayback) in a search workflow?',
    answer:
      'Yes—especially when a key disclosure was later edited or removed. The Wayback Machine supports URL lookup and date-range selection for captures.',
  },
  {
    question: 'What is ClinicalTrials.gov?',
    answer:
      'A public website and online database of clinical research studies and results maintained by the U.S. National Library of Medicine.',
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

const relatedProducts = [
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    image: '/2.1.png',
    description:
      'Build airtight invalidity positions with AI-assisted claim mapping.',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    image: '/3.1.png',
    description: 'Generate detailed claim charts in minutes, not days.',
  },
  {
    name: 'Infringement Detection',
    href: '/product/infringement-detection',
    image: '/4.1.png',
    description: 'Identify potential infringement across products and patents.',
  },
];

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
        subheading="Quality results in minutes, not days. Replace outside prior search firms."
        valueProp={`No more outsourcing to third-party search firms with a long wait time. Search for invalidating prior art and infringing products across patents, non-patent literature, and product documentation—across the internet—in minutes.

&AI enables native multimodal searches optimized for what matters most—whether isolating specific limitations or reinforcing a §103 combination.`}
        secondaryCta={{
          label: 'See sample outputs',
          href: '/request-sample-chart',
        }}
        sections={[
          {
            label: 'Patents',
            title: 'Search patent documents worldwide',
            description:
              'Patent applications and publications across major jurisdictions—built to iterate fast when the claim language changes. Results come back with relevance summaries and citations to key disclosures.',
            type: 'bullets',
            image: '/1.1.png',
            items: [
              'US and international patents',
              'Applications and publications',
              'Fast iteration when claim language changes',
            ],
          },
          {
            label: 'Non-patent literature',
            title: 'Find invalidating art in NPL',
            description:
              'Research papers, standards, clinical trials, and more across the public internet—where the best invalidating art often lives.',
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
              'Current and archival product listings, specs, manuals, videos, and teardowns—because "prior art" isn\'t always filed at an office.',
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
              'Outside search firms sell time and scarcity. &AI gives your team a repeatable workflow you can run anytime.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            background: 'light',
            items: [
              'Explore broader, faster (patents + NPL + products + archives)',
              'Lock onto the few references that actually matter',
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
