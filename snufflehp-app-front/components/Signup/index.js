import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Button, 
  Card, 
  CardBody, 
  Col, Container, Form, Row ,
  Alert,
  Fade
} from 'reactstrap';
import { FaUser,FaLock,FaCheckCircle } from 'react-icons/fa';
import { Field, reduxForm,SubmissionError } from 'redux-form'
import { RenderTextField } from '../commons/forms/RenderGroupFields'
import { signupAction } from "../../redux/actions/authAction";
import Router from 'next/router'
import { ClipLoader } from 'react-spinners';

const validate = values => {
  //console.log('validate',values);
  const errors = {}
  if (!values.username) {
    errors.username = "username ไม่ถูกต้อง"
  }

  if (!values.email) {
    errors.email = "email ไม่ถูกต้อง"
  }

  if (!values.password) {
    errors.password = "รหัสผ่านไม่ถูกต้อง"
  }

  if (!values.repassword) {
    errors.repassword = "ยืนยันรหัสผ่าน"
  }else if(values.password !== values.repassword){
    errors.re_password = "รหัสผ่านไม่ตรง"
  }
 

  return errors
}

class Signup extends Component {


  constructor(){
    super()
    this.state = {
      alertOpen:false,
      alertMsg:'',
      loading:false,
      showSecc:false
    }
  }


  onSubmit = async (value) => {
    //console.log(value)
    const { signupAction } = this.props 

    this.setState({loading:true})

    const resSign = await signupAction(value)

    if(resSign.status){

      //console.log('signup succes')


      //Router.push('/')
      this.setState({alertOpen:false,showSecc:true})

      setTimeout(()=>{
        Router.push('/')
      },1500)

    }else{

      //console.log('error->',resSign)

      this.setState({
        alertOpen:true,
        alertMsg:resSign.msg
      })
    }

    this.setState({loading:false})




  }


	render() {

    const { handleSubmit } = this.props
    const { alertOpen,alertMsg,loading,showSecc } = this.state

		return (
      <div className="app flex-row align-items-center" style={{marginTop:'150px'}}>
        <style jsx global>{`
          input{
            font-weight: 100;
          }
        `}
        </style>
        <Container>
        
          <Row className="justify-content-center" >
            <Col md="6">
              <Fade tag="div"  in={!showSecc}  enter={false} exit={false} > 
                { !showSecc &&
                  <Card className="mx-4" style={{minHeight:'540px'}}>
                    <CardBody className="p-4">

                      <Form>
                        <h1 className="text-center">สมัครสมาชิก</h1>
                        <p className="text-muted text-center">สร้างบัญชีของคุณ</p>

                        <Field 
                          id="username"
                          name="username" 
                          component={RenderTextField} 
                          label="Username"
                          icon={<FaUser />}
                        />

                        <Field 
                          id="email"
                          name="email" 
                          component={RenderTextField} 
                          label="Email"
                          icon={'@'}
                        />

                      
                        <Field 
                          type="password"
                          id="password"
                          name="password" 
                          component={RenderTextField} 
                          label="Password"
                          icon={<FaLock />}
                        />

                        <Field 
                          type="password"
                          id="repassword"
                          name="repassword" 
                          component={RenderTextField} 
                          label="Repeat password"
                          icon={<FaLock />}
                        />

                        <Alert isOpen={alertOpen} color="danger">
                          {alertMsg}
                        </Alert>

                        <Button 
                            color="success" 
                            block 
                            onClick={handleSubmit(this.onSubmit)}
                            disabled={ loading }
                          >
                          <ClipLoader
                          
                            sizeUnit={"px"}
                            size={25}
                            color={'#fff'}
                            loading={loading}
                          />
                          {!loading && 'Create Account'}
                          
                        </Button>
                      </Form>

                    </CardBody>
                  </Card>
                }
              </Fade>
              <Fade tag="div"  in={showSecc}  enter={false} exit={false} > 
                { showSecc &&
                  <Card className="mx-4" style={{minHeight:'540px',paddingTop:'120px'}}>
                    <CardBody className="p-4 d-flex flex-column align-items-center">
                     
                      <FaCheckCircle size={70} color="green" />
                      <h4 style={{marginTop:'10px'}}>บันทึกสำเร็จ</h4>
                      <p className="text-muted text-center">กำลังไปหน้าหลัก...</p>
                    </CardBody>
                  </Card>
                }
              </Fade>


            </Col>
          </Row>
        

         

        </Container>
      </div>
    );
	}

}



export default connect(null,{ signupAction })( 
  reduxForm({form:'formSignup',validate})(Signup) 
);
