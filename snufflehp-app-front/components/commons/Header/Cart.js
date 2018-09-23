import React, { Component } from 'react';
//import { connect } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa';

class Cart extends Component {


	render() {

    const { Carts,cartSize } = this.props

    let cNow = 0;

    const size = (cartSize === undefined) ? '25':cartSize

    //console.log(Carts.lists);
    // if(Carts.lists !== undefined && Carts.lists.length > 0){
    //   cNow = Carts.lists.reduce((acc,c) => acc + c.qty,0)
    // }
    

		return (
      
      <div style={{color:'rgba(255,255,255,0.75)'}}>
        <style jsx global>{`
        .Cart{
          position: relative;
          float: left;
          margin-left: 15px;
          top:7px;
        }
        .Badge{
          background: #f36e36;
            color: #fff;
            top: -4px;
            font-weight: 400;
            right: -4px;
            text-align: center;
            border: 3px solid #f36e36;
            font-size: 13px;
            min-width: 20px;
            line-height: 14px;
            border-radius: 50%;
            position: absolute;
        }
        `}</style>
        <div className="Cart" onClick={()=>{}}>
          <FaShoppingCart size={size} />
          <div style={{left:'15px'}} className="Badge" >{cNow}</div>
        </div> 
      </div>

		);
	}

}


export default Cart;