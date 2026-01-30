export interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}

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
