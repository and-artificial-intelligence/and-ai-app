import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Solutions', url: 'https://tryandai.com/solutions' },
  { name: 'In-House', url: 'https://tryandai.com/solutions/in-house' },
];

const faqs = [
  {
    question: 'How does the platform work for in-house teams?',
    answer:
      'Search across patents, NPL, and products. Generate evidence-of-use and invalidity claim charts in minutes. Draft memos, contentions, and strategy materials grounded in your project context.',
  },
];

export default function InHouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaScript
        schema={[
          generateBreadcrumbSchema(breadcrumbItems),
          generateFAQSchema(faqs),
        ]}
      />
      {children}
    </>
  );
}
