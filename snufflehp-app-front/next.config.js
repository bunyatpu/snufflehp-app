// next.config.js
//const withCSS = require('@zeit/next-css')
module.exports = {
  serverRuntimeConfig: { // Will only be available on the server side
    API_URL_SERVER: process.env.url_api
  },
  publicRuntimeConfig: { // Will be available on both server and client
    API_URL_HOST: process.env.API_HOST_URL
  }
}
