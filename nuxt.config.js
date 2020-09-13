require('dotenv').config()
export default {
    /*
** Nuxt rendering mode
** See https://nuxtjs.org/api/configuration-mode
*/
    mode: 'universal',
    /*
** Nuxt target
** See https://nuxtjs.org/api/configuration-target
*/
    target: 'server',
    /*
** Headers of the page
** See https://nuxtjs.org/api/configuration-head
*/
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
** Global CSS
*/
    css: ['~assets/scss/index.scss'],
    /*
** Plugins to load before mounting the App
** https://nuxtjs.org/guide/plugins
*/
    plugins: [
        { ssr: false, src: '~plugins/google-oauth2.js' }
    ],
    /*
** Auto import components
** See https://nuxtjs.org/api/configuration-components
*/
    components: true,
    /*
** Nuxt.js dev-modules
*/
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/dotenv'
    ],
    /*
** Nuxt.js modules
*/
    modules: [
    // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        'nuxt-fontawesome'
    ],
    /*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/
    axios: {},
    /*
** Build configuration
** See https://nuxtjs.org/api/configuration-build/
*/
    styleResources: {
        scss: './assets/scss/var/*.scss'
    },
    fontawesome: {
        imports: [
            {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas']
            },
            {
                set: '@fortawesome/free-regular-svg-icons',
                icons: ['far']
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: ['fab']
            }
        ]
    },
    loading: {
        color: '#FF0000'
    },
    build: {
    }
}
