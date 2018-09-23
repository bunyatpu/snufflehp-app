import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html style={{backgroundColor:'#e4e5e6'}}>
        <Head>
          
          <link rel='stylesheet' href='/static/css/bootstrap.min.css' />
          <link rel='stylesheet' href='/static/css/style.css' />
          <link rel='stylesheet' href='/static/slick/slick.css' />
          <link rel='stylesheet' href='/static/slick/slick-theme.css' />
          <link rel='stylesheet' href='/static/css/nprogress.css' />
          <link rel='stylesheet' href='/static/react_widgets/dist/css/react-widgets.css' />


         
        </Head>
        <body style={{background:'none'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
