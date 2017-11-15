import React from 'react';
import { connect } from 'react-redux';
import {signUp} from '../actions.js';
import NavComp from './navComp.jsx';
import SignUpForm from './SignUpForm.jsx'

class SignUpComp extends React.Component {
   
    submit = (values) => {
    // print the form values to the console
    console.log(values)
    let user = {
      email: values.email,
      password: values.password
    }
    return this.props.signUp(user)
  }
   
    render() {
      return (
        <div>
        
          <NavComp />
          <h1 className="text-center">Sing Up</h1>
          <div className="row">
            <div className="col-md-offset-3 col-md-6">
              <SignUpForm onSubmit={this.submit} />
            </div>
          </div>
          
          <h3 className="text-center">Or login with:</h3>
          <div className="text-center">
            <a href="/auth/google"  className="btn btn-danger"><span className="fa fa-google-plus"></span> Google+</a>&nbsp;
            <a href="/auth/github"  className="btn btn-default">Github</a>
          </div>
        </div>
      );
    }
}
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  console.log({state: JSON.stringify(state)})
  return {
    // You can now say this.props.books
    user: state.authorization.user
  }
};
// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
   signUp: user => dispatch(signUp(user))
  }
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(SignUpComp);