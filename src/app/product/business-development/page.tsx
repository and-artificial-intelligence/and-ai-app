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
  title: 'Business Development for Patent Litigators | &AI',
  description:
    "Opportunities is &AI's real-time feed of patent litigation filings, personalized to you and your team with memory of your prior work and how you like to pitch.",
};

const faqs = [
  {
    question: 'How is Opportunities different from PACER or Docket Navigator?',
    answer:
      "PACER provides access to federal court records but doesn't help you determine which matters are relevant or actionable. Docket Navigator Current Awareness delivers broadly curated updates for a general audience, not tailored to your team's specific fit or workflow. Opportunities adds BD-oriented enrichment—personalization, team-fit matching, and pitching context—so you can identify and pursue the cases that actually matter to your practice.",
  },
  {
    question: "What does 'complaint-to-pitch deck' mean?",
    answer:
      'A single workflow that turns a newly filed complaint into a draft pitch package with your chosen depth and formatting—letter, memo, or deck.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Product', url: 'https://tryandai.com/product' },
  {
    name: 'Business Development',
    url: 'https://tryandai.com/product/business-development',
  },
];

const relatedProducts = getProductsByName([
  'Prior Art Search',
  'Claim Charts',
  'Invalidity Analysis',
]);

const comparisonTable = {
  title: 'How Opportunities compares',
  columns: [
    { name: 'PACER' },
    { name: 'Docket Navigator' },
    { name: '&AI Opportunities', highlight: true },
  ],
  rows: [
    { feature: 'Access to federal court filings', values: [true, true, true] },
    { feature: 'Attorney-to-case matching', values: [false, false, true] },
    { feature: 'Patent assertion history', values: [false, true, true] },
    { feature: 'Party litigation patterns', values: [false, 'Limited', true] },
    { feature: 'Team triage workflow', values: [false, false, true] },
    { feature: 'Pitch letter drafting', values: [false, false, true] },
    { feature: 'Pitch deck creation', values: [false, false, true] },
    {
      feature: 'Personalized relevance filtering',
      values: [false, 'Limited', true],
    },
  ],
  inCardGroup: true,
};

export default function BusinessDevelopmentPage() {
  const schemas = [
    generateSoftwareApplicationSchema({
      name: 'Business Development for Patent Litigators',
      description:
        "Opportunities is &AI's real-time feed of patent litigation filings, personalized to you and your team with memory of your prior work and how you like to pitch.",
      url: 'https://tryandai.com/product/business-development',
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <ProductPage
        comparisonTable={comparisonTable}
        faqs={faqs}
        h1="Business Development"
        h1Highlight="Patent Litigators"
        h1HighlightPrefix="for "
        relatedProducts={relatedProducts}
        sections={[
          {
            label: 'Opportunities',
            title: 'Your personalized feed of patent litigation filings',
            description:
              'Traditional docket monitoring buries the signal in noise. Opportunities filters that stream down to what is pitch-worthy for your team, based on your contacts and experience.',
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Exclude case types you do not pitch',
              'Set party allowlists and denylists',
            ],
          },
          {
            label: 'Notifications',
            title:
              'Know about the right cases, minutes after they hit the docket',
            description:
              'Enable alerts to notify you when a case meets your match threshold or a party you care about is named. No more losing pitches because you saw it a day late.',
            type: 'bullets',
            centered: true,
            items: [
              'Real-time alerts on matching cases',
              'Party-based notifications',
              'Customizable match thresholds',
            ],
          },
          {
            label: 'Team Matching',
            title: "Who should pitch? We'll tell you.",
            description:
              'For every opportunity, &AI evaluates fit against the bios and prior experience of your entire team.',
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Technical fit',
              'Venue and forum fit',
              'Client and history fit',
            ],
          },
          {
            label: 'Pitch cases fast',
            title: 'Turn a complaint into a pitch in minutes',
            description:
              'When you decide a case is worth reaching out, or you have received a request for a pitch, build an entire deck or outbound letter at the click of a button.',
            type: 'bullets',
            centered: true,
            items: [
              'Less admin work, faster outbound',
              'Standardize quality without sacrificing professionalism',
              'Respond quickly and move first',
            ],
          },
        ]}
        subheading="Find pitch-worthy cases within minutes of filing."
        valueProp="Opportunities is &AI's real-time feed of patent litigation filings, personalized to you and your team with memory of your prior work and how you like to pitch."
      />
    </>
  );
}
