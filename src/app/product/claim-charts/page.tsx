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
      "Yes. Send us a patent and one or more references. We'll return a first-draft export so you can validate citations, mapping quality, and formatting.",
  },
  {
    question: 'Do you support claim construction?',
    answer:
      'Yes. Our charts use claim constructions generated from the patent, prosecution history, and patent family.',
  },
  {
    question: 'What kinds of charts can I generate?',
    answer:
      'You can generate invalidity §102/§103/§112 and evidence-of-use charts. The workflow is designed for litigation-ready exports.',
  },
  {
    question: 'Do I stay in control of what gets exported?',
    answer:
      'Yes. Every citation requires approval before it shows up in any exported work product. There is absolutely no generated content included in any aspect of claim charts, from citations to your boilerplate language.',
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
        subheading="Trial-ready invalidity and evidence-of-use claim charts in minutes. "
        valueProp="Generate invalidity and evidence-of-use claim charts in minutes, with exact citations and dozens of formatting settings that allow you to export trial-ready charts."
        secondaryCta={{
          label: 'Request a free sample chart',
          href: '/request-sample-chart',
        }}
        sections={[
          {
            label: 'Claims and elements',
            title: 'Limitation-by-limitation charts with citations',
            description:
              'Produce limitation-by-limitation claim charts with citations to prior art and product documentation. Charts are composed entirely of exact citations, so all you have to do is review, refine, and export.',
            type: 'bullets',
            image: '/stylized-features/chart-claim.png',
            items: [
              'Limitation-by-limitation mapping',
              'Pinpoint citations to source material',
              'Trial-ready formatting',
            ],
          },
          {
            label: 'Claim construction',
            title: 'Claim terms as essential context',
            description:
              'Claim construction drives everything—invalidity, infringement, and settlement posture. Build Markman-ready constructions with a clear evidentiary record.',
            type: 'bullets',
            image: '/stylized-features/chart-construction.png',
            items: [
              'Zero-in on disputed terms and generate draft definitions',
              'Ground each definition in intrinsic evidence from the claims, specification, and prosecution history',
              'Preserve consistency across drafts and exports',
              'Export Markman-ready charts',
            ],
          },
          {
            label: 'Invalidity charts',
            title: 'Invalidity charts that hold up under scrutiny.',
            description: 'Purpose-built for §102, §103, and §112.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            items: [
              'Anticipation (§102): one reference, fully mapped',
              "Obviousness (§103): combination mapping that's easy to follow",
              "Written support (§112): identify where the spec doesn't back the claims fully",
            ],
          },
          {
            label: 'Evidence of Use charts',
            title: 'Evidence-of-use, accelerated.',
            description:
              'Build evidence-of-use (EOU) charts against virtually any product documentation.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            items: [
              'Specs, manuals, and datasheets',
              'Teardowns, photos, and screenshots',
              'Videos and demo footage',
            ],
          },
        ]}
        faqs={faqs}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
