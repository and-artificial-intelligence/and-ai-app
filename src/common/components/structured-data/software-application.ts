export interface PricingOffer {
  name: string;
  price: string;
  priceCurrency?: string;
}

export function generateSoftwareApplicationSchema(offers?: PricingOffer[]) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '&AI',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      '&AI delivers trial-ready work product for patent litigators — fast enough for pitches, strong enough for court.',
    url: 'https://tryandai.com',
  };

  if (offers && offers.length > 0) {
    return {
      ...baseSchema,
      offers: offers.map((offer) => ({
        '@type': 'Offer',
        name: offer.name,
        price: offer.price,
        priceCurrency: offer.priceCurrency || 'USD',
        availability: 'https://schema.org/InStock',
      })),
    };
  }

  return baseSchema;
}
