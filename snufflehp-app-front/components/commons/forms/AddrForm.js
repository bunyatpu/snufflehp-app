import React,{Component} from 'react'
import { reduxForm,change,Field } from 'redux-form'
//import { Grid,Header,Form,Button } from 'semantic-ui-react'
import { 
  Form,
  Button,
  Col,
  Container,
  Row,
  Alert
  
} from 'reactstrap';

import { connect } from 'react-redux'
//import AddrField from './AddrField' 
import { updateAddress } from '../../../redux/actions/userAction';
import { 
  RenderTextField,
  RenderDropdownLists
} from './RenderFields'

const datas = require('../../../JQL/data.json');
const JQL = require('../../../JQL/src');


const validate = values => {
  //console.log('validate',values);
  const errors = {}
 
  //--addr
  if (!values.postcode) {
    errors.postcode = "กรณุากรอก รหัสไปรษณีย์"
  }

  if (!values.province) {
    errors.province = "กรณุากรอก จังหวัด"
  }

  if (!values.district) {
    errors.district = "กรณุากรอก อำเภอ"
  }

  if (!values.sub_district) {
    errors.sub_district = "กรณุากรอก ตำบล"
  }

  if (!values.addr) {
    errors.addr = "กรณุากรอก ที่อยู่"
  }

  
  return errors
}

class AddrForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      saving:false,
      ptionZipcode:[],
      optionSubDistrict:[],
      optionDistrict:[],
      optionProvince:[],
      showFullAddr:false,
      zipCodeValue:"",
      db:'',
      alertOpen:false,
      alertMsg:''
    }

  }

  componentDidMount(){
    //console.log('componentDidMount')
    let { initialValues } = this.props;

    const preData = this.preData();
    const DB = new JQL(preData);
    this.setState({
      preData,
      db:DB
    });

    //console.log('componentDidMount')
    //this.props.change('postCode','ดอยลาน_เมืองเชียงราย_เชียงราย_57000')
    let inital = initialValues
    //check initail update
    //console.log('inital',inital);
    if(inital !== undefined && inital.postcode !== undefined){

      let value = inital.sub_district+'_'+inital.district+'_'+inital.province+'_'+inital.postcode
      let content = inital.sub_district+' > '+inital.district+' > '+inital.province+' > '+inital.postcode

      //postCode
      let text = inital.postcode
      this.setState({
        optionZipcode:[{key:0,text, value, label:content}]
      })
      this.props.change('postcode',inital.postcode)

      //sub_district
      text = inital.sub_district
      this.setState({
        optionSubDistrict:[{key:0,text, value, label:content}]
      })
      this.props.change('sub_district',inital.sub_district)

      //district
      text = inital.district
      this.setState({
        optionDistrict:[{key:0,text, value, label:content}]
      })
      this.props.change('district',inital.district)

      //province
      text = inital.province
      this.setState({
        optionProvince:[{key:0,text, value, label:content}]
      })
      this.props.change('province',inital.province)

      this.props.change('addr',inital.addr)
    }

    //--
   
  }

  onSubmit = async (value) =>{

    //console.log('value',value)

    this.setState({saving:true,alertOpen:false,alertMsg:''})
  
    const { updateAddress,onCloseDialog,userInf } = this.props
    value.user_id = userInf.id;
    const addObj = (typeof value.postcode === 'string') ? value:{
      ...value,
      postcode:value.postcode.text,
      sub_district:value.sub_district.text,
      district:value.district.text,
      province:value.province.text

    }

    const res = await updateAddress(addObj)

    if(res.status){

      onCloseDialog()

    }else{

      this.setState({alertOpen:true,alertMsg:res.error})
    } 

    this.setState({saving:false})



    

    
   
  }

  preData = () =>{

    const expanded = [];
    datas.forEach((provinceEntry) => {
      const province = provinceEntry[0];
      const amphurList = provinceEntry[1];
      amphurList.forEach((amphurEntry) => {
        const amphur = amphurEntry[0];
        const districtList = amphurEntry[1];
        districtList.forEach((districtEntry) => {
          const district = districtEntry[0];
          const zipCodeList = districtEntry[1];
          zipCodeList.forEach((zipCode) => {
            expanded.push({
              d: district,
              a: amphur,
              p: province,
              z: zipCode,
            });
          });
        });
      });
    });

    //console.log('all data',expanded);
    return expanded;

  }

  searchAddr = (type,searchStr) =>{

    let res = [];
    // let searchStr = '57000'
    // let type = 'z';
    try {
      res = this.state.db.select('*').where(type)
              .match(`^${searchStr}`)
              .orderBy(type)
              .fetch();

 
    } catch (e) {
      return [];
    }

    //console.log('res',res)
    let mapZip = res
        .filter((item, i) => i < 500)
        .map((obj,key)=>{
          
          const txt = obj.d+' > '+obj.a+' > '+obj.p+' > '+obj.z
          const valueTxt = obj.d+'_'+obj.a+'_'+obj.p+'_'+obj.z
          //const resTxt = txt.replace(reg, '<b>'+searchQuery+'</b>');
          return {key:key,text:obj[type], value:valueTxt,label:txt}
          //return obj[type]
        })
    
    let optName = '';
    switch(type){
      case 'd':
        optName = 'optionSubDistrict'
      break;
      case 'a':
        optName = 'optionDistrict'
      break;
      case 'p':
        optName = 'optionProvince'
      break;
      case 'z':
        optName = 'optionZipcode'
      break;
      default:

      break;
    }


    this.setState({[optName]:mapZip})

    //return possibles

  }

  handleChangeOption = (selObj) => {
   
    //console.log('===>handleChangeOption selObj',selObj);

    const { change } = this.props 

    //change('postCode',selObj)

    //change('postCode',selObj)

    const arrAddr = selObj.value.split('_');
    // console.log('arrAddr',arrAddr)
    this.searchAddr('d',arrAddr[0])
    this.searchAddr('a',arrAddr[1])
    this.searchAddr('p',arrAddr[2])
    this.searchAddr('z',arrAddr[3])

    change('sub_district',{...selObj,text:arrAddr[0],label:arrAddr[0]})
    change('district',{...selObj,text:arrAddr[1],label:arrAddr[1]})
    change('province',{...selObj,text:arrAddr[2],label:arrAddr[2]})
    change('postcode',{...selObj,text:arrAddr[3],label:arrAddr[3]})



    const textAdd = 'ตำบล'+arrAddr[0]+' อำเภอ'+arrAddr[1]+' จังหวัด'+arrAddr[2]+' '+arrAddr[3]
    this.setState({zipCodeValue:textAdd})

  }

  handleSearchChange = (type) => (searchQuery) =>{

    //console.log('handleSearchChange->',type,searchQuery)
    //this.props.change('postCode',searchQuery)

    if(searchQuery.length > 1){
      this.searchAddr(type,searchQuery)
    }
   

  }

  showFullAddr = () => {
    this.setState({ showFullAddr:true })
  }

  render(){

    let style = {
      row_devide:{
        paddingTop:'0px',
        paddingBottom:'0px'
      }

    }

    let {
      optionZipcode,
      optionSubDistrict,
      optionDistrict,
      optionProvince,
      saving,
      alertOpen,
      alertMsg
    } = this.state;


    //console.log('optionSubDistrict',optionSubDistrict)

    const { onCloseDialog,handleSubmit,headTitle,pristine ,submitting } = this.props;

    
    //console.log('userInf',userInf)

    //console.log('optionZipcode',optionZipcode);

    let headTitleTxt = (headTitle !== undefined) ? <div style={{textAlign:'right'}}>{headTitle}</div>:'เพิ่มที่อยู่'
    return (
      <div style={{width:'99%'}}>
  
         <Container>
          <Form >

            <Row>
              <Col md={12} className="text-right">
                
                <Row style={style.row}>
                  <Col md="12">
                    <Field 
                      name="addr" 
                      component={RenderTextField} 
                      label={'ที่อยู่'}
                      placeholder="กรอก ที่อยู่"
                      fixcss="set"
                      style={{textAlign:'right'}}
                        
                    />
                  </Col>
                </Row>

              </Col>
            </Row>


            <Row>
              <Col md={12} className="text-right">
                
                <Row style={style.row}>
                  <Col md="12">
                    <Field 
                      name="postcode" 
                      component={RenderDropdownLists} 
                      label={'รหัสไปรษณีย์'}
                      options={optionZipcode}
                      placeholder="กรอก รหัสไปรษณีย์"
                      handleChangeOption={this.handleChangeOption}
                      onSearchChange={this.handleSearchChange('z')}
                        
                    />
                  </Col>
                </Row>

              </Col>
            </Row>

            

            { true && 
              <div>
                <Row style={style.row}>
                  <Col md="12" className="text-right">
                    
                    <Field 
                      name="sub_district" 
                      component={RenderDropdownLists} 
                      label={'ตำบล'}
                      options={optionSubDistrict}
                      placeholder="กรอก ตำบล"
                      handleChangeOption={this.handleChangeOption}
                      onSearchChange={this.handleSearchChange('d')}
                        
                    />

                  </Col>
                </Row>
                <Row style={style.row}>
                  <Col md="12" className="text-right">
                    
                      <Field 
                        name="district" 
                        component={RenderDropdownLists} 
                        label={'อำเภอ'}
                        options={optionDistrict}
                        placeholder="กรอก อำเภอ"
                        handleChangeOption={this.handleChangeOption}
                        onSearchChange={this.handleSearchChange('a')}
                          
                      />
                  </Col>
                </Row>
                <Row style={style.row}>
                  <Col md="12" width={16} className="text-right">
                  
                    <Field 
                      name="province" 
                      component={RenderDropdownLists} 
                      label={'จังหวัด'}
                      options={optionProvince}
                      placeholder="กรอก จังหวัด"
                      handleChangeOption={this.handleChangeOption}
                      onSearchChange={this.handleSearchChange('p')}
                        
                    />
                  </Col >
                </Row>
              </div>
            }
         
            <Row>
              <Col md={12}>
                <Alert isOpen={alertOpen} color="danger">
                  {alertMsg}
                </Alert>
              </Col>
            </Row>

            <Row>
              <Col md={12}  style={{textAlign:'right',paddingTop:'20px'}}>
                <Button 
                    onClick={handleSubmit(this.onSubmit)}
                    color="success" 
                    className="mr-2"
                    disabled={pristine || saving}
                  >
                  บันทึก
                </Button>
                <Button onClick={onCloseDialog} >ยกเลิก</Button>
              </Col>
            </Row>
          </Form  >
        </Container>
       
      </div>
    )
    
  }

}

const mapStateToProps = (state) =>{
  return {
    userInf:state.auth,
    initialValues:(state.auth.address !== null)?state.auth.address:{}
  }
}

export default connect(mapStateToProps, { change,updateAddress })(
  reduxForm({form:'addrForm',enableReinitialize: true,validate})(AddrForm)
)


// (
//   initialValues:{
//     sub_district:'ดอยลาน',
//     district:'เมืองเชียงราย',
//     province:'เชียงราย',
//     postCode:"57000",
//     addr:"xxxx"
//   }
// )