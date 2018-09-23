import React, { Component } from "react";
import Signin from "../components/Signin";


class SigninPage extends Component {

  static async getInitialProps (ctx) {
    //console.log('ctx',ctx)
    //console.log('getInitialProps Index')

    //await requireAuth(ctx)

    return {}
  }

  render(){
    return (
      <div>
        <Signin />
      </div>
      
    )
  }
}

export default SigninPage