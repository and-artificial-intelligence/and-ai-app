import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Book a Demo',
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
      <SchemaScript schema={generateBreadcrumbSchema(breadcrumbItems)} />
      {children}
    </>
  );
}
