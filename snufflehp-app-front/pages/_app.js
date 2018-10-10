import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { setMobileDetect, mobileParser } from 'react-responsive-redux'

class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {

    //console.log('ctx.req',ctx.req)
    if(ctx.req !== undefined){
      const mobileDetect = mobileParser(ctx.req)
      ctx.store.dispatch(setMobileDetect(mobileDetect))

    }
    // do our mobile detection
   

    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render () {
    const {Component, pageProps, store} = this.props
    return <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  }
}

export default withRedux(initStore)(MyApp)
