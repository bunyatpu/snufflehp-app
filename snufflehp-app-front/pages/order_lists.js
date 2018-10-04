import React, { Component } from "react";
import cookies from 'next-cookies'
import { withRouter } from 'next/router'
import MainLayout from "../components/commons/Layouts";
import { loadUserInfo } from "../redux/actions/userAction";
//import { loadProductDetail } from "../redux/actions/productsAction";
import OrderLists from "../components/OrderLists";



class OrderListsPage extends Component {

  static async getInitialProps (ctx) {
    
    //const { query } = ctx
    const { token } = cookies(ctx);


    if(token !== undefined ){
      await loadUserInfo(token)(ctx.store.dispatch)
    }

    return {}
  }

  render(){

    const { router:{query} } = this.props 
    //console.log('product id',query)

    return (
      <MainLayout>
        
        <OrderLists />
        
      </MainLayout>
    )
  }
}

export default withRouter(OrderListsPage)