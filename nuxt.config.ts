import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({



 
  // Lock features to a specific date to avoid future-breaking changes
  compatibilityDate: '2025-12-17',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  // Tailwind module auto-loads ~/assets/css/tailwind.css; no extra global CSS needed
  colorMode: {
         preference: 'system', // أو 'dark'
    classSuffix: '',
    fallback: 'light',
    storageKey: 'theme',
  },
  // Limit auto-registered components to Vue files to avoid name conflicts
  components: {
    dirs: [
      { path: '~/components', extensions: ['vue'] },
      { path: '~/ui', extensions: ['vue'] }
    ]
  }
  
})
