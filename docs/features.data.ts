import { createContentLoader } from 'vitepress'

/** All feature pages under docs/features/*.md except index.md — sorted newest first. */
export default createContentLoader('features/*.md', {
  transform(raw) {
    return raw
      .filter((p) => {
        const src = p.src?.replace(/\\/g, '/') ?? ''
        return src && !src.endsWith('/features/index.md')
      })
      .sort((a, b) => {
        const da = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0
        const db = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0
        return db - da
      })
  },
})
