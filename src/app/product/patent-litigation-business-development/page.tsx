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
  title: 'Patent Litigation Opportunities | Case Matching for Law Firms | &AI',
  description:
    "Real-time patent litigation filings matched to your team's experience. See case intelligence, party history, and attorney fit—minutes after filing.",
};

const faqs = [
  {
    question: 'What is &AI Opportunities?',
    answer:
      "&AI Opportunities is a patent litigation monitoring tool for defense-side law firm client development. It filters newly filed cases to those that match your team's technical experience and practice focus, then provides the case intelligence needed to evaluate and act on them.",
  },
  {
    question: 'How does patent litigation case matching work?',
    answer:
      'Opportunities evaluates each new filing against attorney bios, prior case experience, and firm preferences. It scores cases on technical fit, venue familiarity, and case complexity—then surfaces the strongest matches with supporting context.',
  },
  {
    question: 'How fast are patent litigation filing alerts?',
    answer:
      'Alerts can fire as soon as five minutes after a case is filed. You can set notifications based on match thresholds or specific party names.',
  },
  {
    question: 'What case intelligence is included?',
    answer:
      'Each case includes a summary of the complaint, asserted patents with litigation history, accused instrumentalities, party behavior patterns (settlement rates, venue preferences, typical duration), and LinkedIn connections to relevant contacts.',
  },
  {
    question: "Is my firm's data kept confidential?",
    answer:
      "Yes. Matching criteria, client lists, and uploaded case data are not shared with or visible to other users. Your firm's information stays with your firm.",
  },
  {
    question: 'How is this different from Docket Navigator or PACER alerts?',
    answer:
      "PACER provides raw court records. Docket Navigator offers broad docket monitoring and research. Opportunities is narrower in focus—filtering filings to what's relevant for client development, matching cases to attorney experience, and surfacing the intelligence needed to act quickly.",
  },
  {
    question: 'Can I use this with a team?',
    answer:
      'Yes. Teams can evaluate filings together, see which attorneys have the strongest fit for each case, and triage opportunities to the right person.',
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

const relatedProducts = getProductsByName([
  'Prior Art Search',
  'Claim Charts',
  'Invalidity Analysis',
]);

export default function PatentLitigationBusinessDevelopmentPage() {
  const schemas = [
    generateSoftwareApplicationSchema({
      name: 'Patent Litigation Opportunities',
      description:
        "Real-time patent litigation monitoring tool that matches newly filed cases to your team's experience and technical background. Built for defense-side patent litigation groups.",
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
        h1Highlight="Opportunities"
        subheading="Case intelligence for defense-side client development"
        valueProp="&AI Opportunities is a real-time patent litigation monitoring tool that matches newly filed cases to your team's experience and technical background. It filters filings to cases worth evaluating, surfaces the intelligence you need to assess them, and helps you move quickly when the fit is right. Built for defense-side patent litigation groups."
        sections={[
          {
            label: 'Personalized Case Feed',
            title: "Patent Filings Filtered to What's Actually Relevant",
            description:
              "Docket monitoring tools are broad by design—useful for tracking, but noisy for client development. Opportunities filters the daily stream of filings to cases that align with your team's technical experience, venue history, and the types of matters you actually take on.",
            type: 'bullets',
            centered: true,
            items: [
              "Exclude case types you don't pursue (Schedule A, Hatch-Waxman, declaratory judgment actions)",
              'Include or exclude specific parties',
              'Recommendations based on attorney bios and prior case experience',
            ],
          },
          {
            label: 'Real-Time Filing Alerts',
            title:
              'Know About Relevant Filings Minutes After They Hit the Docket',
            description:
              'Alerts can fire as soon as five minutes after a case is filed. Set thresholds based on match strength, or get notified whenever a party you track is named as a defendant. No waiting for a daily digest.',
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Alerts based on match score or party name',
              "Configurable thresholds (so you're not buried in noise)",
              'Notifications via email or in-app',
            ],
          },
          {
            label: 'Attorney-to-Case Matching',
            title: 'See Which Attorneys Have the Strongest Fit',
            description:
              "For every filing, Opportunities evaluates fit against your team's experience—technical background, prior defense work in the relevant technology, venue familiarity, and case complexity. The goal isn't to tell you who should pitch. It's to surface the information so you can staff the pitch intelligently.",
            type: 'bullets',
            centered: true,
            items: [
              'Technical alignment (patent subject matter vs. attorney experience)',
              'Prior defense work in the technology area',
              'Venue and forum experience',
              'Case complexity',
            ],
          },
          {
            label: 'Case Intelligence',
            title:
              'The Context You Need to Evaluate a Case—Without the Research',
            description:
              "Each filing includes a case overview built from the complaint, patent records, and party data. You'll see what's asserted, what's accused, who the parties are, and whether anyone on your team has a connection worth leveraging.",
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'Summary of the complaint with asserted patents and accused instrumentalities',
              'Links to source documents',
              'LinkedIn connections to in-house counsel or party contacts (surfacing connections you might have missed—not replacing the ones you already have)',
            ],
          },
          {
            label: 'Patent and Party Intelligence',
            title: 'Patent Assertion History and Party Litigation Patterns',
            description:
              "Before you reach out, understand what you're walking into. See how many times a patent has been asserted, in which venues, and how those cases resolved. Surface patterns in party behavior—settlement tendencies, typical case duration, litigation posture.",
            type: 'bullets',
            centered: true,
            items: [
              'Patent assertion history across venues and outcomes',
              'Party settlement rates',
              'Typical case duration and resolution patterns',
              'Venue preferences',
            ],
          },
          {
            label: 'Pitch Letter Drafting',
            title:
              'Draft a Case-Specific Pitch Letter—Without Starting from Scratch',
            description:
              "When the fit is right, you can generate a first draft of a pitch letter directly from the filing. The draft pulls in relevant case facts, your team's applicable experience, and patent/party context. It's a starting point—not a finished product. You add the substance and angle; the tool handles the assembly.",
            type: 'bullets',
            centered: true,
            background: 'light',
            items: [
              'A first pass that saves formatting and research time',
              "Customizable to your firm's format (letter, memo, or short assessment)",
              'A way to move quickly when speed matters',
            ],
          },
          {
            label: 'Accuracy and Data Quality',
            title: 'Built to Reduce Noise, Not Add to It',
            description:
              'A tool that floods you with irrelevant cases is worse than no tool at all. Opportunities is designed to surface fewer, higher-quality matches—not to maximize volume. Match thresholds are adjustable, and the system learns from your feedback over time.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            items: [
              'Focused on quality over quantity',
              'Adjustable match thresholds',
              'System learns from your feedback',
            ],
          },
          {
            label: 'Who This Is For',
            title: 'Built for Defense-Side Patent Litigation Teams',
            description:
              'Opportunities is designed for patent litigation partners and associates evaluating new defense opportunities, practice group leaders managing case flow across a team, and client development professionals supporting patent litigation groups.',
            type: 'bullets',
            bulletStyle: 'bullet',
            centered: true,
            background: 'light',
            items: [
              'Patent litigation partners and associates',
              'Practice group leaders',
              'Client development professionals',
            ],
          },
        ]}
        comparisonTable={{
          title: 'How Opportunities Compares',
          description:
            'See how &AI Opportunities stacks up against traditional patent litigation research tools',
          columns: [
            { name: 'PACER' },
            { name: 'Docket Navigator' },
            { name: '&AI Opportunities', highlight: true },
          ],
          rows: [
            {
              feature: 'Real-time filing access',
              values: [true, true, true],
            },
            {
              feature: 'Attorney-to-case matching',
              values: [false, false, true],
            },
            {
              feature: 'Patent assertion history',
              values: [false, true, true],
            },
            {
              feature: 'Party litigation patterns',
              values: [false, 'Limited', true],
            },
            {
              feature: 'Team triage workflow',
              values: [false, false, true],
            },
            {
              feature: 'Pitch letter drafting',
              values: [false, false, true],
            },
          ],
        }}
        faqs={faqs}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
