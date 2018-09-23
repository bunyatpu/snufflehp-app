import React, { Component } from "react";
import cookies from 'next-cookies'
import MainLayout from "../components/commons/Layouts";
import { loadUserInfo } from "../redux/actions/userAction";
import AllProducts from "../components/AllProducts";
import { loadAllProducts } from "../redux/actions/productsAction";


class AllProductsPage extends Component {

  static async getInitialProps (ctx) {
    
    const { token } = cookies(ctx);

    //console.log('token',token)
    
    if(token !== undefined ){
      await loadUserInfo(token)(ctx.store.dispatch)
    }

    await loadAllProducts()(ctx.store.dispatch)


    return {}
  }

  render(){
    return (
      <MainLayout>
        <AllProducts />
      </MainLayout>
    )
  }
}

export default AllProductsPage