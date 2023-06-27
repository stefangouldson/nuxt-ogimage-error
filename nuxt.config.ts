// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    'nuxt-seo-kit'
  ],
  runtimeConfig: {
    public: {
      siteName: 'Web Vids',
      siteDescription: 'Ignite your online presence with WebVids',
      siteUrl: 'https://mywebvids.com',
      titleSeparator: '-'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      titleTemplate: '%siteName %titleSeparator %pageTitle',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  sitemap: {
    exclude: [
      '/success',
    ]
  }
})
