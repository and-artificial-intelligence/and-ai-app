interface SchemaScriptProps {
  schema: object | object[];
}

/**
 * Component to inject JSON-LD structured data into the page.
 * Uses a regular script tag to ensure schema is present in initial HTML for crawlers.
 */
export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, index) => (
        <script
          key={index}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(s),
          }}
          id={`schema-${index}`}
          type="application/ld+json"
        />
      ))}
    </>
  );
}
