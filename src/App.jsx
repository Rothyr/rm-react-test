import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import LoadingAnimation from './Components/MainBody/LoadingAnimation';
import WelcomeMessage from './Components/MainBody/WelcomeMessage';

// App Component

class App extends Component { 
  constructor() { 
    super();
    this.state = {}
  }

  render() { 
    return (
      <div>
        <Navbar /> 
        <LoadingAnimation />
        <WelcomeMessage />
      </div>
    )
  }
}

export default App;