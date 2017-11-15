import React from 'react';
// import { connect } from 'react-redux';
// import * as appActions from '../actions.js';
export default class SignUpComp extends React.Component {
   
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    let user = {
      email: this.refs.email.value,
      phone:this.refs.phone.value
      
    }
    console.log(user)
    // this.props.singUp(user)
  }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input ref="email" className="email" type='tel' name="email"/>
            <input ref="phone" className="phone" type='tel' name="phone"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      );
    }
}
// Maps state from store to props
// const mapStateToProps = (state, ownProps) => {
//   console.log({results: JSON.stringify(state)})
//   return {
//     // You can now say this.props.books
//     user: state.results.user
//   }
// };
// // Maps actions to props
// const mapDispatchToProps = (dispatch) => {
//   return {
//   // You can now say this.props.createBook
//   singUp: user => dispatch(appActions.singUp(user))
//   }
// };


// // Use connect to put them together
// export default connect(mapStateToProps, mapDispatchToProps)(SignUpComp);