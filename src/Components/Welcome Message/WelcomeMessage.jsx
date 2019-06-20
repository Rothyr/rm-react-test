import React, { Component } from 'react';

// Welcome Message Component

class WelcomeMessage extends Component { 
   constructor() { 
      super();
      this.state = {
         welcomeTitle: "Welcome to Satel Roadmapper",
         welcomeSubText: "Please log in to continue",
      };
   }

   render() { 
      const { welcomeTitle } = this.state;
      const { welcomeSubText } = this.state;
      return (
         <div className="info-container">
            <h2 className="w3-animate-opacity" id="infoTitle"> {welcomeTitle} </h2>
            <h4 className="w3-animate-opacity" id="infoText"> {welcomeSubText }</h4>
         </div>
      )
   }
}

export default WelcomeMessage;