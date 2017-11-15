import { combineReducers} from 'redux';
import { routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as notifications} from 'react-notification-system-redux';

function results (state = {isSearching:false} , action) {
  switch (action.type){
    case 'FETCH_RESULTS_SUCCESS':
        return Object.assign({}, state, { 
          
          result: action.result,
          input: action.input
          
        });
    // case 'going_Success':
    //     return Object.assign({}, state, { 
    //     });
      case 'is_searching':
              return Object.assign({}, state, { 
                  isSearching: action.isSearching
              });
    default:
          return state;
  }
}
function paginationReducer (state = {pager: {} , pageOfItems: []} , action) {
  switch (action.type){
    case 'Pagination_Action':
        return Object.assign({}, state,  
          action.pager
        );
    case 'Page_Items_Action':
        return Object.assign({}, state,  
          action.pageOfItems
        );
    default:
          return state;
  }
}
function authReducer (state = {isLogedin: false} , action) {
  switch (action.type){
        case 'Sing_Up_Success':
        return Object.assign({}, state, { 
          
          user: action.user
          
        });
        case 'Login_Success':
        return Object.assign({}, state, { 
          
          user: action.user,
          isLogedin: true
          
        });
        case 'logout_Success':
        return Object.assign({}, state, { 
          
          isLogedin:false
          
        });
        case 'get_Status_Success':
        return Object.assign({}, state, { 
          
          user: action.user,
          isLogedin: action.isLogedin
          
        });

    default:
          return state;
  }
}

 const rootReducer = combineReducers({
  results: results,
  router: routerReducer,
  form: formReducer,
  authorization: authReducer,
  pagination: paginationReducer,
  notifications
  // More reducers if there are
  // can go here
});
export default rootReducer;
