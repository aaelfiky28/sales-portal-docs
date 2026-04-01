import { defineConfig } from 'vitepress'
import { featureDocSidebarItems } from './featureSidebar'

export default defineConfig({
  title: "Sales Portal Documentation",
  description: "Technical and business documentation",
  base: '/sales-portal-docs/',  // Important for GitHub Pages
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/features/' },
      { text: 'API', link: '/api/' },
      { text: 'Business', link: '/business/' },
    ],
    sidebar: {
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'Overview', link: '/features/' },
            ...featureDocSidebarItems(),
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Documentation',
          items: [
            { text: 'REST API', link: '/api/rest' },
            { text: 'Webhooks', link: '/api/webhooks' },
          ]
        }
      ],
      '/business/': [
        {
          text: 'Business Documentation',
          items: [
            { text: 'User Stories', link: '/business/user-stories' },
            { text: 'Process Flow', link: '/business/process-flow' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aaelfiky28/sales-portal-docs' }
    ],
    footer: {
      message: 'Documentation generated automatically from PRs',
      copyright: '© 2026 Sales Portal'
    }
  }
})