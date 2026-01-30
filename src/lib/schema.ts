import type { FAQ } from '@/module/product';

export interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate SoftwareApplication JSON-LD schema
 */
export function generateSoftwareApplicationSchema({
  name,
  description,
  url,
}: SoftwareApplicationSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '375',
      priceCurrency: 'USD',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: '&AI',
      url: 'https://tryandai.com',
    },
  };
}

/**
 * Generate FAQPage JSON-LD schema
 */
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '&AI',
    url: 'https://tryandai.com',
    logo: 'https://tryandai.com/Logo-Design-Full-Color-Black.png',
    sameAs: ['https://www.linkedin.com/company/102635991'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@tryandai.com',
      contactType: 'customer service',
    },
  };
}

/**
 * Helper to stringify schema for injection into page
 */
export function schemaToString(schema: object): string {
  return JSON.stringify(schema);
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}

/**
 * Generate Article JSON-LD schema for blog posts
 */
export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    datePublished: props.datePublished,
    ...(props.dateModified && { dateModified: props.dateModified }),
    author: {
      '@type': 'Organization',
      name: '&AI',
      url: 'https://tryandai.com',
    },
    publisher: {
      '@type': 'Organization',
      name: '&AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tryandai.com/Logo-Design-Full-Color-Black.png',
      },
    },
    ...(props.image && { image: props.image }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
  };
}

export interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  worksFor: string;
  image?: string;
}

/**
 * Generate Person JSON-LD schema for advisory board members
 */
export function generatePersonSchema(props: PersonSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: props.name,
    jobTitle: props.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: props.worksFor,
    },
    ...(props.image && { image: props.image }),
  };
}

/**
 * Generate combined schema for a product page
 */
export function generateProductPageSchema({
  name,
  description,
  url,
  faqs,
  breadcrumbs,
}: {
  name: string;
  description: string;
  url: string;
  faqs: FAQ[];
  breadcrumbs: BreadcrumbItem[];
}) {
  return [
    generateSoftwareApplicationSchema({ name, description, url }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];
}
