import React,{ Component } from "react";
import { connect } from "react-redux";
import { 

  Card, 
  CardBody, 
  Col, Container, Row 

} from 'reactstrap';
import SlidePreview from "./SlidePreview";
import CardProduct from "../commons/CardProduct";


class Home extends Component {


  render(){

    const { newBook, newOther } = this.props 

    //console.log('newOther',newOther);

   
  
    let bookLists = <div></div>;
    let otherLists = <div></div>;

    if(newBook.length > 0){

      bookLists = newBook.map((i,k)=>{
        return <CardProduct mode="edit" width={3} key={k} model={i} />
      })
    }

    if(newOther.length > 0){

      otherLists = newOther.map((i,k)=>{
        return <CardProduct mode="edit" width={3} key={k} model={i} />
      })
    }
   

    return (
      <div>
        <Row>
          <Col> 
            <SlidePreview />
          </Col>
        </Row>
        <Row>
          
          <Col>
            <Container style={{marginTop:'20px'}}>
              <h5>หนังสือมาใหม่</h5>
              <Card style={{marginBottom:'20px'}}>
                <CardBody >
                  <Row>
                    { bookLists }
                  </Row>
                </CardBody>
              </Card>

              <h5>สินค้าอื่นๆมาใหม่</h5>
              <Card>
                <CardBody >
                  <Row>
                    { otherLists }
                  </Row>
                </CardBody>
              </Card>
            </Container>
          </Col>
         
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    newBook:state.products.productNewBook,
    newOther:state.products.productNewOther
  }
}

export default connect(mapStateToProps)(Home)