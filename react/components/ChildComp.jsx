import React from 'react';
export class ChildSearchTest extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      const results = e.target.value;
      this.props.onValueChange(results);
    }
  
    render() {
      return (
        <div>
            <input type="text" onChange={this.handleChange} />
        </div>
      );
    }
  }
export class ChildSearch extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.onClick = this.onClick.bind(this);
    }
  
    handleChange(e) {
      if(e.key === 'Enter'){
      const results = e.target.value;
      this.props.onValueChange(results);
      
      }
    }
    onClick(e) {
      const results = this.refs.search.value;
      this.props.onValueChange(results);
    }
  
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h2 className="text-center">Restaurant Finder</h2><br />
              {/* <!-- credit https://codepen.io/vubon/pen/raZZVg --> */}
              <div className="input-group add-on">
                <input type="text" ref="search" className="form-control" placeholder="Search" name="srch" id="srch" onKeyPress={this.handleChange}/>
              <div className="input-group-btn">
                  <button className="btn btn-custom" type="submit" id="btn1"  onClick={this.onClick}><i className="fa fa-search" aria-hidden="true"></i></button>
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }