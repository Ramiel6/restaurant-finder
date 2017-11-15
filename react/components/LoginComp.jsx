import React from 'react';
import { connect } from 'react-redux';
import {login} from '../actions.js';
import NavComp from './navComp.jsx';
import LoginForm from './LoginForm.jsx'

class LoginComp extends React.Component {
   
   submit = (values) => {
    // print the form values to the console
    // console.log(values)
    return this.props.login(values)
  }
  
    render() {
      return (
        <div>
                
          <NavComp />
          <h1 className="text-center">Login</h1>
          <div className="row">
            <div className="col-md-offset-3 col-md-6">
              <LoginForm onSubmit={this.submit} />
            </div>
          </div>
          <h3 className="text-center">Or login with:</h3>
          <div className="text-center">
            <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google+</a>&nbsp;
            <a href="/auth/github"  className="btn btn-default">Github</a>
          </div>
        
        </div>
      );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  // console.log({results: JSON.stringify(state)})
  return {
    // You can now say this.props.books
    user: state.authorization.user,
    isLogedin : state.authorization.isLogedin
  }
};
// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
   login: user => dispatch(login(user))
  }
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(LoginComp);