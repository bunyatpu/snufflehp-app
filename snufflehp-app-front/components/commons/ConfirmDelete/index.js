import React, { Component } from 'react';
import Router from 'next/router'
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter,Button } from 'reactstrap';
import { showConfirmDelete, closeConfirmDelete } from "../../../redux/actions/UtilityAction";
import { deleteOrderItem } from "../../../redux/actions/productsAction";

class ConfirmDelete extends Component {

  

  delete = () =>{

    const { item,deleteOrderItem ,closeConfirmDelete} = this.props

    //console.log('item',item)

    deleteOrderItem(item);
    closeConfirmDelete()

  }

  toggleDialogLogOut = () =>{

   const { closeConfirmDelete} = this.props

   closeConfirmDelete()

  }

	render() {
    //console.log('render Home')
    const { open } = this.props

		return (

      <Modal isOpen={open} toggle={this.toggleDialogLogOut} >
          <ModalBody>
            <h3>ต้องการลบสินค้าหรือไม่?</h3>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={()=>this.delete()} >ลบ</Button>
            <Button olor="inherit" onClick={this.toggleDialogLogOut} >ปิดหน้าต่าง</Button>
          </ModalFooter>
      </Modal>

      
		);
	}

}

const mapStateToProps = (state) => {
  return {
    open:state.UtilityReducer.confirmDelete,
    item:state.UtilityReducer.itemPrepareDel
  }
}

export default connect(mapStateToProps,{ showConfirmDelete,closeConfirmDelete, deleteOrderItem })(ConfirmDelete)
