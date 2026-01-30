import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema } from '@/lib/schema';

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Solutions', url: 'https://tryandai.com/solutions' },
];

export default function SolutionsLayout({
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
