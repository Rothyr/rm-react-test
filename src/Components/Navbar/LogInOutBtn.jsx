import React, { Component } from 'react';

class LogInOutBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonId: "qsLoginBtn",
      buttonText: "Log In",
      hrefLink: "/test/login"
    };
  }

  componentDidMount() {
  }

  changeBtnAttributes = (e) => {
    e.preventDefault();
    this.setState({
      buttonId: "qsLogout",
      buttonText: "Log Out",
      hrefLink: "/test/logout"
    });
  }

  render() {
    const { buttonId } = this.state;
    const { buttonText } = this.state;
    const { hrefLink } = this.state;
    return (
      <div className="user-actions">
        <a id={`${buttonId}`} onClick={this.changeBtnAttributes} className="btn btn-primary btn-lg btn-logout btn-satel" href={hrefLink}> {buttonText} </a>
      </div>
    )
  }
}


export default LogInOutBtn;