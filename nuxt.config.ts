import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
       // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
       ssr: false,
       typescript: {
              shim: false,
              strict: true
       },

       target: "static",
       generate: {
              fallback: true
       },

       // Global page headers: https://go.nuxtjs.dev/config-head
       head: {
              title: "dashboard-clone-3",
              htmlAttrs: {
                     lang: "en",
              },
              meta: [
                     { charset: "utf-8" },
                     { name: "viewport", content: "width=device-width, initial-scale=1" },

                     { name: "format-detection", content: "telephone=no" },
              ],
              link: [
                     { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                     {
                            rel: "stylesheet",
                            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
                            integrity:
                                   "sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==",
                            crossorigin: "anonymous",
                            referrerpolicy: "no-referrer",
                     },
              ],
       },

       // Global CSS: https://go.nuxtjs.dev/config-css
       css: ['~/assets/css/tailwind.css'],

       // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
       plugins: [],

       // Auto import components: https://go.nuxtjs.dev/config-components
       components: true,

       // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
       buildModules: [
              // https://go.nuxtjs.dev/tailwindcss
              '@nuxtjs/tailwindcss'
       ],

       // Modules: https://go.nuxtjs.dev/config-modules
       modules: [],

       // Build Configuration: https://go.nuxtjs.dev/config-build
       build: {},








})
