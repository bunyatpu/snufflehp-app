import React, { Component } from 'react';
import { connect } from "react-redux";
import { 
  Container,
  Row,
  Col
} from 'reactstrap';
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import Account from "./Account";
import NProgress from 'nprogress'
import Router from 'next/router'
import { loadCarts } from "../../../redux/actions/productsAction";
import { getCookie } from "../../commons/utility/cookie";
import GotoLoginPopup from "../GotoLoginPopup";

Router.onRouteChangeStart = (url) => {
  //console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


class MainHeader extends Component {


  componentDidMount(){

    //console.log('componentDidMount')

    const token = getCookie('token');
    
    if(token !== undefined){

      const { loadCarts } = this.props

      loadCarts()

    }

   

  }


	render() {
    //console.log('render Home')
    
    //console.log('props responsive',this.props.responsive)

		return (

      <Container>

        <GotoLoginPopup />
				<Row style={{paddingTop:'15px'}}>
          <Col md={2}><Logo /></Col>
          <Col md={7} >
      
            <div className="d-flex flex-row justify-content-center">
              <div className="text-center"  style={{width:'85%'}}><Search /></div>
            </div>
            
            
          </Col>
          <Col md={3} >

            <div className="d-flex align-items-center justify-content-end">
              <div style={{marginRight:'25px'}}><Cart /></div>
              <Account />
            </div>
           
          </Col>
        </Row>
      </Container>
      
		);
	}

}

const mapStateToProps = (state) => {

  return  {
    responsive:state.responsive
  }

}

export default connect(mapStateToProps,{ loadCarts })(MainHeader)


// (
//   return (

//     <Container>
//       <Row>
//         <Col md={2}><Logo /></Col>
//         <Col md={7} style={{display:'flex'}}>
//           <div style={{flexDirection:'row',display:'contents'}}><Search /></div>
//           <div style={{flexDirection:'row',display:'contents'}}><Cart /></div>
          
          
//         </Col>
//         <Col md={3}>acount</Col>
//       </Row>
//     </Container>
    
//   );
// )