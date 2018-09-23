import React, { Component } from 'react';
import { 
  Form,
  Button,
  Col,
  Container,
  Row,
  FormGroup,
  Label,
  Badge,
  Alert,
  Fade,
  InputGroupAddon,
  InputGroupText,
  InputGroup
  
} from 'reactstrap';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { RenderTextField } from '../commons/forms/RenderHorizontalFields'
import { ClipLoader } from 'react-spinners';
import { updatePassword } from "../../redux/actions/userAction";
import { FaCheckCircle } from 'react-icons/fa';


const validate = values => {
  //console.log('validate',values);
  const errors = {}

  if (!values.old_password) {
    errors.old_password = "รหัสผ่านไม่ถูกต้อง"
  }

  if (!values.new_password) {
    errors.new_password = "ยืนยันรหัสผ่าน"
  }else if(values.new_password !== values.re_new_password){
    errors.re_password = "รหัสผ่านไม่ตรง"
  }

  return errors
}

class PasswordForm extends Component {

  constructor(){

    super()
    this.state = {
      loading:false,
      showSucc:false,
      alertMsg:'',
      alertOpen:false
    }
  }

  onSubmit = async (value) => {
    console.log(value)

    const { updatePassword,change } = this.props

    this.setState({loading:true})

    const res = await updatePassword(value)

    if(res.status){

      //this.setState({showSecc:true})

      this.setState({showSucc:true,alertOpen:false,alertMsg:''})
      setTimeout(()=>this.setState({showSucc:false}),1500)

    }else{

      console.log('res',res)

      this.setState({
        alertOpen:true,
        alertMsg:res.msg
      })
    }

    this.setState({loading:false})
    
    

  }

	render() {

    const { handleSubmit,userInfo } = this.props
    const { loading,showSucc,alertMsg,alertOpen } = this.state

    //console.log('userInfo',userInfo)
    // const verifiedEmail = (userInfo.verify_email === 1) ?
    //   (<Badge className="ml-2" style={{padding:'9px',fontSize:'12px'}} color="success" >verified</Badge>):
    //   (<Badge className="ml-2" style={{padding:'9px',fontSize:'12px'}} color="warning" >not verified</Badge>)

    const verifiedEmail = (userInfo.verify_email === 1) ?
      (
        <InputGroupAddon addonType="append">
            
            <InputGroupText style={{
                backgroundColor:'#8ee28e',
                border:'1px solid #6a757e',
                zIndex:'1',
                color:'#565863'
              }}>
              verified
            </InputGroupText>
          </InputGroupAddon>
      ):
      (
        <InputGroupAddon addonType="append">
            
            <InputGroupText style={{
                backgroundColor:'#ffc000',
                border:'1px solid #6a757e',
                zIndex:'1',
                color:'#565863'
              }}>
              not verified
            </InputGroupText>
          </InputGroupAddon>
      )
  

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

              <Field 
                type="password"
                id="old_password"
                name="old_password" 
                component={RenderTextField} 
                label="รหัสผ่านเดิม"
              />

              <Field 
                type="password"
                id="new_password"
                name="new_password" 
                component={RenderTextField} 
                label="รหัสผ่านใหม่"
              />

              <Field 
                type="password"
                id="re_new_password"
                name="re_new_password" 
                component={RenderTextField} 
                label="ยืนยันรหัส"
              />

            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center row">
          <Col md="9" >

            <Row>
              <Col md="12">
                <Alert isOpen={alertOpen} color="danger">
                  {alertMsg}
                </Alert>
              </Col>
            </Row>

            <Row>
              <Col md="3"> </Col>
              <Col xs="12" md="9">
                <Button 
                    style={{width:'90px'}}
                    color="info" 
                    onClick={handleSubmit(this.onSubmit)}
                    disabled={ loading }
                  >
                  <ClipLoader
                  
                    sizeUnit={"px"}
                    size={16}
                    color={'#fff'}
                    loading={loading}
                  />
                  {!loading && 'เปลี่ยน'}
                  
                </Button>
              </Col>
            </Row>
            
          </Col>
        </Row>
      
        <Fade tag="div" in={showSucc} style={{ position: 'absolute',top: '0',right: '0',margin: '10px',zIndex:'2' }}>
          
          <Alert color="success" className="d-flex align-items-center" style={{width:'200px'}} >
             <FaCheckCircle size={25} className="mr-2" />บันทึกสำเร็จ
          </Alert>
        </Fade>
      </Container>
			
		);
	}

}

const mapStateToProps = (state) => {
  return {
    userInfo:state.auth,
    initialValues:{}
  }
}

export default connect(mapStateToProps, { updatePassword })(
  reduxForm({form:'formPassword',enableReinitialize: true,validate})(PasswordForm)
);