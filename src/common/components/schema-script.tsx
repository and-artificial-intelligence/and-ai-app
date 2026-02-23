interface SchemaScriptProps {
  schema: object | object[];
}

function serializeSchema(schema: object): string {
  return JSON.stringify(schema)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
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
          id={`schema-${index}`}
          type="application/ld+json"
        >
          {serializeSchema(s)}
        </script>
      ))}
    </>
  );
}
