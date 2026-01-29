import type { Metadata } from 'next';

import {
  generateBreadcrumbSchema,
  JsonLd,
} from '@/common/components/structured-data';

export const metadata: Metadata = {
  title: 'Book a Demo | &AI',
  description:
    'Schedule a free trial and demo of &AI. See how our AI platform can help streamline your patent litigation workflow.',
};

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Book Demo', url: 'https://tryandai.com/book-demo' },
];

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems)} />
      {children}
    </>
  );
}
