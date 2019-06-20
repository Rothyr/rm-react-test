import React, { Component } from 'react';
import SatelLogo from './SatelLogo.jsx';
import SelectValueForm from './SelectValueForm.jsx';

// Navbar Component

class Navbar extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <div className="w3-bar w3-light-grey">
          <div className="w3-bar-item w3-mobile">
            <SatelLogo />
          </div>
          <div className="w3-bar-item w3-mobile">
            <SelectValueForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar