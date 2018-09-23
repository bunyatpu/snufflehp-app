import React,{Component} from 'react'
import { Field } from 'redux-form'
//import { Grid ,Label,Message} from 'semantic-ui-react'
// import {
//   RenderTextField,
//   RenderDropdownField
// } from './RenderFields'

import { 
  RenderTextField,
  RenderDropdownField,
  RenderSelectField
} from './RenderFields'

import { 
  Form,
  Button,
  Col,
  Container,
  Row,
  FormGroup,
  Label,
  Badge,
  Alert,
  Fade,
  InputGroupAddon,
  InputGroupText,
  InputGroup
  
} from 'reactstrap';

const datas = require('../../../JQL/data.json');
const JQL = require('../../../JQL/src');


class AddrField extends Component {

  constructor(props){
    super(props)
    this.state = {

      optionZipcode:[],
      optionSubDistrict:[],
      optionDistrict:[],
      optionProvince:[],
      showFullAddr:false,
      zipCodeValue:"",
      db:''

    }
    //console.log('const')
  }

  componentDidMount(){
    //console.log('componentDidMount')
    const { inital } = this.props;

    const preData = this.preData();
    const DB = new JQL(preData);
    this.setState({
      preData,
      db:DB
    });

    //console.log('componentDidMount')
    //this.props.change('postCode','ดอยลาน_เมืองเชียงราย_เชียงราย_57000')

    //check initail update
    console.log('inital',inital);
    if(inital !== undefined){

      let value = inital.sub_district+'_'+inital.district+'_'+inital.province+'_'+inital.postCode
      let content = inital.sub_district+' > '+inital.district+' > '+inital.province+' > '+inital.postCode

      //postCode
      let text = inital.postCode
      this.setState({
        optionZipcode:[{key:0,text, value, label:content}]
      })
      this.props.change('postCode',value)

      //sub_district
      text = inital.sub_district
      this.setState({
        optionSubDistrict:[{key:0,text, value, label:content}]
      })
      this.props.change('sub_district',value)

      //district
      text = inital.district
      this.setState({
        optionDistrict:[{key:0,text, value, label:content}]
      })
      this.props.change('district',value)

      //province
      text = inital.province
      this.setState({
        optionProvince:[{key:0,text, value, label:content}]
      })
      this.props.change('province',value)

      this.props.change('addr',inital.addr)
    }


   

    //--
   
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

      // res = this.state.preData.filter((model)=>{
      //   //console.log(model[type]," === ",searchStr)
      //   //return model[type] == searchStr
      //   const regex = RegExp(searchStr,'gi');
      //   return regex.test(model[type])
      // })
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

  handleChangeOption = (e,value) => {
   
    console.log('handleChangeOption value',value);

    // const arrAddr = value.split('_');
    // console.log('arrAddr',arrAddr)
    // this.searchAddr('d',arrAddr[0])
    // this.searchAddr('a',arrAddr[1])
    // this.searchAddr('p',arrAddr[2])
    // this.searchAddr('z',arrAddr[3])

    // this.props.change('sub_district',value)
    // this.props.change('district',value)
    // this.props.change('province',value)
    // this.props.change('postCode',value)

    // const textAdd = 'ตำบล'+arrAddr[0]+' อำเภอ'+arrAddr[1]+' จังหวัด'+arrAddr[2]+' '+arrAddr[3]
    // this.setState({zipCodeValue:textAdd})

  }

  handleSearchChange = (type) => (e, { searchQuery }) =>{

    this.searchAddr(type,searchQuery)

  }

  showFullAddr = () => {
    this.setState({ showFullAddr:true })
  }

  render(){

    let style = {
      row:{
        paddingTop:'7px',
        paddingBottom:'7px'
      },
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
      showFullAddr,
      zipCodeValue
    } = this.state;

    console.log('optionZipcode',optionZipcode)

    return (
      <div>
        {
          !showFullAddr &&
          <Container>
          
            <Row style={style.row}>
              <Col md="12">
                <Field 
                    name="postCode" 
                    component={RenderSelectField} 
                    label={'รหัสไปรษณีย์'}
                    options={optionZipcode}
                    placeholder="กรอก รหัสไปรษณีย์"
                    onChange={this.handleChangeOption}
                    
                  />
              
              </Col>
            </Row>
          </Container>  
        }  

       
      
      </div>
    )
    
  }

}


export default AddrField



// (
//   <Container style={{display:(showFullAddr)?'block':'none'}}>
//   <Row style={style.row}>
//     <Col md="12">
//         <Field 
//           name="sub_district" 
//           toplabel="ตำบล"
//           component={RenderDropdownField} 
//           label={false}
//           options={optionSubDistrict}
//           placeholder="ตำบล"
//           onChange={this.handleChangeOption}
//           search
//           noResultsMessage='พิมพ์ชื่อตำบลเพื่อค้นหา'
//           onSearchChange={this.handleSearchChange('d')}
//         />
//     </Col>
//   </Row>
//   <Row style={style.row}>
//     <Col md="12">
//         <Field 
//           name="district" 
//           toplabel="อำเภอ"
//           component={RenderDropdownField} 
//           label={false}
//           options={optionDistrict}
//           placeholder="อำเภอ"
//           onChange={this.handleChangeOption}
//           search
//           noResultsMessage='พิมพ์ชื่ออำเภอเพื่อค้นหา'
//           onSearchChange={this.handleSearchChange('a')}
//         />
//     </Col>
//   </Row>
//   <Row style={style.row}>
//     <Col md="12" width={16}>
//       <Field 
//           name="province" 
//           toplabel="จังหวัด"
//           component={RenderDropdownField} 
//           label={false}
//           options={optionProvince}
//           placeholder="จังหวัด"
//           onChange={this.handleChangeOption}
//           search
//           noResultsMessage='พิมพ์ชื่อจังหวัดเพื่อค้นหา'
//           onSearchChange={this.handleSearchChange('p')}
//         />
//     </Col >
//   </Row>
  
// </Container>

// <Container>  
//   <Row style={style.row}>
//     <Col md="12">
//       <Field 
//           name="addr" 
//           toplabel="ที่อยู่"
//           component={RenderTextField} 
//           label={false}
//           placeholder="ที่อยู่"
//         />
//     </Col>
//   </Row>

// </Container>

// <Container style={{display:(zipCodeValue)?'block':'none'}}>
//   <Row style={style.row}>
//       <Col md="12" textAlign="center">
//         <Message
//             info
//             size="small"
//             content={zipCodeValue}
//           />
//       </Col>
//     </Row>
// </Container>

// <Container style={{display:(!showFullAddr)?'block':'none'}}>  
//   <Row style={style.row}>
//     <Col md="12" textAlign="center">
//       <Label as='a' onClick={this.showFullAddr}>ลืมรหัสไปรษณีย์</Label>
//     </Col>
//   </Row>
  

// </Container>

// )