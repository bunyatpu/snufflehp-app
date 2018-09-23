import React,{ Component } from "react";
import { 
  Button, 
  Card, 
  CardBody, 
  Col, Container, Row ,
  Breadcrumb,BreadcrumbItem,
  InputGroup,InputGroupAddon,Input
} from 'reactstrap';
import Router from "next/router";
import { connect } from 'react-redux'
import getConfig from 'next/config'



//import CardProduct from "../commons/CardProduct";



class ProductDetail extends Component {

  constructor(){
    super()
    this.state = {
      amt:1
    }
  }


  goto = (path) =>{
    Router.push(path)
  }

  handleInput = (e) =>{

 
    if( e.target.value.match(/[1-9]/g) ){
      this.setState({amt:e.target.value})
    }
   
  }

  onUpQty = () => {
    this.setState((prev)=>{
      return {amt:prev.amt+1}
    })
  }

  onDownQty = () => {
    this.setState((prev)=>{
      return {amt:(prev.amt <= 1) ? 1:prev.amt-1}
    })
  }




  render(){

    const { detail } = this.props;
    const { amt } = this.state
    const { publicRuntimeConfig:{API_URL_HOST} } = getConfig()

    const prodDetail = (detail.product !== null) ? detail.product:{}

    console.log('detail',detail)

    const coverPath = (prodDetail.cover_path !== '') 
          ? `${API_URL_HOST}/images/covers/${prodDetail.cover_path}`
          :''


    return (
      <div>
        <style jsx global>{`
          .product_detail .btn-outline-secondary{
            border-color: #c9cacc;
          }
          .product_detail .btn-warning{
            background-color: #f2711c;
            color:#fff;
          }

         
          .product_detail .btn-warning:hover,
          .product_detail .btn-warning:focus,
          .product_detail .btn-warning:active,
          .product_detail  .btn-warning.active,
          .product_detail  .open > .dropdown-toggle.btn-warning {
              background: #d06a28;
              color:#fff;
          }
          .product_detail .card{
            min-height:360px;
          }
        `}</style>
        <Container className="product_detail">
          <Row>
            <Col>
              <Breadcrumb >
                <BreadcrumbItem onClick={()=>this.goto('/')} ><a >หน้าหลัก</a></BreadcrumbItem>
                <BreadcrumbItem onClick={()=>this.goto('/all_products')} ><a>สินค้าทั้งหมด</a></BreadcrumbItem>
                <BreadcrumbItem active>{ prodDetail.name }</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="pr-1">
              <Card >
                <CardBody >

                  <img 
                    style={{height:'300px'}}
                    src={coverPath} 
                    alt="" 
                  />
                 
                  
                </CardBody>
              </Card>
            </Col>

            <Col  md="8" className="pl-1" >
              <Card  >
                <CardBody >

                  <Row>
                    <Col>
                      <h2>{prodDetail.name}</h2>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <p>{prodDetail.description}</p>
                      <hr/>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <span>ราคา</span>
                        <span 
                           className="mr-3 ml-4"
                           style={{
                            fontWeight:'bold',
                            color:'#ef810a',
                            fontSize:'30px'
                           }}
                          >
                          {prodDetail.price}
                        </span>
                      <span>บาท</span>
                      <hr />
                    </Col>
                  </Row>

                  <Row>
                    <Col >
                      <div className="d-flex align-items-center">
                        <div className="mr-3">จำนวน</div>
                        <InputGroup size="sm" style={{width:'180px'}}>
                          <InputGroupAddon addonType="prepend">
                            <Button outline onClick={this.onDownQty} style={{width:'50px'}}>-</Button>
                          </InputGroupAddon>
                          <Input 
                            onChange={(e)=>this.handleInput(e)}
                            className="text-center" 
                            value={amt} 
                            
                          />
                          <InputGroupAddon addonType="append">
                            <Button outline onClick={this.onUpQty}  style={{width:'50px'}}>+</Button>
                          </InputGroupAddon>
                        </InputGroup>

                      </div>
                     
                      <hr/>
                    
                    </Col>
                  </Row>
                 
                  <Row>
                    <Col>
                      <Button style={{width:'150px',padding:'8px'}} className="mr-3" color="info">เพิ่มลงรถเข็น</Button>    
                      <Button style={{width:'150px',padding:'8px'}}  color="warning">สั่งซื้อ</Button>
                    </Col>
                  </Row>
                  
                </CardBody>
              </Card>
            </Col>

          </Row>

          <Row>
            <Col>
              <Card className="mt-4">
                <CardBody >

                  <Row>
                    <Col>
                      <h4>รายละเอียดสินค้า</h4>
                      <hr/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>{ detail.detail }</p>
                    </Col>
                  </Row>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    detail:state.products.detail
  }
}

export default connect(mapStateToProps)(ProductDetail)