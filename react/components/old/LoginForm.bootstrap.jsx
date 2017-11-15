import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

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

// const warn = values => {
//   const warnings = {}
//   if (values.age < 19) {
//     warnings.age = 'Hmm, you seem a bit young...'
//   }
//   return warnings
// }

const renderField = ({
  input,
  placeholder,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  
    <div>
      <input {...input} placeholder={placeholder} type={type}  className={className} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
)
let LoginForm = props => {
  const { error, handleSubmit, submitting } = props
  return (
    <form className="form"  name="form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Email address</label>
      <div className="row"> 
        <div className="col-md-8">
          <Field component={renderField} type="email" name="email"  className="form-control"  placeholder="Enter email" aria-describedby="emailHelp"/>
        </div>
       
      </div>
      </div>
    
    <div className="form-group">
      <label>Password</label>
      <div className="row">
          <div className="col-md-8">  
          <Field component={renderField} type="password"  name="password" className="form-control" />
          </div>
          
        </div>  
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