import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import LoadingAnimation from './LoadingAnimation.jsx'

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
      </div>
    )
  }
}

export default App;