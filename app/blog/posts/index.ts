// Simply import each MDX file and parse it
// To add a new post: 
// 1. Add your .mdx file to this directory
// 2. Add an import line below
// 3. Add an entry to the posts array

import buildingForHumansRaw from './building-for-humans.mdx?raw'
import generalismFutureRaw from './generalism-future.mdx?raw'
import physicalDigitalTensionRaw from './physical-digital-tension.mdx?raw'

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  if (!match) {
    throw new Error('Invalid frontmatter format')
  }
  const frontMatterBlock = match[1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata: Record<string, string> = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    const value = valueArr.join(': ').trim().replace(/^['"](.*)['"]$/, '$1')
    metadata[key.trim()] = value
  })

  return { metadata, content }
}

export const posts = [
  {
    slug: 'building-for-humans',
    ...parseFrontmatter(buildingForHumansRaw),
  },
  {
    slug: 'generalism-future',
    ...parseFrontmatter(generalismFutureRaw),
  },
  {
    slug: 'physical-digital-tension',
    ...parseFrontmatter(physicalDigitalTensionRaw),
  },
]

