import React, { Component } from "react";
import cookies from 'next-cookies'
import { withRouter } from 'next/router'
import MainLayout from "../components/commons/Layouts";
import { loadUserInfo } from "../redux/actions/userAction";
//import { loadProductDetail } from "../redux/actions/productsAction";
import ProductDetail from "../components/ProductDetail";



class ProductPage extends Component {

  static async getInitialProps (ctx) {
    
    const { query } = ctx
    const { token } = cookies(ctx);

    //console.log('ctx',ctx)
    
    if(token !== undefined ){
      await loadUserInfo(token)(ctx.store.dispatch)
    }

    //load product detail
    //await loadProductDetail(query.id)(ctx.store.dispatch)


    return {}
  }

  render(){

    const { router:{query} } = this.props 
    //console.log('product id',query)

    return (
      <MainLayout>
        
        <ProductDetail id={query.id} />
        
      </MainLayout>
    )
  }
}

export default withRouter(ProductPage)