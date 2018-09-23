import React, { Component } from "react";
import Signup from "../components/Signup";


class SignupPage extends Component {

  static async getInitialProps (ctx) {
    //console.log('ctx',ctx)
    //console.log('getInitialProps Index')

    //await requireAuth(ctx)

    return {}
  }

  render(){
    return (
      <div>
        <Signup />
      </div>
      
    )
  }
}

export default SignupPage