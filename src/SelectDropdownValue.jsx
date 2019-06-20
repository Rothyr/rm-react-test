import React, { Component } from 'react';
import InputField from './InputField.jsx';


class SelectDropdownValue extends Component {
  constructor() {
    super();
    this.state = { 
      selectedValue: 'github',
    };

  }
  render() {
    const valueHasBeenChanged = value => {
      this.setState({
        selectedValue: value
      });
    }
    const { selectedValue } = this.state;
    return (
      <div>
        <select>
          <option onClick={valueHasBeenChanged} value={selectedValue}> Github </option>
          <option onClick={valueHasBeenChanged} value={selectedValue}> Jira </option>
        </select>
        <InputField selectedValue={selectedValue}  />
      </div>
    );
  }
}

export default SelectDropdownValue;