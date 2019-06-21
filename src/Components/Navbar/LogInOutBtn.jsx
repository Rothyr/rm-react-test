import React, { Component } from 'react';

class LogInOutBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonId: "qsLoginBtn",
      buttonText: "Log In",
      hrefLink: "/test/login",
      userLoggedIn: false
    };
  }

  componentDidMount() {
  }

  changeBtnAttributes = (e) => {
    e.preventDefault();
      this.setState({
        buttonId: "qsLogout",
        buttonText: "Log Out",
        hrefLink: "/test/logout",
        userLoggedIn: true
      })
  }
  
  render() {
    const { buttonId, buttonText, hrefLink } = this.state;
    return (
      <div className="user-actions">
        <a id={`${buttonId}`} onClick={this.changeBtnAttributes} className="btn btn-primary btn-lg btn-logout btn-satel" href={hrefLink}> {buttonText} </a>
      </div>
    )
  }
}


export default LogInOutBtn;