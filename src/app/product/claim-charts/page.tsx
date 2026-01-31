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
  {
    question: 'How accurate are the citations?',
    answer:
      "Every citation points to a specific passage, figure, or timestamp in the source document. You review and approve each one before it appears in any export. There's no AI-generated language, only exact quotes and references.",
  },
  {
    question: 'Will these charts hold up in litigation?',
    answer:
      'Yes. &AI charts are used in active IPR and district court proceedings. The format matches what litigators file, and every citation is traceable to the original source.',
  },
  {
    question: 'How long does it take to generate a chart?',
    answer:
      'A first-draft chart typically takes 5 to 15 minutes depending on claim complexity. Most teams complete a full review-and-refine cycle in under two hours, compared to days with manual charting.',
  },
  {
    question: 'Can I customize the export format?',
    answer:
      'Yes. Choose from dozens of formatting options including page layouts, citation styles, header/footer text, and styling options. Save your settings so every chart matches your style.',
  },
  {
    question: 'Can I chart claims against multiple references at once?',
    answer:
      'Yes. Build §103 combination charts that map elements across two, three, or more references with clear visual separation and motivation-to-combine sections.',
  },
  {
    question: 'Can I import an existing claim chart to refine it?',
    answer:
      'Yes. Upload a Word document and &AI will make it available for review and refinement within your workspace.',
  },
  {
    question: 'How is this different from doing it manually in Word?',
    answer:
      'Manual charting means copying claim text, hunting for citations, formatting tables, and maintaining consistency across dozens of elements. &AI automates the structure and citation linking so you can focus on the substance.',
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
        faqs={faqs}
        h1="Litigation-Ready"
        h1Highlight="Claim Charts"
        relatedProducts={relatedProducts}
        secondaryCta={{
          label: 'Request a free sample chart',
          href: '/request-sample-chart',
        }}
        sections={[
          {
            label: 'Claims and elements',
            title: 'Every element mapped. Every citation pinpointed.',
            description:
              "Map each claim element to exact citations from prior art or product documentation. No AI-generated language in your exports—just the references you've reviewed and approved.",
            type: 'bullets',
            image: '/stylized-features/chart-claim.png',
            imageColor: 'blue',
            cardGroup: 'main',
            items: [
              'Limitation-by-limitation mapping',
              'Pinpoint citations to source material',
              'Trial-ready formatting',
            ],
          },
          {
            label: 'Claim construction',
            title: 'Get claim construction right—everything else follows.',
            description:
              'Claim construction drives everything—invalidity, infringement, and settlement posture. Build Markman-ready constructions with a clear evidentiary record.',
            type: 'bullets',
            image: '/stylized-features/chart-construction.png',
            imageColor: 'blue',
            cardGroup: 'main',
            items: [
              'Identify disputed terms and draft definitions grounded in the intrinsic record—claims, specification, and prosecution history.',
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
            dividerAbove: true,
            items: [
              '§102 Anticipation: Single-reference charts with element-by-element mapping',
              '§103 Obviousness: Multi-reference combinations with clear motivation narratives',
              '§112 Written Description: Flag where the spec fails to support asserted scope',
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
            background: 'light',
            items: [
              'Specs, manuals, and datasheets',
              'Teardowns, photos, and screenshots',
              'Videos and demo footage',
            ],
          },
        ]}
        subheading="Trial-ready invalidity and evidence-of-use claim charts in minutes. "
        valueProp="Generate invalidity and evidence-of-use claim charts in minutes, with exact citations and dozens of formatting settings that allow you to export trial-ready charts."
      />
    </>
  );
}
