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

    const { newBook, newOther, responsive } = this.props 

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
     
        <div style={{padding:'0px'}}>
          <SlidePreview />
        </div>
        <Container fluid={responsive.mobile} style={{marginTop:'20px'}}>
          <Row>
            <Col>
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
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    newBook:state.products.productNewBook,
    newOther:state.products.productNewOther,
    responsive:state.responsive
  }
}

// (
//   <Container fluid style={{marginTop:'20px',padding:'0px'}}>
//           <Row>
//             <Col style={{border:'1px solid red'}}> 
//               <SlidePreview />
//             </Col>
//           </Row>
//         </Container>
// )

export default connect(mapStateToProps)(Home)