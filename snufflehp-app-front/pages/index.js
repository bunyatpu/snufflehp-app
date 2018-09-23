import React, { Component } from "react";
import cookies from 'next-cookies'
import MainLayout from "../components/commons/Layouts";
import { loadUserInfo } from "../redux/actions/userAction";
import { loadNewProducts, loadNewOther } from "../redux/actions/productsAction";
import Home from "../components/Home";



class Index extends Component {

  static async getInitialProps (ctx) {
    
    const { token } = cookies(ctx);

    //console.log('token',token)
    
    if(token !== undefined ){
      await loadUserInfo(token)(ctx.store.dispatch)
    }

    await loadNewProducts()(ctx.store.dispatch)
    await loadNewOther()(ctx.store.dispatch)


    return {}
  }

  render(){
    return (
      <MainLayout>
        
        <Home />
        
      </MainLayout>
    )
  }
}

export default Index