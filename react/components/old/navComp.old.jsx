import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout, getStatus} from '../actions.js';

class NavComp extends React.Component {
    
    
    render() {
        if(this.props.isLogedin){
            return (
        <div>
        <Link to="/" className="btn btn-custom">Home</Link>
         <button  onClick={this.props.logout} className='btn btn-custom'>Logout</button>
         <button  onClick={this.props.getStatus} className='btn btn-custom'>getStatus</button>
         <Link to="/profile" className='btn btn-custom'>Profile</Link>
        </div>
        );
        }
        else {
             return (
        <div>
        <Link to="/" className="btn btn-custom">Home</Link>
         <Link to="/login" className='btn btn-custom'>Login</Link>
         <Link to="/signup" className='btn btn-custom'>Sing Up</Link>
         <button  onClick={this.props.getStatus} className='btn btn-custom'>getStatus</button>
        </div>
        );
        }
    }
}
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
//   console.log({results: JSON.stringify(state)})
  return {
    // You can now say this.props.books
    isLogedin : state.authorization.isLogedin
  }
};
// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
   logout: () => dispatch(logout()),
   getStatus:  () => dispatch(getStatus())
  }
};

// Use connect to put them together
export default connect(mapStateToProps,mapDispatchToProps)(NavComp);