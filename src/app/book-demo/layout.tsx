import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Schedule a free trial and demo of &AI. See how our AI platform can help streamline your patent litigation workflow.',
};

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Contact us', url: 'https://tryandai.com/book-demo' },
];

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Warm up the Calendly CDN so the scheduler widget's TLS + TCP
          handshakes are already done when the page mounts. */}
      <link
        crossOrigin="anonymous"
        href="https://assets.calendly.com"
        rel="preconnect"
      />
      <link href="https://calendly.com" rel="preconnect" />
      <SchemaScript schema={generateBreadcrumbSchema(breadcrumbItems)} />
      {children}
    </>
  );
}
