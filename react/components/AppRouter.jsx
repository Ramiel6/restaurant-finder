import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux'
import { connect } from 'react-redux';
import history from '../history'
import  MainComp  from '../components/MainComp.jsx';
import  LoginComp  from '../components/LoginComp.jsx';
import  SignUpComp  from '../components/SignUpComp.jsx';
import ProfileComp from '../components/ProfileComp.jsx'
import {getStatus} from '../actions.js';

function PrivateRoute ({component: Component, authed, ...rest}) {
  //https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login'}} />}
    />
  )
}
class AppRouter extends React.Component {
    
    
    render() {
      return (
         
           <ConnectedRouter history={history}>
        
        <Switch>
         <Route exact name="home" path="/" component={MainComp} />
         <Route  name="login" path="/login" component={LoginComp} />
        <Route  name="login" path="/signup" component={SignUpComp} />
        <PrivateRoute authed={this.props.isLogedin} path='/profile' component={ProfileComp} />
        </Switch>
        
          </ConnectedRouter>
        
      );
    }
}
const mapStateToProps = (state, ownProps) => {
//   console.log({results: JSON.stringify(state)})
  return {
    // You can now say this.props.books
    isLogedin : state.authorization.isLogedin
  }
};

// Use connect to put them together
export default connect(mapStateToProps)(AppRouter);