import React from 'react';
import Pagination from './PaginationCompRedux.jsx';


// export const ResultsViewPages = function(props) {
export const ResultsViewPages = (props) => {
    
     var resultsList = props.pageOfItems.map((result,index) => {
            return (
              <div className="myWell" key={index}>
                  <p><strong>{result.name}</strong> <span className="going" onClick={() => props.onUserClick(result.id)} >Going {result.going || 0}</span></p>
                  <p>{result.location.address1}</p>
              </div>
            );
          });
      return (
      <div >
        
          {props.results && resultsList}
          {props.results && <div className="text-center"><Pagination 
                                                                items={props.results}
                                                                onChangePage={props.onChangePage} 
                                                                />
                                                                </div> }
      </div>
      );
  };
