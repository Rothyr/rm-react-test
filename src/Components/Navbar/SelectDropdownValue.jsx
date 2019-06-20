import React, { Component } from 'react';


class SelectDropdownValue extends Component {
  
  render() {
    return (
      <div>
        <select onChange={this.props.changeTheSelection}>
          <option value='repo'> Github </option>
          <option value='project'> Jira </option>
        </select>
      </div>
    );
  }
}

export default SelectDropdownValue;