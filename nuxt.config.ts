// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/image-edge", 
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],

  googleFonts: {
    families: {
      "Ingrid Darling": true,
      "Inria Serif": true,
    }
  },


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