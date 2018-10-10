import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa';
import Router from "next/router";
//import { loadCarts } from "../../../redux/actions/productsAction";

class Cart extends Component {

  goto = (url) =>{
    Router.push(url)
  }


	render() {

    const { carts,cartSize,responsive } = this.props
   

    //console.log('carts',carts)
    const phone = (responsive !== undefined && responsive.phone) ? true:false

    let cNow = 0;

    let size = (cartSize === undefined) ? '25':cartSize

    if(phone){
      size = 60;
    }

    //console.log(Carts.lists);
    if(carts.amtTotal !== undefined ){
      cNow = carts.amtTotal
    }
    //min-height: 30px;

		return (
      
      <div style={{color:'rgba(255,255,255,0.75)'}}>
        <style jsx global>{`
        .Cart{
          position: relative;
          float: left;
          margin-left: 15px;
          top:${phone ? '19px':'7px'};
        }
        .Cart:hover{
          cursor:pointer !important;
          top:9px;
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
        <div className="Cart" onClick={()=>this.goto('/order_lists')}>
          <FaShoppingCart size={size} />
          <div style={{left:'15px'}} className="Badge" >{cNow}</div>
        </div> 
      </div>

		);
	}

}

const mapStateToProps = (state) => {
  return {
    carts:state.products.cartOrders
  }
}

export default connect( mapStateToProps ,{ })(Cart);