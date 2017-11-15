import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
const textFieldStyle = {
  inputStyle:{
    color: "#FFFFFF"
  },
  hintStyle:{
    color: "#BDBDBD"
  },
  floatingLabelStyle: {
    color: "#BDBDBD"
  }
}
const validate = values => {
  const errors = {}
  const requiredFields = [ 'email', 'password']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}


const renderTextField = ({ input, label, placeholder, meta: { touched, error }, ...custom }) => (
  <TextField hintText={placeholder}
    floatingLabelText={label}
    errorText={touched && error}
    inputStyle = {textFieldStyle.inputStyle}
    hintStyle = {textFieldStyle.hintStyle}
    floatingLabelStyle = {textFieldStyle.floatingLabelStyle}
    fullWidth= {true}
    {...input}
    {...custom}
  />
)
let LoginForm = props => {
  const { error, handleSubmit, submitting } = props
  return (
    <form   name="form" onSubmit={handleSubmit} >

        <div>
         <Field name="email" component={renderTextField} type="email" label="Email" placeholder="Enter Eamil" />
        </div>
          <div>  
          <Field name="password" component={renderTextField} type="password" label="Password" placeholder="Enter Password"/>
          </div>
          
        {error && <strong>{error}</strong>}
      <div>
        <button type="submit" className="btn btn-custom" disabled={submitting}>{submitting ? 'Working':'Login'}</button>
      </div>
  </form>
  )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
  validate, // <--- validation function given to redux-form
//   warn // <--- warning function given to redux-form
})(LoginForm)
export default LoginForm