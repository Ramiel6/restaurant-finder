import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

 
import Notifications from 'react-notification-system-redux';
 
class NotifyComp extends React.Component {
 
  render() {
    const {notifications} = this.props;
 
    //Optional styling
    
 
    return (
      <Notifications
        notifications={notifications}
       
      />
    );
  }
}
 
NotifyComp.contextTypes = {
  store: PropTypes.object
};
 
NotifyComp.propTypes = {
  notifications: PropTypes.array
};
 
export default connect(
  state => ({ notifications: state.notifications })
)(NotifyComp);