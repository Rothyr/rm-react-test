import React, { Component } from 'react';
import SelectDropdownValue from './SelectDropdownValue';
import InputField from './InputField';
import SubmitBtn from './SubmitBtn';
import ClearBtn from './ClearBtn';
import LogInOutBtn from './LogInOutBtn';

class SelectValueForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedValue: 'repo',
    };

  }

  changeTheSelection = event => {
    this.setState({
      selectedValue: event.target.value
    });
  }

  render() { 
    const { selectedValue } = this.state;
    return (
      <div className="api-actions">
        <form id="form" action="submit" method="POST" name="host">
          <SelectDropdownValue changeTheSelection={this.changeTheSelection} />
          <InputField selectedValue={selectedValue} />
          <SubmitBtn />
          <ClearBtn />
          <LogInOutBtn />
        </form>
      </div>
    )
  }
}

export  default SelectValueForm;