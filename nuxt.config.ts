// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // app:{
  //   head:{
  //     title:"this is project Tast",
  //     meta:[
  //       { name: 'description', content: 'My amazing site.' }
  //     ]
  //   }
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon-tw',
    '@nuxt/image'
  ],
  googleFonts:{
    families:{
      Montserrat : true,
    }
  },
  image: {
    domains: ["https://cdn.dummyjson.com"],
  },
  css: [
    '@/assets/css/main.css',
  ],
  vite: {
  }
})