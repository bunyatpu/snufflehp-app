import React, { Component } from 'react';

import { 
  Card, 
  CardImg, 
  CardBody,
  CardTitle, 
  CardSubtitle,
  Col
} from 'reactstrap';
//import { FaEye ,FaCommentAlt } from 'react-icons/fa';
import Router from 'next/router'
import { connect } from 'react-redux'
import getConfig from 'next/config'
import { updateCart } from "../../../redux/actions/productsAction";
import { toggleStatus } from "../../../redux/actions/statusTagActon";
import { showDialogGotoSignin } from "../../../redux/actions/UtilityAction";



class CardProduct extends Component {

  constructor(props){
    super(props)
    const routeUrl = (props.mode === 'edit') ? '/edit_content/':'/article/'
    this.state = {
      mode:'view',
      routeUrl,
      hover:false
    }
  }

  goto = (url) =>{


    Router.push(url)

  }

  handleOver = (e,dir) =>{

    this.setState({hover:dir})
  }

  handleAddCart = async (e) => {

    e.preventDefault();
    e.stopPropagation();//ป้องกัน click parent

    //console.log('handleAddCart')
    const { updateCart,model:{id},cart:{list},toggleStatus,showDialogGotoSignin } = this.props

    //filter
    const currProd = list.filter((i)=>{
      return (i.product_id == id)
    })

    //console.log('currProd',currProd)

  
    const modelNow = (currProd.length <= 0) ? {amount:0}:currProd[0]

    const res = await updateCart({
      product_id:id,
      amount:( 1 + parseInt(modelNow.amount,10) )
    })

    if(!res.status){
      showDialogGotoSignin()
    }else{
      toggleStatus()
    }

    //this.showStatusTag()
    

  }


	render() {
    //console.log('render Home')
    const { publicRuntimeConfig:{API_URL_HOST} } = getConfig()
    const { model,width,responsive } = this.props
    const { hover } = this.state
    //console.log('WritingItem model',model)

    //const fixUrl = 'http://192.168.1.123:3005'

    const pathImg = (model.cover_path !== '') ? 
      `${API_URL_HOST}/images/covers/${model.cover_path}`
      :"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
    
		return (
      <Col  xs="12" sm="6" lg="3" >
        <Card  
          className="productOnCard"
          onMouseEnter={(e)=>this.handleOver(e,true)}
          onMouseLeave={(e)=>this.handleOver(e,false)}
          onClick={()=>this.goto(`/product/${model.id}`)}
          
          style={{
              height:(responsive.mobile)?'650px':'380px',//'380px',
              marginBottom:'20px',
              border:(hover) ? '1px solid rgba(0, 0, 0, 0.27)':'1px solid #fff' ,
              boxShadow:(hover || responsive.mobile) ? 'rgba(34, 36, 38, 0.2) 0px 0px 13px 4px':'none'
            }}>
           

            
            <CardImg 
              top 
              style={{
                  width:'100%', 
                  height:responsive.mobile?'70%':'60%',//'228px'
                }}  
              src={pathImg} 
              alt="Card image cap" />

            <CardBody 
                style={{
                  padding:'20px 5px 0px 5px'
                }} >
              <CardTitle>{model.name}</CardTitle>
              <CardSubtitle>{model.author}</CardSubtitle>
              <div 
                style={{
                  fontWeight:'400',
                  color:'#ef810a',
                  fontSize:'20px',
                  marginTop:'10px'
                }} >
                ฿ {model.price}
              </div>
              {
                (hover || responsive.mobile) && (
                  <div 

                    onClick={(e)=>this.handleAddCart(e)}
                    className="text-center"
                    style={{
                      background: 'rgb(7, 175, 147)',
                      color: 'rgb(255, 255, 255)',
                      borderRadius: '2px',
                      padding: '8px',
                      fontSize: (responsive.mobile) ? '30px':'14px'
                    }}>
                    เพิ่มลงในตะกร้า
                  </div>
                )
              }
             
              
            </CardBody>
           
          </Card>
      </Col>
		);
	}

}

const mapStateToProps = (state) =>{
  return {
    cart:state.products.cartOrders,
    responsive:state.responsive
  }
}

export default connect(mapStateToProps,{ updateCart,toggleStatus, showDialogGotoSignin })(CardProduct)