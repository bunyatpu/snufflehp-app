import React, {Component} from "react";
import {

  Row,
  Col
} from "reactstrap";

//import { slide as Menu } from 'react-burger-menu'

import { connect } from "react-redux";
import Logo from "../Header/Logo";
import Cart from "../Header/Cart";
import Account from "../Header/Account";
import Router from "next/router";

class HeaderMobile extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      items: [
        {name: "หน้าหลัก", link: "/"},
        {name: "สินค้าทั้งหมด", link: "/all_products"},
        {name: "เปิดจอง แด่..รัก", link: "/product/1"},
        {name: "ชำระเงิน", link: "/order_lists"},
        {name: "แจ้งโอนเงิน", link: "/tran_status"}
        //{name:"ชำระเงิน",link:"/payment"},
      ],
      sel: "/",
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleClick = obj => {
    Router.push(obj.link);
  };

  render() {
    const {responsive} = this.props;

    return (
      <div>
        <style jsx global>{`
          .mobileHead .navbar-brand {
            color: #fff;
          }
          .mobileHead .navbar-toggler {
            color: rgba(210, 209, 209, 0.63);
            border-color: rgba(236, 236, 236, 0.34);
          }

          .mobileHead .navbar-toggler {
            padding: 0.25rem 0.75rem;
            font-size: 1.25rem;
            line-height: 1;
            background-color: #72737c;
            border: 1px solid transparent;
            border-radius: 0.25rem;
          }

          .mobileHead .navbar-toggler-icon {
            width: 4em;
            height: 2.5em;
          }

          .mobileHead .xxxnavbar-collapse {
            width: 300px;
            height: 1000px;

            z-index: 100;
            top: 75px;
            position: absolute;
            background: #313341;
            left: 0px;
            color: #fff;
          }
        `}</style>
        <div
          className="mobileHead"
          style={{
            backgroundColor: "#313340",
            zIndex: "100",
            fontSize: "20px",
            paddingTop: "7px"
          }} >

          <div style={{width: "100%"}}>
            <Row>
              <Col md="3">
                
              </Col>
              <Col md="5" style={{textAlign: "center"}}>
                <Logo responsive={responsive} />
              </Col>
              <Col md="4">
                <div className="d-flex align-items-center justify-content-end" style={{paddingRight:'20px'}}>
                  <div style={{marginRight: "25px"}}>
                    <Cart cartSize={"40"} responsive={responsive} />
                  </div>
                  <Account responsive={responsive}  />
                </div>
              </Col>
            </Row>
          </div>

         

          
        </div>

        

        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    responsive: state.responsive
  };
};
//!this.state.collapsed
export default connect(
  mapStateToProps,
  {}
)(HeaderMobile);

// (
//   <Collapse isOpen={!this.state.collapsed}  className="navbar-toggleable-md" navbar >

//               <Nav  className="ml-auto" navbar >
//                 <NavItem>
//                   <NavLink href="/components/">Components</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                 </NavItem>
//               </Nav>

//           </Collapse>
// )
