// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: ["@pinia/nuxt"],
});
