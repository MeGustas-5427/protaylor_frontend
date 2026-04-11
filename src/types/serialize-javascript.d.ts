declare module 'serialize-javascript' {
  type SerializeOptions = {
    isJSON?: boolean
  }

  export default function serialize(
    data: unknown,
    options?: SerializeOptions,
  ): string
}
