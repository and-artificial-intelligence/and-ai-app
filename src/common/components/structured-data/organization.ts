export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '&AI',
    url: 'https://tryandai.com',
    logo: 'https://tryandai.com/Logo-Design-Full-Color-Black.png',
    sameAs: ['https://www.linkedin.com/company/tryandai'],
    founders: [
      { '@type': 'Person', name: 'Herbie Turner' },
      { '@type': 'Person', name: 'Caleb Harris' },
    ],
    foundingDate: '2024',
    description:
      '&AI is the AI workspace for executing litigation-grade patent work at machine scale.',
  };
}
