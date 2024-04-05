// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/mdc'],
  mdc: {
    components: {
      prose: true
    },
    highlight: {
      theme: 'github-dark',
      langs: ['ts'],
      wrapperStyle: true
    }
  },
  components: {
    global: true,
    path: './components/prose'
  }
})
