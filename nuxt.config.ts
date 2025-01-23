// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/index.css'],
  vite: {
    plugins: [
      tailwindcss(),    
    ],
  },
});