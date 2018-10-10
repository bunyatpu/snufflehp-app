import React,{ Component } from "react";
import { connect } from "react-redux";
import { 
  TabContent, TabPane, Nav, NavItem, NavLink, 
  Button,Row, Col ,
  Label
} from 'reactstrap';
import classnames from 'classnames';
import { FaCheckCircle } from 'react-icons/fa';
import { selShippingType, toggleShieldPackage } from "../../redux/actions/productsAction";



class Shiping extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  onSelShippingType = (type) =>{

    //console.log('onSelShippingType')

    const { selShippingType } = this.props

    selShippingType(type)

  }

  onSelShieldPacking = (type) => {

    //console.log('type',type)
    const { toggleShieldPackage } = this.props
    toggleShieldPackage(type)

  }

  render(){

    const { cart:{ shipping } ,cart:{ summary }} = this.props

    //console.log('-->cart',shipping,summary)


    return (
      <div>
        <style jsx global>{`
          .rightOrder  .tab-content{
            border-left: 1px solid;
            border-right: 1px solid;
            border-bottom: 1px solid;
            border-color: #dee2e6;
          }

          .rightOrder .btn-shiping button{
            min-width:120px
          }

          .rightOrder .btn-shiping button.btn-outline-secondary{
            border-color: #bbb;
            color: #bbb;
          }
            
        `}</style>
        <Row>
          <Col sm="12">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }} >

                  ไปรษณีย์ไทย
                </NavLink>
              </NavItem>
            </Nav>
        
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12" >
                    <div className="m-3 btn-shiping">
                      { !summary.showNormal &&
                        <Button 
                            onClick={()=>this.onSelShippingType(0)}
                            outline 
                            color={shipping.typeSel === 0 ? "success":"secondary"} 
                            className="mr-3" 
                          >
                          <div className="d-flex flex-row justify-content-center align-items-center">
                            { shipping.typeSel === 0 && <FaCheckCircle /> }
                            <div className="ml-1">ลงทะเบียน {` ${summary.priceNow[0]} บาท`} </div>
                          </div>
                        </Button>
                      }
                      { summary.showNormal &&
                        <Button 
                            onClick={()=>this.onSelShippingType(1)}
                            outline 
                            color={shipping.typeSel === 1 ? "success":"secondary"} 
                            className="mr-3" 
                          >
                          <div className="d-flex flex-row justify-content-center align-items-center">
                            { shipping.typeSel === 1 && <FaCheckCircle /> }
                            <div className="ml-1">พัสดุไปรษณีย์ {` ${summary.priceNow[1]} บาท`} </div>
                          </div>
                        </Button>
                      }

                      <Button 
                          onClick={()=>this.onSelShippingType(2)}
                          outline 
                          color={shipping.typeSel === 2 ? "success":"secondary"} 
                          className="mr-3" 
                        >
                        <div className="d-flex flex-row justify-content-center align-items-center">
                          { shipping.typeSel === 2 && <FaCheckCircle /> }
                          <div className="ml-1">EMS {` ${summary.priceNow[2]} บาท`}</div>
                        </div>
                      </Button>

                    </div>
                  </Col>
                </Row>
                
              </TabPane>
              
            </TabContent>
          </Col>
        </Row>
        <Row>
          <Col sm="12" style={{fontSize:'15px'}} className="d-flex flex-row align-items-center">
   
            <div className="ml-3 mt-3">
              <Label check >
                <input 
                    onChange={()=>this.onSelShieldPacking('dicut')}
                    type="checkbox" 
                    checked={shipping.dicut} 
                    name="dicut" 
                    className="mr-1" />
                เพิ่ม กล่องไดคัทขนาด ค. ของไปรษณีย์ 16 บาท
              </Label>
            </div>
        
          </Col>
          <Col sm="12" style={{fontSize:'15px'}} className="d-flex flex-row align-items-center">
   
            <div className="ml-3 mt-2">
              <Label check >
                <input 
                    onChange={()=>this.onSelShieldPacking('bubble')}
                    type="checkbox" 
                    checked={shipping.bubble} 
                    name="bubble" 
                    className="mr-1" />
                เพิ่ม บั๊บเบิ้ลกันกระแทก 10 บาท
              </Label>
            </div>
        
          </Col>
        </Row>
      </div>
    )
  }
}


export default connect(null,{ selShippingType, toggleShieldPackage })(Shiping)