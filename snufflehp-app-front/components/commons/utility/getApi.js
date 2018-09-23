import getConfig from 'next/config'
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')


const getApi = () => {

  const { publicRuntimeConfig:{API_URL_HOST},serverRuntimeConfig:{API_URL_SERVER} } = getConfig()
  //console.log(API_URL_HOST,API_URL_SERVER)

  //console.log('process',process.browser)
  //console.log('window',window)
  
  return {
    API_URL:(process.browser) ? API_URL_HOST:API_URL_SERVER
  }

}

export {
  getApi
}