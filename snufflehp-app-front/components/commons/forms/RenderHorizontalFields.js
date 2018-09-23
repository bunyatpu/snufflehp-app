import React from 'react'
//import { Form,Input,TextArea,Dropdown,Label} from 'semantic-ui-react'
import { 
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from 'reactstrap';

export const RenderTextField = ({
    input,
    label,
    meta: { touched, error,warning },
    ...custom
  }) =>{
  
  //console.log('input',input)
  //custom.change(custom.name,'aaaa')
  return (


    <FormGroup row className="align-items-center">
     
      <Col md="3" className="text-right">
        <Label htmlFor={`${custom.name}`}>{label}</Label>
      </Col>
      <Col xs="12" md="9">
        <InputGroup>
          <Input 
            invalid={touched && (error !== undefined)}
            type="text" 
            value={input.value} 
            {...input} {...custom}
            placeholder={label}
            autoComplete={label}
          />
          
          { (custom.addonapp !== undefined) ? custom.addonapp:'' }

        </InputGroup>
        {touched &&
        ((error &&  
          <div style={{marginTop: '0.25rem',fontSize: '80%',color: '#f86c6b'}}>{error}</div>
      ))}
      </Col>
      
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

  const  option = custom.option
  //console.log('option',option,'value->',input.value)

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
        {option.map((i,k)=>{
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
