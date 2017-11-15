import React from 'react';
import { connect } from 'react-redux';
import {going} from '../actions.js';

class GoingComp extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.going
    }
    render() {
 // let results = this.props.results || [];
      return (
      <span className="going" onClick={this.handleChange}>Going 0</span>
      )
    }
  }
// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
   going: input => dispatch(going(input)),
  }
};

// Use connect to put them together
export default connect(mapDispatchToProps)(GoingComp);