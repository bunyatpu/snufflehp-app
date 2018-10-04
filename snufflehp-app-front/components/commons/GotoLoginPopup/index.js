import React, { Component } from 'react';
import Router from 'next/router'
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter,Button } from 'reactstrap';
import { showDialogGotoSignin, closeDialogGotoSignin } from "../../../redux/actions/UtilityAction";

class GotoLoginPopup extends Component {

  goto = (url) => {

    const { closeDialogGotoSignin} = this.props
    closeDialogGotoSignin()
    Router.push(url)

    
    //closeDialogGotoSignin()
  }

  toggleDialogLogOut = () =>{

   const { closeDialogGotoSignin} = this.props

   closeDialogGotoSignin()

  }

	render() {
    //console.log('render Home')
    const { open } = this.props



		return (

      <Modal isOpen={open} toggle={this.toggleDialogLogOut} >
          <ModalBody>
            <h3>กรุณาลงชื่อเข้าใช้ในระบบ</h3>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.goto('/signin')} >login</Button>
            <Button olor="inherit" onClick={this.toggleDialogLogOut} >Cancel</Button>
          </ModalFooter>
      </Modal>

      
		);
	}

}

const mapStateToProps = (state) => {
  return {
    open:state.UtilityReducer.dialogShowGotoLogin
  }
}

export default connect(mapStateToProps,{ showDialogGotoSignin,closeDialogGotoSignin })(GotoLoginPopup)
