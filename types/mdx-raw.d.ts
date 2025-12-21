// Type declaration for importing MDX files as raw text
declare module '*.mdx?raw' {
  const content: string
  export default content
}

