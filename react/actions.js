//https://scotch.io/tutorials/bookshop-with-react-redux-ii-async-requests-with-thunks
import Axios from 'axios';
import { push } from 'react-router-redux';
import store from './configureStore';
import { SubmissionError } from 'redux-form';
import Notifications, { success } from 'react-notification-system-redux';
// import fetchJsonp from 'fetch-jsonp'

// Sync Action
export const fetchResultsSuccess = (result,input) => {
  return {
    type: 'FETCH_RESULTS_SUCCESS',
    result,
    input,
    isSearching
  };
};
export const isSearching = (isSearching) => {
  return {
    type: 'is_searching',
    isSearching
  };
};
export const singUpSuccess = (user) => {
  return {
    type: 'Sing_Up_Success',
    user
  };
};
export const loginSuccess = (user) => {
  return {
    type: 'Login_Success',
    user,
  };
};
export const logoutSuccess = () => {
  return {
    type: 'logout_Success',
  };
};
export const getStatusSuccess = (data) => {
  return {
    type: 'get_Status_Success',
    user: data.user,
    isLogedin: data.isLogedin
  };
};
export const goingSuccess = () => {
  return {
    type: 'going_Success',
  };
};
export const paginationAction = (pager) => {
  return {
    type: 'Pagination_Action',
    pager,
  };
};
export const pageItemsAction = (pageOfItems) => {
  return {
    type: 'Page_Items_Action',
    pageOfItems,
  };
};
// action creators

//Async Action
export const getSearchResults = function (input){
//   const apiUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=cairo';
  // const apiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srprop=snippet&srsearch=' + input;
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return function(dispatch){
     dispatch(isSearching(true));
     // Returns a promise
     return Axios({
       method: 'GET',
       url: '/getSearch?location='+ input,
       
     })
      // .then(function(response) {
      //   return response.json()
      // })
      .then(function Success (json) {
        // Dispatch another action
        // to consume data
        console.log(json);
        console.log("Success");
        let results = json.data.businesses.map(function(result){
            json.data.going.map(function(go){
                if (result.id == go.locId){
                    result.going = go.users.length;
                }
            });
            return result;
        });
        console.log(results);
         dispatch(isSearching(false));
        dispatch(fetchResultsSuccess(results,input));
      })
      .catch(function(error) {
       console.log("error");
       console.log(error);
       dispatch(isSearching(false));
      });
  };
};
export const going = function (locId){
  if(store.getState().authorization.isLogedin){
   let data = {
     locId: locId,
     userId: store.getState().authorization.user._id,
    //  createdAt: new Date(),
   };
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return function(dispatch){
     // Returns a promise
     return Axios({
       method: 'POST',
       url: '/going',
       data:data
     })
      .then(function Success (json) {
        // Dispatch another action
        // to consume data
        console.log(json);
        console.log("Success");
        dispatch(getSearchResults(store.getState().results.input));
      })
      .catch(function(error) {
       console.log("error");
       console.log(error.response);
      });
  };
  }else{
      store.dispatch(push('/login'));
  }
};
export const pagination = function (pager){
  return function(dispatch) {
      dispatch(paginationAction(pager));
  };
};
export const setPageItems = function (pageOfItems){
  return function(dispatch) {
      dispatch(pageItemsAction(pageOfItems));
  };
};

export const signUp = function (user){
  const notificationOpts = {
      // uid: 'once-please', // you can specify your own uid if required
      title: 'Sign Up successfully',
      message: 'Thank you for signing up.',
      position: 'tc',
      autoDismiss: 3,
    };
  // let data = {
  //   email: user.email,
  //   password: user.password
  // }
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return function(dispatch){
     // Returns a promise
     return Axios({
       method: 'POST',
       url: '/register',
       data:user
     })
      .then(function Success (json) {
        // Dispatch another action
        // to consume data
        console.log(json);
        console.log("Success");
        // dispatch(singUpSuccess(json.data))
        dispatch(success(notificationOpts));
        store.dispatch(push('/'));
      })
      .catch(function(error) {
       console.log("error");
       console.log(error);
       throw new SubmissionError({ _error: error.response.data.err.err });
      });
  };
};

export const login = function (user){
  let data = {
    username: user.email,
    password: user.password
  };
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return function(dispatch){
     // Returns a promise
     return Axios({
       method: 'POST',
       url: '/login',
       data:data
     })
      // .then(function(response) {
      //   return response.json()
      // })
      .then(function Success (response) {
        // Dispatch another action
        // to consume data
        console.log(response);
        console.log("Success");
        dispatch(loginSuccess(response.data));
        store.dispatch(push('/'));
      })
      .catch(function(error) {
       console.log("error");
       console.log(error.response);
       throw new SubmissionError({ _error: error.response.data.err.err });
      });
  };
};

export const logout = function (){
 
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return function(dispatch){
     // Returns a promise
     return Axios({
       method: 'GET',
       url: '/logout',
     })
      .then(function Success (response) {
        // Dispatch another action
        // to consume data
        console.log(response);
        console.log("Success");
        dispatch(logoutSuccess());
        // dispatch(Notifications.success(notification));
        store.dispatch(push('/'));
      })
      .catch(function(error) {
       console.log("error");
       console.log(error.response);
      });
  };
};

export const getStatus = function (user){
  
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return function(dispatch){
     // Returns a promise
     return Axios({
       method: 'GET',
       url: '/status',
     })
      .then(function Success (response) {
        // Dispatch another action
        // to consume data
        console.log(response);
        console.log("Success");
        dispatch(getStatusSuccess(response.data));
        // dispatch(Notifications.success(notification));
        store.dispatch(push('/'));
      })
      .catch(function(error) {
       console.log("error");
       console.log(error.response);
      });
  };
};




