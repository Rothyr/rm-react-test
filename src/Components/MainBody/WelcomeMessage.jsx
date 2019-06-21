import React, { Component } from 'react';
// import LogInOutBtn from './Navbar/LogInOutBtn';

// Welcome Message Component

class WelcomeMessage extends Component { 
   constructor() { 
      super();
      this.state = {
         showOrHide: "hidden",
         welcomeTitle: "Welcome to Satel Roadmapper",
         welcomeSubText: "Please log in to continue",
      };
   }

   componentDidMount() {
      setTimeout(
         function () {
            this.setState({ showOrHide: "" });
         }
            .bind(this), 2500
      );
   }

   render() { 
      const { welcomeTitle, welcomeSubText, showOrHide } = this.state;
      return (
         <div className={`info-container ${showOrHide}`}>
            <h2 className="w3-animate-opacity" id="infoTitle"> { welcomeTitle } </h2>
            <h4 className="w3-animate-opacity" id="infoText"> { welcomeSubText } </h4>
         </div>
      )
   }
}

export default WelcomeMessage;