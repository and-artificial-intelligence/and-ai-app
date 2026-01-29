export interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  worksFor: string;
  image?: string;
}

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

export function generatePersonListSchema(people: PersonSchemaProps[]) {
  return people.map((person) => generatePersonSchema(person));
}
