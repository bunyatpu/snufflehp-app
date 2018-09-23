import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Button, 
  Card, 
  CardBody, 
  Col, Container, Form, Row ,
  CardGroup
} from 'reactstrap';
import { FaLock,FaCheckCircle } from 'react-icons/fa';
import { Field, reduxForm } from 'redux-form'
import { RenderTextField } from '../commons/forms/RenderGroupFields'
import { signinAction } from "../../redux/actions/authAction";
import Router from 'next/router'
import { ClipLoader } from 'react-spinners';

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

class Signin extends Component {


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
    const { signinAction } = this.props 

    this.setState({loading:true})

    const resSign = await signinAction(value)

    if(resSign.status){

      //console.log('signup succes',resSign)


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

  goto = (url) => {
    Router.push(url)
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

          {!showSecc &&
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>ลงชื่อเข้าใช้</h1>
                      <p className="text-muted">ลงชื่อเพื่อไปยังบัญชีของคุณ</p>

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

                      <Row>
                        <Col xs="6">
                          <Button 
                              color="info" 
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
                            {!loading && 'Login'}
                            
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-info py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>สมัครสมาชิก</h2>
                      <p>ติดตามงานเขียนออกใหม่ก่อนใคร อ่านนิยายออนไลน์ นิยายหายาก สะสม สมัครสมาชิกเลยตอนนี้ !!</p>
                      <Button  
                          color="info" 
                          className="mt-3" 
                          active
                          onClick={()=>{this.goto('/signup')}}
                        >
                        สมัครเลย!
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          }

          {showSecc &&
          <Row className="justify-content-center">
            <Col md="8">
              <Card className="p-4">
                <CardBody className="p-4 d-flex flex-column align-items-center">
                  <FaCheckCircle size={70} color="green" />
                  <h4 style={{marginTop:'10px'}}>ลงชื่อสำเร็จ</h4>
                  <p className="text-muted text-center">กำลังไปหน้าหลัก...</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          }
        </Container>
      </div>
    );
	}

}



export default connect(null,{ signinAction })( 
  reduxForm({form:'formSignin',validate})(Signin) 
);
