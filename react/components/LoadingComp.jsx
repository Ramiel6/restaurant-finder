import React from 'react';
export default class LoadingComp extends React.Component {
    render() {
      return (
        <div>
            <div className="loading">
                <div className="loading-text">
                    <i className="fa fa-cog fa-spin cog-font" aria-hidden="true"></i><p>Working..</p>
                </div>
            </div>
        </div>
      );
    }
  }
