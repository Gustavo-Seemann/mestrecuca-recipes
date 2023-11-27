// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss"
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "primary": {
              DEFAULT: "#5B0000"
            },
            "secondary": {
              DEFAULT: "#FFEFDC"
            }
          }
        }
      }
    }
  }
})
