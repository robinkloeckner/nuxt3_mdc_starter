// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-19',
  modules: ['@nuxtjs/mdc'],
  mdc: {
    highlight: {
      theme: 'github-dark',
      langs: ['ts'],
      wrapperStyle: true
    }
  }
})