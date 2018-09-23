import React, { Component } from 'react';
import { 
  Form,
  Button,
  Col,
  Container,
  Row,
  Alert,
  Fade,
  InputGroupAddon,
  InputGroupText
  
} from 'reactstrap';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { RenderTextField } from '../commons/forms/RenderHorizontalFields'
import { ClipLoader } from 'react-spinners';
import { updateUser } from "../../redux/actions/userAction";
import { FaCheckCircle } from 'react-icons/fa';
import ImageUpload from "./ImageUpload";
import getConfig from 'next/config'


const validate = values => {
  //console.log('validate',values);
  const errors = {}

  if (!values.email) {
    errors.email = "email ไม่ถูกต้อง"
  }

  if (!values.password) {
    errors.password = "รหัสผ่านไม่ถูกต้อง"
  }
  return errors
}

class MyAccountForm extends Component {

  constructor(){

    super()
    this.state = {
      loading:false,
      showSucc:false,
      alertMsg:'',
      alertOpen:false,
      imgAvatarFile:null
    }
  }

  onSubmit = async (value) => {
    //console.log(value)

    const { updateUser } = this.props
    value.imgAvatarFile = this.state.imgAvatarFile

    let formData = new FormData();

    this.setState({loading:true})

    // for(let k in value){
    //   formData.append(k,value[k])
    // }

  

    const res = await updateUser(value)

    if(res.status){

      //this.setState({showSecc:true})
      this.setState({showSucc:true})
      setTimeout(()=>this.setState({showSucc:false}),1500)

    }else{


      this.setState({
        alertOpen:true,
        alertMsg:(res.msg.message) ? res.msg.message:res.msg
      })
    }

    this.setState({loading:false})
    
  }

  setImg = (files) =>{
    //console.log(files)
    this.setState({imgAvatarFile:files})
  }

	render() {

    const { publicRuntimeConfig:{API_URL_HOST} } = getConfig()

    const { handleSubmit,userInfo } = this.props
    const { loading,showSucc,alertMsg,alertOpen } = this.state

    let imgAvatar = (userInfo.avatar_path === '' ) ? '/static/images/avatars/avatar-new.jpg':`${API_URL_HOST}/images/avatars/${userInfo.avatar_path}` //

    //const imgAvatar = '/static/images/avatars/avatar-new.jpg';

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

        <Row>
          <Col md="3">
 
            <ImageUpload pathImg={imgAvatar} setImg={this.setImg} />

          </Col>
          <Col md="9">

            <Row className="">
              <Col md="9">
                <Form action="" method="post" className="form-horizontal">

                  <Field 
                    id="email"
                    name="email" 
                    component={RenderTextField} 
                    label="Email"
                    addonapp={verifiedEmail}
                  />

                  <Field 
                    id="username"
                    name="username" 
                    component={RenderTextField} 
                    label="Username"
                  />

                  <Field 
                    id="tel"
                    name="tel" 
                    component={RenderTextField} 
                    label="เบอร์โทร"
                  />

                </Form>
              </Col>
            </Row>

            <Row className="">
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
                        className="float-right"
                      >
                      <ClipLoader
                      
                        sizeUnit={"px"}
                        size={16}
                        color={'#fff'}
                        loading={loading}
                      />
                      {!loading && 'บันทึก'}
                      
                    </Button>
                  </Col>
                </Row>
                
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
    initialValues:state.auth
  }
}

export default connect(mapStateToProps, { updateUser })(
  reduxForm({form:'formMyAccount',enableReinitialize: true,validate})(MyAccountForm)
);