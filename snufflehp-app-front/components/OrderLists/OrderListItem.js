import React, { Component } from 'react';
import { 
  Row,Col,
  Card,CardBody,
 InputGroup,InputGroupAddon,Button,Input
} from 'reactstrap';
import getConfig from 'next/config'
import { connect } from "react-redux";
import { updateCart } from "../../redux/actions/productsAction";
import { showDialogGotoSignin,showConfirmDelete } from "../../redux/actions/UtilityAction";
import { toggleStatus } from "../../redux/actions/statusTagActon";


class OrderListItem extends Component {

  constructor(){
    super()
    this.state={
      amt:0
    }
  }

  handleInput = (e) =>{

    if( e.target.value.match(/[1-9]/g) ){
      //this.setState({amt:e.target.value})

      //console.log('value->',e.target.value)
      this.onHandleUpdateCart( e.target.value );
    }
   
  }

  onUpQty = () => {

    
    const { item:{amount} } = this.props

    //console.log('onUpQty amount',amount)
    
    this.onHandleUpdateCart( parseInt(amount,10) + 1 );
  }

  onDownQty = () => {
    const { item:{amount} } = this.props

    let qtyNow = parseInt(amount,10) - 1

    if(qtyNow < 0){
      qtyNow = 0
    }
    
    this.onHandleUpdateCart( qtyNow );
  }

  onHandleUpdateCart = async (qty) => {
    const { updateCart,item,showDialogGotoSignin,toggleStatus } = this.props

    const res = await updateCart({
      product_id:item.product.id,
      amount:qty
    })

    //console.log('res->',res)

    if(!res.status){
      console.log('showDialogGotoSignin()')
      showDialogGotoSignin()
    }else{
      toggleStatus()
    }
  }

  onToggleChecked = async (data) =>{

    const { item,updateCart,showDialogGotoSignin } = this.props
    //console.log('data',data)

    const res = await updateCart({
      product_id:item.product.id,
      amount:item.amount,
      status:(data.status)?1:0
    })

    //console.log('res->',res)

    if(!res.status){
      //console.log('showDialogGotoSignin()')
      showDialogGotoSignin()
    }else{
      //toggleStatus()
    }

  }

  showConfirmDelete = () =>{
    const { showConfirmDelete,item } = this.props

    console.log('showConfirmDelete')

    showConfirmDelete(item)
  }
  
	render() {

    const { item } = this.props
    const { publicRuntimeConfig:{API_URL_HOST} } = getConfig()

    //console.log('===> render item',item)

    const pathImg = (item.product.cover_path !== '') ? 
    `${API_URL_HOST}/images/covers/${item.product.cover_path}`
    :"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
  
		return (
      <Col className="mt-2" md="12">
        <Card>
          <CardBody className="p-2" >
            <Row>
              <Col md="1" >
                <input 
                  type="checkbox" 
                  checked={(item.status === 1)?true:false} 
                  onChange={()=>this.onToggleChecked({status:!item.status})}
                />
              </Col>
              <Col md="6" >

                <div className="d-flex flex-row ">
                  <div className="p-2">
                    <img 
                      style={{height:'70px'}}
                      src={pathImg} 
                      className="img-avatar-big" 
                      alt="" 
                    />
                  </div>
                  <div className="p-2">
                    <div style={{fontWeight:'600'}}>{item.product.name}</div>
                    <div style={{color:'#555',fontSize:'14px'}}>{item.product.description}</div>
                  </div>
                </div>
                
              
              </Col>
              <Col md="2" className="text-right" >฿{item.product.price}</Col>
              <Col md="3" >
                <div className="d-flex align-items-center">
          
                  <InputGroup size="sm" style={{width:'100px'}}>
                    <InputGroupAddon addonType="prepend">
                      <Button outline onClick={this.onDownQty} style={{width:'30px'}}>-</Button>
                    </InputGroupAddon>
                    <Input 
                      onChange={(e)=>this.handleInput(e)}
                      className="text-center" 
                      value={item.amount} 
                      style={{borderColor: '#7f7b7b'}}
                      
                    />
                    <InputGroupAddon addonType="append">
                      <Button outline onClick={this.onUpQty}  style={{width:'30px'}}>+</Button>
                    </InputGroupAddon>
                  </InputGroup>

                </div>
                <button 
                    type="button" 
                    className="close" 
                    onClick={()=>this.showConfirmDelete()}
                    style={{
                      'top': '-7px',
                      'position': 'absolute',
                      'right': '16px',
                      color:'orange'
                    }}
                  >
                  <span aria-hidden="true">&times;</span>
                </button>
              </Col>
            </Row>
          </CardBody>
        </Card>

      </Col>
    )
	}

}



export default connect(null,{ updateCart, showDialogGotoSignin, toggleStatus, showConfirmDelete })(OrderListItem)