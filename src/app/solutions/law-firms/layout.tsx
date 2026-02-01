import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Solutions', url: 'https://tryandai.com/solutions' },
  { name: 'Law Firms', url: 'https://tryandai.com/solutions/law-firms' },
];

const faqs = [
  {
    question: 'Is &AI built for litigation-grade work product?',
    answer:
      'Yes. &AI supports litigators crafting trial-ready work product and is designed for litigation workflows.',
  },
  {
    question: 'Can teams standardize outputs across partners and offices?',
    answer:
      'Yes. Templates and collaborative editing help teams keep drafts consistent while preserving attorney control.',
  },
  {
    question: 'How does &AI handle security for legal work?',
    answer:
      '&AI has enterprise-grade security and compliance built for law—including zero-data retention policies with model providers, SSO/RBAC, encryption in transit/at rest, and public-only mode.',
  },
];

export default function LawFirmsLayout({
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
