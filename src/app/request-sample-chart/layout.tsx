import type { Metadata } from 'next';

import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Request a Sample Claim Chart',
  description:
    'See how &AI can help you build claim charts faster and more accurately. Request a free sample chart for your team to evaluate.',
};

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  {
    name: 'Request Sample Chart',
    url: 'https://tryandai.com/request-sample-chart',
  },
];

export default function RequestSampleChartLayout({
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
