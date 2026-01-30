import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';

import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Product Overview',
  description:
    'Explore the AI workspace for patent litigation. Tools for infringement detection, invalidity analysis, claim charts, prior art search, and business development.',
};

const faqs = [
  {
    question: 'What makes &AI different from other patent tools?',
    answer:
      '&AI is built specifically for end-to-end patent litigation workflows, from business development to trial. Every feature is optimized to produce trial-ready work product, with outputs designed for expert review and legal proceedings.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes. We offer free credits to try the &AI platform so you can evaluate the quality of our product before making any commitment. Book a demo to get started.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'We offer three options– Core, Pro, and Enterprise plans. Core and Pro are a monthly seat cost, which includes a fixed number of credits, and you can always buy more credits as needed. See more pricing details on our pricing page.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Product', url: 'https://tryandai.com/product' },
];

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaScript
        schema={[
          generateSoftwareApplicationSchema({
            name: '&AI Patent Litigation Platform',
            description:
              'The AI workspace for patent litigation. End-to-end workflows from business development to active trial.',
            url: 'https://tryandai.com/product',
          }),
          generateFAQSchema(faqs),
          generateBreadcrumbSchema(breadcrumbItems),
        ]}
      />
      {children}
    </>
  );
}
