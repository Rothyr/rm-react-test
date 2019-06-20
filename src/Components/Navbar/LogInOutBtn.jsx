import React, { Component } from 'react';

class LogInOutBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-actions">
        <a id="" className="btn btn-primary btn-lg btn-logout btn-satel" href="/test/logout"> Log Out</a>
      </div>
    )
  }
}


export default LogInOutBtn;