import React, { Component } from 'react';
import SelectDropdownValue from './SelectDropdownValue.jsx';

class SelectValueForm extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() { 
    return (
      <div>
        <form>
          <SelectDropdownValue />
        </form>
      </div>
    )
  }
}

export  default SelectValueForm