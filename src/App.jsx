import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import LoadingAnimation from './LoadingAnimation'

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