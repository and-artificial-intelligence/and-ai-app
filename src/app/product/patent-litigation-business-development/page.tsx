import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/schema';
import { ProductPage } from '@/module/product';

export const metadata: Metadata = {
  title: 'Patent Litigation Opportunities + Pitch Decks | &AI',
  description:
    'A personalized, real-time feed of patent litigation filings with team matching and instant notifications. Turn any complaint into a polished pitch deck—fast enough for pitches.',
};

const faqs = [
  {
    question: 'How is Opportunities different from PACER?',
    answer:
      'PACER provides electronic access to federal court records. Opportunities adds personalization, team matching, and BD-oriented enrichment on top of raw access—so you see cases worth pitching, not just new filings.',
  },
  {
    question: 'How is this different from Docket Navigator Current Awareness?',
    answer:
      "Current awareness tools deliver curated summaries across many users. Opportunities is tuned to your team's fit and pitching workflow—filtering to what's pitch-worthy for you.",
  },
  {
    question: 'What does "complaint-to-pitch deck" mean?',
    answer:
      'A single workflow that turns a newly filed complaint into a draft pitch package with your chosen depth and formatting—letter, memo, or deck.',
  },
  {
    question: 'Can I request a sample pitch deck?',
    answer:
      "Yes. Send a complaint PDF and optional template preferences. We'll return a draft pitch letter, memo, or deck in your structure—ready for internal review.",
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Product', url: 'https://tryandai.com/product' },
  {
    name: 'Business Development',
    url: 'https://tryandai.com/product/patent-litigation-business-development',
  },
];

const relatedProducts = [
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    image: '/1.1.png',
    description: 'Search patents, NPL, and products for invalidating art.',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    image: '/2.1.png',
    description: 'Generate element-by-element charts with citations.',
  },
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    image: '/2.2.png',
    description: 'Build §102, §103, and §112 arguments grounded in your case.',
  },
];

export default function PatentLitigationBusinessDevelopmentPage() {
  const schemas = [
    generateSoftwareApplicationSchema({
      name: 'Patent Litigation Business Development',
      description:
        'A personalized, real-time feed of patent litigation filings with team matching. Turn any complaint into a polished pitch deck.',
      url: 'https://tryandai.com/product/patent-litigation-business-development',
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <ProductPage
        h1="Patent Litigation"
        h1Highlight="Business Development"
        subheading="Find the right cases. Pitch first."
        valueProp={`Opportunities is &AI's real-time feed of new patent litigation—personalized to you and your team, with memory of your prior work and how you like to pitch.

Pitch Decks turns any complaint into a polished pitch package. &AI is built to deliver litigation-grade work product fast enough for pitches.`}
        secondaryCta={{
          label: 'Request a sample pitch deck',
          href: '/request-sample-chart',
        }}
        sections={[
          {
            label: 'Opportunities',
            title: 'Your personalized feed of patent litigation filings',
            description:
              "Traditional docket monitoring is broad by design—useful, but noisy. Opportunities filters that stream down to what's pitch-worthy for your team.",
            type: 'bullets',
            items: [
              "Exclude case types you don't pitch",
              'Venue and forum filters',
              'Defense-side posture focus',
              'Party allowlist / denylist',
            ],
          },
          {
            label: 'Notifications',
            title:
              'Know about the right cases—minutes after they hit the docket',
            description:
              "Enable alerts so you're notified when a case meets your match threshold or a party you care about is named. No daily refresh. No 'catch it tomorrow.'",
            type: 'bullets',
            items: [
              'Real-time alerts on matching cases',
              'Party-based notifications',
              'Customizable match thresholds',
            ],
          },
          {
            label: 'Team matching',
            title: 'Who should pitch? &AI tells you.',
            description:
              "For every opportunity, &AI evaluates fit against attorney bios and your team's prior experience.",
            type: 'bullets',
            items: [
              'Technical fit',
              'Defense posture fit',
              'Venue/forum fit',
              'Complexity and pitchability',
              'One person can scan for the whole team and route matters to the right partner',
            ],
          },
          {
            title: 'Stop scanning. Start pitching.',
            description:
              "Everything you need to decide 'is this worth pitching?' on one screen: case summary, parties, asserted patents, accused products, and match rationale for you and your teammates.",
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            background: 'light',
            dividerBelow: true,
            items: [
              'Brief case summary with parties and context',
              'Asserted patents with links',
              'LinkedIn connections to warm intros',
            ],
          },
          {
            label: 'Pitch Decks',
            title: 'Turn any complaint into a polished pitch—fast',
            description:
              'Claim the advantage that matters: time. From filing to outreach in hours, not days.',
            type: 'bullets',
            items: [
              'Upload the complaint (and attachments)',
              'Choose a template (letter, memo, or deck)',
              'Select depth (quick scan → detailed)',
              'Receive a polished output your team can finalize and send',
            ],
          },
          {
            title: 'Find cases in Opportunities. Execute in Pitch Decks.',
            description:
              'When you decide a case is worth outreach, go straight into Pitch Decks—a complaint-to-pitch workflow built for law firm BD automation.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            items: [
              'Less admin work, faster outbound',
              'Standardize quality without sacrificing professionalism',
              'Respond quickly—move first',
            ],
          },
        ]}
        faqs={faqs}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
