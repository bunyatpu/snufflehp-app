import React, { Component } from 'react';
import { 
  Form,
  Button,
  Col,
  Container,
  Row,
  FormGroup,
  Label,
  Modal, ModalHeader, ModalBody, ModalFooter
  
} from 'reactstrap';
import { connect } from 'react-redux'
import AddrForm from '../commons/forms/AddrForm'




class MyAddressForm extends Component {

  constructor(){

    super()
    this.state = {
      dialogAddr:false
    }
  }

  showDialogAddr = () => {

    this.setState({dialogAddr:true})
  }

  toggle = () => {
    this.setState({
      dialogAddr: !this.state.dialogAddr
    });
  }


	render() {

    let { userInfo:{address} } = this.props
    const { dialogAddr } = this.state

    address = (address) ? address:{}
    //console.log('address',address)

 
		return (
      <Container style={{marginTop:'20px'}}>
        <style jsx global>{`
          .alert-success {
              color: #155724 !important;
              background-color: #effbf2 !important;
              border-color: #4da962 !important;
          }
        `}</style>
       
        <Row className="justify-content-md-center">
          <Col md="9">
            <Form action="" method="post" className="form-horizontal">

              <FormGroup row >
                <Col md="3" className="text-right">
                  <Label htmlFor="">ที่อยู่</Label>
                </Col>
                <Col xs="12" md="9">
                  { (address.addr !== undefined ) ? address.addr:'-' }
                </Col>
              </FormGroup>

              <FormGroup row >
                <Col md="3" className="text-right">
                  <Label htmlFor="">ตำบล</Label>
                </Col>
                <Col xs="12" md="9">
                  { (address.sub_district !== undefined ) ? address.sub_district:'-' }
                </Col>
              </FormGroup>

              <FormGroup row >
                <Col md="3" className="text-right">
                  <Label htmlFor="">อำเภอ</Label>
                </Col>
                <Col xs="12" md="9">
                  { (address.district !== undefined ) ? address.district:'-' }
                </Col>
              </FormGroup>

              <FormGroup row >
                <Col md="3" className="text-right">
                  <Label htmlFor="">รหัสไปรษ์ณี</Label>
                </Col>
                <Col xs="12" md="9">
                  { (address.postcode !== undefined ) ? address.postcode:'-' }
                </Col>
              </FormGroup>

              <FormGroup row >
                <Col md="3" className="text-right">
                  
                </Col>
                <Col xs="12" md="9">
                  <Button 
                      style={{width:'90px'}}
                      color="info" 
                      onClick={()=>this.showDialogAddr()}
                    >
                    แก้ไขที่อยู่
                  </Button>
                </Col>
              </FormGroup>

            </Form>
          </Col>
        </Row>

        <Modal isOpen={dialogAddr} toggle={()=>this.toggle()} >
          <ModalHeader toggle={()=>this.toggle()}>แก้ไขที่อยู่</ModalHeader>
          <ModalBody>
            <AddrForm onCloseDialog={this.toggle} />
          </ModalBody>
        </Modal>
       
      </Container>
			
		);
	}

}

const mapStateToProps = (state) => {
  return {
    userInfo:state.auth
  }
}

export default connect(mapStateToProps, {} )(MyAddressForm);