// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/mdc'],
  mdc: {
    highlight: {
      theme: 'github-dark',
      langs: ['ts'],
      wrapperStyle: true
    }
  }
})
