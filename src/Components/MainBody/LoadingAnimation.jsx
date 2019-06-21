import React, { Component } from 'react';

class LoadingAnimation extends Component { 
  constructor() { 
    super();
    this.state = {
      showOrHide: ""
    };
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ showOrHide: "hidden" });
      }
        .bind(this), 2500
    );
  }

  render() {
    const { showOrHide } = this.state;
    return (
      <div className={`sk-folding-cube ${showOrHide}`}>
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    )
  }
}

export default LoadingAnimation;