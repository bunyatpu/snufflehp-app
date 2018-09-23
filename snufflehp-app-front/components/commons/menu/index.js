import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col,
  Nav, NavItem, NavLink,
  Fade
} from 'reactstrap';
import { connect } from 'react-redux'
import Logo from '../Header/Logo';
import Cart from "../Header/Cart"
import Account from "../Header/Account"
import Router from "next/router";

class MenuHeader extends Component {

  constructor(props){
    super(props)
    this.state = {
      "items":[
        {name:"หน้าหลัก",link:"/"},
        {name:"สินค้าทั้งหมด",link:"/all_products"},
        {name:"เปิดจอง แด่..รัก",link:"/product/แด่...รัก by Snufflehp"},
        {name:"แจ้งโอนเงิน",link:"/tran_status"},
        //{name:"ชำระเงิน",link:"/payment"},

      ],
      sel:"/"
    }
  }

  handleClick = (obj) =>{
    //console.log(obj);
    // this.setState({
    //   sel:obj.item.link
    // })

    Router.push(obj.link)

  }

	render() {

    let {items } = this.state;
    const { style,isSticky } = this.props
    //const transTime = 500

    let menuStyle = {...style}

    //console.log('isSticky',isSticky)
  

    //let pathNow = (match !== undefined) ? match.path:'/';
    let pathNow = '/';
    
    let lists  = items.map( (item, key) => {
      //let selNow = (item.link === pathNow) ? true:false
      return <NavItem
            active={(item.link === pathNow) ? true:false} 
            key={key} 
            onClick={()=>this.handleClick(item)} >
          <NavLink href="#">{item.name}</NavLink>
        </NavItem>
    });

		return (
      <div  
        className="mainMenu bgHeader"
        style={
          Object.assign({
              //top:'60px',
              backgroundColor:'#313340',
              //backgroundColor:'red',
              zIndex:'100',
              paddingTop:'7px'
            },menuStyle
            )}   >

        <style jsx global>{`
          .mainMenu .nav-item a{
            color: rgba(255,255,255,.5);
            font-size:14px;
          }
          .mainMenu .nav-item a:hover{
            color: rgba(255,255,255,.8);
          }
        `}</style>
        <Container className="mainMenu">
          <Row>
            <Col md={(isSticky)?1:3}>
              <Fade tag="div"  in={isSticky}  enter={false} exit={false} > 
                <Logo /> 
              </Fade>
            </Col>
            <Col  md={(isSticky)?8:6} >
              <Nav>{lists} </Nav>
            </Col>
            <Col md={3}>
              <Fade tag="div" className="d-flex align-items-center justify-content-center"  in={isSticky}  enter={false} exit={false} > 
                <div style={{width:'90px'}} >
                  <Cart cartSize={25} />
                </div>
                <div >
                  <Account fixSize="small" imgHeight="30px" />  
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
			
		);
	}

}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(MenuHeader);