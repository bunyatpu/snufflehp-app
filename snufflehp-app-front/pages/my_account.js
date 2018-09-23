import React, { Component } from "react";
import cookies from 'next-cookies'
import MainLayout from "../components/commons/Layouts";
import { loadUserInfo } from "../redux/actions/userAction";
import MyAccount from "../components/MyAccount";



class MyAccountPage extends Component {

  static async getInitialProps (ctx) {
    
    const { token } = cookies(ctx);

    //console.log('token',token)
    
    if(token !== undefined ){
      await loadUserInfo(token)(ctx.store.dispatch)
    }


    return {}
  }

  render(){
    return (
      <MainLayout>
        <div style={{height:'1000px'}}>
          <MyAccount />
        </div>
        
      </MainLayout>
    )
  }
}

export default MyAccountPage