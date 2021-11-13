import colors from 'vuetify/es5/util/colors'
console.log('process.env.BASE_URL', process.env.BASE_URL)

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Integration | %s',
    title: 'Integration',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'INTEGRATION FOR COURSES Home Courses Lecturers Suggest an edit Integration for courses Integration is the best way to get you courses with the best lecturers in',
      },
      {
        name: 'keywords',
        content: `Integration,
          Integration-eng, Integration for courses, courses, courses,
          Integration site, Integration Academy, Integration,
          Academy 6th Of October City, get courses, best course, the best way to get excllent,
          6th Of October City, integration_courses, lecturer,
          info@integration-eng.co, integration.com, lecturers,
          integration-eng.co, integration-eng.com, success,
          integration, 01552171038 ,01151248022, instagram: integration_courses info@integration-eng.co,
          facebook: Integration Academy, the best courses for civil engineers,
          civil engineers, 
          the best place to get your courses in Egypt,
          the best courses for engineers
          كورس, أنتجراشن,  محاضر , مدرسين , مدرس , كورسات , اكتوبر,  6 اكتوبر, افضل كورس, 
          هندسه مدني,  اشهر مكان,  افضل مكان,  كورسات هندسه مدني,  مهندس مدني
          `,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/variables.scss', '~assets/static.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: (process.env.BASE_URL || 'http://localhost:3000') + '/api',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // api database
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/api/index.js',
    },
  ],
}
