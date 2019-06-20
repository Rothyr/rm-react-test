import React, { Component } from 'react';

class LogInOutBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeTheTextOnLogBtn = event => {
    this.setState({
      buttonText: event.target.value
    });
  }

  render() {
    const { buttonText } = this.state;
    return (
      <div className="user-actions">
        <a id={ buttonText } className="btn btn-primary btn-lg btn-logout btn-satel" href="/test/logout"> Log Out</a>
      </div>
    )
  }
}


export default LogInOutBtn;