import { ErrorMessage, Field } from 'formik'
import React from 'react'

function TextArea(props) {
    const{label, name, ...rest} = props
    
  return (
    <>
        <label htmlFor='{name}'>{label}</label>
        <Field className='form-control' as="textarea" id={name} name={name} {...rest}/>
        
    </>
  )
}

export default TextArea;