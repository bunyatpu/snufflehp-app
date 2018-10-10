import React, { Component } from 'react';

export default class Logo extends Component {


	render() {

    const { responsive } = this.props

    //console.log('responsive',responsive)

    let sty1 = {
      fontSize:'20px',
      color:'rgba(255,255,255,0.75)'
    };
    let sty2 = {
      fontSize:'22px',
      color:'orange'
    }

    if(responsive !== undefined &&  responsive.mobile){

      if(responsive.phone){
        sty1 = { fontSize:'60px', color:'rgba(255,255,255,0.75)' };
        sty2 = { fontSize:'68px', color:'orange' }
      }else{
        sty1 = { fontSize:'30px', color:'rgba(255,255,255,0.75)' };
        sty2 = { fontSize:'34px', color:'orange' }
      }

    }

		return (

     <div >
       <span style={sty1}>Snuffle</span>
       <span style={sty2}>HP</span>
     </div>
		);
	}

}