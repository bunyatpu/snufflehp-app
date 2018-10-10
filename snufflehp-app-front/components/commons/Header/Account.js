import React, { Component } from 'react';
import Router from "next/router";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem,Modal, ModalBody, ModalFooter,Button } from 'reactstrap';
import { logoutAction } from "../../../redux/actions/authAction";
import getConfig from 'next/config'
//import { FaSearch } from 'react-icons/fa';

class Account extends Component {

  constructor(){
    super()
    this.state = {
      openAccMenu:false,
      modalLogout:false
    }
  }

  componentDidMount(){

    //load userinfo
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  goto = (url) =>{

    Router.push(url)
  }

  toggleAccMenu = () => {

    if (!this.state.openAccMenu) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({openAccMenu:!this.state.openAccMenu})

  }

  handleOutsideClick = (e) =>{

    if (this.node && this.node.contains(e.target)) {
      return;
    }
    
    this.toggleAccMenu();
  }


  openModalLogout = () => {
		this.setState({
      modalLogout: true
    });
	}

	isLogout = () =>{
    
		Router.push('/signin')
		this.setState({
      modalLogout: false
    });
    
    this.props.logoutAction()
		
  }
  
  toggleDialogLogOut = () =>{
    this.setState({
      modalLogout: !this.state.modalLogout
    });
	}


	render() {

    const { userInfo,imgHeight, responsive } = this.props 
    const { openAccMenu,modalLogout } = this.state
   
    const { publicRuntimeConfig:{API_URL_HOST} } = getConfig()

    //console.log('userInfo',userInfo)
    const fixStyle = (responsive !== undefined && responsive.mobile) ? { color:'#fff' }:{}

    let content = (<div>
        <a onClick={ () => this.goto('/signup') } style={{marginRight:'5px',color:'#fff'}}>สมัครใหม่</a>| 
        <a onClick={ () => this.goto('/signin') } style={{marginLeft:'5px',color:'#fff'}}>เข้าสู่ระบบ</a>
      </div>
    )

    let imgAvatar = (userInfo.avatar_path === '' ) ? '/static/images/avatars/avatar-new.jpg':`${API_URL_HOST}/images/avatars/${userInfo.avatar_path}` //

 
    if(userInfo.id !== undefined){
      content = (
        <div 
            onClick={() => this.toggleAccMenu()}
            className="d-flex align-items-center justify-content-end myacount"
          >
          <div style={{color:'#fff'}}>{userInfo.username}</div>
          <div>
            <img 
              style={{
                height:(imgHeight !== undefined)?imgHeight:'35px',
                width:(imgHeight !== undefined)?imgHeight:'35px'
              }}
              src={imgAvatar} 
              className="img-avatar" 
              alt="" />
          </div>
        </div>
      )
    }

		return (

      <div className="Account" style={{fontSize:'14px'}}  >
        <style jsx global>{`
          
          .img-avatar{
            
            margin: 0 10px;
            max-width: 100%;
            border-radius: 50em;
            vertical-align: middle;
            border-style: none;
            border:1px solid #fff;
          }
          .img-avatar:hover{
            border-color:#5dd208;
          }
          .myacount:hover{
            cursor:pointer;
          }
          .accountList {
            position: relative;
            z-index:10;
          }
          .accountList a{
            color:#555 !important;
          }
          .accountList .list-group{
            position: absolute;
            top:10px;
            width: 150px;
            left: 30%;
          }
          .accountList .pointerConnerGroup{
            position: absolute;
            width: 20px;
            height: 20px;
            top: 7px;
            background: #fff;
            transform: rotate(45deg);
            left: 75%;
            z-index:11;
          }
          .accountList .list-group-item{
            padding-top: 16px;
          }
          .accountList a.list-group-item:hover{
            cursor:pointer;
          }
        `}
        </style>
        { content }
        { openAccMenu &&
          <div className="accountList" ref={node => { this.node = node; }} >
        
            <ListGroup>
              <ListGroupItem tag="a" onClick={()=> this.goto('/my_account') }>จัดการบัญชี</ListGroupItem>
              <ListGroupItem tag="a" onClick={()=> this.openModalLogout()}>ออกจากระบบ</ListGroupItem>
            </ListGroup>
            
            <div className="pointerConnerGroup"></div>
          
          </div>
         }

        <Modal isOpen={modalLogout} toggle={this.toggleDialogLogOut} >
            <ModalBody>
              <h3>ต้องการออกจากระบบหรือไม่ ?</h3>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.isLogout} >Logout</Button>
              <Button olor="inherit" onClick={this.toggleDialogLogOut} >Cancel</Button>
            </ModalFooter>
        </Modal>
      </div>
      
		);
	}

}

const mapStateToProps = (state) => {
  return {
    userInfo:state.auth
  }
}


export default connect(mapStateToProps,{ logoutAction })(Account)