import React from 'react';
import { connect } from 'react-redux';
import * as appActions from '../actions.js';
class SignUpComp extends React.Component {
   
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    let user = {
      email: this.refs.email.value,
      password:this.refs.password.value
      
    }
    console.log(user)
    this.props.singUp(user)
  }

    render() {
      return (
        <div>
        
  
  <h1 className="text-center">Sing Up</h1>
  <form className="form"  name="form" onSubmit={this.handleSubmit}>
    <div className="form-group">
      <label>Email address</label>
      <div className="row"> 
        <div className="col-md-8">
          <input type="email" ref="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
       
      </div>
      </div>
    
    <div className="form-group">
      <label>Password</label>
      <div className="row">
          <div className="col-md-8">  
          <input type="password" ref="password" className="form-control" name="password"  />
          </div>
          
        </div>  
        </div>
      <div>
        <button type="submit" className="btn btn-custom">Sign UP</button>
      </div>
  </form>
 
  <h3 className="text-center">Or login with:</h3>
 <div className="text-center">
  <a href="/auth/google" target="_self" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google+</a>
  <a href="/auth/github" target="_self"  className="btn btn-default">Github</a>
 </div>


        </div>
      );
    }
}
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  console.log({results: JSON.stringify(state)})
  return {
    // You can now say this.props.books
    user: state.results.user
  }
};
// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
   singUp: user => dispatch(appActions.signUp(user))
  }
};


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(SignUpComp);