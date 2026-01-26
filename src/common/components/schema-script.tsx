import Script from 'next/script';

interface SchemaScriptProps {
  schema: object | object[];
}

/**
 * Component to inject JSON-LD structured data into the page
 */
export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, index) => (
        <Script
          key={index}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(s),
          }}
          id={`schema-${index}`}
          strategy="afterInteractive"
          type="application/ld+json"
        />
      ))}
    </>
  );
}
