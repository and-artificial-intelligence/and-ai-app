import type { Metadata } from 'next';

import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateSoftwareApplicationSchema,
  JsonLd,
} from '@/common/components/structured-data';

export const metadata: Metadata = {
  title: 'Pricing | &AI',
  description:
    'Choose the right plan for your patent litigation workflow. Core, Pro, and Enterprise pricing options available.',
};

const faqItems = [
  {
    question: 'What counts as a credit?',
    answer:
      'Every time you use an AI action on &AI — for example, when you search for prior art, build a claim chart, or interact with Andy — you use credits. Each action consumes credits based on the operation type, configurations, and amount of content processed.',
  },
  {
    question: 'How can I get started?',
    answer:
      "Book a demo through our contact form or email support@tryandai.com and we'll walk you through the platform and answer any questions you have.",
  },
  {
    question: 'How does billing work?',
    answer:
      'We offer a monthly subscription model with credits that can be used for AI actions. Credits are pre-purchased and not refundable or transferable. Payments are processed through Stripe. For Enterprise customers, we offer a custom pricing model based on your needs.',
  },
  {
    question: 'How does public-only mode work?',
    answer:
      'Public-only mode is a feature that allows you to use &AI without storing or accessing any confidential information, and it is the default mode for all Core users. With public-only mode enabled, you are unable to upload any documents or provide any context or prompts for the models. This makes it impossible for you to store any confidential information with &AI. Pro and Enterprise customers can enable public-only mode by contacting support@tryandai.com.',
  },
  {
    question: 'I have a question not answered yet. Who can I talk to?',
    answer:
      "We're here to help! Book a demo to speak with a member of our team directly, or reach out to support@tryandai.com.",
  },
];

const pricingOffers = [
  { name: 'Core', price: '375' },
  { name: 'Pro', price: '625' },
];

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Pricing', url: 'https://tryandai.com/pricing' },
];

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={generateFAQPageSchema(faqItems)} />
      <JsonLd data={generateSoftwareApplicationSchema(pricingOffers)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems)} />
      {children}
    </>
  );
}
