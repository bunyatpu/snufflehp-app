import React,{ Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, 
  Card, Button, CardTitle, CardText, Row, Col ,
  Label,Input,FormGroup
} from 'reactstrap';
import classnames from 'classnames';
import { FaCheckCircle } from 'react-icons/fa';

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

  render(){
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
            min-width:150px
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
                  onClick={() => { this.toggle('1'); }}
                >
                  ไปรษณีย์ไทย
                </NavLink>
              </NavItem>
            </Nav>
        
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12" >
                    <div className="m-3 btn-shiping">
                      <Button outline color="success" className="mr-3" >
                        <div className="d-flex flex-row justify-content-center align-items-center">
                          <FaCheckCircle />
                          <div className="ml-1">ลงทะเบียน</div>
                        </div>
                      </Button>
                      <Button outline color="secondary" >EMS</Button>
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
                <input type="checkbox" name="dicut" className="mr-1" />
                เพิ่ม กล่องไดคัทขนาด ค. ของไปรษณีย์ 16 บาท
              </Label>
            </div>
        
          </Col>
          <Col sm="12" style={{fontSize:'15px'}} className="d-flex flex-row align-items-center">
   
            <div className="ml-3 mt-2">
              <Label check >
                <input type="checkbox" name="dicut" className="mr-1" />
                เพิ่ม บั๊บเบิ้ลกันกระแทก 10 บาท
              </Label>
            </div>
        
          </Col>
        </Row>
      </div>
    )
  }
}


export default Shiping