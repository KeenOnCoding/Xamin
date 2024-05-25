// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'animate.css/animate.min.css',
    '~/assets/app/app.css',
    'owl.carousel/dist/assets/owl.carousel.css',
    'owl.carousel/dist/assets/owl.theme.default.css',
    '~/assets/css/Chart.min.css'
  ],
  plugins: [
    '~/plugins/theme.js'
  ],
  app: {
    head: {
      script: [],
    },
  },
  devtools: { enabled: false }
})
