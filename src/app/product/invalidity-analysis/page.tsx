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
  title: 'Invalidity Analysis (102/103/112) + Claim Charts | &AI',
  description:
    'Discover prior art, generate claim charts, and draft §102, §103, and §112 arguments—grounded in claim construction and full prosecution history. Trial-ready outputs in one workflow.',
};

const faqs = [
  {
    question:
      "What's the difference between a prior art search and invalidity analysis?",
    answer:
      'A prior art search focuses on finding relevant references, while invalidity analysis goes further by mapping those references to specific claim elements, constructing legal theories (§102/§103), and building the narrative for why a patent is invalid. &AI does both in one workflow.',
  },
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
      'You receive invalidity claim charts with element-by-element mappings, §102/§103/§112 contentions, motivation to combine narratives, and all exports in Word format ready for filings or expert reports.',
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
        h1="Patent"
        h1Highlight="Invalidity Analysis"
        subheading="From discovery to contentions—without switching tools."
        valueProp={`&AI is a collaborative workspace for patent invalidity work that produces trial-ready work product grounded in your case.

Discover prior art, generate claim charts, and draft §102, §103, and §112 arguments—built around the way litigators actually work.`}
        secondaryCta={{
          label: 'See Prior Art Search',
          href: '/product/prior-art-search',
        }}
        sections={[
          {
            label: 'The invalidity workflow',
            title: 'Find the art. Map the claim. Draft the arguments.',
            description:
              'Invalidity work breaks down into the same loop every time. &AI keeps that loop in one place—so when strategy changes, you iterate instead of rebuilding.',
            type: 'bullets',
            image: '/2.1.png',
            items: [
              'Find the best references',
              'Map limitations with clean citations',
              'Pressure-test §102 / §103 theories',
              'Address §112 vulnerabilities (written description / enablement)',
              'Draft contentions and supporting materials',
            ],
          },
          {
            label: 'Claim construction',
            title: 'Define the terms. Control the case.',
            description:
              'Claim construction drives everything—invalidity, infringement, and settlement posture. Build Markman-ready constructions with a clear evidentiary record.',
            type: 'bullets',
            image: '/2.2.png',
            items: [
              'Zero-in on disputed terms and generate draft definitions fast',
              'Ground each definition in intrinsic evidence first (claims, specification, prosecution history)',
              "Keep constructions 'live' as strategy evolves—so charts, analysis, and drafts stay consistent",
            ],
          },
          {
            title: '§102 — Single-reference theories with pinpoint support',
            description:
              "§102 turns on whether the claim is anticipated under the statute's novelty framework.",
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Isolate the exact limitation that makes or breaks the theory',
              "Collect pinpoint citations (not just 'close' passages)",
              'Maintain a clean trail from claim → evidence → draft',
            ],
          },
          {
            title:
              '§103 — Combination suggestions and charts that evolve with strategy',
            description:
              '§103 is a non-obviousness inquiry—often requiring combinations, motivations, and clean mapping across multiple references.',
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Generate drafts for multiple references',
              'See coverage gaps early',
              'Propose §103 combinations and chart them before you invest time polishing',
            ],
          },
          {
            title: '§112 — Surface vulnerabilities and draft around them',
            description:
              '§112(a) requires written description and enablement, and teams often need to evaluate whether the spec supports the full claim scope.',
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Anchor analysis in the specification',
              'Flag weak support by limitation / claim scope',
              'Draft written description and enablement narratives faster',
            ],
          },
          {
            title: 'Discover better art. Build better theories. Draft faster.',
            description:
              'When positions change, you iterate instead of starting over. &AI is designed as a single repository so you can revise searches, charts, and drafts without restarting the entire pipeline.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            dividerBelow: true,
            items: [
              'Trial-ready work product grounded in your case',
              'One workspace from discovery to contentions',
              'Iterate when strategy changes—without rebuilding',
            ],
          },
        ]}
        faqs={faqs}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
