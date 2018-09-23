import React from 'react'
//import { Form,Input,TextArea,Dropdown,Label} from 'semantic-ui-react'
import Select from 'react-select';
import { 
  FormGroup,
  Label,
  Input,
  FormFeedback
} from 'reactstrap';

import { DropdownList } from 'react-widgets'

export const RenderTextField = ({
  input,
  label,
  meta: { touched, error,warning },
  ...custom
 }) =>{
  
  //console.log('input',input)
  //custom.change(custom.name,'aaaa')
  //console.log('fixcss',custom.fixcss)
  const css = (custom.fixcss !== undefined) ? {width:'100%',textAlign:'left',color:'#717070',fontSize:'14px'}:{}
  return (
    <FormGroup>
      <Label for={custom.id} style={css}>{label}</Label>
      <Input 
        invalid={touched && (error !== undefined)}
        type="text" 
        value={input.value} 
        {...input} {...custom}
      />
      {touched &&
        ((error &&  
          <FormFeedback>{error}</FormFeedback>
      ))}
     
    </FormGroup>

    
  )

}

export const RenderTextAreaField = ({
  input,
  label,
  meta: { touched, error,warning },
  ...custom
 }) =>{

  //console.log('placeholder',placeholder)
 
  return  (
    <FormGroup>
      <Label for={custom.id}>{label}</Label>
      <Input 
          invalid={touched && (error !== undefined)}
          type="textarea" 
          value={input.value} 
          {...input} {...custom}
        />
      {touched &&
          ((error &&  
            <FormFeedback>{error}</FormFeedback>
        ))}
    </FormGroup>
  )
}

export const RenderDropdownField = ({
  input,
  label,
  meta: { touched, error,warning },
  ...custom
  }) =>{

  const  optionData = custom.option
  //console.log('option',option,'value->',input.value)

  //console.log('optionData',optionData)

  return (
    <FormGroup>
      <Label for={custom.id}>{label}</Label>
      <Input 
          type="select" 
          invalid={touched && (error !== undefined)}

          {...input} {...custom}
          value={input.value}
        >
        <option value="">เลือก {label}</option>
        {optionData &&  optionData.map((i,k)=>{
          return <option key={k} value={i.value}>{i.text}</option>
        })}
      </Input>
      {touched &&
          ((error &&  
            <FormFeedback>{error}</FormFeedback>
        ))}
    </FormGroup>
  )
}

export const RenderSelectField = ({
  input,
  label,
  meta: { touched, error,warning },
  ...custom
  }) =>{

  const  optionData = custom.options
  // console.log('option',custom.options)
  // const optionData = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ];
  // console.log('optionData',optionData)

  console.log('input',input.value)
  //input.inputValue = input.value

  return (
    <FormGroup>
      <Label for={custom.id}>{label}</Label>

      <Select
        value={input.value}
        inputValue={'57000'}
        onBlur={() => {
          // console.log('onblur',input)
          // let val = input.value;
          // if(typeof val === 'string'){
          //   val = {label:input.value,value:input.value}
          // }else{
          //   val = input.value
          // }
          input.onBlur(input.value)
          //custom.handleBlur(val)
        }}
        options={optionData}
        simpleValue
        onChange={(obj) => {
          if(obj.text){
            custom.handleChangeOption({...obj,label:obj.text})
          }

          //input.onChange(obj)
          
        }}
        onInputChange={(obj)=>{
          console.log('onInputChange ',obj)
          //input.inputValue = 'aa'
          custom.onSearchChange(obj)
          
        }}

      />

    </FormGroup>
  )
}

export const RenderDropdownLists = ({
  input,
  label,
  meta: { touched, error,warning },
  ...custom
  }) =>{

  const  optionData = custom.options
  //console.log('option',option,'value->',input.value)

  //console.log('optionData',optionData)

  // const optionData = [
  //   '57000','56000','54000'
  // ]
  const errClass = (touched && (error) ) ? 'err-rw-widget-container':''

  return (
    <FormGroup>
      <Label style={{width:'100%',textAlign:'left',color:'#717070',fontSize:'14px'}} >{label}</Label>
      
      <DropdownList filter
        containerClassName={errClass}
        data={optionData}
        value={input.value} 
        allowCreate="onFilter"
        
        onChange={(value)=>{
          console.log('onChange')
          //input.onChange(value)
          custom.handleChangeOption(value)
        }}

        onSearch={(term)=>{
          //console.log('onSearch term',term)
          custom.onSearchChange(term)
        }}
        

        itemComponent={({item})=>{
          //console.log('item',item)
          return   <span>{item.label} </span>
        }}

        textField={item => {
          //console.log('textField',item)
          return (typeof item === 'string') ? item:item.text
        }}

        placeholder={custom.placeholder}
        
      />

     <FormFeedback valid>{'xxxx'}</FormFeedback>
      
    </FormGroup>
  )
}


// (
//   <Select
//         value={input.value}
//         inputValue={input.value}
//         defaultInputValue={input.value}
        
//         autoFocus
//         options={optionData}
//         onInputChange={(obj)=>{
//           console.log('onInputChange ',obj)
//           custom.onSearchChange(obj)
         
//         }}
//         onChange={(obj) => {
      
//           console.log('onChange obj',obj)
//           //input.onChange(obj.text)
//           //input.value = obj.text
//           custom.handleChangeOption(obj.text)
//         }}
//       />
// )


// (
//   <Select
//         value={input.value}
//         onChange={input.onChange}
//         onBlur={() => input.onBlur(input.value)}
//         options={optionData}
        
//         simpleValue
//       />
// )
