import React from 'react';
import { connect } from 'react-redux';
import NavComp from './navComp.jsx';

class ProfileComp extends React.Component {
    
  
    render() {
        let user = this.props.user
      return (
          <div>
          <NavComp />
        <div className="col-md-7 col-md-offset-3">
    <h1 className="text-center"><i className="fa fa-address-card-o" aria-hidden="true"></i> Profile</h1>
    
    {user.local && <div className="profile">
        <h3 className="style2"><i className="fa fa-floppy-o local-color" aria-hidden="true"></i> Local</h3>
        <p>
            <strong>email</strong>: { user.local.email  || null  }<br />
            
        </p>
    </div>}
    {user.google && <div className="profile">
        <h3 className="style2"><i className="fa fa-google-plus-square google-color" aria-hidden="true"></i> Google+</h3>
        <p>
            <strong>name</strong>: { user.google.name || null }<br />
            <strong>email</strong>: { user.google.email || null }<br />
            <strong>id</strong>: { user.google.id || null }<br />
            <strong>token</strong><span className="token-max">: { user.google.token || null }</span><br />
        </p>
    </div>}
    {user.github && <div className="profile">
        <h3 className="style2"><i className="fa fa-github github-color" aria-hidden="true"></i> Github</h3>
        
        <p>
            <strong>name</strong>: { user.github.name || null }<br />
            <strong>email</strong>: { user.github.email || null }<br />
            <strong>id</strong>: { user.github.id || null }<br />
            <strong>token</strong>: { user.github.token || null }<br />
        </p>
    </div>}
    <br />
    {(!user.github || !user.google) && <h3 class="text-center">Connect with soical account:</h3>}
     <div className="text-center">
      {!user.google && <a href="/auth/google" target="_self" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google+</a>}&nbsp;
     {!user.github  && <a href="/auth/github" target="_self"  className="btn btn-default">Github</a>}
     </div>
</div>
</div>

      );
    }
  }
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
//   console.log({results: JSON.stringify(state)})
  return {
    // You can now say this.props.books
    user : state.authorization.user
  }
};


// Use connect to put them together
export default connect(mapStateToProps)(ProfileComp);