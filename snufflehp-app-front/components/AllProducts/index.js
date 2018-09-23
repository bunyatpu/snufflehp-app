import React,{ Component } from "react";
import { 
  Button, 
  Card, 
  CardBody, 
  Col, Container, Row ,
  Breadcrumb,BreadcrumbItem
} from 'reactstrap';
import Router from "next/router";
import { connect } from 'react-redux'



import CardProduct from "../commons/CardProduct";



class AllProducts extends Component {


  goto = (path) =>{
    Router.push(path)
  }


  render(){

    const { products } = this.props;


    //console.log('products',products)

    const models = products

   

    let lists = <div></div>;


    lists = models.map((i,k)=>{
      return <CardProduct mode="edit" width={3} key={k} model={i} />
    })



    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Breadcrumb >
                <BreadcrumbItem onClick={()=>this.goto('/')} ><a >หน้าหลัก</a></BreadcrumbItem>
                <BreadcrumbItem active>สินค้าทั้งหมด</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody >

                  <Row>
                    <Col md="12" className="text-left">
                      <h5>สินค้าทั้งหมด</h5>
                      <hr />
                    </Col>
                  </Row>
                  <Row>
                    { lists }
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
    products:state.products.productAll
  }
}

export default connect(mapStateToProps)(AllProducts)