import type { Metadata } from 'next';

import {
  generateBreadcrumbSchema,
  JsonLd,
} from '@/common/components/structured-data';

export const metadata: Metadata = {
  title: 'Request a Sample Claim Chart | &AI',
  description:
    'See how &AI can help you build claim charts faster and more accurately. Request a free sample chart for your team to evaluate.',
};

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Request Sample Chart', url: 'https://tryandai.com/request-sample-chart' },
];

export default function RequestSampleChartLayout({
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
