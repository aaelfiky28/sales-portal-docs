import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import type { DefaultTheme } from 'vitepress'

const featuresDir = join(fileURLToPath(new URL('../features', import.meta.url)))

export function featureDocSidebarItems(): DefaultTheme.SidebarItem[] {
  let files: string[]
  try {
    files = readdirSync(featuresDir).filter((f) => f.endsWith('.md') && f !== 'index.md')
  } catch {
    return []
  }

  const entries = files.map((file) => {
    const slug = file.replace(/\.md$/, '')
    const raw = readFileSync(join(featuresDir, file), 'utf-8')
    const { data } = matter(raw)
    const title = (data.title as string) ?? slug
    const dateStr = data.date as string | undefined
    return {
      text: title,
      link: `/features/${slug}` as const,
      date: dateStr ? new Date(dateStr).getTime() : 0,
    }
  })

  entries.sort((a, b) => b.date - a.date)

  return entries.map(({ text, link }) => ({ text, link }))
}
