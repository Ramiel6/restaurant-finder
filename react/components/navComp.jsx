import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout, getStatus} from '../actions.js';

class NavComp extends React.Component {
    
    
    render() {
        
            return (
        <nav className="nav">
            <ul className="nav navbar-nav">
                <li><Link to="/" className="btn btn-custom">Home</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                {!this.props.isLogedin &&  <li><Link to="/login" className='btn btn-custom'>Login</Link></li>}
                {!this.props.isLogedin && <li> <Link to="/signup" className='btn btn-custom'>Sing Up</Link></li>}
                {this.props.isLogedin && <li><a href="#" onClick={this.props.logout} className='btn btn-custom'>Logout</a></li>}
                {false &&  <li><button  onClick={this.props.getStatus} className='btn btn-custom'>getStatus</button></li>}
                {this.props.isLogedin &&  <li><Link to="/profile" className='btn btn-custom'>Profile</Link></li>}
             </ul>
        </nav>
        );
        
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