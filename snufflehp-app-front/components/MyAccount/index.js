import React, { Component } from 'react';
import { 
 Container,Card,CardBody
} from 'reactstrap';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
//import 'react-web-tabs/dist/react-web-tabs.css';
import MyAccountForm from "./MyAccountForm";
import PasswordForm from "./PasswordForm"
import MyAddressForm from "./MyAddressForm";


class MyAccount extends Component {

  

  

	render() {
  
    
		return (
      <Container fluid style={{marginTop:'20px'}}>

        <style jsx global>{`
          .rwt__tab[aria-selected="true"]{
            background: #f3f3f3;
          }
          .rwt__tabpanel{
            width:100%;
            font-size:14px;
          }

        `}</style>

        <h3 className="text-center">จัดการบัญชี</h3>
        
        <Card>
          <CardBody >
            <Tabs defaultTab="vertical-tab-one" vertical>
              <TabList>
                <Tab tabFor="vertical-tab-one">บัญชีของฉัน</Tab>
                <Tab tabFor="vertical-tab-two">เปลี่ยนรหัสผ่าน</Tab>
                <Tab tabFor="vertical-tab-three">ที่อยู่</Tab>
              </TabList>
              <TabPanel tabId="vertical-tab-one">

                <MyAccountForm />
               
              </TabPanel>
              <TabPanel tabId="vertical-tab-two">
                
                <PasswordForm />

              </TabPanel>
              <TabPanel tabId="vertical-tab-three">
                
                <MyAddressForm /> 

              </TabPanel>
            </Tabs>
          </CardBody>
        </Card>
                    
       
      </Container>
    )
	}

}



export default MyAccount