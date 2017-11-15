import React from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
// import * as appActions from '../actions.js';
import {getSearchResults, getStatus,going,setPageItems} from '../actions.js';
import { ChildSearch } from './ChildComp.jsx';
import { ResultsViewPages } from './ResultsViewComp.jsx';
import NavComp from './navComp.jsx';
import LoadingComp from './LoadingComp.jsx';


class MainComp extends React.Component {
    constructor(props) {
      super(props);
 
        this.changeResults = this.changeResults.bind(this);
        this.userClick = this.userClick.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }
    componentDidMount(){
      const {getStatus} = this.props
       getStatus();
    }
   changeResults(input){
     this.props.getSearchResults(input)
     
   }
   userClick (locId) {
      const {going} = this.props
      going(locId);
    //   console.log(locId)
   }
  onChangePage(pageOfItems) {
        // update state with new page of items
        this.props.setPageItems({ pageOfItems: pageOfItems });
    }
    
    render() {
    //   const listItems = serverResults.results.map((number) => <li>{number.title}</li>
      const {notifications} = this.props;
      return (
        <div>
            { this.props.isSearching && <LoadingComp /> }
           {notifications && <Notifications notifications={notifications} />}
          <NavComp />
          <ChildSearch onValueChange={this.changeResults} />
          <ResultsViewPages 
                results={this.props.results} 
                onUserClick={this.userClick}  
                pageItems={this.props.pageItems}
                onChangePage ={this.onChangePage}
                pageOfItems= {this.props.pageOfItems}
                />
        </div>
      );
    }
  }


// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
//   console.log({results: JSON.stringify(state)})
  return {
    // You can now say this.props.books
    results: state.results.result,
    isSearching: state.results.isSearching,
    pageOfItems: state.pagination.pageOfItems,
    notifications: state.notifications
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
   getSearchResults: input => dispatch(getSearchResults(input)),
    getStatus:  () => dispatch(getStatus()),
     going: locId => dispatch(going(locId)),
     setPageItems: pageOfItems => dispatch(setPageItems(pageOfItems)),
     
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(MainComp);