import React, { Component } from 'react';
import { connect } from "react-redux";
import { 
  Row,Col,
 Container,Card,CardBody,Button
} from 'reactstrap';
import OrderListItem from "./OrderListItem";
import Shiping from "./Shiping";
import ConfirmDelete from "../commons/ConfirmDelete";


class OrderLists extends Component {

  constructor(){
    super()
    this.state={
      checkAll:true
    }
  }

 
  
	render() {

    const { cart:{list},userInfo:{address} } = this.props 



    const lists = list.map((i,k)=>{

        return <OrderListItem key={k} item={i} />
      })
  
    
		return (
      <Container style={{marginTop:'20px'}}>

        <style jsx global>{`
          .rightOrder .badge-warning {
              color: #686969;
              background-color: #ffc107;
          }
          .rightOrder .badge-warning:hover {
            cursor:pointer;
            background-color:#e6b10f;
          }
          .rightOrder .alert{
            color:#676869
          }
        `}</style>

      
        <Row>
          <Col md={7}>
            <Row>
              <Col  className="mt-2" md="12">
                <Card style ={{
                        background: '#ececec',
                        border: '1px solid #d0d0d0'
                      }}>
                  <CardBody className="p-2" >
                    <Row>
                      <Col md="1" ></Col>
                      <Col md="6" className="text-center">รายการที่รอชำระเงิน</Col>
                      <Col md="2" className="text-right" >ราคา</Col>
                      <Col md="3" >จำนวน</Col>
                    </Row>
                  </CardBody>
                </Card>

              </Col>
              
              { lists }
            </Row>
          </Col>
          <Col md={5} className="rightOrder">
            <Card className="mt-2">
              <CardBody >
                <Row>
                  <Col>
                    <div className="alert alert-secondary d-flex justify-content-between p-2" >
                    
                      <div>ที่อยู่ในการจัดส่ง</div>
                      <div>
                        <span className="badge badge-warning p-2">เปลี่ยนที่อยู่</span>
                      </div>
                      
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{fontSize:'15px'}}>
                    <p>
                      {`${address.addr} ต.${address.sub_district} อ.${address.district} จ.${address.province} ${address.postcode} `}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="alert alert-secondary d-flex justify-content-between p-2 mt-3" >
                    
                      <div>ตัวเลือกในการจัดส่ง</div>
                      
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                      <Shiping />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="alert alert-secondary d-flex justify-content-between p-2 mt-3" >
                    
                      <div>สรุปรายการสั่งซื้อ</div>
                      
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{fontSize:'15px'}}>
                     <Row className="ml-2">
                       <Col md="7">ราคาสินค้ารวม</Col>
                       <Col md="3" className="text-right">54,000</Col>
                       <Col md="2">บาท</Col>
                     </Row>
                     <Row className="ml-2 mt-1">
                       <Col md="7">ค่าจัดส่ง</Col>
                       <Col md="3" className="text-right">120</Col>
                       <Col md="2">บาท</Col>
                     </Row>
                     <Row className="ml-2 mt-3">
                       <Col md="7"><b>รวม</b></Col>
                       <Col md="3" style={{fontSize:'20px',color:'orange',fontWeight:'bold'}} className="text-right">54,120</Col>
                       <Col md="2">บาท</Col>
                     </Row>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Button color="info" className="w-100">ชำระเงิน</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        <ConfirmDelete />
                    
      </Container>
    )
	}

}

const mapStateToProps = (state) =>{

  return {
    cart:state.products.cartOrders,
    userInfo:state.auth
  }
}

export default connect(mapStateToProps)(OrderLists)