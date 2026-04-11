import serialize from 'serialize-javascript'

type JsonLdScriptProps = {
  data: unknown
}

export function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serialize(data, { isJSON: true }),
      }}
    />
  )
}

export default JsonLdScript
