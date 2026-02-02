import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

const breadcrumbItems = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Solutions', url: 'https://tryandai.com/solutions' },
  {
    name: 'Litigation Funds',
    url: 'https://tryandai.com/solutions/litigation-funds',
  },
];

const faqs = [
  {
    question: 'Why does this matter for funders?',
    answer:
      'Because underwriting requires quickly evaluating legal/technical strength—and non-recourse funding models make diligence quality critical.',
  },
  {
    question: 'Do you replace outside counsel?',
    answer:
      'No—&AI speeds up diligence and work product generation so counsel time goes further and decisions happen faster.',
  },
  {
    question: 'How does &AI help with deal flow?',
    answer:
      'Use &AI to monitor and triage litigation opportunities, then enrich them with the context you need to decide whether to lean in.',
  },
];

export default function LitigationFundsLayout({
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
