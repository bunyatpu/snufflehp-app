import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col,
  Nav, NavItem, NavLink,
  Fade
} from 'reactstrap';
import { connect } from 'react-redux'
import Router from "next/router";
import { slide as SideMenu } from 'react-burger-menu'

class MenuMobile extends Component {

  constructor(props){
    super(props)
    this.state = {
      "items":[
        {name:"หน้าหลัก",link:"/"},
        {name:"สินค้าทั้งหมด",link:"/all_products"},
        {name:"เปิดจอง แด่..รัก",link:"/product/1"},
        {name:"ชำระเงิน",link:"/order_lists"},
        {name:"แจ้งโอนเงิน",link:"/tran_status"},
        //{name:"ชำระเงิน",link:"/payment"},

      ],
      sel:"/"
    }
  }

  handleClick = (obj) =>{

    Router.push(obj.link)

  }

	render() {

    let { items } = this.state;
    const { sideMenuOpen } = this.props
   
    //let pathNow = '/';
    
    let lists  = items.map( (item, key) => {

      return (
        <a  
            key={key}  
            className="menu-item"  
            href="#"  
            onClick={()=>this.handleClick(item)} >
            
            { item.name }
        </a>
      )
    });

		return (
      <SideMenu 
        isOpen={ sideMenuOpen } 
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" } 
       
        style={{background:'#555'}}
        >

       
      
          { lists }

      </SideMenu>
			
		);
	}

}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(MenuMobile);