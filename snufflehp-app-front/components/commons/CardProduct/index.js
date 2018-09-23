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
    //e.preventDefault();
    //console.log('handleOver dir',dir)
    this.setState({hover:dir})
  }


	render() {
    //console.log('render Home')
    const { publicRuntimeConfig:{API_URL_HOST} } = getConfig()
    const { model,width } = this.props
    const { hover } = this.state
    //console.log('WritingItem model',model)


    const pathImg = (model.cover_path !== '') ? 
      `${API_URL_HOST}/images/covers/${model.cover_path}`
      :"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
    
		return (
      <Col md={width}>
        <Card  
          className="productOnCard"
          onMouseEnter={(e)=>this.handleOver(e,true)}
          onMouseLeave={(e)=>this.handleOver(e,false)}
          onClick={()=>this.goto(`/product/${model.id}`)}
          
          style={{
              height:'380px',
              marginBottom:'20px',
              border:(hover) ? '1px solid rgba(0, 0, 0, 0.27)':'1px solid #fff' ,
              boxShadow:(hover) ? 'rgba(34, 36, 38, 0.2) 0px 0px 13px 4px':'none'
            }}>
           

            
            <CardImg top width="100%" height="228" src={pathImg} alt="Card image cap" />
            <CardBody style={{padding:'20px 5px 0px 5px'}}>
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
                hover && (
                  <div 
                    className="text-center"
                    style={{
                      background: 'rgb(7, 175, 147)',
                      color: 'rgb(255, 255, 255)',
                      borderRadius: '2px',
                      padding: '8px',
                      fontSize:'14px'
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
   
  }
}

export default connect(mapStateToProps,{})(CardProduct)